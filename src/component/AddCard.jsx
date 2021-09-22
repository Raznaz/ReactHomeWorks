import React, { useState } from 'react';
import MyButton from './UI/Button/MyButton';
import './AddCard.css';
import MyInput from './UI/Input/MyInput';

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

		if (
			!(
				newCard.name &&
				newCard.age &&
				newCard.gender &&
				newCard.balance
			)
		) {
			alert('Fill all fields');
			return;
		}

		addNewCard({
			...newCard,
			_id: Date.now(),
			picture: 'http://placehold.it/32x32',
		});
		setNewCard({
			name: '',
			age: '',
			gender: '',
			balance: '',
		});
	};

	return (
		<div className="addCard">
			<form action="">
				<MyInput
					type="text"
					name="name"
					placeholder="Enter your name"
					value={newCard.name}
					onChange={handleChange}
				/>
				<MyInput
					type="text"
					name="age"
					placeholder="Enter your age"
					value={newCard.age}
					onChange={handleChange}
				/>
				<MyInput
					type="radio"
					name="gender"
					value="male"
					onChange={handleChange}
					checked={newCard.gender === 'male'}
					id="male"
				/>
				<label htmlFor="male">Male</label>
				<MyInput
					type="radio"
					name="gender"
					value="female"
					onChange={handleChange}
					checked={newCard.gender === 'female'}
					id="female"
				/>
				<label htmlFor="female">Female</label>

				<MyInput
					type="text"
					name="balance"
					placeholder="Enter your balance"
					value={newCard.balance}
					onChange={handleChange}
				/>
				<MyButton type="submit" onClick={createNewObj}>
					Add new person
				</MyButton>
			</form>
		</div>
	);
}

export default AddCard;
