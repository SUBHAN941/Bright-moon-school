import React from "react";
import { BookOpen, Users, Heart } from "lucide-react";
function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/logo.jpg"
            alt="School Logo"
            className="w-24 h-24 mx-auto rounded-full shadow-lg object-cover"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect fill='%231e3a8a' width='96' height='96' rx='48'/%3E%3Ctext x='50%25' y='50%25' font-size='36' text-anchor='middle' dy='.3em' fill='%23fbbf24'%3EBM%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
        
        <h2 className="text-4xl font-bold mb-6 text-blue-900">About Our School</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Bright Moon Public High School is a premier educational institution dedicated to 
          fostering academic excellence, moral values, and holistic development. Established 
          with a vision to provide quality education in a nurturing environment, we have 
          become a beacon of learning in our community.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-blue-900">Quality Education</h3>
            <p className="text-gray-600">Modern curriculum with experienced educators</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-blue-900">Experienced Staff</h3>
            <p className="text-gray-600">Dedicated female teachers committed to excellence</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-blue-900">Moral Values</h3>
            <p className="text-gray-600">Character building and ethical development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;