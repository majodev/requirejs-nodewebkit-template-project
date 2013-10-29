// Configure RequireJS
require.config({

  // TODO: make this cleaner and use mainConfigFile from main.js!
  baseUrl: "src/lib/",
  paths: {
    "underscore": "../../node_modules/lodash/lodash", // registers as _
    "log": "../vendor/loglevel/lib/loglevel", // registers as log
    "Poll": "../vendor/polljs/poll", // not AMD compliant, hence shimming.
    "spec": "../spec",
    "integration": "../integration"
  },
  shim: {
    "Poll": { // example shimming of the non AMD-compliant Poll lib
      exports: "Poll",
      init: function () { 
        console.log("r_shim: Poll");
      }
    }
  },
  urlArgs: "v=" + (new Date()).getTime()
});

// Require libraries target spec and integration subpackages directly.
require(["spec/specTests", "integration/integrationTests"],
  function() {
    console.log("running tests...");

    // Start runner, conditional is needed here for phantomjs!
    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    } else {
      mocha.run();
    }
  }
);