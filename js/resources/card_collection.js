import Backbone from 'backbone';
import CardModel from './card_model';

export default Backbone.Collection.extend ({

  url: 'https://damp-cliffs-8775.herokuapp.com/deck/:deck_id/card',

  model: CardModel

});