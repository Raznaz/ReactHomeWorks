import { useGameStore } from '../../context/gameContext';
import './Result.scss';

function Result() {
	const [state, dispatch] = useGameStore();
	return (
		<div className="result">
			<h2>Results Winners</h2>
			<ul className="result__list">
				{state.winnersHistory.map((item, i) => (
					<li key={i}>
						{i + 1}.{' '}
						<span className="result__winnerName">{item.winner}</span>{' '}
						<span>{item.date}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Result;
