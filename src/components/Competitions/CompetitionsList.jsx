import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CompetitionItem from './CompetitionItem';

function CompetitionsList() {
	const { competitions, filteredCompetitions } = useSelector(
		(state) => state.competitionsArr,
	);
	console.log('STATE:', filteredCompetitions);

	const newFilterdArr = filteredCompetitions.length
		? filteredCompetitions
		: competitions;
	return (
		<Grid
			container
			spacing={2}
			justifyContent="space-between"
			alignItems="center"
		>
			{newFilterdArr.map((comp) => (
				<Grid key={comp.id} item>
					<CompetitionItem {...comp} />
				</Grid>
			))}
		</Grid>
	);
}

export default CompetitionsList;
