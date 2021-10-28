import React from 'react';
import CompetitionsList from '../components/Competitions/CompetitionsList';
import SearchCompetition from '../components/Competitions/SearchCompetition';
import { Typography } from '@mui/material';

function Home() {
	return (
		<>
			<Typography
				component="h1"
				variant="h1"
				sx={{ textAlign: 'center', color: 'cornflowerblue' }}
			>
				Competitions
			</Typography>
			<SearchCompetition />
			<CompetitionsList />
		</>
	);
}

export default Home;
