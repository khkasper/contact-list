import React, {useContext, useState} from 'react';
import Modal from 'react-modal';
import {ContactsContext} from '../context/ContactsContext';

const customModal = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	content: {
		background: '#fff',
		border: 'none',
		borderRadius: '10px',
		bottom: 'auto',
		boxShadow: '0 0 20px #000000',
		height: 'auto',
		left: '50%',
		right: 'auto',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: 'auto',
	}
}

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

function ContactModal({isModalOpen, setIsModalOpen, contact, mode}) {
	const {addContact, updateContact} = useContext(ContactsContext);
	const [name, setName] = useState(contact ? contact.name : '');
	const [mobile, setMobile] = useState(contact ? contact.mobile : '');
	const [email, setEmail] = useState(contact ? contact.email : '');
	const [url, setUrl] = useState(
		contact
			? contact.url
			: "https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
	);
	
	const edit = () => {
		updateContact(contact._id, {name, mobile, email, url});
		setIsModalOpen(false);
	}
	
	const add = () => {
		addContact({name, mobile, email, url});
		setIsModalOpen(false);
	}
	
	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={() => {
				setIsModalOpen(false)
			}}
			contentLabel="Contact Modal"
			style={customModal}
		>
			<div className="container">
				<div className="grid">
					<div className="d-flex justify-content-center">
						<p className="text-break fw-bolder fs-3">
							{mode === 'addContact' ? 'Add Contact' : 'Edit Contact'}
						</p>
					</div>
					<div className="card">
						<div className="card-body">
							<div className="row align-items-center">
								<div className="col-md-4 d-flex flex-column align-items-center">
									<img
										src={url}
										alt="Contact"
										className="img-fluid rounded-circle contact-img"
									/>
								</div>
								<div className="col-md-7 d-flex flex-column">
									<ul className="list-group">
										<li className="list-group-item list-group-item-action">
											<input
												className="col-md-12"
												type="text"
												placeholder="Name"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</li>
										<li className="list-group-item list-group-item-action">
											<input
												className="col-md-12"
												type="text"
												placeholder="Mobile"
												value={mobile}
												onChange={(e) => setMobile(e.target.value)}
											/>
										</li>
										<li className="list-group-item list-group-item-action">
											<input
												className="col-md-12"
												type="email"
												placeholder="E-mail"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</li>
										<li className="list-group-item list-group-item-action">
											<input
												className="col-md-12"
												type="url"
												placeholder="Picture"
												value={url}
												onChange={(e) => setUrl(e.target.value)}
											/>
										</li>
									</ul>
								</div>
								<div className="col-md-1 d-flex flex-column align-items-center">
									<button
										className="btn btn-success my-1 me-2"
										type="button"
										onClick={() => {
											mode === 'editContact' ? edit() : add();
										}}
									>
										<i className="bi bi-check2"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default ContactModal;
