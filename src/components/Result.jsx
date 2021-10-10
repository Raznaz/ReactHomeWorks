import { Typography } from '@mui/material';
import React from 'react';
import { useRegContext } from '../Context/RegState';
import MainContainer from './MainContainer';

function Result() {
	const { state } = useRegContext();

	const { firstName, lastName, email, city, street, house } =
		state.data;
	return (
		<MainContainer>
			<Typography variant="h4" color="blueviolet">
				Спасибо за регистрацию
			</Typography>
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
		</MainContainer>
	);
}

export default Result;
