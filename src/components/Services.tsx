import React from 'react';
import { Music, Wand2, PartyPopper, Users, Gift, BellRing as Ring, Baby, Calendar } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  idealFor: string[];
  duration: string;
}

const services: Service[] = [
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: "Fiestas Infantiles",
    description: "Shows mágicos y musicales especialmente diseñados para entretener y asombrar a los más pequeños.",
    features: [
      "Magia interactiva y participativa",
      "Música infantil en vivo",
      "Juegos y dinámicas grupales",
      "Trucos especiales para niños",
      "Globoflexia básica"
    ],
    idealFor: [
      "Cumpleaños infantiles",
      "Eventos escolares",
      "Fiestas familiares",
      "Campamentos de verano"
    ],
    duration: "1-2 horas"
  },
  {
    icon: <Ring className="h-8 w-8" />,
    title: "Bodas y Compromisos",
    description: "Entretenimiento elegante y sofisticado para hacer de tu día especial un momento inolvidable.",
    features: [
      "Magia close-up durante el cocktail",
      "Música romántica en vivo",
      "Shows personalizados",
      "Serenatas especiales",
      "Repertorio personalizado"
    ],
    idealFor: [
      "Ceremonias de boda",
      "Fiestas de compromiso",
      "Aniversarios",
      "Cenas románticas"
    ],
    duration: "2-4 horas"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Eventos Corporativos",
    description: "Shows profesionales que combinan magia y música para eventos empresariales de alto nivel.",
    features: [
      "Magia corporativa profesional",
      "Música ambiental en vivo",
      "Shows de mentalismo",
      "Presentaciones interactivas",
      "Adaptación a la marca"
    ],
    idealFor: [
      "Fiestas de empresa",
      "Lanzamientos de productos",
      "Conferencias",
      "Cenas de gala"
    ],
    duration: "2-3 horas"
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Baby Showers",
    description: "Celebraciones especiales con un toque mágico y musical para futuros padres y sus invitados.",
    features: [
      "Magia temática",
      "Música suave en vivo",
      "Juegos para invitados",
      "Momentos especiales",
      "Ambiente familiar"
    ],
    idealFor: [
      "Baby showers",
      "Revelaciones de género",
      "Fiestas pre-mamá",
      "Celebraciones familiares"
    ],
    duration: "1-2 horas"
  },
  {
    icon: <Gift className="h-8 w-8" />,
    title: "Celebraciones Especiales",
    description: "Shows personalizados para cualquier ocasión que merezca un toque mágico y musical.",
    features: [
      "Shows a medida",
      "Combinación de magia y música",
      "Interacción con invitados",
      "Momentos memorables",
      "Flexibilidad de formato"
    ],
    idealFor: [
      "Cumpleaños de adultos",
      "Reuniones familiares",
      "Fiestas temáticas",
      "Eventos sociales"
    ],
    duration: "2-3 horas"
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Eventos Especiales",
    description: "Servicios adaptados para festividades y ocasiones únicas durante todo el año.",
    features: [
      "Shows temáticos",
      "Música festiva",
      "Magia estacional",
      "Decoración temática",
      "Ambiente festivo"
    ],
    idealFor: [
      "Navidad y Año Nuevo",
      "Halloween",
      "Pascua",
      "Festivales"
    ],
    duration: "2-4 horas"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-500 mb-4">Nuestros Servicios</h2>
          <div className="flex justify-center gap-4 mb-6">
            <Music className="h-6 w-6 text-amber-500" />
            <Wand2 className="h-6 w-6 text-amber-500" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de entretenimiento que combinan la magia y la música
            para crear experiencias únicas e inolvidables en cualquier tipo de evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="bg-amber-500 rounded-full p-4 inline-block mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-amber-500 mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Ideal para:</h4>
                  <ul className="space-y-2">
                    {service.idealFor.map((ideal, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {ideal}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-300">
                    <span className="text-amber-500 font-semibold">Duración típica:</span> {service.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">
            ¿Tienes un evento especial en mente? ¡Contáctanos para crear un show personalizado!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-amber-400 transition-colors"
          >
            Reserva tu Show
            <Calendar className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}