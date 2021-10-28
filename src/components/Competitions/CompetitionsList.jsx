import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterCompetitions } from '../../redux/actions/competitionActions';
import CompetitionItem from './CompetitionItem';

function CompetitionsList() {
	const { competitions, filteredCompetitions } = useSelector(
		(state) => state.competitionsArr,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filterCompetitions(''));
	}, [competitions]);

	const newFilterdArr = filteredCompetitions.length
		? filteredCompetitions
		: competitions;
	return (
		<Grid
			container
			spacing={4}
			justifyContent="center"
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
