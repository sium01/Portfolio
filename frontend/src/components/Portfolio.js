import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const { data } = await axios.get(`http://localhost:5000/api/projects/${userInfo._id}`);
            setProjects(data);
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Portfolio</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;