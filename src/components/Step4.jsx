import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegContext } from '../Context/RegState';

const schema = yup.object({
	password: yup.string().required('Password is required'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function Step3() {
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
		<div className="container">
			<h2>Step 3</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('password')}
					type="password"
					id="password"
					label="Password"
					name="password"
					placeholder="password"
				/>
				<p>{errors.password?.message}</p>
				<input
					{...register('passwordConfirmation')}
					type="password"
					id="passwordConfirmation"
					label="Password"
					name="passwordConfirmation"
					placeholder="repeat password"
				/>
				<p>{errors.passwordConfirmation?.message}</p>

				<button type="submit" onClick={prevStep}>
					Previous
				</button>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Step3;
