const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{parseXlsx({ filepath }){
        return new promise ((resolve, reject)=> {
          try{
            const xlData = xlsx.parse(fs.readFilesync(filepath))
            resolve(xlData);
          }catch(e){
            reject(e)
          }
        });
      }});
      // implement node event listeners here
    },
  },
});
