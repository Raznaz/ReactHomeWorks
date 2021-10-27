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
	// console.log(competitions);

	const { id } = useParams();
	console.log(id);
	const { status, name, winner } = competitions.find(
		(comp) => comp.id === id,
	);
	// console.log(status);

	if (!status) {
		return (
			<div>
				<Grid container spacing={2}>
					<Grid item xs={8} sx={{ bgcolor: '#e1e1e1', p: 2 }}>
						<div>FALSE</div>
						{/* <Search /> */}
						<CardsList />
					</Grid>
					<Grid item xs={4} sx={{ bgcolor: '#eee', p: 2 }}>
						{/* <Registration /> */}
						{/* <WinnerInfo /> */}
						<div>ID game: {id}</div>
						<div>Name game: {name}</div>
						<div>Winner: {winner}</div>
						<div>Time: {Date.now()}</div>
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
