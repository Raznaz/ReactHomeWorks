export const CREATE_NEW_COMPETITION =
	'[COMPETITION] Create new competition';
export const CHANGE_STATUS = '[COMPETITION] Change status';
export const FILTER_COMPETITIONS =
	'[COMPETITION] Filter competitions';

export const createNewCompetition = (newComp) => ({
	type: CREATE_NEW_COMPETITION,
	payload: { newComp },
});

export const changeStatusCompetition = (idGame, winner) => ({
	type: CHANGE_STATUS,
	payload: { idGame, winner },
});

export const filterCompetitions = (value) => ({
	type: FILTER_COMPETITIONS,
	payload: { value },
});
