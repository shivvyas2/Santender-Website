# Santander Partner Page - Content & Asset TODO List

## Page Overview
URL: `/partners/santander`

This is a strategic, ROI-focused landing page specifically designed for Santander Bank. It includes:
- Interactive leakage calculator
- Without vs. With comparison
- Security & compliance section
- 90-day measurable outcomes
- Working contact form
- FAQ accordion
- Competitive parity references

---

## 1. HERO SECTION

### Asset Needed:
**Hero Mockup Placeholder** (Right side of hero)
- **File:** Product mockup showing pre-qualification widget integrated into Santander online banking
- **Specs:** 600x400px minimum, PNG or JPG
- **Content:** Should show the LumiqAI eligibility widget embedded in Santander's online banking interface
- **Location in code:** Line ~98 in `SantanderPartner.tsx`

**Current placeholder text:**
```
"Product Mockup: Pre-qualification widget integrated into Santander online banking"
```

---

## 2. SOLUTION CENTERPIECE (Without vs. With Comparison)

### Assets Needed (4 screenshots/mockups):

#### WITHOUT LUMIQ TAB:

1. **Screenshot 1:** Santander auto loan page
   - **Specs:** 400x180px, PNG/JPG
   - **Content:** Standard Santander auto loan landing page showing rates
   - **Location:** Step 1 placeholder

2. **Screenshot 2:** Credit requirements disclosure
   - **Specs:** 400x180px, PNG/JPG
   - **Content:** Section showing minimum credit score requirements
   - **Location:** Step 2 placeholder

3. **Icon 3:** Exit funnel visual
   - **Specs:** 400x180px, PNG/JPG or icon
   - **Content:** Graphic showing customer leaving funnel
   - **Location:** Step 3 placeholder

4. **Icon 4:** Competitor logo placeholder
   - **Specs:** 400x180px, PNG/JPG
   - **Content:** Generic "competitor" visual (no actual logos needed)
   - **Location:** Step 4 placeholder

#### WITH LUMIQ TAB:

5. **Mockup 1:** Eligibility check CTA in-page
   - **Specs:** 400x180px, PNG/JPG
   - **Content:** "Check What You Qualify For" widget embedded in page
   - **Location:** Step 1 placeholder

6. **Mockup 2:** Eligibility results screen
   - **Specs:** 400x180px, PNG/JPG
   - **Content:** Personalized eligibility results showing loan options
   - **Location:** Step 2 placeholder

7. **Mockup 3:** Credit improvement roadmap
   - **Specs:** 400x180px, PNG/JPG
   - **Content:** Screen showing "You're 40 points away" guidance
   - **Location:** Step 3 placeholder

8. **Mockup 4:** Pre-approval confirmation
   - **Specs:** 400x180px, PNG/JPG
   - **Content:** Success screen with pre-approval details
   - **Location:** Step 4 placeholder

**Location in code:** Lines ~238-332 in `SantanderPartner.tsx`

---

## 3. SECURITY & COMPLIANCE SECTION

### Asset Needed:
**Data Flow Diagram**
- **File:** Architecture diagram showing data flow
- **Specs:** 1000x300px, PNG/JPG
- **Content:** Visual showing:
  - Customer → Santander frontend
  - → LumiqAI API
  - → Bureau (soft pull)
  - → Response → Customer
  - With encryption, tokenization, and audit log callouts at each step
- **Location in code:** Line ~401 in `SantanderPartner.tsx`

**Current placeholder text:**
```
"Diagram: Customer → Santander frontend → LumiqAI API → Bureau (soft pull) → Response → Customer
With encryption, tokenization, and audit log callouts at each step"
```

---

## 4. CONTENT UPDATES NEEDED

### Calculator Default Values
Currently set to:
- Customer Base: 3M (Santander Consumer reference)
- Research Rate: 45% (J.D. Power benchmark)
- Pre-approval Rate: 60% (J.D. Power benchmark)
- Recovery Lift: 15% (Conservative estimate)
- Avg Loan Value: $35K

**ACTION:** Verify these numbers are accurate or update in `SantanderPartner.tsx` lines 11-15

### Contact Form Submission
Currently shows success message but doesn't send anywhere.

**ACTION:** Integrate with your CRM/email system:
- Option 1: Add backend API endpoint
- Option 2: Use form service (Formspree, etc.)
- Option 3: Email webhook
- **Location in code:** `handleFormSubmit` function, line 17

### "Leakage Audit PDF" Download
Currently just submits form.

**ACTION:** Create actual PDF download or link to calendly/meeting scheduler
- **Location in code:** Form submit button, line 590

---

## 5. STYLE CUSTOMIZATION OPTIONS

### Colors
Primary red: `#EC0000` (Santander brand color)
- Used throughout for CTAs, accents, highlights
- Change in CSS file if needed

### Fonts
Currently using system fonts. To add Santander's brand fonts:
1. Add font files to `/public/fonts/`
2. Import in `index.css`
3. Update font-family in `SantanderPartner.css`

---

## 6. DATA SOURCES CITED

