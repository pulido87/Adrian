import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1920"
        >
          <source
            src="https://player.vimeo.com/external/459389137.hd.mp4?s=865d2765c46d6a64c3c2590c0b65839e22c26bdf&profile_id=175"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white mb-6">
          Donde la <span className="text-amber-500">Música</span> se une con la <span className="text-amber-500">Magia</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Vive una experiencia inolvidable a través del arte musical y las ilusiones místicas
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors duration-200 flex items-center gap-2">
            Reservar Show <ArrowRight className="h-5 w-5" />
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 flex items-center gap-2">
            Próximos Eventos <Calendar className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}