import "./About.css";
import { FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Smithdegamo.pdf"; // Make sure this file exists in the public folder
    link.download = "Smithdegamo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open("/Smithdegamo.pdf", "_blank"); 
  };

  return (
    <div className="about-page">
      <section className="about-wrapper">
        <div className="about-card">

          {/* LEFT SIDE - ABOUT TEXT */}
          <div className="about-left">
            <h2 className="section-heading">About Me</h2>

            <p>
              a Web Developer in training, focused on building modern, responsive, and visually clean web applications.
              As a BSIT student at Cordova Public College, I’m developing my skills in front-end and back-end development,
              creating digital experiences that blend clean design with smooth functionality. My work reflects my goal to
              grow into a professional Web Developer capable of building reliable, user-centered systems.
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

            {/* BUTTONS */}
            <div className="resume-buttons">
              <button className="resume-btn" onClick={handleResumeDownload}>
                Download Resume
              </button>

              <button className="resume-btn" onClick={handleViewResume}>
                View Resume
              </button>
            </div>

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
          <h2 className="section-heading">TECH STACKS</h2>

          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
              <span>HTML5</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="tech-category">
            <h4>Backend</h4>
            <div className="tags">
              <span>MySQL</span>
              <span>Node.js</span>
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
          <h2 className="section-heading">EXPERIENCE</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Web Developer (Freelance)</h4>
                <p>2025 - Present</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Student Web Projects</h4>
                <p>2023-2024</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>First line of code 👶</h4>
                <p>2023</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
