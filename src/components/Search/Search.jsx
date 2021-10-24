import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterUsers } from '../../redux/actions/userActions';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Input/Input';

function Search() {
	const dispatch = useDispatch();
	const { filterValue } = useSelector((state) => state.usersArr);

	return (
		<Form>
			<Input
				type="search"
				placeholder="Search..."
				value={filterValue}
				onChange={(e) => dispatch(filterUsers(e.target.value))}
			/>
		</Form>
	);
}

export default Search;
