import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, User, CheckCircle, Sparkles } from 'lucide-react';

export default function CallToAction() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register', { state: { username: name.trim() } });
  };

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-gold-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-white/5 rounded-full"
        />
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-sm font-medium text-cream-100">
              Your SAT Journey Starts Here
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-display-md md:text-display-lg text-cream-100 mb-6">
            Ready to Ace
            <br />
            the Digital SAT?
          </h2>

          <p className="font-body text-lg text-cream-300 max-w-xl mx-auto mb-12 leading-relaxed">
            720 real SAT Math questions across 4 domains, in 3 languages —
            timed tests, instant explanations, and a leaderboard to keep you
            pushing. Create your free account and start your first test in
            under a minute.
          </p>

          {/* Name → Register form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-navy-400" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full pl-12 pr-40 py-5 bg-white rounded-full font-sans text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-4 focus:ring-gold-400/30 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 btn-gold !py-3 !px-6"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.form>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-cream-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sage-400" />
              <span className="font-sans text-sm">Free to create an account</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sage-400" />
              <span className="font-sans text-sm">720+ real SAT questions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sage-400" />
              <span className="font-sans text-sm">English · Uzbek · Russian</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
