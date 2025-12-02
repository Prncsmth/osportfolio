import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="nav-logo">
          PORTFOLIO
        </Link>

        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/socials" onClick={() => setOpen(false)}>Socials</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>

      </div>
    </nav>
  );
}
