import React, { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useInView } from "framer-motion";

function Gallery() {
const galleryRef = useRef(null);
const galleryInView = useInView(galleryRef, { once: true });
const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/school.jpg", label: "School Building", desc: "Our modern campus" },
    { src: "/assembly.jpg", label: "Morning Assembly", desc: "Daily gathering" },
    { src: "/resultday.jpg", label: "Result Day", desc: "Celebrating achievements" },
    { src: "/classroom.jpg", label: "Classroom", desc: "Interactive learning" },
    { src: "/library.jpg", label: "Library", desc: "Knowledge center" },
    { src: "/sports.jpg", label: "Sports Day", desc: "Athletic excellence" }
  ];

  return (
    <>
      <section id="gallery" ref={galleryRef} className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              School <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Glimpses of our vibrant school life and memorable moments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-700 shadow-2xl ${galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-80 bg-gradient-to-br from-purple-200 to-pink-200 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23a855f7' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='white'%3E${img.label}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                    <ZoomIn className="text-purple-600" size={24} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-black text-2xl mb-2">{img.label}</h3>
                    <p className="text-purple-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{img.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-md shadow-2xl group">
            <X className="text-white group-hover:rotate-90 transition-transform duration-300" size={28} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.label} className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
            <div className="text-center mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-white text-3xl font-black mb-3">{selectedImage.label}</h3>
              <p className="text-purple-300 text-xl">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery