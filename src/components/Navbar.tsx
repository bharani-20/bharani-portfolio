import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';
import type { NavItem } from '../types';

interface NavbarProps {
  name: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const firstName = name.split(' ')[0];
  const lastName = name.split(' ').slice(1).join(' ');

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 backdrop-blur-xl border-b'
            : 'py-5'
        }`}
        style={{
          background: scrolled ? 'rgba(10, 10, 15, 0.92)' : 'transparent',
          borderColor: scrolled ? 'rgba(30, 30, 46, 0.6)' : 'transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="home" smooth duration={600} className="cursor-pointer">
            <motion.div
              className="font-display font-bold text-xl flex items-center gap-1"
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-gradient">{firstName}</span>
              <span className="text-white">{lastName}</span>
              <span className="text-accent-cyan text-2xl leading-none ml-0.5">.</span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-70}
                  spy
                  onSetActive={() => setActiveSection(item.to)}
                  className="cursor-pointer"
                >
                  <motion.span
                    className={`relative px-4 py-2 rounded-lg text-sm font-body font-medium block transition-colors duration-200 ${
                      activeSection === item.to
                        ? 'text-accent-cyan'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {item.label}
                    {activeSection === item.to && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-4 right-4 h-px rounded-full"
                        style={{ background: 'linear-gradient(90deg, #00E5FF, #7C3AED)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="contact" smooth duration={600} offset={-70} className="cursor-pointer">
                <motion.button
                  className="btn-primary ml-3 text-xs"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Hire Me
                </motion.button>
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden text-white p-2 rounded-lg"
            style={{ background: 'rgba(30, 30, 46, 0.6)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(10, 10, 15, 0.98)', backdropFilter: 'blur(20px)' }}
          >
            {/* Decorative orbs */}
            <div className="orb orb-cyan w-64 h-64 top-1/4 -right-20 opacity-30" />
            <div className="orb orb-purple w-64 h-64 bottom-1/4 -left-20 opacity-20" />

            <div className="flex flex-col items-center justify-center h-full gap-6 relative z-10">
              <p className="text-slate-500 text-xs font-mono mb-4 tracking-widest uppercase">Navigation</p>
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer"
                  >
                    <span className="font-display font-bold text-3xl text-white hover:text-accent-cyan transition-colors duration-200 block text-center">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.08 }}
              >
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer"
                >
                  <button className="btn-primary mt-4">Hire Me</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
