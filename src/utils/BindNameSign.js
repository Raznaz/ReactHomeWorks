export const bindNameSign = (
	sign,
	firstPlayerName = 'X',
	secondPlayerName = '0',
) => {
	if (sign === 'X') {
		return firstPlayerName;
	} else {
		return secondPlayerName;
	}
};
