import Backbone from 'backbone';
import CardModel from './card_model';
import $ from 'jquery';

export default Backbone.Collection.extend ({

  url: 'https://damp-cliffs-8775.herokuapp.com/card',

  model: CardModel,

  parse(data) {
  	return data.cards;
  }

});