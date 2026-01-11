import React, { useState } from "react";
import contactImage from "../assets/images/contactus.png"; // your image path
import toast from "react-hot-toast";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyI8PPIFOxfzrCEbBJ84vh7oQwTO6ytMpCXwczlE8XErfuH-jwKZWq_qpc6WOQ3KUYn/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-40 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🔥 ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-gradient-x opacity-70"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20">

          {/* Form Side */}
          <div className="md:w-1/2 p-6 md:p-8 lg:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Have questions or want to discuss your project? Fill out the form below, and we’ll get back to you soon!
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border border-white/30 bg-white/10 text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border border-white/30 bg-white/10 text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Please enter a valid email address"
                className="border border-white/30 bg-white/10 text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setFormData({ ...formData, mobile: value });
                  }
                }}
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                title="Mobile number must be exactly 10 digits"
                maxLength={10}
                className="border border-white/30 bg-white/10 text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows="3"
                className="border border-white/30 bg-white/10 text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                required
              />

              <button
                type="submit"
                className="px-5 py-2 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Message
              </button>

              {submitted && (
                <div className="text-green-400 font-medium mt-3 animate-fadeIn">
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
              className="w-4/5 md:w-3/4 lg:w-2/3 h-auto object-contain drop-shadow-xl animate-float"
            />
          </div>

        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes gradientMove {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientMove 10s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
