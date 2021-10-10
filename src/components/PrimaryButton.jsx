import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
	root: {
		marginTop: '10px',
	},
});

function PrimaryButton({ children, ...props }) {
	const styles = useStyles();
	return (
		<Button
			className={styles.root}
			type="submit"
			variant="contained"
			color="primary"
			{...props}
		>
			{children}
		</Button>
	);
}

export default PrimaryButton;
