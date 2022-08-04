import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import ContactList from '../components/ContactList';
import ContactSearch from '../components/ContactSearch';
import ContactAddButton from '../components/ContactAddButton';
import { ContactsContext } from '../context/ContactsProvider';

function Contacts() {
	const { error } = useContext(ContactsContext);
	
	if (error) return <h1>Error: { error }</h1>;
	
	return (
		<>
			<NavBar/>
			<div className="container">
				<ContactSearch/>
				<ContactAddButton/>
				<ContactList/>
			</div>
		</>
	);
}

export default Contacts;
