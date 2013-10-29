<h1>requirejs-nodewebkit-template-project</h1>

A template project for building node-webkit apps in require.js style. Provides complete integration for testing, building and releasing apps.

Extracted from <a href="https://github.com/majodev/physiogame">physiogame</a>

<h2>Features</h2>

* example app that includes the libs <a href="http://lodash.com/">lodash</a>, <a href="https://github.com/pimterry/loglevel">loglevel</a> and <a href="https://github.com/mtrpcic/polljs">polljs</a> (shim).
* folder structure and base files
* requirejs configs for building, testing and development
* grunt tasks
  * building via r.js (almond or requirejs)
  * testing with mocha/chai on phantomjs
  * copying assets, minifying css
  * release builds for win/mac/linux (node-webkit)

<h2>Directory layout</h2>

`assets` all your assets, will be copied automatically to build with grunt task

`build` (created via grunt build task) the optimized build app

`build-templates` files that are used during the grunt build task

`node_modules` (npm) 3rd party libs

`release` (created via grunt release task) binary app for win/mac/linux

`scripts` startup scripts for requirejs, r.js build config and testrunner

`src/integration` YOUR app integration tests

`src/libs` YOUR app source files

`src/spec` YOUR app spec tests

`src/vendor` (bower) 3rd party libs

<h2>Installation</h2>
`npm install -d`

`bower update`

Fire up your http-server in project root, e.g. <a href="https://npmjs.org/package/http-server">simple http-server for node</a> 

`http-server -c-1`

Go to `localhost:8080` and enjoy

<h2>Building</h2>
`grunt build`

The grunt task `grunt build` takes care of all js/css minifying and assets/templates copying to the folder `build`. 

Fire up your http-server in project root, e.g. <a href="https://npmjs.org/package/http-server">simple http-server for node</a>

`http-server -c-1`

Go to `localhost:8080/build` and enjoy

<h2>Releasing</h2>
`grunt release`

Builds apps for win/mac/linux to the folder `release`. 

That's it! Easy huh?!

<h2>Testing</h2>
needs <a href="http://phantomjs.org/">phantomjs</a> bin in path!

`grunt` or 

`grunt watch` for continuous testing

<h2>Copyright and Licenses</h2>
MIT license

(c) 2013 Mario Ranftl (<a href="http://www.majodev.com">majodev</a>).