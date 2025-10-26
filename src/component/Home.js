import React from "react";
import "./Home.css";

function Home() {
  const featuresData = [
    { icon: "🚀", title: "Fast Performance", desc: "Lightning-fast load times and smooth interactions." },
    { icon: "🔒", title: "Secure Platform", desc: "Advanced security to protect your data and privacy." },
    { icon: "⚡", title: "Easy to Use", desc: "Intuitive design for both beginners and advanced users." },
    { icon: "🎨", title: "Customizable", desc: "Tailor the platform to match your workflow and preferences." },
  ];

  return (
    <div className="home-page">
    
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-subtitle">Complete IT Solution Provider Since 2025</h2>
          <h1 className="hero-title">Transform Your Ideas Into Digital Reality</h1>
          <p className="hero-description">
            Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
            we bring innovation and excellence to every project with our expert team of developers.
          </p>
          <div className="simple-buttons">
            <button className="simple-btn primary">Get Started</button>
            <button className="simple-btn secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="section-heading">What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>More Than 100 Projects</p>
            <span>Custom websites and web applications</span>
          </div>
          
          <div className="service-card">
            <h3>Mobile Apps</h3>
            <p>+40 Apps Delivered</p>
            <span>iOS & Android applications</span>
          </div>
          
          <div className="service-card">
            <h3>Fast Delivery</h3>
            <p>Always On Time</p>
            <span>Quick project turnaround</span>
          </div>
          
          <div className="service-card">
            <h3>AI Solutions</h3>
            <p>Innovative Technology</p>
            <span>Smart automation tools</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us" id="features">
        <div className="why-content">
          <h2 className="section-heading">Why Choose AppDost?</h2>
          <div className="why-grid">
            <div className="why-text">
              <p>We provide reliable IT solutions with focus on quality and customer satisfaction. Our team delivers projects that actually work for your business.</p>
              <ul className="simple-list">
                <li>Experienced developers</li>
                <li>On-time delivery</li>
                <li>Quality assurance</li>
                <li>Ongoing support</li>
              </ul>
            </div>
            <div className="why-features">
              {featuresData.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Home;