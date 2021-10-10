import {
	SET_DATA,
	NEXT_STEP,
	PREVIOUS_STEP,
	GET_PICTURE,
} from './RegAction';

export const reducer = (state, action) => {
	console.log(action.payload);
	switch (action.type) {
		case GET_PICTURE: {
			console.log(action.payload.myPicture);
			if (action.payload.myPicture.length === 0) {
				console.log('NO FILE');
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
