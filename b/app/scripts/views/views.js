var Backbone = require('backbone');
var $ = require('jquery');
var models = require('../models/models.js');
var formTemplate = require('../../templates/person-template.hbs');
require('../utilities');

var NewPersonView = Backbone.View.extend({
  tagName: 'form',
  className: 'newPerson',
  events: {
    'submit': 'addPerson'
  },
  render: function(){
    this.$el.html(formTemplate());
    return this
  },
  addPerson: function(event){
    event.preventDefault();
    var formInfo = this.$el.serializeObject();
    this.collection.create(formInfo);
  }
});

module.exports = NewPersonView;
