import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import aboutTeam from '../assets/about-team.jpg';
import '../styles/About.css';

const values = [
  { icon: '✓', text: 'Integrity & Transparency' },
  { icon: '✓', text: 'HIPAA Compliance First' },
  { icon: '✓', text: 'Client-Centric Approach' },
  { icon: '✓', text: 'Continuous Innovation' },
  { icon: '✓', text: 'Accuracy & Precision' },
  { icon: '✓', text: 'Accountability' },
];

const About = () => {
  return (
    <>
      <Header />
      <PageBanner
        title="About HIPAA Claims"
        subtitle="Dedicated to transforming healthcare revenue cycles with expertise, technology, and compliance."
        currentPage="About Us"
      />

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-content">
              <h2>Your Trusted RCM Partner Since 2009</h2>
              <p>
                HIPAA Claims was founded with a singular mission: to empower healthcare providers
                with world-class revenue cycle management services that maximize collections while
                ensuring complete regulatory compliance.
              </p>
              <p>
                With over 15 years of experience serving 500+ healthcare organizations across 40+
                specialties, we've recovered over $50 million in revenue for our clients. Our team
                of certified medical billers and coders combines deep industry expertise with
                cutting-edge technology to deliver results that exceed expectations.
              </p>
              <p>
                We understand the challenges healthcare providers face — from complex payer
                requirements to evolving regulations. That's why we handle every aspect of
                your revenue cycle, so you can focus on what matters most: patient care.
              </p>
            </div>
            <div className="about-intro-image">
              <img src={aboutTeam} alt="HIPAA Claims team" loading="lazy" width={1280} height={720} />
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Foundation</div>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide healthcare organizations with transparent, efficient, and compliant
                revenue cycle management solutions that maximize financial performance and minimize
                administrative burden.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted name in medical billing and RCM, recognized for innovation,
                integrity, and consistently delivering measurable results for healthcare providers
                of all sizes.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Built on a foundation of compliance, accuracy, and client-first service, our core
                values drive every interaction and decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What Drives Us</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-list">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <span className="icon">{v.icon}</span>
                <span>{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default About;