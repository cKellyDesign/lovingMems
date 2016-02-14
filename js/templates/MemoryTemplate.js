define([], function(){
  var MemoryTemplate = '<% if (memCoverImg) { %>' + 
    '<div class="coverImg" style="background-image: url(\'<%= memCoverImg %>\')"></div>' +
      '<div class="memoryContent">' +
      '<% } else { %>' +
      '<div class="memoryContent full">' +
      '<% } %>' +
        '<h3 id="<%= memSlug %>"><%= memTitle %></h3>' +
        '<% _.each(memDesc, function(par) { %>' +
          '<p><%= par %></p>' +
        '<% }); %>' +
        '<div class="assocMems">' +
          '<ul>' +
          '<% _.each(assocMemImgs, function(img) { %>' +
            '<li class="assocMemsItem">' +
              '<a href="<%= img %>" class="assocMemsLink">' +
                '<img class="assocMemsImg" src="<%= img %>"/>' +
              '</a>' +
            '</li>' +
          '<% }); %>' +
          '</ul>' +
        '</div>' +
      '</div>';
      return MemoryTemplate;
});