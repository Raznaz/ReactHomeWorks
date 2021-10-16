import React from 'react';
import Square from '../Square/Square';
import { gameParams } from '../../constants';
import './Board.scss';

function Board(props) {
	const { handleClick, squares } = props;

	const sizes = new Array(gameParams.size).fill(null);
	return (
		<div className="board">
			{sizes.map((col, indexCol) => (
				<div key={indexCol}>
					{sizes.map((row, indexRow) => {
						const index = indexCol * gameParams.size + indexRow;
						return (
							<Square
								key={index}
								value={squares[index]}
								handleClick={() => handleClick(index)}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
}

export default Board;
