import {
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import React from 'react';
import MyButton from '../UI/Button/MyButton';
import { Link } from 'react-router-dom';

function CompetitionItem(props) {
	const { id, name, status, img, winner } = props;
	return (
		<Card
			sx={{
				width: 150,
				minHeight: 250,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CardMedia
				component="img"
				height="100px"
				image={img}
				alt="noPhoto"
			/>
			<CardContent>
				<Typography variant="body2" sx={{ color: 'blue' }}>
					Id:{id}
				</Typography>
				<Typography
					gutterBottom
					variant="div"
					component="div"
					sx={{ fontWeight: '700' }}
				>
					{name}
				</Typography>
				<Typography variant="body2" sx={{ color: 'blue' }}>
					STATUS:{status ? 'finished' : 'active'}
				</Typography>
				<Typography variant="body2" sx={{ color: 'green' }}>
					WINNER:{winner}
				</Typography>
			</CardContent>

			{/* <MyButton
				variant="contained"
				color="success"
				onClick={() => dispatch(removeUser(id))}
			>
				Show
			</MyButton> */}
			<div>
				<Link to={`/competition/${id}`}>Show game</Link>
			</div>
		</Card>
	);
}

export default CompetitionItem;
