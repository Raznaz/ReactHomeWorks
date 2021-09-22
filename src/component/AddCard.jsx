import React, { useState } from 'react';
import './AddCard.css';

function AddCard({ addNewCard }) {
	const [newCard, setNewCard] = useState({
		name: '',
		age: '',
		gender: '',
		balance: '',
	});

	const handleChange = (event) => {
		setNewCard({
			...newCard,
			[event.target.name]: event.target.value,
		});
	};

	const createNewObj = (event) => {
		event.preventDefault();
		// console.log({ ...newCard, _id: Date.now() });
		addNewCard({
			...newCard,
			_id: Date.now(),
			picture: 'http://placehold.it/32x32',
		});
		// const newObj = {
		// 	...addCard,
		// 	_id: Date.now(),
		// };
	};

	return (
		<div>
			<form action="">
				<input
					type="text"
					name="name"
					placeholder="Enter your name"
					value={newCard.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="age"
					placeholder="Enter your age"
					value={newCard.age}
					onChange={handleChange}
				/>
				<input
					type="radio"
					name="gender"
					value="male"
					onChange={handleChange}
					checked={newCard.gender === 'male'}
					id="male"
				/>
				<label htmlFor="male">Male</label>
				<input
					type="radio"
					name="gender"
					value="female"
					onChange={handleChange}
					checked={newCard.gender === 'female'}
					id="female"
				/>
				<label htmlFor="female">Female</label>

				<input
					type="text"
					name="balance"
					placeholder="Enter your balance"
					value={newCard.balance}
					onChange={handleChange}
				/>
				<button type="submit" onClick={createNewObj}>
					Add new person
				</button>
			</form>
		</div>
	);
}

export default AddCard;
