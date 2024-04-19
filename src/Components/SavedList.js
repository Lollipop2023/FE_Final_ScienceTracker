//make a page for people to save experiments they want to try for later. 
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SavedExperimentCard from './SavedExperimentCard';


function savedExperimentList({ savedExperiments }) {
  return (
    <div>
      {savedExperiments.map((experiment, index) => (
        <SavedExperimentCard key={index} experiment={experiment} />
      ))}
    </div>
  );
}

export default savedExperimentList;
