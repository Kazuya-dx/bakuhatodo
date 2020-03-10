import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from './components/Auth';
import './index.css';

// Redux関連のライブラリやファイル
import { Provider } from 'react-redux';
import store from './store';

// React-Router-DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckRedirect from './components/CheckRedirect';

// DOMのrender
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/login' exact component={Auth} />
                <CheckRedirect>
                    <Switch>
                        <Route path='/' exact component={App} />
                    </Switch>
                </CheckRedirect>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);