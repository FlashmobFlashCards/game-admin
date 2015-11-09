import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  createCardSubmit(event) {
    event.preventDefault();
    this.props.onSubmitNewCard();
  },

  render() {
    return (
        <form className='form'>
          <input type='text' placeholder='Enter a question' className='newCardField questionField' />
          <input type='text' placeholder='Enter the answer' className='newCardField answerField' />
          <button onClick={this.createCardSubmit} className='newCardField cardSubmit'>Create Card</button>
        </form>
    );
  }

});