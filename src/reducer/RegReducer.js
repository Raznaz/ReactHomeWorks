import {
	SET_DATA,
	NEXT_STEP,
	PREVIOUS_STEP,
	GET_PICTURE,
	CHANGE_COLOR_THEME,
} from '../actions/RegAction';

export const reducer = (state, action) => {
	switch (action.type) {
		case CHANGE_COLOR_THEME:
			console.log('reducer work');
			return { ...state, isTurnBlackTheme: !state.isTurnBlackTheme };
		case GET_PICTURE: {
			console.log(action.payload.myPicture);
			if (action.payload.myPicture.length === 0) {
				return {
					...state,
					img: {
						result:
							'https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg',
					},
				};
			}
			let reader = new FileReader();
			reader.readAsDataURL(action.payload.myPicture[0]);
			// console.log(action.payload.myPicture[0]);
			console.log(reader);
			return { ...state, img: reader };
		}
		case PREVIOUS_STEP:
			return { ...state, step: state.step - action.payload };

		case NEXT_STEP:
			return { ...state, step: state.step + action.payload };
		case SET_DATA:
			return { ...state, data: { ...state.data, ...action.payload } };

		default:
			return state;
	}
};
