import { competitions } from '../../data/competitions';
import {
	CHANGE_STATUS,
	CREATE_NEW_COMPETITION,
} from '../actions/competitionActions';

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
		case CHANGE_STATUS:
			console.log('test change status', action.payload.idGame);
			return {
				...state,
				competitions: state.competitions.map(
					(comp) => {
						if (comp.id === action.payload.idGame) {
							console.log('совпадает', comp.id);
							comp.status = false;
						}

						return comp;
					},
					// comp.id === +action.payload.idGame
				),
			};

		default:
			return state;
	}
};
