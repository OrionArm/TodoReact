import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';

class Login extends Component {
    onSubmit = event => {
        event.preventDefault();

        this.props.onLogin({
            password: this.passwordInput.value,
            username: this.usernameInput.value
        });
    };


    render() {
        return (
            <Container className="loginForm">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email"
                               placeholder="Адрес электронной почты"
                               ref={input => this.usernameInput = input}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password"
                               name="password"
                               placeholder="Пароль"
                               ref={input => this.passwordInput = input}
                        />
                    </FormGroup>

                    <Button type="submit">Войти</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;