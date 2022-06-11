import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from "./store";
import { fetchItems } from "./features/items/items-slice";
import { Provider as ReduxProvider } from "react-redux";
import "./styles.css";

// Fire off any required app initialisation API calls.
store.dispatch(fetchItems());

render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
