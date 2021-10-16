import React, { createContext, useContext } from 'react';
import { useReducer } from 'react/cjs/react.development';

const GameContext = createContext();

export function GameProvider(props) {
	const { children, initialState, reducer } = props;

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GameContext.Provider value={[state, dispatch]}>
			{children}
		</GameContext.Provider>
	);
}

export const useGameStore = () => useContext(GameContext);
