# 🚀 Portfolio Masterpiece

A fully animated, modern developer portfolio built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.

---

## ⚡ Quick Start (Windows / VS Code)

### Prerequisites
- **Node.js 18+** → Download from https://nodejs.org (LTS version)
- **VS Code** → https://code.visualstudio.com

### Steps

**1. Open the project in VS Code**
```
File → Open Folder → select the "portfolio-masterpiece" folder
```

**2. Open the integrated terminal**
```
Terminal → New Terminal   (or press Ctrl + `)
```

**3. Install dependencies**
```bash
npm install
```

**4. Start the dev server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:3000
```
The browser opens automatically!

---

## 📁 Project Structure

```
portfolio-masterpiece/
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite config (port 3000, path alias @/)
├── tailwind.config.js          # Tailwind with CSS variable theming
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies & scripts
└── src/
    ├── main.tsx                # React root with ThemeProvider + Toaster
    ├── App.tsx                 # Assembles all sections
    ├── index.css               # Global CSS variables (light + dark theme)
    ├── lib/
    │   └── utils.ts            # cn() helper
    ├── hooks/
    │   └── use-toast.ts        # Toast notification hook
    └── components/
        ├── Hero.tsx            # Animated hero with typewriter + orbit icons
        ├── About.tsx           # About me + animated skill bars
        ├── TechStack.tsx       # Tech icons grid with hover effects
        ├── Projects.tsx        # Project cards with modal details
        ├── Experience.tsx      # Work & education timeline
        ├── Services.tsx        # Services offered
        ├── Testimonials.tsx    # Auto-cycling testimonials slider
        ├── Contact.tsx         # Contact form with validation
        ├── Navbar.tsx          # Sticky nav with theme toggle
        ├── Footer.tsx          # Footer with social links
        ├── ScrollProgress.tsx  # Scroll progress bar
        ├── BackToTop.tsx       # Back-to-top button
        ├── ChatBot.tsx         # AI chatbot assistant
        ├── AnimatedSection.tsx # Reusable scroll animations
        ├── ThemeProvider.tsx   # Light/dark theme context
        └── ui/                 # shadcn/ui components
            ├── button.tsx
            ├── input.tsx
            ├── textarea.tsx
            ├── label.tsx
            ├── badge.tsx
            ├── form.tsx
            ├── toast.tsx
            └── toaster.tsx
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌗 Dark / Light Mode | Toggle with sun/moon button in navbar |
| ⌨️ Typewriter Effect | Cycling role titles in hero |
| 🎯 Framer Motion | Scroll-triggered animations on every section |
| 💬 AI Chatbot | Keyword-based bot answering portfolio questions |
| 📝 Contact Form | Validated with react-hook-form + zod |
| 🚀 Tech Stack Grid | 16 animated tech icons with hover glow |
| 💼 Project Modals | Click any project card for detailed view |
| 📜 Timeline | Animated work + education timeline |
| ⭐ Testimonials | Auto-sliding testimonials with controls |
| 📊 Skill Bars | Animated progress bars on scroll |
| 🔝 Back to Top | Smooth scroll-to-top button |
| 📏 Scroll Progress | Top progress bar showing scroll position |

---

## 🔧 Customize

| What | Where |
|------|-------|
| Your name & bio | `src/components/About.tsx` → top of file |
| Hero name | `src/components/Hero.tsx` → `"Alex Chen"` |
| Projects | `src/components/Projects.tsx` → `PROJECTS` array |
| Work experience | `src/components/Experience.tsx` → `WORK` array |
| Education | `src/components/Experience.tsx` → `EDUCATION` array |
| Tech stack | `src/components/TechStack.tsx` → `TECHS` array |
| Services | `src/components/Services.tsx` → `SERVICES` array |
| Testimonials | `src/components/Testimonials.tsx` → `TESTIMONIALS` array |
| Chatbot answers | `src/components/ChatBot.tsx` → `BOT_RESPONSES` array |
| Social links | `src/components/Hero.tsx` + `Footer.tsx` |
| Contact email | `src/components/Contact.tsx` → `EMAIL` constant |
| Colors/theme | `src/index.css` → CSS variables |

---

## 📦 Build for Production

```bash
npm run build
```
Output goes to `/dist` folder — ready to deploy on Vercel, Netlify, or any static host.

---

Built with ❤️ — React · TypeScript · Vite · Tailwind CSS · Framer Motion
