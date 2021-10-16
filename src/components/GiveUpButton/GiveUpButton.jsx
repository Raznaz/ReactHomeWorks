import React from 'react';
import {
	addWinner,
	changeStatusGame,
	showResultGame,
} from '../../actions';
import { useGameStore } from '../../context/gameContext';
import { getSignTurn } from '../../utils';
import { bindNameSign } from '../../utils/BindNameSign';
import Button from '../UI/Button/Button';
import './GiveUpButton.scss';

function GiveUpButton() {
	const [state, dispatch] = useGameStore();

	const winner = bindNameSign(
		getSignTurn(state.history.length, !state.isXTurn),
		state.players.player1,
		state.players.player2,
	);
	// console.log('give up', winner);
	console.log('GiveUP', winner);
	const giveUpPlayer = () => {
		dispatch(changeStatusGame());
		dispatch(addWinner(winner));
		dispatch(showResultGame(winner));
	};

	return (
		<div>
			<Button
				className="btnGiveUp"
				onClick={() => giveUpPlayer()}
				disabled={!state.isGameFinish ? false : true}
			>
				I give up !
			</Button>
		</div>
	);
}

export default GiveUpButton;
