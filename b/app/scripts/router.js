var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models.js');
var NewPersonView = require('./views/views.js');

var AppRouter = Backbone.Router.extend({
routes: {
  '': 'index',
},
index: function(){
  var personCollection = new models.PersonCollection();
  var personForm = new NewPersonView({collection: personCollection});
$('.app').append(personForm.render().el);
}
});

var router = new AppRouter();

module.exports = router;
