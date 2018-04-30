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
                        key={todo.idTask}
                        id={todo.idTask}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={props.onDelete}
                        onToggle={props.onToggle}
                        onEdit={props.onEdit}
                        projectId={props.projectId}
                    />
                </CSSTransition>
            )
            : null
            }
        </TransitionGroup>

    );

};

TasksList.propTypes = {
    projectId: PropTypes.string,
    tasks: PropTypes.objectOf(PropTypes.shape({
        idTask: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default TasksList;