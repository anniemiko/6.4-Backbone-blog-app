var Backbone = require('backbone');
var $ = require('jquery');

var models = require('../models/blog-models.js');
var blogListTemplate = require('../../template/blog-list.hbs');
var blogEntryTemplate = require('../../template/blog-full-entry.hbs');

var BlogListingView = Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost)
  },
  render: function(){
    return this;
  },
  addPost: function(post){
    var blogList = new BlogEntryView({model: post});
    this.$el.append(blogList.render().el);
  }
});

var BlogEntryView = Backbone.View.extend({
    tagName: 'li',
    className: 'blog-entry',
    template: blogListTemplate,
    render: function(){
      var listTemplate = this.template(this.model.toJSON());
      this.$el.html(listTemplate);
      return this;
    }
});

var BlogFullView = Backbone.View.extend({
  className: 'blog-post',
  template: blogEntryTemplate,
  render: function(){
    var blogTemplate = this.template(this.model.toJSON());
    this.$el.html(blogTemplate);
    return this;
  }
});

module.exports = {
  BlogListingView: BlogListingView,
  BlogFullView: BlogFullView,
  BlogEntryView: BlogEntryView
}
