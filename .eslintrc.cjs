/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  globals: {
    process: true,
  },
  // plugins: ["@typescript-eslint"],
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['public/dist', 'server/build', 'webpack.config.cjs'],
};
