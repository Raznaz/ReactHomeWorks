import React from 'react';
import { NEW_GAME } from '../../actions';
import { useGameStore } from '../../context/gameContext';
import './NewGameButton.scss';

function NewGameButton() {
	const [state, dispatch] = useGameStore();

	const classes = ['btn_newGame', 'hide'];

	if (state.isGameFinish) {
		classes.push('show');
	}
	return (
		<button
			className={classes.join(' ')}
			onClick={() => dispatch({ type: NEW_GAME })}
		>
			Start new game
		</button>
	);
}

export default NewGameButton;
