
var Backbone = require('backbone');
var formTemplate = require('../../templates/blog-form.hbs')
require('../utilities.js');

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'form-horizontal blog-post',
  events: {
    'submit': 'addBlog'
  },
  render: function(){
    this.$el.html(formTemplate());
    return this;
  },
  addBlog: function(event){
    event.preventDefault();
    var formData = this.$el.serializeObject();
    this.collection.create(formData);
  }
});

module.exports = BlogFormView;
