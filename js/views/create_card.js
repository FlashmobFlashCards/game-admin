import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  createCardSubmit(deck_id) {
    this.props.onSubmitNewCard(this.state.deck_id);
  },

  render() {
    console.log(this);
    return (
        <form className='form'>
          <input type='text' placeholder='Enter a question' className='newCardField questionField' />
          <input type='text' placeholder='Enter the answer' className='newCardField answerField' />
          <button onClick={this.createCardSubmit} className='newCardField cardSubmit'>Create Card</button>
        </form>
    );
  }

});