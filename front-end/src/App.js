import React from "react";
import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import Contacts from "./pages/Contacts";
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			<header>
				<NavBar/>
			</header>
			<Routes>
				<Route exact path="/" element={<Navigate to="/contacts"/>}/>
				<Route exact path="/contacts" element={<Contacts/>}/>
			</Routes>
		</>
	);
}

export default App;
