import React, {useContext} from 'react';
import {ContactsContext} from '../context/ContactsContext';
import ContactCard from './ContactCard';
import Loading from './Loading';

function ContactList() {
	const {contacts, loading} = useContext(ContactsContext);
	
	if (loading) {
		return <Loading/>;
	}
	
	return (
		<div className="row">
			{contacts.map((contact, index) => (
				<ContactCard key={index} contact={contact}/>
			))}
		</div>
	);
}

export default ContactList;
