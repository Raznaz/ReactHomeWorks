import React from 'react';
import classes from './Modal.module.css';

function Modal({ userName, modalState, setModalState }) {
	const containerClass = [classes.modal];
	console.log(containerClass);

	if (modalState) {
		containerClass.push(classes.show);
		console.log(containerClass);
	}

	return (
		<div>
			<div
				className={containerClass.join(' ')}
				onClick={() => setModalState(false)}
			>
				<div
					className={classes.modalDialog}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={classes.modalContent}>
						<div
							onClick={() => setModalState(false)}
							className={classes.modalClose}
						>
							&times;
						</div>
						<div>
							<h2>Детальная информация про:</h2>
							<p>{userName.name}</p>
							<div>
								<img src={userName.picture} alt="" />
							</div>
							<p>age: {userName.age}</p>
							<p>phone: {userName.phone}</p>
							<p>about: {userName.about}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
