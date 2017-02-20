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
    $('.app').html(blogHome.render().el);
    this.blogs.fetch();
  },
});

var router = new AppRouter();

module.exports = router;
