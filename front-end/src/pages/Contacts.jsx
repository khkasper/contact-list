import React, {useContext} from 'react';
import ContactList from "../components/ContactList";
import ContactSearch from '../components/ContactSearch';
import ContactAddButton from '../components/ContactAddButton';
import {ContactsContext} from '../context/ContactsContext';

function Contacts() {
	const {error} = useContext(ContactsContext);
	
	if (error) return <h1>Error: {error}</h1>;
	
	return (
		<main className="container">
			<ContactSearch/>
			<ContactAddButton/>
			<ContactList/>
		</main>
	);
}

export default Contacts;
