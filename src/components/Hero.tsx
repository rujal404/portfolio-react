import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onPrintResume: () => void;
}

const typingTexts: string[] = [
  'UI/UX Designer',
  'Frontend Developer',
  'E-commerce Specialist',
  'FPV Drone Operator',
  'Musician'
];

export default function Hero({ onPrintResume }: HeroProps) {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#Projects');
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="Hero" className="pt-36 pb-24 md:py-36 max-w-[1200px] mx-auto px-6 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Texts Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
            INTRODUCING MYSELF & WORK
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-on-surface leading-tight tracking-tight mb-6">
            Hi I'm{' '}
            <span className="text-primary hover:opacity-90 transition-opacity">Rujal Tamrakar</span>
          </h1>
          
          {/* Type Animation */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6 min-h-[40px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-lg">
            Self-driven, quick starter, passionate newbie in tech world with a curious mind who enjoys solving a complex and challenging real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
               onClick={onPrintResume}
               className="bg-primary hover:bg-opacity-95 text-on-primary px-8 py-4 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-xl shadow-primary/20 cursor-pointer"
            >
              Download Resume
            </button>
            <a
              href="#Projects"
              onClick={handleScrollToProjects}
              className="border border-outline-variant hover:border-primary text-on-surface px-8 py-4 rounded-lg font-medium text-sm hover:bg-surface-low transition-all inline-flex items-center gap-2"
            >
              View Work
              <ArrowDown className="w-4 h-4 text-on-surface/80" />
            </a>
          </div>
        </motion.div>

        {/* Headshot Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
            {/* Glowing active pulse decoration around image */}
            <div className="absolute inset-0 bg-primary/5 rounded-full -m-4 sm:-m-6 animate-pulse" />
            <div className="absolute inset-x-2 bottom-0 h-4 bg-primary/20 blur-xl rounded-full" />
            
            <img
              alt="Professional Designer Headshot"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
              src={PERSONAL_INFO.profileImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
