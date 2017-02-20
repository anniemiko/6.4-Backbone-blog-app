var Backbone = require('backbone');
var $ = require('jquery');

var blogHomepageTemplate = require('../../templates/blog-home.hbs');
var blogFormTemplate = require('../../templates/blog-form.hbs');
var blogListTemplate = require('../../templates/blog-list.hbs');
var loginTemplate = require('../../templates/login-modal.hbs');
var blogEntryTemplate = require('../../templates/blog-entry.hbs');


var HomeView = Backbone.View.extend({
  className: 'blog-home',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost)
  },
  render: function(){
    return: this;
  },
  addPost: function(post){
    var bloglist = new BlogPostView({model: post});
    this.$el.append(blogList.render().el);
  }
});

var LogInView = Backbone.View.extend({
  className: 'log-in',
  template: loginTemplate,
  render: function(){
    this.$el.html(template());
    return: this;
  }
});

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'form-horizontal blog-form',
  formTemplate: blogFormTemplate,
  events: {
    'submit': 'addBlog'
  },
  render: function(){
    return: this;
  },
  addBlog: function(e){
    e.preventDefault();
    var $blogEntryTitle = $('#blogTitle');
    this.collection.create({blogTitle: $blogEntryTitle.val()});
    $blogEntryTitle.val('');
    var $blogEntryBody = $('#blogBody');
    this.collection.create({blogBody: $blogEntryBody.val()});
    $blogEntryBody.val('');
    var $blogEntryImage = $('#blogImage');
    this.collection.create({blogImage: $blogEntryImage.val()});
    $blogEntryImage.val('');
  }
});

var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost);
  },
  render: function(){
    return: this;
  },
  addPost: function(post){
    var blogList = new BlogItemView({model: post});
    this.$el.append(blogList.render().el)
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'blog-item',
  template: blogListTemplate,
  render: function(){
    var listTemplate = this.template(this.model.toJSON());
    this.$el.html(listTemplate);
    return this;
  }
})

var BlogPostView = Backbone.View.extend({
  className: 'blog-post',
  template: blogEntryTemplate,
  render: function(){
    var postTemplate = this.template(this.model.toJSON());
    this.$el.html(postTemplate);
    return: this;
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
