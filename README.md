# 🚀 Personal Portfolio — React + TypeScript

A modern, fully responsive developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **Dark theme** with cyan/purple accent palette and noise texture
- **Typewriter effect** in the hero section
- **Framer Motion** animations throughout (entrance, hover, scroll-triggered)
- **Sticky navbar** with scroll-aware active indicator and mobile hamburger menu
- **Skills grid** with animated progress bars and category filtering
- **Projects grid** with hover reveal overlay and featured badges
- **Contact form** with full validation and animated success state
- **Social links** component with icons and hover glow effects
- **Back-to-top** button in footer
- **Fully responsive** — mobile, tablet, desktop

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav + mobile hamburger
│   ├── Hero.tsx            # Profile, typewriter, CTA buttons
│   ├── About.tsx           # Bio, career objective, education timeline
│   ├── Skills.tsx          # Filterable skill cards with progress bars
│   ├── Projects.tsx        # Project cards with hover animations
│   ├── Contact.tsx         # Contact form with validation + social links
│   ├── Footer.tsx          # Links, copyright, back-to-top
│   └── SocialLinks.tsx     # Reusable social icons component
├── data/
│   └── profileData.ts      # ← EDIT THIS FILE to personalize everything
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css               # Tailwind + custom CSS variables
```

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** v18+ ([download](https://nodejs.org))
- **npm** v9+

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output is in the `dist/` folder — deploy to Vercel, Netlify, or any static host.

---

## ✏️ How to Customize

**All personal data lives in one file:**

```
src/data/profileData.ts
```

### Update your info:

| Field | Description |
|---|---|
| `name`, `firstName`, `lastName` | Your full name |
| `title` | Job title shown in typing animation |
| `tagline` | Short one-liner below your name |
| `bio` | About section paragraph |
| `careerObjective` | Career objective paragraph |
| `profileImage` | URL to your photo (or local path) |
| `resumeUrl` | Direct link to your PDF resume |
| `education[]` | Degrees, institutions, years, grades |
| `skills[]` | Name, icon, proficiency %, category |
| `projects[]` | Title, description, tech stack, GitHub/live URLs |
| `socialLinks[]` | GitHub, LinkedIn, Instagram, WhatsApp, etc. |
| `contact` | Email, phone, location, availability text |

### Add/change social links:

```ts
socialLinks: [
  {
    platform: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME',  // ← change this
    icon: 'FaGithub',
    color: '#ffffff',
    label: 'View my code',
  },
  // add more...
]
```

### Add a new skill:

```ts
{ name: 'Vue.js', icon: 'SiVuedotjs', level: 75, category: 'frontend' },
```

Make sure to also add the icon to the `ICON_MAP` in `Skills.tsx` and `SocialLinks.tsx`.

### Add a new project:

```ts
{
  id: 7,
  title: 'My New App',
  description: 'Short description here.',
  technologies: ['React', 'Node.js'],
  githubUrl: 'https://github.com/username/repo',
  liveUrl: 'https://myapp.vercel.app',
  imageColor: 'from-violet-500/20 to-fuchsia-600/20',
  featured: true,
}
```

---

## 🚀 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

## 🎨 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 11 | Animations |
| React Icons | 5 | Icon library |
| React Scroll | 1.9 | Smooth section scrolling |
| Vite | 5 | Build tool |

---

## 📝 License

MIT — free to use for personal and commercial projects.
