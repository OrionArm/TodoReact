import { combineReducers } from 'redux';
import { default as projects } from './project';
import { default as tasks } from './task';
import { default as auth } from './auth';
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
    projects,
    tasks,
    auth,
    router: routerReducer
});

export default reducer;

