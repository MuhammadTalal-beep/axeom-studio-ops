# AXEOM Studio Ops // Production Deployment Guide

Axeom Content Studio (Dallas, TX) operational SaaS dashboard with working serverless backend API, 3D kinetic canvas, and human-in-the-loop action workflows.

---

## ⚡ Option 1: Deploy to Vercel (1-Click & CLI)

### Via Vercel CLI:
```bash
npm install -g vercel
vercel
```
- When asked `Set up and deploy?`, press **Y**.
- Accept all defaults (Vercel automatically detects `vercel.json` and configures the `/api` serverless routes).

### Via GitHub / Vercel Dashboard:
1. Push this folder (`axeom-studio-ops`) to your GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Leave **Framework Preset** as **Other** (Root directory: `./`).
5. Click **Deploy**. Your site and serverless API endpoints (`/api/data` and `/api/action`) will be live immediately!

---

## 🌐 Option 2: Deploy to Netlify (1-Click & CLI)

### Via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Via Netlify Web Dashboard:
1. Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop), OR import your GitHub repo.
2. Netlify will automatically detect `netlify.toml` and configure the edge functions and static assets.

---

## 💻 Option 3: Run Locally (Node.js)

To run the local full-stack server with API endpoints:
```bash
npm start
```
Then visit: `http://localhost:3000`

### Available Backend API Endpoints:
- `GET /api/data`: Returns Pack 74 reconciled business data, overdue invoices, unbilled sessions, and unified client registry.
- `POST /api/action`: Processes authorized human actions and returns an official audit receipt (`AX-AUDIT-XXXXXX`).
