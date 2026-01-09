import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Business Credit Intelligence
            <span className="hero-subtitle">Powered by AI</span>
          </h1>
          <p className="hero-description">
            LUMIQ AI partners with Santander to deliver cutting-edge credit intelligence solutions
            that help businesses make smarter, faster lending decisions with unprecedented accuracy.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Request a Demo</Link>
            <Link to="/features" className="btn btn-secondary">Explore Features</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Prediction Accuracy</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">60%</div>
            <div className="stat-label">Faster Processing</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">$2.5M+</div>
            <div className="stat-label">Risk Prevented</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Real-Time Analysis</div>
          </div>
        </div>
      </section>

      <section className="features-preview">
        <div className="section-container">
          <h2 className="section-title">Why Choose LUMIQ AI × Santander?</h2>
          <p className="section-description">
            Our partnership combines Santander's financial expertise with LUMIQ AI's
            advanced machine learning algorithms to deliver unparalleled credit intelligence.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Advanced Analytics</h3>
              <p className="feature-text">
                Leverage AI-powered analytics to assess creditworthiness with greater
                precision than traditional methods.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Real-Time Decisions</h3>
              <p className="feature-text">
                Process credit applications in seconds, not days, with automated
                intelligent decision-making.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Risk Mitigation</h3>
              <p className="feature-text">
                Identify potential defaults and fraud before they happen with
                predictive risk models.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Custom Solutions</h3>
              <p className="feature-text">
                Tailored credit intelligence solutions designed for your specific
                business needs and risk appetite.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Portfolio Insights</h3>
              <p className="feature-text">
                Monitor and optimize your entire credit portfolio with comprehensive
                analytics and reporting.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Seamless Integration</h3>
              <p className="feature-text">
                Easy API integration with your existing systems for immediate
                deployment and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3 className="step-title">Data Integration</h3>
              <p className="step-text">
                Connect your existing data sources through our secure API for seamless integration.
              </p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3 className="step-title">AI Analysis</h3>
              <p className="step-text">
                Our advanced algorithms analyze thousands of data points in real-time to assess credit risk.
              </p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3 className="step-title">Intelligent Decisions</h3>
              <p className="step-text">
                Receive instant, actionable credit decisions backed by comprehensive risk analysis.
              </p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3 className="step-title">Continuous Learning</h3>
              <p className="step-text">
                The system continuously improves its accuracy based on outcomes and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Credit Decisions?</h2>
          <p className="cta-description">
            Join leading financial institutions leveraging LUMIQ AI's credit intelligence platform.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">Schedule a Demo</Link>
        </div>
      </section>
    </div>
  )
}
