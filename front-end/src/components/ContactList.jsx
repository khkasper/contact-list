import React, {useContext} from 'react';
import {ContactsContext} from '../context/ContactsContext';
import ContactCard from './ContactCard';
import Loading from './Loading';

function ContactList() {
	const {contacts, search, loading} = useContext(ContactsContext);
	const contactList = search.length > 0
		? contacts.filter(contact => contact.name.toLocaleLowerCase().includes(search))
		: contacts;
	
	if (loading) {
		return <Loading/>;
	}
	
	return (
		<div className="row">
			{contactList.map((contact) => (
				<ContactCard key={contact._id} contact={contact}/>
			))}
		</div>
	);
}

export default ContactList;
