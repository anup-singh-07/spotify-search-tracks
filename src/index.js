import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import AppRouter from './containers/AppRouter/AppRouter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
);