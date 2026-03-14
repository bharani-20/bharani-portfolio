import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiTarget, FiUser, FiAward } from 'react-icons/fi';
import type { ProfileData } from '../types';

interface AboutProps {
  data: ProfileData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
  };

  return (
    <div className="py-28 px-5 relative overflow-hidden">
      {/* Background accent */}
      <div className="orb orb-purple w-96 h-96 absolute top-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm mb-3 tracking-widest">GET TO KNOW ME</p>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <span className="accent-line mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + Objective */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio */}
            <motion.div variants={itemUp} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0, 229, 255, 0.1)', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                  <FiUser size={18} className="text-accent-cyan" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">Introduction</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-body">
                {data.bio}
              </p>
            </motion.div>

            {/* Career Objective */}
            <motion.div variants={itemUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                  <FiTarget size={18} className="text-accent-purple" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">Career Objective</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-body">
                {data.careerObjective}
              </p>
            </motion.div>

            {/* Quick info chips */}
            <motion.div variants={itemUp} className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: data.name },
                { label: 'Email', value: data.contact.email },
                { label: 'Location', value: data.contact.location },
                { label: 'Phone', value: data.contact.phone },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(22, 22, 31, 0.8)', border: '1px solid rgba(30, 30, 46, 0.8)' }}
                >
                  <p className="text-xs text-slate-500 font-mono mb-1">{label}</p>
                  <p className="text-sm text-white font-body truncate">{value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemUp} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <FiBook size={18} className="text-accent-amber" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Education</h3>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-6">
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(to bottom, #00E5FF, #7C3AED, transparent)' }}
              />

              {data.education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={itemUp}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[1.6rem] top-3 w-3 h-3 rounded-full border-2"
                    style={{
                      background: i === 0 ? '#00E5FF' : '#7C3AED',
                      borderColor: i === 0 ? '#00E5FF' : '#7C3AED',
                      boxShadow: `0 0 12px ${i === 0 ? '#00E5FF' : '#7C3AED'}50`,
                    }}
                  />

                  <div
                    className="p-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(22, 22, 31, 0.8)',
                      border: '1px solid rgba(30, 30, 46, 0.8)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-display font-semibold text-white">{edu.institution}</h4>
                      <span className="text-xs font-mono text-accent-cyan bg-cyan-500/10 px-2 py-0.5 rounded flex-shrink-0">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-1">
                      {edu.degree} in {edu.field}
                    </p>
                    {edu.grade && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <FiAward size={12} className="text-accent-amber" />
                        <span className="text-accent-amber text-xs font-mono">{edu.grade}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
