import React, { useRef } from 'react';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Input/Input';

function SearchCompetition() {
	const competitionInpRef = useRef();
	return (
		<div>
			<Form>
				<Input
					type="search"
					placeholder="Search game ..."
					onChange={(e) => {}}
					ref={competitionInpRef}
				/>
			</Form>
		</div>
	);
}

export default SearchCompetition;
