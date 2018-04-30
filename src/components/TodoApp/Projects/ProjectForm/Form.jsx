import React from 'react';
import PropTypes from "prop-types";

import Button from '../../../UI/Button/Button';

class ProjectForm extends React.Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }

    handleChange = (e) => {
        let title = e.target.value;
        this.setState({title});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({title: ''});
        }
    };

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.title}
                       onChange={this.handleChange}
                       placeholder="Создать проект"/>
                <Button type="submit">Создать</Button>
            </form>
        );
    }
}



export default ProjectForm;