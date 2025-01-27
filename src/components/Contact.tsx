import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

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

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?auto=format&fit=crop&q=80&w=1920"
          alt="Fondo mágico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-500 mb-4">Contacto</h2>
          <p className="text-xl text-gray-300">¡Haz que tu evento sea mágico!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-serif text-amber-500 mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-500 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-gray-400">Teléfono</p>
                  <a href="tel:+19048971146" className="text-white hover:text-amber-500 transition-colors">
                    +1 904 897 1146
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-amber-500 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-gray-400">Correo Electrónico</p>
                  <a href="mailto:acastillo9090@gmail.com" className="text-white hover:text-amber-500 transition-colors">
                    acastillo9090@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-amber-500 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-gray-400">Disponible para</p>
                  <p className="text-white">Eventos en todo el mundo</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Sígueme en redes sociales</p>
                <div className="flex items-center space-x-6">
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
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-serif text-amber-500 mb-6">Envíame un Mensaje</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-semibold py-3 rounded-lg hover:bg-amber-400 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}