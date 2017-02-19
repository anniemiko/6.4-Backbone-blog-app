var Backbone = require('backbone');

var BlogEntry = Backbone.Model.extend({
  idAttribute: '_id'
});

var BlogCollection = Backbone.Collection.extend({
  model: BlogEntry,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mikoblogs/'
})

module.exports = {
  BlogEntry: BlogEntry,
  BlogCollection: BlogCollection
}
