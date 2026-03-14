import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';
import type { ProfileData } from '../types';
import SocialLinks from './SocialLinks';

interface FooterProps {
  data: ProfileData;
}

const NAV_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: 'rgba(10, 10, 15, 0.95)', borderTop: '1px solid rgba(30, 30, 46, 0.6)' }}>
      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #00E5FF40, #7C3AED40, transparent)' }} />

      {/* Background orbs */}
      <div className="orb orb-cyan w-80 h-80 absolute bottom-0 left-0 opacity-5" />
      <div className="orb orb-purple w-80 h-80 absolute bottom-0 right-0 opacity-5" />

      <div className="max-w-6xl mx-auto px-5 py-16 relative z-10">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Link to="home" smooth duration={600} className="cursor-pointer inline-block mb-4">
              <motion.div
                className="font-display font-bold text-2xl flex items-center gap-1"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-gradient">{data.firstName}</span>
                <span className="text-white">{data.lastName}</span>
                <span className="text-accent-cyan text-3xl leading-none ml-0.5">.</span>
              </motion.div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-body mb-6 max-w-xs">
              {data.tagline}
            </p>
            <SocialLinks links={data.socialLinks} variant="footer" />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className="cursor-pointer"
                  >
                    <motion.span
                      className="text-slate-500 hover:text-accent-cyan text-sm font-body flex items-center gap-2 group transition-colors duration-200"
                      whileHover={{ x: 4 }}
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-accent-cyan transition-colors duration-200"
                      />
                      {item.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { label: data.contact.email, href: `mailto:${data.contact.email}` },
                { label: data.contact.phone, href: `tel:${data.contact.phone}` },
                { label: data.contact.location, href: null },
              ].map(({ label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="text-slate-500 hover:text-accent-cyan text-sm font-body transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-slate-500 text-sm font-body">{label}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Hire me mini CTA */}
            <Link to="contact" smooth duration={600} offset={-70} className="cursor-pointer inline-block mt-6">
              <motion.button
                className="btn-outline text-xs px-4 py-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Hire Me →
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ background: 'rgba(30, 30, 46, 0.8)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-body flex items-center gap-1.5">
            © {currentYear} {data.name}. Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiHeart size={12} className="text-red-500 inline" />
            </motion.span>
            and lots of coffee.
          </p>

          {/* Back to top */}
          <Link to="home" smooth duration={800} className="cursor-pointer">
            <motion.button
              className="flex items-center gap-2 text-slate-500 hover:text-accent-cyan text-xs font-mono tracking-widest transition-colors duration-200 group"
              whileHover={{ y: -2 }}
              aria-label="Back to top"
            >
              BACK TO TOP
              <motion.div
                className="w-7 h-7 rounded-lg flex items-center justify-center group-hover:border-accent-cyan transition-colors duration-200"
                style={{ background: 'rgba(22, 22, 31, 0.8)', border: '1px solid rgba(30, 30, 46, 0.8)' }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiArrowUp size={12} />
              </motion.div>
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
