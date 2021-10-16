export const getSignTurn = (turn, sign) => {
	if (sign) {
		return !(turn % 2) ? '0' : 'X';
	} else {
		return !(turn % 2) ? 'X' : '0';
	}
};
