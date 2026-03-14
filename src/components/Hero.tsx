import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { ProfileData } from '../types';
import SocialLinks from './SocialLinks';

interface HeroProps {
  data: ProfileData;
}

const TYPING_WORDS = ['Full Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor', 'Problem Solver'];

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background orbs */}
      <motion.div
        className="orb orb-cyan w-96 h-96 absolute top-20 -right-20"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-purple w-96 h-96 absolute -bottom-20 -left-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-5 py-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-sm font-mono">{data.contact.availability}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold leading-none mb-4"
            >
              <span className="text-6xl sm:text-7xl lg:text-8xl text-white block">
                {data.firstName}
              </span>
              <span className="text-6xl sm:text-7xl lg:text-8xl text-gradient block">
                {data.lastName}
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <span className="font-mono text-xl text-slate-300">
                {displayText}
                <span className="cursor-blink text-accent-cyan">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              {data.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href={data.resumeUrl}
                download
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FiDownload size={16} />
                Download Resume
              </motion.a>
              <Link to="projects" smooth duration={700} offset={-70} className="cursor-pointer">
                <motion.button
                  className="btn-outline"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View Projects
                  <FiArrowDown size={14} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <SocialLinks links={data.socialLinks} variant="hero" />
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-dashed border-accent-cyan/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner ring */}
            <motion.div
              className="absolute inset-[-36px] rounded-full border border-dashed border-accent-purple/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            />

            {/* Floating dots on ring */}
            {[0, 90, 180, 270].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#00E5FF' : '#7C3AED',
                  top: '50%',
                  left: '50%',
                  transformOrigin: `0 ${-120 + (i % 2) * 40}px`,
                  marginLeft: '-6px',
                  marginTop: '-6px',
                }}
                animate={{ rotate: deg + 360 }}
                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            {/* Profile image container */}
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                border: '2px solid rgba(0, 229, 255, 0.3)',
                boxShadow: '0 0 60px rgba(0, 229, 255, 0.1), 0 0 120px rgba(124, 58, 237, 0.1)',
              }}
            >
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-full h-full object-cover"
                style={{ background: '#0A0A0F' }}
              />
              {/* Image overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,15,0.3))' }}
              />
            </motion.div>

            {/* Stats card */}
            <motion.div
              className="absolute -bottom-6 -right-6 card-glass rounded-xl px-4 py-3 text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-2xl font-display font-bold text-accent-cyan">1+</p>
              <p className="text-xs text-slate-400">Years Exp.</p>
            </motion.div>

            <motion.div
              className="absolute -top-4 -left-6 card-glass rounded-xl px-4 py-3 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-2xl font-display font-bold text-accent-purple">3+</p>
              <p className="text-xs text-slate-400">Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
