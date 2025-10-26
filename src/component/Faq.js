import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  const faqData = [
    {
      question: "What services does AppDost provide?",
      answer:
        "We provide comprehensive IT solutions including web development, mobile apps, business software, IT consulting, and custom software development tailored to your business needs.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary based on complexity. Simple websites take 2-4 weeks, mobile apps 4-8 weeks, and enterprise solutions 8-16 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages including bug fixes, updates, and technical support to ensure your systems run smoothly.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with modern technologies including React, Node.js, Python, PHP, iOS Swift, Android Kotlin, and various databases and cloud platforms.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We can collaborate with your in-house team, provide additional resources, or work independently based on your requirements.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team models. We'll recommend the best approach during our discussion.",
    },
    {
      question: "Do you sign NDAs and confidentiality agreements?",
      answer:
        "Yes, we take client confidentiality seriously and are happy to sign NDAs to protect your intellectual property and business ideas.",
    },
    {
      question: "How do we get started with a project?",
      answer:
        "Contact us for a free consultation. We'll discuss your requirements, provide initial recommendations, and create a detailed project proposal.",
    },
  ];

  return (
    <div className="faq-page">
      <section className="faq-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our services and process.
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-wrapper">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
