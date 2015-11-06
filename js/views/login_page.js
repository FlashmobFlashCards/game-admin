import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({


  onSubmitClick() {
    this.props.onLoginClick();
  },

  render() {
    console.log(this);
    return (
      <div className='loginBox'>
        <form className='form'>
          <input type='text' placeholder='Username' className='logInput inputField user' />
          <input type='text' placeholder='Password' className='logInput inputField password' />
          <button onClick={this.onSubmitClick} className='logInput loginBtn'>Log In</button>
          <checkbox label='Remember Me' checked='false' className='logInput checkbox' />
        </form>
      </div>
    );
  }

});