import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, BookOpen, Globe } from 'lucide-react';

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
  { value: 720, suffix: '+', label: 'Real SAT Questions', icon: BookOpen },
  { value: 4, suffix: '', label: 'Math Domains', icon: TrendingUp },
  { value: 3, suffix: '', label: 'Languages', icon: Globe },
];

const domains = [
  { label: 'Algebra', width: '90%', color: 'from-navy-700 to-navy-500' },
  { label: 'Advanced Math', width: '75%', color: 'from-gold-500 to-gold-400' },
  { label: 'Geometry', width: '82%', color: 'from-sage-600 to-sage-500' },
  { label: 'Problem Solving', width: '68%', color: 'from-navy-500 to-navy-400' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gold-200/40 dark:from-gold-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-navy-200/20 dark:from-navy-500/20 to-transparent rounded-full blur-3xl" />

        <div className="absolute top-32 right-20 w-20 h-20 border-2 border-gold-300/50 dark:border-gold-400/30 rounded-2xl animate-float-slow" />
        <div
          className="absolute top-60 right-40 w-12 h-12 bg-gold-400/20 dark:bg-gold-400/10 rounded-full animate-float-medium"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-40 right-32 w-16 h-16 border-2 border-navy-300/30 dark:border-navy-400/30 rounded-full animate-float-fast"
          style={{ animationDelay: '0.5s' }}
        />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f1e36 1px, transparent 1px),
                              linear-gradient(to bottom, #0f1e36 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-wide mx-auto px-6 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 dark:bg-gold-900/30 border border-gold-300 dark:border-gold-700 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold-600 dark:text-gold-400" />
              <span className="font-sans text-sm font-medium text-gold-700 dark:text-gold-400">
                Digital SAT Math · 3 Languages · 3 Test Modes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-display-lg md:text-display-xl text-navy-900 dark:text-cream-100 mb-6"
            >
              Master the SAT.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Ace Every Domain.</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 h-4 bg-gold-300/50 dark:bg-gold-500/30 -z-0"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-xl text-navy-600 dark:text-cream-300 leading-relaxed mb-10"
            >
              720 real SAT Math questions across Algebra, Advanced Math,
              Geometry, and Problem Solving — in English, Uzbek, and Russian.
              Timed tests, instant explanations, and a leaderboard to keep
              you pushing.
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
              <a href="#cta" className="btn-secondary">
                Create Free Account
              </a>
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
                  <div className="w-12 h-12 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-navy-900 dark:text-cream-100">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2 + index * 0.3} />
                    </div>
                    <div className="font-sans text-sm text-navy-500 dark:text-navy-400">{stat.label}</div>
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
              <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-card-hover p-8 border border-cream-200 dark:border-navy-700">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-1">Math Section Score</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold text-navy-900 dark:text-cream-100">750</span>
                      <span className="font-sans text-sm text-sage-600 dark:text-sage-400 font-medium">+90 pts</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center shadow-gold">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Domain breakdown */}
                <div className="space-y-4">
                  {domains.map((domain, i) => (
                    <div key={domain.label}>
                      <div className="flex justify-between font-sans text-sm mb-2">
                        <span className="text-navy-600 dark:text-cream-300">{domain.label}</span>
                      </div>
                      <div className="h-2 bg-cream-200 dark:bg-navy-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: domain.width }}
                          transition={{ duration: 1.2, delay: 0.8 + i * 0.15 }}
                          className={`h-full bg-gradient-to-r ${domain.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Weekly progress mini chart */}
                <div className="mt-8 pt-6 border-t border-cream-200 dark:border-navy-700">
                  <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-4">Weekly Progress</p>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 55, 45, 70, 65, 85, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                        className={`flex-1 rounded-t-lg ${
                          i === 6 ? 'bg-gold-500' : 'bg-navy-200 dark:bg-navy-700'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <span key={i} className="flex-1 text-center font-sans text-xs text-navy-400 dark:text-navy-500">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-sage-500 text-white px-4 py-2 rounded-full font-sans text-sm font-semibold shadow-lg animate-float-badge">
                98th Percentile
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-navy-800 px-4 py-3 rounded-xl shadow-card border border-cream-200 dark:border-navy-700 animate-float-badge-reverse"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-navy-500 dark:text-navy-400">Streak</p>
                    <p className="font-display text-lg font-bold text-navy-900 dark:text-cream-100">21 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
