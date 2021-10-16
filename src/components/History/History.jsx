import React from 'react';
import { useGameStore } from '../../context/gameContext';
import { backToCurrentStep } from '../../actions';
import { getSignTurn } from '../../utils';
import './History.scss';
import { bindNameSign } from '../../utils/BindNameSign';

function History() {
	const [state, dispatch] = useGameStore();

	const moveToStep = (i) => {
		dispatch(backToCurrentStep(state.history.slice(0, i)));
	};

	return (
		<div>
			<hr />
			<p>
				Next step:{' '}
				{bindNameSign(
					getSignTurn(state.history.length, state.isXTurn),
					state.players.player1,
					state.players.player2,
				)}
			</p>
			<hr />
			<h2>History</h2>
			<div>
				{state.history.map((currentStep, i) => (
					<button
						className="btnHistory"
						key={i}
						onClick={() => moveToStep(i)}
					>
						Step #{i}
					</button>
				))}
			</div>
		</div>
	);
}

export default History;
