var Backbone = require('backbone');
var $ = require('jquery');

var BlogModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var BlogCollection = Backbone.Collection.extend({
  model: BlogModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mikoblogs/'
});

module.exports = {
  BlogModel: BlogModel,
  BlogCollection: BlogCollection
}
