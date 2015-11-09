import React from 'react';

export default React.createClass({

  chooseEditCard(id) {
    this.props.editCardClick(id);
  },

  processCards(data) {
    return(
      <li className='eachCard' onClick={() => this.chooseEditCard(data.card_id)} key={data.card_id}>{data.question}</li>
      );
  },

  addClickBtn() {
    this.props.onAddClickHandler();
  },

  goBackToDeck() {
    this.props.onGoBackEditDeck();
  },

  render() {
    return (
      <div>
        <button onClick={this.goBackToDeck} className='cardGalleryBack'><i className="fa fa-angle-left"></i>
</button>
        <h2>Click on a card to edit</h2>
        <div onClick={this.addClickBtn} className='addClickBtn'>
          <i className="fa fa-plus-square-o"></i>
        </div>
        <hr/>
        <ul className='cardGallery'>{this.props.cards.map(this.processCards)}</ul>
      </div>
    );
  }

});