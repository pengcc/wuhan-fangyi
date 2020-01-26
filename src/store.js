// import { createStore } from "redux";
// import reducer from "./reducers"; // Gets the State from the reducer(s)
//
// let store = createStore(reducer); // Creates the store from the State received from the reducer(s)
//
// export default store;


import {applyMiddleware, compose, createStore} from 'redux'

import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = applyMiddleware(
  promise,
  thunk
)
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// export default createStore(reducer, composeEnhancers, middleware)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(reducer, composeEnhancers(
  middleware
))
