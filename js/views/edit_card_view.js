
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
            <button onClick={this.goDeckGalleryView}>Deck Gallery</button>
          </div>
            <hr/>
          <div className="edit-card">
            <form>
              <label>Deck Id: <input onChange={this.setId} type='text' className='deckId' value={this.state.card_id}/></label>
              <label>Card Question: <input onChange={this.updateQuestion} type="text" className="question" value={this.state.question}/></label>
              <label>Card Answer: <input onChange={this.updateAnswer} type="text" className="answer" value={this.state.answer}/></label>
              <button onClick={this.saveChanges}>Save Changes</button>
            </form>
          </div>
        </div>
      );
    }
});

