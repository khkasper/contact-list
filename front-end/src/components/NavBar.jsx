import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-body">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <i className="bi bi-phone">Contacts List</i>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;