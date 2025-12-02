import "./Socials.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="socials-page">
      <h1 className="socials-title">Connect With Me</h1>
      <p className="socials-subtext">You can find me on these platforms.</p>

      <div className="socials-grid">

        <a
          href="https://www.facebook.com/smithdegamox2/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-icon"><FaFacebook /></div>
          <p>smithdegamox2</p>
        </a>

        <a
          href="https://github.com/Prncsmth"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-icon"><FaGithub /></div>
          <p>Prncsmth</p>
        </a>

        <a
          href="https://www.instagram.com/swishsmith_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-icon"><FaInstagram /></div>
          <p>@swishsmith_</p>
        </a>

        <a
          href="https://www.linkedin.com/in/smith-degamo-384a3b392/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-icon"><FaLinkedin /></div>
          <p>Smith Degamo</p>
        </a>

      </div>
    </div>
  );
}
