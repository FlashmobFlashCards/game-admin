import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  createDeckSubmit(event) {
    event.preventDefault();
    this.props.onSubmitNewDeck();
  },

  goBackBtn() {
    this.props.onGoBackClick();
  },

  render() {
    console.log(this);
    return (
      <div>
        <form className='deckForm'>
          <h2 className='addDeck'>Add a deck</h2>
          <input type='text' placeholder='Deck Title' className='newDeckField deckTitleField' />
          <p className='para'>Create a unique title for this deck</p>
          <button onClick={this.createDeckSubmit} className='newCardField deckSubmit'>Create Deck</button>
          <button onClick={this.goBackBtn} className='newCardField deckCreateBackBtn'>Go Back</button>
        </form>
        <img src='images/orangerex.png' className='orangerex' />
      </div>
    );
  }

});