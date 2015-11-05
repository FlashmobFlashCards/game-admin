import React from 'react';

export default React.createClass({

  createUser() {
    console.log('this is clicked');
    this.props.onCreateUserClick();
  },

  render() {
    return(
      <form>
        <h2>Create an Account</h2>
        <label>Full Name: <input type="text" className="name"/></label>
        <label>E-mail Address: <input type="text" className="email"/></label>
        <label>Create Username: <input type="text" className="user"/></label>
        <label>Create Password: <input type="password" className="password"/></label>
        <button onClick={this.createUser}>Create Account</button>
      </form>
    );
  }

});