export const ADD_HISTORY = 'add history';
export const BACK_TO_STEP = 'back to current step';
export const CHANGE_STATUS_GAME = 'change status game';
export const TOGGLE_SIGN = 'toggle sign';
export const NEW_GAME = 'new game';
export const CHANGE_NAME = 'change name';
export const ADD_WINNER = 'add winner';
export const ADD_HISTORY_LOCAL_STORAGE =
	'get info from Local storage';
export const SHOW_RESULT_GAME = 'show result game';

export const showResultGame = (result) => ({
	type: SHOW_RESULT_GAME,
	payload: result,
});

export const putFromLocalStorage = (history) => ({
	type: ADD_HISTORY_LOCAL_STORAGE,
	payload: history,
});

export const addWinner = (sign) => ({
	type: ADD_WINNER,
	payload: { sign },
});

export const changePlayerName = (names) => ({
	type: CHANGE_NAME,
	payload: names,
});

export const addToHistory = (squares) => ({
	type: ADD_HISTORY,
	payload: { squares },
});

export const backToCurrentStep = (currentStep) => ({
	type: BACK_TO_STEP,
	payload: { currentStep },
});

export const changeStatusGame = () => ({
	type: CHANGE_STATUS_GAME,
});

export const toggleSign = (sign) => ({
	type: TOGGLE_SIGN,
	payload: sign,
});
