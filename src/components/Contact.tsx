import React, { useState } from 'react';
import { Mail, MapPin, Link2, AtSign, Share2, Inbox, Trash2, Send, CheckCircle, RefreshCw, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { ContactSubmission } from '../types';

interface ContactProps {
  preFilledMessage: string;
  onClearPreFill: () => void;
}

export default function Contact({ preFilledMessage, onClearPreFill }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(preFilledMessage || '');
  
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    const saved = localStorage.getItem('portfolio_submissions');
    return saved ? JSON.parse(saved) : [];
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [showAdminInbox, setShowAdminInbox] = useState(false);

  // Sync state if preFilledMessage changes
  React.useEffect(() => {
    if (preFilledMessage) {
      setMessage(preFilledMessage);
    }
  }, [preFilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const newSub: ContactSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [newSub, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('portfolio_submissions', JSON.stringify(updated));

    setIsSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
    onClearPreFill();

    // Clear success banner after 4 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 4500);
  };

  const handleDeleteSub = (id: string) => {
    const filtered = submissions.filter(sub => sub.id !== id);
    setSubmissions(filtered);
    localStorage.setItem('portfolio_submissions', JSON.stringify(filtered));
  };

  return (
    <section id="Contact" className="py-24 bg-[#e5eeff] border-t border-outline-variant/20 scroll-mt-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column: Context texts */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
                CONTACT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mb-6">
                Let's Discuss Your Next High-Impact Project
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                I am currently available for select consulting opportunities and senior-level partnerships. Reach out to start the conversation.
              </p>
            </div>

            {/* Anchors for communication */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-700">{PERSONAL_INFO.location}</span>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-1.5 py-0.5 rounded uppercase">Remote OK</span>
              </div>
            </div>

            {/* Social handles links block */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-primary border border-outline-variant/30 hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105 hover:border-transparent transition-all text-on-surface"
                aria-label="Personal Website URL"
              >
                <Link2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAdminInbox(!showAdminInbox);
                }}
                className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all text-on-surface relative ${
                  showAdminInbox 
                    ? 'bg-primary border-transparent text-white shadow-lg shadow-primary/20' 
                    : 'bg-white hover:bg-primary border-outline-variant/30 hover:text-white hover:shadow-lg hover:shadow-primary/20'
                }`}
                title="View local test inbox submissions"
              >
                <AtSign className="w-5 h-5" />
                {submissions.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-[10px] font-black text-white flex items-center justify-center border-2 border-white animate-bounce">
                    {submissions.length}
                  </span>
                )}
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-primary border border-outline-variant/30 hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105 hover:border-transparent transition-all text-on-surface"
                aria-label="Share Portfolio URL"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Helper for Testers */}
            <div className="p-4.5 bg-indigo-50/60 border border-indigo-100 rounded-xl space-y-1">
              <span className="text-xs font-extrabold text-indigo-600 block">PRO TIP FOR PREVIEWERS</span>
              <p className="text-xs text-slate-600 leading-normal">
                Submissions made on this form are recorded locally in your browser. Tap the <span className="font-bold">@ icon</span> or the button below to review inquiry submissions.
              </p>
              <button 
                onClick={() => setShowAdminInbox(true)}
                className="text-xs font-bold text-primary hover:underline mt-1 cursor-pointer flex items-center gap-1"
              >
                Open Inbox Viewer ({submissions.length} messages) →
              </button>
            </div>
          </div>

          {/* Right Column: Contact form / inbox */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!showAdminInbox ? (
                /* Contact Inquiry form */
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-outline-variant/30 space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-6">
                    <div className="group relative">
                      <label className="text-[11px] font-bold text-on-surface-variant block uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 transition-colors outline-none text-sm text-on-surface placeholder-slate-400 font-sans"
                      />
                    </div>

                    <div className="group relative">
                      <label className="text-[11px] font-bold text-on-surface-variant block uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 transition-colors outline-none text-sm text-on-surface placeholder-slate-400 font-sans"
                      />
                    </div>

                    <div className="group relative">
                      <div className="flex justify-between items-center">
                        <label className="text-[11px] font-bold text-on-surface-variant block uppercase tracking-wider mb-1">
                          Message
                        </label>
                        {preFilledMessage && (
                          <button
                            type="button"
                            onClick={onClearPreFill}
                            className="text-[10px] font-bold text-indigo-500 hover:underline cursor-pointer"
                          >
                            Reset Custom Subject
                          </button>
                        )}
                      </div>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can I help you?"
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 transition-colors outline-none text-sm text-on-surface placeholder-slate-400 resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-opacity-95 text-white py-4 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </button>
                  </div>

                  {/* Toast overlay success */}
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="bg-emerald-50 border border-emerald-150 p-4 rounded-xl flex items-start gap-3 mt-4"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-emerald-800 block">Inquiry Submitted!</span>
                          <span className="text-xs text-emerald-600 leading-snug block mt-0.5">
                            Thank you. Your request is registered locally and can be viewed inside the Local Test Inbox.
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              ) : (
                /* Admin Inbox Panel */
                <motion.div
                  key="admin-inbox"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30"
                >
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Inbox className="w-5 h-5" />
                      <h3 className="font-bold text-sm uppercase tracking-wider text-slate-800">
                        Local Test Inbox
                      </h3>
                    </div>
                    <button
                      onClick={() => setShowAdminInbox(false)}
                      className="p-1 px-2.5 rounded bg-slate-50 border border-slate-100 hover:bg-slate-100/70 text-xs font-bold text-slate-600 cursor-pointer"
                    >
                      Fill Form
                    </button>
                  </div>

                  {submissions.length === 0 ? (
                    <div className="py-16 text-center text-slate-400 space-y-3">
                      <Inbox className="w-10 h-10 mx-auto text-slate-300" />
                      <p className="text-xs">No inquiries submitted yet.</p>
                      <button
                        onClick={() => setShowAdminInbox(false)}
                        className="text-xs font-bold text-primary hover:underline cursor-pointer"
                      >
                        Submit a test request now &rarr;
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                      {submissions.map((sub) => (
                        <div
                          key={sub.id}
                          className="bg-slate-50 border border-slate-100 p-4 rounded-xl relative hover:bg-slate-100/50 transition-colors"
                        >
                          <button
                            onClick={() => handleDeleteSub(sub.id)}
                            className="absolute top-3.5 right-3.5 p-1 text-slate-400 hover:text-red-500 rounded transition-colors cursor-pointer"
                            title="Delete submission"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          
                          <div className="mb-2">
                            <span className="text-xs font-bold text-slate-800 block text-ellipsis overflow-hidden">
                              {sub.name}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 block">
                              {sub.email} • Sent at {sub.timestamp}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 italic border-l-2 border-indigo-200 pl-2 leading-relaxed">
                            "{sub.message}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-100 mt-4 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400">
                      Total: {submissions.length} message(s) cached
                    </span>
                    {submissions.length > 0 && (
                      <button
                        onClick={() => {
                          setSubmissions([]);
                          localStorage.removeItem('portfolio_submissions');
                        }}
                        className="text-[10px] font-bold text-red-500 hover:underline cursor-pointer"
                      >
                        Clear All Submissions
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
