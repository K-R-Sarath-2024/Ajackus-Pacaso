const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.spec.js",
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    video: true,
    videoUploadOnPasses: false,
    trashAssetsBeforeRuns: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    }
  },
  defaultCommandTimeout: 60000,
  viewportHeight: 800,
  viewportWidth: 1200,
});
