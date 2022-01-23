// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    '^.+\\.(ts|js|html|svg|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
  },
}
