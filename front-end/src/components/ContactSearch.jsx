import React, {useContext} from 'react';
import {ContactsContext} from '../context/ContactsContext';

function ContactSearch() {
	const {setSearch} = useContext(ContactsContext);
	
	return (
		<div className="py-3">
			<div className="col-md-3">
				<input
					type="text"
					className="form-control"
					placeholder="Search contacts"
					onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
				/>
			</div>
		</div>
	);
}

export default ContactSearch;
