import {ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT,
    TOGGLE_PROJECT, SET_PROJECTS, INIT_PROJECTS_FAIL} from "../actions/projects";
import update from 'immutability-helper';
let pId = 5;

function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_PROJECT: {
            const projectId = `id${++pId}`;
            const newProject = {...state}[projectId] = {
                completed: false,
                idProject: projectId,
                title: action.title,
            };
            return { ...state, [projectId]: newProject}
        }
        case DELETE_PROJECT: {
            return update(state, {
                $unset: [action.id]
            });
        }
        case TOGGLE_PROJECT:
            return update(state, {
                [action.id]: {
                    $toggle: ["completed"],
                }
            });
        case EDIT_PROJECT: {
            return update(state, {
                [action.id]: {
                    title: {$set: action.title},
                }
            })
        }
        case SET_PROJECTS: {
            return update(state, {$set: action.projects})
        }
        case INIT_PROJECTS_FAIL : {
            return update(state, {})
        }
        default:
            return state;
    }
}

export default reducer;
