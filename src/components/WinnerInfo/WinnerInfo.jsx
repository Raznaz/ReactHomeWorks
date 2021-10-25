import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delay, showWinner } from '../../redux/actions/userActions';
import { handleTimeCalibration } from '../../utils/timeCalibration';
import MyButton from '../UI/Button/MyButton';

function WinnerInfo() {
	const { usersArr } = useSelector((state) => state);
	const dispatch = useDispatch();

	const formatedTime = handleTimeCalibration(usersArr.userWin.time);
	return (
		<Box
			sx={{
				bgcolor: '#67d2e0',
				minWidth: '50%',
				margin: '50px auto',
				p: 2,
			}}
		>
			{usersArr.isShowWinner ? (
				<>
					<Typography
						component="div"
						variant="div"
						sx={{ textAlign: 'center', fontSize: '40px' }}
					>
						WINNER !!!
						<Typography sx={{ fontWeight: 700, fontSize: '30px' }}>
							{usersArr.userWin.firstName} {usersArr.userWin.lastName}
						</Typography>
						<Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
							id:{usersArr.userWin.id}
						</Typography>
						<Typography sx={{ fontWeight: 700, fontSize: '25px' }}>
							time:{formatedTime.hr}:{formatedTime.min}:
							{formatedTime.sec}:{formatedTime.ms}
						</Typography>
					</Typography>
					<MyButton
						color="warning"
						onClick={() =>
							dispatch(showWinner(usersArr.isShowWinner))
						}
					>
						Close
					</MyButton>
				</>
			) : (
				<>
					<Typography
						component="div"
						variant="div"
						sx={{ textAlign: 'center' }}
					>
						Total participants:
						<Typography sx={{ fontWeight: 700, fontSize: '30px' }}>
							{usersArr.users.length}
						</Typography>
					</Typography>
					<MyButton
						color="warning"
						onClick={() =>
							// TODO: Переделать
							// dispatch(showWinner(usersArr.isShowWinner))
							dispatch(delay(usersArr.isShowWinner))
						}
					>
						Show winner
					</MyButton>
				</>
			)}
		</Box>
	);
}

export default WinnerInfo;
