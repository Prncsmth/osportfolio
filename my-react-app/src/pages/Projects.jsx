import "./Projects.css";

const projects = [
  {
    title: "CPU SCHEDULING ALGORITHM",
    description: "A simulation tool for demonstrating CPU scheduling concepts.",
    tags: ["Java", "Algorithms"],
    img: "/images/project1.png",
    link: "#",
  },
  {
    title: "WEB BASED CRUD PROJECT",
    description: "CRUD web app for managing data efficiently.",
    tags: ["PHP", "MySQL"],
    img: "/images/project2.png",
    link: "#",
  },
  {
    title: "AUTOMATIC WHITEBOARD ERASER",
    description: "Robotics project designed to clean whiteboards automatically.",
    tags: ["Arduino", "Robotics"],
    img: "/images/project3.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-heading">CHECK OUT MY RECENT PROJECTS</h1>
      <p className="projects-sub">
        Interfaces for brands, schools, and culture.
      </p>

      <div className="projects-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-feature-card">
            {/* LEFT SIDE (TEXT) */}
            <div className="project-text">
              <span className="project-dot"></span>
              <span className="project-role">Lead Designer & Developer</span>

              <h2 className="project-title">{proj.title}</h2>
              <p className="project-description">{proj.description}</p>

              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              <a href={proj.link} className="project-view">
                View project →
              </a>
            </div>

            {/* RIGHT SIDE (IMAGE) */}
            <div className="project-image">
              <img src={proj.img} alt={proj.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
