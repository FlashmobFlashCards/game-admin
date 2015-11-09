import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  createCardSubmit(event) {
    event.preventDefault();
    this.props.onSubmitNewCard();
  },

  cancelCardClick() {
    this.props.cancelNewCard();
  },

  render() {
    return (
      <div>
        <h2 className='createCardh2'>Create a New Card</h2>
        <form className='createCardForm'>
          <input type='text' placeholder='Enter a question' className='newCardField first-field questionField' />
          <input type='text' placeholder='Enter the answer' className='newCardField answerField' />
          <button onClick={this.createCardSubmit} className='newCardField cardSubmit'>Create Card</button>
          <button onClick={this.cancelCardClick} className='newCardField cardCancel'>Cancel</button>
        </form>
      </div>
    );
  }

});