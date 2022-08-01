import React from 'react';
import Modal from 'react-modal';

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

function ContactModal() {
	return (
		<Modal
			isOpen={true}
			onRequestClose={() => {
			}}
			contentLabel="Contact Modal"
			style={customModal}
		>
			<div className="container">
				<div className="grid">
					<div className="d-flex justify-content-center">
						<p className="text-break fw-bolder fs-3"> Edit Contact </p>
					</div>
					<div className="card">
						<div className="card-body">
							<div className="row align-items-center">
								<div className="col-md-4 d-flex flex-column align-items-center">
									<img
										src="
					https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
										alt="Contact"
										className="img-fluid rounded-circle contact-img"
									/>
								</div>
								<div className="col-md-7 d-flex flex-column">
									<ul className="list-group">
										<li className="list-group-item list-group-item-action">
											<input className="col-md-12" type="text" placeholder="Name"/>
										</li>
										<li className="list-group-item list-group-item-action">
											<input className="col-md-12" type="number"
														 placeholder="Mobile"/>
										</li>
										<li className="list-group-item list-group-item-action">
											<input className="col-md-12" type="email" placeholder="E-mail"/>
										</li>
										<li className="list-group-item list-group-item-action">
											<input className="col-md-12" type="url" placeholder="Picture"/>
										</li>
									</ul>
								</div>
								<div className="col-md-1 d-flex flex-column align-items-center">
									<button className="btn btn-success my-1 me-2">
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
