import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import store, { history }from "./store";


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
