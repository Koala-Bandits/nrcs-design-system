const execa = require("execa");
const paths = require("react-scripts/config/paths");
const fs_Extra = require("fs-extra");

const npmPackageBuildDir = "./npmdist";

const shell = (cmd) =>
  execa(cmd, { stdio: ["pipe", "pipe", "inherit"], shell: true });

const babel = (envName) =>
  shell(
    `babel ${paths.appSrc}/components -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --ignore  "**/*.stories.js","**/*.stories.tsx" --out-dir ${npmPackageBuildDir} --env-name "${envName}"`
  );

const buildEsm = async () => {
  await babel("esm");
  // await shell(`cpy ${paths.appPath}/package.esm.json ${paths.appBuild} --rename=package.json`);
  await shell(`cpy ${paths.appSrc}/*.scss ${npmPackageBuildDir}`);

  fs_Extra.copy(`${paths.appSrc}/scss`, `${npmPackageBuildDir}/scss`, (err) =>
    err ? console.error(err) : console.log("copy scss folder successful")
  );

  /*
	fs_Extra.copy(`${paths.appPath}/dist/types`, `${npmPackageBuildDir}/types`, (err) =>
		err ? console.error(err) : console.log("copy types folder successful")
    );
    */
};

buildEsm();
// -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --ignore "**/*.spec.*","**/*.test.*","**/*.story.*,"**/*.stories.*"
