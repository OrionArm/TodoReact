import React from "react";
import PropTypes from "prop-types";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Task from "../Task/Task";

const TasksList = props => {
    let taskArray;
    if (props.tasks) {
        let tasksKeys = Object.keys(props.tasks);
         taskArray = tasksKeys
            .map( task => [...Array(props.tasks[task]) ])
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
    }
    return (
        <TransitionGroup component="section" className="todo-list">
            { taskArray ?
                taskArray.map(todo =>
                <CSSTransition key={todo.idTask}
                               timeout={500}
                               classNames="slide">
                    <Task
                        completed={todo.completed}
                        id={todo.idTask}
                        key={todo.idTask}
                        onDelete={props.onDelete}
                        onEdit={props.onEdit}
                        onToggle={props.onToggle}
                        projectId={props.projectId}
                        title={todo.title}
                    />
                </CSSTransition>
            )
            : null
            }
        </TransitionGroup>

    );

};

TasksList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    projectId: PropTypes.string,
    tasks: PropTypes.objectOf(PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        idTask: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }))
};

export default TasksList;