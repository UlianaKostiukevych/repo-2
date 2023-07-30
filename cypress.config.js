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
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx}",
    excludeSpecPattern: "cypress/e2e/**/*.cy.{js, jsx, ts, tsx}",
    trashAssetsBeforeRuns: true,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  /*env: {
    API_BASE_URL: "https://reqres.in",
    BOOKER_API_URL: "https://restful-booker.herokuapp.com",
  },*/
});
