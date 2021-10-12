import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegContext } from '../actions/RegState';

import { Typography } from '@mui/material';
import Form from './UI/Form';
import { Input } from './UI/Input';
import MainContainer from './layout/MainContainer';
import ErrorMessage from './ErrorMessage';
import SecondaryButton from './UI/SecondaryButton';
import PrimaryButton from './UI/PrimaryButton';

const schema = yup.object({
	password: yup.string().min(3).required('Password is required'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function Step4() {
	const { prevStep, nextStep, setValues, state } = useRegContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		setValues(data);
		nextStep();
	};

	return (
		<MainContainer>
			<Typography component="h2" variant="h4">
				Step 4
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('password')}
					type="password"
					id="password"
					label="Password"
					name="password"
					placeholder="password"
				/>
				<ErrorMessage>{errors.password?.message}</ErrorMessage>
				<Input
					{...register('passwordConfirmation')}
					type="password"
					id="passwordConfirmation"
					label="Password"
					name="passwordConfirmation"
					placeholder="repeat password"
				/>
				<ErrorMessage>
					{errors.passwordConfirmation?.message}
				</ErrorMessage>

				<SecondaryButton onClick={prevStep}>Previous</SecondaryButton>
				<PrimaryButton type="submit">Submit</PrimaryButton>
			</Form>
		</MainContainer>
	);
}

export default Step4;
