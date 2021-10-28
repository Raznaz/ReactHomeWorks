import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Link } from 'react-router-dom';
import {
	HomeMax,
	HomeOutlined,
	NewReleasesOutlined,
} from '@mui/icons-material';

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
						<Link to="/">
							<HomeOutlined />
						</Link>
					</Typography>

					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{/* <IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-haspopup="true"
							color="inherit"
						>
							<AddReactionIcon />
						</IconButton> */}
						<Link
							to="/create"
							style={{
								color: '#fff',
								textDecoration: 'none',
							}}
						>
							<span>NEW</span>
							<NewReleasesOutlined />
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
