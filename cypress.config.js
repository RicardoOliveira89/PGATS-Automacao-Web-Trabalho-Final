const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: true,
      json: true
    },
  },
});