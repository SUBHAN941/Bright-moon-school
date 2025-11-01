import React from "react";
import { useInView } from "framer-motion";
function SocialMedia() {
const socialRef = React.useRef(null);
const socialInView = useInView(socialRef, { once: true });
  return (
    <div ref={socialRef} className="py-24 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${socialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="w-28 h-28 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-4 border-white/30 shadow-2xl animate-bounce">
            🎓
          </div>
          <h2 className="text-6xl font-black text-white mb-6">Connect With Us</h2>
          <div className="w-32 h-2 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-2xl text-white/90">Follow our school on social media</p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${socialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            {
              name: "TikTok",
              url: "YOUR_TIKTOK_URL_HERE",
              gradient: "from-black to-pink-600",
              icon: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/share/17QgGBvBaR/",
              gradient: "from-blue-600 to-blue-800",
              icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            },
            {
              name: "YouTube",
              url: "YOUR_YOUTUBE_URL_HERE",
              gradient: "from-red-600 to-red-800",
              icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            }
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl p-10 transition-all duration-500 hover:-translate-y-4 hover:scale-105 shadow-2xl bg-gradient-to-br ${social.gradient}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500"></div>
              <div className="relative z-10 flex flex-col items-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                >
                  {social.icon}
                </svg>
                <div className="text-white text-2xl font-black">{social.name}</div>
              </div>
            </a>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${socialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-white/80 text-lg">Stay connected with our school community</p>
        </div>
      </div>
    </div>
  );
}
export default SocialMedia;
