module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['import', 'html', 'react', 'prettier', 'babel'],
  rules: {
    'no-unused-vars': 1,
    'no-var': 'warn',
    'prettier/prettier': 'error',
    'arrow-parens': ['error', 'as-needed'],
  },
};
