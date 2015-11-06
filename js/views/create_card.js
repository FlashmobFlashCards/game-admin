import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  render() {
    console.log(this);
    return (
      <div className='wholePage'>
        <form className='form'>
          <input type='text' placeholder='Title of this card' className='newCardField titleField' />
          <input type='text' placeholder='Enter a question' className='newCardField questionField' />
          <input type='text' placeholder='Enter the answer' className='newCardField answerField' />
          <button onClick={this.createCardSubmit} className='newCardField cardSubmit'>Create Card</button>
        </form>
      </div>
    );
  }

});