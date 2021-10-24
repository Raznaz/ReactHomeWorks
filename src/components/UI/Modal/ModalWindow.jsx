import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/actions/modalActions';

function ModalWindow({ children, ...props }) {
	const { modal } = useSelector((state) => state);

	const dispatch = useDispatch();

	// console.log('STATE:', state);
	return (
		<div>
			<Modal
				open={modal.isModalShow}
				// open={true}
				onClose={() => dispatch(closeModal())}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						width: '200px',
						minHeight: '400px',
						margin: '0 auto',
						transform: 'translate(-50%, 20%)',
						bgcolor: '#fff',
						p: 3,
					}}
				>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h6"
						sx={{ textAlign: 'center', fontSize: '20px' }}
					>
						{props.title}
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="h5"
						component="h5"
						sx={{ textAlign: 'center', fontSize: '30px' }}
					>
						id: {props.currentUser.id}
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="h5"
						component="h5"
						sx={{ textAlign: 'center', fontSize: '30px' }}
					>
						{props.currentUser.firstName} {props.currentUser.lastName}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{children}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}

export default ModalWindow;
