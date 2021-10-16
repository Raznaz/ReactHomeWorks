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
	// console.log(players);

	// useEffect( () => {if (!state.isGameFinish) {
	// 	setPlayerNames({ ...playerNames, isShow: false }),[state.isGameFinish])}

	// }

	// useEffect(() => {
	// 	console.log('my test');
	// 	setPlayerNames({ ...playerNames, isShow: true });
	// }, [state.isGameFinish]);

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
		// setPlayerNames({ player1: '', player2: '', isShow: false });
		// setPlayerNames({ ...playerNames, isShow: false });
	};

	return (
		<div
		// style={{ display: playerNames.isShow ? 'block' : 'none' }}
		// className={classes.join(' ')}
		>
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
