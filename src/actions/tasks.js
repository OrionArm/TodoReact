export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


export function addTodo(task) {
    return {
        projectId: task.projectId,
        taskTitle: task.taskTitle,
        type: ADD_TODO,
    };
}

export function deleteTodo(task) {
    return {
        projectId: task.projectId,
        taskId: task.taskId,
        type: DELETE_TODO
    };
}

export function toggleTodo(task) {
    return {
        projectId: task.projectId,
        taskId: task.taskId,
        type: TOGGLE_TODO
    };
}

export function editTodo(task) {
    return {
        projectId: task.projectId,
        taskId: task.taskId,
        taskTitle: task.taskTitle,
        type: EDIT_TODO
    };
}