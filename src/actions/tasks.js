export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


export function addTodo(task) {
    return {
        type: ADD_TODO,
        projectId: task.projectId,
        taskTitle: task.taskTitle,
    };
}

export function deleteTodo(task) {
    return {
        type: DELETE_TODO,
        projectId: task.projectId,
        taskId: task.taskId
    };
}

export function toggleTodo(task) {
    return {
        type: TOGGLE_TODO,
        projectId: task.projectId,
        taskId: task.taskId
    };
}

export function editTodo(task) {
    return {
        type: EDIT_TODO,
        projectId: task.projectId,
        taskId: task.taskId,
        taskTitle: task.taskTitle
    };
}