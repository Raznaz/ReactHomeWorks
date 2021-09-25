import React from 'react';

function SortUser({ value, options, onSortChange, valueDefault }) {
	return (
		<div>
			<select
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
			</select>
		</div>
	);
}

export default SortUser;
