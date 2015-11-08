import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Model.extend ({

  urlRoot: 'https://damp-cliffs-8775.herokuapp.com/card',

  idAttribute: 'card_id'
    
});