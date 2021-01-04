import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./reducers";

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);