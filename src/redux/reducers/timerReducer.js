import {
	TIME_WORK,
	BLOCK_BUTTON,
	TIME,
} from '../actions/timerActions';

const initialState = {
	time: 0,
	isTimerWork: false,
	isBlockBtn: false,
};

export const timerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TIME:
			return { ...state, time: action.payload };
		case TIME_WORK:
			return { ...state, isTimerWork: action.payload };
		case BLOCK_BUTTON:
			return { ...state, isBlockBtn: action.payload };

		default:
			return state;
	}
};
