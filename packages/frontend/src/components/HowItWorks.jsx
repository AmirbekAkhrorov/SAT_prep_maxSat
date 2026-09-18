import { motion } from 'framer-motion';
import { GraduationCap, Languages, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: GraduationCap,
    title: 'Pick a Test & Start the Clock',
    description:
      'Choose from Mini (5 questions, 10 min), Section (20 questions, 35 min), or Full (55 questions, 120 min). Each test pulls real questions from all four SAT Math domains under authentic timed conditions.',
    chips: ['5 · 20 · 55 Questions', 'Algebra · Geometry · Advanced Math · Problem Solving'],
    color: 'navy',
  },
  {
    number: '02',
    icon: Languages,
    title: 'Answer in Your Language',
    description:
      'Work through each question in English, then flip to Uzbek or Russian with one tap whenever you need to. Navigate freely, flag tricky questions to revisit, and enter your answers — all while the timer runs.',
    chips: ['🇺🇸 English · 🇷🇺 Russian · 🇺🇿 Uzbek', 'Flag · Navigate · Free Response'],
    color: 'sage',
  },
  {
    number: '03',
    icon: Trophy,
    title: 'Review, Earn Points & Climb',
    description:
      'Submit to see your score. Every question shows the correct answer with a full explanation — flip to your language in the review too. Earn points for each correct answer, grow your streak, and watch your rank rise on the weekly leaderboard.',
    chips: ['Points · Daily Streak · Accuracy', 'Weekly & Monthly Leaderboard'],
    color: 'gold',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-navy-800 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-wide mx-auto relative z-10">
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
              How It Works
            </span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg text-cream-100 mb-6">
            From First Question to{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Top of the Board</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-500/20 -z-0" />
            </span>
          </h2>
          <p className="font-body text-lg text-cream-300 leading-relaxed">
            Three steps — that's the whole loop. Each session makes you faster,
            sharper, and higher on the leaderboard.
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
                <p className="font-body text-cream-400 leading-relaxed max-w-xs mx-auto mb-5">
                  {step.description}
                </p>

                {/* Detail chips */}
                <div className="flex flex-col items-center gap-2">
                  {step.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`inline-block px-3 py-1 rounded-full text-xs font-sans font-medium border ${
                        step.color === 'gold'
                          ? 'bg-gold-500/20 border-gold-400/50 text-gold-300'
                          : step.color === 'sage'
                          ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                          : 'bg-white/10 border-white/20 text-cream-200'
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-20 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-gold-500/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
