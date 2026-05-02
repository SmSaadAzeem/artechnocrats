/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, 
  ShieldCheck, 
  Lightbulb, 
  HeartHandshake, 
  Scale, 
  Trophy, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Fan,
  Thermometer,
  Zap,
  HardHat
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Values', href: '#values' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-white border-sleek-border shadow-sm py-4' : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-sleek-blue flex items-center justify-center rounded">
            <Wind className="w-5 h-5 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-tight uppercase ${
            isScrolled ? 'text-slate-800' : 'text-white'
          }`}>
            AR <span className="text-sleek-blue">TECHNOCRATS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-widest hover:text-sleek-blue transition-colors ${
                isScrolled ? 'text-slate-500' : 'text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="sleek-button"
          >
            GET A QUOTE
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-800' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-sleek-border shadow-xl py-8 flex flex-col items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-slate-800 hover:text-sleek-blue"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="sleek-button w-3/4 text-center"
            >
              GET A QUOTE
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center bg-sleek-dark px-10 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full industrial-grid" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
            Complete Ventilation <br/>
            <span className="text-sleek-blue">& HVAC Solutions.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium mb-10 max-w-xl leading-relaxed">
            Professional HVAC services for residential, commercial, and industrial sectors. 
            Precision engineering for energy efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-sleek-blue text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-sleek-blue-dark active:scale-95 shadow-lg shadow-sleek-blue/20"
            >
              Get a Quote
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all underline underline-offset-8"
            >
              Our Expertise
            </a>
          </div>
        </motion.div>
        
        <div className="hidden md:flex flex-col items-end">
          <span className="text-slate-500 text-xs font-mono mb-4 tracking-widest">ESTABLISHED ENGINEERING EXCELLENCE</span>
          <div className="w-48 h-1.5 bg-sleek-blue shadow-[0_0_20px_rgba(29,78,216,0.5)]"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-sleek-border">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-3 gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 p-10 lg:border-r border-sleek-border"
          >
            <h2 className="text-xs font-bold text-sleek-blue uppercase tracking-widest mb-6">About Us</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
              AR Technocrats is a full-service air-conditioning contractor specializing in complete ventilation and air conditioning systems.
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-sleek-blue">
              <h3 className="text-xs font-bold uppercase mb-2">Our Mission</h3>
              <p className="text-xs italic text-slate-500 leading-relaxed">
                "Empowering businesses by enhancing the quality and efficiency of their infrastructure in an ever-evolving marketplace."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 p-10 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-tight">
              A Trusted Partner for <br/><span className="text-sleek-blue">Precision Engineering.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-sm text-slate-500 leading-relaxed">
              <p>
                We offer preventive maintenance checks, service of existing equipment, and installation of new systems. Our team helps you reduce energy bills through thorough cost-benefit analysis.
              </p>
              <p>
                Professional managers, engineers, and field staff introduce the latest technics and tools to meet the fast-growing construction industry requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const coreValues = [
    { title: "Problem-Solver", desc: "Innovative thinking for complex issues." },
    { title: "Knowledgeable", desc: "Deep technical expertise in systems." },
    { title: "Integrity", desc: "Honest pricing and craftsmanship." },
    { title: "Excellence", desc: "Striving for the highest results." },
  ];

  return (
    <section id="values" className="py-24 bg-slate-50 border-b border-sleek-border">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-bold text-sleek-blue uppercase tracking-widest mb-4">Core Principles</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter">Our Values</h3>
          </div>
          <div className="hidden md:block w-24 h-1 bg-slate-200"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 sleek-card"
            >
              <span className="text-xs font-mono font-bold text-slate-300 block mb-4">0{idx + 1}</span>
              <h4 className="text-sm font-black uppercase tracking-widest mb-3">{value.title}</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white border-b border-sleek-border">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-sleek-blue uppercase tracking-widest mb-4">Expertise One</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8">HVAC Services</h3>
            <div className="space-y-6">
              {[
                { title: "Industrial Systems", desc: "AHU, FCU, and high-capacity cooling towers." },
                { title: "Floor & Package Units", desc: "Designed for large-scale environment control." },
                { title: "Split & Cassette", desc: "Precision units for office and residential spaces." }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 bg-sleek-blue rounded-full shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1 uppercase leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-900 text-white"
          >
            <h2 className="text-xs font-bold text-sleek-blue uppercase tracking-widest mb-4">Expertise Two</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Technical Supplies</h3>
            <div className="grid grid-cols-2 gap-8 mb-10">
              {["Copper Pipes", "M/S Pipes", "UPVC Pipes", "AC Devices"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sleek-blue" />
                  <span className="text-xs font-bold uppercase tracking-[0.1em]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">Ensuring durability and efficiency in every installation.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Clientele = () => {
  const clients = [
    "Chevron", "Shell", "Silkbank", "Jubilee Life", "Soneri Bank", "HBL", "Burj Bank", "Atlas Battery", 
    "Khaadi", "Artistic Fabric Mills", "Aga Khan", "Atlas Honda", "Martin Dow", "Bella Vita", "PC Legacy",
    "Global Marquees", "Chase Up", "Emaar", "Bahria Town", "Emporium"
  ];

  return (
    <section id="clients" className="py-20 bg-slate-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-xs font-bold text-sleek-blue uppercase tracking-[0.3em] mb-10 text-center">Trusted Industry Partners</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {clients.map((client) => (
            <span key={client} className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs font-bold text-sleek-blue uppercase tracking-widest mb-4">Connect</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8">Project Inquiry</h3>
            <p className="text-sm text-slate-500 mb-12 uppercase leading-relaxed font-bold tracking-tight">
              Reach out to our engineering team for specialized HVAC consultations.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-sleek-border flex items-center justify-center text-sleek-blue">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Direct Line</p>
                  <p className="text-lg font-black uppercase tracking-widest">+92 343 2210174</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-sleek-border flex items-center justify-center text-sleek-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Electronic Mail</p>
                  <p className="text-lg font-black uppercase tracking-widest break-all">engineeringalrazzaq@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-sleek-border bg-slate-50 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-500">Full Name</label>
                  <input type="text" className="w-full px-4 py-4 bg-white border border-sleek-border outline-none focus:border-sleek-blue transition-all text-xs font-bold uppercase tracking-widest" placeholder="" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-500">Email Address</label>
                  <input type="email" className="w-full px-4 py-4 bg-white border border-sleek-border outline-none focus:border-sleek-blue transition-all text-xs font-bold uppercase tracking-widest" placeholder="" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-500">Service Category</label>
                <input type="text" className="w-full px-4 py-4 bg-white border border-sleek-border outline-none focus:border-sleek-blue transition-all text-xs font-bold uppercase tracking-widest" placeholder="INDUSTRIAL / COMMERCIAL" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-500">Message Brief</label>
                <textarea rows={4} className="w-full px-4 py-4 bg-white border border-sleek-border outline-none focus:border-sleek-blue transition-all text-xs font-bold uppercase tracking-widest" placeholder="" />
              </div>
              <button 
                type="submit" 
                onClick={(e) => e.preventDefault()}
                className="w-full py-5 bg-sleek-dark text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-sleek-blue transition-all active:scale-[0.98]"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-sleek-dark py-12 px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 opacity-80">
          <Wind className="w-5 h-5 text-sleek-blue" />
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            AR TECHNOCRATS
          </span>
        </div>
        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em]">
          © {new Date().getFullYear()} AR Technocrats. HVAC Engineering Excellence.
        </p>
        <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span>Karachi</span>
          <span>Lahore</span>
          <span>Islamabad</span>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Clientele />
      <Contact />
      <Footer />
    </div>
  );
}
