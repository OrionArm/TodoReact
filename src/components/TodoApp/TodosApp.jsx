import React from "react";
import {Row, Col} from 'reactstrap';

import Sidenav from '../Sidenav/SideNav';
import TaskView from "./Tasks/TaskView/TaskView";
import {Route, Switch} from 'react-router-dom';
import About from "../../pages/About";


const TodosApp = () => {
    return (
        <div className="TodoApp">

            <Row>
                <Col xs="4" className='side-bar'><Sidenav/> </Col>
                <Col xs="8">
                    <Switch>

                        <Route exact path="/todo" render={() => <About/>} />

                        <Route path="/todo/project/:id" component={TaskView} />

                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default TodosApp;