define([
  '../models/MemoryModel'], function (MemoryModel){
    var MemoriesCollection = Backbone.Collection.extend({
      model: MemoryModel;
    });
    return MemoriesCollection;
  })