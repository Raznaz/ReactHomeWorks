import { AddReaction } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { forwardRef } from 'react';

export const InputFile = forwardRef((props, ref) => {
	return (
		<label htmlFor="upload-photo">
			<input
				sx={{ display: 'none' }}
				id="upload-photo"
				name="upload-photo"
				type="file"
			/>
			<Fab
				color="secondary"
				size="small"
				component="span"
				aria-label="add"
				variant="extended"
			>
				<AddReaction />
			</Fab>
		</label>
	);
});
