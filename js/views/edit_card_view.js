
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

  updateTitle() {
    let newTitle = event.currentTarget.value;
    this.setState({
      title: newTitle
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
    this.state.question,
    this.state.answer
    );
  },

  goEditDeckView() {
    this.props.onEditClick();
  },

  goDeckGalleryView() {
    this.props.onGalleryClick();
  },

  goAddView() {
    this.props.onAddClick();
  },

  render() {
      return (
        <div className='editContainer'>
          <div className="btns">
            <button onClick={() => this.goEditDeckView}>Edit Deck</button> 
            <button onClick={() => this.goDeckGalleryView}>Deck Gallery</button> 
            <button onClick={() => this.goAddView}>Add Deck</button> 
          </div>
          <div className="edit-card">
            <h2>Edit Cards</h2>
            <form>
              <label>Id: <input onChange={this.setId} type='text' className='cardId' value={this.state.card_id}/></label>
              <label>Title: <input onChange={this.updateTitle} type='text' className='updatedCardTitle' value={this.state.title}/></label>
              <label>Card Question: <input onChange={this.updateQuestion} type="text" className="question" value={this.state.question}/></label>
              <label>Card Answer: <input onChange={this.updateAnswer} type="text" className="answer" value={this.state.answer}/></label>
              <button onClick={this.saveChanges}>Save Changes</button>
            </form>
          </div>
        </div>
      );
    }
});

