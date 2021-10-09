import React from 'react';
import { useRegContext } from '../Context/RegState';

function Result() {
	const { state } = useRegContext();
	console.log(state.data);
	console.log(state.img.result);
	const {
		firstName,
		lastName,
		email,
		city,
		street,
		house,
		myPicture,
	} = state.data;
	return (
		<div>
			<h2>Спасибо за регистрацию</h2>
			<div>
				<div className="lmgContainer">
					<img src={state.img.result} alt="noPhoto" />
				</div>
				<div>
					<h3>Контактная информация</h3>
					<div>
						<span>Name: </span>
						{firstName}
					</div>
					<div>
						<span>Last Name: </span>
						{lastName}
					</div>
					<div>
						<span>Email: </span>
						{email}
					</div>
					<div>
						<span>City: </span>
						{city}
					</div>
					<div>
						<span>Street: </span>
						{street}
					</div>
					<div>
						<span>House: </span>
						{house}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Result;
