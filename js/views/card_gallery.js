import React from 'react';

export default React.createClass({

  processCards(data) {
    return(
      <li className='eachCard' key={data.card_id}>{data.question}</li>
      );
  },

  render() {
    return (
      <div>
        <ul className='cardGallery'>{this.props.cards.map(this.processCards)}</ul>
      </div>
    );
  }

});