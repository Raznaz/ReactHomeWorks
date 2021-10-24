import React from 'react';

function Form({ children, ...props }) {
	return (
		<form sx={{ width: '100%', mt: 1 }} noValidate {...props}>
			{children}{' '}
		</form>
	);
}

export default Form;
