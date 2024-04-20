// import React, { useState } from 'react';

// function ActiveEx({ experiment }) {
//   const [notes, setNotes] = useState('');

//   const handleNoteChange = (event) => {
//     setNotes(event.target.value);
//   };

//   const handleSaveNotes = () => {
    
//     fetch(`https://6621e50c27fcd16fa6c82dbe.mockapi.io/API_experiments/Experiment/${experiment.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         notes: notes,
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log("Notes saved successfully:", data);
//         // Make a function to handle state update
//         // setNotesInState(data.notes);
//       })
//       .catch(error => {
//         console.error("Error saving notes:", error);
//       });
//   };

//   return (
//     <div>
//       <h1>Active Experiment Details</h1>
//       <h2>Supplies & Reagents</h2>
//       <p>{experiment.stuff}</p>
//       <h2>Step-by-Step Instructions</h2>
//       <p>{experiment.details}</p>
//       <h2>Notes</h2>
//       <textarea value={notes} onChange={handleNoteChange} />
//       <button className="btn btn-success" onClick={handleSaveNotes}>Save Notes</button>
//     </div>
//   );
// }

// export default ActiveEx;

