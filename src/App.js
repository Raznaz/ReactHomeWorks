import { useState } from 'react';
import './App.css';
import AddCard from './component/AddCard';
import CardList from './component/CardList';
import { userData } from './userData';

function App() {
	const [userList, setUserList] = useState(userData);

	const addNewCard = (card) => {
		console.log(card);
		setUserList([...userList, card]);
	};

	return (
		<div className="App">
			<div className="container">
				<h2 className="App__title">Homework 1</h2>
				<hr />
				<AddCard addNewCard={addNewCard} />
				<hr />
				<CardList userList={userList} />
			</div>
		</div>
	);
}

export default App;
