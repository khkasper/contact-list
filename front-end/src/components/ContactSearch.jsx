import React from 'react';

function ContactSearch() {
	return (
		<div className="py-3">
			<div className="col-md-8">
				<form className="row">
					<div className="col">
						<input type="text" className="form-control" placeholder="Search contacts"/>
					</div>
					<div className="col">
						<button className="btn btn-primary" type="submit">
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactSearch;
