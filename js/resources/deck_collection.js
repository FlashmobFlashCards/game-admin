import Backbone from 'backbone';
import DeckModel from './deck_model';

export default Backbone.Collection.extend({

  url: 'https://damp-cliffs-8775.herokuapp.com/deck',

  model: DeckModel,

  parse(data) {
    return data.decks;
  }

});