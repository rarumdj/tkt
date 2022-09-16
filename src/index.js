import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import configureStore, { history } from "./utils/store";

const initialState = {};

const store = configureStore(initialState);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <App />
      </Router>
    </ConnectedRouter>
  </Provider>
);
