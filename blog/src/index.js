import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
