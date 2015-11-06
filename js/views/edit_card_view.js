import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

// DISPLAY ALL CARD_IDS FOR SELECTED DECK_ID
// GET DECK_ID TO SHOW CARDS
// DELETE CARD
// ADD CARD
// EDIT QUESTION AND/OR ANSWER ON CARD

// GET DECK ID, TITLE, CARD ID, QUESTION, AND ANSWER.

  getInitialState: function() {
    return ({  // Is ( necessary?
      deck_id: this.props.stored.deck_id, // Do we need to include stored?
      title: this.props.stored.title,
      card_id: this.props.stored.card_id,
      question: this.props.stored.question,
      answer: this.props.stored.answer 
     }); // Is ) necessary?
  },

// UPDATE QUESTION

  updateQuestion(e) {
    let newQuestion = e.currentTarget.value;

    this.setState({question: newQuestion});
  },

// UPDATE ANSWER

  updateAnswer(e) {
    let newAnswer = e.currentTarget.value;

    this setState({answer: newAnswer});
  },  

// SAVE CHANGES

  saveChanges(e) { // Does saveChanges need to be addChanges?
    event.preventDefault();
    this.props.onSubmitChangesClick(
      this.state.question,
      this.state.answer
      );
  },  

// GO BACK TO EDIT DECK VIEW

  goEditDeckView() {
    this.props.onBackClick();
  },

// GO BACK TO DECK GALLERY

  goDeckGalleryView() {
    this.props.onBackClick(); // Does this need to be an individual onBackClick?
  },

  render() {
    return (

//  BUTTONS    
      <div className="btns">
        <button onClick{() => this.goEditDeckView()}>Edit Deck</button> // Do we need a fa fa icon for this?
        <button onClick{() => this.goDeckGalleryView()}>Deck Gallery</button> // Do we need a fa fa icon for this?
// Do we redirect to refreshed edit_card_view.js?        <button onClick{() => this.go?View()}>Save Changes</button> // Do we need a fa fa icon for this?
      </div>
      <div className="edit-card">
      </div>
