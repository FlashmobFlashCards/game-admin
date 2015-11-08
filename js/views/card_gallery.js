import React from 'react';

export default React.createClass({

  processCards(data) {
    return(
      <li className='eachCard' key={data.card_id}>{data.question}</li>
      );
  },

  addClickBtn() {
    this.props.onAddClickHandler();
  },

  render() {
    return (
      <div>
        <ul className='cardGallery'>{this.props.cards.map(this.processCards)}</ul>
        <div onClick={this.addClickBtn} className='addClickBtn'>
          <i className="fa fa-plus-square-o"></i>
        </div>
      </div>
    );
  }

});