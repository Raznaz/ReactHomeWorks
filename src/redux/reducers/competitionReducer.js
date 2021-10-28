import { competitions } from '../../data/competitions';
import {
	CHANGE_STATUS,
	CREATE_NEW_COMPETITION,
	FILTER_COMPETITIONS,
} from '../actions/competitionActions';

const initialState = {
	competitions: competitions,
	filteredCompetitions: [],
	valueInp: '',
};

export const competitionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTER_COMPETITIONS:
			console.log('filter reducer: ', action.payload);
			return {
				...state,
				valueInp: action.payload.value,
				filteredCompetitions: state.competitions.filter((comp) =>
					comp.name
						.toLowerCase()
						.includes(action.payload.value.toLowerCase()),
				),
			};
		case CREATE_NEW_COMPETITION:
			console.log('CREATE NEW', state, action.payload);
			return {
				...state,
				competitions: [...state.competitions, action.payload.newComp],
			};
		case CHANGE_STATUS:
			console.log('test change status', action.payload);
			return {
				...state,
				competitions: state.competitions.map(
					(comp) => {
						if (comp.id === action.payload.idGame) {
							console.log('совпадает', comp.id);
							comp.status = false;
							comp.winnerName = action.payload.winner.winnerName;
							comp.time = action.payload.winner.time;
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
