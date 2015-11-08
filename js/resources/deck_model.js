import Backbone from 'backbone';

export default Backbone.Model.extend({

  urlRoot: 'https://damp-cliffs-8775.herokuapp.com/deck',

  idAttribute: 'deck_id'

});