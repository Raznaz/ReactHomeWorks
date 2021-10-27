import { Grid } from '@mui/material';
import React from 'react';
import CardsList from '../components/Cards/CardsList';
import Registration from '../components/Registration/Registration';
import Search from '../components/Search/Search';
import WinnerInfo from '../components/WinnerInfo/WinnerInfo';

function Game() {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={8} sx={{ bgcolor: '#e1e1e1', p: 2 }}>
					<Search />
					<CardsList />
				</Grid>
				<Grid item xs={4} sx={{ bgcolor: '#eee', p: 2 }}>
					<Registration />
					<WinnerInfo />
				</Grid>
			</Grid>
		</div>
	);
}

export default Game;
