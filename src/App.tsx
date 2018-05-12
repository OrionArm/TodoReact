import * as React from 'react';
import {Route, Switch, withRouter} from "react-router";
import './App.css';
import logo from './logo.svg';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import TodosApp from './components/TodoApp/TodosApp';
import About from './pages/About';
import Home from './pages/Home';
import Auth from './pages/Auth';

import NotFound from './pages/NotFound';


export interface IAppProps {
    title?: string;
}
export interface IAppState{
    user: any;
}

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            user: null
        };
    }

    public login = user => {
        this.setState({user}, () => this.props.history.push('/todo'));
    };

    public logout = () => {
        this.setState({user: null}, () => this.props.history.push('/'))
    };


    public render() {
        return (
            <div className="App">
                <Header><img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Ract TooDoo</h1>

                </Header>
                <Content>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/todo" component={TodosApp}/>
                        <Route path="/login" component={Auth}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);

