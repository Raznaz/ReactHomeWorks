import {
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actions/userActions';
import { handleTimeCalibration } from '../../utils/timeCalibration';
import MyButton from '../UI/Button/MyButton';

function CardPerson(props) {
	const { id, firstName, lastName, img, time } = props;

	const dispatch = useDispatch();

	const formatedTime = handleTimeCalibration(time);

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
				<Typography
					gutterBottom
					variant="div"
					component="div"
					sx={{ fontWeight: '700' }}
				>
					{firstName} {lastName}
				</Typography>
				<Typography variant="body2" sx={{ color: 'blue' }}>
					Id:{id}
				</Typography>
				<Typography variant="body2" sx={{ color: 'green' }}>
					TIME: {formatedTime.hr || 0}:{formatedTime.min || 0}:
					{formatedTime.sec || 0}:{formatedTime.ms || 0}
				</Typography>
			</CardContent>

			<MyButton
				variant="contained"
				color="error"
				onClick={() => dispatch(removeUser(id))}
			>
				Delete
			</MyButton>
		</Card>
	);
}

export default CardPerson;
