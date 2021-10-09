import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
	root: {
		width: '100%',
		marginTop: 5,
	},
});

function Form({ children, ...props }) {
	const styles = useStyles();
	return (
		<form className={styles.root} noValidate {...props}>
			{children}
		</form>
	);
}

export default Form;
