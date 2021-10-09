import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
	root: {
		marginTop: 20,
		padding: '20px 10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		boxShadow: '0 3px 5px 2px #7c7c7c4b',
	},
});

function MainContainer({ children, ...props }) {
	const styles = useStyles();

	return (
		<Container
			className={styles.root}
			container="main"
			maxWidth="xs"
			{...props}
		>
			{children}
		</Container>
	);
}

export default MainContainer;
