import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    
    const handleLogout = () => {
        // Once I get the login page figured out...This will be handy.
        console.log("Logged out");
    };
//figure out how to change from list to router or switch again for pages.
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Nav.Link to="/" className="navbar-brand">Science Tracker</Nav.Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Nav.Link to="/" className="nav-link">Home</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link to="/experiment-instructions" className="nav-link">Instructions</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link to="/experiment-categories" className="nav-link">Categories</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link to="/experiments-progress" className="nav-link">Progress</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link to="/add-experiment" className="nav-link">Add Experiment</Nav.Link>
                    </li>
                </ul>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        UserName
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;