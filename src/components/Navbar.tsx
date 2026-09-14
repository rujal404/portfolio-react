import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  onPrintResume: () => void;
  activeSection: string;
}

export default function Navbar({ onPrintResume, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#About' },
    { name: 'Education', href: '#Education' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#Contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-outline-variant/35 shadow-sm py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold tracking-tight text-on-surface hover:text-primary transition-colors duration-200"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection.toLowerCase() === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-sm font-medium transition-colors duration-200 py-1 border-b-2 ${
                  isActive
                    ? 'text-primary border-primary'
                    : 'text-on-surface-variant/80 hover:text-primary border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <button
            onClick={onPrintResume}
            className="bg-primary text-on-primary px-6 py-2.5 rounded shadow-sm hover:opacity-90 transition-all text-sm font-medium flex items-center gap-1 cursor-pointer"
          >
            Download Resume
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface hover:text-primary transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[73px] bg-white border-b border-outline-variant/50 shadow-lg px-6 py-6 space-y-4 md:hidden transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection.toLowerCase() === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-base font-semibold py-2 transition-colors duration-200 ${
                  isActive ? 'text-primary pl-2 border-l-2 border-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <hr className="border-slate-100 my-2" />
          <button
            onClick={() => {
              setIsOpen(false);
              onPrintResume();
            }}
            className="w-full bg-primary text-on-primary py-3 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-primary/10"
          >
            Download Resume
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
