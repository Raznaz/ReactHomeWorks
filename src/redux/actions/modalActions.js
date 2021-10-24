export const SHOW_MODAL = '[MODAL] Show modal window';
export const CLOSE_MODAL = '[MODAL] Close modal window';

export const showModal = () => ({
	type: SHOW_MODAL,
});

export const closeModal = () => ({
	type: CLOSE_MODAL,
});
