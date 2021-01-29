const execa = require("execa");
const fs = require("fs-extra");
const path = require("path");
const paths = require("react-scripts/config/paths");

const npmPackageBuildDir = path.resolve(paths.appPath, "npmdist");

const shell = (cmd) =>
  execa(cmd, { stdio: ["pipe", "pipe", "inherit"], shell: true });

const emitTypes = async () => {
  await shell(
    `tsc -d --emitDeclarationOnly --outDir npmdist --project tsconfig.types.json`
  );
};

const babel = async (envName) =>
  await shell(
    `babel ${paths.appSrc}/components -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --ignore  "**/*.stories.js","**/*.stories.tsx" --out-dir ${npmPackageBuildDir} --env-name "${envName}"`
  );

const buildEsm = async () => {
  await emitTypes();
  await babel("esm");

  fs.copy(`${paths.appSrc}/scss`, `${npmPackageBuildDir}/scss`, (err) =>
    err ? console.error(err) : console.log("copy scss folder successful")
  );

  await fs.copyFile(
    `${paths.appPath}/package.npm.json`,
    `${npmPackageBuildDir}/package.json`
  );
};

buildEsm();
