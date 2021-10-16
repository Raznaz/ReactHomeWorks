import React from 'react';
import './Square.scss';

function Square(props) {
	const { value, handleClick } = props;

	const classes = ['btn'];

	if (value) {
		classes.push('disabled');
	}

	return (
		<button
			className={classes.join(' ')}
			onClick={handleClick}
			disabled={value}
		>
			{value}
		</button>
	);
}

export default Square;
