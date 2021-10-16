import React from 'react';

function Button({ children, ...props }) {
	return (
		<button type="submit" {...props}>
			{children}
		</button>
	);
}

export default Button;
