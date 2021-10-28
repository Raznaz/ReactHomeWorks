import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterCompetitions } from '../../redux/actions/competitionActions';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Input/Input';

function SearchCompetition() {
	const competitionInpRef = useRef();
	const dispatch = useDispatch();
	return (
		<div>
			<Form>
				<Input
					type="search"
					placeholder="Search game ..."
					onChange={() => {
						dispatch(
							filterCompetitions(competitionInpRef.current.value),
						);
					}}
					ref={competitionInpRef}
				/>
			</Form>
		</div>
	);
}

export default SearchCompetition;
