import React from "react";
import "./App.css";

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Contacts from "./pages/Contacts";
import {ContactsProvider} from './context/ContactsContext';


function App() {
	return (
		<ContactsProvider>
			<Router>
				<Routes>
					<Route exact path="/" element={<Navigate to="/contacts"/>}/>
					<Route exact path="/contacts" element={<Contacts/>}/>
				</Routes>
			</Router>
		</ContactsProvider>
	);
}

export default App;
