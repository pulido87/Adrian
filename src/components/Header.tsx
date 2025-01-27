import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

// Custom YouTube icon component
const YoutubeCustom = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

// Custom TikTok icon component
const TikTokCustom = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo className="text-white h-12" width={120} height={48} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Inicio</NavLink>
            <NavLink href="#about">Sobre Mí</NavLink>
            <NavLink href="#gallery">Galería</NavLink>
            <NavLink href="#events">Eventos</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/perezadriancastillo?igsh=c282aWt1aXd6YzYw"
              className="text-gray-400 hover:text-[#E4405F] transition-colors duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/shorts/S7JKM5QL_Bk?feature=share"
              className="text-gray-400 hover:text-red-600 transition-colors duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
            >
              <YoutubeCustom className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-[#1877F2] transition-colors duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@adrian.mcm?_t=ZP-8tJMfLHxedr&_r=1"
              className="text-gray-400 hover:text-black transition-colors duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on TikTok"
            >
              <TikTokCustom className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/mcm_adrian19831?t=u49QEkYMmPB84IJ5-WShYw&s=09"
              className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#home">Inicio</MobileNavLink>
            <MobileNavLink href="#about">Sobre Mí</MobileNavLink>
            <MobileNavLink href="#gallery">Galería</MobileNavLink>
            <MobileNavLink href="#events">Eventos</MobileNavLink>
            <MobileNavLink href="#contact">Contacto</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm uppercase tracking-wider"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-amber-500 hover:bg-gray-900 transition-colors duration-200"
  >
    {children}
  </a>
);