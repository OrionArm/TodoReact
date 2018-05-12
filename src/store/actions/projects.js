export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';

export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';

export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const TOGGLE_PROJECT_SUCCESS = 'TOGGLE_PROJECT_SUCCESS';

export const EDIT_PROJECT = 'EDIT_PROJECT';
export const EDIT_PROJECT_SUCCESS = 'EDIT_PROJECT_SUCCESS';

export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_PROJECTS_SUCCESS = 'SET_PROJECTS_SUCCESS';

export const INIT_PROJECTS = 'INIT_PROJECTS';
export const INIT_PROJECTS_FAIL = 'INIT_PROJECTS_FAIL';
export const INIT_PROJECTS_SUCCESS = 'INIT_PROJECTS_SUCCESS';

export function addProject(title) {
    return {
        title,
        type: ADD_PROJECT
    };
}

export const addProjectSuccess = (key, note) => ({
    type: ADD_PROJECT_SUCCESS,
    payload: {key, note}
});

export function deleteProject(id) {
    return {
        id,
        type: DELETE_PROJECT
    };
}

export const deleteProjectSuccess = (key, note) => ({
    type: DELETE_PROJECT_SUCCESS,
    payload: {key, note}
});

export function toggleProject(id) {
    return {
        id,
        type: TOGGLE_PROJECT
    };
}

export function editProject(id, title) {
    return {
        id,
        title,
        type: EDIT_PROJECT
    };
}

export const editProjectSuccess = (key, note) => ({
    type: EDIT_PROJECT_SUCCESS,
    payload: {key, note}
});

export function setProjects(projects) {
    return {
        projects,
        type: SET_PROJECTS
    };
}

export function initProjects() {
    return {
        type: INIT_PROJECTS
    };
}

export function initProjectsFail() {
    return {
        type: INIT_PROJECTS_FAIL
    };
}