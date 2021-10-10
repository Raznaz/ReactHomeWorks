import { Switch } from '@mui/material';
import React from 'react';
import { useRegContext } from '../../Context/RegState';

const label = { inputProps: { 'aria-label': 'controlled' } };

function SwitchButton() {
	const { isTurnBlackTheme, handleChangeColorTheme, state } =
		useRegContext();

	return (
		<div>
			<Switch
				checked={isTurnBlackTheme}
				onChange={handleChangeColorTheme}
				color="warning"
				{...label}
			/>
		</div>
	);
}

export default SwitchButton;
