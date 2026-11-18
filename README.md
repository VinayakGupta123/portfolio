# Modern Developer Portfolio Website

A clean, crisp, and high-performance developer portfolio engineered specifically for **Full-Stack & Software Engineers**. Features interactive project filtering, verified credentials & certification showcases, an ATS-friendly printable resume modal, and an ultra-clean minimalist light aesthetic (with optional dark mode).

---

## 🚀 Quick Start

### Option 1: Instant Direct Open (No Installation Required)
Simply double-click `index.html` or open it with your favorite browser:
```bash
# In Windows PowerShell:
Start-Process "C:\Users\gupta\.gemini\antigravity\scratch\portfolio\index.html"
```

### Option 2: Run with Local Dev Server
```bash
npm.cmd start
# Or using any static server:
npx.cmd serve .
```
Then visit: `http://localhost:3000`

---

## 🎨 Key Features

1. **Clean & Crisp Light Aesthetic**:
   - Modern typography using Google Fonts (Inter).
   - High-contrast slate color palette, subtle borders, and smooth card elevation.
   - Smooth theme switcher (persisted in `localStorage`) if dark mode is preferred.

2. **Verified Certifications & Accreditations (Requested Highlight)**:
   - Dedicated showcase for AWS, Meta, CNCF, and Docker credentials.
   - Displays official credential IDs, issue dates, validated skills, and direct verification links.

3. **Interactive ATS Resume Viewer & Print/PDF Export (Requested Highlight)**:
   - Dedicated modal showing a clean, ATS-compliant formatted resume.
   - One-click **"🖨️ Print / Save as PDF"** button (pre-styled with `@media print` CSS so you can export a clean 1-2 page PDF without website headers or UI clutter).
   - One-click **"📋 Copy Text Summary"** for quick job applications.

4. **Featured Projects Showcase**:
   - Filter tabs: *All*, *Full Stack*, *Backend & APIs*, *Frontend & WebSockets*, *Cloud & DevOps*.
   - Interactive **"View Case Study"** modal revealing the engineering problem, architectural solution, and measurable production impact.
   - Live demo and GitHub source code links.

5. **Technical Skills Bento Grid**:
   - Grouped into Frontend, Backend, Databases, and Cloud/DevOps with modern tags.

6. **Interactive Contact Form & Socials**:
   - Validated client-side form with real-time toast feedback.
   - Direct email, location, and social links.

---

## ⚙️ How to Personalize (2 Minutes)

All personal data, projects, work experience, and certifications are centralized inside **[`profile-data.js`](./profile-data.js)**.

Open [`profile-data.js`](./profile-data.js) and replace:
- **`personal`**: Name, title, email, GitHub/LinkedIn links, bio, and stats.
- **`certifications`**: Your verified credentials, license IDs, and verify URLs.
- **`projects`**: Your project titles, tags, screenshots, and live demo links.
- **`skills`**: Your tech stack.
- **`experience`**: Your career milestones.

Save the file and refresh `index.html` — all changes will immediately take effect!

---

## 🚢 Free 1-Click Deployment Options

### GitHub Pages:
1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.

### Vercel:
```bash
npx vercel
```

### Netlify:
Drag and drop this folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
