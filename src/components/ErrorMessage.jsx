import { Typography } from '@mui/material';
import React from 'react';

function ErrorMessage({ children, ...props }) {
	return (
		<Typography
			variant="body1"
			component="div"
			color="red"
			{...props}
		>
			{children}
		</Typography>
	);
}

export default ErrorMessage;
