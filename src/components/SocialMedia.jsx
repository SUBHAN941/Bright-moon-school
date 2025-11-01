import React from "react";

const SocialMedia = () => {
  return (
    <div id="SocialMedia" className="overflow-x-hidden min-h-screen flex justify-center items-center px-5 bg-gradient-to-br from-indigo-400 to-purple-600">
      <div
        className="bg-white/95 rounded-[30px] shadow-2xl text-center p-10 max-w-3xl w-full animate-[fadeInUp_0.8s_ease-out]"
        style={{
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* School Logo */}
        <div
          className="w-[100px] h-[100px] rounded-full mx-auto mb-5 flex items-center justify-center text-[48px] text-white shadow-[0_10px_30px_rgba(102,126,234,0.4)] animate-[pulse_2s_infinite]"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          🎓
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Connect With Us
        </h1>
        <p className="text-gray-500 text-lg mb-12">
          Follow our school on social media
        </p>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {/* TikTok */}
          <a
            href="YOUR_TIKTOK_URL_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #fe2c55 100%)",
            }}
          >
            <div className="mb-4 flex justify-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="white"
                className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
            <div className="text-white text-lg font-semibold">TikTok</div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/17QgGBvBaR/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #1877f2 0%, #0c63d4 100%)",
            }}
          >
            <div className="mb-4 flex justify-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="white"
                className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="text-white text-lg font-semibold">Facebook</div>
          </a>

          {/* YouTube */}
          <a
            href="YOUR_YOUTUBE_URL_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ff0000 0%, #cc0000 100%)",
            }}
          >
            <div className="mb-4 flex justify-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="white"
                className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div className="text-white text-lg font-semibold">YouTube</div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Stay connected with our school community</p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default SocialMedia;
