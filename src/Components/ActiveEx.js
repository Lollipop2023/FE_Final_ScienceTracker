import React, { useState } from 'react';

function ActiveEx({ experiment }) {
  const [notes, setNotes] = useState('');

  const handleNoteChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSaveNotes = () => {
    // Update state
    // Update API database
  };

  return (
    <div>
      <h1>Active Experiment Details</h1>
      <h2>Supplies & Reagents</h2>
        <p>{experiment.stuff}</p>
      <h2>Step-by-Step Instructions</h2>
        <p>{experiment.details}</p>
      <h2>Notes</h2>
      <textarea value={notes} onChange={handleNoteChange} />
      <button btn-btn-success onClick={handleSaveNotes}>Save Notes</button>
    </div>
  );
}

export default ActiveEx;
