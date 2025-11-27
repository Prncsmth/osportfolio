import React from "react";
import "./Socials.css";

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
          <h3>Facebook</h3>
          <p>smithdegamox2</p>
        </a>

        <a
          href="https://github.com/Prncsmth"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <h3>GitHub</h3>
          <p>Prncsmth</p>
        </a>

        <a
          href="https://www.instagram.com/swishsmith_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <h3>Instagram</h3>
          <p>@swishsmith_</p>
        </a>

        <a
          href="https://www.linkedin.com/in/smith-degamo-384a3b392/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <h3>LinkedIn</h3>
          <p>Smith Degamo</p>
        </a>

      </div>
    </div>
  );
}
