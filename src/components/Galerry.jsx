import React from "react";
function Gallery() {
  const images = [
    { src: "/school.jpg", label: "School Building" },
    { src: "/assembly.jpg", label: "Morning Assembly" },
    { src: "/resultday.jpg", label: "Result Day" },
    { src: "/classroom.jpg", label: "Classroom" },
    { src: "/library.jpg", label: "Library" },
    { src: "/sports.jpg", label: "Sports Day" }
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">School Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234299e1' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='white'%3E${img.label}%3C/text%3E%3C/svg%3E`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold text-lg">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery