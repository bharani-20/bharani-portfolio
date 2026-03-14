import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaInstagram, FaFacebook,
  FaWhatsapp, FaPhone, FaTwitter, FaYoutube,
} from 'react-icons/fa';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
  variant?: 'hero' | 'footer' | 'contact';
}

const ICON_MAP: Record<string, any> = {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaTwitter,
  FaYoutube,
};


const SocialLinks: React.FC<SocialLinksProps> = ({ links, variant = 'hero' }) => {
  const isHero = variant === 'hero';
  const isContact = variant === 'contact';

  if (isContact) {
    return (
      <div className="flex flex-wrap gap-3">
        {links.map((link, i) => {
          const Icon = ICON_MAP[link.icon];
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target={link.url.startsWith('tel:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg group transition-all duration-300"
              style={{
                background: 'rgba(22, 22, 31, 0.9)',
                border: '1px solid rgba(30, 30, 46, 1)',
              }}
              whileHover={{ y: -2, borderColor: link.color }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              aria-label={link.platform}
            >
              {Icon && (
                <Icon size={16} style={{ color: link.color }} />
              )}
              <span className="text-sm text-slate-400 group-hover:text-white transition-colors font-body">
                {link.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${isHero ? 'justify-center lg:justify-start' : 'justify-center'}`}>
      {links.map((link, i) => {
        const Icon = ICON_MAP[link.icon];
        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target={link.url.startsWith('tel:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300"
            style={{
              background: 'rgba(22, 22, 31, 0.8)',
              border: '1px solid rgba(30, 30, 46, 0.8)',
            }}
            whileHover={{
              y: -3,
              color: link.color,
              borderColor: link.color,
              boxShadow: `0 8px 20px ${link.color}25`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isHero ? 1 + i * 0.1 : i * 0.07 }}
            aria-label={link.platform}
          >
            {Icon && <Icon size={18} />}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
