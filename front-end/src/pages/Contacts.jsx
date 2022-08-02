import React from 'react';
import NavBar from "../components/NavBar";
import ContactList from "../components/ContactList";
import ContactSearch from '../components/ContactSearch';
import ContactAddButton from '../components/ContactAddButton';

function Contacts() {
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
