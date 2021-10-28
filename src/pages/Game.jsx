import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CardsList from '../components/Cards/CardsList';
import Registration from '../components/Registration/Registration';
import Search from '../components/Search/Search';
import WinnerInfo from '../components/WinnerInfo/WinnerInfo';

function Game() {
	const { competitions } = useSelector(
		(state) => state.competitionsArr,
	);

	const { id } = useParams();
	console.log(id);
	const { status, name, winnerName, time } = competitions.find(
		(comp) => comp.id === id,
	);

	if (!status) {
		return (
			<div>
				<Grid container spacing={2}>
					<Grid item xs={8} sx={{ bgcolor: '#e1e1e1', p: 2 }}>
						<div>FALSE</div>
						<CardsList />
					</Grid>
					<Grid item xs={4} sx={{ bgcolor: '#eee', p: 2 }}>
						<div>ID game: {id}</div>
						<div>Name game: {name}</div>
						<div>Winner: {winnerName}</div>
						<div>Time: {time}</div>
					</Grid>
				</Grid>
			</div>
		);
	}

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={8} sx={{ bgcolor: '#e1e1e1', p: 2 }}>
					<Search />
					<CardsList />
				</Grid>
				<Grid item xs={4} sx={{ bgcolor: '#eee', p: 2 }}>
					<Registration />
					<WinnerInfo idGame={id} />
				</Grid>
			</Grid>
		</div>
	);
}

export default Game;
