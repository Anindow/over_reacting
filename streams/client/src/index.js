import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, composeEnhancers(applyMiddleware())
);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* npm install redux-form --legacy-peer-deps */