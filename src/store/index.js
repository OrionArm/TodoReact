import reducer from "./reducers";
import {applyMiddleware, createStore, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {watchProjects, watchAuth} from "./sagas";
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';



export const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers( applyMiddleware(
    middleware,
    sagaMiddleware
    ))
);


sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchProjects);

export default store;