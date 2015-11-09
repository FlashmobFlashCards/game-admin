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
				<button onClick={this.goBack} className="userBtns back-btn">Back</button>
				<hr/>
				<ul className='deckview-decks'>{this.props.decks.map(this.getUserDecks)}</ul>
			</div>
		);
	}


});

