import { motion } from 'motion/react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data';

export default function ExperienceEducation() {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Experience Timeline */}
        <div id="Experience">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
            CAREER PATH
          </span>
          <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-12">
            Professional Experience
          </h2>
          
          <div className="relative border-l-2 border-outline-variant/40 ml-4 space-y-12 pb-2">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-10 group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm group-hover:scale-125 transition-all duration-300" />
                
                <span className="text-xs font-bold text-primary tracking-wider block mb-1">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-on-surface-variant mb-4">
                  {exp.company}
                </p>
                <ul className="space-y-2.5 text-on-surface-variant text-sm list-disc list-outside ml-4 leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="hover:text-on-surface transition-colors">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Credentials */}
        <div id="Education" className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
            CREDENTIALS
          </span>
          <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-12">
            Education
          </h2>
          
          <div className="space-y-8 flex-grow">
            {EDUCATION_DATA.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 bg-white rounded-xl border border-outline-variant/30 hover:border-primary/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-on-surface">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">
                    {edu.institution} <span className="text-outline mx-1.5">•</span> {edu.period}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-50">
                  <p className="text-xs font-semibold text-primary/95 bg-primary/5 py-2 px-3 rounded-md leading-relaxed">
                    {edu.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
