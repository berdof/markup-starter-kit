(function() {
  var App;

  App = (function() {
    App.prototype.init = function() {
      var self;

      self = this;
      return true;
    };

    function App() {
      this.init();
    }

    return App;

  })();

  window.App = new App;

}).call(this);
