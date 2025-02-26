module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    node: true,
    "cypress/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest", "cypress"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": "error",
    "react/prop-types": 0,
  },
  globals: {
    process: "readonly",
  },
  settings: {
    react: {
      version: "detect", // Specify the React version as "detect"
    },
  },
};
