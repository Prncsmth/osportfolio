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

        

        <Link to="/projects" className="btn secondary view-all">View All Projects</Link>
      </section>
    </div>
  );
}
