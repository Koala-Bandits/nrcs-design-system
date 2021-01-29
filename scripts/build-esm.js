const execa = require("execa");
const fs = require("fs-extra");
const path = require("path");
const paths = require("react-scripts/config/paths");
const semver = require("semver");

const npmPackageBuildDir = path.resolve(paths.appPath, "npmdist");

const packageJsonPath = path.resolve(paths.appPath, "package.json");
const packageNpmJsonPath = path.resolve(paths.appPath, "package.npm.json");

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

const updateVersion = async () => {
  const packageJson = require(packageJsonPath);
  const packageNpmJson = require(packageNpmJsonPath);
  packageJson.version = semver.inc(packageJson.version, "patch");
  packageNpmJson.version = packageJson.version;
  await fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 });
  await fs.writeJSON(packageNpmJsonPath, packageNpmJson, { spaces: 2 });
};

const buildEsm = async () => {
  await emitTypes();
  await babel("esm");

  fs.copy(`${paths.appSrc}/scss`, `${npmPackageBuildDir}/scss`, (err) =>
    err ? console.error(err) : console.log("copy scss folder successful")
  );

  await updateVersion();

  await fs.copyFile(
    `${paths.appPath}/package.npm.json`,
    `${npmPackageBuildDir}/package.json`
  );

  await fs.copyFile(
    `${paths.appPath}/README.md`,
    `${npmPackageBuildDir}/README.md`
  );
};

buildEsm();
