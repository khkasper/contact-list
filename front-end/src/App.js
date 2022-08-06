import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/contacts"/> }/>
        <Route exact path="/contacts" element={ <Contacts/> }/>
      </Routes>
    </Router>
  );
}

export default App;
