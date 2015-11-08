import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  onSubmitClick(event) {
    event.preventDefault();
    this.props.onLoginClick();
  },

  render() {
    console.log(this);
    return (
      <div className='loginBox'>
        <div className='form'>
          <input type='text' placeholder='Username' id="loginuser" className='logInput inputField user' />
          <input type='password' placeholder='Password' id="userpassword" className='logInput inputField password' />
          <button onClick={this.onSubmitClick} className='logInput loginBtn'>Log In</button>
          <checkbox label='Remember Me' checked='false' className='logInput checkbox' />
        </div>
      </div>
    );
  }

});