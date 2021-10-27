import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CompetitionItem from './CompetitionItem';

function CompetitionsList() {
	const { competitions } = useSelector(
		(state) => state.competitionsArr,
	);
	console.log('STATE:', competitions);
	return (
		<Grid
			container
			spacing={2}
			justifyContent="space-between"
			alignItems="center"
		>
			{competitions.map((comp) => (
				<Grid key={comp.id} item>
					<CompetitionItem {...comp} />
				</Grid>
			))}
		</Grid>
	);
}

export default CompetitionsList;
