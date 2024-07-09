const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx');
const fs = require('fs');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // Setup mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Register custom task for parsing XLSX files
      on('task', {
        parseXlsx({ filepath }) {
          return new Promise((resolve, reject) => {
            try {
              const xlData = xlsx.parse(fs.readFileSync(filepath));
              resolve(xlData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
    }
  }
});