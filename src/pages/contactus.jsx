import React, { useState } from "react";
import contactImage from "../assets/images/contactus.png"; // your image path

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Form Side */}
          <div className="md:w-1/2 p-6 md:p-8 lg:p-10 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Have questions or want to discuss your project? Fill out the form below, and we’ll get back to you soon!
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows="3"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 bg-primary text-white font-medium rounded-full hover:bg-secondary transition transform hover:-translate-y-0.5 hover:shadow-md"
              >
                Send Message
              </button>

              {submitted && (
                <div className="text-green-600 font-medium mt-3 animate-fadeIn">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>

          {/* Image Side */}
          <div className="md:w-1/2 flex items-center justify-center p-4">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-4/5 md:w-3/4 lg:w-2/3 h-auto object-contain rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
