var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  idAttribute: '_id'
});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mikopersons/'
})

module.exports = {
  Person: Person,
  PersonCollection: PersonCollection
}
