import { gameParams } from '../constants';
import {
	ADD_HISTORY,
	BACK_TO_STEP,
	CHANGE_STATUS_GAME,
	TOGGLE_SIGN,
	NEW_GAME,
	CHANGE_NAME,
	ADD_WINNER,
	ADD_HISTORY_LOCAL_STORAGE,
	SHOW_RESULT_GAME,
} from '../actions/gameActions';

export const initialState = {
	players: { player1: 'player1', player2: 'player2' },
	isGameFinish: false,
	isXTurn: true,
	history: [
		{
			squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
		},
	],
	winnersHistory: [],
	resultGame: '',
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_RESULT_GAME:
			return { ...state, resultGame: action.payload };
		case ADD_HISTORY_LOCAL_STORAGE:
			return { ...state, winnersHistory: [...action.payload] };
		case ADD_WINNER:
			return {
				...state,
				winnersHistory: [
					...state.winnersHistory,
					{
						winner: action.payload.sign,

						date: new Date().toLocaleString(),
						id: Date.now(),
					},
				],
			};
		case CHANGE_NAME:
			console.log(action.payload);
			return { ...state, players: action.payload };
		case NEW_GAME:
			return {
				...initialState,
				winnersHistory: [...state.winnersHistory],
			};
		case TOGGLE_SIGN:
			return {
				...state,
				isXTurn: action.payload === 'X' ? true : false,
			};
		case CHANGE_STATUS_GAME:
			return { ...state, isGameFinish: !state.isGameFinish };
		case BACK_TO_STEP:
			return {
				...state,
				history: [...action.payload.currentStep],
			};
		case ADD_HISTORY:
			return {
				...state,
				history: [...state.history, action.payload],
			};

		default:
			return state;
	}
};
