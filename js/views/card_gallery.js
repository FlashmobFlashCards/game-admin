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

  render() {
    return (
      <div>
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