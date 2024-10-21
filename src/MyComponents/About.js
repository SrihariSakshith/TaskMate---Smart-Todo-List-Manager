import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Project</h1>
      <p className="about-description">
        This project is a simple yet functional Todo List application built using React. 
        It allows users to manage their tasks efficiently by adding, deleting, and viewing todo items. 
        The application features persistent storage using the browser's local storage, ensuring that todos remain available even after refreshing the page.
      </p>
      <h2 className="about-subtitle">Features</h2>
      <ul className="about-list">
        <li><strong>Add Todos:</strong> Easily add new tasks with titles and descriptions.</li>
        <li><strong>Delete Todos:</strong> Remove tasks from the list with a single click.</li>
        <li><strong>Persistent Storage:</strong> Todos are stored in the browser's local storage for persistence.</li>
        <li><strong>Responsive Design:</strong> User-friendly layout for both desktop and mobile devices.</li>
      </ul>
      <h2 className="about-subtitle">Technologies Used</h2>
      <ul className="about-list">
        <li><strong>React:</strong> For building the user interface and managing component states.</li>
        <li><strong>React Router:</strong> For handling navigation between different pages.</li>
        <li><strong>CSS:</strong> For styling the application and creating a visually appealing layout.</li>
      </ul>
      <h2 className="about-subtitle">How to Use</h2>
      <ol className="about-list">
        <li><strong>Add a Todo:</strong> Enter a title and description and click "Add."</li>
        <li><strong>View Todos:</strong> Added todos will be displayed in a list.</li>
        <li><strong>Delete a Todo:</strong> Click the delete button next to a todo to remove it.</li>
        <li><strong>Navigate to About:</strong> Click the "About" link in the header to view this information.</li>
      </ol>
      <p className="about-conclusion">
        This project serves as a foundation for understanding state management, local storage, 
        and routing in React applications. It can be further expanded with additional features like 
        editing tasks, filtering, and user authentication.
      </p>
    </div>
  );
};

export default About;
