import  { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

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
              <FaEnvelope size={28} />
            </div>
            <div className="card-body">
              <h3>Email</h3>
              <a href={`mailto:${EMAIL}`} className="card-link">{EMAIL}</a>
            </div>
          </article>

          {/* PHONE CARD */}
          <article className="card">
            <div className="card-icon">
              <FaPhone size={28} />
            </div>
            <div className="card-body">
              <h3>Phone</h3>
              <a href={`tel:${PHONE}`} className="card-link">{PHONE}</a>
            </div>
          </article>

          {/* CONNECT CARD */}
          <article className="card">
            <div className="card-icon">
              <FaUser size={28} />
            </div>
            <div className="card-body">
              <h3>Connect with me</h3>
              <div className="social-links">
                <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="social-item"><FaGithub size={24} /></a>
                <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="social-item"><FaLinkedin size={24} /></a>
                <a href={SOCIALS.twitter} target="_blank" rel="noreferrer" className="social-item"><FaTwitter size={24} /></a>
                <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" className="social-item"><FaFacebook size={24} /></a>
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
