import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegContext } from '../Context/RegState';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MainContainer from './MainContainer';

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
		console.log(data.myPicture[0]);
		getPicture(data);
		nextStep();
	};

	return (
		<MainContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('myPicture')}
					type="file"
					name="myPicture"
				/>
				<button type="submit" onClick={prevStep}>
					Previous
				</button>
				<button type="submit">Next</button>
			</form>
		</MainContainer>
	);
}

export default Step3;
