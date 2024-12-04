Portfolio Frontend
This is a frontend portfolio project built with React, showcasing projects, a contact form, and a diploma thesis about the Traveling Salesman Problem. The project is component-based and uses modern web development practices.

Features
Project Showcase: A page displaying individual projects, each with its own dedicated component.
Contact Form: A functional form allowing users to send inquiries.
Diploma Thesis Viewer: A page displaying a PDF of the diploma thesis in an embedded viewer.
Responsive Design: Optimized for both large and small screens.
Component-Based Architecture: Each section and project is encapsulated in its own React component.

Installation and Setup
To run this project locally:

Clone the repository:
git clone https://github.com/your-repo-url.git
Navigate to the project directory:
cd portfolio-frontend
Install dependencies:
npm install
Start the development server:
npm start
The app will be available at http://localhost:3000.

Deployment
This project includes a Dockerfile for containerized deployment. Here's how to build and run it with Docker:

Build the Docker image:
docker build -t portfolio-frontend .
Run the container:
docker run -p 8080:80 portfolio-frontend
The application will be accessible at http://localhost:8080.

File Structure
src/components: Contains reusable React components for the project pages.
src/pages: Contains the main pages like the project showcase, contact form, and diploma thesis viewer.
public/paper.pdf: The PDF file of the diploma thesis.
Dockerfile: Configuration for containerized deployment.
.gitignore: Specifies files and folders to ignore in version control.
Libraries Used
The project uses the following libraries (all dependencies are listed in package.json):

React: Core framework for building user interfaces.
@react-pdf-viewer: For displaying the PDF of the diploma thesis.
AOS (Animate on Scroll): For smooth animations during scrolling.
Development Practices
Component Modularity: Each section of the project is built as a reusable component.
Responsive Design: CSS media queries ensure optimal usability on all screen sizes.
Git Best Practices: A .gitignore file prevents sensitive files and unnecessary build artifacts from being committed.
Known Issues
PDF Download Prevention: The embedded PDF viewer does not allow downloads to ensure that the document is read-only.
Node Version Warning: You might encounter warnings during npm install due to deprecated packages in the current Node.js environment.