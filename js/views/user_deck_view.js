import React from 'react';

export default React.createClass({

	chooseEditDeck(id) {
		this.props.onChooseEdit(id);
	},

	goBack() {
		this.props.backToGallery();
	},

	getUserDecks(data) {
		return (
			<li className="decks" onClick={() => this.chooseEditDeck(data.deck_id)} key={data.deck_id}>{data.title}</li>
		);
	},

	render() {
		return (
			<div className="user-decks">
				<h2>Choose a Deck to Edit</h2>
				<button onClick={this.goBack} className="back-btn">Back</button>
				<button className="new-card">Add Card to Deck</button>
				<hr/>
				<ul>{this.props.decks.map(this.getUserDecks)}</ul>
			</div>
		);
	}


});

// export default React.createClass({
// // Display deck titles associated with user ID.

// // Click on deck title to go to associated edit_card_view.

//   getInitialState: function() {
//     return {value: ''};
//   },

//   handleChange: function(event) {
//     this.setState({value: event.target.value});
//   },

//   render: function() {
//     var value = this.state.value;
//     return <input type="text" value={value} onChange={this.handleChange} />;
//   }

//   // Create event listeners for editing deck fields

//   onEditClick() {
//     this.props.onEditClick();
//   },

//     onBackClick() {
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