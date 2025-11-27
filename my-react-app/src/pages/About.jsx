import "./About.css";

export default function About() {
  return (
    <div className="about-page" style={{background: "linear-gradient(135deg, #4b0082, #000000)"}}>
      <section className="about-wrapper">
        <div className="about-card">  
          {/* LEFT SIDE - ABOUT TEXT */}
          <div className="about-left">
            <h2 className="section-heading">🔍 About</h2>

            <p>
              Hi there, I'm <b>Smith Degamo</b>. I'm a Software Developer passionate about
              developing clean, high-performance applications that bridge web and mobile
              experiences.
            </p>

            <p>
              I specialize in crafting scalable, user-first solutions—from sleek marketing
              websites to dynamic custom systems. My focus is on <b>performance</b>,
              <b> accessibility</b>, and delivering seamless user experiences.
            </p>

            <p>
              With hands-on experience in frontend and backend projects, I’m rooted in
              efficiency, problem‑solving, and continuous learning. I collaborate with
              individuals and student teams to turn ideas into functional, polished
              products.
            </p>

            <p>
              Recently, I've been improving my skills in AI‑powered development,
              automation, and modern UI engineering.
            </p>

            <div className="info-grid">
              <div className="info-group">
                <h4>Socials</h4>
                <p>🔗 GitHub</p>
                <p>🐦 Twitter</p>
                <p>📘 Facebook</p>
              </div>

              <div className="info-group">
                <h4>Contact</h4>
                <p>smithdegamo@gmail.com</p>
                <p>+63 912 345 6789</p>
                <p>Cebu, Philippines</p>
              </div>
            </div>

            <button className="resume-btn">Download Resume</button>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="about-right">
            <div className="image-box">
              <img src="/s.jpg" alt="Smith Degamo" />
            </div>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="tech-section">
          <h2 className="section-heading">🛠 Tech Stacks</h2>

          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="tech-category">
            <h4>Backend</h4>
            <div className="tags">
              <span>PHP</span>
              <span>MySQL</span>
              <span>Node.js</span>
              <span>Express</span>
            </div>
          </div>

          <div className="tech-category">
            <h4>Tools / Others</h4>
            <div className="tags">
              <span>Git</span>
              <span>REST API</span>
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="experience-section">
          <h2 className="section-heading">📌 Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Web Developer (Freelance)</h4>
                <p>2023 - Present</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Student Web Projects</h4>
                <p>2022 - 2024</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>First line of code 👶</h4>
                <p>2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
