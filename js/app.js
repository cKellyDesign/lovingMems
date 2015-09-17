define([
  'jquery',
  'underscore',
  'backbone',
  'MemoryData',
  'models/MemoryModel',
  'views/MemoryView',
  'views/ModalView'], function ($, _, Backbone, MemoryData, MemoryModel, MemoryView, ModalView) {

    var Index = Backbone.View.extend({

      memoryCount: 0,
      winHeight: 0,
      endScreenTop: 0,

      initialize: function(){
        this.setBodyHeight();
        this.bindResize();
        this.initMemories();
        this.initModal();
      },

      setBodyHeight: function(){
        this.winHeight = $(window).height();
        $('body').css('height', this.winHeight);
      },

      initMemories: function(){
        var self = this;
        _.each(MemoryData, function (Memory, i) {
          $('#Memories').append('<li class="memory mem-' + i + '"></li>');
          var memory = new MemoryView({
            el: $('.mem-' +i),
            model: new MemoryModel(Memory)
          });
          self.memoryCount++;
        });
        this.positionEndScreen();
      },

      initModal: function(){
        var modal = new ModalView({ el: $('#ModalEl') });
      },

      bindResize: function() {
        var self = this;
        var winDebounced = _.debounce(function(){
          self.setBodyHeight();
          self.positionEndScreen();
        }, 200);
        $(window).resize(winDebounced);
      },

      positionEndScreen: function() {
        this.endScreenTop = (this.winHeight * this.memoryCount) + this.winHeight;
        $('#endScreen').css('top', this.endScreenTop);
      }

    });

    return new Index;
});