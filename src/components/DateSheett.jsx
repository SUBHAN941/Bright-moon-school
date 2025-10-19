import React from "react";
import { Download } from "lucide-react"; 
function DateSheett() {
  return (
    <section id="datesheet" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Examination Date Sheet</h2>
        <p className="text-gray-700 mb-8 text-lg">
          Download the latest examination date sheet for all classes. 
          Stay updated with exam schedules and plan your studies accordingly.
        </p>
        
        <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
          <div className="mb-6">
            <Download size={48} className="mx-auto text-blue-900 mb-4" />
            <p className="text-gray-600 mb-2">Academic Year 2024-25</p>
            <p className="text-sm text-gray-500">Last Updated: October 2025</p>
          </div>
          
          <a
            href="/datesheet.jpg"
            download
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-xl font-semibold text-lg"
          >
            <Download size={20} className="mr-2" />
            Download Date Sheet (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
export default DateSheett