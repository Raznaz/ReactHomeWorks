import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegContext } from '../Context/RegState';

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
		<div className="container">
			<h2>Step 1!</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('firstName')}
					type="text"
					id="firstName"
					label="First Name"
					name="firstName"
					placeholder="name"
				/>
				<p>{errors.firstName?.message}</p>
				<input
					{...register('lastName')}
					type="text"
					id="lastName"
					label="Last Name"
					name="lastName"
					placeholder="last name"
				/>
				<p>{errors.lastName?.message}</p>
				<input
					{...register('email')}
					type="email"
					id="email"
					label="Email"
					name="email"
					placeholder="email"
					required
				/>
				<p>{errors.email?.message}</p>
				<button type="submit">Next</button>
			</form>
		</div>
	);
}

export default Step1;
