import React, { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from JSON
        fetch('src/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <header className="text-center mt-4">
                <h1>My Projects</h1>
            </header>
            <div className="container">
                <div className="row">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
                <div className="text-center">
                    <a href="index.html" className="btn-back">Back to Home</a>
                </div>
            </div>
            <footer>
                <p>&copy; 2024 Muhammed Mubashir. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
