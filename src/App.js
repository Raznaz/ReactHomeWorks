import { useState } from 'react';
import './App.css';
import CardList from './component/CardList';
import { userData } from './userData';

function App() {
	const [userList, setUserList] = useState(userData);
	console.log(userList);

	return (
		<div className="App">
			<div className="container">
				<h2 className="App__title">Homework 1</h2>
				<CardList userList={userList} />
			</div>
		</div>
	);
}

export default App;
