const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.spec.js",
    pageLoadTimeout: 120000,
  },
  defaultCommandTimeout: 60000,
  viewportHeight: 800,
  viewportWidth: 1200,
});
