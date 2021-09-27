import { useState, useMemo } from 'react';
import { userData } from './userData';
import AddCard from './component/AddCard';
import CardList from './component/CardList';
import FilterUser from './component/FilterUser';
// import SortUser from './component/SortUser';
import Modal from './component/UI/modal/Modal';
import MyButton from './component/UI/Button/MyButton';
import MySelect from './component/UI/Select/MySelect';
import './App.css';

function App() {
	const [userList, setUserList] = useState(userData);
	const [userInfo, setUserInfo] = useState('');
	const [isModal, setIsModal] = useState(false);

	const [userFilter, setUserFilter] = useState('');
	const [userSort, setUserSort] = useState('');

	const addNewCard = (card) => {
		setUserList([...userList, card]);
	};

	const userListFilteredAndSorted = useMemo(
		() =>
			userList.filter((obj) =>
				obj.name.toLowerCase().includes(userFilter.toLowerCase()),
			),
		[userFilter, userList],
	);

	const sortCards = (sortMethod) => {
		setUserSort(sortMethod);
		if (sortMethod === 'minToMax') {
			setUserList([...userList].sort((a, b) => a.age - b.age));
		} else {
			setUserList([...userList].sort((a, b) => b.age - a.age));
		}
	};

	const modalWindow = (user) => {
		setUserInfo(user);
		setIsModal(true);
	};

	const resetFilters = () => {
		setUserFilter('');
		setUserList(userData);
		setUserSort('');
	};

	return (
		<div className="App">
			<div className="container">
				<div className="settingsContainer">
					<div className="addUserBlock">
						<h2>Add new user</h2>
						<AddCard addNewCard={addNewCard} />
					</div>
					<div className="filterUserBlock">
						<h2>Filter&Sort</h2>
						<FilterUser
							onChange={(e) => {
								setUserFilter(e.target.value);
							}}
							value={userFilter}
						/>

						{/* <SortUser value={userSort} onSortChange={sortCards} /> */}

						<MySelect
							defaultValue="Sort by age"
							value={userSort}
							onSortChange={sortCards}
							options={[
								{ value: 'minToMax', title: 'Min to Max' },
								{ value: 'maxToMin', title: 'Max to Min' },
							]}
						/>

						<MyButton className="btn__reset" onClick={resetFilters}>
							RESET
						</MyButton>
					</div>
				</div>
				<hr />
				<CardList
					userList={userListFilteredAndSorted}
					modalWindow={modalWindow}
				/>

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
