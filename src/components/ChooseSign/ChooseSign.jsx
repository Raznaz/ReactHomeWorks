import React from 'react';
import { useGameStore } from '../../context/gameContext';
import './ChooseSign.scss';
import { toggleSign } from '../../actions';

function ChooseSign() {
	const [state, dispatch] = useGameStore();

	const handleChange = (event) => {
		dispatch(toggleSign(event.target.value));
	};

	return (
		<div className="chooseSignContainer">
			<p>Choose, who go first</p>
			<form>
				<input
					type="radio"
					name="sign"
					id="X"
					value="X"
					onChange={handleChange}
					disabled={state.history.length >= 2}
					// checked={state.toggleSign === 'X'}
					checked={state.isXTurn}
				/>
				<label htmlFor="X"> - "X"</label>
				<span>||</span>
				<input
					type="radio"
					name="sign"
					id="O"
					value="O"
					onChange={handleChange}
					disabled={state.history.length >= 2}
					checked={!state.isXTurn}
				/>
				<label htmlFor="O"> - "O"</label>
			</form>
		</div>
	);
}

export default ChooseSign;
