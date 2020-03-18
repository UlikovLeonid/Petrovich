import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import 'semantic-ui-css/semantic.min.css'
import './app.sass'
import App from './App';
const store = createStore();



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

