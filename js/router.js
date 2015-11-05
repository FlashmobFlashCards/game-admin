import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Cookies from 'js-cookie';

import {RegisterForm} from './views';
import {LoginView} from './views';
import {HomeView} from './views';
import {UserHomeView} from './views';

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
      <HomeView
      onRegisterClick={() =>this.goto('register')} />
    );
  },

  userLogin() {
    this.render(
      <LoginView 

      onLoginClick={() => {
        let userName = document.querySelector('.user').value;
        let password = document.querySelector('.password').value;

        let request = $.ajax({
          url: 'https://damp-cliffs-8775.herokuapp.com/login',
          method: 'POST',
          data: {
            username: userName,
            password: password
          }
        });

        request.then((data) => {
          Cookies.set('user', data);

          $.ajaxSetup({
            headers: {
              auth_token: data.access_token
            }
          });
          this.goto('');
        }).fail(() => {
          alert('something went wrong');
          this.goto('');
        });
      }}/>
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
            url: 'https://damp-cliffs-8775.herokuapp.com/signup',
            method: 'POST',
            data: {
              fullname: fullName,
              email: emailAdd,
              username: userName,
              password: password
            }
          });

          request.then((data) => {
            Cookies.set('user', data);
            console.log(data.toJSON());
            $.ajaxSetup({
              headers: {
                auth_token: data.access_token
              }
            });

            alert('user creation successful!');
            this.goto('');
          });
        }}/>
    );
  },

  viewDecks() {
    this.render(
      <UserHomeView/>
    );
  }

});
