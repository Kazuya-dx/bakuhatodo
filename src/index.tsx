import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Redux関連のライブラリやファイル
import { Provider } from 'react-redux';
import store from './store';

// DOMのrender
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);