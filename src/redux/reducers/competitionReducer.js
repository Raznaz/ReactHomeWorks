import { competitions } from '../../data/competitions';
import { CREATE_NEW_COMPETITION } from '../actions/competitionActions';

const initialState = {
	competitions: competitions,
};

export const competitionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_NEW_COMPETITION:
			console.log('CREATE NEW', state, action.payload);
			return {
				...state,
				competitions: [...state.competitions, action.payload.newComp],
			};

		default:
			return state;
	}
};
