import React from 'react';
import Game from './components/Game/Game';
import { GameProvider } from './context/gameContext';
import { gameReducer, initialState } from './reducer/gameReducer';
import './App.scss';
import Result from './components/Result/Result';

function App() {
	return (
		<GameProvider reducer={gameReducer} initialState={initialState}>
			<Game />
			<Result />
		</GameProvider>
	);
}

export default App;
