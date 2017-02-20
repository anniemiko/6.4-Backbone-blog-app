var Backbone = require('backbone');
var $ = require('jquery');
require('../utilities.js');

var blogHomepageTemplate = require('../../templates/blog-home.hbs');
var blogFormTemplate = require('../../templates/blog-form.hbs');
var blogListTemplate = require('../../templates/blog-list.hbs');
var loginTemplate = require('../../templates/login-modal.hbs');
var blogEntryTemplate = require('../../templates/blog-entry.hbs');


var HomeView = Backbone.View.extend({
  className: 'blog-home',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addBlog)
  },
  render: function(){
    return this;
  },
  addBlog: function(post){
    var blogList = new BlogPostView({model: post});
    this.$el.append(blogList.render().el);
  }
});

var LogInView = Backbone.View.extend({
  className: 'log-in',
  template: loginTemplate,
  render: function(){
    this.$el.html(template());
    return this;
  }
});

var BlogFormView = Backbone.View.extend({
  className: 'form-group blog-form',
  events: {
    'submit': 'addBlog'
  },
  render: function(){
    this.$el.html(blogFormTemplate());
    return this;
  },
  addBlog: function(event){
    event.preventDefault();
    // var $blogEntryTitle = $('#blogTitle');
    // this.collection.create({blogTitle: $blogEntryTitle.val()});
    // $blogEntryTitle.val('');
    // var $blogEntryBody = $('#blogBody');
    // this.collection.create({blogBody: $blogEntryBody.val()});
    // $blogEntryBody.val('');
    // var $blogEntryImage = $('#blogImage');
    // this.collection.create({blogImage: $blogEntryImage.val()});
    // $blogEntryImage.val('');
    // return this;
    var formData = this.$el.serializeObject();
    this.collection.create(formData);
  }
});

var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost);
  },
  render: function(){
    return this;
  },
  addPost: function(post){
    var blogList = new BlogItemView({model: post});
    this.$el.append(blogList.render().el)
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'blog-item',
  itemtemplate: blogListTemplate,
  render: function(){
    var listTemplate = this.itemtemplate(this.model.toJSON());
    this.$el.html(listTemplate);
    return this;
  }
});

var BlogPostView = Backbone.View.extend({
  className: 'blog-post',
  blogtemplate: blogEntryTemplate,
  render: function(){
    var postTemplate = this.blogtemplate(this.model.toJSON());
    this.$el.html(postTemplate);
    return this;
  }
});

module.exports = {
  HomeView: HomeView,
  LogInView: LogInView,
  BlogFormView: BlogFormView,
  BlogListView: BlogListView,
  BlogItemView: BlogItemView,
  BlogPostView: BlogPostView
};
