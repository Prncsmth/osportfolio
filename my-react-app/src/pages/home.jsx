import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Smith<br/><span>a Web Developer</span></h1>  <img src="/D.jpg" alt="Smith Degamo" />
          <p>
            I build modern, responsive, and clean web applications.  
            From simple webpages to complex CRUD systems — I turn ideas into code.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary">Explore Projects</Link>
            <Link to="/contact" className="btn outline">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-projects">
        <h2>Recent Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>CPU SCHEDULING ALGORITHM</h3>
            <p>Brief description of project one.</p>
          </div>
          <div className="project-card">
            <h3>EB BASED CRUD PROJECT</h3>
            <p>Brief description of project two.</p>
          </div>
          <div className="project-card">
            <h3>UTOMATIC WHITEBOARD ERASER</h3>
            <p>Brief description of project three.</p>
          </div> <div className="project-card">
            <h3>CPU SCHEDULING ALGORITHM</h3>
            <p>Brief description of project one.</p>
          </div> <div className="project-card">
            <h3>CPU SCHEDULING ALGORITHM</h3>
            <p>Brief description of project one.</p>
          </div> <div className="project-card">
            <h3>CPU SCHEDULING ALGORITHM</h3>
            <p>Brief description of project one.</p>
          </div>
        </div>
        <Link to="/projects" className="btn secondary">View All Projects</Link>
      </section>
    </div>
  );
}
