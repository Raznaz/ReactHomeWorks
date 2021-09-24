import React from 'react';

function FilterUser(props) {
	return (
		<div>
			<input type="search" placeholder="SEARCH...." {...props} />
		</div>
	);
}

export default FilterUser;
