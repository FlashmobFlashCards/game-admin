
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
              <label>Card Question: <input onChange={this.updateQuestion} type="text" className="question" value={this.state.question}/></label>
              <label>Card Answer: <input onChange={this.updateAnswer} type="text" className="answer" value={this.state.answer}/></label>
              <button onClick={this.saveChanges}>Save Changes</button>
            </form>
          </div>
        </div>
      );
    }
});


//   // UPDATE QUESTION



// // //   // Need to be able to choose deck ID from list associated with user ID.

// // //   // Need to be able to edit deck title.

// // //   // Need to be able to edit question and answer on every card.


// // //   handleChange: function(event) {
// // //     this.setState({value: event.target.value});
// // //   },

// // //   render: function() {
// // //     var value = this.state.value;
// // //     return <input type="text" value={value} onChange={this.handleChange} />;
// // //   }

// // //   // Create event listeners for editing deck fields

// // //   onEditClick() {
// // //     this.props.onEditClick();
// // //   },

// // //   onSaveClick() {
// // //     this.props.onSaveClick();
// // //   },  
// // // DISPLAY ALL CARD_IDS FOR SELECTED DECK_ID
// // // GET DECK_ID TO SHOW CARDS
// // // DELETE CARD
// // // ADD CARD
// // // EDIT QUESTION AND/OR ANSWER ON CARD


// // // UPDATE QUESTION

// //   updateQuestion(e) {
// //     let newQuestion = e.currentTarget.value;

// //     this.setState({question: newQuestion});
// //   },

// // // UPDATE ANSWER

// //   updateAnswer(e) {
// //     let newAnswer = e.currentTarget.value;

// //     this setState({answer: newAnswer});
// //   },  


//   // UPDATE QUESTION

//   updateQuestion(event) {
//     let newQuestion = event.currentTarget.value;

// // //   // Need to be able to choose deck ID from list associated with user ID.

// // //   // Need to be able to edit deck title.

// // //   // Need to be able to edit question and answer on every card.

// // //   getInitialState: function() {
// // //     return {value: ''};
// // //   },

// // //   handleChange: function(event) {
// // //     this.setState({value: event.target.value});
// // //   },

// // //   render: function() {
// // //     var value = this.state.value;
// // //     return <input type="text" value={value} onChange={this.handleChange} />;
// // //   }

// // //   // Create event listeners for editing deck fields

// // //   onEditClick() {
// // //     this.props.onEditClick();
// // //   },

// // //   onSaveClick() {
// // //     this.props.onSaveClick();
// // //   },  
// // // DISPLAY ALL CARD_IDS FOR SELECTED DECK_ID
// // // GET DECK_ID TO SHOW CARDS
// // // DELETE CARD
// // // ADD CARD
// // // EDIT QUESTION AND/OR ANSWER ON CARD

// // // GET DECK ID, TITLE, CARD ID, QUESTION, AND ANSWER.

// //   getInitialState: function() {
// //     return ({  // Is ( necessary?
// //       deck_id: this.props.stored.deck_id, // Do we need to include stored?
// //       title: this.props.stored.title,
// //       card_id: this.props.stored.card_id,
// //       question: this.props.stored.question,
// //       answer: this.props.stored.answer 
// //      }); // Is ) necessary?
// //   },

// // // UPDATE QUESTION

// //   updateQuestion(e) {
// //     let newQuestion = e.currentTarget.value;

// //     this.setState({question: newQuestion});
// //   },

// // // UPDATE ANSWER

// //   updateAnswer(e) {
// //     let newAnswer = e.currentTarget.value;


//     this setState({answer: newAnswer});
//   },  



//   // UPDATE ANSWER

//   updateAnswer(event) {
//     let newAnswer = event.currentTarget.value;

//     this.setState({answer: newAnswer});
//   },  

//   // REMOVE CARD



//   // ADD CARD
//   // Should this redirect to the add_view?  Or should we include the add_view form component into this view?  Or will enter into Nested View Hell?






// // // GO BACK TO EDIT DECK VIEW

