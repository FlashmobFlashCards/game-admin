import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  createDeckSubmit(event) {
    event.preventDefault();
    this.props.onSubmitNewDeck();
  },

  render() {
    console.log(this);
    return (
        <form className='deckForm'>
          <input type='text' placeholder='Create a unique deck title' className='newDeckField deckTitleField' />
          <input type='text' placeholder='Description for this Deck' className='newDeckField deckDescripField' />
          <button onClick={this.createDeckSubmit} className='newCardField deckSubmit'>Create Deck</button>
        </form>
    );
  }

});