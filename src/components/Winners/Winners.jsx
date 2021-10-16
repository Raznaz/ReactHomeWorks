import React from 'react';
import { useGameStore } from '../../context/gameContext';
import './Winner.scss';

function Winners() {
	const [state] = useGameStore();

	return (
		<>
			<p>WINNER:</p>
			<h2 className="winner-btn__title">{state.resultGame}</h2>
		</>
	);
}

export default Winners;
