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

