import React from 'react';
import LoginView from './login_page';


export default React.createClass({

  render() {
    return (
      <div className='container'>
          <img src='images/flashcardlogo.png' className='gameLogo' />
        <div>{this.props.LoginView}</div>
      </div>
    );
  }

});

