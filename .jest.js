module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  testRegex: '.*\\.test\\.js$',
  collectCoverageFrom: [
    'source/**/*.{js,jsx}',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  setupFiles: [
    '<rootDir>/tests/setup.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  globals: {
    "ts-jest": {
      "skipBabel": true
    }
  }
};
