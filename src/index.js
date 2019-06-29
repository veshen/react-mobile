import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import 'rxjs';

import './index.css';
import App from './components/App';
import Todolist from './components/Todolist';
import store from './store'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <div>
                <Route path="/" exact component={App} />
                <Route path="/a" component={Todolist} />
                <Link to="/a">Todolist</Link>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
    );
registerServiceWorker();
