module.exports = {
  root: true,
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": 2,
    "prettier/prettier": "error",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unused-vars": 2,
      },
    },
  ],
};
