import React from 'react';
import MySelect from './UI/Select/MySelect';

function SortUser({ value, onSortChange }) {
	return (
		<div>
			<MySelect
				defaultValue="Sort by age"
				value={value}
				onSortChange={onSortChange}
				options={[
					{ value: 'minToMax', title: 'Min to Max' },
					{ value: 'maxToMin', title: 'Max to Min' },
				]}
			/>
		</div>
	);
}

export default SortUser;
