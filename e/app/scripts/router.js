var Backbone = require('backbone');
var $ = require('jquery');

var models = require('./models/blog-models.js');
var views = require('./views/blog-views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'showLogIn',
    'blogger': 'showBloggerView',
    'blog/:id': 'showPost'
  },
  initialize: function(){
    this.blogs = new models.BlogCollection();
  },
  index: function(){
    var blogHome = new views.HomeView({collection: this.blogs});
    $('#blogPosts').append(blogHome.render().el);
    this.blogs.fetch();
    var blogCreate = new views.BlogFormView({collection: this.blogs});
    $('#blogCreate').append(blogCreate.render().el);
  },
  // login: function(){
  //   $('button').on('click', function(e){
  //     var $renderedModal = $(modal());
  //     $('.app').html($renderedModal);
  //     renderedModal.modal('show');
  //   })
  // }
  showPost: function(id){
    var blog = this.blogs.findWhere({'_id': id});
    // console.log(blog);
    var blogFull = new views.BlogPostView({model: blog});
    $('#blogCMS').html(blogFull.render().$el);
  }
});

var router = new AppRouter();

module.exports = router;
