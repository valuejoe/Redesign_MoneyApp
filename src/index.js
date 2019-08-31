import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './js/store/reducer/RootReducer';
import Main from './js/component/Main';
import './index.css';

const middleeare = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    RootReducer,
    composeEnhancers(
        applyMiddleware(...middleeare)
    )
)

ReactDOM.render(
    <Provider store={store}><Main /></Provider>,
    document.getElementById("root")
)