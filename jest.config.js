const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Project uses browser activities
  moduleDirectories: [
    'node_modules', 
    path.join(__dirname, 'src'), 
    'shared', 
    path.join(__dirname, 'test')
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 15,
      functions: 34,
      lines: 29,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    }
  }
}