import React, { useState } from 'react';
import Navbar from './Navbar';

const AddExperimentPage = ({ onAddExperiment }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [supplies, setSupplies] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
          const newExperiment = {
            title,
            category,
            level,
            supplies,
            instructions
        };
        //try to pass in as an object to function to make it update state.
        onAddExperiment(newExperiment);
        setTitle("");
        setCategory("");
        setLevel("");
        setSupplies("");
        setInstructions("");
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h2>Add New Experiment</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input /*figure out how to change to selectors instead of text*/
                            type="text"
                            className="form-control"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Difficulty Level:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="supplies">Supplies:</label>
                        <textarea
                            className="form-control"
                            id="supplies"
                            rows="3"
                            value={supplies}
                            onChange={(e) => setSupplies(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="instructions">Instructions:</label>
                        <textarea
                            className="form-control"
                            id="instructions"
                            rows="5"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Experiment</button>
                </form>
            </div>
        </div>
    );
};

export default AddExperimentPage;
