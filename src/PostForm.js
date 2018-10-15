import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  handleSubmit = e => {
    // will prevent the page from refreshing
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;

    // We will use this "id" property to perform update and delete operations.
    const data = { id: new Date(), title, message };

    console.log(data);

    // "connect()" gives you access to dispatch as a prop
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />

          <br />
          <br />

          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
          />

          <br />
          <br />

          <button>Post</button>
        </form>
      </div>
    );
  }
}

// connect() returns a function which wrap the component-name as an
// argument and returns a new component with dispatch method as it’s prop
//
// connect() gives you access to dispatch as a prop
//
// It can also give you access to your state which is living inside your store object
// To get access to your state, we need to use a special function called "mapStateToProps"
// "mapStateToProps" - map the state from the store object to the props object in your components
export default connect()(PostForm);
