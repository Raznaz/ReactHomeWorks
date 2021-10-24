export const TIME_WORK = '[TIMER] Time is working';
export const BLOCK_BUTTON = '[TIMER] Block button';
export const TIME = '[TIMER] time';

export const currentTime = (time) => ({
	type: TIME,
	payload: time,
});

export const timerWork = (statusTimer) => ({
	type: TIME_WORK,
	payload: statusTimer,
});

export const blockButtons = (statusButton) => ({
	type: BLOCK_BUTTON,
	payload: statusButton,
});
