/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {

  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],

  // transform: {
  //   "^.+\\.(js|jsx|mjs)$": '<rootDir>/src/setupTests.js'
  // },

  testEnvironment: 'jsdom',
  // CIERTA CONFIGURACIÓN PARA REALIZAR TESTING
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  collectCoverage: true,

  coverageDirectory: 'coverage',
};
