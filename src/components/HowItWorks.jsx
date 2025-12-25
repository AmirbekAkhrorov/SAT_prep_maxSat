import { motion } from 'framer-motion';
import { UserPlus, LineChart, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Take a Diagnostic Test',
    description:
      'Start with a comprehensive assessment to identify your strengths and areas for improvement.',
    color: 'navy',
  },
  {
    number: '02',
    icon: LineChart,
    title: 'Follow Your Custom Plan',
    description:
      'Our AI creates a personalized study schedule targeting your weak areas with the right practice questions.',
    color: 'gold',
  },
  {
    number: '03',
    icon: Award,
    title: 'Achieve Your Target Score',
    description:
      'Track your progress, refine your strategies, and walk into test day with confidence.',
    color: 'sage',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-navy-800 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-wide mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <span className="font-sans text-sm font-medium text-gold-400">
              Simple Process
            </span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg text-cream-100 mb-6">
            Your Path to SAT Success
          </h2>
          <p className="font-body text-lg text-cream-300 leading-relaxed">
            Three simple steps to transform your SAT preparation and achieve
            the score you deserve.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                {/* Step number & icon */}
                <div className="relative inline-block mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`relative w-20 h-20 rounded-2xl flex items-center justify-center ${
                      step.color === 'gold'
                        ? 'bg-gradient-to-br from-gold-400 to-gold-500'
                        : step.color === 'sage'
                        ? 'bg-gradient-to-br from-sage-500 to-sage-600'
                        : 'bg-gradient-to-br from-navy-500 to-navy-600'
                    } shadow-lg`}
                  >
                    <step.icon className="w-9 h-9 text-white" />
                  </motion.div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center font-display text-sm font-bold text-navy-900 shadow-lg">
                    {step.number.slice(-1)}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-cream-100 mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-cream-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Arrow (between steps on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-20 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-gold-500/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="btn-gold group">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
