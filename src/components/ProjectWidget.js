import React from 'react';

const ProjectWidget = ({ title, description, image, link }) => {
    return (
        <div className="col-md-4">
            <div className="project-card">
                <img src={image} alt={title} />
                <div className="p-3">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectWidget;
