import { BarChart, DollarSign, FileSearch, Send, UserCheck } from 'lucide-react';
import '../styles/Process.css';

const steps = [
  {
    icon: UserCheck,
    stp: "01",
    title: "Patient Registration",
    description: "We verify patient demographics, insurance eligibility, and pre-authorization requirements.",
  },
  {
    icon: FileSearch,
    stp: "02",
    title: "Medical Coding",
    description: "Expert coders assign accurate CPT, ICD-10, and HCPCS codes to all procedures and diagnoses.",
  },
  {
    icon: Send,
    stp: "03",
    title: "Claims Submission",
    description: "Clean claims are submitted electronically to payers with thorough scrubbing and validation.",
  },
  {
    icon: DollarSign,
    stp: "04",
    title: "Payment Posting",
    description: "Payments are posted accurately with EOB/ERA reconciliation and variance identification.",
  },
  {
    icon: BarChart,
    stp: "05",
    title: "Denial Management",
    description: "Denied claims are analyzed, corrected, and resubmitted promptly to maximize recovery.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section process-section">
      <div className="containers">
        <div className="section-header">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A streamlined, transparent process that ensures maximum revenue recovery at every step.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              {/* <div className="process-number">{step.number}</div> */}
                <div className="icon-box">
                <step.icon className="icon" />
              </div>

              <span className="step">STEP {step.stp}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
               {index < steps.length - 1 && (
                <div className="connector-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;