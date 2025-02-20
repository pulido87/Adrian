import React, { useEffect, useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const scrolled = window.scrollY;
        titleRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        titleRef.current.style.opacity = `${1 - scrolled / 500}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video con efecto parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <video
          className="w-full h-full object-cover scale-105 transform transition-transform duration-1000"
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

      {/* Elementos de fondo animados */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Contenido principal con animaciones */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 animate-glow"
        >
          Donde la <span className="text-amber-500 animate-scale">Música</span> se une con la <span className="text-amber-500 animate-scale animation-delay-2000">Magia</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slideIn">
          Vive una experiencia inolvidable a través del arte musical y las ilusiones místicas
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover-lift hover-glow flex items-center gap-2">
            Reservar Show <ArrowRight className="h-5 w-5 animate-wave" />
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover-lift flex items-center gap-2">
            Próximos Eventos <Calendar className="h-5 w-5 animate-wave animation-delay-2000" />
          </button>
        </div>
      </div>

      {/* Indicador de desplazamiento animado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-amber-500 to-transparent animate-glow" />
        </div>
      </div>
    </section>
  );
}