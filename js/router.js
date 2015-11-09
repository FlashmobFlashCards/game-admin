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
import {EditCardView} from './views';
import {Spinner} from './views';
import {EditDeckView} from './views';
import {CardGalleryView} from './views';

export default Backbone.Router.extend({

  routes: {
    "" : "home",
    "register" : "registerForm",
    "login" : "userLogin",
    "logout" : "logout",
    "deckgallery" : "viewDecks",
    "createdeck" : "newDeck",
    "createcard/:deck_id" : "newCard",
    "editdeck" : "editUserDeck",
    "editdeck/:deck_id" : "cardGallery",
    "editcard/:deckid/:card_id" : "updateCard",
    "flashgame" : "playGame"
  },

  initialize(appElement) {
    this.el = appElement;
    this.deckcollect = new DeckCollection();
    this.deckmodel = new DeckModel();
    this.cardcollect = new CardCollection();
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

  spinner() {
    this.render(<Spinner/>);
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
          this.spinner();
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
        onBackClick={() => this.goto('')}
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
      onGoBackClick={() => this.goto('deckgallery')}
      onSubmitNewDeck={()=>{
        let deckTitle = document.querySelector('.deckTitleField').value;

        let newDeck = $.ajax({
          url: 'https://damp-cliffs-8775.herokuapp.com/deck',
          method: 'POST',
          data: {
            title: deckTitle,
          }
        });

        newDeck.then(()=>this.goto('deckgallery'));

      }}/>
    );
  },

  newCard(deck_id) {
    this.setHeaders();
    console.log(deck_id);
    this.render(
      <CreateCard
      onSubmitNewCard={()=>{
        let cardQuestion = document.querySelector('.questionField').value;
        let cardAnswer = document.querySelector('.answerField').value;

        let newCard = $.ajax({
          url: `https://damp-cliffs-8775.herokuapp.com/deck/${deck_id}/card`,
          method: 'POST',
          data: {
            deck_id: deck_id,
            question: cardQuestion,
            answer: cardAnswer
          }
        });
    
        newCard.then(() => {
          alert('Add new card?');
          this.goto('editdeck');
      });
      }}/>
    );
  },

  updateCard(deckid, cardid) {
    this.setHeaders();
    let request = $.ajax({
      url: `https://damp-cliffs-8775.herokuapp.com/card/${cardid}`,
      method: 'GET'
    });

    request.then((carddata) => {
      let cardData = carddata.card;
      console.log(cardData);
      let cardId = cardData.card_id;
      this.render(
        <EditCardView
          id={cardId}
          data={cardData}
          onGalleryClick={() => this.goto('deckgallery')}
          onSubmitModified={(cardId, question, answer) => {
            let modifiedCard = $.ajax({
              url: `https://damp-cliffs-8775.herokuapp.com/card/${cardId}`,
              method: 'PUT',
              data: {
                question: question,
                answer: answer
              }
            });

            modifiedCard.then((data) => {
              this.setHeaders();
              this.goto('deckgallery');
          });}}/>
      )
    });
  },

      
  editUserDeck() {
    this.setHeaders();
    this.deckcollect.fetch().then(() => {
      this.render(
        <EditDeckView
          decks={this.deckcollect.toJSON()}
          onChooseEdit={(id) => this.goto('editdeck/' + id)}
          backToGallery={() => this.goto('deckgallery')}/>
      )
    });
  },

  cardGallery(deck_id) {
    this.setHeaders();
    let request = $.ajax({
      url: `https://damp-cliffs-8775.herokuapp.com/deck/${deck_id}/card`,
      method: 'GET'
    });
    request.then((deck) => {
      Cookies.set('spdeck', {deck_id});
      let fullDeck = deck.cards;
      let deckId = deck_id;
      this.render(
        <CardGalleryView
          cards={fullDeck}
          onAddClickHandler={() => this.goto(`createcard/${deckId}`)}
          deckId={deckId}
          editCardClick={(id) => this.goto(`editcard/${deckId}/${id}`)}/>
      )
    });
  }

});
