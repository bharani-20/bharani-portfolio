import type { ProfileData } from '../types';
import profileImage from "../assets/dada.png.jpeg";

// ╔═══════════════════════════════════════════════════════════╗
// ║          EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO       ║
// ╚═══════════════════════════════════════════════════════════╝


export const profileData: ProfileData = {
  // ─── Personal Info ─────────────────────────────────────────
  name: 'Bharani V',
  firstName: 'Bharani',
  lastName: 'V',  
  title: 'Full Stack Developer',
  tagline: 'I craft elegant web experiences with clean code & bold design.',
  bio: `I'm a passionate Full Stack Developer with 3+ years of experience building
  modern web applications. I love turning complex problems into simple, beautiful
  solutions. When I'm not coding, you'll find me contributing to open source,
  exploring new technologies, or sketching UI concepts.`,
  careerObjective: `Seeking a challenging software engineering role where I can leverage my
  full-stack expertise to build products that make a real impact. I thrive in
  collaborative environments and am passionate about writing maintainable,
  scalable code that solves real problems.`,

  // ─── Profile Image ─────────────────────────────────────────
  // Replace with your actual image URL or import a local image
  profileImage: profileImage,

  // ─── Resume ────────────────────────────────────────────────
  // Add your Google Drive / Dropbox / direct link to your resume PDF
  resumeUrl: '#',

  // ─── Education ─────────────────────────────────────────────
  education: [
    {
      institution: 'Nandha engineering college ',
      degree: "B.Tech",
      field: 'Information Technology',
      year: '2024 – 2028 ',
      grade: '8.2 CGPA',
    },
    {
      institution: 'Mangalam Higher Secondary School',
      degree: 'XII (Bio-maths)',
      field: 'Physics, Chemistry, Maths, Biology',
      year: '2023 – 2024',
      grade: '75%',
    },
  ],

  // ─── Skills ────────────────────────────────────────────────
  skills: [
    { name: 'React', icon: 'FaReact', level: 75, category: 'frontend' },
    { name: 'TypeScript', icon: 'SiTypescript', level: 70, category: 'frontend' },
    { name: 'JavaScript', icon: 'SiJavascript', level: 85, category: 'frontend' },
    { name: 'HTML', icon: 'FaHtml5', level: 95, category: 'frontend' },
    { name: 'CSS', icon: 'FaCss3Alt', level: 90, category: 'frontend' },
    { name: 'JAVASCRIPT', icon: 'FaCss3Alt', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 67, category: 'frontend' },
    { name: 'Node.js', icon: 'FaNodeJs', level: 75, category: 'backend' },
    { name: 'Python', icon: 'FaPython', level: 50, category: 'backend' },
    { name: 'Supabase', icon: 'SiSupabase', level: 75, category: 'database' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', level: 75, category: 'database' },
    { name: 'Git', icon: 'FaGitAlt', level: 90, category: 'tools' },
    { name: 'Docker', icon: 'FaDocker', level: 50, category: 'tools' },
    { name: 'Next.js', icon: 'SiNextdotjs', level: 50, category: 'frontend' },
    { name: 'Figma', icon: 'FaFigma', level: 90, category: 'tools' },
  ],

  // ─── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: 'DevCollab Platform',
      description: 'A real-time collaboration tool for developers with live code sharing, video calls, and project management built into one streamlined workspace.',
      technologies: ['React', 'TypeScript', 'Supabase', 'WebRTC', 'Tailwind'],
      githubUrl: 'https://github.com/username/devcollab',
      liveUrl: 'https://devcollab.vercel.app',
      imageColor: 'from-cyan-500/20 to-blue-600/20',
      featured: true,
    },
    {
      id: 2,
      title: 'AI Content Studio',
      description: 'Content generation platform powered by LLMs. Generate blog posts, social copy, and email campaigns with brand voice consistency.',
      technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Stripe', 'TypeScript'],
      githubUrl: 'https://github.com/username/ai-studio',
      liveUrl: 'https://aistudio.vercel.app',
      imageColor: 'from-purple-500/20 to-pink-600/20',
      featured: true,
    },
    {
      id: 3,
      title: 'Finance Tracker',
      description: 'Personal finance dashboard with expense categorization, budget tracking, visual analytics, and bank statement import.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'JWT'],
      githubUrl: 'https://github.com/username/finance-tracker',
      liveUrl: 'https://myfinance.vercel.app',
      imageColor: 'from-emerald-500/20 to-teal-600/20',
      featured: false,
    },
    {
      id: 4,
      title: 'ShopSphere E-Commerce',
      description: 'Full-featured e-commerce solution with product management, cart system, Stripe payments, and admin dashboard.',
      technologies: ['Next.js', 'Stripe', 'Supabase', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/username/shopsphere',
      liveUrl: 'https://shopsphere.vercel.app',
      imageColor: 'from-amber-500/20 to-orange-600/20',
      featured: false,
    },
    {
      id: 5,
      title: 'DevBlog CMS',
      description: 'Markdown-based blogging platform with syntax highlighting, tag filtering, RSS feed, and a clean reading experience.',
      technologies: ['Next.js', 'MDX', 'TypeScript', 'Vercel', 'Tailwind'],
      githubUrl: 'https://github.com/username/devblog',
      liveUrl: 'https://devblog.vercel.app',
      imageColor: 'from-sky-500/20 to-indigo-600/20',
      featured: false,
    },
    {
      id: 6,
      title: 'Task Flow App',
      description: 'Kanban-style project management app with drag-and-drop, real-time updates, team collaboration, and time tracking.',
      technologies: ['React', 'TypeScript', 'Supabase', 'DnD Kit', 'Zustand'],
      githubUrl: 'https://github.com/username/taskflow',
      liveUrl: 'https://taskflow.vercel.app',
      imageColor: 'from-rose-500/20 to-red-600/20',
      featured: false,
    },
  ],

  // ─── Social Links ───────────────────────────────────────────
  // Replace URLs with your own profiles
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/bharani-20',
      icon: 'FaGithub',
      color: '#ffffff',
      label: 'View my code',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bharani-vivekanadan-a1558a353?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: 'FaLinkedin',
      color: '#0A66C2',
      label: 'Connect professionally',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/bharan_2007?igsh=aWR2c3d2anVpaWFj',
      icon: 'FaInstagram',
      color: '#E1306C',
      label: 'Follow on Instagram',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/share/1CB44QUAcK/',
      icon: 'FaFacebook',
      color: '#1877F2',
      label: 'Friend on Facebook',
    },
    { 
      platform: 'WhatsApp',
      url: 'https://wa.me/919597522007',
      icon: 'FaWhatsapp',
      color: '#25D366',
      label: 'Chat on WhatsApp',
    },
    {
      platform: 'Phone',
      url: 'tel:+919597522007',
      icon: 'FaPhone',
      color: '#00E5FF',
      label: '+91 95975 22007',
    },
  ],

  // ─── Contact ────────────────────────────────────────────────
  contact: {
    email: 'bharanivivekanadan@gmail.com',
    phone: '+91 95975 22007',
    location: 'Erode, Tamil Nadu, India',
    availability: 'Open to full-time & freelance opportunities',
  },
};
