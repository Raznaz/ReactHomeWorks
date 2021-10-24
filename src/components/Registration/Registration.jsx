import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Input/Input';
import { useForm } from 'react-hook-form';
import MyButton from '../UI/Button/MyButton';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { newUser } from '../../redux/actions/userActions';
import { showModal } from '../../redux/actions/modalActions';
import ModalWindow from '../UI/Modal/ModalWindow';
import Timer from '../Timer/Timer';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'First name should not contain numbers')
		.required('First name is a required field'),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
		.required('Last name is a required field'),
});

function Registration() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const dispatch = useDispatch();
	const usersArr = useSelector((state) => state.usersArr);

	const onSubmit = (data) => {
		const addUserId = {
			...data,
			id: ` ${Math.floor(Math.random() * 100000)}`,
		};
		dispatch(newUser(addUserId));
		dispatch(showModal());

		reset();
	};

	return (
		<Box
			sx={{
				bgcolor: 'lightblue',
				width: 300,
				height: 400,
				margin: '0 auto',
				p: 2,
			}}
		>
			<Typography
				component="h2"
				variant="h5"
				sx={{ textAlign: 'center' }}
			>
				Registration user
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('firstName')}
					id="firstName"
					type="text"
					label="First name"
					name="firstName"
					error={!!errors.firstName}
					helperText={errors?.firstName?.message}
				/>
				<Input
					{...register('lastName')}
					id="lastName"
					type="text"
					label="Last name"
					name="lastName"
					error={!!errors.lastName}
					helperText={errors?.lastName?.message}
					sx={{ mb: 12 }}
				/>
				<MyButton color="success">Register participant</MyButton>
			</Form>
			<ModalWindow title="Participant" currentUser={usersArr.newUser}>
				<Timer />
			</ModalWindow>
		</Box>
	);
}

export default Registration;
