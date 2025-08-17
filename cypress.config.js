const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://demoqa.com/webtables',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
          const cucumber = require('cypress-cucumber-preprocessor').default
    on('file:preprocessor', cucumber())
    
    },
  },
});
