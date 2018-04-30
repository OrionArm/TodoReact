export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';

export function addProject(title) {
    return {
        type: ADD_PROJECT,
        title
    };
}

export function deleteProject(id) {
    return {
        type: DELETE_PROJECT,
        id
    };
}

export function toggleProject(id) {
    return {
        type: TOGGLE_PROJECT,
        id
    };
}

export function editProject(id, title) {
    return {
        type: EDIT_PROJECT,
        id,
        title
    };
}