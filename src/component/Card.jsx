import React from 'react';
import MyButton from './UI/Button/MyButton';
import './Card.css';

function Card({ person, modalWindow }) {
	const { name, age, gender, balance, picture } = person;

	return (
		<div className="card-item">
			<div className="card">
				<div className="card__image">
					<img src={picture} alt="person" />
				</div>
				<div className="card__content">
					<p>
						<span>name:</span> {name}
					</p>
					<p>
						<span>age:</span> {age}
					</p>
					<p>
						<span>gender:</span> {gender}
					</p>
					<p>
						<span>balance:</span> {balance}
					</p>
				</div>
				<MyButton
					className="btnUserDetails"
					onClick={() => modalWindow(person)}
				>
					Details...
				</MyButton>
			</div>
		</div>
	);
}

export default Card;
