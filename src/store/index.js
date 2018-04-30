import reducer from "../reducers";
import {applyMiddleware, createStore, compose} from "redux";
import state from '../data/state2';

const initialStore = {
    projects: [
        {
            "title": "Create new project",
            "completed": false,
            "id": 1,
            "tasks": [
                {
                    "title": "create new task",
                    "completed": false,
                    "id": 1
                },
                {
                    "title": "its simple",
                    "completed": true,
                    "id": 2
                },

            ]
        }
    ]
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, state, composeEnhancers( applyMiddleware(), ));

export default store;