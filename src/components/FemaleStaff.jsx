import React, { useRef } from "react";
import { useInView } from "framer-motion";

function Staff() {
  const staffRef = useRef(null);
  const staffInView = useInView(staffRef, { once: true });

  const staff = [
    { name: "Ms. Fatima Ahmed", position: "Head Teacher - Science", qualification: "M.Sc. Physics, B.Ed", experience: "12 years", initial: "F" },
    { name: "Ms. Ayesha Khan", position: "Senior Teacher - Mathematics", qualification: "M.Sc. Mathematics, B.Ed", experience: "10 years", initial: "A" },
    { name: "Ms. Zainab Ali", position: "English & Urdu Teacher", qualification: "M.A. English Literature", experience: "8 years", initial: "Z" },
    { name: "Ms. Sana Mahmood", position: "Islamic Studies Teacher", qualification: "M.A. Islamiat, Hifz-e-Quran", experience: "9 years", initial: "S" },
    { name: "Ms. Rabia Nasir", position: "Primary Coordinator", qualification: "B.Ed, Montessori", experience: "7 years", initial: "R" },
    { name: "Ms. Hina Tariq", position: "Computer Science Teacher", qualification: "B.Sc. Computer Science", experience: "5 years", initial: "H" }
  ];

  const colors = ["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-green-500 to-emerald-500", "from-orange-500 to-red-500", "from-yellow-500 to-orange-500", "from-indigo-500 to-purple-500"];

  return (
    <section id="staff" ref={staffRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${staffInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Our Dedicated <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Staff</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet our team of qualified educators committed to excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden ${staffInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[i]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center">
                <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-br ${colors[i]} rounded-full flex items-center justify-center text-white text-3xl font-black transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className={`font-semibold mb-4 bg-gradient-to-r ${colors[i]} bg-clip-text text-transparent`}>{member.position}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Qualification:</strong> {member.qualification}</p>
                  <p><strong>Experience:</strong> {member.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Staff