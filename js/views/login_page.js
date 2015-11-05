import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  onRegisterClick() {
    this.props.onCreateUserClick();
  },

  render() {
    return (
      <div className='wholePage'>
         <header className='logo'></header>
            <div className='loginBox'>
              <form className='form'>
                <input type='text' placeholder='Username' className='logInput user' />
                <input type='text' placeholder='Password' className='logInput password' />
                <button onClick={this.onSubmitClick} className='logInput loginBtn'>Log In</button>
                <checkbox label='Remember Me' checked='false' className='logInput checkbox' />
              </form>
              <button onClick={this.onRegisterClick} className='registerBtn'>Register</button>
            </div>
         <footer>&copy;Iron Games</footer>
      </div>
    );
  }

});