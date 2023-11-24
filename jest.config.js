const config = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*|react-native-gesture-handler)',
  ],
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/*'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  collectCoverage: true,
  verbose: !process.env.CI,
  coverageReporters: ['text-summary', 'lcov', 'cobertura'],
  moduleDirectories: ['node_modules', 'app'],
  reporters: process.env.CI
    ? [
        'default',
        [
          'jest-junit',
          {
            suiteName: 'Jest tests',
            outputName: 'junit.xml',
            outputDirectory: './coverage',
            classNameTemplate: '{classname}',
            titleTemplate: '{title}',
            suiteNameTemplate: '{filename}',
          },
        ],
      ]
    : ['default'],

  globals: {
    __DEV__: true,
  },
};

module.exports = config;
