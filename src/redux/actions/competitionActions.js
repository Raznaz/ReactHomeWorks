export const CREATE_NEW_COMPETITION =
	'[COMPETITION] Create new copetition';

export const createNewCompetition = (newComp) => ({
	type: CREATE_NEW_COMPETITION,
	payload: { newComp },
});
