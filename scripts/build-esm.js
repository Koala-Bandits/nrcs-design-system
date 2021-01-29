const execa = require("execa");
const fs = require("fs-extra");
const path = require("path");
const paths = require("react-scripts/config/paths");

const npmPackageBuildDir = path.resolve(paths.appPath, "npmdist");
const tsConfig = require(paths.appTsConfig);

function deleteStoryTypes(dir) {
  for (const dirent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      // exclude pages
      if (p.endsWith("types\\pages")) {
        fs.removeSync(p);
      } else {
        deleteStoryTypes(p);
      }
    } else {
      // exclude story typings
      if (p.endsWith(".stories.d.ts")) {
        fs.removeSync(p);
      }

      // only include component typings, and exclude some specific files
      if (
        p.indexOf("types\\components") === -1 ||
        p.indexOf("CmpntTemplate.d.ts") >= 0 ||
        p.indexOf("HTMLTypes.d.ts") >= 0
      ) {
        fs.removeSync(p);
      }
    }
  }
}

async function emitTypes() {
  tsConfig.compilerOptions.noEmit = false;
  //  tsConfig.include = ["src/components/**/*.tsx", "src/components/**/*.ts"];
  await fs.writeJSON(paths.appTsConfig, tsConfig, { spaces: 2 });
  await shell(`tsc -d --emitDeclarationOnly --outDir npmdist/types`);
  tsConfig.compilerOptions.noEmit = true;
  //tsConfig.include = ["src"];
  await fs.writeJSON(paths.appTsConfig, tsConfig, { spaces: 2 });

  deleteStoryTypes("./npmdist");
}

const shell = (cmd) =>
  execa(cmd, { stdio: ["pipe", "pipe", "inherit"], shell: true });

const babel = (envName) =>
  shell(
    `babel ${paths.appSrc}/components -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --ignore  "**/*.stories.js","**/*.stories.tsx" --out-dir ${npmPackageBuildDir} --env-name "${envName}"`
  );

const buildEsm = async () => {
  await emitTypes();
  await babel("esm");

  fs.copy(`${paths.appSrc}/scss`, `${npmPackageBuildDir}/scss`, (err) =>
    err ? console.error(err) : console.log("copy scss folder successful")
  );

  fs.copyFile(
    `${paths.appPath}/package.esm.json`,
    `${npmPackageBuildDir}/package.json`
  );

  /*
  fs.move(`${npmPackageBuildDir}/types`, `${npmPackageBuildDir}`, (err) =>
    err ? console.error(err) : console.log("copy types successful")
  );
  */
};

buildEsm();
