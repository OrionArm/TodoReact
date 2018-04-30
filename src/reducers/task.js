import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO
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

// function oldreducer(state = [], action) {
//     console.log('taskReducer',state);
//
//     switch (action.type) {
//         case ADD_TODO:
//             return [...state, taskReducer(undefined, action)];
//
//         case DELETE_TODO:
//             const index = state.findIndex(todo => todo.id === action.id);
//
//             return [
//                 ...state.slice(0, index),
//                 ...state.slice(index + 1)
//             ];
//
//         case TOGGLE_TODO:
//             return state.map(todo => taskReducer(todo, action));
//
//         case EDIT_TODO:
//             return state.map(todo => taskReducer(todo, action));
//
//         default:
//             return state;
//     }
// }

let taskId = 5;

function reducer(state = [], action) {

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
        default:
            return state;
    }
}

export default reducer;