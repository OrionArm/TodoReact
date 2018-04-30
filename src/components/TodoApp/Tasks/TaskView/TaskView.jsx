import React from "react";
import TaskListContainer from "../TaskListContainer";
import TasksFormContainer from "../TasksFormContainer";


const TaskView = ({match}) => {
    const id = match.params.id;

    return (
        <div>
            <TasksFormContainer projectId={id} />
            <TaskListContainer projectId={id}/>
        </div>
    );
};

export default TaskView;