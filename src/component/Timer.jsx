import React, { useState, useEffect } from 'react';

let timerId = null;

function Timer() {
	const [isTimerWork, setIsTimerWork] = useState(false);
	const [time, setTime] = useState(0);
	const [isBlockBtn, setIsBlockBtn] = useState(false);

	const [result, setResult] = useState([]);

	useEffect(() => {
		console.log('start component');
		const timesFromLS = JSON.parse(localStorage.getItem('times'));
		console.log(timesFromLS);
		if (timesFromLS) {
			setResult([...result, ...timesFromLS]);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('times', JSON.stringify(result));
	}, [result]);

	const handleTimerStart = () => {
		console.log('start');
		const begin = isTimerWork ? Date.now() - time : Date.now();
		tick(begin);
		if (isTimerWork) {
			setIsTimerWork(!isTimerWork);
		} else {
			setIsBlockBtn(!isBlockBtn);
		}
	};
	// const handleTimerContinue = () => {
	// 	console.log('Continue');
	// 	const begin = Date.now() - time;
	// 	setIsTimerWork(false);
	// 	tick(begin);
	// };
	const handleTimerStop = () => {
		console.log('Stop');
		setIsTimerWork(true);
		clearInterval(timerId);
		setResult([...result, formatedTime]);
	};

	const handleTimerReset = () => {
		console.log('Reset');
		setIsTimerWork(false);
		setIsBlockBtn(false);
		clearInterval(timerId);
		setResult([...result, formatedTime]);
		setTime(0);
	};

	const tick = (startMoment) => {
		timerId = setInterval(() => {
			let dif = Date.now() - startMoment;
			setTime(dif);
		}, 0);
	};

	const handleTimeCalibration = (time) => {
		let ms = time % 1000;
		let sec = Math.trunc((time / 1000) % 60);
		let min = Math.trunc((time / 1000 / 60) % 60);
		let hr = Math.trunc(time / 1000 / 60 / 60);
		if (sec < 10) {
			sec = '0' + sec;
		}
		if (min < 10) {
			min = '0' + min;
		}
		if (hr < 10) {
			hr = '0' + hr;
		}
		const currentTimerObj = {
			hr,
			min,
			sec,
			ms,
		};

		return currentTimerObj;
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
				<button
					onClick={() => handleTimerStart()}
					disabled={!isBlockBtn ? false : true}
				>
					Start
				</button>
			) : (
				<button onClick={() => handleTimerStart()}>Continue</button>
			)}

			<button
				onClick={() => handleTimerStop()}
				disabled={!isBlockBtn || isTimerWork}
			>
				Stop
			</button>
			<button onClick={() => handleTimerReset()}>Reset</button>
			<hr />
			<div>
				{result.map((obj, i) => (
					<p key={obj.ms + i}>
						{obj.hr}:{obj.min}:{obj.sec}:{obj.ms}
					</p>
				))}
			</div>
		</div>
	);
}

export default Timer;
