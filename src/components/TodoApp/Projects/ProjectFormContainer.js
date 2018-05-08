import {connect} from 'react-redux';

import {addProject} from '../../../store/actions/index';
import ProjectForm from "./ProjectForm/Form";

function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(addProject(title))
    };
}

const ProjectFormContainer = connect(null, mapDispatchToProps)(ProjectForm);

export default ProjectFormContainer;