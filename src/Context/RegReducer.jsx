import {
	SET_DATA,
	NEXT_STEP,
	PREVIOUS_STEP,
	GET_PICTURE,
} from './RegAction';

export const reducer = (state, action) => {
	// console.log(action.payload);
	switch (action.type) {
		case GET_PICTURE: {
			let reader = new FileReader();
			reader.readAsDataURL(action.payload.myPicture[0]);
			console.log(action.payload.myPicture[0]);
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
