import React, { useState, useContext } from 'react';
import { ContactsContext } from '../context/ContactsContext';
import ContactModal from './ContactModal';

function ContactCard({ contact }) {
	const { _id, name, mobile, email, url } = contact;
	const { deleteContact } = useContext(ContactsContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	return (
		<div className="col-md-6 mt-2">
			<div className="card">
				<div className="card-body">
					<div className="row align-items-center d-flex justify-content-around">
						<div className="col-md-4 d-flex flex-column align-items-center">
							<img
								src={ url }
								alt="Contact"
								className="img-fluid rounded-circle contact-img"
							/>
						</div>
						<div className="col-md-7 d-flex flex-column">
							<ul className="list-group">
								<li className="list-group-item list-group-item-action">
									Name: <span className="text-primary">{ name }</span>
								</li>
								<li className="list-group-item list-group-item-action">
									Mobile: <span className="text-primary">{ mobile }</span>
								</li>
								<li className="list-group-item list-group-item-action">
									E-mail: <span className="text-primary">{ email }</span>
								</li>
							</ul>
						</div>
						<div className="col-md-1 d-flex flex-column align-items-center">
							<button
								className="btn btn-warning my-1 me-2"
								type="button"
								onClick={ () => setIsModalOpen(true) }
							>
								<i className="bi bi-pencil-square"></i>
							</button>
							{ isModalOpen && (
								<ContactModal
									contact={ contact }
									isModalOpen={ isModalOpen }
									setIsModalOpen={ setIsModalOpen }
									mode="editContact"
								/>
							) }
							<button
								className="btn btn-danger my-1 me-2"
								type="button"
								onClick={ () => deleteContact(_id) }
							>
								<i className="bi bi-trash"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
