import { motion } from 'framer-motion';
import {
  GraduationCap,
  Trophy,
  Languages,
  BookOpen,
  Lightbulb,
  BarChart3,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Three Real Test Modes',
    description:
      'Mini (5 questions), Section (20 questions), and Full (55 questions) timed tests — each matching the exact digital SAT format to build real test stamina.',
    color: 'navy',
    accent: 'from-navy-600 to-navy-500',
  },
  {
    icon: Trophy,
    title: 'Leaderboard & Rankings',
    description:
      'Earn points for every correct answer, build daily streaks, and climb from Beginner to SAT Master on the weekly and monthly rankings.',
    color: 'gold',
    accent: 'from-gold-400 to-gold-500',
  },
  {
    icon: Languages,
    title: 'English · Uzbek · Russian',
    description:
      'Flip any question between English, Uzbek, and Russian with one tap. Every question in the bank is fully translated — study in the language you think best.',
    color: 'sage',
    accent: 'from-sage-500 to-sage-400',
  },
  {
    icon: BookOpen,
    title: '720+ Official Questions',
    description:
      'A complete question bank across Algebra, Advanced Math, Geometry, and Problem Solving & Data Analysis — covering every domain of the digital SAT Math section.',
    color: 'navy',
    accent: 'from-navy-500 to-navy-400',
  },
  {
    icon: Lightbulb,
    title: 'Deep Answer Review',
    description:
      'After every test, revisit each question with the correct answer and a full explanation. Switch languages in review too — understand every mistake in your language.',
    color: 'gold',
    accent: 'from-gold-500 to-gold-400',
  },
  {
    icon: BarChart3,
    title: 'Progress & Stats',
    description:
      'Track accuracy, streaks, and total points over time. See exactly which domains need attention and watch your performance trend upward session by session.',
    color: 'coral',
    accent: 'from-coral-500 to-coral-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-navy-200/20 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream-200 border border-cream-300 rounded-full mb-6">
            <Zap className="w-4 h-4 text-gold-600" />
            <span className="font-sans text-sm font-medium text-navy-700">
              Built for SAT Prep
            </span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg text-navy-900 mb-6">
            Everything You Need to
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Ace the SAT</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-300/40 -z-0" />
            </span>
          </h2>
          <p className="font-body text-lg text-navy-600 leading-relaxed">
            Four math domains, three languages, three test modes — one complete
            platform built around the digital SAT format.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full card-bordered p-8 hover:bg-white hover:shadow-card-hover">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.accent} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${feature.accent} rounded-lg opacity-30 blur-sm`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="font-body text-navy-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
