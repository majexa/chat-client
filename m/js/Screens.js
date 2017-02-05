var Screens = new Class({

  initialize: function(parent, currentElement) {
    var head = document.head || document.getElementsByTagName('head')[0];
    this.style = document.createElement('style');
    this.style.type = 'text/css';
    head.appendChild(this.style);
    this.initStyle();
    window.addEvent('resize', this.initStyle.bind(this));
    var screens = new Element('div.screens').inject(new Element('div.screensFrame').inject(parent));
    new Element('div.screen.left').inject(screens);
    var currentScreen = new Element('div.screen.current').inject(screens);
    new Element('div.screen.right').inject(screens);
    screens.removeClass('reset');
    currentElement.inject(currentScreen);
  },
  initStyle: function() {
    var w = window.innerWidth;
    var css = '.slidesFrame { width: ' + w + 'px }' + '\n';
    css += '.screen { width: ' + w + 'px }' + '\n';
    css += '.screens { width: ' + (w * 3 + 100) + 'px; transform: translate3d(-' + (w) + 'px, 0, 0); }' + '\n';
    css += '.screensFrame, .screens, .screen { height: ' + window.innerHeight + 'px; }' + '\n';
    css += '.screens.move_right { transform: translate3d(-' + (w * 2) + 'px, 0, 0); }' + '\n';
    if (this.style.styleSheet) {
      this.style.styleSheet.cssText = css;
    } else {
      this.style.innerHTML = '';
      this.style.appendChild(document.createTextNode(css));
    }
  },
  changeScreen: function(el, direction) {
    if (!direction) direction = 'right';
    var nextScreen = document.getElement('.' + direction);
    var currentScreen = document.getElement('.current');
    nextScreen.set('html', '');
    el.inject(nextScreen);
    var screens = document.getElement('.screens');
    screens.addClass('move_' + direction);
    screens.removeClass('reset');
    setTimeout(function() {
      currentScreen.set('html', '');
      el.inject(currentScreen);
      screens.removeClass('move_' + direction);
      screens.addClass('reset');
    }, 500);
  }
});

window.Screens = Screens;