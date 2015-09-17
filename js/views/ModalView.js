define([
  'jquery',
  'underscore',
  'backbone',
  '../templates/ModalTemplate'], function ($, _, Backbone, ModalTemplate){
  var ModalView = Backbone.View.extend({

    template: _.template(ModalTemplate),

    initialize: function(){
      var self = this;
      $(window).on('asssocMemClick', function (e, data){
        self.onModalOpen(data);
      });
      $('#ModalOverlay').on('click', function (e){
        self.onModalClose();
      });
      $(document).keyup(function(e) {
        if (e.keyCode == 27) self.onModalClose();
      });
    },

    render: function (src) {
      src = src.replace('th/', '').replace('.JPG', '.jpg');
      this.$el.html(this.template({ imgSrc: src }));
    },

    onModalOpen: function (data) {
      this.render(data);
      $('#ModalOverlay').show();
      this.$el.show();
    },

    onModalClose: function () {
      $('#ModalOverlay').hide();
      this.$el.hide();
    }

  });
  return ModalView;
})