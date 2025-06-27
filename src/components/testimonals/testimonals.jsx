import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    company: '',
    workRelationship: '',
    projectLocation: '',
    testimonial: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data >>>>>", formData);
    resetButton();
  };

  //func to reset the form data 
  const resetButton = () => {
    setFormData({
      name: '',
      occupation: '',
      company: '',
      workRelationship: '',
      projectLocation: '',
      testimonial: '',
      email: ''
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-[#d3e97a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Share Your Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your testimonial helps others understand the value of our collaboration. 
            I'd be grateful if you could share your experience working with me.
          </p>
        </div>

        <div className="rounded-lg shadow-2xl border border-gray-700 bg-gray-800/90 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-gray-800 to-[#d3e97a] text-white rounded-t-lg px-6 py-4 flex items-center gap-2">
            <User className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">Testimonial Form</h2>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="occupation" className="block text-white mb-1">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  placeholder="Your occupation"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="workRelationship" className="block text-white mb-1">How did we work together?</label>
                <input
                  type="text"
                  name="workRelationship"
                  id="workRelationship"
                  value={formData.workRelationship}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  placeholder="e.g. Manager, Developer, Client"
                />
              </div>

              <div>
                <label htmlFor="projectLocation" className="block text-white mb-1">Project / Collaboration Location</label>
                <input
                  type="text"
                  name="projectLocation"
                  id="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  placeholder="Where did we work together?"
                />
              </div>

              <div>
                <label htmlFor="testimonial" className="block text-white mb-1">Testimonial</label>
                <textarea
                  name="testimonial"
                  id="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  placeholder="Share your experience..."
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d3e97a]"
                  placeholder="you@example.com"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-gray-700 to-[#d3e97a] hover:from-gray-800 hover:to-[#c5d96a] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-300 text-sm">
            Thank you for taking the time to share your experience. Your testimonial will help others understand the value of our collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;