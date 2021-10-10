import React, { useContext, useReducer } from 'react';
import { RegContext } from './RegContext';
import { reducer } from './RegReducer';
import {
	SET_DATA,
	NEXT_STEP,
	PREVIOUS_STEP,
	GET_PICTURE,
	CHANGE_COLOR_THEME,
} from './RegAction';

export const RegState = ({ children }) => {
	const initialState = {
		data: {},
		step: 1,
		img: '',
		isTurnBlackTheme: false,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	// Methods

	const setValues = (values) => {
		console.log(values);
		dispatch({
			type: SET_DATA,
			payload: values,
		});
	};

	const getPicture = (pic) => {
		console.log(pic);
		dispatch({
			type: GET_PICTURE,
			payload: pic,
		});
	};

	const nextStep = () => {
		dispatch({
			type: NEXT_STEP,
			payload: 1,
		});
	};
	const prevStep = () => {
		dispatch({
			type: PREVIOUS_STEP,
			payload: 1,
		});
	};

	const handleChangeColorTheme = (e) => {
		// console.log('handleChangeColorTheme', e.target.checked);
		dispatch({
			type: CHANGE_COLOR_THEME,
		});
	};

	// value

	const value = {
		setValues,
		nextStep,
		prevStep,
		getPicture,
		handleChangeColorTheme,
		state,
	};

	return (
		<RegContext.Provider value={value}>
			{children}
		</RegContext.Provider>
	);
};

export const useRegContext = () => useContext(RegContext);
