import { Link } from 'react-router-dom';
import '../styles/CTA.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Increase Your Revenue?</h2>
          <p>
            Get a free billing audit and discover how much revenue your practice is leaving on the table.
            No obligations, no hidden fees.
          </p>
          <Link to="/contact" className="btn btn-cta">Get Your Free Audit Today →</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;