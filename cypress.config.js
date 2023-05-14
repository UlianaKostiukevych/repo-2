const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responsetTimeout: 5000,
    viewportHeight: 660, 
    viewportWidth: 1000,
    specPattern: "cypress/e2e/**/*.cy.{js, jsx, ts, tsx}",
    //excludeSpecPattern: "cypress/e2e/**/*.cy.{js, jsx, ts, tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
