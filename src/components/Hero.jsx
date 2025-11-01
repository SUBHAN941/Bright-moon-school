import React, { useState, useRef } from "react";
import { MapPin, Users, Award, Trophy, Star, Sparkles, ChevronRight } from "lucide-react";
import emailjs from "emailjs-com";
import { useInView } from "framer-motion";
import Swal from "sweetalert2"

function Hero() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", grade: "", message: "" });
  const [loading, setLoading] = useState(false);

  const stats = [
    { value: "2000+", label: "Students", color: "from-blue-500 to-cyan-500", icon: <Users size={24} /> },
    { value: "100+", label: "Teachers", color: "from-purple-500 to-pink-500", icon: <Award size={24} /> },
    { value: "95%", label: "Success Rate", color: "from-green-500 to-emerald-500", icon: <Trophy size={24} /> },
    { value: "30+", label: "Years Legacy", color: "from-orange-500 to-red-500", icon: <Star size={24} /> },
  ];

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS keys
    const serviceId = "service_dpihwq9";
    const templateId = "template_7ax7w8g";
    const publicKey = "CRSDtCgkpZKZWu3DA";

    emailjs
  .send(serviceId, templateId, formData, publicKey)
  .then(
    (response) => {
      Swal.fire({
        icon: "success",
        title: "Application Sent!",
        text: "Your application has been submitted successfully.",
        confirmButtonColor: "#3085d6",
      });
      setShowModal(false);
      setFormData({ name: "", email: "", grade: "", message: "" });
    },
    (error) => {
      console.error("Failed to send email:", error);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Failed to send your application. Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  )
  .finally(() => setLoading(false));
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700 top-1/2 right-0"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 -bottom-48 left-1/3"></div>
      </div>

      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 text-center lg:text-left transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-block">
              <span className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 rounded-full text-sm font-bold shadow-lg animate-pulse">
                <Sparkles className="inline mr-2" size={16} />
                Excellence Since 1990
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-white mb-2">Bright Moon</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Public High School
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Nurturing young minds and building tomorrow's leaders through quality education, strong values, and holistic development.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
              <MapPin className="text-yellow-400" size={20} />
              <span>Jhand Road, Mughalabad, Punjab</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setShowModal(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 rounded-xl font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Apply Now
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Principal Card */}
          <div className={`relative transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-bounce">
                Principal's Message
              </div>

              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-white">Principal Name</h3>
                <p className="text-yellow-400 font-semibold">M.Ed, B.Ed</p>
                <p className="text-gray-300 italic leading-relaxed">
                  "Education is the most powerful weapon which you can use to change the world. At Bright Moon, we shape future leaders with knowledge, integrity, and compassion."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-500 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center space-y-2">
                <div className="text-yellow-400 flex justify-center group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl font-black text-white">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
    <div
      className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-8 w-full max-w-md shadow-2xl transform animate-scale-in border-4 border-white/20"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Decorative glowing blobs */}
      <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>

      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg font-bold text-lg z-10"
      >
        ✕
      </button>

      {/* Modal Content */}
      <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Apply Now
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade/Class"
          value={formData.grade}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-28"
          required
        />
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:scale-105"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  </div>
)}


      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;
