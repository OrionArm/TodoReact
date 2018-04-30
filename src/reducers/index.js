import { combineReducers } from 'redux';
import { default as projects } from './project';
import { default as tasks } from './task';

const reducer = combineReducers({
    projects,
    tasks
});

export default reducer;

