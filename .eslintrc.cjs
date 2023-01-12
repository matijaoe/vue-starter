/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: '@antfu',
  rules: {
    'no-console': 'warn',
    'no-tabs': 'off',
    'curly': [
      'error',
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
