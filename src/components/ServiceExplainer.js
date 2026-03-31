import '../styles/ServiceExplainer.css';

const explainerData = [
  {
    tag: 'End-to-End Solution',
    title: 'Complete Revenue Cycle Management',
    description: 'From patient registration to final payment posting, our comprehensive RCM platform handles every step of the billing cycle. We leverage intelligent automation and expert coders to ensure nothing falls through the cracks — maximizing your revenue while minimizing administrative burden.',
    features: ['Patient Demographics & Eligibility', 'Charge Capture & Coding', 'Claim Submission & Tracking', 'Payment Posting & Reconciliation'],
    metric: '40%',
    metricLabel: 'Reduction in A/R Days',
    align: 'left',
  },
  {
    tag: 'AI-Powered Accuracy',
    title: 'Intelligent Denial Prevention',
    description: 'Our advanced claim scrubbing engine analyzes every claim against thousands of payer-specific rules before submission. By catching errors proactively, we achieve an industry-leading first-pass acceptance rate — translating directly into faster payments and improved cash flow for your practice.',
    features: ['Automated Claim Scrubbing', 'Payer Rule Engine', 'Real-Time Eligibility Checks', 'Predictive Denial Analytics'],
    metric: '95%',
    metricLabel: 'First-Pass Clean Rate',
    align: 'right',
  },
  {
    tag: 'Transparent Reporting',
    title: 'Real-Time Financial Insights',
    description: 'Gain complete visibility into your practice\'s financial health with our intuitive analytics dashboard. Track KPIs, monitor claim status, identify trends, and make data-driven decisions — all from a single, beautifully designed interface that puts actionable insights at your fingertips.',
    features: ['Custom KPI Dashboards', 'Automated Monthly Reports', 'Trend Analysis & Forecasting', 'Payer Performance Tracking'],
    metric: '24/7',
    metricLabel: 'Dashboard Access',
    align: 'left',
  },
];

const ServiceExplainer = () => {
  return (
    <section className="section explainer-section">
      <div className="containers">
        <div className="section-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">A Smarter Approach to Medical Billing</h2>
          <p className="section-subtitle">
            We combine cutting-edge technology with deep industry expertise to deliver
            a premium billing experience that drives measurable results.
          </p>
        </div>

        <div className="explainer-blocks">
          {explainerData.map((item, index) => (
            <div className={`explainer-block ${item.align === 'right' ? 'explainer-block--reversed' : ''}`} key={index}>
              <div className="explainer-content">
                <span className="explainer-tag">{item.tag}</span>
                <h3 className="explainer-title">{item.title}</h3>
                <p className="explainer-description">{item.description}</p>
                <ul className="explainer-features">
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <span className="explainer-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="explainer-visual">
                <div className="explainer-metric-card">
                  <div className="explainer-metric-glow"></div>
                  <div className="explainer-metric-number">{item.metric}</div>
                  <div className="explainer-metric-label">{item.metricLabel}</div>
                  <div className="explainer-metric-bar">
                    <div className="explainer-metric-bar-fill" style={{ width: index === 0 ? '85%' : index === 1 ? '95%' : '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExplainer;