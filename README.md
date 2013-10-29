<h1>requirejs-nodewebkit-template-project</h1>

A template project for building node-webkit apps in require.js style. 

Extracted from <a href="https://github.com/majodev/physiogame">physiogame</a>

<h2>Features</h2>

* example app that includes the libs lodash, log and Poll (shim).
* folder structure and base files
* requirejs configs for building, testing and development
* grunt tasks
  * building via r.js (almond or requirejs)
  * testing with mocha/chai on phantomjs
  * copying assets, minifying css
  * release builds for win/mac/linux (node-webkit)

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

Builds apps with node-webkit to 

That's it! Easy huh?!

<h2>Testing</h2>
needs <a href="http://phantomjs.org/">phantomjs</a> bin in path!

`grunt` or 

`grunt watch` for continuous testing

<h2>Copyright and Licenses</h2>
MIT license

(c) 2013 Mario Ranftl (<a href="http://www.majodev.com">majodev</a>).