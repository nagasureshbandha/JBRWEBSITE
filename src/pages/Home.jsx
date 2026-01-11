import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Footer from '../components/Footer';

const Home = () => {
  const [watermarkPosition, setWatermarkPosition] = useState(0);

  // Animation for watermarks
  useEffect(() => {
    const interval = setInterval(() => {
      setWatermarkPosition((prev) => (prev - 1) % 100);
    }, 30); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, []);

  // FAQ Data
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, Django, Laravel, WordPress, Shopify, and various cloud platforms."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow agile methodology with regular testing, code reviews, and client feedback sessions. We also conduct thorough QA before deployment."
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Yes, we have a portfolio section showcasing our projects. We can also arrange a demo meeting to show live examples relevant to your industry."
    },
    {
      question: "What's your process for starting a new project?",
      answer: "Our process includes discovery consultation, requirement analysis, proposal, agreement signing, project kickoff, and regular progress updates."
    },
    {
      question: "Do you offer training for the solutions you build?",
      answer: "Yes, we provide comprehensive training sessions and detailed documentation to ensure your team can manage the solution effectively."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards, PayPal, and other secure payment methods. Payment terms are flexible based on project size."
    }
  ];

  // Watermark texts - you can customize these
  const watermarkTexts = [
    "INNOVATION",
    "EXCELLENCE",
    "CREATIVITY",
    "DIGITAL TRANSFORMATION",
    "TECHNOLOGY",
    "GROWTH",
    "SUCCESS",
    "QUALITY",
    "STRATEGY",
    "SOLUTIONS",
    "EXPERTISE",
    "RESULTS"
  ];

  // FAQ Accordion Item Component
  const FAQItem = ({ faq }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
        <button
          className="w-full text-left px-6 py-3 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-300"
          onClick={() => setOpen(!open)}
        >
          <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
          <svg
            className={`w-6 h-6 text-primary flex-shrink-0 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="px-6 py-5 bg-gray-50 text-gray-700 border-t border-gray-200">
            <p className="leading-relaxed">{faq.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <HeroSlider />
        </section>

        {/* About Section */}
        <section id="about" className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="About JBR Digital Solutions"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="relative mt-8">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Team Collaboration"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-[25px] font-medium mb-4">
                  About us
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Empowering businesses with{' '}
                  <span className="text-primary">innovative solutions</span>
                </h2>

                <p className="text-gray-600 mb-8 text-lg">
                  We empower your digital journey with expert training and services. From Digital Marketing courses and UI/UX & Front-End training to website design, logo creation, and comprehensive digital marketing solutions, we help individuals and businesses thrive online. Let's turn your ideas into success—your growth starts here!
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Ongoing support & maintenance</h3>
                      <p className="text-gray-600">Continuous assistance to keep your solutions running smoothly.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Commitment to continuous improvement</h3>
                      <p className="text-gray-600">Constantly evolving to deliver better results for your business.</p>
                    </div>
                  </div>
                </div>

                <button className="px-8 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-800 transition-colors duration-300">
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Watermark Section */}
 {/* Animated Watermark Section */}
{/* Animated Watermark Section - Watermarks Below Content */}
<section className="relative py-10 overflow-hidden bg-gradient-to-r from-blue-50 to-gray-50">
  {/* Foreground content */}
  <div className="container mx-auto px-4">
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-block px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mb-8">
        <span className="text-2xl font-bold text-primary">WHY CHOOSE US</span>
      </div>
      
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
        Your Digital <span className="text-primary">Transformation</span> Partner
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
          <p className="text-gray-600">Quick turnaround without compromising quality.</p>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
          <p className="text-gray-600">Rigorous testing for flawless performance.</p>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
          <p className="text-gray-600">Experienced professionals for your project.</p>
        </div>
      </div>
      
      <button className="mt-12 px-10 py-2 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Start Your Project Today
      </button>
    </div>
  </div>

  {/* Watermarks BELOW the content - Separate section */}
  <div className="relative h-64 mt-20 overflow-hidden">
    {/* Top row - moving right to left */}
    <div 
      className="absolute top-0 whitespace-nowrap"
      style={{ 
        transform: `translateX(${watermarkPosition}%)`,
        animation: 'marquee 30s linear infinite'
      }}
    >
      {watermarkTexts.map((text, index) => (
        <span
          key={`top-${index}`}
          className="inline-block mx-8 text-2xl md:text-3xl lg:text-4xl font-black text-gray-300/70 uppercase tracking-wider"
        >
          {text}
        </span>
      ))}
    </div>
    
    {/* Middle row - moving left to right (reverse) */}
    <div 
      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap"
      style={{ 
        transform: `translateX(${-watermarkPosition}%)`,
        animation: 'marquee-reverse 25s linear infinite'
      }}
    >
      {[...watermarkTexts].reverse().map((text, index) => (
        <span
          key={`middle-${index}`}
          className="inline-block mx-8 text-2xl md:text-2xl lg:text-3xl font-black text-gray-400/80 uppercase tracking-wider"
        >
          {text}
        </span>
      ))}
    </div>
    
    {/* Bottom row - moving right to left */}
    <div 
      className="absolute bottom-0 whitespace-nowrap"
      style={{ 
        transform: `translateX(${watermarkPosition}%)`,
        animation: 'marquee 35s linear infinite'
      }}
    >
      {watermarkTexts.map((text, index) => (
        <span
          key={`bottom-${index}`}
          className="inline-block mx-8 text-2xl md:text-2xl lg:text-3xl font-black text-gray-300/70 uppercase tracking-wider"
        >
          {text}
        </span>
      ))}
    </div>
  </div>
</section>
        {/* Services Section */}
        <section id="services" className="py-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-[25px] font-medium mb-4">
                What we offer
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our services to empower your{' '}
                <span className="text-primary">business journey</span>
              </h2>

              <p className="text-gray-600 text-lg">
                We offer a diverse range of services designed to meet the unique needs of your business. From innovative web design and branding to strategic digital marketing and content creation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <a
                      href={service.link}
                      className="inline-flex items-center text-orange-500 font-semibold group-hover:text-orange-800 transition-colors"
                    >
                      View Details
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-lg font-semibold mb-4">
                FAQs
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Find comprehensive answers to common questions about our services, processes, and how we work.
              </p>
            </div>

            {/* Two Column FAQ Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Left Column */}
              <div className="space-y-6">
                {faqs.slice(0, 3).map((faq, index) => (
                  <FAQItem key={index} faq={faq} />
                ))}
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                {faqs.slice(3, 6).map((faq, index) => (
                  <FAQItem key={index + 3} faq={faq} />
                ))}
              </div>
            </div>

            {/* Additional FAQ Info */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                    <p className="text-gray-600">Can't find the answer you're looking for? Our team is here to help.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-800 transition-colors duration-300">
                      Contact
                    </button>
                    <button className="px-8 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300">
                      Schedule Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};

const services = [
  {
    title: "Website & App Development",
    description: "Smart Web & App Solutions for Your Business!",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/service-website",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Social Media Marketing",
    description: "Grow your brand online with strategic social media marketing.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/service-socialmediamarketing",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Medical Billing / Coding",
    description: "Accurate and efficient medical billing and coding solutions.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/service-medical",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Explore your Skills",
    description: "Unlock new opportunities to learn, grow, and succeed.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/service-skills",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default Home;