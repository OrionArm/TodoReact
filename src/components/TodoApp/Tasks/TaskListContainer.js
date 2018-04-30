import {connect} from 'react-redux';

import {deleteTodo, toggleTodo, editTodo} from '../../../actions/index';
import TasksList from "./TasksList/TasksList";

function mapStateToProps(state, props) {
    const projectPath = props.projectId;
    let tasks;
    try {
        tasks = state.tasks[props.projectId];
    } catch (e) {
        console.log(e);
    }
    return {
        tasks: tasks,
        projectId: projectPath
    };

}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: projectTask => dispatch(deleteTodo(projectTask)),
        onToggle: projectTask => dispatch(toggleTodo(projectTask)),
        onEdit: projectTask => dispatch(editTodo(projectTask))
    };
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TaskListContainer;