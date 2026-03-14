import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi';
import type { ProfileData, ContactFormData, FormErrors } from '../types';
import SocialLinks from './SocialLinks';

interface ContactProps {
  data: ProfileData;
}

const validate = (values: ContactFormData): FormErrors => {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  else if (values.name.length < 2) errors.name = 'Name must be at least 2 characters';

  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Invalid email address';

  if (!values.message.trim()) errors.message = 'Message is required';
  else if (values.message.length < 20) errors.message = 'Message must be at least 20 characters';

  return errors;
};

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof ContactFormData]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const INFO_ITEMS = [
    { icon: FiMail, label: 'Email', value: data.contact.email, href: `mailto:${data.contact.email}` },
    { icon: FiPhone, label: 'Phone', value: data.contact.phone, href: `tel:${data.contact.phone}` },
    { icon: FiMapPin, label: 'Location', value: data.contact.location, href: null },
  ];

  return (
    <div className="py-28 px-5 relative overflow-hidden">
      <div className="orb orb-cyan w-96 h-96 absolute top-0 left-0 opacity-8" />
      <div className="orb orb-purple w-96 h-96 absolute bottom-0 right-0 opacity-8" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm mb-3 tracking-widest">LET'S WORK TOGETHER</p>
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <span className="accent-line mx-auto" />
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Availability banner */}
            <div
              className="p-4 rounded-xl flex items-start gap-3"
              style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
            >
              <span className="relative flex h-3 w-3 mt-0.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <div>
                <p className="text-emerald-400 font-mono text-xs font-semibold mb-0.5">Available for work</p>
                <p className="text-slate-400 text-sm">{data.contact.availability}</p>
              </div>
            </div>

            {/* Contact items */}
            {INFO_ITEMS.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl group"
                style={{ background: 'rgba(22, 22, 31, 0.8)', border: '1px solid rgba(30, 30, 46, 0.8)' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                whileHover={{ borderColor: 'rgba(0, 229, 255, 0.3)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0, 229, 255, 0.1)', border: '1px solid rgba(0, 229, 255, 0.2)' }}
                >
                  <Icon size={18} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-sm hover:text-accent-cyan transition-colors font-body">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-body">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div>
              <p className="text-xs text-slate-500 font-mono mb-4 tracking-widest">CONNECT WITH ME</p>
              <SocialLinks links={data.socialLinks} variant="contact" />
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(22, 22, 31, 0.9)', border: '1px solid rgba(30, 30, 46, 0.8)' }}
            >
              {/* Subtle top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }}
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                      style={{ background: 'rgba(0, 229, 255, 0.1)', border: '2px solid rgba(0, 229, 255, 0.3)' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                      <FiCheck size={36} className="text-accent-cyan" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2">
                          NAME <span className="text-accent-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={`input-field ${errors.name && touched.name ? 'error' : ''}`}
                          autoComplete="name"
                        />
                        {errors.name && touched.name && (
                          <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2">
                          EMAIL <span className="text-accent-cyan">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="john@email.com"
                          className={`input-field ${errors.email && touched.email ? 'error' : ''}`}
                          autoComplete="email"
                        />
                        {errors.email && touched.email && (
                          <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        MESSAGE <span className="text-accent-cyan">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell me about your project or just say hi..."
                        rows={6}
                        className={`input-field resize-none ${errors.message && touched.message ? 'error' : ''}`}
                      />
                      <div className="flex justify-between items-center mt-1.5">
                        {errors.message && touched.message ? (
                          <p className="text-red-400 text-xs font-mono">{errors.message}</p>
                        ) : <span />}
                        <span className={`text-xs font-mono ml-auto ${form.message.length < 20 ? 'text-slate-600' : 'text-accent-cyan'}`}>
                          {form.message.length} / 20 min
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      className="w-full btn-primary justify-center py-4 text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
