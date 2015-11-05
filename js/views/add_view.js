import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  // If user is logged in, we should already have user ID.
  // Deck ID and Card IDs will be assigned by database

  // Create Deck

  onCreateClick() {
    this.props.onCreateClick();
  },

  // Back to Deck Gallery

  onBackClick() {
    this.props.onBackClick();
  },


  render() {
    return (
      <div className='wholePage'>
      // Create form for deck title and every question and and answer for the five (5) cards in the deck
        <form className='form'>
          <label>Deck Title<input type='text' placeholder='Enter deck title' className='deckTitle' maxlength="255" /></label>
          <label>Question 1 <input type='text' placeholder='Enter question 1' className='question1' maxlength="255" /></label>
          <label>Answer 1<input type='text' placeholder='Enter answer 1' className='answer1' maxlength="255" /></label>
          <label>Question 2 <input type='text' placeholder='Enter question 2' className='question2' maxlength="255" /></label>
          <label>Answer 2<input type='text' placeholder='Enter answer 2' className='answer2' maxlength="255" /></label>
          <label>Question 3<input type='text' placeholder='Enter question 3' className='question3' maxlength="255" /></label>
          <label>Answer 3<input type='text' placeholder='Enter answer 3' className='answer3' maxlength="255" /></label>
          <label>Question 4<input type='text' placeholder='Enter question 4' className='question4' maxlength="255" /></label>
          <label>Answer 4<input type='text' placeholder='Enter answer 4' className='answer4' maxlength="255" /></label>
          <label>Question 5<input type='text' placeholder='Enter question 5' className='question5' maxlength="255" /></label>
          <label>Answer 5<input type='text' placeholder='Enter answer 5' className='answer5' maxlength="255" /></label>
         <button onClick={this.onCreateClick} className='createBtn'>Create Deck</button>
        </form>

      // Event listener to go back to deck gallery  
        <button onClick={this.onBackClick} className='backBtn'>Back to Deck Gallery</button>
      </div>
    );
  }

});