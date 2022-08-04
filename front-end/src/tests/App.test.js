import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockContacts from './mockContacts';
import { ContactsProvider, API } from '../context/ContactsProvider';

const axiosSpy = jest.spyOn(API, 'get');

describe('Tests if the application', () => {
	
	beforeEach(() => {
		axiosSpy.mockClear();
		axiosSpy.mockImplementation(() => Promise.resolve({ data: mockContacts }));
	});
	
	it('should display the title', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const linkTitle = await screen.findByRole('link', { name: /contacts list/i });
		
		expect(linkTitle).toBeInTheDocument();
	});
	
	it('should display the "Search contact" input', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const searchInput = await screen.findByPlaceholderText(/search contact/i);
		
		expect(searchInput).toBeInTheDocument();
	});
	
	it('should display the "Add Contact" button ', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const addContactButton = await screen.findByRole('button', { name: /add contact/i });
		
		expect(addContactButton).toBeInTheDocument();
	});
	
	it('should display contacts cards with informations', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const name = mockContacts[0].name;
		const mobile = mockContacts[0].mobile;
		const email = mockContacts[0].email;
		
		const johnDoeName = await screen.findByText(name);
		const johnDoeMobile = await screen.findByText(mobile);
		const johnDoeEmail = await screen.findByText(email);
		
		expect(johnDoeName).toBeInTheDocument();
		expect(johnDoeMobile).toBeInTheDocument();
		expect(johnDoeEmail).toBeInTheDocument();
	});
	
	it('should display the "Edit" button', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const editButton = await screen.findByRole('button', { name: /edit/i });
		
		expect(editButton).toBeInTheDocument();
	});
	
	it('should display the "Delete" button', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const deleteButton = await screen.findByRole('button', { name: /delete/i });
		
		expect(deleteButton).toBeInTheDocument();
	});
	
	it('should display the "Add Contact" form', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const addContactButton = await screen.findByRole('button', { name: /add contact/i });
		await userEvent.click(addContactButton);
		
		const addContactName = await screen.findByPlaceholderText(/name/i);
		const addContactMobile = await screen.findByPlaceholderText(/55999999999/i);
		const addContactEmail = await screen.findByPlaceholderText(/email@email.com/i);
		const addContactUrl = await screen.findByPlaceholderText(/picture url/i);
		
		expect(addContactName).toBeInTheDocument();
		expect(addContactName).toBeEmpty();
		expect(addContactMobile).toBeInTheDocument();
		expect(addContactMobile).toBeEmpty();
		expect(addContactEmail).toBeInTheDocument();
		expect(addContactEmail).toBeEmpty();
		expect(addContactUrl).toBeInTheDocument();
		expect(addContactUrl).toHaveValue(mockContacts[0].url);
	});
	
	it('should display the "Edit Contact" form', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const editButton = await screen.findByRole('button', { name: /edit/i });
		await userEvent.click(editButton);
		
		const editContactName = await screen.findByText(mockContacts[0].name);
		const editContactMobile = await screen.findByText(mockContacts[0].mobile);
		const editContactEmail = await screen.findByText(mockContacts[0].email);
		const editContactUrl = await screen.findByPlaceholderText(/Picture url/i);
		
		expect(editContactName).toBeInTheDocument();
		expect(editContactMobile).toBeInTheDocument();
		expect(editContactEmail).toBeInTheDocument();
		expect(editContactUrl).toHaveValue(mockContacts[0].url);
	});
});
