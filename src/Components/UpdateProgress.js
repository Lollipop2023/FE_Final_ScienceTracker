import React from 'react';
//This option for each user to update their own work within the experiment without touching
//the experiment itself.
const EditDeleteProgress = ({ onEdit, onDelete }) => {
    return (
        <div>
            <button className="btn btn-warning mr-2" onClick={onEdit}>Edit</button>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default EditDeleteProgress;
