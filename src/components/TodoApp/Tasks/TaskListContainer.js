import {connect} from 'react-redux';

import {deleteTodo, toggleTodo, editTodo} from '../../../actions/index';
import TasksList from "./TasksList/TasksList";

function mapStateToProps(state, props) {
    const projectPath = props.projectId;
    let tasks;
    try {
        tasks = state.tasks[props.projectId];
    } catch (e) {

        Сonsole.log(e);
    }
    return {
        projectId: projectPath,
        tasks: tasks
    };

}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: projectTask => dispatch(deleteTodo(projectTask)),
        onEdit: projectTask => dispatch(editTodo(projectTask)),
        onToggle: projectTask => dispatch(toggleTodo(projectTask))
    };
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TaskListContainer;