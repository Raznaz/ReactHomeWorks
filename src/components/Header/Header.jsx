import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Box sx={{ flexGrow: 1, mb: 2 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h4"
						component="h1"
						noWrap
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						<Link to="/">Home </Link>
						<Link to="/about">About</Link>
						<Link to="/competition/34234">Game</Link>
					</Typography>

					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-haspopup="true"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
