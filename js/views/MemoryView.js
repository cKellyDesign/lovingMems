define([
  'jquery',
  'underscore',
  'backbone',
  '../templates/MemoryTemplate'], function ($, _, Backbone, MemoryTemplate){
    var MemoryView = Backbone.View.extend({

      template: _.template(MemoryTemplate),

      events: {
        'click .assocMemsLink' : 'onAssocMemClick'
      },

      initialize: function(){
        this.render();
      },
      
      render: function(){
        this.$el.html(this.template(this.model.attributes));
      },

      onAssocMemClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        $(window).trigger('asssocMemClick', $(e.target).attr('src'));
      }
    });
    return MemoryView;
});