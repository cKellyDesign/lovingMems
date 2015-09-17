require.config({
  paths: {
    jquery: 'libs/jquery-2.1.4.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone : {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['app'], function(App){
  App;
});