import {connect} from 'react-redux';

import {deleteProject, toggleProject, editProject} from '../../../store/actions/index';
import ProjectsList from "./ProjectsList/ProjectsList";
import {initProjects} from "../../../store/actions";

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteProject(id)),
        onEdit: (id, title) => dispatch(editProject(id, title)),
        onInitProjects: () => dispatch(initProjects()),
        onToggle: id => dispatch(toggleProject(id)),

    };
}

const ProjectsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsList);

export default ProjectsListContainer;