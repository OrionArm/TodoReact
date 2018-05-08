export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const SET_PROJECTS = 'SET_PROJECTS';
export const INIT_PROJECTS = 'INIT_PROJECTS';
export const INIT_PROJECTS_FAIL = 'INIT_PROJECTS_FAIL';

export function addProject(title) {
    return {
        title,
        type: ADD_PROJECT
    };
}

export function deleteProject(id) {
    return {
        id,
        type: DELETE_PROJECT
    };
}

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