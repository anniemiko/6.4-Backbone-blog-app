var Backbone = require('backbone');
var $ = require('jquery');

var models = require('../scripts/models/bookmark.js');
var views = require('../scripts/views/bookmark-views.js');

var formTemplate = require('../templates/form.hbs');
var tagTemplate = require('../templates/tags.hbs');
var tagDetailTemplate = require('../templates/tagDetail.hbs');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'bookmarks/:tag': 'showTags'
  },
  initialize: function(){
    this.bookMarks = new models.BookmarkCollection();
  },
  index: function(){
    var bookmarks = new models.BookmarkCollection();
    var form = new views.FormView({collection: bookmarks});
    $('.bookmark-form').append(form.render().el);
    this.bookMarks.fetch();
  },
  showTags: function(){
    var tag = this.bookMarks.findWhere({'tag': tag});
    var tagDetail = new views.BookmarkDetailView({model: tag});
    $('.app').html(tagDetail.render().el);
    // new views.ListView({template: '../templates/tags.hbs'}) ;
    // $('.list-view').append(template.render().el);
  }
});

var router = new AppRouter();

module.exports = router;
