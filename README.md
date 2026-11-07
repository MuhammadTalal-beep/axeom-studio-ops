# AXEOM // Studio Operations Core

A minimal, high-contrast full-stack operational SaaS dashboard for **Axeom Content Studio** (Dallas, TX). Engineered for real-time liquidity tracking, churn prevention, and automated billing reconciliations.

---

## ⚡ Core Business Features (Pack 74)

- **Aging Arrears Ledger ($11,250.00)**: Real-time tracking of 9 overdue invoices with aging alerts (up to 43 days late).
- **Never Billed Sessions ($6,000.00)**: Uncovers 4 completed shoots (Greenway Pediatrics, Summit Chiropractic, Sage Family, Khan Law) missing billing records.
- **Client Credit Reserves ($1,860.00)**: Net liability adjustments for Lone Star Realty ($1,500), NorthPoint Church ($60), and Hustle & Heart ($300).
- **High-Risk Churn Protocol**: Immediate mitigation flow for Patel Insurance Group (Raj & Nina Patel, Inquiry L093) addressing video edit compliance and contract renewal.
- **Unified 25-Client Registry**: Instant search across 25 deduplicated entities with messy alias matching.
- **Billing Tool Audit Corrections**: Solves system discrepancies for INV-1135 (partial payment), INV-1120 (false paid flag), and INV-1102 (ghost arrear).
- **3D Kinetic WebGL Prism**: Real-time Three.js kinetic chevron sculpture echoing the AXEOM brand identity.
- **Suggest, Never Act Alone**: Strict human-in-the-loop authorization modal before executing financial or client actions.
- **Drag & Drop CSV Ingestion**: Dynamic browser parsing for `bookings.csv`, `invoices.csv`, `payments.csv`, and `leads.csv`.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Tailwind CSS, Space Grotesk & Inter typography.
- **3D Graphics**: Three.js WebGL kinetic animation.
- **Backend / APIs**: Node.js Serverless Functions (`/api/data`, `/api/action`).
- **Deploy Targets**: Vercel & Netlify ready with zero configuration.

---

## 🚀 Deployment

### Deploy to Vercel
1. Import repository on [Vercel](https://vercel.com/new).
2. Framework Preset: **Other**.
3. Deploy!

### Deploy to Netlify
1. Import repository on [Netlify](https://app.netlify.com).
2. Netlify will auto-detect `netlify.toml` and configure the site and edge functions.

---

## 📄 License

MIT License. Free for commercial and private use.
