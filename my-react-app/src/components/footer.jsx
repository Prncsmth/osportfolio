import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand & Location */}
        <div className="footer-col">
          <h4>SmithDegamo</h4>      
 <p><svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="footer-icon"
>
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
  <circle cx="12" cy="10" r="3"/>
</svg>Cordova, Cebu, Philippines</p>
        </div>
        <h4></h4>
        {/* Pages */}
        <div className="footer-col">
          <h4>Pages</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/socials">Socials</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p className="footer-contact">
            {/* Phone SVG */}
            <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
            </svg>
            <span>:+63 9542277125</span>
          </p>
          <p className="footer-contact">
            {/* Email SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <span><a href="mailto:smithdegamox2@gmail.com">:smithdegamox2@gmail.com</a></span>
          </p>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <h4>Social</h4>
          <div className="social-links">
            <a href="https://github.com/Prncsmth" target="_blank" rel="noreferrer">
              <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.011-1.244-.017-2.255-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.624-5.476 5.921.43.372.814 1.102.814 2.222 0 1.604-.015 2.898-.015 3.293 0 .322.216.697.825.579C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/smith-degamo-384a3b392/" target="_blank" rel="noreferrer">
              <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.6V24h-5V15.1c0-2.1-.04-4.8-3-4.8-3 0-3.5 2.4-3.5 4.6V24h-5V8z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/swishsmith_/" target="_blank" rel="noreferrer">
              <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.96.24 2.42.403a4.92 4.92 0 011.78 1.04 4.92 4.92 0 011.04 1.78c.163.46.349 1.25.403 2.42.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.42a4.92 4.92 0 01-1.04 1.78 4.92 4.92 0 01-1.78 1.04c-.46.163-1.25.349-2.42.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.42-.403a4.92 4.92 0 01-1.78-1.04 4.92 4.92 0 01-1.04-1.78c-.163-.46-.349-1.25-.403-2.42C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.42a4.92 4.92 0 011.04-1.78 4.92 4.92 0 011.78-1.04c.46-.163 1.25-.349 2.42-.403C8.416 2.212 8.8 2.2 12 2.2zM12 0C8.736 0 8.332.012 7.052.07 5.768.128 4.842.308 4.042.6a6.918 6.918 0 00-2.5 1.64A6.918 6.918 0 00.6 4.742c-.292.8-.472 1.726-.53 3.01C.012 8.668 0 9.072 0 12c0 2.928.012 3.332.07 4.612.058 1.284.238 2.21.53 3.01a6.918 6.918 0 001.64 2.5 6.918 6.918 0 002.5 1.64c.8.292 1.726.472 3.01.53C8.668 23.988 9.072 24 12 24s3.332-.012 4.612-.07c1.284-.058 2.21-.238 3.01-.53a6.918 6.918 0 002.5-1.64 6.918 6.918 0 001.64-2.5c.292-.8.472-1.726.53-3.01.058-1.28.07-1.684.07-4.612s-.012-3.332-.07-4.612c-.058-1.284-.238-2.21-.53-3.01a6.918 6.918 0 00-1.64-2.5 6.918 6.918 0 00-2.5-1.64c-.8-.292-1.726-.472-3.01-.53C15.332.012 14.928 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/smithdegamox2/" target="_blank" rel="noreferrer">
              <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7.05A10 10 0 0022 12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SmithDegamo. All rights reserved.</p>
      </div>
    </footer>
  );
}
