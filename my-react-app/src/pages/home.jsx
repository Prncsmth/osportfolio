import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <div className="status-dot"></div>
            <p className="status-text">Message me</p>
            
            <h1 className="title">
              Hey, I'm Smith <span className="wave">👋</span>
            </h1>
            <p className="subtitle">
              A passionate Web Developer dedicated to building responsive, modern, and visually clean web applications — from simple sites to full systems.
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
            <h3>CPU Scheduling Algorithm</h3>
            <p>A simulation tool for CPU scheduling methods.</p>
            <div className="tags"><span>Java</span><span>DSA</span></div>
          </div>

          <div className="project-card">
            <div className="project-img"></div>
            <h3>EB Based CRUD Project</h3>
            <p>A complete CRUD system with authentication.</p>
            <div className="tags"><span>PHP</span><span>MySQL</span></div>
          </div>

          <div className="project-card">
            <div className="project-img"></div>
            <h3>Automatic Whiteboard Eraser</h3>
            <p>Arduino‑powered smart erasing tool.</p>
            <div className="tags"><span>Arduino</span><span>Hardware</span></div>
          </div>
        </div>

        <Link to="/projects" className="btn secondary view-all">View All Projects</Link>
      </section>
    </div>
  );
}
