import React from 'react';

function MySelect(props) {
	const { defaultValue, value, onSortChange, options } = props;
	return (
		<select
			value={value}
			onChange={(e) => onSortChange(e.target.value)}
		>
			<option disabled value="">
				{defaultValue}
			</option>
			{options.map((opt) => (
				<option key={opt.value} value={opt.value}>
					{opt.title}
				</option>
			))}
		</select>
	);
}

export default MySelect;
