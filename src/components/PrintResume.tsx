import React from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, ALL_SKILLS_BADGES } from '../data';

interface PrintResumeProps {
  onBack: () => void;
}

export default function PrintResume({ onBack }: PrintResumeProps) {
  React.useEffect(() => {
    // Scroll to top when view is opened
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans p-6 md:p-16 max-w-4xl mx-auto shadow-sm border border-slate-100">
      {/* Top Controls: Invisible during print */}
      <div className="no-print flex justify-between items-center bg-slate-50 p-4 mb-10 rounded-lg border border-slate-200">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Print Preview</span>
          <span className="text-sm text-slate-600">This layout is fully optimized for paper printing, exporting to PDF, or sharing.</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-4 py-2 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded text-sm transition-colors cursor-pointer font-medium"
          >
            Back to Portfolio
          </button>
          <button
            onClick={() => window.print()}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded text-sm shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
          >
            {/* Print icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
            </svg>
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Actual printable layout */}
      <header className="border-b-2 border-slate-200 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{PERSONAL_INFO.name}</h1>
          <p className="text-xl font-medium text-indigo-600 mt-1">{PERSONAL_INFO.title}</p>
        </div>
        <div className="text-left md:text-right text-sm text-slate-600 space-y-1">
          <p className="flex items-center md:justify-end gap-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v11z" />
            </svg>
            {PERSONAL_INFO.email}
          </p>
          <p className="flex items-center md:justify-end gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            {PERSONAL_INFO.contact}
          </p>
          <p className="flex items-center md:justify-end gap-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {PERSONAL_INFO.location}
          </p>
          <p className="flex items-center md:justify-end gap-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            https://rujaltamrakar.com.np
          </p>
        </div>
      </header>

      {/* Summary Profile */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Professional Summary</h2>
        <p className="text-slate-700 leading-relaxed text-sm">
          {PERSONAL_INFO.bioLong} {PERSONAL_INFO.bioExtra}
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-100 pb-1">Work Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-sm text-indigo-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{exp.period}</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-2 text-slate-600 text-sm space-y-1">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-100 pb-1">Education</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="border-l-2 border-indigo-200 pl-3">
              <h3 className="text-sm font-bold text-slate-900">{edu.degree}</h3>
              <p className="text-xs text-slate-600">{edu.institution} | {edu.period}</p>
              <p className="text-xs text-indigo-600 mt-1 italic">{edu.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skillset list */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-100 pb-1">Technical Expertise / Core Skills</h2>
        <div className="flex flex-wrap gap-2">
          {ALL_SKILLS_BADGES.map((skill, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded font-medium border border-slate-200">
              {skill}
            </span>
          ))}
          <span className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded font-medium border border-slate-200">UI/UX Architecture</span>
          <span className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded font-medium border border-slate-200">Design Systems Scaling</span>
          <span className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded font-medium border border-slate-200">User Journey Mapping</span>
          <span className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded font-medium border border-slate-200">W3C Accessibility Checklist</span>
        </div>
      </section>

      {/* Professional Projects Summary */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-100 pb-1">Key Achievements & Projects</h2>
        <div className="space-y-3">
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Aether Finance</span>
            <p className="text-xs text-slate-700">Redesigned the complex web trading cockpit, eliminating 35% visual noise and helping managers process real-time transaction markers 32% faster with absolute clarity.</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Pulse Health</span>
            <p className="text-xs text-slate-700">Collaboratively built a medical visual framework, creating 100% WCAG AA standard screens and lowering appointment booking dropout counters by 42%.</p>
          </div>
        </div>
      </section>

      <footer className="mt-12 pt-4 border-t border-slate-200 text-center text-xs text-slate-400">
        <p>This resume was generated dynamically from the professional digital portfolio.</p>
      </footer>
    </div>
  );
}
