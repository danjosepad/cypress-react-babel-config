const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Project uses browser activities
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
}