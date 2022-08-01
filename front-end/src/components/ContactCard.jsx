import React from 'react';

function ContactCard() {
	return (
		<div className="contact-card">
			<div className="container mt-2">
				<div className="col-md-6">
					<div className="card">
						<div className="card-body">
							<div className="row align-items-center">
								<div className="col-md-4">
									<img
										src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
										alt="Contact Picture"
										className="img-fluid rounded-circle contact-img"
									/>
								</div>
								<div className="col-md-7">
									<ul className="list-group">
										<li className="list-group-item list-group-item-action">
											Name: <span className="text-primary">John Doe</span>
										</li>
										<li className="list-group-item list-group-item-action">
											Mobile: <span className="text-primary">55 999999999</span>
										</li>
										<li className="list-group-item list-group-item-action">
											E-mail: <span className="text-primary">email@email.com</span>
										</li>
									</ul>
								</div>
								<div className="col-md-1 d-flex flex-column align-items-center">
									<button className="btn btn-warning my-1">
										<i className="bi bi-pencil-square"></i>
									</button>
									<button className="btn btn-danger my-1">
										<i className="bi bi-trash"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
