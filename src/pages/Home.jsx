import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Footer from '../components/Footer';

const Home = () => {

  // FAQ Data
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We provide web development, app development, digital marketing, SEO, UI/UX design, and AI solutions."
    },
    {
      question: "How long does a project take?",
      answer: "Project duration depends on the complexity and scope. Typical projects range from 2 to 12 weeks."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide maintenance and support packages to ensure your solution runs smoothly."
    },
    {
      question: "What is your pricing model?",
      answer: "Pricing is based on project requirements. We provide transparent quotes after understanding your needs."
    },
    {
      question: "Can I request custom solutions?",
      answer: "Absolutely! We specialize in tailor-made solutions for businesses of all sizes."
    }
  ];

  // FAQ Accordion Item
  const FAQItem = ({ faq }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="font-medium text-gray-900">{faq.question}</span>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="px-6 py-4 bg-gray-50 text-gray-700">
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <HeroSlider />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
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

                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors">
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
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
                      className="inline-flex items-center text-primary font-semibold group-hover:text-secondary transition-colors"
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
        <section id="faqs" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-[25px] font-medium mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mt-4">
                Find answers to common questions about our services and processes.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </section>

      </main>
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
