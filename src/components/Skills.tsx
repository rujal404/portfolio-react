import { useState, useEffect } from 'react';
import { PenTool, Code, Brain, Layers, NotebookPenIcon, Search, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SKILL_ITEMS, ALL_SKILLS_BADGES } from '../data';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'draw':
        return <PenTool className="w-8 h-8 text-indigo-400 mb-4" />;
      case 'code':
        return <Code className="w-8 h-8 text-indigo-400 mb-4" />;
      case 'psychology':
      return <Layers className="w-8 h-8 text-indigo-400 mb-4" />;
      case 'layers':
      default:
        return <NotebookPenIcon className="w-8 h-8 text-indigo-400 mb-4" />;
    }
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <section id="Skills" className="py-24 bg-[#0b1c30] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-3 block">
            EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Technical Proficiency
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Architecting scalable design tokens, establishing highly optimized component systems, and implementing accessible web code.
          </p>
        </div>

        {/* Core Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILL_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
            >
              {getIcon(item.iconName)}
              <h4 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors mb-2">
                {item.name}
              </h4>
              
              {/* Animated Progress indicator */}
              <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="bg-indigo-400 h-full rounded-full group-hover:bg-indigo-300 transition-colors"
                />
              </div>
              <div className="flex justify-between items-center mt-2.5 text-[11px] text-slate-400 font-medium">
                <span>Advanced</span>
                <span>{item.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-competencies Section */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 border-b border-white/10 pb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-200">Competencies & Ecosystem</h3>
              <p className="text-xs text-slate-400 mt-1">Click competencies to toggle filtering or highlights</p>
            </div>
            
            {/* Minimal Search widget inside Skills */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search tools or platforms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all font-sans"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {ALL_SKILLS_BADGES.filter(badge => 
              badge.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((badge, idx) => {
              const isSelected = selectedTag === badge;
              return (
                <button
                  key={idx}
                  onClick={() => handleTagClick(badge)}
                  className={`px-5 py-2.5 text-xs font-semibold rounded-full select-none cursor-pointer transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20 scale-[1.05]'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {badge}
                  {isSelected && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                </button>
              );
            })}
          </div>

          {selectedTag && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <p className="text-xs text-indigo-300">
                You've highlighted <span className="font-bold underline">{selectedTag}</span>. This is heavily integrated into the selected case studies below.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
