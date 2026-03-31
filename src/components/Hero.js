import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Medical billing professionals" width={1920} height={1080} />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">🛡️ HIPAA Compliant RCM Solutions</div>
          <h1 className="hero-title">
            Maximize Your <span>Revenue</span> With Expert Medical Billing
          </h1>
          <p className="hero-description">
            End-to-end Revenue Cycle Management services that reduce denials by up to 95%,
            accelerate payments, and let you focus on patient care. Trusted by 500+ healthcare providers nationwide.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Free Audit →</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">98%</div>
              <div className="hero-stat-label">Clean Claim Rate</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">30%</div>
              <div className="hero-stat-label">Revenue Increase</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Providers Trust Us</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <h3>Request Free Audit</h3>
            <p>Discover how much revenue you're leaving on the table</p>
            <div className="hero-form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="hero-form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="hero-form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="hero-form-group">
              <select defaultValue="">
                <option value="" disabled>Select Specialty</option>
                <option>Internal Medicine</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Dermatology</option>
                <option>Family Practice</option>
                <option>Other</option>
              </select>
            </div>
            <button className="btn btn-primary">Get My Free Audit →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;