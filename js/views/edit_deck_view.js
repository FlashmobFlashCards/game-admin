// import React from 'react';
// import ReactDom from 'react-dom';

// Show Decks

// GET /deck

// Params:

// Will return all decks

// Response:

// Show Single Deck

// GET /deck/:deck_id

// Params:

// deck_id: need a deck id to retrieve individual deck.

// Response:

// Delete Deck

// DELETE /deck/:deck_id

// Params:

// deck_id: need a deck id to delete individual deck.

// Response:

// Edit Deck

// PUT /deck/:deck_id

// Params:

// deck_id: need a deck id to edit individual deck.

// export default React.createClass({
//   // Display deck titles associated with user ID.

//   // Click on deck title to go to associated edit_card_view.

//   getInitialState: function() {
//     return {value: ''};
//   },

//   handleChange: function(event) {
//     this.setState({value: event.target.value});
//   },

  //render: function() {
  //  var value = this.state.value;
  //  return <input type="text" value={value} onChange={this.handleChange} />;
  //},

  // Create event listeners for editing deck fields

// //onEditClick() {
//     this.props.onEditClick();
//   },

//   onBackClick() {
//     this.props.onBackClick();
//   },  



//   render() {
//     return (
//       <div className='wholePage'>

//       // Create button to save changes
//         <button onClick={this.onBackClick} className='backBtn'>Back to Deck Gallery</button>
//       </div>
//     );
//   }

// });