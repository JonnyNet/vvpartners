module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: 'dist/test-coverage',
  collectCoverageFrom: ['src/app/**/*.ts'],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coveragePathIgnorePatterns: [
    "setup-jest.ts",
    "node_modules",
    "test-config",
    "interfaces",
    "jestGlobalMocks.ts",
    ".module.ts",
    "<rootDir>/src/app/main.ts",
    ".mock.ts",
    "index.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50
    }
  },
  roots: ['<rootDir>/src/']
};
