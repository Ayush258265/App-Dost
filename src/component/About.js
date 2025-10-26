import React from "react";
import "./About.css";

function About() {
  const teamMembers = [
    {
      name: "Aarav Sharma",
      role: "Founder & CEO",
      description: "10+ years in software development and business strategy"
    },
    {
      name: "Priya Patel",
      role: "CTO", 
      description: "Expert in cloud architecture and scalable solutions"
    },
    {
      name: "Rohan Kumar",
      role: "Lead Developer",
      description: "Full-stack developer with mobile app specialization"
    },
    {
      name: "Neha Gupta",
      role: "UI/UX Designer",
      description: "Creating intuitive and beautiful user experiences"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About AppDost</h1>
          <p className="subtitle">Your Trusted Technology Partner Since 2020</p>
          <p>
            We transform ideas into powerful digital solutions. With 5 years of experience 
            and 100+ successful projects, we help businesses grow through innovative technology.
          </p>
        </div>
      </section>

      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                AppDost started with a simple mission: to make quality software development accessible 
                to businesses of all sizes. What began as a small team has grown into a trusted technology 
                partner for companies across India.
              </p>
              <p>
                We believe technology should solve real business problems. We focus on understanding 
                your challenges and creating solutions that actually work for your business.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="number">100+</span>
                  <span>Projects</span>
                </div>
                <div className="stat">
                  <span className="number">50+</span>
                  <span>Clients</span>
                </div>
                <div className="stat">
                  <span className="number">5+</span>
                  <span>Years</span>
                </div>
                <div className="stat">
                  <span className="number">3</span>
                  <span>Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="section-desc">Passionate professionals dedicated to delivering exceptional results</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="avatar">
                  {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Here's how you can reach us:</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="contact-item">
                <strong>📞 Phone</strong>
                <p>+91 98765XXXXX</p>
                <p>+91 98765XXXXX</p>
              </div>
              
              <div className="contact-item">
                <strong>📧 Email</strong>
                <p>hello@appdost.com</p>
                <p>support@appdost.com</p>
              </div>
              
              <div className="contact-item">
                <strong>📍 Address</strong>
                <p>123 Tech Park, Sector 25</p>
                <p>Noida, Uttar Pradesh - 201301</p>
              </div>
              
              <div className="contact-item">
                <strong>🕒 Business Hours</strong>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;