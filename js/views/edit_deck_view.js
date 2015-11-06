import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  // REQUIREMENTS
  // DISPLAY ALL DECK TITLES (DECK ID DOESN'T NEEC TO BE DISPLAYED)
  // CLICK ON DECK TO ACCESS EDIT_CARD VIEW


  // GET DECK ID, TITLE, CARD ID, QUESTION, AND ANSWER.
  getInitialState: function() {
    return ({  // Is ( necessary?
      title: this.props.stored.title, // Do we need to include stored?
    }); // Is ) necessary?
  },

  // UPDATE TITLE FUNCTION

  updateTitle(event) {
    let newTitle = event.currentTarget.value;

    this.setState({answer: newTitle});
  },  

  // GO BACK TO EDIT DECK VIEW FUNCTION

  goEditCardView() {
    this.props.onEditClick();
  },

  // GO BACK TO DECK GALLERY FUNCTION

  goDeckGallery() {
    this.props.onBackClick(); 
  },

  remove() {
    
  },

  render() {
    return (

  // BUTTONS    
  <div className="btns">
    <button onClick{() => this.goDeckGalleryView()}>Deck Gallery</button> // Do we need a fa fa icon for this?
  </div>

  // SHOW EDITABLE DECKS THAT LINK TO EDIT_CARD_VIEW
  <div className="edit-deck">
    <h2>Edit Decks</h2>
    <div className="showDecks">
      <ul className="changeDecks">
        <li><a href="#" onEditClick={this.state.title}, {this.state.description}</a></li>
      </ul>
    </div>

  // EDIT TITLE  
    <div className="editTitle">
    <form>
      <label>Deck Title <input onChange={this.updateTitle} type="text" className="title" value={this.state.title}/></label>
      <button onClick={this.saveChanges}>Save Changes</button>
    </form>
    </div>
  </div>
  )}

    // DELETE DECKS
  <div className="edit-deck">
    <h2>Delete Decks</h2>
    <div className="showDecks">
      <ul className="deleteDecks">
        <li>{this.state.title}, {this.state.description}</li>
      </ul>
    </div>

});