import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, BookOpen } from 'lucide-react';

function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 50000, suffix: '+', label: 'Students', icon: Users },
  { value: 150, suffix: '+', label: 'Point Average Gain', icon: TrendingUp },
  { value: 10000, suffix: '+', label: 'Practice Questions', icon: BookOpen },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gold-200/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-navy-200/20 to-transparent rounded-full blur-3xl" />

        {/* Decorative shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-20 w-20 h-20 border-2 border-gold-300/50 rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-60 right-40 w-12 h-12 bg-gold-400/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-40 right-32 w-16 h-16 border-2 border-navy-300/30 rounded-full"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f1e36 1px, transparent 1px),
                              linear-gradient(to bottom, #0f1e36 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-wide mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 border border-gold-300 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span className="font-sans text-sm font-medium text-gold-700">
                AI-Powered SAT Preparation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-display-lg md:text-display-xl text-navy-900 mb-6"
            >
              Master the SAT.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Unlock Your Future.</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-4 bg-gold-300/50 -z-0"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-xl text-navy-600 leading-relaxed mb-10"
            >
              Personalized practice tests, adaptive learning powered by AI, and
              detailed analytics to help you achieve your dream score. Join thousands
              of students who improved by 150+ points.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#quiz" className="btn-gold group">
                Try Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-secondary">
                Watch Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-navy-900">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2 + index * 0.3} />
                    </div>
                    <div className="font-sans text-sm text-navy-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element - Score Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-card-hover p-8 border border-cream-200">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="font-sans text-sm text-navy-500 mb-1">Your Practice Score</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold text-navy-900">1520</span>
                      <span className="font-sans text-sm text-sage-600 font-medium">+180 pts</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center shadow-gold">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Score breakdown */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-sans text-sm mb-2">
                      <span className="text-navy-600">Reading & Writing</span>
                      <span className="font-semibold text-navy-900">760</span>
                    </div>
                    <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '95%' }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-navy-700 to-navy-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-sans text-sm mb-2">
                      <span className="text-navy-600">Math</span>
                      <span className="font-semibold text-navy-900">760</span>
                    </div>
                    <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '95%' }}
                        transition={{ duration: 1.2, delay: 1 }}
                        className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Weekly progress mini chart */}
                <div className="mt-8 pt-6 border-t border-cream-200">
                  <p className="font-sans text-sm text-navy-500 mb-4">Weekly Progress</p>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 55, 45, 70, 65, 85, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                        className={`flex-1 rounded-t-lg ${
                          i === 6 ? 'bg-gold-500' : 'bg-navy-200'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <span key={i} className="flex-1 text-center font-sans text-xs text-navy-400">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-sage-500 text-white px-4 py-2 rounded-full font-sans text-sm font-semibold shadow-lg"
              >
                98th Percentile
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-xl shadow-card border border-cream-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-navy-500">Streak</p>
                    <p className="font-display text-lg font-bold text-navy-900">21 Days</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
