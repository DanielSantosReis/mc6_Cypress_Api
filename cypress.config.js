const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://api.restfull-api.dev/objects",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
