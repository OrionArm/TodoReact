import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {connect} from "react-redux";
import Toggle from 'react-toggle';
import "react-toggle/style.css";

import {logIn, signUp, logout, authCheckState} from "../store/actions";


class Auth extends Component {
    state = {
        auth: false,
        signUp: false,
    };

    onSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.signUp) {
            return this.props.onSignUp({
                password: data.get('password'),
                email: data.get('email')
            });

        }
        return this.props.onSignIn({
            password: data.get('password'),
            email: data.get('email')
        });

    };
    toggleAuth = () => {
        this.setState({signUp: !this.state.signUp})
    };

    componentDidMount() {
        if (this.props.auth) this.setState({auth: !this.state.auth})
    }

    render() {
        if (!this.state.auth) {
            return <Container className="loginForm">
                {this.state.signUp ? <span>Registration</span> : <span>Login</span>}
                <br/>
                <label>
                    <Toggle
                        name="auth-state"
                        defaultChecked={this.state.signUp}
                        onChange={this.toggleAuth}/>
                </label>
                <Form onSubmit={this.onSubmit} autoComplete="on">
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email"
                               autoComplete="on"
                               placeholder="Адрес электронной почты"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password"
                               name="password"
                               autoComplete="on"
                               placeholder="Пароль"
                        />
                    </FormGroup>

                    <br/>
                    <Button type="submit">Войти</Button>

                </Form>
            </Container>
        }
        return (
            <Container className="loginForm">
                <p>Welcome {this.props.auth.displayName}! You are now signed-in!</p>
                <button onClick={this.props.onLogout}>Sign-out</button>
                <button onClick={this.props.checkAuth}>Check auth</button>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSignIn: authData => dispatch(logIn(authData)),
        onSignUp: authData => dispatch(signUp(authData)),
        onLogout: () => dispatch(logout()),
        checkAuth: () => dispatch(authCheckState()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);