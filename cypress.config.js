// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     reporter: 'cypress-mochawesome-reporter',
//     baseUrl: 'https://automationexercise.com',
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on)
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: false, // gera só JSONs agora
      json: true
    },
  },
});

