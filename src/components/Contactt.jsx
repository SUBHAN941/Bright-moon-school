import React from "react";
import { MapPin, Mail, Phone } from "lucide-react"
function Contactt() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-xl mb-2">Address</h3>
                <p className="text-blue-100">
                  Bright Moon Public High School<br />
                  Jhand Road, Ameen Town<br />
                  Street No. 3<br />
                  Mughalabad, Punjab, Pakistan
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <Phone className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <p className="text-blue-100 mb-3">0300-1234567</p>
                <h3 className="font-bold text-xl mb-2 mt-4">Email</h3>
                <p className="text-blue-100">brightmoon@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
          <p className="text-blue-100 text-lg">
            Monday - Friday: 8:00 AM - 2:00 PM<br />
            Saturday: 8:00 AM - 12:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
}
export default Contactt