All data sources are already included in the copy:
- ✅ J.D. Power: 45% research financing, 60% apply for pre-approval
- ✅ TransUnion: ~18M borrowers could save by refinancing
- ✅ AutoFi partnership: 3.0M customers, ~$64B portfolio
- ✅ Competitor tools: Chase, Capital One, Wells Fargo, Citi (all linked)

**No action needed** - sources are properly attributed

---

## 7. COMPETITIVE TOOLS SECTION

All competitor tool links are already included and functional:
- ✅ Chase Credit Journey
- ✅ Capital One CreditWise
- ✅ Wells Fargo Credit Close-Up
- ✅ Citi FICO Score

**No action needed** - links point to real competitor pages

---

## 8. FAQ CONTENT

All 5 FAQs are written and functional:
1. How differs from pre-qualification tools
2. Implementation process and timeline
3. FCRA compliance and adverse action
4. Data storage and retention
5. Pricing models

**ACTION (optional):** Review FAQ answers and adjust based on actual product specs

---

## 9. TECHNICAL IMPLEMENTATION CHECKLIST

### Before Launch:
- [ ] Replace all placeholder images with actual assets (10 total images needed)
- [ ] Connect form submission to backend/CRM
- [ ] Set up PDF generation for "Leakage Audit" download
- [ ] Add analytics tracking (Google Analytics, Mixpanel, etc.)
- [ ] Test calculator functionality with real data
- [ ] Mobile responsive testing on actual devices
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Add loading states for form submission
- [ ] Implement proper error handling for calculator
- [ ] Add meta tags for SEO (title, description, OG tags)

### Optional Enhancements:
- [ ] Add animation/transitions for tab switching
- [ ] Implement email capture before showing calculator results
- [ ] Add "Share Results" functionality for calculator
- [ ] Create printable version of leakage audit
- [ ] Add video embed option in hero section
- [ ] Implement A/B testing framework for CTA copy
- [ ] Add testimonials/case studies section
- [ ] Create downloadable one-pager PDF

---

## 10. CONTENT MODEL (JSON Format)

```json
{
  "hero": {
    "image": "/assets/santander/hero-mockup.png",
    "alt": "LumiqAI pre-qualification widget in Santander banking"
  },
  "comparison": {
    "without": [
      {
        "step": 1,
        "image": "/assets/santander/auto-loan-page.png",
        "alt": "Santander auto loan landing page"
      },
      {
        "step": 2,
        "image": "/assets/santander/credit-requirements.png",
        "alt": "Credit score requirements"
      },
      {
        "step": 3,
        "image": "/assets/santander/exit-funnel-icon.png",
        "alt": "Customer leaving funnel"
      },
      {
        "step": 4,
        "image": "/assets/santander/competitor-visual.png",
        "alt": "Customer applies elsewhere"
      }
    ],
    "with": [
      {
        "step": 1,
        "image": "/assets/santander/eligibility-cta.png",
        "alt": "Check eligibility widget"
      },
      {
        "step": 2,
        "image": "/assets/santander/results-screen.png",
        "alt": "Eligibility results"
      },
      {
        "step": 3,
        "image": "/assets/santander/improvement-roadmap.png",
        "alt": "Credit improvement guidance"
      },
      {
        "step": 4,
        "image": "/assets/santander/preapproval-confirmation.png",
        "alt": "Pre-approval success"
      }
    ]
  },
  "security": {
    "dataFlowDiagram": "/assets/santander/data-flow-diagram.png",
    "alt": "LumiqAI data flow architecture"
  }
}
```

---

## 11. QUICK START: Replace Placeholders

### Find All Placeholders in Code:
Search for `sp-placeholder` class in `SantanderPartner.tsx`

### Replace Pattern:
```tsx
// BEFORE (placeholder):
<div className="sp-placeholder sp-placeholder-hero">
  <span>Product Mockup:<br/>Pre-qualification widget...</span>
</div>

// AFTER (real image):
<img
  src="/assets/santander/hero-mockup.png"
  alt="LumiqAI pre-qualification widget in Santander banking"
  style={{
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.1)'
  }}
/>
```

---

## 12. DESIGN DECISIONS EXPLAINED

### Why No Heavy Gradients?
Bank-grade UI guidelines prefer solid colors for trust/credibility

### Why Minimal Motion?
Financial institutions prefer stability over flashiness

### Why Santander Red (#EC0000)?
Brand consistency - matches Santander's official color

### Why "SOC2-Aligned" Not "SOC2 Certified"?
Compliance accuracy - only claim what you actually have

### Why Calculator with Sliders?
Interactive = engagement; transparency builds trust with financial buyers

### Why Without vs. With Tabs?
Easier to digest than side-by-side; mobile-friendly

### Why FAQ Accordion?
Reduces perceived page length while maintaining information density

---

## QUESTIONS?

Contact: founder@lumiq.ai

---

**Last Updated:** 2026-01-05
**Page Status:** ✅ Built and functional, awaiting assets
**Route:** `/partners/santander`
