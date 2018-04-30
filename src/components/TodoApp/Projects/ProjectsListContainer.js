import {connect} from 'react-redux';

import {deleteProject, toggleProject, editProject} from '../../../actions/index';
import ProjectsList from "./ProjectsList/ProjectsList";

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteProject(id)),
        onEdit: (id, title) => dispatch(editProject(id, title)),
        onToggle: id => dispatch(toggleProject(id))
    };
}

const ProjectsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsList);

export default ProjectsListContainer;