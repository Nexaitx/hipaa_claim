import '../styles/Testimonials.css';

const testimonials = [
  {
    text: "HIPAA Claims transformed our billing operations. We saw a 35% increase in collections within the first three months. Their team is professional, responsive, and truly understands medical billing.",
    name: 'Dr. Sarah Mitchell',
    role: 'Cardiology Practice Owner',
    initials: 'SM',
  },
  {
    text: "Switching to HIPAA Claims was the best decision for our practice. Denial rates dropped dramatically and our revenue cycle is now running smoother than ever. Highly recommended!",
    name: 'Dr. James Rodriguez',
    role: 'Orthopedic Surgeon',
    initials: 'JR',
  },
  {
    text: "The credentialing team at HIPAA Claims handled everything seamlessly. We were enrolled with all major payers within weeks. Their attention to detail is exceptional.",
    name: 'Dr. Emily Chen',
    role: 'Family Practice',
    initials: 'EC',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section testimonials-section">
      <div className="containers">
        <div className="section-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by healthcare providers across the nation for reliable, compliant billing solutions.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-quote">"</div>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;