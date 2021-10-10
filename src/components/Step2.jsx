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

const schema = yup.object({
	city: yup.string().required(),
	street: yup.string().required(),
	house: yup.number().required(),
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
				<Typography
					component="div"
					variant="body1"
					sx={{ color: 'red', fontSize: '10px' }}
				>
					{errors.city?.message}
				</Typography>
				<Input
					{...register('street')}
					type="text"
					id="street"
					label="Street"
					name="street"
					placeholder="street"
				/>
				<Typography
					component="div"
					variant="body1"
					sx={{ color: 'red', fontSize: '10px' }}
				>
					{errors.street?.message}
				</Typography>
				<Input
					{...register('house')}
					type="house"
					id="house"
					label="House"
					name="house"
					placeholder="house"
				/>
				<p>{errors.email?.message}</p>
				<SecondaryButton onClick={prevStep}>Previous</SecondaryButton>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
}

export default Step2;
