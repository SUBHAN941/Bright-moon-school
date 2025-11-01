import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import FemaleStaff from "./components/FemaleStaff";
import Achievement from "./components/Achivement";
import Gallery from "./components/Galerry";
import DateSheet from "./components/DateSheett";
import Contact from "./components/Contactt";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Staff from "./components/FemaleStaff";
import { GraduationCap } from "lucide-react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Service />
      <Staff />
      <Achievement />
      <Gallery />
      <Contact />
      <SocialMedia />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-black">Bright Moon School</h3>
            </div>
            <p className="text-blue-200 mb-4 text-lg">Building Tomorrow's Leaders</p>
            <p className="text-gray-400">© 2024 Bright Moon Public High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
