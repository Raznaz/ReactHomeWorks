import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import MyButton from '../UI/Button/MyButton';
import { Input } from '../UI/Input/Input';
import Form from '../UI/Form/Form';
import { useDispatch } from 'react-redux';
import { createNewCompetition } from '../../redux/actions/competitionActions';
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object().shape({
	compName: yup
		.string()
		.required('Competition name is a required field.'),
});

function CreateCompetition() {
	const { goBack } = useHistory();
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);

		const newComp = {
			id: uuidv4(),
			name: data.compName,
			img: `https://cdn.fakercloud.com/avatars/amayvs_128.jpg`,
			status: false,
			winner: '',
		};
		dispatch(createNewCompetition(newComp));
		reset();
	};

	return (
		<div>
			<Button variant="contained" onClick={goBack} color="secondary">
				<ArrowBackIosIcon /> Go Back
			</Button>
			<Box
				sx={{
					width: 300,
					height: 400,
					margin: '0 auto',
					p: 2,
					boxShadow: '0 0 10px 2px #ccc',
				}}
			>
				<Typography
					component="h2"
					variant="h5"
					sx={{ mb: 5, textAlign: 'center' }}
				>
					Create new competition
				</Typography>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input
						{...register('compName')}
						id="compName"
						type="text"
						name="compName"
						error={!!errors.compName}
						helperText={errors?.compName?.message}
						sx={{ mb: 10 }}
					/>
					<MyButton color="success">Create new competition</MyButton>
				</Form>
			</Box>
		</div>
	);
}

export default CreateCompetition;
