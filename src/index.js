import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RegState } from '../src/actions/RegState';

ReactDOM.render(
	<RegState>
		<App />
	</RegState>,
	document.getElementById('root'),
);
