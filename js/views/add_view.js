import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  // If user is logged in, we should already have user ID.
  // Deck ID and Card IDs will be assigned by database

  // Create Deck

  onCreateClick() {
    this.props.onCreateClick();
  },

  // Back to Deck Callery

  onBackClick() {
    this.props.onBackClick();
  },


  render() {
    return (
      <div className='wholePage'>
        <form className='form'>
          <label>Deck Title<input type='text' placeholder='Enter deck title' className='deckTitle' maxlength="255" /></label>
          <label>Question 1 <input type='text' placeholder='' className='question' maxlength="255" /></label>
          <label>Answer 1<input type='text' placeholder='' className='answer' maxlength="255" /></label>
          <label>Question 2 <input type='text' placeholder='' className='question' maxlength="255" /></label>
          <label>Answer 2<input type='text' placeholder='' className='answer' maxlength="255" /></label>
          <label>Question 3<input type='text' placeholder='' className='question' maxlength="255" /></label>
          <label>Answer 3<input type='text' placeholder='' className='answer' maxlength="255" /></label>
          <label>Question 4<input type='text' placeholder='' className='question' maxlength="255" /></label>
          <label>Answer 4<input type='text' placeholder='' className='answer' maxlength="255" /></label>
          <label>Question 5<input type='text' placeholder='' className='question' maxlength="255" /></label>
          <label>Answer 5<input type='text' placeholder='' className='answer' maxlength="255" /></label>
         <button onClick={this.onCreateClick} className='createBtn'>Create Deck</button>
        </form>

      // Event listener to go back to deck gallery  
        <button onClick={this.onBackClick} className='backBtn'>Back to Deck Gallery</button>
      </div>
    );
  }

});