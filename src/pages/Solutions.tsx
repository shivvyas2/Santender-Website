import './Solutions.css'

export default function Solutions() {
  return (
    <div className="solutions-page">
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Business Solutions</h1>
          <p className="page-hero-description">
            Tailored credit intelligence solutions designed for your industry and business needs
          </p>
        </div>
      </section>

      <section className="solutions-intro">
        <div className="section-container">
          <h2 className="section-title">Industry-Specific Solutions</h2>
          <p className="section-description">
            Our platform adapts to the unique requirements of different industries,
            providing specialized credit intelligence for optimal results.
          </p>
        </div>
      </section>

      <section className="solution-detail">
        <div className="solution-container">
          <div className="solution-content">
            <h2 className="solution-title">Commercial Banking</h2>
            <p className="solution-description">
              Streamline business loan approvals with AI-powered credit assessment that evaluates
              company financials, industry trends, and market conditions in real-time.
            </p>
            <div className="solution-features">
              <div className="solution-feature">
                <div className="solution-feature-icon">💼</div>
                <div>
                  <h4>Business Credit Scoring</h4>
                  <p>Comprehensive analysis of business credit profiles and financial health</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">📊</div>
                <div>
                  <h4>Financial Statement Analysis</h4>
                  <p>Automated extraction and analysis of balance sheets, P&L, and cash flow</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">⚖️</div>
                <div>
                  <h4>Industry Benchmarking</h4>
                  <p>Compare applicants against industry standards and peer performance</p>
                </div>
              </div>
            </div>
            <div className="solution-stats">
              <div className="solution-stat">
                <div className="solution-stat-value">45%</div>
                <div className="solution-stat-label">Faster Approvals</div>
              </div>
              <div className="solution-stat">
                <div className="solution-stat-value">30%</div>
                <div className="solution-stat-label">Lower Default Rates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-detail alt">
        <div className="solution-container">
          <div className="solution-content">
            <h2 className="solution-title">Fintech & Digital Lending</h2>
            <p className="solution-description">
              Power your digital lending platform with instant credit decisions that maintain
              accuracy while delivering the speed your customers expect.
            </p>
            <div className="solution-features">
              <div className="solution-feature">
                <div className="solution-feature-icon">⚡</div>
                <div>
                  <h4>Instant Decisioning</h4>
                  <p>Sub-second credit decisions for seamless user experience</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">🔄</div>
                <div>
                  <h4>Alternative Data Integration</h4>
                  <p>Leverage non-traditional data sources for thin-file applicants</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">📱</div>
                <div>
                  <h4>Mobile-First API</h4>
                  <p>Optimized for mobile applications with lightweight responses</p>
                </div>
              </div>
            </div>
            <div className="solution-stats">
              <div className="solution-stat">
                <div className="solution-stat-value">85%</div>
                <div className="solution-stat-label">Application Completion</div>
              </div>
              <div className="solution-stat">
                <div className="solution-stat-value">2.5x</div>
                <div className="solution-stat-label">Conversion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-detail">
        <div className="solution-container">
          <div className="solution-content">
            <h2 className="solution-title">Equipment & Asset Finance</h2>
            <p className="solution-description">
              Specialized credit models for equipment financing that consider asset value,
              depreciation, and industry-specific risk factors.
            </p>
            <div className="solution-features">
              <div className="solution-feature">
                <div className="solution-feature-icon">🚜</div>
                <div>
                  <h4>Asset Valuation</h4>
                  <p>Real-time asset pricing and depreciation modeling</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">📈</div>
                <div>
                  <h4>Residual Value Analysis</h4>
                  <p>Predict future asset values for lease-end scenarios</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">🎯</div>
                <div>
                  <h4>Equipment-Specific Models</h4>
                  <p>Custom risk models for different equipment types and industries</p>
                </div>
              </div>
            </div>
            <div className="solution-stats">
              <div className="solution-stat">
                <div className="solution-stat-value">40%</div>
                <div className="solution-stat-label">Portfolio Growth</div>
              </div>
              <div className="solution-stat">
                <div className="solution-stat-value">25%</div>
                <div className="solution-stat-label">Risk Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-detail alt">
        <div className="solution-container">
          <div className="solution-content">
            <h2 className="solution-title">Trade & Supply Chain Finance</h2>
            <p className="solution-description">
              Assess credit risk in complex trade relationships with multi-party transaction
              analysis and real-time supply chain monitoring.
            </p>
            <div className="solution-features">
              <div className="solution-feature">
                <div className="solution-feature-icon">🌍</div>
                <div>
                  <h4>Cross-Border Risk Assessment</h4>
                  <p>Evaluate country risk, currency risk, and international trade factors</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">🔗</div>
                <div>
                  <h4>Supply Chain Visibility</h4>
                  <p>Monitor supplier and buyer relationships for early warning signals</p>
                </div>
              </div>
              <div className="solution-feature">
                <div className="solution-feature-icon">💱</div>
                <div>
                  <h4>Transaction Monitoring</h4>
                  <p>Real-time analysis of trade flows and payment patterns</p>
                </div>
              </div>
            </div>
            <div className="solution-stats">
              <div className="solution-stat">
                <div className="solution-stat-value">50%</div>
                <div className="solution-stat-label">Fraud Detection</div>
              </div>
              <div className="solution-stat">
                <div className="solution-stat-value">35%</div>
                <div className="solution-stat-label">Faster Processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="section-container">
          <h2 className="section-title">Common Use Cases</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3 className="use-case-title">Credit Underwriting Automation</h3>
              <p className="use-case-text">
                Automate manual underwriting processes and reduce decision time from days to minutes
                while maintaining or improving accuracy.
              </p>
            </div>
            <div className="use-case-card">
              <h3 className="use-case-title">Portfolio Risk Management</h3>
              <p className="use-case-text">
                Monitor your entire loan portfolio for early warning signals and proactively
                manage exposure to high-risk accounts.
              </p>
            </div>
            <div className="use-case-card">
              <h3 className="use-case-title">Fraud Prevention</h3>
              <p className="use-case-text">
                Detect suspicious patterns and prevent fraudulent applications before they
                impact your bottom line.
              </p>
            </div>
            <div className="use-case-card">
              <h3 className="use-case-title">Credit Limit Optimization</h3>
              <p className="use-case-text">
                Dynamically adjust credit limits based on real-time risk assessment to maximize
                revenue while controlling risk.
              </p>
            </div>
            <div className="use-case-card">
              <h3 className="use-case-title">Collections Prioritization</h3>
              <p className="use-case-text">
                Identify accounts most likely to respond to collections efforts and optimize
                resource allocation.
              </p>
            </div>
            <div className="use-case-card">
              <h3 className="use-case-title">Customer Acquisition</h3>
              <p className="use-case-text">
                Expand your customer base safely by identifying creditworthy applicants that
                traditional models might reject.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-cta">
        <div className="cta-container">
          <h2 className="cta-title">Find the Right Solution for Your Business</h2>
          <p className="cta-description">
            Schedule a consultation to discuss your specific needs and see how LUMIQ AI × Santander
            can transform your credit decision process.
          </p>
          <a href="/contact" className="btn btn-primary btn-large">Talk to Our Team</a>
        </div>
      </section>
    </div>
  )
}
