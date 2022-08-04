import React, { useState } from 'react';
import ContactModal from './ContactModal';

function ContactAddButton() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className="pb-3">
			<button
				className="btn btn-primary mt-2"
				type="button"
				onClick={ () => setIsModalOpen(true) }
			>
				<i className="bi bi-journal-plus me-2"> Add Contact </i>
			</button>
			{ isModalOpen && (
				<ContactModal
					isModalOpen={ isModalOpen }
					setIsModalOpen={ setIsModalOpen }
					mode="addContact"
				/>
			) }
		</div>
	);
}

export default ContactAddButton;
