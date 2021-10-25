import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/actions/modalActions';

function ModalWindow({ children, ...props }) {
	const { modal } = useSelector((state) => state);

	const dispatch = useDispatch();

	return (
		<>
			<Modal
				open={modal.isModalShow}
				onClose={() => dispatch(closeModal())}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						maxWidth: '400px',
						minHeight: '400px',
						margin: '0 auto',
						transform: 'translate(-50%, 20%)',
						bgcolor: '#fff',
						p: 2,
						borderRadius: '20px',
						boxShadow: '2px 2px 10px 0px #000',
					}}
				>
					<Typography
						id="modal-modal-title"
						variant="div"
						component="div"
						sx={{
							textAlign: 'center',
							fontSize: '20px',
							color: '#222',
							mb: 2,
						}}
					>
						{props.title}
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="div"
						component="div"
						sx={{ textAlign: 'center', fontSize: '18px' }}
					>
						id: {props.currentUser.id}
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="div"
						component="div"
						sx={{ textAlign: 'center', fontSize: '30px' }}
					>
						{props.currentUser.firstName} {props.currentUser.lastName}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{children}
					</Typography>
				</Box>
			</Modal>
		</>
	);
}

export default ModalWindow;
