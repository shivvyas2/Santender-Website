import './Features.css'

export default function Features() {
  return (
    <div className="features-page">
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Platform Features</h1>
          <p className="page-hero-description">
            Discover the powerful capabilities that make LUMIQ AI × Santander the leading
            choice for business credit intelligence
          </p>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-content">
            <div className="feature-badge">Core Technology</div>
            <h2 className="feature-heading">AI-Powered Credit Analysis</h2>
            <p className="feature-description">
              Our proprietary machine learning models analyze over 10,000 data points per application,
              providing deeper insights than traditional credit scoring methods.
            </p>
            <ul className="feature-list">
              <li>Advanced neural network architecture</li>
              <li>Real-time data processing and analysis</li>
              <li>Continuous model training and improvement</li>
              <li>Multi-dimensional risk assessment</li>
              <li>Behavioral pattern recognition</li>
            </ul>
          </div>
          <div className="feature-visual">
            <div className="visual-box">
              <div className="visual-stat">10,000+</div>
              <div className="visual-label">Data Points Analyzed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section alt">
        <div className="feature-container">
          <div className="feature-visual">
            <div className="visual-box">
              <div className="visual-stat">&lt;3s</div>
              <div className="visual-label">Average Response Time</div>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-badge">Performance</div>
            <h2 className="feature-heading">Lightning-Fast Decisions</h2>
            <p className="feature-description">
              Process credit applications in under 3 seconds with our optimized infrastructure
              and parallel processing capabilities.
            </p>
            <ul className="feature-list">
              <li>Sub-second API response times</li>
              <li>Scalable cloud infrastructure</li>
              <li>High-availability architecture (99.99% uptime)</li>
              <li>Automated decision workflows</li>
              <li>Batch processing capabilities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-content">
            <div className="feature-badge">Risk Management</div>
            <h2 className="feature-heading">Predictive Risk Intelligence</h2>
            <p className="feature-description">
              Identify potential defaults and fraud before they occur with our advanced
              predictive models trained on millions of historical transactions.
            </p>
            <ul className="feature-list">
              <li>Early warning system for high-risk accounts</li>
              <li>Fraud detection algorithms</li>
              <li>Default probability scoring</li>
              <li>Portfolio stress testing</li>
              <li>Anomaly detection and alerting</li>
            </ul>
          </div>
          <div className="feature-visual">
            <div className="visual-box">
              <div className="visual-stat">98.5%</div>
              <div className="visual-label">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section alt">
        <div className="feature-container">
          <div className="feature-visual">
            <div className="visual-box">
              <div className="visual-stat">API</div>
              <div className="visual-label">Easy Integration</div>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-badge">Integration</div>
            <h2 className="feature-heading">Seamless API Integration</h2>
            <p className="feature-description">
              Deploy in hours, not months. Our RESTful API is designed for quick integration
              with comprehensive documentation and SDKs for popular languages.
            </p>
            <ul className="feature-list">
              <li>RESTful API with JSON responses</li>
              <li>SDKs for Python, Java, Node.js, and more</li>
              <li>Comprehensive API documentation</li>
              <li>Sandbox environment for testing</li>
              <li>Webhook support for async notifications</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-content">
            <div className="feature-badge">Analytics</div>
            <h2 className="feature-heading">Advanced Reporting Dashboard</h2>
            <p className="feature-description">
              Monitor your credit portfolio with real-time dashboards and customizable reports
              that provide actionable insights.
            </p>
            <ul className="feature-list">
              <li>Real-time portfolio monitoring</li>
              <li>Customizable KPI dashboards</li>
              <li>Trend analysis and forecasting</li>
              <li>Automated report generation</li>
              <li>Export to Excel, PDF, and other formats</li>
            </ul>
          </div>
          <div className="feature-visual">
            <div className="visual-box">
              <div className="visual-stat">24/7</div>
              <div className="visual-label">Real-Time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section alt">
        <div className="feature-container">
          <div className="feature-visual">
            <div className="visual-box">
              <div className="visual-stat">🔒</div>
              <div className="visual-label">Bank-Grade Security</div>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-badge">Security</div>
            <h2 className="feature-heading">Enterprise-Grade Security</h2>
            <p className="feature-description">
              Your data is protected with military-grade encryption and complies with all
              major financial regulations including GDPR, SOC 2, and PCI DSS.
            </p>
            <ul className="feature-list">
              <li>256-bit AES encryption at rest and in transit</li>
              <li>Multi-factor authentication</li>
              <li>Role-based access control</li>
              <li>Regular security audits and penetration testing</li>
              <li>GDPR, SOC 2, and PCI DSS compliant</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="section-container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-description">
            Built with industry-leading technologies for maximum reliability and performance
          </p>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-name">Machine Learning</div>
              <div className="tech-desc">TensorFlow, PyTorch, Scikit-learn</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Data Processing</div>
              <div className="tech-desc">Apache Spark, Kafka, Redis</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Cloud Infrastructure</div>
              <div className="tech-desc">AWS, Google Cloud, Kubernetes</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Security</div>
              <div className="tech-desc">OAuth 2.0, JWT, SSL/TLS</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
