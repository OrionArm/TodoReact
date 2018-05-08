import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {auth} from "../firebaseIndex";
import {connect} from "react-redux";
import {logIn, signUp, logout} from "../store/actions";
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import {push} from 'react-router-redux';


class Auth extends Component {
    state = {
        isSignedIn: false,
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
        auth.onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
    }

    render() {
        if (!this.state.isSignedIn) {
            return <Container className="loginForm">
                {this.state.signUp ? <span>Registration</span> : <span>Login</span>}
                <br/>
                <label>
                    <Toggle
                        name="auth-state"
                        defaultChecked={this.state.signUp}
                        onChange={this.toggleAuth}/>
                </label>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email"
                               placeholder="Адрес электронной почты"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password"
                               name="password"
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
                <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
                <button onClick={this.props.onLogout}>Sign-out</button>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSignIn: authData => dispatch(logIn(authData)),
        onSignUp: authData => dispatch(signUp(authData)),
        onLogout: () => dispatch(logout()),
    };
}

export default connect(null, mapDispatchToProps)(Auth);