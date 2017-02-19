var Backbone = require('backbone');
var $ = require('jquery');

// var TagCollection = Backbone.Collection.extend({
//   model: Backbone.Model,
// });

var BookmarkModel = Backbone.Model.extend({
  idAttribute: '_id',
  // defaults: {
  //   title: 'title',
  //   tags: ['']
  // }
  // defaults:{
  //   title: 'title',
  //   tags: new TagCollection
  // },
  // toJSON: function(){
  //   var tagData = this.get('tags').toJSON();
  //   this.set('tags', tagData);
  //   return Backbone.Model.prototype.toJSON.call(this);
  // }
});

var BookmarkCollection = Backbone.Collection.extend({
  model: BookmarkModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mikobookmarks'
  // parse: function(data){
  //   return data.map(function(bookmark){
  //     bookmark.tags = new TagCollection(bookmark.tags);
  //   })
  // }
});

var TagCollection = Backbone.Collection.extend({
  model: Backbone.Model
});

module.exports = {
  BookmarkModel: BookmarkModel,
  BookmarkCollection: BookmarkCollection,
  TagCollection: TagCollection
};
