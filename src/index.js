import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import thunk from "redux-thunk";
import App from "./App";
import "./styles.css";

import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
  )
);

const rootElement = document.getElementById("root");
store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(
	  <Provider store={store}>
	    <App />
	  </Provider>,
	  rootElement
	);
})

