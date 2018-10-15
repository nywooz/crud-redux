import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// https://gist.github.com/pratik-chakravorty?page=2
// https://codeburst.io/redux-a-crud-example-abb834d763c9

import { Provider } from "react-redux";
import { createStore } from "redux";
import postReducer from "./reducers/postReducer";
const store = createStore(postReducer);

store.dispatch({
  type: "ADD_POST",
  data: {
    id: "2018-10-15T12:08:03.719Z",
    title: "Learn Redux",
    message:
      "https://redux.js.org/api/store/ - Redux is a predictable state container for JavaScript apps.(Not to be confused with a WordPress framework – Redux Framework.) It helps you write applications that behave consistently, run in different environments(client, server, and native), and are easy to test.On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger."
  }
});

store.dispatch({
  type: "ADD_POST",
  data: {
    id: new Date(),
    title: "Learn React",
    message:
      "https://reactjs.org/ - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
  }
});

// Provider allows you to pass the "store" object to any components
// that needs to access it without the need to pass props.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
