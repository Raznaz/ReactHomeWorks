import React from 'react';
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h5"
					component="span"
					sx={{ flexGrow: 1 }}
				>
					REGISTRATION FORM
				</Typography>
				<IconButton color="inherit">
					<LoginIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
