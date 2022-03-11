module.exports = {
  preset: '@nuxt/test-utils',
  collectCoverageFrom: ['lib/**/*.js', '!lib/plugin.js'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/lib/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/lib/$1',
  },
}
