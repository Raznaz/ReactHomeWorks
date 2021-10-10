import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
	root: {
		marginTop: '10px',
		marginRight: '10px',
	},
});

function SecondaryButton({ children, ...props }) {
	const styles = useStyles();
	return (
		<Button
			className={styles.root}
			variant="contained"
			color="secondary"
			{...props}
		>
			{children}
		</Button>
	);
}

export default SecondaryButton;
