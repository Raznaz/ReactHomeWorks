import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegContext } from '../Context/RegState';

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
		<div className="container">
			<h2>Step 2</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('city')}
					type="text"
					id="city"
					label="City"
					name="city"
					placeholder="city"
				/>
				<p>{errors.city?.message}</p>
				<input
					{...register('street')}
					type="text"
					id="street"
					label="Street"
					name="street"
					placeholder="street"
				/>
				<p>{errors.street?.message}</p>
				<input
					{...register('house')}
					type="house"
					id="house"
					label="House"
					name="house"
					placeholder="house"
				/>
				<p>{errors.email?.message}</p>
				<button onClick={prevStep}>Previous</button>
				<button type="submit">Next</button>
			</form>
		</div>
	);
}

export default Step2;
