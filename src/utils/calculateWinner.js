import { winnerLines } from '../constants';

export function calculateWinner(squares, players) {
	// console.log(squares);
	// console.log(winnerLines);
	const winnerLine = winnerLines.find(
		([a, b, c]) =>
			squares[a] &&
			squares[a] === squares[b] &&
			squares[b] === squares[c],
	);

	if (winnerLine) {
		// console.log(players);
		if (squares[winnerLine[0]] === 'X') {
			return players.player1 || 'player1';
		} else {
			return players.player2 || 'player2';
		}
	}

	if (squares.every(Boolean)) {
		return 'Draw';
	}
	return null;
}
