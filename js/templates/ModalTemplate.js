define([], function(){
  var ModalTemplate = '<div class="modalContainer">' +
      '<a href="<%= imgSrc %>" target="_blank" class="modalLink">' +
        '<img src="<%= imgSrc %>" class="modalImg">' +
      '</a>' +
    '</div>';
  return ModalTemplate;
});