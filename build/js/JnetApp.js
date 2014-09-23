(function() {
  var JnetApp;

  JnetApp = (function() {
    JnetApp.prototype.headerHeight = 60;

    JnetApp.prototype.adjustSidebar = function() {
      if ($('.content').height() + this.headerHeight > $(window).height()) {
        return $('.side_l').stick_in_parent({
          parent: 'body',
          offset_top: 60
        });
      }
    };

    JnetApp.prototype.init = function() {
      var self;

      self = this;
      self.adjustSidebar();
      return true;
    };

    function JnetApp() {
      this.init();
    }

    return JnetApp;

  })();

  window.JnetApp = new JnetApp;

  $(window).trigger('scroll');

}).call(this);
