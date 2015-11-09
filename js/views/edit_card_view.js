
import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  getInitialState() {
    return ({
      card_id: this.props.data.card_id,
      question: this.props.data.question,
      answer: this.props.data.answer
    });
  },

  setId(event) {
    let newId = event.currentTarget.value;
    this.setState({
      card_id: newId
    });
  },

  updateQuestion(event) {
    let newQuestion = event.currentTarget.value;
    this.setState({
      question: newQuestion
    });
  },

  updateAnswer(event) {
    let newAnswer = event.currentTarget.value;
    this.setState({
      answer: newAnswer
    });
  },

  saveChanges(event) {
  event.preventDefault();
  this.props.onSubmitModified(
    this.state.card_id,
    this.state.question,
    this.state.answer
    );
  },

  goDeckGalleryView() {
    this.props.onGalleryClick();
  },

  render() {
      return (
        <div className='editContainer'>
            <h2>Edit Card</h2>
          <div className="btns"> 
            <button onClick={this.goDeckGalleryView} className='deckGalleryBtn'>Deck Gallery</button>
          </div>
            <hr/>
          <img src='images/totoro.png' className='totoro' />
          <div className="edit-card">
            <form>
              <label className='label'>Deck Id: <input onChange={this.setId} type='text' className='cardEdit-field deckId' value={this.state.card_id}/></label>
              <label className='label'>Card Question: <input onChange={this.updateQuestion} type="text" className="cardEdit-field question" value={this.state.question}/></label>
              <label className='label'>Card Answer: <input onChange={this.updateAnswer} type="text" className="cardEdit-field answer" value={this.state.answer}/></label>
              <button onClick={this.saveChanges} className='editcardBtn'>Save Changes</button>
            </form>
          </div>
        </div>
      );
    }
});

