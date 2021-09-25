import React from 'react';
import classes from './Modal.module.css';

function Modal({ userName, modalState, setModalState }) {
	const containerClass = [classes.modal];

	if (modalState) {
		containerClass.push(classes.show);
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
							<h4>Information about:</h4>
							<h2 className="card__name-title">{userName.name}</h2>
							<div>
								<img src={userName.picture} alt="" />
							</div>
							<div className="card__content">
								<p>
									<span className="card__name-title">age:</span>{' '}
									{userName.age}
								</p>
								<p>
									<span className="card__name-title">phone:</span>:{' '}
									{userName.phone}
								</p>

								<p>
									<span className="card__name-title">eyeColor:</span>{' '}
									{userName.eyeColor}
								</p>
								<p>
									<span className="card__name-title">company:</span>{' '}
									{userName.company}
								</p>
								<p>
									<span className="card__name-title">gender:</span>{' '}
									{userName.gender}
								</p>
								<p>
									<span className="card__name-title">email:</span>{' '}
									{userName.email}
								</p>
								<p>
									<span className="card__name-title">address:</span>{' '}
									{userName.address}
								</p>
								<p>
									<span className="card__name-title">balance:</span>{' '}
									{userName.balance}
								</p>
								<p>
									<span className="card__name-title">about:</span>{' '}
									{userName.about}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
