import React from 'react';
import './MyButton.css';

function MyButton({ children, ...props }) {
	return (
		<div>
			<button {...props}>{children}</button>
		</div>
	);
}

export default MyButton;
