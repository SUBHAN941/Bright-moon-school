
import React from "react";
import { BookOpen, Users, Award,Heart, } from "lucide-react";
import { Download } from "lucide-react";

function Service() {
  const Service = [
    {
      icon: <BookOpen size={32} />,
      title: "Academic Excellence",
      description: "Comprehensive curriculum from primary to matriculation level with focus on both arts and science streams"
    },
    {
      icon: <Users size={32} />,
      title: "Qualified Female Teachers",
      description: "All-female teaching staff with degrees and experience in their respective subjects"
    },
    {
      icon: <Award size={32} />,
      title: "Extra-Curricular Activities",
      description: "Sports, debates, quran recitation, and creative activities to develop well-rounded personalities"
    },
    {
      icon: <Heart size={32} />,
      title: "Moral & Islamic Education",
      description: "Strong emphasis on Islamic values, ethics, and character development alongside academics"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Library Facilities",
      description: "Well-stocked library with textbooks, reference books, and reading materials"
    },
    {
      icon: <Users size={32} />,
      title: "Parent-Teacher Meetings",
      description: "Regular communication with parents to ensure student progress and address concerns"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide comprehensive educational services designed to nurture young minds 
          and prepare them for a successful future
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Service.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-900">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Service