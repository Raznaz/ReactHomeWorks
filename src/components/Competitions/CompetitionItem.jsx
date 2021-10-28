import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import MyButton from '../UI/Button/MyButton';
import { Link } from 'react-router-dom';
import { Box, flexbox } from '@mui/system';

function CompetitionItem(props) {
	const { id, name, status, img, winnerName } = props;
	return (
		<Grid item xs={12} md={3}>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<CardMedia
					component="img"
					image={img}
					alt={name}
					sx={{ height: 100 }}
				/>
				<CardContent>
					<Typography
						variant="h6"
						component="h3"
						sx={{ color: 'blue' }}
					>
						Id: {id}
					</Typography>
					<Divider />
					<Typography
						gutterBottom
						variant="div"
						component="div"
						sx={{ fontWeight: '700' }}
					>
						{name}
					</Typography>
					<Divider />
					<Typography variant="body2" sx={{ color: 'blue' }}>
						STATUS:
						{status ? (
							<span
								style={{
									color: 'green',
									fontSize: '16px',
									marginLeft: '5px',
								}}
							>
								Active
							</span>
						) : (
							<span
								style={{
									color: 'red',
									fontSize: '14px',
									marginLeft: '5px',
								}}
							>
								Finished
							</span>
						)}
					</Typography>
					{status ? null : (
						<Typography variant="body2" sx={{ color: 'blue' }}>
							WINNER:{' '}
							<div
								style={{ color: 'yellow', backgroundColor: 'black' }}
							>
								{winnerName}
							</div>
						</Typography>
					)}
				</CardContent>
				<CardActions>
					<Box sx={{ width: '100%' }}>
						<Link
							to={`/competition/${id}`}
							style={{
								textDecoration: 'none',
								fontSize: '18px',
							}}
						>
							Show game
						</Link>
					</Box>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default CompetitionItem;
