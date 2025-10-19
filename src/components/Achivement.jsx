import React from "react";
function Achievements() {
  const achievements = [
    { year: "2024", title: "Best Academic Performance Award", description: "District level recognition" },
    { year: "2023", title: "100% Pass Rate", description: "Matriculation exams" },
    { year: "2023", title: "Quran Competition Winners", description: "Regional level" },
    { year: "2022", title: "Science Fair Excellence", description: "Multiple winning projects" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Our Achievements</h2>
        <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
          Proud moments that showcase our commitment to excellence
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-yellow-400 text-3xl font-bold mb-3">{achievement.year}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-blue-100">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Achievements;