const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/listings_page.spec.js",
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
  defaultCommandTimeout: 30000,
  viewportHeight: 800,
  viewportWidth: 1200,
});
