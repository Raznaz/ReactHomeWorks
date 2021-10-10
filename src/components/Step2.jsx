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
import SecondaryButton from './SecondaryButton';
import ErrorMessage from './ErrorMessage';

const schema = yup.object({
	city: yup.string().required(),
	street: yup.string().required(),
	house: yup.string().required(),
});

function Step2() {
	const { nextStep, prevStep, setValues, state } = useRegContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			city: state.data.city,
			street: state.data.street,
			house: state.data.house,
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
				Step 2
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('city')}
					type="text"
					id="city"
					label="City"
					name="city"
					placeholder="city"
				/>
				<ErrorMessage>{errors.city?.message}</ErrorMessage>
				<Input
					{...register('street')}
					type="text"
					id="street"
					label="Street"
					name="street"
					placeholder="street"
				/>
				<ErrorMessage>{errors.street?.message}</ErrorMessage>
				<Input
					{...register('house')}
					type="house"
					id="house"
					label="House"
					name="house"
					placeholder="house"
				/>
				<ErrorMessage>{errors.house?.message}</ErrorMessage>
				<SecondaryButton onClick={prevStep}>Previous</SecondaryButton>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
}

export default Step2;
