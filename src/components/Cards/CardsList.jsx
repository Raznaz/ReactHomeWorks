import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
	fetchUser,
	filterUsers,
	getUsersFromLS,
} from '../../redux/actions/userActions';
import CardPerson from './CardPerson';

function CardsList() {
	const { usersArr } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		const participantsFromLS = JSON.parse(
			localStorage.getItem('listParticipant'),
		);

		// participantsFromLS
		// 	? dispatch(getUsersFromLS(participantsFromLS))
		// 	: dispatch(getUsersFromLS(usersArr.users));

		dispatch(fetchUser());
	}, []);

	useEffect(() => {
		dispatch(filterUsers());
	}, [usersArr.users]);

	useEffect(() => {
		localStorage.setItem(
			'listParticipant',
			JSON.stringify(usersArr.users),
		);
	}, [usersArr.users]);

	return (
		<Grid
			container
			spacing={2}
			justifyContent="space-between"
			alignItems="center"
		>
			{usersArr.filteredUsers.map((user, i) => (
				<Grid key={user.id} item>
					<CardPerson {...user} />
				</Grid>
			))}
		</Grid>
	);
}

export default CardsList;
