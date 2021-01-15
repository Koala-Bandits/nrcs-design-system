module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    //"prettier/@typescript-eslint",
    //"plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  ignorePatterns: [
    "**/config/**/*.*",
    "**/scripts/**/*.*",
    "**/build/**/*.*",
    "**/dist/**/*.*",
    "**/*.spec.ts",
    "**/*.spec.tsx",
  ],
  rules: {
    // this is off because typescript checks it, so we get duplicate warnings
    "no-unused-vars": 0,
    // fix for "'React' was used before it was defined"
    // see: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    // (you must disable the base rule as it can report incorrect errors)
    "no-use-before-define": "off",
    //
    // loosen typescript thumbscrews
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-implicit-any": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/ban-types": 0,
    //
    // make the build work
    "prettier/prettier": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/adjacent-overload-signatures": 0,
    //
    // for storybook stories
    "import/no-anonymous-default-export": 0,
    //
    // should definitely turn this back on and fix the errors
    // "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-use-before-define": 0,
    //
    // these should probably be turned back on and the errors fixed
    "prefer-const": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "no-useless-constructor": 0,
  },
};
