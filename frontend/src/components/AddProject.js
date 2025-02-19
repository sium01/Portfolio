import React, { useState } from 'react';
import axios from 'axios';
import './AddProject.css';

const AddProject = ({ history }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            await axios.post('http://localhost:5000/api/projects', { title, description, link, userId: userInfo._id });
            history.push('/portfolio');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-project-container">
            <h2>Add Project</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" required />
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;