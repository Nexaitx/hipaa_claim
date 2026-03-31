import '../styles/Stats.css';
import doc1 from "../assets/smiling-physician.webp";
import doc2 from "../assets/male-doctor.webp";
const stats = [
  { number: '500+', label: 'Healthcare Providers' },
  { number: '98%', label: 'Clean Claim Rate' },
  { number: '$50M+', label: 'Revenue Recovered' },
  { number: '15+', label: 'Years Experience' },
];

const StatsSection = () => {
  return (
    <>
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* ===== BLUE SECTION ===== */}
      <section className="specialty-section">
        <div className="containersep">

          <div className="left">
            <img src={doc1} alt="doctor" />
            <img src={doc2} alt="doctor" />
          </div>

          <div className="right">
            <p className="tag">Specialities we serve</p>
            <div className="underline"></div>

            <h2>Expertise Across 25+ Specialties</h2>

            <p className="desc">
              At Hipaa-Claims RCM Solutions, we’re proud to support over 25 medical specialties with
              customized billing services. We design our approach to meet the unique challenges of each field.
            </p>

            <ul>
              <li><span>✔</span> <b>Urgent Care :</b> We get your urgent care claims processed swiftly. That means you get paid faster and avoid frustrating delays.</li>
              <li><span>✔</span> <b>Cardiology :</b> From intricate procedures to routine visits, we make sure your cardiology claims are spot-on and optimized for the best possible reimbursement.</li>
              <li><span>✔</span> <b>Podiatry :</b> Focus entirely on your patients' foot care. We'll take care of the precise coding and billing, keeping your revenue cycle strong and steady.</li>
              <li><span>✔</span> <b>Gastroenterology :</b> We know GI claims can be complex. Our goal is to help you receive timely payments with far fewer claim headaches.</li>
              <li><span>✔</span> <b>Endocrinology :</b> Our team handles all the billing specifics, so you can concentrate fully on patient care without a single worry about claim submissions.</li>
            </ul>
          </div>

        </div>
      </section>
      </>
  );
};

export default StatsSection;