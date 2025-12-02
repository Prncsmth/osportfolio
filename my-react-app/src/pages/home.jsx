import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <div className="status-badge">
              <div className="status-dot"></div>
              <p className="status-text">Message me</p>
            </div>
            
            <h1 className="title">
              Hey, I'm Smith !
            </h1>
            <p className="subtitle">
             a passionate Web Developer in training, I focus on crafting modern, responsive, and performance-driven web applications, applying the best practices in UI/UX and clean coding. With practical experience in web design, Java, and system development, I strive to build solutions that are reliable, visually appealing, and user-focused.


            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn primary">Free Consultation</Link>
              <Link to="/projects" className="btn outline">Explore Projects</Link>
            </div>
          </div>

          <div className="hero-image">
            <img src="/s.jpg" alt="Smith Degamo" />
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className="projects">
        <p className="section-label">Recent Projects</p>
        <h2 className="section-title">Check out my recent work</h2>
        <p className="section-sub">
          I've worked on various projects — from simple websites to fully functional web applications.
          Here are a few favorites.
        </p>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-img"></div>
            <h3>Building Reusable React Components Using Props and List Rendering</h3>
            <p>This project teaches how to create reusable React components that get their data from props. You’ll store multiple items in an array and use .map() to display them. It’s a practical way to learn how real websites show lists of products, posts, or users.</p>
            <div className="tags"><span>React</span><span>JS</span></div>
          </div>

          <div className="project-card">
            <div className="project-img"></div>
            <h3>React E-Commerce Web Application Using DummyJSON API</h3>
            <p>This project requires building a React-based online shop that gets product data from the DummyJSON API. Users should be able to view all products, open a product’s details, use search and filters, and manage a cart up to checkout.</p>
            <div className="tags"><span>React</span><span>JS</span><span>CSS</span></div>
          </div>

          <div className="project-card">
            <div className="project-img"></div>
            <h3>Profile Page</h3>
            <p>A user-centered profile page that highlights essential personal information while maintaining a balanced visual hierarchy. The design uses consistent spacing, typography, and color to deliver a clear, intuitive, and aesthetically pleasing user experience.</p>
            <div className="tags"><span>Figma</span><span>HTML</span><span>CSS</span><span>React</span></div>
          </div>
        </div>

        <Link to="/projects" className="btn secondary view-all">View All Projects</Link>
      </section>
    </div>
  );
}
