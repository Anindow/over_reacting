import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";


const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
