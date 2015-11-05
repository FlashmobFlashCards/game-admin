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
                <label>Username<input type='text' placeholder='Username' className='logInput user' /></label>
                <label> Password<input type='text' placeholder='Must be 6 alphanumeric characters' className='logInput password' /></label>
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