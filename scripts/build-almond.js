// Require
var requirejs = require('requirejs');
var fs = require('fs');
var path = require('path');
var pjson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json")));

// Configure RequireJS
var config = {
  baseUrl: "src/lib/", // Base URL
  mainConfigFile: "scripts/main.js", // include all dependencies from main
  optimize: "uglify2",
  preserveLicenseComments: true,
  include: ["appInitializer"],
  logLevel: 0,
  waitSeconds: 7,
  name: "../../node_modules/almond/almond", // Name of script to start building from
  insertRequire: ["appInitializer"],
  out: 'build/build.min.js' // Where to output
};

// Optimize our script
requirejs.optimize(config, function(buildResponse) {
  var contents = fs.readFileSync(config.out, 'utf-8');
});