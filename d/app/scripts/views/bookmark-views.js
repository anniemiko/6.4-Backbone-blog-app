var Backbone = require('backbone');
var $ = require('jquery');
require('../utilities.js')

var models = require('../models/bookmark.js');
var formTemplate = require('../../templates/form.hbs');
var tagTemplate = require('../../templates/tags.hbs');
var tagDetailTemplate = require('../../templates/tagDetail.hbs');

var FormView = Backbone.View.extend({
tagName: 'form',
className: 'form-horizontal',
events: {
  'submit': 'addBookmark'
},
render: function(){
  this.$el.html(formTemplate());
  return this;
},
addBookmark: function(event){
  event.preventDefault();
  var formData = this.$el.serializeObject();
  this.collection.create(formData);
}
});

var BookmarkListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  initialize: function(config){
    this.listenTo(this.collection, 'add', this.addBookmark)
    // this.template = require(config.template);
  },
  render: function(){
    return this;
  },
  addBookmark: function(bookmark){
    var bookmarkItem = new BookmarkItemView({model: bookmark});
    this.$el.append(bookItem.render().el);
  }
});

var BookmarkItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: tagTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
  // initialize: function(config){
  //   this.template = require(config.template);
  // },
});

var BookmarkDetailView = Backbone.View.extend({
  className: 'detail',
  template: tagDetailTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
  }
})

module.exports = {
  FormView: FormView,
  BookmarkListView: BookmarkListView,
  BookmarkItemView: BookmarkItemView,
  BookmarkDetailView: BookmarkDetailView
};
