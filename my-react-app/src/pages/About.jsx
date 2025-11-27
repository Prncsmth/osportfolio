  import React from "react";
  import "./About.css";

  export default function About() {
    return (
      <div className="about-page">

        {/* MAIN CONTENT */}
        <section className="about-wrapper">
          <div className="about-left">
            <h1>About Me</h1>
            <p>
              I'm <b>Smith Degamo</b>, a BSIT student passionate about building fast,
              clean, and modern web applications.  
             <br></br> I focus on <b>frontend development, UI/UX design</b>, and creating digital
              experiences that are simple, smooth, and user-centered.
            </p>

            <p>
              I love working with technologies like <b>React, JavaScript, PHP, and MySQL</b>.  
             <br></br> I enjoy solving problems, building tools, and creating interfaces that feel
              natural and intuitive for users.
            </p>

            <p>
              Outside coding, I'm always learning new frameworks, exploring good design
             <br></br> practices, or building small projects to improve my skills.
            </p>
          </div>

          <div className="about-right">
            <img src="/s.jpg" alt="profile" />
          </div>
        </section>
      </div>
    );
  }
