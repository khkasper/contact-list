import React from 'react';

function ContactSearch() {
	return (
		<div className="row">
			<div className="col-md-6">
				<form className="row">
					<div className="col">
						<div className="mt-2">
							<input type="text" className="form-control" placeholder="Search contacts"/>
						</div>
					</div>
					<div className="col">
						<div className="mt-2">
							<button className="btn btn-primary" type="submit">
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactSearch;
