import {connect} from 'react-redux';

import {addTodo} from '../../../actions/index';
import TasksForm from './TasksForm/TasksForm';
function mapStateToProps(state, props) {
    let projectId;
    try {
        projectId = state.projects[props.projectId].idProject;
    } catch (e) {
        // console.log(e)
    }

    return {
        currentProjectId: projectId
    };

}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: newTask => dispatch(addTodo(newTask))
    };
}

const TasksFormContainer = connect(mapStateToProps, mapDispatchToProps)(TasksForm);

export default TasksFormContainer;