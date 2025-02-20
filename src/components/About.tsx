import React from 'react';
import { Music2, Star, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-500 mb-4">Sobre Mí</h2>
          <div className="flex justify-center gap-4 mb-8">
            <Music2 className="h-6 w-6 text-amber-500" />
            <Star className="h-6 w-6 text-amber-500" />
            <Award className="h-6 w-6 text-amber-500" />
          </div>
        </AnimatedSection>
        
        <div className="mb-16">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <h3 className="text-3xl font-serif text-amber-500 mb-6">Mi Servicio</h3>
          </AnimatedSection>
          
          <AnimatedSection animation="scaleIn" delay={300} className="bg-gray-900/50 p-8 rounded-xl mb-8">
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              Se ofrece servicios para eventos y fiestas de todas clases, que pueden incluir: animación, humor, juegos de participación, musica en vivo (a guitarra y en pistas), serenatas, para niños y adultos dependiendo el paquete de servicios que usted escoja.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={400} className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-serif text-amber-500 mb-4">Animación Infantil</h4>
                <p className="text-gray-300">
                  Brindamos servicios en todo tipo de fiestas infantiles, como cumpleaños, bautismos, escuelas, campamentos de verano, etc, para los niños y niñas de todas las edades.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={500} className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-serif text-amber-500 mb-4">Animación Para Adultos</h4>
                <p className="text-gray-300">
                  Este servicios es perfecto para celebrar cumpleaños de adultos, despedida de soltero, serenatas, cumpleaños o cualquier actividad donde deseen pasar un rato agradable.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInRight" delay={600} className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-serif text-amber-500 mb-4">Baby Showers y Bodas</h4>
                <p className="text-gray-300">
                  Un show para no olvidar, magia participativa, música y mas.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft" delay={300} className="relative group">
            <img 
              src="https://i.postimg.cc/FsF5GQ26/adrian.jpg"
              alt="Adrian Místico en el escenario" 
              className="rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-purple-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={400} className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Ya son 20 años de experiencia como músico y artista de la magia. Una historia que me ha llevado por varios proyectos y escenarios tanto de fiestas privadas como eventos en tarima...
            </p>
            <p className="text-lg leading-relaxed">
              Hoy mi misión es compartir mi arte con el público variado que hay en este gran país y con el mundo...
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}