import { render, screen } from '@testing-library/react';
import App from '../App';
import mockContacts from './mockContacts';
import { ContactsProvider, API } from '../context/ContactsProvider';

const axiosSpy = jest.spyOn(API, 'get');
axiosSpy.mockImplementation(() => Promise.resolve({ data: mockContacts }));

describe('Tests the application', () => {
	
	beforeEach(() => {
		axiosSpy.mockClear();
		axiosSpy.mockImplementation(() => Promise.resolve({ data: mockContacts }));
	});
	
	it('should render without crashing', async () => {
		render(<ContactsProvider><App/></ContactsProvider>);
		
		const title = await screen.findByText(/contacts list/i);
		
		expect(title).toBeInTheDocument();
	});
});
