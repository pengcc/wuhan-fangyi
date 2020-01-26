import { createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducers"; // Gets the State from the reducer(s)
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); // Creates the store from the State received from the reducer(s)

export default store;