// //   goEditDeckView() {
// //     this.props.onBackClick();
// //   },

//   // ADD CARD
//   // Should this redirect to the add_view?  Or should we include the add_view form component into this view?  Or will enter into Nested View Hell?

// // // GO BACK TO DECK GALLERY


// //   goDeckGalleryView() {
// //     this.props.onBackClick(); // Does this need to be an individual onBackClick?
// //   },


//   // GO BACK TO EDIT DECK VIEW

// //   goDeckGalleryView() {
// //     this.props.onBackClick(); // Does this need to be an individual onBackClick?
// //   },



//   // GO BACK TO EDIT DECK VIEW

// // //   render() {
// // //     return (
// // //       <div className='wholePage'>



// // //   render() {
// // //     return (
// // //       <div className='wholePage'>



//   // GO BACK TO DECK GALLERY


//   goDeckGallery() {
//     this.props.onBackClick(); // Does this need to be an individual onBackClick?
//   },

//   // render() {
//   //   return (

//   // BUTTONS    

//   <div className="edit-card">
//     <h2>Edit Cards</h2>
//     <form>
//       <label>Card Question: <input onChange={this.updateQuestion} type="text" className="question" value={this.state.quesiton}/></label>
//       <label>Card Answer: <input onChange={this.updateAnswer} type="text" className="answer" value={this.state.answer}/></label>
//       <button onClick={this.saveChanges}>Save Changes</button>
//     </form>
//   </div>
//   )}

// });

// // //       // Create button edit deck
// // //         <button onClick={this.onEditClick} className='editBtn'>Edit a Deck</button>

// // //       // Create button to save changes
// // //         <button onClick={this.onSaveClick} className='addBtn'>Save Changes</button>
// // //       </div>
// // //     );
// // //   }

// // // });

// //   render() {
// //     return (


  


  // BUTTONS    
  // <div className="btns">
  //   <button onClick={() => this.goEditDeckView()}>Edit Deck</button> 
  //   <button onClick={() => this.goDeckGalleryView()}>Deck Gallery</button> 
  // Do we redirect to refreshed edit_card_view.js? <button onClick{() => this.go?View()}>Save Changes</button> // Do we need a fa fa icon for this?
  // </div>



//   // render() {
//   //   return (

//   // BUTTONS    
//   <div className="btns">
//     <button onClick{() => this.goEditDeckView()}>Edit Deck</button> // Do we need a fa fa icon for this?
//     <button onClick{() => this.goDeckGalleryView()}>Deck Gallery</button> // Do we need a fa fa icon for this?
//    // Do we redirect to refreshed edit_card_view.js? <button onClick{() => this.go?View()}>Save Changes</button> // Do we need a fa fa icon for this?
//   // </div>
//   <div className="edit-card">
//     <h2>Edit Cards</h2>
//     <form>
//       <label>Card Question: <input onChange={this.updateQuestion} type="text" className="question" value={this.state.quesiton}/></label>
//       <label>Card Answer: <input onChange={this.updateAnswer} type="text" className="answer" value={this.state.answer}/></label>
//       <button onClick={this.saveChanges}>Save Changes</button>
//     </form>
//   </div>
//   )}

// });

// // //       // Create button edit deck
// // //         <button onClick={this.onEditClick} className='editBtn'>Edit a Deck</button>

// // //       // Create button to save changes
// // //         <button onClick={this.onSaveClick} className='addBtn'>Save Changes</button>
// // //       </div>
// // //     );
// // //   }

// // // });

// //   render() {
// //     return (


// // //  BUTTONS    
// //       <div className="btns">
// //         <button onClick{() => this.goEditDeckView()}>Edit Deck</button> // Do we need a fa fa icon for this?
// //         <button onClick{() => this.goDeckGalleryView()}>Deck Gallery</button> // Do we need a fa fa icon for this?
// // // Do we redirect to refreshed edit_card_view.js?        <button onClick{() => this.go?View()}>Save Changes</button> // Do we need a fa fa icon for this?
// //       </div>
// //       <div className="edit-card">
// //       </div>


