var Backbone = require('backbone');
var $ = require('jquery');

var models = require('./models/blog-models.js');
var views = require('./views/blog-views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id': 'showBlog'
  },
  initialize: function(){
    this.blogCollection = new models.BlogCollection();
  },
  index: function(){
    // var blogEntry = new models.BlogEntry();
    // console.log(blogEntry);
    var blogList = new views.BlogListingView({collection: this.blogCollection});
    $('.app').html(blogList.render().$el);
    this.blogCollection.fetch();
    console.log(this.blogCollection);
  },
  showBlog: function(id){
    var blog = this.blogCollection.findWhere({'_id': id});
    console.log(blog);
    var blogFull = new views.BlogFullView({model: blog});
    $('.app').html(blogFull.render().$el);
  }
});

var router = new AppRouter();

module.exports = router;
