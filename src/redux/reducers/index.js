import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { timerReducer } from './timerReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	usersArr: userReducer,
	timer: timerReducer,
	modal: modalReducer,
});
