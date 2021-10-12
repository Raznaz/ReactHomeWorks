import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useRegContext } from '../../actions/RegState';

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

const blackStyle = makeStyles({
	root: {
		backgroundColor: 'black',
	},
});

function MainContainer({ children, ...props }) {
	const { state } = useRegContext();

	const styles = useStyles();
	const black = blackStyle();

	return (
		<Container
			className={styles.root}
			container="main"
			maxWidth="xs"
			{...props}
			sx={state.isTurnBlackTheme ? { backgroundColor: 'gray' } : null}
		>
			{children}
		</Container>
	);
}

export default MainContainer;
