interface ContactSectionProps {}

export default function ContactSection({}: ContactSectionProps) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm currently available for freelance work and open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@example.com" className="contact-link">
              <span>📧</span>
              <span>hello@example.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
