import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-brand-500 transition-colors group cursor-default"
    >
      <div className="bg-brand-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors text-brand-500 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};