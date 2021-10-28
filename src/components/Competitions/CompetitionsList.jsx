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
		<Grid container spacing={4}>
			{newFilterdArr.map((comp) => (
				<CompetitionItem key={comp.id} {...comp} />
			))}
		</Grid>
	);
}

export default CompetitionsList;
