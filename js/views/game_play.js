import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  // Start game

  onStartClick() {
    this.props.onStartClick();
  },

  // Back to Deck Callery

  onBackClick() {
    this.props.onBackClick();
  },


  render() {
    return (
      <div className='wholePage'>

      // Event listener to start game
        <button onClick={this.onStartClick} className='startBtn'>Start</button>

      // Event listener to go back to deck gallery  
        <button onClick={this.onBackClick} className='backBtn'>Back to Deck Gallery</button>
      </div>
    );
  }

});