import { combineReducers } from 'redux';
import { competitionsReducer } from './competitionReducer';
import { modalReducer } from './modalReducer';
import { timerReducer } from './timerReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	usersArr: userReducer,
	timer: timerReducer,
	modal: modalReducer,
	competitionsArr: competitionsReducer,
});
