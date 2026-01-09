import { useState, FormEvent } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">Request a Demo</h1>
          <p className="page-hero-description">
            See how LUMIQ AI × Santander can transform your credit decision process.
            Schedule a personalized demo with our team.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-info-title">Get in Touch</h2>
            <p className="contact-info-text">
              Our team of credit intelligence experts is ready to show you how our platform
              can help you make better lending decisions.
            </p>

            <div className="contact-benefits">
              <h3 className="benefits-title">What to Expect:</h3>
              <ul className="benefits-list">
                <li>Personalized 30-minute platform demonstration</li>
                <li>Discussion of your specific use cases and requirements</li>
                <li>Live Q&A with our product specialists</li>
                <li>Custom pricing based on your needs</li>
                <li>Integration assessment and timeline</li>
              </ul>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📧</div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a href="mailto:info@lumiq.ai" className="contact-detail-value">info@lumiq.ai</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <a href="tel:+1234567890" className="contact-detail-value">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">🏢</div>
                <div>
                  <div className="contact-detail-label">Address</div>
                  <div className="contact-detail-value">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We've received your request and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Industry *</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="commercial-banking">Commercial Banking</option>
                    <option value="fintech">Fintech & Digital Lending</option>
                    <option value="equipment-finance">Equipment & Asset Finance</option>
                    <option value="trade-finance">Trade & Supply Chain Finance</option>
                    <option value="credit-union">Credit Union</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell us about your needs</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What credit intelligence challenges are you looking to solve?"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Request Demo
                </button>

                <p className="form-note">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="trusted-by">
        <div className="section-container">
          <h2 className="section-title">Trusted by Leading Financial Institutions</h2>
          <p className="section-description">
            Join hundreds of banks, lenders, and financial service providers who trust LUMIQ AI
          </p>
          <div className="logos-grid">
            <div className="logo-placeholder">Financial Institution</div>
            <div className="logo-placeholder">Digital Lender</div>
            <div className="logo-placeholder">Credit Union</div>
            <div className="logo-placeholder">Equipment Finance</div>
          </div>
        </div>
      </section>
    </div>
  )
}
