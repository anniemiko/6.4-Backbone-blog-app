var $ = require('jquery');
var Backbone = require('backbone');
var FormView = require('./views/blog-view.js');
var models = require('./models/models.js');


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    var blogCollection = new models.BlogCollection();
    var form = new FormView({collection: blogCollection});
    $('.app').append(form.render().el);
  }
});

var router = new AppRouter();

module.exports = router;
