import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    SET_TODO,
    INIT_TODO_FAIL
} from "../actions/tasks";
import update from 'immutability-helper';

function taskReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                completed: false,
                id: action.id,
                title: action.title
            };

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        case EDIT_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                title: action.title
            });

        default:
            return state;
    }
}


let taskId = 5;

function reducer(state = {}, action) {

    switch (action.type) {
        case ADD_TODO: {
            const idTask = `id${++taskId}`;
            const newTask = {
                completed: false,
                idTask: idTask,
                title: action.taskTitle
            };
            return {
                ...state,
                [action.projectId]: {
                    ...state[action.projectId],
                    [idTask]: newTask
                }
            }

        }
        case DELETE_TODO: {
            return update(state, {
                [action.projectId]: {
                    $unset: [action.taskId]
                }
            });
        }
        case TOGGLE_TODO: {
            return update(state, {
                [action.projectId]: {
                    [action.taskId]: {
                        $toggle: ["completed"]
                    }
                }
            });
        }
        case EDIT_TODO: {
            return update(state, {
                [action.projectId]: {
                    [action.taskId]: {
                        title:
                            {$set: action.taskTitle}
                    }
                }
            });
        }
        case SET_TODO : {
            return update(state, {$set: action.tasks})
        }
        case INIT_TODO_FAIL : {
            return update(state, {})
        }
        default: return state;
    }
}

export default reducer;