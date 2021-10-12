import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegContext } from '../actions/RegState';

import MainContainer from './layout/MainContainer';
import { Typography } from '@mui/material';
import Form from './UI/Form';
import { Input } from './UI/Input';
import PrimaryButton from './UI/PrimaryButton';
import ErrorMessage from './ErrorMessage';

const schema = yup.object({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'First name should not contain numbers')
		.required(),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
		.required(),
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
				/>
				<ErrorMessage>{errors.firstName?.message}</ErrorMessage>
				<Input
					{...register('lastName')}
					type="text"
					id="lastName"
					label="Last Name"
					name="lastName"
				/>
				<ErrorMessage>{errors.lastName?.message}</ErrorMessage>
				<Input
					{...register('email')}
					type="email"
					id="email"
					label="Email"
					name="email"
					required
				/>
				<ErrorMessage>{errors.email?.message}</ErrorMessage>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
}

export default Step1;
