import "./Projects.css";

const projects = [
  {
    title: "Building Reusable React Components Using Props and List Rendering",
    description: "This project teaches how to create reusable React components that get their data from props. You’ll store multiple items in an array and use .map() to display them. It’s a practical way to learn how real websites show lists of products, posts, or users.",
    tags: ["React", "JavaScript","CSS","GitHub"],
    img: "/public/princesmith.jpg",
    link: "https://github.com/Prncsmth/3a-apps-dev",
  },
  {
    title: "React E-Commerce Web Application Using DummyJSON API",
    description: "This project requires building a React-based online shop that gets product data from the DummyJSON API. Users should be able to view all products, open a product’s details, use search and filters, and manage a cart up to checkout.",
    tags: ["React", "JavaScript", "JSX", "CSS (or Tailwind)", "API", "GitHub", "Vercel"],
    img: "/public/rcs.jpg",
    link: "https://github.com/carlacarla-29/APPS-DEV",
  },
  {
    title: "Profile Page",
    description: "A user-centered profile page that highlights essential personal information while maintaining a balanced visual hierarchy. The design uses consistent spacing, typography, and color to deliver a clear, intuitive, and aesthetically pleasing user experience.",
    tags: ["Figma","React", "HTML/JSX", "CSS"],
    img: "/public/saw.jpg",
    link: "https://github.com/Prncsmth/React-Activity-1",
  },
];

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-heading">CHECK OUT MY RECENT PROJECTS</h1>
      <p className="projects-sub">
        I've worked on various projects — from simple websites to fully functional web applications. Here are a few favorites.
      </p>

      <div className="projects-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-feature-card">
            {/* LEFT SIDE (TEXT) */}
            <div className="project-text">
              

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
