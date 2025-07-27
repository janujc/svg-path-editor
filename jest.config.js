module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  testEnvironment: 'jsdom',
};
