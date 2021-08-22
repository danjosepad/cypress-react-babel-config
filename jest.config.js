module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Project uses browser activities
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  }
}