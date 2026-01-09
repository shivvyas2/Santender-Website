import { useState, FormEvent } from 'react'
import './SantanderPartner.css'

export default function SantanderPartner() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    team: [] as string[]
  })

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleTeamChange = (team: string) => {
    const teams = formData.team.includes(team)
      ? formData.team.filter(t => t !== team)
      : [...formData.team, team]
    setFormData({ ...formData, team: teams })
  }

  return (
    <div className="santander-partner">
      <section className="sp-hero">
        <div className="sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-hero-label">LumiqAI by FuteurCredX × Santander</div>
            <h1 className="sp-hero-title">
              Stop Credit Shoppers From Leaving Santander
            </h1>
            <p className="sp-hero-subtitle">
              LumiqAI embeds consumer + business credit readiness directly inside Santander's apps—turning
              "research behavior" into pre-approved offers and retained relationships.
            </p>
            <ul className="sp-hero-bullets">
              <li>In-app credit monitoring experience (consumer + business)</li>
              <li>Eligibility + pre-approval routing using deposits + bureau + registry signals</li>
              <li>Bank-grade security + no-core-replacement integration</li>
            </ul>
            <div className="sp-hero-ctas">
              <a href="#cta-section" className="sp-btn sp-btn-primary">Request Santander Leakage Audit</a>
              <a href="#solution" className="sp-btn sp-btn-secondary">See the In-App Mockup</a>
            </div>
          </div>
          <div className="sp-hero-visual">
            <div className="sp-placeholder sp-placeholder-hero">
              <span>WITH LumiqAI mockup frame<br/>In-app credit readiness module</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-problem">
        <div className="sp-container">
          <h2 className="sp-section-title">
            Santander is educating customers about credit—then losing them at the moment of intent
          </h2>
          <div className="sp-problem-proof">
            <div className="sp-proof-card">
              <div className="sp-proof-number">1</div>
              <div className="sp-proof-content">
                <h3>Santander Consumer's Learning Center</h3>
                <p>
                  Tells users how credit scores determine loan access and where to get scores (CFPB/FTC/myFICO).
                  This builds trust and positions you as a helpful partner.
                </p>
              </div>
            </div>
            <div className="sp-proof-card">
              <div className="sp-proof-number">2</div>
              <div className="sp-proof-content">
                <h3>Santander Bank's Consumer Positioning</h3>
                <p>
                  Emphasizes general banking and app basics ("deposits, alerts, manage cards"),
                  not "credit health inside Santander."
                </p>
              </div>
            </div>
            <div className="sp-proof-card">
              <div className="sp-proof-number">3</div>
              <div className="sp-proof-content">
                <h3>AutoFi Partnership Investment</h3>
                <p>
                  Santander Consumer is already investing in digital shopping + financing experience
                  for 3.0M customers and ~$64B managed assets.
                </p>
              </div>
            </div>
          </div>
          <div className="sp-problem-punchline">
            When users start thinking "Am I eligible?" Santander doesn't give them an internal answer fast enough.
          </div>
        </div>
      </section>

      <section className="sp-leakage" id="leakage-calculator">
        <div className="sp-container">
          <h2 className="sp-section-title">The leakage is measurable — and it's happening before the dealership</h2>

          <div className="sp-leakage-cards">
            <div className="sp-leakage-card sp-leakage-primary">
              <div className="sp-leakage-stat">315K+</div>
              <div className="sp-leakage-label">Customers using external credit tools annually</div>
              <div className="sp-leakage-note">Based on 3M portfolio, 15% shopping window, J.D. Power behavior data</div>
            </div>

            <div className="sp-leakage-flow-cards">
              <div className="sp-leakage-flow-card">
                <div className="sp-leakage-flow-stat">450K</div>
                <div className="sp-leakage-flow-label">Annual shoppers</div>
              </div>
              <div className="sp-leakage-flow-arrow">→</div>
              <div className="sp-leakage-flow-card">
                <div className="sp-leakage-flow-stat">203K</div>
                <div className="sp-leakage-flow-label">Research financing</div>
              </div>
              <div className="sp-leakage-flow-arrow">→</div>
              <div className="sp-leakage-flow-card">
                <div className="sp-leakage-flow-stat">122K</div>
                <div className="sp-leakage-flow-label">Apply for pre-approval</div>
              </div>
            </div>
          </div>

          <div className="sp-leakage-competitor">
            <div className="sp-competitor-label">While competitors retain customers with built-in credit experiences:</div>
            <div className="sp-competitor-badges">
              <div className="sp-badge">Chase Credit Journey</div>
              <div className="sp-badge">Capital One CreditWise</div>
              <div className="sp-badge">Wells Fargo Credit Close-Up</div>
              <div className="sp-badge">Citi FICO Access</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-solution" id="solution">
        <div className="sp-container">
          <h2 className="sp-section-title">Two realities: "Without LumiqAI" vs "With LumiqAI"</h2>
          <p className="sp-section-subtitle">
            See how the customer experience transforms inside Santander's apps
          </p>

          <div className="sp-comparison-split">
            <div className="sp-comparison-side sp-comparison-without">
              <div className="sp-comparison-header">
                <h3>WITHOUT</h3>
                <p>Santander today</p>
              </div>
              <div className="sp-comparison-mockup">
                <div className="sp-placeholder sp-placeholder-vertical">
                  <span>Insert Santander app screenshots here</span>
                </div>
                <div className="sp-callout-overlays">
                  <div className="sp-overlay sp-overlay-problem">No unified credit readiness view</div>
                  <div className="sp-overlay sp-overlay-problem">No consumer score + monitoring module surfaced in-app</div>
                  <div className="sp-overlay sp-overlay-problem">No business credit monitoring widget</div>
                  <div className="sp-overlay sp-overlay-problem">No deposit-based pre-approval surfacing inside business banking</div>
                </div>
              </div>
            </div>

            <div className="sp-comparison-side sp-comparison-with">
              <div className="sp-comparison-header">
                <h3>WITH LumiqAI</h3>
                <p>Embedded credit intelligence</p>
              </div>
              <div className="sp-mockup-grid">
                <div className="sp-mockup-card">
                  <div className="sp-placeholder sp-placeholder-mockup">
                    <span>Mockup 1:<br/>Consumer Credit Readiness</span>
                  </div>
                  <div className="sp-mockup-label">
                    <strong>Consumer Credit Readiness</strong>
                    <ul>
                      <li>VantageScore panel (trend line, alerts)</li>
                      <li>"Next best actions" (paydown, utilization, dispute)</li>
                    </ul>
                  </div>
                </div>
                <div className="sp-mockup-card">
                  <div className="sp-placeholder sp-placeholder-mockup">
                    <span>Mockup 2:<br/>Business Credit Readiness</span>
                  </div>
                  <div className="sp-mockup-label">
                    <strong>Business Credit Readiness</strong>
                    <ul>
                      <li>Business score / file completeness / tradeline health</li>
                      <li>Registry/identity verification health</li>
                    </ul>
                  </div>
                </div>
                <div className="sp-mockup-card">
                  <div className="sp-placeholder sp-placeholder-mockup">
                    <span>Mockup 3:<br/>Eligibility Engine</span>
                  </div>
                  <div className="sp-mockup-label">
                    <strong>Eligibility Engine</strong>
                    <ul>
                      <li>"Pre-approved offers" carousel: LOC / term / SBA / equipment</li>
                      <li>Uses deposits + cashflow stability + bureau + internal data</li>
                    </ul>
                  </div>
                </div>
                <div className="sp-mockup-card">
                  <div className="sp-placeholder sp-placeholder-mockup">
                    <span>Mockup 4:<br/>Instant Prequal Flow</span>
                  </div>
                  <div className="sp-mockup-label">
                    <strong>Instant Prequal Flow</strong>
                    <ul>
                      <li>Soft-check eligibility experience</li>
                      <li>Clear disclosures + consent</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-integration-note">
            <strong>Integration note:</strong> Plug-in module. No core replacement. Surfaces inside existing app navigation.
          </div>
        </div>
      </section>

      <section className="sp-security">
        <div className="sp-container">
          <h2 className="sp-section-title">Built for regulated environments</h2>
          <p className="sp-section-subtitle">Bank-grade controls, not marketing-grade promises</p>

          <div className="sp-security-grid">
            <div className="sp-security-card">
              <div className="sp-security-icon">🔒</div>
              <h4>Encryption in transit/at rest</h4>
              <ul>
                <li>TLS 1.3 in transit</li>
                <li>256-bit AES at rest</li>
                <li>Tokenized PII handling</li>
              </ul>
            </div>
            <div className="sp-security-card">
              <div className="sp-security-icon">👤</div>
              <h4>Role-based access + audit logs</h4>
              <ul>
                <li>Granular permission controls</li>
                <li>Complete audit trail</li>
                <li>Real-time monitoring</li>
              </ul>
            </div>
            <div className="sp-security-card">
              <div className="sp-security-icon">⚖️</div>
              <h4>Data minimization + consent</h4>
              <ul>
                <li>FCRA-compliant soft pulls</li>
                <li>ECOA adverse action support</li>
                <li>GLBA privacy controls</li>
              </ul>
            </div>
            <div className="sp-security-card">
              <div className="sp-security-icon">✓</div>
              <h4>Vendor risk / SOC2-aligned posture</h4>
              <ul>
                <li>SOC2-aligned controls</li>
                <li>Annual penetration testing</li>
                <li>Continuous compliance monitoring</li>
              </ul>
            </div>
          </div>

          <div className="sp-data-flow">
            <h3>Data Flow</h3>
            <div className="sp-placeholder sp-placeholder-diagram">
              <span>Data Flow diagram:<br/>
              Source systems → LumiqAI → App surfaces<br/>
              "No raw credentials stored"</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-outcomes">
        <div className="sp-container">
          <h2 className="sp-section-title">What Santander gets in 90 days</h2>
          <p className="sp-section-subtitle">Measurable outcomes from embedded credit readiness</p>

          <div className="sp-outcomes-tiles">
            <div className="sp-outcome-tile">
              <h4>Higher recapture of existing customers in shopping window</h4>
              <p>Intercept credit research behavior before customers leave the ecosystem</p>
            </div>
            <div className="sp-outcome-tile">
              <h4>Higher funded-loan conversion from pre-approval journeys</h4>
              <p>Turn soft credit checks into qualified applications with clear eligibility paths</p>
            </div>
            <div className="sp-outcome-tile">
              <h4>Increased retention via recurring credit engagement</h4>
              <p>Monthly credit monitoring creates touchpoints that strengthen customer relationships</p>
            </div>
            <div className="sp-outcome-tile">
              <h4>Cross-sell refinance + cards based on readiness signals</h4>
              <p>Tap into the 18M refinance-ready pool (TransUnion) already in your portfolio</p>
            </div>
          </div>

          <div className="sp-kpi-section">
            <h3>KPIs for your team</h3>
            <div className="sp-kpi-grid">
              <div className="sp-kpi-item">
                <strong>Prequal starts</strong>
                <p>Volume of eligibility checks initiated</p>
              </div>
              <div className="sp-kpi-item">
                <strong>Offer CTR</strong>
                <p>Click-through on pre-approved offers</p>
              </div>
              <div className="sp-kpi-item">
                <strong>Application completion</strong>
                <p>Conversion from offer to submitted app</p>
              </div>
              <div className="sp-kpi-item">
                <strong>Funded loans</strong>
                <p>Closed loans sourced through LumiqAI</p>
              </div>
              <div className="sp-kpi-item">
                <strong>Retention lift vs control group</strong>
                <p>Customer retention improvement</p>
              </div>
              <div className="sp-kpi-item">
                <strong>Refinance activation</strong>
                <p>Existing borrowers checking eligibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-cta" id="cta-section">
        <div className="sp-container">
          <div className="sp-cta-content-centered">
            <h2 className="sp-cta-title">Get the Santander Leakage Audit + mock implementation plan</h2>
            <p className="sp-cta-description">
              We'll analyze your funnel metrics, portfolio data, and competitive position to show exactly
              how much loan volume you're leaving on the table—and how to recapture it.
            </p>
          </div>

          <div className="sp-cta-form-container">
            {formSubmitted ? (
              <div className="sp-form-success">
                <div className="sp-success-icon">✓</div>
                <h3>Request Received</h3>
                <p>We'll send your Santander Leakage Audit within 48 hours.</p>
              </div>
            ) : (
              <form className="sp-cta-form" onSubmit={handleFormSubmit}>
                <div className="sp-form-row">
                  <div className="sp-form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="sp-form-group">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title *"
                      value={formData.title}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="sp-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="sp-form-group">
                  <label className="sp-checkbox-label">Team (select all that apply):</label>
                  <div className="sp-checkbox-group">
                    <label className="sp-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.team.includes('consumer')}
                        onChange={() => handleTeamChange('consumer')}
                      />
                      <span>Consumer</span>
                    </label>
                    <label className="sp-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.team.includes('business')}
                        onChange={() => handleTeamChange('business')}
                      />
                      <span>Business</span>
                    </label>
                    <label className="sp-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.team.includes('auto')}
                        onChange={() => handleTeamChange('auto')}
                      />
                      <span>Auto Servicing</span>
                    </label>
                  </div>
                </div>
                <div className="sp-form-buttons">
                  <button type="submit" className="sp-btn sp-btn-primary sp-btn-large">
                    Book 20 minutes
                  </button>
                  <button type="submit" className="sp-btn sp-btn-secondary sp-btn-large">
                    Send audit PDF
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
