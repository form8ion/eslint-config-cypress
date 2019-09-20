module.exports = {
  plugins: [
    'chai-friendly',
    'mocha'
  ],

  extends: [
    'plugin:cypress/recommended',
    'plugin:mocha/recommended'
  ],

  rules: {
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error',
    'mocha/no-skipped-tests': 'off',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-setup-in-describe': 'off'
  }
};
