define([
  'jquery',
  'underscore',
  'backbone'], function ($, _, Backbone){
  var MemoryModel = Backbone.Model.extend({
    defaults: {
      memTitle: 'So many memories...',
      memDesc: ['Though full of love, these memories are only half complete without my other half! Since I am only one half of the equation, I\'m sending all my love to you to make it all complete!',
                'We have so many wonderful, beautiful memories together in this corner of the world it\'s hard to capture them all! But just walking through these streets instantly takes me back down memory lane, around every corner is yet another time that I have fallen even more deeply in love with you.',
                'With so many years to come, and so many adventures yet to be had, I cannot wait to experience them each with you. As we create new memories, let\'s remember those that have built our foundation!',
                'These are just a few...'],
      memCoverImg: 'imgs/covers/needle.jpg',
      assocMemImgs: ['imgs/assocMems/IMG_1352.jpg',
                     'imgs/assocMems/IMG_1358.jpg',
                     'imgs/assocMems/IMG_1363.jpg']
    }
  });
  return MemoryModel;
});