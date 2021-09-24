import { useState } from 'react';
import AddCard from './component/AddCard';
import CardList from './component/CardList';
import { userData } from './userData';
import './App.css';
import FilterUser from './component/FilterUser';

function App() {
	const [userList, setUserList] = useState(userData);
	const [userFilter, setUserFilter] = useState('');

	const addNewCard = (card) => {
		// console.log(card);
		setUserList([...userList, card]);
	};

	const userListFiltered = userList.filter((obj) =>
		obj.name.toLowerCase().includes(userFilter.toLowerCase()),
	);

	console.log(userListFiltered);

	return (
		<div className="App">
			<div className="container">
				<h2 className="App__title">Homework 1</h2>
				<hr />
				<AddCard addNewCard={addNewCard} />
				<hr />
				<FilterUser
					onChange={(e) => {
						setUserFilter(e.target.value);
					}}
					value={userFilter}
				/>
				<hr />
				<CardList userList={userListFiltered} />
			</div>
		</div>
	);
}

export default App;
