import React from 'react';
import ContactSearch from "./ContactSearch";
import ContactCard from './ContactCard';

function ContactList() {
	return (
		<div className="p-3">
			<div className="container">
				<div className="grid">
					<div className="row">
						<div className="col">
							<button className="btn btn-primary mt-2">
								<i className="bi bi-journal-plus me-2"> Add Contact </i>
							</button>
						</div>
						<ContactSearch/>
						<div className="contact-list">
							<div className="row">
								<ContactCard/>
								<ContactCard/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactList;

