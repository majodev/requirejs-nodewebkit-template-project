define(["appConfig", "underscore"],
  function(appConfig, _) {

    describe("appConfig", function() {

      it("has field loglevel", function() {
        _.isUndefined(appConfig.logLevel).should.equal(false);
      });

    });
  });