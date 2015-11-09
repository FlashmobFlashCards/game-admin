import React from 'react';

export default React.createClass({

  createUser() {
    this.props.onCreateUserClick();
  },

  backBtn() {
    this.props.onBackClick();
  },

  render() {
    return(
      <div className='regPage'>
        <form className='regForm'>
          <h2>Create an Account</h2>
            <input type="text" placeholder='Full Name' className="name regField"/>
            <input type="text" placeholder='Email Address' className="email regField"/>
            <input type="text" placeholder='Create Username' className="user regField"/>
            <input type="password" placeholder='Create Password' className="password regField"/>
            <button onClick={this.createUser} className='regBtn regField'>Create Account</button>
            <button onClick={this.backBtn} className='regBackBtn regField'>Go Back</button>
        </form>
        </div>
    );
  }

});