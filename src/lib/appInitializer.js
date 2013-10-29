/**
 * @license
 * requirejs-template-project <https://github.com/majodev/physiogame>
 * Copyright 2013 Mario Ranftl (@majodev) <http://majodev.com>
 * Available under MIT License (MIT)
 */
define(["log", "underscore", "Poll", "appConfig"],
  function(log, _, Poll, appConfig) {

    var debugElement = document.getElementById("debugText"),
      debugTemplate = _.template("running since <%= seconds %> seconds"),
      runningForSeconds = 0;

    (function preloading() {
      // sets the loglevel
      log.setLevel(appConfig.logLevel);

      // debug test with log.
      log.debug("preloading, logLevel is " + appConfig.logLevel);

      // test the shimmed lib Poll
      Poll.start({
        name: "timerTest",
        interval: 1000,
        action: pollTimerTest
      });

    }());

    function pollTimerTest() {
      runningForSeconds += 1;

      // output it directly to the node.
      debugElement.innerHTML = debugTemplate({
        seconds: runningForSeconds
      });
    }
  }
);