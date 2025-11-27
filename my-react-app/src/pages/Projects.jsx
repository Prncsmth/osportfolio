import "./Projects.css";
 
const projects = [
  { title: "CPU SCHEDULING ALGORITHM", description: "project A", link: "#" },
  { title: "WEB BASED CRUD PROJECT", description: "Description of project B", link: "#" },
  { title: "AUTOMATIC WHITEBOARD ERASER", description: "Description of project C", link: "#" },
  { title: "CPU SCHEDULING ALGORITHM", description: "project A", link: "#" },
  { title: "CPU SCHEDULING ALGORITHM", description: "project A", link: "#" },
  { title: "CPU SCHEDULING ALGORITHM", description: "project A", link: "#" },
  // …add more projects
];

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
          
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} className="project-link">View →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
