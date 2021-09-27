import React from 'react';
import MySelect from './UI/Select/MySelect';

function SortUser({ value, onSortChange }) {
	return (
		<div>
			<MySelect
				valueDefault="Sort by age"
				value={value}
				onChange={(e) => onSortChange(e.target.value)}
				options={[
					{ value: 'minToMax', title: 'Min to Max' },
					{ value: 'maxToMin', title: 'Max to Min' },
				]}
			/>

			{/* <select
				value={value}
				onChange={(e) => onSortChange(e.target.value)}
			>
				<option value="" disabled>
					{valueDefault}
				</option>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.title}
					</option>
				))}
			</select> */}
		</div>
	);
}

export default SortUser;
