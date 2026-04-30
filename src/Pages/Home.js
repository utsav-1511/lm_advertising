import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, PhoneCall, MonitorPlay, Target, 
  MapPin, Send, ShieldCheck, Clock, CheckCircle, 
  Printer, TrendingUp, Presentation, Image as ImageIcon,
  Quote, Building, ChevronLeft, ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router"; // Agar react-router-dom use kar rahe hain toh wahan se
const CEO_IMAGE = new URL("/public/images/ceo-Imadvertising.jpg", import.meta.url).href;

import { openPDF } from "../components/Navbar";
import { Link } from "react-router";

const HOARDING_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1531935916357-224c16b5ace3?auto=format&fit=crop&w=1600&q=85",
    title: "Prime Hoarding Locations",
    description: "High-visibility outdoor spaces planned for real traffic and daily recall.",
  },
  {
    src: "https://images.unsplash.com/photo-1617727553252-65863c156eb0?auto=format&fit=crop&w=1600&q=85",
    title: "Large Format Outdoor Branding",
    description: "Readable layouts, strong colours, and clean print execution for busy roads.",
  },
  {
    src: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1600&q=85",
    title: "Campaigns That Get Noticed",
    description: "From artwork to installation, every detail is handled with practical care.",
  },
];

const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();
  const ctaRef = useRef(null); // CTA section ke liye reference banayein
  const servicesRef = useRef(null);

  const goToPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? HOARDING_SLIDES.length - 1 : current - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((current) =>
      current === HOARDING_SLIDES.length - 1 ? 0 : current + 1
    );
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const slideTimer = setInterval(goToNextSlide, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  const currentSlide = HOARDING_SLIDES[activeSlide];

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden text-[var(--text-primary)]">
      <section className="relative flex min-h-[92svh] w-full items-end overflow-hidden pt-24">
        {HOARDING_SLIDES.map((slide, index) => (
          <motion.img
            key={slide.title}
            src={slide.src}
            alt={slide.title}
            initial={false}
            animate={{
              opacity: index === activeSlide ? 1 : 0,
              scale: index === activeSlide ? 1 : 1.04,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-6 pb-12 lg:grid-cols-[1fr_auto] lg:px-20">
          <motion.div
            key={currentSlide.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <p className="mb-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
              LM Advertising Hoardings
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              {currentSlide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              {currentSlide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToServices}
                className="flex items-center gap-2 rounded-xl bg-[#FF3B3B] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#e03131] cursor-pointer"
              >
                Explore Services <ArrowRight size={20} />
              </button>
              <button
                onClick={scrollToCTA}
                className="rounded-xl border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white/10 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          <div className="flex items-end justify-between gap-4 lg:flex-col lg:justify-end">
            <div className="flex gap-3">
              <button
                onClick={goToPreviousSlide}
                aria-label="Show previous hoarding"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={goToNextSlide}
                aria-label="Show next hoarding"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {HOARDING_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${slide.title}`}
                  className={`h-2.5 rounded-full transition cursor-pointer ${
                    index === activeSlide ? "w-8 bg-[#FF3B3B]" : "w-2.5 bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section ref={servicesRef} className=" w-full max-w-7xl px-6 lg:px-20 py-20 ">
        <div className="text-center mb-16 ">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium <span className="text-[#FF3B3B]">Services</span></h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">Comprehensive outdoor advertising and branding solutions to maximize your visibility.</p>
        </div>
        
        <Link to={"/our-products"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
                { icon: <Presentation />, title: "Hoardings", desc: "High-impact billboards in prime locations." },
                { icon: <ImageIcon />, title: "Wall Wraps", desc: "Transform empty walls into brand canvases." },
                { icon: <Target />, title: "Unipoles", desc: "Strategic singular pillars for clear visibility." },
                { icon: <Building />, title: "Gantries", desc: "Overhead highway signage for mass reach." },
                { icon: <TrendingUp />, title: "Railway Branding", desc: "Capture commuter attention effectively." },
                { icon: <MonitorPlay />, title: "Kiosks", desc: "Street-level engagement points." },
                { icon: <Printer />, title: "Printing", desc: "High-quality large format printing." },
                { icon: <ShieldCheck />, title: "Brand Identity", desc: "Complete visual identity design." },
            ].map((service, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-6 rounded-2xl group hover:border-[#FF3B3B]/50 hover:shadow-[0_0_20px_rgba(255,59,59,0.15)] transition-all duration-300 cursor-pointer"
                >
                    <div className="w-12 h-12 bg-[#FF3B3B]/10 text-[#FF3B3B] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{service.desc}</p>
                </motion.div>
            ))}
        </Link>
      </section>

      {/* 4. ABOUT / STORY SECTION */}
      <section className="relative w-full py-24 overflow-hidden bg-[var(--app-bg)] text-[var(--text-primary)] bg-gradient-to-tr from-[#FF3B3B]/20 to-transparent ">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center ">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#FF3B3B]/20 mix-blend-overlay z-10"></div>
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" alt="Team Planning" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 glass-card !bg-[var(--app-bg)] text-[var(--text-primary)] p-6 rounded-2xl shadow-2xl max-w-xs border-l-4 border-l-[#FF3B3B]">
                    <p className="font-bold text-lg">"We build brand identities, not just ads."</p>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
            >
                <h2 className="text-3xl md:text-5xl font-bold">The <span className="text-[#FF3B3B]">LM Advertising</span> Story</h2>
                <p className="text-lg opacity-80 leading-relaxed">
                    At LM Advertising, we don’t just create ads — we build brand identities. Born out of a passion for impactful communication, we have grown into Prayagraj's premier OOH and branding agency. 
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                    Our approach combines strategic locations, bold design, and flawless execution to ensure your message doesn't just reach the masses, it resonates with them.
                </p>
                <div className="pt-4">
                    <button onClick={() => navigate("/about")} className="flex items-center gap-2 font-bold text-[#FF3B3B] hover:text-white transition-colors cursor-pointer">
                        Read Our Full Story <ArrowRight size={20} />
                    </button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 5. USP SECTION */}
      <section className="w-full max-w-7xl px-6 lg:px-20 py-24 ">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {[
                { icon: <MapPin />, title: "Prime Locations" },
                { icon: <ShieldCheck />, title: "Quality Maintenance" },
                { icon: <Clock />, title: "Fast Execution" },
                { icon: <MonitorPlay />, title: "Creative Designs" },
                { icon: <Target />, title: "Budget Friendly" },
                { icon: <CheckCircle />, title: "Responsive Team" },
            ].map((usp, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center gap-4 group"
                >
                    <div className="w-16 h-16 rounded-full bg-[var(--app-bg)] border border-[var(--app-card-border)] shadow-lg flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[#FF3B3B] group-hover:border-[#FF3B3B] transition-all duration-300">
                        {usp.icon}
                    </div>
                    <h3 className="font-bold text-lg">{usp.title}</h3>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 6. CEO MESSAGE */}
      {/* <section className="w-full py-24 bg-gradient-to-b from-transparent to-[var(--app-card-border)] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-10 md:p-16 rounded-3xl relative"
            >
                <Quote className="absolute top-8 left-8 w-12 h-12 text-[#FF3B3B]/20 rotate-180" />
                <Quote className="absolute bottom-8 right-8 w-12 h-12 text-[#FF3B3B]/20" />

                <img src={CEO_IMAGE} alt="CEO" className="w-30 h-30 rounded-full border-4 border-[#FF3B3B] mx-auto mb-8 shadow-xl p-1" />

                <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                    "Creativity backed by purpose can change how businesses communicate. Our vision is to elevate local and national brands through unmissable outdoor presence."
                </p>
                
                <div>
                    <h4 className="font-bold text-lg"> CEO</h4>
                    <p className="text-[var(--text-secondary)] text-sm">LM Advertising</p>
                </div>
            </motion.div>
        </div>
      </section> */}

      {/* 7. LOCATIONS SECTION */}
      {/* <section className="w-full max-w-7xl px-6 lg:px-20 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Prime <span className="text-[#FF3B3B]">Locations</span></h2>
        <div className="flex flex-wrap justify-center gap-6">
            {["Prayagraj", "Kanpur", "Varanasi", "Lucknow", "Ayodhya"].map((city, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card px-8 py-4 rounded-full flex items-center gap-3 hover:border-[#FF3B3B] transition-colors cursor-default"
                >
                    <MapPin className="text-[#FF3B3B] w-5 h-5" />
                    <span className="font-bold text-lg">{city}</span>
                </motion.div>
            ))}
        </div>
      </section> */}

      {/* 8. FINAL CTA SECTION */}
      <section ref={ctaRef} className="w-full py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF3B3B]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-extrabold mb-8"
            >
                Let’s Make Your Brand <br className="hidden md:block"/> Impossible to Ignore
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-6"
            >
                <button className="px-10 py-5 bg-white text-[#FF3B3B] rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl cursor-pointer">
                    Get Started
                </button>
                
                <a href="tel:955933808" className="block w-fit">
                    <button className="px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer">
                        <PhoneCall size={20} /> Call Now
                    </button>
                </a>
            </motion.div>
        </div>
      </section>

      {/* 9. FOOTER */}
      
      <footer className="w-full bg-[var(--app-bg)] text-[var(--text-primary)] py-8 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[var(--app-bg)]/10 pb-8">
            <div>
                <h3 className="text-2xl font-black text-[#FF3B3B] mb-6">Get in touch</h3>
                <p className="opacity-70 max-w-sm mb-6">
                    Follow our Social Media platforms for latest updates and notifications.
                </p>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/lmadvertising.in/" className="w-10 h-10 rounded-full bg-[var(--app-bg)]/10 flex items-center justify-center hover:bg-[#FF3B3B] transition-colors"><InstagramIcon /></a>
                    
                    <a href="https://www.linkedin.com/company/lm-advertising-a-360-advertising-agency/" className="w-10 h-10 rounded-full bg-[var(--app-bg)]/10 flex items-center justify-center hover:bg-[#FF3B3B] transition-colors"><LinkedinIcon /></a>
                </div>
            </div>
            <div className="flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1097577430596!2d81.76768547551633!3d25.43459382204404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985338aaf55f283%3A0xc01cd07bd1676a6a!2sLM%20ADVERTISING!5e0!3m2!1sen!2sin!4v1777577682869!5m2!1sen!2sin" width="400" height="230" style={  {border:0}} loading="lazy" ></iframe>      
              
                {/* <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                <div className="flex flex-col gap-4 opacity-80">
                    <div className="flex items-center gap-3"><PhoneCall size={18} className="text-[#FF3B3B]" /> +91 98765 43210</div>
                    <div className="flex items-center gap-3"><Send size={18} className="text-[#FF3B3B]" /> hello@lmadvertising.com</div>
                    <div className="flex items-center gap-3"><MapPin size={18} className="text-[#FF3B3B]" /> Civil Lines, Prayagraj, UP</div>
                </div> */}
            </div>
            
            <div>
                <h4 className="text-lg font-bold mb-6 ">Quick Links</h4>
                <div className="flex flex-col gap-3 opacity-80">
                    <a href="#" className="hover:text-[#FF3B3B] transition-colors">Home</a>
                    <a href="about" className="hover:text-[#FF3B3B] transition-colors">About Us</a>
                    <a href="our-products" className="hover:text-[#FF3B3B] transition-colors">Our Services</a>
                    <a onClick={openPDF} className="hover:text-[#FF3B3B] transition-colors">Brochure</a>
                    <a href="reach-us" className="hover:text-[#FF3B3B] transition-colors">Reach Us</a>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-2 flex flex-col md:flex-row items-center justify-center opacity-50 text-sm">
            <p>&copy; {new Date().getFullYear()} LM Advertising. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
