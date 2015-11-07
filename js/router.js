import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Cookies from 'js-cookie';

import {DeckCollection} from './resources';
import {DeckModel} from './resources';
import {CardModel} from './resources';
import {CardCollection} from './resources';

import {RegisterForm} from './views';
import {LoginView} from './views';
import {HomeView} from './views';
import {CreateCard} from './views';
import {CreateDeck} from './views';
import {UserHomeView} from './views';
import {EditDeckView} from './views';

export default Backbone.Router.extend({

  routes: {
    "" : "home",
    "register" : "registerForm",
    "login" : "userLogin",
    "logout" : "logout",
    "deckgallery" : "viewDecks",
    "createdeck" : "newDeck",
    "createcard" : "newCard",
    "editdeck" : "editUserDeck",
    "editdeck/:id" : "editSpecificDeck",
    "flashgame" : "playGame"
  },

  initialize(appElement) {
    this.el = appElement;
    this.deckcollect = new DeckCollection();
  },

  start() {
    Backbone.history.start();
    return this; 
  },

  setHeaders() {
    let user = Cookies.get('user');
    console.log(user);
    if (user) {
      let auth = JSON.parse(user).user.access_token;
      console.log(auth);
      $.ajaxSetup({
        headers: {
          'Access-Token': auth
        }
      });
    } else {
      this.goto('');
    }
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
      onRegisterClick={() =>this.goto('register')}
      onLogin={() => this.onLogin()} />
    );
  },

  userLogin() {
    this.render(
      <LoginView 

      onLoginClick={() => {
        let userName = document.querySelector('#loginuser').value;
        let password = document.querySelector('#userpassword').value;
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

          this.setHeaders();

          console.log('logging in');
          this.goto('deckgallery');
        }).fail(() => {
          alert('something went wrong');
          this.goto('deckgallery');
        });
      }}/>
    );
  },

  onLogin() {
    let userName = document.querySelector('#loginuser').value;
    let password = document.querySelector('#userpassword').value;
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

      this.setHeaders();
      console.log('logging in');
      this.goto('deckgallery');
    }).fail(() => {
      alert('something went wrong');
      this.goto('');
    });
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
            console.log(data);
            this.setHeaders();

            alert('user creation successful!');
            this.goto('deckgallery');
          });
        }}/>
    );
  },

  logout() {
    Cookies.remove('user');

    $.ajaxSetup({
      headers: {
        auth_token: null
      }
    });

    this.goto('');
  },

  viewDecks() {
    this.setHeaders();
    this.deckcollect.fetch().then(() => {
      this.render(
        <UserHomeView 
          onLogoutClick={() => this.goto('logout')}
          onPlayClick={() => this.goto('flashgame')}
          onAddClick={() => this.goto('createdeck')}
          onEditClick={() => this.goto('editdeck')}
          decks={this.deckcollect.toJSON()}/>
      );
    });
  },

  newDeck() {
    this.setHeaders();
    this.render(
      <CreateDeck
      onSubmitNewDeck={()=>{
        console.log('submitting?');
        let deckTitle = document.querySelector('.deckTitleField').value;
        let deckDescription = document.querySelector('.deckDescripField').value;

        let newDeck = $.ajax({
          url: 'https://damp-cliffs-8775.herokuapp.com/deck',
          method: 'POST',
          data: {
            title: deckTitle,
            description: deckDescription
          }
        });

        newDeck.then(()=>this.goto('deckgallery'));

      }}/>
    );
  },

  newCard() {
    this.setHeaders();
    this.render(
      <CreateCard
      onSubmitNewCard={()=>{
        let cardTitle = document.querySelector('.titleField').value;
        let cardQuestion = document.querySelector('.questionField').value;
        let cardAnswer = document.querySelector('.answerField').value;

        
        let newCard = new CardModel({
          title: cardTitle,
          question: cardQuestion,
          answer: cardAnswer
        });

        newCard.save().then(()=>this.goto('deckgallery'));

      }}/>
    );
  },

  editUserDeck() {
    this.setHeaders();
    this.deckcollect.fetch().then(() => {
      this.render(
        <EditDeckView
          onChooseEdit={() => console.log('want to go to edit')}
          decks={this.deckcollect.toJSON()}/>
      )
    });
  }
      

});
