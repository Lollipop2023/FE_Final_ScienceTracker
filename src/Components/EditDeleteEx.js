import React from 'react';

const EditDeleteExperiment = ({ onEdit, onDelete }) => {
    const handleEdit = () => {
        // Find a snippet for editing to add here so it works, maybe make passable as a prop?
        console.log("Edit me!");
        
    };

    const handleDelete = () => {
        // find a snippet here too. Maybe instead of prop, do by ID?
        console.log("Delete me!");
    };

    return (
        <div>
            <button className="btn btn-warning mr-2" onClick={handleEdit}>Edit</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default EditDeleteExperiment;
