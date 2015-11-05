import React from 'react';
import LoginView from './login_page';


export default React.createClass({

  onGoToRegister() {
    this.props.onRegisterClick();
  },
  

  render() {
    return (
      <div className='container'>
        <img src='images/flashcardlogo.png' className='gameLogo' />
        <LoginView />
        <button onClick={this.onGoToRegister}>Register</button>
        <footer>&copy;Iron Games</footer>
      </div>
    );
  }

});

