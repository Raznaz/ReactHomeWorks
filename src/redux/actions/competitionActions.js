export const CREATE_NEW_COMPETITION =
	'[COMPETITION] Create new competition';
export const CHANGE_STATUS = '[COMPETITION] Change status';

export const createNewCompetition = (newComp) => ({
	type: CREATE_NEW_COMPETITION,
	payload: { newComp },
});

export const changeStatusCompetition = (idGame) => ({
	type: CHANGE_STATUS,
	payload: { idGame },
});
