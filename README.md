# H2S Hackathon — Code the Future 🚀

A modern, fully responsive **hackathon landing page** built with React and Vite. Designed for the **H2S Hackathon**, this single-page application showcases event details, challenges, schedule, rewards, and FAQs — all wrapped in a sleek dark space-themed UI.

---

## 🌐 Live Preview

> Deploy via Vercel / Netlify after running the build command below.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI component library |
| **Vite 8** | Lightning-fast build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Smooth animations & transitions |
| **Lucide React** | Icon library |
| **React Router DOM v7** | Client-side routing |
| **ESLint** | Code linting & quality |

---

## ⚙️ Setup Instructions

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/h2s-hackathon.git
cd h2s-hackathon

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## ✨ Features

- 🌌 **Space-themed Hero Section** — Animated star field background with a glowing purple aesthetic and a bold "Code the Future" headline
- 📱 **Fully Responsive** — Separate desktop and mobile layouts optimized for all screen sizes
- 🧭 **Sticky Navbar** — Smooth-scroll navigation with links to all major sections
- 🗂️ **12 Hackathon Challenges** — Displayed in an interactive grid with image cards covering AI, health tech, blockchain, sustainability, and more
- 📅 **Event Schedule / Timeline** — Clear timeline of all key dates from registration to results (July–August 2026)
- 🏆 **Rewards Section** — Highlights mentorship and internship opportunities for winners
- ❓ **FAQ Accordion** — Collapsible FAQ items for common participant queries
- ♿ **Accessibility** — Skip-to-content link, ARIA labels, and semantic HTML throughout
- ⚡ **Performance Optimized** — `memo`-wrapped components, lazy-loadable sections, and Vite's fast bundling
- 🎨 **Custom UI Components** — Reusable `Button`, `SectionLabel`, `StarField`, `AstroOrbit`, `PixelGrid`, and more
- 🪝 **Custom React Hooks** — `useCountdown`, `useScrollReveal`, and `useTilt` for rich interactivity

---

## 📁 Folder Structure

```
H2S1/
├── public/
│   ├── favicon.svg              # Site favicon
│   ├── icons.svg                # SVG icon sprites
│   └── images/                  # Static public images (README inside)
│
├── src/
│   ├── assets/                  # Local images (challenges, hero model, bg)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Sticky top navigation bar
│   │   │   └── Footer.jsx       # Page footer
│   │   │
│   │   ├── sections/            # One component per page section
│   │   │   ├── Hero.jsx         # Full-screen hero with star field
│   │   │   ├── About.jsx        # About the hackathon
│   │   │   ├── WhatIsHackathon.jsx
│   │   │   ├── WhyParticipate.jsx
│   │   │   ├── HowToParticipate.jsx
│   │   │   ├── Challenges.jsx   # 12 challenge cards
│   │   │   ├── Schedule.jsx     # Event timeline
│   │   │   ├── Rewards.jsx      # Prizes & opportunities
│   │   │   └── FAQ.jsx          # Collapsible FAQ list
│   │   │
│   │   └── ui/                  # Reusable UI primitives
│   │       ├── Button.jsx
│   │       ├── SectionLabel.jsx
│   │       ├── StarField.jsx
│   │       ├── AstroOrbit.jsx
│   │       ├── PixelGrid.jsx
│   │       ├── FAQItem.jsx
│   │       ├── challengeRow.jsx
│   │       └── stepCard.jsx
│   │
│   ├── hooks/
│   │   ├── useCountdown.js      # Live countdown timer logic
│   │   ├── useScrollReveal.js   # Trigger animations on scroll
│   │   └── useTilt.js           # 3D tilt effect on hover
│   │
│   ├── utils/
│   │   └── data.js              # All static data (nav links, challenges,
│   │                            #   timeline, FAQs, rewards, etc.)
│   │
│   ├── App.jsx                  # Root component — assembles all sections
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Global styles & Tailwind base
│
├── index.html                   # HTML shell with meta tags & SEO
├── vite.config.js               # Vite + Tailwind + path alias config
├── package.json                 # Dependencies & scripts
└── eslint.config.js             # ESLint rules
```

---

## 📌 Key Data & Content

All site content (nav links, challenges, timeline events, FAQs, rewards, participant cards) is centralized in **`src/utils/data.js`** — making it easy to update without touching component files.

---

## 👥 Who Can Participate?

- Undergraduate Students
- Graduate / Postgraduate Students
- PhD Students / Research Scholars

> Only students currently enrolled in an Indian institution for the 2024–25 academic year are eligible. Participation is **free**.

---

## 📅 Event Timeline

| Event | Date |
|---|---|
| Registrations & Idea Submission Open | Thu, Jul 04, 2026 |
| Explainer Session | Thu, Jul 08, 2026 |
| Mentor-Mentee Connects Begin | Thu, Jul 08, 2026 |
| Mentor-Mentee Connects End | Tue, Jul 16, 2026 |
| Final Submission Deadline | Fri, Jul 25, 2026 |
| Results Announcement | Mon, Aug 04, 2026 |

---

## 📄 License

This project was built as part of an academic assessment. All rights reserved.
