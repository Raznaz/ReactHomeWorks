import React, { useEffect } from 'react';
import { useGameStore } from '../../context/gameContext';
import Board from '../Board/Board';
import {
	addToHistory,
	addWinner,
	putFromLocalStorage,
	showResultGame,
} from '../../actions';
import { changeStatusGame } from '../../actions';
import { getSignTurn } from '../../utils';
import { calculateWinner } from '../../utils/calculateWinner';
import './Game.scss';
import History from '../History/History';
import ChooseSign from '../ChooseSign/ChooseSign';
import NamePlayers from '../NamePlayers/NamePlayers';
import GiveUpButton from '../GiveUpButton/GiveUpButton';
import Winners from '../Winners/Winners';
import NewGameButton from '../NewGameButton/NewGameButton';

function Game() {
	const [
		{
			history,
			isGameFinish,
			isXTurn,
			players,
			winnersHistory,
			resultGame,
		},
		dispatch,
	] = useGameStore();
	console.log(resultGame);
	const currentStep = history[history.length - 1];
	const classes = ['game'];

	useEffect(() => {
		const historyWinnersResult = JSON.parse(
			localStorage.getItem('winners'),
		);
		historyWinnersResult &&
			dispatch(putFromLocalStorage(historyWinnersResult));
	}, []);

	useEffect(() => {
		localStorage.setItem('winners', JSON.stringify(winnersHistory));
	}, [winnersHistory]);

	const handleClick = (index) => {
		const squares = [...currentStep.squares];
		squares[index] = getSignTurn(history.length, isXTurn);

		const winner = calculateWinner(squares, players);
		if (winner) {
			console.log('Game Finish', winner);
			dispatch(changeStatusGame());
			dispatch(showResultGame(winner));

			winner !== 'Draw' && dispatch(addWinner(winner));
		}
		dispatch(addToHistory(squares));
	};

	if (isGameFinish) {
		classes.push('red', 'disabled');
	}

	return (
		<div>
			<h1>
				{players.player1} VS {players.player2}
			</h1>
			<div className={classes.join(' ')}>
				<div className="game__leftSide">
					<NamePlayers />
					<hr />
					<ChooseSign />
					<hr />
					{history.length >= 2 ? <GiveUpButton /> : null}
				</div>
				<div className="game__center">
					<Board
						handleClick={handleClick}
						squares={currentStep.squares}
					/>
				</div>
				<div className="game__rightSide">
					<Winners />
					<div className="nextTurn"></div>
					<History />
				</div>
			</div>
			<NewGameButton />
		</div>
	);
}

export default Game;
