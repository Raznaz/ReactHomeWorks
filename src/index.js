import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RegState } from './Context/RegState';

ReactDOM.render(
	<RegState>
		<App />
	</RegState>,
	document.getElementById('root'),
);
