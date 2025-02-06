import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-500 mb-4">Galería</h2>
          <p className="text-xl text-gray-300">Momentos mágicos capturados en video e imágenes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video Preview */}
          <a 
            href="https://www.youtube.com/shorts/LnU_1MQIfP0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <img
              src="https://i.postimg.cc/FsF5GQ26/adrian.jpg"
              alt="Vista previa del video"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/70">
              <div className="text-center">
                <div className="bg-amber-500 rounded-full p-4 mb-4 inline-block">
                  <Play className="h-8 w-8 text-black" />
                </div>
                <p className="text-white flex items-center justify-center gap-2">
                  Ver en YouTube <ExternalLink className="h-4 w-4" />
                </p>
              </div>
            </div>
          </a>

          {/* First Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://i.postimg.cc/x8JQY3SM/474321650-17850515961386211-7503558690421780052-n.jpg"
              alt="Adrian en presentación"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
          </div>

          {/* Second Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://i.postimg.cc/dtCFx66K/475775435-1146322273737741-856456697134245308-n.jpg"
              alt="Adrian en escenario"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
          </div>
        </div>
      </div>
    </section>
  );
}