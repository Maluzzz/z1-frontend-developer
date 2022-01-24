// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    '^.+\\.(ts|js|html|svg|tsx|png)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '\\.(css|png)$': '<rootDir>/__mocks__/png.js',
  },
}
