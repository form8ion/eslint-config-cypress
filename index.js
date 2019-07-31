module.exports = {
  plugins: ['chai-friendly'],

  extends: ['plugin:cypress/recommended'],

  rules: {
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error'
  }
};
