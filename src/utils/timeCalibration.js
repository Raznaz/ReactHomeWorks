export const handleTimeCalibration = (time) => {
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
