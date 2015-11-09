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

  onLogout() {
    this.props.onLogoutClick();
  },

  processDecks(data) {
    console.log(data);
    return (
      <li className="decks" key={data.deck_id}>{data.title}</li>
    );
  }, 

  render() {
    return (
      <div className='userHome'>
        <header>
          <h2>Welcome</h2>
          <div className="userScore"></div>
          <button onClick={this.onEditClick} className='deckBtns editBtn'>Edit a Deck</button>
          <button onClick={this.onAddClick} className='deckBtns addBtn'>Add a Deck</button>
          <button onClick={this.onLogout} className='deckBtns logOutdeck'>Log Out</button>
          <hr/>
        </header>
        <main>
          <div className="galleryWrapper">
            <ul className="gallery">{this.props.decks.map(this.processDecks)}</ul>
          </div>
        </main>
      </div>
    );
  }

});