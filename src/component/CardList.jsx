import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList({ userList, modalWindow }) {
	return (
		<div className="card-container">
			{userList.map((person) => (
				<Card
					key={person._id}
					person={person}
					modalWindow={modalWindow}
				/>
			))}
		</div>
	);
}

export default CardList;
