import "./About.css";
import { FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure to place your resume.pdf in the public folder
    link.download = "Smith_Degamo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="about-page">
      <section className="about-wrapper">
        <div className="about-card">  
          {/* LEFT SIDE - ABOUT TEXT */}
          <div className="about-left">
            <h2 className="section-heading">About Me</h2>

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
                <p><FaGithub /> : Prncsmth</p>
                <p><FaInstagram /> : swishsmith_</p>
                <p><FaFacebook /> : Smith Degamo</p>
              </div>

              <div className="info-group">
                <h4>Contact</h4>
                <p><FaEnvelope /> : smithdegamo@gmail.com</p>
                <p><FaPhone /> : +63 912 345 6789</p>
                <p><FaMapMarkerAlt /> : Cebu, Philippines</p>
              </div>
            </div>

            <button className="resume-btn" onClick={handleResumeDownload}>Download Resume</button>
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

        {/* SKILLS SECTION */}
        <div className="skills-section">
          <h2 className="section-heading">💡 Core Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Problem Solving</h4>
              <p>Analytical thinking and efficient debugging to tackle complex challenges.</p>
              <div className="skill-level">90%</div>
            </div>

            <div className="skill-card">
              <h4>Web Development</h4>
              <p>Full-stack development with modern frameworks and best practices.</p>
              <div className="skill-level">85%</div>
            </div>

            <div className="skill-card">
              <h4>UI/UX Design</h4>
              <p>Creating responsive, accessible, and visually appealing interfaces.</p>
              <div className="skill-level">80%</div>
            </div>

            <div className="skill-card">
              <h4>Database Design</h4>
              <p>Designing efficient database structures and optimizing queries.</p>
              <div className="skill-level">82%</div>
            </div>

            <div className="skill-card">
              <h4>Team Collaboration</h4>
              <p>Working effectively with teams and communicating technical concepts.</p>
              <div className="skill-level">88%</div>
            </div>

            <div className="skill-card">
              <h4>API Development</h4>
              <p>Building robust and scalable REST APIs with proper documentation.</p>
              <div className="skill-level">84%</div>
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
