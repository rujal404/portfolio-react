import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Biography() {
  return (
    <section id="About" className="py-24 bg-surface-low border-y border-outline-variant/20">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
            BIOGRAPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mb-8">
            Creating Seamless Digital Experiences for Modern Users
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-6">
            {PERSONAL_INFO.bioLong}
          </p>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {PERSONAL_INFO.bioExtra}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
