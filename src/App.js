import { useState, useMemo } from 'react';
import { userData } from './userData';
import AddCard from './component/AddCard';
import CardList from './component/CardList';
import FilterUser from './component/FilterUser';
import SortUser from './component/SortUser';
import './App.css';
import Modal from './component/UI/modal/Modal';

function App() {
	const [userList, setUserList] = useState(userData);
	const [userFilter, setUserFilter] = useState('');
	const [userSort, setUserSort] = useState('');
	const [userInfo, setUserInfo] = useState('');
	const [isModal, setIsModal] = useState(false);

	const addNewCard = (card) => {
		setUserList([...userList, card]);
	};

	const userListFiltered = useMemo(
		() =>
			userList.filter((obj) =>
				obj.name.toLowerCase().includes(userFilter.toLowerCase()),
			),
		[userFilter, userList],
	);

	if (userSort === 'minToMax') {
		userListFiltered.sort((a, b) => a.age - b.age);
	} else if (userSort === 'maxToMin') {
		userListFiltered.sort((a, b) => b.age - a.age);
	}

	const modalWindow = (user, state) => {
		setUserInfo(user);
		setIsModal(true);
	};

	return (
		<div className="App">
			<div className="container">
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
				<SortUser
					valueDefault="Choose sort"
					options={[
						{ value: 'minToMax', title: 'Sort from min To MAX' },
						{ value: 'maxToMin', title: 'Sort from MAX To min' },
					]}
					value={userSort}
					onSortChange={setUserSort}
				/>
				<hr />
				{userListFiltered.length ? (
					<CardList
						userList={userListFiltered}
						modalWindow={modalWindow}
					/>
				) : (
					<h1>NOT FOUND</h1>
				)}
				<hr />
				<Modal
					userName={userInfo}
					modalState={isModal}
					setModalState={setIsModal}
				/>
			</div>
		</div>
	);
}

export default App;
