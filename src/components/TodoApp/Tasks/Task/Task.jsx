import React from 'react';
import PropTypes from 'prop-types';
import {Form, Label, Input, FormText, ListGroup, ListGroupItem, Button} from 'reactstrap';

import Checkbox from '../../../UI/Checkbox/Checkbox';
import MyButton from '../../../UI/Button/Button';

class Task extends React.Component {
    static propTypes = {
        completed: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        onToggle: PropTypes.func.isRequired,
        projectId:  PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,

    };

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };

    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.editing) {
    //         this.refs.title.focus();
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        // const title = this.refs.title.value;
        const title = event.target[0].value;
        if (title !== ""){
            this.props.onEdit({
                projectId: this.props.projectId,
                taskId: this.props.id,
                taskTitle: title
            });
        }
        this.setState({editing: false});
    };

    handleDelete = () => {
        this.props.onDelete({taskId: this.props.id, projectId: this.props.projectId});
    };

    handleToggle = () => {
        this.props.onToggle({taskId: this.props.id, projectId: this.props.projectId});
    };

    handleEdit = () => {
        this.setState({editing: true});
    };

    displayForm = () => {
        return (
            <Form onSubmit={this.handleSubmit} inline>
                <ListGroupItem>
                    <Label for="todo-edit-form">Task</Label>
                    <Input type="text"
                           name="email"
                           ref="title"
                           defaultValue={this.props.title}/>
                    <MyButton className="save" icon="save" type="submit"/>

                </ListGroupItem>
            </Form>
        )
    };

    displayTask = () => {
        return (
            <ListGroupItem className={`todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox
                    checked={this.props.completed}
                    onChange={this.handleToggle}/>

                <span className="todo-title">{this.props.title}</span>
                <MyButton
                    className="edit" icon="edit"
                    onClick={this.handleEdit}/>
                <MyButton
                    className="delete" icon="delete"
                    onClick={this.handleDelete}/>
            </ListGroupItem>
        )
    };

    render() {
        return this.state.editing ? this.displayForm() : this.displayTask();
    }


}

export default Task;