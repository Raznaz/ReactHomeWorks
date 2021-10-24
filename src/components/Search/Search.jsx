import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterUsers } from '../../redux/actions/userActions';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Input/Input';

function Search() {
	const dispatch = useDispatch();

	const bodyInputRef = useRef();

	return (
		<Form>
			<Input
				type="search"
				placeholder="Search..."
				onChange={(e) =>
					dispatch(filterUsers(bodyInputRef.current.value))
				}
				ref={bodyInputRef}
			/>
		</Form>
	);
}

export default Search;
