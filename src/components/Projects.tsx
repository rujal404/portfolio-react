import { useState } from 'react';
import { ArrowRight, X, Calendar, User, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProjectForInquiry: (projectName: string) => void;
}

export default function Projects({ onSelectProjectForInquiry }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleInquiryLink = (projectName: string) => {
    setSelectedProject(null);
    onSelectProjectForInquiry(projectName);
    const target = document.querySelector('#Contact');
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="Projects" className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
            Selected Projects
          </h2>
        </div>
        <p className="max-w-md text-sm text-on-surface-variant leading-relaxed">
          A collection of industry-leading work focused on performance, clarity, and visual impact. Click any project to inspect detailed case studies.
        </p>
      </div>

      {/* Grid displays */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => setSelectedProject(proj)}
            className="group cursor-pointer bg-white border border-outline-variant/30 rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
          >
            {/* Visual Header */}
            <div className="aspect-[1/1.2] overflow-hidden bg-slate-100 relative">
              <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-colors duration-300 z-10" />
              <img
                alt={proj.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                src={proj.image}
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </div>
            </div>

            {/* Description Card */}
            <div className="p-8 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold text-on-surface mt-2 mb-4 leading-snug group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(proj);
                }}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold group/btn select-none mt-auto cursor-pointer"
              >
                View Project
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Detailed Overlay Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-15"
            >
              {/* Top Bar / Sticky header */}
              <div className="sticky top-0 bg-white border-b border-slate-100 flex justify-between items-center px-6 py-4.5 z-20">
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest block uppercase">
                    Case Study
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-on-surface">
                    {selectedProject.title} — {selectedProject.subtitle}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors text-slate-500 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto overflow-x-hidden flex-grow">
                {/* Embedded hero representation */}
                <div className="w-full h-64 md:h-80 relative overflow-hidden bg-slate-100">
                  <img
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    src={selectedProject.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50" />
                </div>

                {/* Grid stats & description details */}
                <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
                  {/* Left Column: Case details block */}
                  <div className="md:col-span-2 space-y-8">
                    {/* Objectives */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        The Challenge
                      </h4>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
                        {selectedProject.details.challenge}
                      </p>
                    </div>

                    {/* Solutions info */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Proposed Solution
                      </h4>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
                        {selectedProject.details.solution}
                      </p>
                    </div>

                    {/* Numeric Outcomes or Impacts */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-indigo-500" />
                        Business Impact & User Outcomes
                      </h4>
                      <div className="grid gap-3">
                        {selectedProject.details.impact.map((imp, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 bg-indigo-50/40 border border-indigo-100/40 p-4 rounded-xl"
                          >
                            <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
                              {imp}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Metadata Sidebar info box */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-6 h-fit">
                    <div className="space-y-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200/50 pb-2">
                        Details & Context
                      </h4>
                      
                      <div className="flex gap-3 items-start">
                        <Briefcase className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 block uppercase">Client</span>
                          <span className="text-xs font-semibold text-slate-700">{selectedProject.details.client}</span>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <User className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 block uppercase">My Role</span>
                          <span className="text-xs font-semibold text-slate-700">{selectedProject.details.role}</span>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <Calendar className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 block uppercase">Timeline</span>
                          <span className="text-xs font-semibold text-slate-700">{selectedProject.details.timeline}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-200/50">
                        <span className="text-[11px] font-bold text-slate-400 block uppercase mb-2">Technologies</span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.details.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-white border border-slate-200 text-[10px] font-semibold text-slate-600 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleInquiryLink(selectedProject.title)}
                      className="w-full bg-primary text-on-primary font-semibold text-xs py-3 rounded-lg hover:bg-opacity-95 transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-1.5 cursor-pointer mt-6"
                    >
                      Inquire About This
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
