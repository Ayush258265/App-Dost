import React from "react";
import "./Service.css";

function Service() {
  const servicesData = [
    {
      title: "Web Development",
      description:
        "We build websites that work well and look good. Whether you need a simple business site or a complex web application, we've got you covered.",
      items: ["Responsive Websites", "E-commerce Solutions", "Web Applications"]
    },
    {
      title: "Mobile Apps",
      description:
        "Custom mobile apps for iOS and Android. We create apps that are easy to use and help your business connect with customers.",
      items: ["Native & Hybrid Apps", "App Design & Development", "App Maintenance & Support"]
    },
    {
      title: "Business Software",
      description:
        "Software solutions made specifically for your business needs. We help automate processes and make your work easier.",
      items: ["Custom ERP Solutions", "Inventory Management", "Business Automation"]
    },
    {
      title: "IT Consulting",
      description:
        "Not sure what you need? We'll help you figure out the best technology solutions for your business.",
      items: ["Technology Planning", "System Architecture", "Digital Transformation"]
    },
    {
      title: "Custom Solutions",
      description:
        "Unique problems need unique solutions. We build custom software tailored to your specific requirements.",
      items: ["Tailored Software", "API Integration", "Custom Features"]
    },
    {
      title: "Support & Maintenance",
      description:
        "We provide ongoing support to keep your systems running smoothly and up to date.",
      items: ["24/7 Technical Support", "Regular Updates", "Bug Fixing"]
    }
  ];

  return (
    <div className="service-page">
      <header className="service-header">
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">
            AppDost is your trusted technology partner across India. We create custom IT solutions that help businesses work better and grow faster.
          </p>
        </div>
      </header>

      <main className="services-content">
        <div className="container services-wrapper">
          <h2 className="section-title">What We Do</h2>

          <div className="services-grid">
            {servicesData.map((s, i) => (
              <article className="service-card" key={i}>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
                <ul className="service-list" aria-label={`${s.title} features`}>
                  {s.items.map((it, idx) => (
                    <li key={idx} className="service-list-item">{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </main>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's talk about your project and how we can help you achieve your goals.</p>
          <button className="contact-btn">Get in Touch</button>
        </div>
      </section>
    </div>
  );
}

export default Service;
