import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  onPlayClick() {
    this.props.onPlayClick();
  },

  onAddClick() {
    this.props.onAddClick();
  },

  onEditClick() {
    this.props.onEditClick();
  },  


  render() {
    return (
      <div className='wholePage'>
        <button onClick={this.onPlayClick} className='playBtn'>Play</button>
        <button onClick={this.onAddClick} className='addBtn'>Add a Deck</button>
        <button onClick={this.onEditClick} className='edityBtn'>Edit a Deck</button>
      </div>
    );
  }

});