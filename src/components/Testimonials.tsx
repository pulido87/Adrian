import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
  event: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Isabel Morales",
    role: "Celebración de Boda",
    content: "Adrian fue el alma de nuestra boda. Su presentación comenzó con trucos de magia que dejaron a todos boquiabiertos, y luego nos deleitó con música en vivo que hizo bailar a todos los invitados. Su versatilidad es increíble - puede pasar de un acto de magia sofisticado a tocar cualquier género musical. ¡Incluso aprendió canciones especiales que le pedimos para nuestro primer baile!",
    rating: 5,
    image: "https://i.postimg.cc/FsF5GQ26/adrian.jpg",
    date: "15 de Febrero, 2024",
    event: "Boda en Jacksonville"
  },
  {
    name: "Roberto Méndez",
    role: "Fiesta Corporativa",
    content: "Contratamos a Adrian para nuestra fiesta de fin de año corporativa y superó todas las expectativas. Su show de magia close-up durante el cocktail mantuvo a nuestros ejecutivos completamente entretenidos, y su música en vivo creó el ambiente perfecto para la cena. Su profesionalismo y puntualidad fueron impecables. Ya lo hemos reservado para nuestro próximo evento.",
    rating: 5,
    image: "https://i.postimg.cc/x8JQY3SM/474321650-17850515961386211-7503558690421780052-n.jpg",
    date: "22 de Diciembre, 2023",
    event: "Evento Empresarial"
  },
  {
    name: "Ana Patricia Reyes",
    role: "Cumpleaños Infantil",
    content: "¡Adrian es simplemente extraordinario! Lo contraté para el cumpleaños número 7 de mi hijo y fue un éxito total. Los niños estaban fascinados con sus trucos de magia, y los padres quedaron igualmente impresionados. Su capacidad para mantener la atención de los niños durante todo el show es increíble. Además, su selección musical fue perfecta para la edad de los niños. ¡Definitivamente lo recomendaré a todos mis amigos!",
    rating: 5,
    image: "https://i.postimg.cc/dtCFx66K/475775435-1146322273737741-856456697134245308-n.jpg",
    date: "3 de Marzo, 2024",
    event: "Fiesta Infantil"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-500 mb-4">Testimonios</h2>
          <p className="text-xl text-gray-300">Experiencias reales de clientes satisfechos</p>
        </div>

        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 p-2 rounded-full text-black hover:bg-amber-400 transition-colors swiper-button-prev-custom hidden md:block">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 p-2 rounded-full text-black hover:bg-amber-400 transition-colors swiper-button-next-custom hidden md:block">
            <ChevronRight className="h-6 w-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-amber-500',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-amber-500',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper !pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm shadow-xl h-full">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 h-8 w-8 text-amber-500 opacity-50" />
                    <div className="mb-4">
                      <div className="flex justify-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-amber-500"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-2 mb-4">
                        <div className="flex justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-amber-500 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{testimonial.date}</span>
                        <span className="text-sm text-amber-500/80">{testimonial.event}</span>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 text-center mb-4">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="text-center">
                      <p className="text-amber-500 font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Calificación promedio: 5.0/5.0 basada en más de 150 reseñas verificadas
          </p>
        </div>
      </div>

      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background-color: #FDB813;
          opacity: 0.5;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}