import React from 'react';
import { useGameStore } from '../../context/gameContext';
import { backToCurrentStep } from '../../actions';
import { getSignTurn } from '../../utils';
import './History.scss';
import { bindNameSign } from '../../utils/BindNameSign';
import Button from '../UI/Button/Button';

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
					<Button
						className="btnHistory"
						key={i}
						onClick={() => moveToStep(i)}
						style={{ display: i === 0 && 'none' }}
					>
						Step #{i}
					</Button>
				))}
			</div>
		</div>
	);
}

export default History;
