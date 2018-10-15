const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]);

    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);

    case "EDIT_POST":
      // Here we are using Array.prototype.map to loop over each item and then check
      // the id of the post with the id that was passed in the action. If there is a
      // match then return a new object but change the value of editing to true if it
      // was false or vice-versa. If there is no match then just return the object as it is.

      return state.map(
        post =>
          post.id === action.id ? { ...post, editing: !post.editing } : post
      );

    case "UPDATE":
      return state.map(
        post =>
          post.id === action.id
            ? {
                ...post,
                title: action.data.newTitle,
                message: action.data.newMessage,
                editing: !post.editing
              }
            : post
      );

    default:
      return state;
  }
};
export default postReducer;
