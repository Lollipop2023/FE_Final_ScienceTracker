// This page should display the full experiment, with the option to "start" which then gives a note section.
import React, { useState } from 'react';
import Navbar from './Navbar';

const ExperimentInstructionsPage = ({ experiment }) => {
    const [notes, setNotes] = useState("");

    const handleStartExperiment = () => {
        // Code logic to "start" the experiment and to save the notes to database.
        console.log("Notes recorded:", notes);
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h2>{experiment.title}</h2>
                <hr />
                <h4>Category: {experiment.category}</h4>
                <h4>Difficulty Level: {experiment.level}</h4>
                <h4>Details:</h4>
                <p>{experiment.details}</p>
                <hr />
                <h4>Record Your Notes:</h4>
                <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your notes here..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                ></textarea>
                <button className="btn btn-primary mt-3" onClick={handleStartExperiment}>Start Experiment</button>
            </div>
        </div>
    );
};

export default ExperimentInstructionsPage;

