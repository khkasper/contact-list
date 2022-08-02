import PropTypes from 'prop-types';
import {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import axios from 'axios';

export const ContactsContext = createContext(null);

const API_URL = 'http://localhost:3000';
const API = axios.create({
	baseURL: API_URL,
});

export const ContactsProvider = ({children}) => {
	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	
	const fetchContacts = useCallback(async () => {
		setLoading(true);
		setError(null);
		
		try {
			const {data} = await API.get('/contacts');
			if (data) {
				setContacts(data);
			}
		} catch ({message}) {
			setError(message);
		}
		
		setLoading(false);
	}, []);
	
	const addContact = useCallback(async (contact) => {
		setLoading(true);
		setError(null);
		
		try {
			await API.post('/contacts', contact);
			await fetchContacts();
		} catch ({message}) {
			setError(message);
		}
		
		setLoading(false);
	}, [fetchContacts]);
	
	const updateContact = useCallback(async (id, contact) => {
		setLoading(true);
		setError(null);
		
		try {
			await API.put(`/contacts/${id}`, {
				...contact
			});
			await fetchContacts();
		} catch ({message}) {
			setError(message);
		}
		
		setLoading(false);
	}, [fetchContacts]);
	
	const deleteContact = useCallback(async (id) => {
		setLoading(true);
		setError(null);
		
		try {
			await API.delete(`/contacts/${id}`);
			await fetchContacts();
		} catch ({message}) {
			setError(message);
		}
		
		setLoading(false);
	}, [fetchContacts]);
	
	useEffect(() => {
		fetchContacts();
	}, [fetchContacts]);
	
	const context = useMemo(() => ({
		contacts,
		loading,
		error,
		addContact,
		updateContact,
		deleteContact
	}), [contacts, loading, error, addContact, updateContact, deleteContact]);
	
	return (
		<ContactsContext.Provider value={context}>
			{children}
		</ContactsContext.Provider>
	);
}

ContactsProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
