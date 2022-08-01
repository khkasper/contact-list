import React from 'react';
import ContactSearch from "./ContactSearch";
import ContactModal from "./ContactModal";
import ContactCard from './ContactCard';

function ContactList() {
	return (
		<div className="p-3">
			<ContactModal/>
			<div className="container">
				<div className="grid">
					<div className="row">
						<div className="col-md-12">
							<button className="btn btn-primary mt-2">
								<i className="bi bi-journal-plus me-2"> Add Contact </i>
							</button>
						</div>
						<ContactSearch/>
						<ContactCard/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactList;

