import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class AllPost extends Component {
  render() {
    return (
      <div>
        {this.props.posts.length >= 0 && (
          <h2>You have {this.props.posts.length} Posts.</h2>
        )}

        {this.props.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

// To get access to your state, we need to use a special function called "mapStateToProps"
// "mapStateToProps" - map the state from the store object to the props object in your components

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(AllPost);
