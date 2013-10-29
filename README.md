<h1>requirejs-template-project</h1>


<h2>Building</h2>
`npm install -d`

`bower install -d`

`grunt build`

The grunt task `grunt build` takes care of all js/css minifying and assets/templates copying to the folder `build`. 

Fire up your http-server in project root, e.g. <a href="https://npmjs.org/package/http-server">simple http-server for node</a>

`http-server -c-1`

Go to `localhost:8080/build` and enjoy


<h2>Releasing</h2>

`grunt release`

That's it! Easy huh?!

<h2>Testing</h2>
needs <a href="http://phantomjs.org/">phantomjs</a> bin in path!

`grunt` or 

`grunt watch`


<h2>Copyright and Licenses</h2>


(c) 2013 Mario Ranftl (<a href="http://www.majodev.com">majodev</a>).