import React from 'react';
import MyInput from './UI/Input/MyInput';

function FilterUser(props) {
	return (
		<div>
			<MyInput type="search" placeholder="Search...." {...props} />
		</div>
	);
}

export default FilterUser;
