import React from "react";
function FemaleStaff() {
  const staff = [
    {
      name: "Ms. Fatima Ahmed",
      position: "Head Teacher - Science Department",
      qualification: "M.Sc. Physics, B.Ed",
      experience: "12 years"
    },
    {
      name: "Ms. Ayesha Khan",
      position: "Senior Teacher - Mathematics",
      qualification: "M.Sc. Mathematics, B.Ed",
      experience: "10 years"
    },
    {
      name: "Ms. Zainab Ali",
      position: "English & Urdu Teacher",
      qualification: "M.A. English Literature",
      experience: "8 years"
    },
    {
      name: "Ms. Sana Mahmood",
      position: "Islamic Studies Teacher",
      qualification: "M.A. Islamiat, Hifz-e-Quran",
      experience: "9 years"
    },
    {
      name: "Ms. Rabia Nasir",
      position: "Primary Section Coordinator",
      qualification: "B.Ed, Montessori Diploma",
      experience: "7 years"
    },
    {
      name: "Ms. Hina Tariq",
      position: "Computer Science Teacher",
      qualification: "B.Sc. Computer Science",
      experience: "5 years"
    }
  ];

  return (
    <section id="staff" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Our Dedicated Female Staff</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our team of qualified and experienced female educators who are committed 
          to providing the best education in a supportive environment
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">
                  {member.name.split(' ')[1][0]}
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-blue-900">{member.name}</h3>
              <p className="text-center text-blue-700 font-semibold mb-3">{member.position}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Qualification:</strong> {member.qualification}</p>
                <p><strong>Experience:</strong> {member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FemaleStaff