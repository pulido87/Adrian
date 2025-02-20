import React, { useState } from 'react';
import { Star, Clock, Users, Sparkles, Music, Wand2, Check } from 'lucide-react';

interface Package {
  name: string;
  price: string;
  description: string;
  duration: string;
  maxAttendees: string;
  featured?: boolean;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Básico",
    price: "$299",
    description: "Perfecto para eventos pequeños y celebraciones íntimas",
    duration: "1 hora",
    maxAttendees: "Hasta 30 personas",
    features: [
      "Show de magia interactiva",
      "Música ambiental grabada",
      "Trucos con cartas y monedas",
      "Participación del público",
      "Equipo de sonido básico"
    ]
  },
  {
    name: "Premium",
    price: "$499",
    description: "Ideal para eventos medianos y celebraciones especiales",
    duration: "2 horas",
    maxAttendees: "Hasta 50 personas",
    featured: true,
    features: [
      "Show de magia profesional",
      "Música en vivo (guitarra)",
      "Trucos con cartas, monedas y cuerdas",
      "Efectos especiales de cerca",
      "Equipo de sonido profesional",
      "Globoflexia básica",
      "Fotografías con el artista",
      "Momento especial para el homenajeado"
    ]
  },
  {
    name: "Deluxe",
    price: "$799",
    description: "La experiencia completa para grandes eventos",
    duration: "3 horas",
    maxAttendees: "Hasta 100 personas",
    features: [
      "Show de magia profesional completo",
      "Música en vivo personalizada",
      "Gran ilusionismo",
      "Efectos especiales avanzados",
      "Equipo de sonido e iluminación",
      "Globoflexia avanzada",
      "Fotografías y videos del show",
      "Momento especial personalizado",
      "Meet & Greet posterior al show",
      "Serenata especial"
    ]
  }
];

export default function Packages() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  return (
    <section id="packages" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl font-serif text-amber-500 mb-4 relative inline-block">
            Paquetes Disponibles
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <div className="flex justify-center gap-4 mb-6">
            <Star className="h-6 w-6 text-amber-500 animate-pulse" />
            <Wand2 className="h-6 w-6 text-amber-500 animate-bounce animation-delay-1000" />
            <Music className="h-6 w-6 text-amber-500 animate-pulse animation-delay-2000" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige el paquete que mejor se adapte a tus necesidades y haz de tu evento algo inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transform transition-all duration-500 ${
                hoveredPackage === index ? 'scale-105 z-20' : 'scale-100 z-10'
              } ${
                pkg.featured
                  ? 'bg-gradient-to-br from-amber-500/20 to-purple-600/20 border-2 border-amber-500'
                  : 'bg-gray-900/50'
              }`}
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-amber-500/0 to-purple-600/0 transition-opacity duration-500 ${
                hoveredPackage === index ? 'opacity-20' : 'opacity-0'
              }`} />

              {pkg.featured && (
                <div className="absolute top-4 right-4 animate-bounce animation-delay-1000">
                  <div className="bg-amber-500 text-black text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                    Más Popular
                  </div>
                </div>
              )}

              <div className="p-8 relative">
                <h3 className="text-2xl font-serif text-amber-500 mb-2 transform transition-all duration-300 hover:scale-110 inline-block">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white transform transition-all duration-300 hover:scale-110 inline-block">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 ml-2">USD</span>
                </div>
                <p className="text-gray-300 mb-6">{pkg.description}</p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-300 transform transition-all duration-300 hover:translate-x-2">
                    <Clock className="h-5 w-5 text-amber-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 transform transition-all duration-300 hover:translate-x-2">
                    <Users className="h-5 w-5 text-amber-500" />
                    <span>{pkg.maxAttendees}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-500 animate-spin-slow" />
                    Incluye:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 transform transition-all duration-300 hover:translate-x-2"
                      >
                        <Check className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`block text-center py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      pkg.featured
                        ? 'bg-amber-500 text-black hover:bg-amber-400'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Reservar Ahora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center transform transition-all duration-700 hover:scale-105">
          <p className="text-gray-300 mb-4">
            ¿Necesitas un paquete personalizado?
          </p>
          <p className="text-gray-400">
            Contáctanos para crear una experiencia única que se ajuste perfectamente a tus necesidades y presupuesto.
          </p>
        </div>
      </div>
    </section>
  );
}