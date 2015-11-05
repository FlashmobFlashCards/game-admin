import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Cookies from 'js-cookie';

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
    this.render(
      <HomeView />
    );
  },

  registerForm() {
    this.render(
      <RegisterForm 
        onCreateUserClick={() => {

          let fullName = document.querySelector('.name').value;
          let emailAdd = document.querySelector('.email').value;
          let userName = document.querySelector('.user').value;
          let password = document.querySelector('.password').value;

          let request = $.ajax({
            url: '',
            method: 'POST',
            data: {
              user: {
                fullname: fullName,
                email: emailAdd,
                username: userName,
                password: password
              }
            }
          });

          request.save().then((data) => {
            Cookies.set('user', data);

            $.ajaxSetup({
              headers: {
                auth_token: data.access_token
              }
            });
            this.goto('deckgallery');
          }).fail(() => {
            alert('something went wrong');
            this.goto('');
          });
        }}/>
    );
  }

});
