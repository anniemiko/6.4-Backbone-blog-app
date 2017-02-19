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

var ListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'form-control',
  // initialize: function(config){
  //   this.template = require(config.template);
  // },
  render: function(){
    return this;
  }
});

var ListItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'form-control',
  initialize: function(config){
    this.template = require(config.template);
  },
  render: function(){
    return this;
  }
});

module.exports = {
  FormView: FormView,
  ListView: ListView,
  ListItemView: ListItemView
};
