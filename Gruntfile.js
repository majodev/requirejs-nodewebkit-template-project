module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      "mocha-phantomjs": { // also possible, only display dots for test cases: mocha-phantomjs -R dothttp://localhost:8080/testrunner.html
        command: "mocha-phantomjs http://localhost:8080/testrunner.html", // http-server must run on port 8080!
        options: {
          stdout: true,
          stderr: true
        }
      },
      "build-requirejs": {
        command: "node scripts/build.js",
        options: {
          stdout: true,
          stderr: true
        }
      },
      "build-almond": {
        command: "node scripts/build-almond.js",
        options: {
          stdout: true,
          stderr: true
        }
      }
    },
    copy: {
      "assets": {
        files: [{
          src: ["assets/**/*.json", "assets/**/*.png", "assets/**/*.mp3",
            "assets/**/*.ogg", "assets/**/*.m4a", "assets/**/*.eot",
            "assets/**/*.ttf", "assets/**/*.woff", "assets/**/*.ico"
          ],
          dest: "build/"
        }]
      },
      "build-templates": {
        files: [{
          expand: true,
          cwd: "build-templates/",
          src: ["**/*.json", "**/*.html"],
          dest: "build/"
        }]
      },
      "legal": {
        files: [{
          expand: true,
          cwd: ".",
          src: ["LICENSE.md"],
          dest: "build/"
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/app.min.js': ['build-templates/app.js']
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM:s") %> */'
      },
      css: {
        src: [
        "app.css"
        ],
        dest: "build/app.min.css"
      }
    },
    watch: {
      jsFiles: {
        files: ["src/lib/**/*.js", "src/spec/**/*.js"],
        tasks: ["shell:mocha-phantomjs"]
      }
    },
    nodewebkit: {
      options: {
        build_dir: './release', // target
        mac: true,
        win: true,
        linux32: true,
        linux64: true,
        version: '0.7.5',
        credits: "./build/credits.html"
      },
      src: ['./build/**/*'] // source
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask("default", "shell:mocha-phantomjs"); // default runs the tests, needs running http-server
  grunt.registerTask("build", ["shell:build-almond", "uglify", "copy:build-templates", "copy:assets", "cssmin", "copy:legal"]);
  grunt.registerTask("release", ["build", "nodewebkit"]);
  grunt.registerTask("releasebuild", ["nodewebkit"]);
};