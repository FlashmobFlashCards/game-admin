import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  // Need to be able to choose deck ID from list associated with user ID.

  // Need to be able to edit deck title.

  // Need to be able to edit question and answer on every card.

  // Create event listeners for editing deck fields

  onEditClick() {
    this.props.onEditClick();
  },

  onSaveClick() {
    this.props.onSaveClick();
  },  


  render() {
    return (
      <div className='wholePage'>

      // Create button edit deck
        <button onClick={this.onEditClick} className='editBtn'>Edit a Deck</button>

      // Create button to save changes
        <button onClick={this.onSaveClick} className='addBtn'>Save Changes</button>
      </div>
    );
  }

});