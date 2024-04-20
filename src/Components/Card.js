import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ experiment, categoryClass }) {
  const handleStartClick = () => {
    // Navigate to the full page version of the experiment using the id
    window.location.href = `/experiment/${experiment.id}`;
    //FINISH THIS!
  };
  
  return (
    <div className={`card text-center ${categoryClass}`}>
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <Link to="./Instructions" className="nav-link">Instructions</Link>
          </li>
          <li className="nav-item">
            <Link to="./EditDeleteEx" className="nav-link">Edit</Link>
          </li>
          <li className="nav-item">
            <Link to="#./SavedExperiments" className="nav-link">Save</Link>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">{experiment.title}</h5>
        <p className="card-text">{experiment.details}</p>
        <button onClick={handleStartClick} className="btn btn-light">Start</button>
      </div>
    </div>
  );
}

export default Card;
