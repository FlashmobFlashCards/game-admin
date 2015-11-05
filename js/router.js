import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

export default Backbone.Router.extend({

  routes: {
    "" : "home",
    "register" : "registerForm",
    "login" : "userLogin",
    "deckgallery" : "viewDecks",
    "flashgame" : "playGame"
  }







});
