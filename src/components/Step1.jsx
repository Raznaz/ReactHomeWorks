import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegContext } from '../Context/RegState';
import MainContainer from './MainContainer';
import { Typography } from '@mui/material';
import Form from './Form';
import { Input } from './Input';
import PrimaryButton from './PrimaryButton';

const schema = yup.object({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	email: yup.string().email().required(),
});

function Step1() {
	const { nextStep, setValues, state } = useRegContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: state.data.firstName,
			lastName: state.data.lastName,
			email: state.data.email,
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		setValues(data);
		nextStep();
	};

	return (
		<MainContainer>
			<Typography component="h2" variant="h4">
				Step 1
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('firstName')}
					type="text"
					id="firstName"
					label="First Name"
					name="firstName"
					placeholder="name"
				/>
				<Typography
					variant="body1"
					component="div"
					sx={{ color: 'red', fontSize: '10px' }}
				>
					{errors.firstName?.message}
				</Typography>
				<Input
					{...register('lastName')}
					type="text"
					id="lastName"
					label="Last Name"
					name="lastName"
					placeholder="last name"
				/>
				<Typography
					variant="body1"
					component="div"
					sx={{ color: 'red', fontSize: '10px' }}
				>
					{errors.lastName?.message}
				</Typography>
				<Input
					{...register('email')}
					type="email"
					id="email"
					label="Email"
					name="email"
					placeholder="email"
					required
				/>
				<Typography
					variant="body1"
					component="div"
					sx={{ color: 'red', fontSize: '10px' }}
				>
					{errors.email?.message}
				</Typography>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
}

export default Step1;
