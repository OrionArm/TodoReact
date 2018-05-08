import React, { Component } from 'react';
import PropTypes from "prop-types";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Project from "../Project/Project";

class ProjectsList extends Component {

    componentDidMount() {
        this.props.onInitProjects();
    }

    render() {
        const projects = this.props.projects;
        let projectsKeys = Object.keys(projects);
        let projectsArray;
        if (projectsKeys) {
            projectsArray = projectsKeys
                .map(project => [...Array(projects[project])])
                .reduce((arr, el) => {
                    return arr.concat(el)
                }, []);
        }
        return (
            <TransitionGroup component="section" className="todo-list">
                {projectsArray ?
                    projectsArray.map(project =>
                        <CSSTransition key={project.idProject}
                                       timeout={500}
                                       classNames="slide">
                            <Project
                                key={project.idProject}
                                id={project.idProject}
                                title={project.title}
                                completed={project.completed}
                                onDelete={this.props.onDelete}
                                onToggle={this.props.onToggle}
                                onEdit={this.props.onEdit}
                            />
                        </CSSTransition>
                    )
                    : <div> Нет задач</div>
                }
            </TransitionGroup>
        );
    };
}
ProjectsList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    projects: PropTypes.objectOf(PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        idProject: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired
};

export default ProjectsList;