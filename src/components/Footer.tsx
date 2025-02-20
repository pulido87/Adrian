import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo className="text-white h-12" width={120} height={48} />
            <p className="text-sm">
              Brindando experiencias mágicas y musicales inolvidables para todo tipo de eventos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-amber-500 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-amber-500 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">Sobre Mí</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-500 transition-colors">Galería</a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-500 transition-colors">Eventos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-amber-500 mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-500" />
                <a href="tel:+19048971146" className="hover:text-amber-500 transition-colors">
                  +1 904 897 1146
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="mailto:acastillo9090@gmail.com" className="hover:text-amber-500 transition-colors">
                  acastillo9090@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>Disponible para eventos en todo el mundo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {currentYear} Adrian MCM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}