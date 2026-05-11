import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Calendar, 
  MessageCircle, 
  Users, 
  Clock, 
  Activity, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Music,
  Twitter,
  Linkedin,
  Phone,
  Building2
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/60132370520";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col items-center group cursor-pointer">
          <img src="https://github.com/seeashann02/Degup/blob/main/logo-transparent-without%20name.png?raw=true" alt="Degup Logo" className="w-8 h-8 object-contain" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-900 mt-1">Degup</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Vision', 'How It Works', 'Partners', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
              className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-16 overflow-hidden bg-[#F8FBFC]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[3rem] md:text-[4.75rem] font-display font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Compassion. Care. <br />
              <span className="text-brand-primary">Commitment.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg mb-12">
              Degup helps dialysis patients take back control of their lives with flexible, accessible treatment that fits their daily routines.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <motion.a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-lg shadow-brand-primary/20 hover:bg-brand-primary-deep transition-all"
              >
                Talk to Us <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://i0.wp.com/codeblue.galencentre.org/wp-content/uploads/2022/04/Nurul-Nadwa-Badwi-Kidney-Patient-scaled.jpeg?w=2560&ssl=1" 
                alt="Patient Care" 
                className="w-full aspect-[4/5] md:aspect-square object-cover rounded-[100px] shadow-2xl border-8 border-white/30 backdrop-blur-sm"
              />
              
              {/* Heart floating box */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-brand-primary">
                  <Heart className="w-6 h-6 fill-brand-primary/20" />
                </div>
              </motion.div>
            </div>

            {/* Background blur */}
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-7 h-7 text-brand-primary" />,
      title: "Work Schedule",
      text: "Dialysis slots clash with work and daily life routines."
    },
    {
      icon: <Calendar className="w-7 h-7 text-brand-primary" />,
      title: "Limited Visibility",
      text: "Patients struggle to find available centers in real-time."
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-brand-primary" />,
      title: "Manual Booking",
      text: "Calling multiple centers just to find a single empty slot."
    },
    {
      icon: <Activity className="w-7 h-7 text-brand-primary" />,
      title: "Travel Barriers",
      text: "Coordinating travel dialysis is complicated and stressful."
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900 mb-8 leading-tight tracking-tight">
            Dialysis is already difficult – <br />
            <span className="text-slate-400">scheduling shouldn't be.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl font-medium mx-auto">
            We are solving the coordination gaps that make treatment a barrier to daily life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-slate-50/50 p-10 rounded-[40px] border border-slate-100 group hover:bg-white hover:border-brand-primary transition-all duration-300"
            >
              <div className="mb-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{problem.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  const images = [
    "https://github.com/seeashann02/Degup/blob/main/KKM.jpeg?raw=true",
    "https://github.com/seeashann02/Degup/blob/main/Medicare.jpeg?raw=true",
    "https://github.com/seeashann02/Degup/blob/main/nkf.jpeg?raw=true",
    "https://github.com/seeashann02/Degup/blob/main/ngo.png?raw=true",
    "https://github.com/seeashann02/Degup/blob/main/WhatsApp%20Image%202026-05-06%20at%2010.08.56.jpeg?raw=true",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="vision" className="section-padding bg-[#F8FBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[60px] shadow-xl bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    alt="Healthcare vision" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={prevImage}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 hover:bg-white transition-colors shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 hover:bg-white transition-colors shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-brand-primary' : 'bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-primary rounded-full blur-[60px]"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-brand-primary"></div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-primary">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 mb-10 leading-tight">
              A healthcare ecosystem <br />
              <span className="text-slate-400">built for the patient.</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-normal mb-8">
              We envision a future where dialysis treatment is no longer a logistical burden but a seamless part of a patient's life.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed font-normal">
              Degup is bridging the gap between clinical needs and personal freedom, one heartbeat at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Discover Nearby Slots",
      text: "Explore dialysis centers and treatment slots based on your location and timing."
    },
    {
      number: "02",
      title: "Flexible Scheduling",
      text: "Select a session that fits your unique work and life routine."
    },
    {
      number: "03",
      title: "Seamless Coordination",
      text: "Get supported through the entire booking and treatment cycle."
    }
  ];

  return (
    <section id="howitworks" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 bg-teal-50 rounded-full mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900 mb-6 tracking-tight">How it works</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-[120px] font-display font-bold text-slate-50 absolute -top-20 left-0 -z-10 select-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  return (
    <section id="about" className="section-padding bg-[#F8FBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-brand-primary"></div>
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-primary">Who We Are</h2>
            </div>
            
            <div className="space-y-10">
              <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Built for communities,<br />
                <span className="text-brand-primary">powered by heart.</span>
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-normal">
                Degup is a multidisciplinary team from the SEEd.Lab Social Enterprise Programme, powered by PETRONAS and TCS. We are dedicated to redefining dialysis care access in Malaysia.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-normal">
                Our approach combines deep technical expertise with a genuine focus on community impact. We believe in technology that serves humanity.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://github.com/seeashann02/Degup/blob/main/grouppic.jpg?raw=true" 
              alt="Degup Team" 
              className="w-full h-auto rounded-[60px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section id="partners" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] font-black text-slate-400 mb-16">Ecosystem Partners</h2>
        <div className="flex justify-center">
          <motion.a 
            href="https://www.seedlab.my/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-[#F8FBFC] p-16 md:p-24 rounded-[60px] border border-slate-50 transition-all hover:bg-white hover:shadow-xl">
              <img 
                src="https://www.toruslabs.my/images/logo/seed.lab-block-logo-hr.webp" 
                alt="SEEd.Lab" 
                className="h-48 md:h-72 lg:h-96 w-auto object-contain"
              />
            </div>
          </motion.a>
        </div>
        <p className="mt-12 text-sm text-slate-400 font-medium tracking-[0.1em] uppercase">Powered by SEEd.Lab • PETRONAS • TCS</p>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-[#F8FBFC] overflow-hidden pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[60px] p-16 lg:p-24 text-center relative overflow-hidden border border-slate-100 shadow-sm">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-medium text-slate-900 mb-8 tracking-tight">
              Let's shape the <br />
              <span className="text-brand-primary">future together.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              We are connecting with healthcare stakeholders and dialysis providers to redefine coordination in Malaysia.
            </p>
            <motion.a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-primary text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-brand-primary-deep transition-all shadow-lg shadow-brand-primary/20 inline-flex items-center gap-4"
            >
              Talk to Us <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
          
          {/* Subtle decor */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between gap-6 text-left"
      >
        <span className="text-xl font-display font-bold text-slate-900">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-primary text-white' : 'bg-slate-50 text-slate-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-lg text-slate-500 leading-relaxed font-normal">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Degup?",
      answer: "Degup is a social enterprise focused on making dialysis care easier and more accessible for patients in Malaysia."
    },
    {
      question: "Why was Degup started?",
      answer: "Degup was inspired by the real challenges dialysis patients face in managing treatment around work, daily life, and travel."
    },
    {
      question: "What problem is Degup trying to solve?",
      answer: "Many dialysis patients struggle with rigid schedules, limited flexibility, and difficult coordination when accessing treatment. Degup aims to improve this experience."
    },
    {
      question: "Who does Degup support?",
      answer: "Degup focuses on supporting dialysis patients, caregivers, and dialysis providers."
    },
    {
      question: "Why focus on dialysis patients?",
      answer: "Dialysis is a lifelong treatment that affects many parts of a patient’s daily life, from employment to mobility and independence."
    },
    {
      question: "Is my medical information safe with Degup?",
      answer: "Yes. DEGUP only collects the minimum necessary information required for scheduling and coordination purposes and follows Malaysia’s Personal Data Protection Act (PDPA) principles."
    },
    {
      question: "Is Degup free to use?",
      answer: "DEGUP is currently in its pilot and validation phase. Some services may be offered free during this stage while we work closely with patients and providers to improve the platform experience."
    },
    {
      question: "Is Degup a charity?",
      answer: "No. Degup is a social enterprise focused on building sustainable solutions that improve access to dialysis care."
    },
    {
      question: "What is a social enterprise?",
      answer: "A social enterprise is a business or initiative that focuses on solving social problems while building sustainable and long-term impact."
    },
    {
      question: "Where is Degup based?",
      answer: "Degup is based in KL but focuses on improving dialysis access for patients across Malaysia."
    },
    {
      question: "What is SEEd.Lab?",
      answer: "SEEd.Lab is a social enterprise programme powered by PETRONAS and Tata Consultancy Services (TCS) that supports impact-driven initiatives in Malaysia."
    },
    {
      question: "What is the relationship between Degup and SEEd.Lab?",
      answer: "Degup is an enterprise incubated in the SEEd.Lab Programme."
    },
    {
      question: "How does Degup engage with the dialysis community?",
      answer: "We engage directly with patients, caregivers, healthcare professionals, and dialysis providers to better understand their experiences and challenges."
    },
    {
      question: "Can organisations partner with Degup?",
      answer: "Yes. We welcome partnerships with healthcare providers, NGOs, communities, and organisations aligned with our mission."
    },
    {
      question: "How can I support Degup?",
      answer: "You can support Degup by connecting us with patients, healthcare communities, or organisations that share our vision of improving dialysis access."
    }
  ];

  return (
    <section className="section-padding bg-[#F8FBFC] relative overflow-hidden pt-10">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-slate-900 mb-4 tracking-tight">Common Questions</h2>
          <p className="text-xl text-slate-500 font-medium italic">Everything you need to know about our mission.</p>
        </div>
        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm border border-slate-50">
          <div className="divide-y divide-slate-100">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img src="https://github.com/seeashann02/Degup/blob/main/logo-transparent-without%20name.png?raw=true" alt="Degup Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-display font-medium text-slate-900 tracking-widest uppercase">Degup</span>
            </div>
            <p className="text-lg text-slate-500 leading-relaxed max-w-sm font-medium">
              Making dialysis scheduling simpler and easier for patients in Malaysia.
            </p>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.facebook.com/dialisdankerjaya?locale=ms_MY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@dialisisdankerjaya?fbclid=IwY2xjawRuevZleHRuA2FlbQIxMABicmlkETFqdnF2cG9MN09sT1ZDTFZSc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHn-A4gYy4-sr1JsGTdt0EjTyWSuxiU4RpekjdWIZxvlxXeTqqlz_bX0pXUDG_aem_tcMUYkYR031rBhXcgQNdGQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 tracking-wide">Contacts</h4>
            <ul className="space-y-4">
              <li><a href="mailto:hello@degup.my" className="text-slate-500 hover:text-brand-primary transition-colors">hello@degup.my</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-primary transition-colors">+60 13 237 0520</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 tracking-wide">Location</h4>
            <p className="text-slate-500 leading-relaxed">
              Level 2, Tower 3, Bangsar South City,<br />
              59200, Kuala Lumpur, Malaysia
            </p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-semibold text-slate-400">© 2026 Degup</p>
          <p className="text-sm font-semibold text-slate-400">Powered by SEEd.Lab</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Vision />
        <HowItWorks />
        <WhoWeAre />
        <Partners />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
