export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';

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