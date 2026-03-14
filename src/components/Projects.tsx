import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: 'rgba(22, 22, 31, 0.9)',
        border: '1px solid rgba(30, 30, 46, 0.8)',
        boxShadow: hovered ? '0 20px 60px rgba(0, 0, 0, 0.4)' : 'none',
        transform: hovered ? 'translateY(-8px)' : 'none',
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(0, 229, 255, 0.12)', border: '1px solid rgba(0, 229, 255, 0.25)', color: '#00E5FF' }}>
          <HiSparkles size={10} />
          Featured
        </div>
      )}

      {/* Project image/banner */}
      <div className={`relative h-44 bg-gradient-to-br ${project.imageColor} flex items-center justify-center overflow-hidden`}>
        {/* Animated grid overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <motion.div
          animate={{ rotate: hovered ? 10 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <FiCode size={48} className="text-white/20" />
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{ background: 'rgba(10, 10, 15, 0.9)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={16} />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00E5FF, #7C3AED)',
              color: '#0A0A0F',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiExternalLink size={16} />
            Live
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 font-body">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'rgba(30, 30, 46, 0.6)' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-200"
          >
            <FiGithub size={14} />
            View Code
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-accent-cyan hover:text-white transition-colors duration-200"
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="py-28 px-5 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 absolute top-1/2 left-0 opacity-10" />
      <div className="orb orb-cyan w-64 h-64 absolute bottom-0 right-1/4 opacity-8" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm mb-3 tracking-widest">WHAT I'VE BUILT</p>
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <span className="accent-line mx-auto" />
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            A curated selection of projects I've crafted with passion.
          </p>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </AnimatePresence>

        {/* Show more button */}
        {projects.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
            </motion.button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          className="mt-14 p-8 rounded-2xl text-center"
          style={{
            background: 'rgba(22, 22, 31, 0.6)',
            border: '1px dashed rgba(0, 229, 255, 0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-400 mb-4 font-body">
            Want to see more? Check out my GitHub for all repositories.
          </p>
          <motion.a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiGithub size={16} />
            Visit GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
