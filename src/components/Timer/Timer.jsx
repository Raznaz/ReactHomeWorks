import React from 'react';

import MyButton from '../UI/Button/MyButton';
import { handleTimeCalibration } from '../../utils/timeCalibration';
import { Divider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/modalActions';
import { useSelector } from 'react-redux';
import {
	timerWork,
	blockButtons,
	currentTime,
	timerResult,
} from '../../redux/actions/timerActions';
import { addUser } from '../../redux/actions/userActions';
import faker from 'faker';

let timerId = null;

function Timer() {
	const dispatch = useDispatch();
	const { time, isTimerWork, isBlockBtn } = useSelector(
		(state) => state.timer,
	);

	const { newUser } = useSelector((state) => state.usersArr);

	// useEffect(() => {
	// 	const timesFromLS = JSON.parse(localStorage.getItem('times'));
	// 	timesFromLS && setResult([...result, ...timesFromLS]);
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('times', JSON.stringify(result));
	// }, [result]);

	const handleTimerStart = () => {
		const begin = isTimerWork ? Date.now() - time : Date.now();
		tick(begin);
		if (isTimerWork) {
			dispatch(timerWork(!isTimerWork));
		} else {
			dispatch(blockButtons(!isBlockBtn));
		}
	};

	const handleTimerStop = () => {
		dispatch(timerWork(true));
		clearInterval(timerId);
	};

	const handleTimerReset = () => {
		dispatch(timerWork(false));
		dispatch(blockButtons(false));
		clearInterval(timerId);
		dispatch(currentTime(0));
	};

	const saveResult = () => {
		const createNewUser = {
			id: newUser.id,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			time: time,
			img: faker.image.avatar(),
		};
		dispatch(addUser(createNewUser));
		cancelResult();
	};

	const cancelResult = () => {
		dispatch(closeModal());
		dispatch(timerWork(false));
		dispatch(currentTime(0));
		dispatch(blockButtons(!isBlockBtn));
		clearInterval(timerId);
	};

	const tick = (startMoment) => {
		timerId = setInterval(() => {
			dispatch(currentTime(Date.now() - startMoment));
		}, 0);
	};

	const formatedTime = handleTimeCalibration(time);

	return (
		<div>
			<Typography
				component="div"
				variant="h5"
				sx={{ textAlign: 'center', mb: 3, fontWeight: '700' }}
			>
				{formatedTime.hr}:{formatedTime.min}:{formatedTime.sec}:
				{formatedTime.ms}
			</Typography>
			<Divider />
			{!isTimerWork ? (
				<MyButton
					onClick={() => handleTimerStart()}
					disabled={!isBlockBtn ? false : true}
					sx={{ bgcolor: 'green', mb: 1 }}
				>
					Start
				</MyButton>
			) : (
				<MyButton
					onClick={() => handleTimerStart()}
					sx={{ bgcolor: 'purple', mb: 1 }}
				>
					Continue
				</MyButton>
			)}

			<MyButton
				onClick={() => handleTimerStop()}
				disabled={!isBlockBtn || isTimerWork}
				sx={{ bgcolor: 'red', mb: 1 }}
			>
				Stop
			</MyButton>
			<MyButton
				onClick={() => handleTimerReset()}
				disabled={!isTimerWork && !isBlockBtn}
				sx={{ bgcolor: 'orange', mb: 1 }}
			>
				Reset
			</MyButton>
			<Divider sx={{ mb: 6 }} />
			<MyButton
				onClick={() => saveResult()}
				sx={{ bgcolor: 'green' }}
				disabled={!isTimerWork}
			>
				Save
			</MyButton>
			<MyButton
				onClick={() => cancelResult()}
				sx={{ bgcolor: 'red' }}
			>
				Cancel
			</MyButton>
			<hr />
		</div>
	);
}

export default Timer;
