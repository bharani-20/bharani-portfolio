import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,
  FaDocker, FaPython, FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiTailwindcss, SiSupabase,
  SiPostgresql, SiNextdotjs,
} from 'react-icons/si';
import type { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const ICON_MAP: Record<string, any> = {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDocker, FaPython, FaFigma,
  SiTypescript, SiJavascript, SiTailwindcss, SiSupabase, SiPostgresql, SiNextdotjs,
};


const CATEGORY_LABELS: Record<string, string> = {
  all: 'All',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools',
};

const CATEGORY_COLORS: Record<string, string> = {
  frontend: '#00E5FF',
  backend: '#7C3AED',
  database: '#F59E0B',
  tools: '#10B981',
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const Icon = ICON_MAP[skill.icon];
  const accentColor = CATEGORY_COLORS[skill.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-5 rounded-xl cursor-default transition-all duration-300"
      style={{
        background: 'rgba(22, 22, 31, 0.8)',
        border: '1px solid rgba(30, 30, 46, 0.8)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top left, ${accentColor}0A, transparent 60%)`,
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-12 h-12 rounded-bl-3xl rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ background: `${accentColor}15` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {Icon ? (
            <Icon size={24} style={{ color: accentColor } as React.CSSProperties} />
          ) : (
            <span className="text-xl font-bold" style={{ color: accentColor }}>
              {skill.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-display font-semibold text-white mb-3 text-sm">{skill.name}</h3>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500 font-mono capitalize">{skill.category}</span>
            <span className="text-xs font-mono" style={{ color: accentColor }}>{skill.level}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden bg-slate-800">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}80)` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(skills.map((s) => s.category)))];
  const filtered = activeFilter === 'all' ? skills : skills.filter((s) => s.category === activeFilter);

  return (
    <div className="py-28 px-5 relative overflow-hidden">
      <div className="orb orb-cyan w-80 h-80 absolute bottom-0 right-0 opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm mb-3 tracking-widest">WHAT I WORK WITH</p>
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <span className="accent-line mx-auto" />
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Technologies I've worked with and continuously improving.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-lg text-sm font-display font-medium transition-all duration-200"
              style={{
                background: activeFilter === cat
                  ? (cat === 'all' ? 'linear-gradient(135deg, #00E5FF, #7C3AED)' : `${CATEGORY_COLORS[cat]}20`)
                  : 'rgba(22, 22, 31, 0.8)',
                border: `1px solid ${activeFilter === cat
                  ? (cat === 'all' ? 'transparent' : CATEGORY_COLORS[cat])
                  : 'rgba(30, 30, 46, 0.8)'
                  }`,
                color: activeFilter === cat
                  ? (cat === 'all' ? '#0A0A0F' : CATEGORY_COLORS[cat])
                  : '#94A3B8',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {CATEGORY_LABELS[cat] || cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
