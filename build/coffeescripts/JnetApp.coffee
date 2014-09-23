class JnetApp
  headerHeight: 60
  adjustSidebar: ()->
    if $('.content').height()+ @headerHeight > $(window).height()
      $('.side_l').stick_in_parent
        parent:'body'
        offset_top:60
        #inner_scrolling:on

  init: ()->
    self = @
    self.adjustSidebar()
    on

  constructor: ()->
    @init()


window.JnetApp = new JnetApp
$(window).trigger('scroll')

