import React, { useState, useEffect } from 'react';
import TimerResultsList from './TimerResultsList';
import Button from './UI/button/Button';
import './UI/button/Button.css';
import { handleTimeCalibration } from './TimeCalibration';

let timerId = null;

function Timer() {
	const [isTimerWork, setIsTimerWork] = useState(false);
	const [time, setTime] = useState(0);
	const [isBlockBtn, setIsBlockBtn] = useState(false);
	const [result, setResult] = useState([]);

	useEffect(() => {
		const timesFromLS = JSON.parse(localStorage.getItem('times'));
		timesFromLS && setResult([...result, ...timesFromLS]);
	}, []);

	useEffect(() => {
		localStorage.setItem('times', JSON.stringify(result));
	}, [result]);

	const handleTimerStart = () => {
		const begin = isTimerWork ? Date.now() - time : Date.now();
		tick(begin);
		if (isTimerWork) {
			setIsTimerWork(!isTimerWork);
		} else {
			setIsBlockBtn(!isBlockBtn);
		}
	};

	const handleTimerStop = () => {
		setIsTimerWork(true);
		clearInterval(timerId);
		setResult([...result, formatedTime]);
	};

	const handleTimerReset = () => {
		setIsTimerWork(false);
		setIsBlockBtn(false);
		clearInterval(timerId);
		setResult([...result, formatedTime]);
		setTime(0);
	};

	const tick = (startMoment) => {
		timerId = setInterval(() => {
			setTime(Date.now() - startMoment);
		}, 0);
	};

	const formatedTime = handleTimeCalibration(time);

	return (
		<div>
			<h5>
				{formatedTime.hr}:{formatedTime.min}:{formatedTime.sec}:
				{formatedTime.ms}
			</h5>
			<hr />
			{!isTimerWork ? (
				<Button
					onClick={() => handleTimerStart()}
					disabled={!isBlockBtn ? false : true}
					className="btn green"
				>
					Start
				</Button>
			) : (
				<Button
					onClick={() => handleTimerStart()}
					className="btn purple"
				>
					Continue
				</Button>
			)}

			<Button
				onClick={() => handleTimerStop()}
				disabled={!isBlockBtn || isTimerWork}
				className="btn red"
			>
				Stop
			</Button>
			<Button
				onClick={() => handleTimerReset()}
				className="btn orange"
				disabled={!isTimerWork && !isBlockBtn}
			>
				Reset
			</Button>
			<hr />
			<TimerResultsList result={result} />
		</div>
	);
}

export default Timer;
