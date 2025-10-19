import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service"
import FemaleStaff from "./components/FemaleStaff"
import Achievement from "./components/Achivement"
import Gallery  from "./components/Galerry";
import DateSheet from "./components/DateSheett";
import Contact from "./components/Contactt";
import Footer from "./components/Footer"
import { Menu, X, Download, Mail, Phone, MapPin, Award, Users, BookOpen, Heart } from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Service/>
      <FemaleStaff />
      <Achievement />
      <Gallery />
      <DateSheet />
      <Contact />
      <Footer />
    </div>
  );
}