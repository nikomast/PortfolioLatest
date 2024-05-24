import React from 'react';
import './project.css'; // Assuming you have a separate CSS file for styling

const Project = ({ title, description, imageUrl }) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <div className="project-content">
                <img src={imageUrl} alt={title} className="project-image" data-aos="custom-slide-in-left" />
                <p className="project-description" data-aos="custom-slide-in-right">{description}</p>
            </div>
        </div>
    );
};


export default Project;
