import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
		</div>
	);
}

export default App;
import { useState, useEffect } from 'react';
import './App.css';

let timerId = null;

function App() {
	const [timer, setTimer] = useState(0);
	const [isTimer, setIsTimer] = useState(false);
	const [result, setResult] = useState([]);

	useEffect(() => {
		console.log('start');
		console.log('update');
		const saveTimes = JSON.parse(localStorage.getItem('times'));
		console.log(saveTimes);
		if (saveTimes) {
			setResult((prev) => [...prev, ...saveTimes]);
		}
	}, []);

	console.log(result);

	useEffect(() => {
		console.log('result');
	}, [result]);

	const startTimer = () => {
		if (isTimer) {
			setIsTimer(!isTimer);
		}
		timerId = setInterval(() => {
			setTimer((prev) => prev + 1);
		});
	};

	const resetTimer = () => {
		localStorage.setItem('times', JSON.stringify(result));
		setTimer(0);
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

	const myTime = handleTimeCalibration(timer);

	const stopTimer = () => {
		setIsTimer(true);
		clearInterval(timerId);
		setResult((prev) => [...prev, myTime]);
		localStorage.setItem('times', JSON.stringify(result));
	};

	// console.log(result);

	return (
		<div className="container">
			<h3>Timer HW_2</h3>
			<div>
				<div className="show-timer">
					{myTime.hr}:{myTime.min}:{myTime.sec}:{myTime.ms}
				</div>

				{!isTimer ? (
					<button onClick={() => startTimer()} className="btn green">
						Start
					</button>
				) : (
					<button onClick={() => startTimer()} className="btn violet">
						Continues
					</button>
				)}
				<button onClick={() => stopTimer()} className="btn red">
					Stop
				</button>
				<button onClick={() => resetTimer()} className="btn orange">
					Reset
				</button>
				<div className="results">
					{result.map((time, i) => {
						return (
							<p key={i}>
								{time.hr}:{time.min}:{time.sec}:{time.ms}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
