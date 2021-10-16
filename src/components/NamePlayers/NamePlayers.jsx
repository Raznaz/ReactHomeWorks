import React, { useState } from 'react';
import { useGameStore } from '../../context/gameContext';
import Input from '../UI/Input/Input';
import { changePlayerName } from '../../actions';
import Button from '../UI/Button/Button';
import './NamePlayers.scss';

function NamePlayers() {
	const [playerNames, setPlayerNames] = useState({
		player1: '',
		player2: '',
		isShow: true,
	});
	const [state, dispatch] = useGameStore();

	const handlePlayersName = (event) => {
		setPlayerNames({
			...playerNames,
			[event.target.name]: event.target.value,
		});
	};

	const enterNames = (event) => {
		event.preventDefault();
		if (!(playerNames.player1 && playerNames.player2)) {
			console.log('введите данные');
			return;
		}
		dispatch(changePlayerName(playerNames));
	};

	return (
		<div>
			<form>
				<label>Player name #1 (X)</label>
				<Input
					className="inp-name"
					type="text"
					name="player1"
					value={playerNames.player1}
					onChange={handlePlayersName}
					placeholder="enter name player for X"
					disabled={state.history.length >= 2}
				/>
				<label>Player name #2 (0)</label>
				<Input
					className="inp-name"
					type="text"
					name="player2"
					value={playerNames.player2}
					onChange={handlePlayersName}
					placeholder="enter name player for 0"
					disabled={state.history.length >= 2}
				/>
				<Button
					onClick={(event) => enterNames(event)}
					disabled={state.history.length >= 2}
					className="namePlayers-btn"
				>
					Enter names
				</Button>
			</form>
		</div>
	);
}

export default NamePlayers;
