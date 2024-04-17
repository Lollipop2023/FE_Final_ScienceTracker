import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './card.css'

const ExperimentCard = ({ experiment }) => {
    // Please, please, please work! This will be so cool if it does what I am trying to do!
    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case 'physics':
                return 'yellow';
            case 'chemistry':
                return 'orange';
            case 'biology':
                return 'green';
            default:
                return 'gray';
        }
    };
console.log(getCategoryColor(experiment.category))
    return (
        <div className={`card border-${getCategoryColor(experiment.category)}`}>
            <div className="card-body">
                <h5 className="card-title">{experiment.title}</h5>
                <p className="card-text">Difficulty: {experiment.level}</p>
                <Nav.Link to={`/experiment-instructions/${experiment.id}`} className="btn btn-primary">Details</Nav.Link>
            </div>
        </div>
    );
};

export default ExperimentCard;
