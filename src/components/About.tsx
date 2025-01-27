import React from 'react';
import { Music2, Star, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-500 mb-4">Sobre Mí</h2>
          <div className="flex justify-center gap-4 mb-8">
            <Music2 className="h-6 w-6 text-amber-500" />
            <Star className="h-6 w-6 text-amber-500" />
            <Award className="h-6 w-6 text-amber-500" />
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-amber-500 mb-6">Mi Servicio</h3>
          <div className="bg-gray-900/50 p-8 rounded-xl mb-8">
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              Se ofrece servicios para eventos y fiestas de todas clases, que pueden incluir: animación, humor, juegos de participación, musica en vivo (a guitarra y en pistas), serenatas, para niños y adultos dependiendo el paquete de servicios que usted escoja.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-serif text-amber-500 mb-4">Animación Infantil</h4>
                <p className="text-gray-300">
                  Brindamos servicios en todo tipo de fiestas infantiles, como cumpleaños, bautismos, escuelas, campamentos de verano, etc, para los niños y niñas de todas las edades.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-serif text-amber-500 mb-4">Animación Para Adultos</h4>
                <p className="text-gray-300">
                  Este servicios es perfecto para celebrar cumpleaños de adultos, despedida de soltero, serenatas, cumpleaños o cualquier actividad donde deseen pasar un rato agradable.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-serif text-amber-500 mb-4">Baby Showers y Bodas</h4>
                <p className="text-gray-300">
                  Un show para no olvidar, magia participativa, música y mas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img 
              src="https://i.postimg.cc/FsF5GQ26/adrian.jpg"
              alt="Adrian Místico en el escenario" 
              className="rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-purple-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black p-4 rounded-lg shadow-xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
              <p className="font-serif text-lg">20+ años de experiencia</p>
            </div>
            {/* Magical Accent Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-amber-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-amber-500/20 to-purple-600/20 rounded-full blur-xl" />
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Ya son 20 años de experiencia como músico y artista de la magia. Una historia que me ha llevado por varios proyectos y escenarios tanto de fiestas privadas como eventos en tarima. Cuba, mi tierra natal y donde empezó y se desarrollo mi carrera artística fue la cuna donde la creatividad llegó con esa musa, la que me inspiró en historias personales y foráneas para todas mis canciones. La música, componer canciones y la magia siempre fueron de la mano. Mi experiencia en todo evento ha sido satisfactoria y profesional, he brindado lo mejor de mi en cada show, he tenido la oportunidad de compartir tarima con muchos comediantes y músicos destacados de la cultura cubana, cada lugar y cada cliente ha salido satisfecho por mi trabajo.
            </p>

            <p className="text-lg leading-relaxed">
              Hoy mi misión es compartir mi arte con el público variado que hay en este gran país y con el mundo, creando espectáculos que no sólo entretienen si no que también conectan a cada persona con una historia. Llevar un poquito de mis tradiciones por medio del arte, la música, la magia y mis creaciones. Cada presentación es una promesa de seguir mejorando y brindando un arte de calidad, llevar mis raíces a cada lugar y conectar con un público variado que guste de mis servicios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}