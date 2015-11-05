import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Cookie from 'js-cookie';

import {RegisterForm} from './views';
import {LoginView} from './views';
import {HomeView} from './views';

export default Backbone.Router.extend({

  routes: {
    "" : "home",
    "register" : "registerForm",
    "login" : "userLogin",
    "deckgallery" : "viewDecks",
    "flashgame" : "playGame"
  },

  initialize(appElement) {
    this.el = appElement;
  },

  start() {
    Backbone.history.start();
    return this; 
  },

  goto(route) {
    this.navigate(route, {trigger:true});
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  home() {
 
  },

  registerForm() {
    this.render(
      <RegisterForm 
        onCreateUserClick={() => {alert('thanks for registering');}}/>
    );
  }

});
