import React from 'react';
import MyInput from './UI/Input/MyInput';

function FilterUser(props) {
	return (
		<div>
			<MyInput
				className="btn__search"
				type="search"
				placeholder="Search...."
				{...props}
			/>
		</div>
	);
}

export default FilterUser;
