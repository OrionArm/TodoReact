import reducer from "../reducers";
import {applyMiddleware, createStore, compose} from "redux";
import state from '../data/state2';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, state, composeEnhancers( applyMiddleware(), ));

export default store;