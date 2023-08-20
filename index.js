
const https = require("https");

// Detecting the current time to calculate how much
// time each process will take.
const start = Date.now();

// A function with the code for making a request
function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", (data) => {});

      res.on("end", () => {
        console.log(`${Date.now() - start}ms`);
      });
    })
    .end();
}

// Making a request multiple times...
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
