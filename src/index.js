import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';

//Need Store for Provider
import store from './store'


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
