import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import App from './App';

const store = Store();

const renderContainer = document.getElementById('app');


ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>,
renderContainer);
