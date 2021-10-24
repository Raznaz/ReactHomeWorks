import { CLOSE_MODAL, SHOW_MODAL } from '../actions/modalActions';

const initialState = {
	isModalShow: false,
};

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return { ...state, isModalShow: true };
		case CLOSE_MODAL:
			return { ...state, isModalShow: false };

		default:
			return state;
	}
};
