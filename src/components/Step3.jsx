import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegContext } from '../actions/RegState';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MainContainer from './layout/MainContainer';
import Form from './UI/Form';
import { Input, Typography } from '@mui/material';
import SecondaryButton from './UI/SecondaryButton';
import PrimaryButton from './UI/PrimaryButton';

const schema = yup.object({
	myPicture: yup.mixed().required('File is required'),
});

function Step3() {
	const { prevStep, nextStep, getPicture } = useRegContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		// console.log(data.myPicture[0]);
		getPicture(data);
		nextStep();
	};

	return (
		<MainContainer>
			<Typography component="h2" variant="h4">
				Step 3
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('myPicture')}
					type="file"
					name="myPicture"
					sx={{ display: 'block' }}
				/>
				<SecondaryButton onClick={prevStep}>Previous</SecondaryButton>
				<PrimaryButton type="submit">Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
}

export default Step3;
