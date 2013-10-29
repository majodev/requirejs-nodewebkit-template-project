// Configure RequireJS
require.config({
  baseUrl: "src/lib/",
  paths: {
    "underscore": "../../node_modules/lodash/lodash", // registers as _
    "log": "../vendor/loglevel/lib/loglevel", // registers as log
    "Poll": "../vendor/polljs/poll" // not AMD compliant, hence shimming.
  },
  shim: {
    "Poll": { // example shimming of the non AMD-compliant Poll lib
      exports: "Poll",
      init: function () { 
        console.log("r_shim: Poll");
      }
    }
  }
});

// Start the main app logic.
require(["appInitializer"],
  function(appInitializer) {}
);