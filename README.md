<h1>requirejs-nodewebkit-template-project</h1>

A template project for building node-webkit apps in require.js style. Provides complete integration for testing, building and releasing apps.

The goal of this project is to provide an entry point for developing your own apps with require.js and node-webkit.

Extracted from <a href="https://github.com/majodev/physiogame">physiogame</a>

<h2>Features</h2>

* example app, includes libs <a href="http://lodash.com/">lodash</a>, <a href="https://github.com/pimterry/loglevel">loglevel</a> and <a href="https://github.com/mtrpcic/polljs">polljs</a> (shim test).
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

<h2>Important files</h2>

`app.css`: your main css file, will be minified into `build/app.min.css`

`app.js` and `build-templates/app.js`: development startup script and productive startup script, productive will be minified into `build/app.min.js`

`bower.json`: dependencies from bower package repository (will be installed into `src/vendor/`)

`Gruntfile.js`: all grunt build and release tasks

`index.html` and `build-templates/index.html`: main html file with app.js or app.min.js in body

`package.json`: dependencies from npm package repository (will be installed into `node_modules`)

`testrunner.html`: main file to start spec and integration tests (phantomjs compatible)

`scripts/build-almond.js`: r.js build file (uses almond, smaller footprint, better compatibility with node-webkit)

`scripts/build-requirejs.js`: r.js build file (uses requirejs, might cause problems with globale require of node-webkit and requirejs)

`scripts/main.js`: main requirejs config of application and start entry point

`scripts/testrunner.js`: main testrunner js file, starts a test cycle

<h2>Installation</h2>
`npm install -d`

`bower update`

Fire up your http-server in project root, e.g. <a href="https://npmjs.org/package/http-server">simple http-server for node</a> is straightforward: `npm install http-server -g`.

`http-server -c-1`

Go to `localhost:8080` and enjoy

<h2>Building</h2>
`grunt build`

The grunt task `grunt build` takes care of all js/css minifying and assets/templates copying to the folder `build`. 

Fire up your http-server in project root, e.g. <a href="https://npmjs.org/package/http-server">simple http-server for node</a> is straightforward: `npm install http-server -g`.

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