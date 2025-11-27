import  { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", message: "" });
  }

  // === YOUR PERSONAL INFO (replace placeholders) ===
  const EMAIL = "smithdegamox@gmail.com";
  const PHONE = "+639542277125";
  const SOCIALS = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    facebook: "https://facebook.com/yourusername",
  };
 

  return (
    <div className="contact-wrapper">

      {/* LEFT SIDE TEXT + INFO CARDS */}
      <div className="contact-left">
        <h1>Let's Connect!</h1>
        <p>
          just want to say hello?
          <br></br>Drop a message and I’ll get back to you.
        </p>

        <div className="contact-cards">

          {/* EMAIL CARD */}
          <article className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="1.5">
                <path d="M3 6.5h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11z" />
                <path d="M21 6.5L12 13 3 6.5" />
              </svg>
            </div>
            <div className="card-body">
              <h3>Email</h3>
              <a href={`mailto:${EMAIL}`} className="card-link">{EMAIL}</a>
            </div>
          </article>

          {/* PHONE CARD */}
          <article className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.08.73 3.05a2 2 0 0 1-.45 2.11L8.91 10.09a14.4 14.4 0 0 0 6 6l1.21-1.21a2 2 0 0 1 2.11-.45c.97.36 2 .61 3.05.73A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="card-body">
              <h3>Phone</h3>
              <a href={`tel:${PHONE}`} className="card-link">{PHONE}</a>
            </div>
          </article>

          {/* CONNECT CARD */}
          <article className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="1.5">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3z" />
                <path d="M6 20v-2a4 4 0 0 1 4-4h4" />
                <path d="M10 8v.01" />
              </svg>
            </div>
            <div className="card-body">
              <h3>Connect with me</h3>
              <div className="social-links">
                <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="social-item">GitHub</a>
                <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="social-item">LinkedIn</a>
                <a href={SOCIALS.twitter} target="_blank" rel="noreferrer" className="social-item">Twitter</a>
                <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" className="social-item">Facebook</a>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="contact-btn" type="submit">Send Message</button>

        </form>
      </div>
    </div>
  );
}
