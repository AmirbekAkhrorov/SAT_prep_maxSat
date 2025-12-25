import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Stanford University',
    avatar: 'SC',
    avatarBg: 'from-gold-400 to-gold-500',
    scoreBefore: 1280,
    scoreAfter: 1520,
    quote:
      'The AI-powered practice questions were incredibly accurate to the real test. I improved by 240 points in just 3 months!',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'MIT',
    avatar: 'MJ',
    avatarBg: 'from-navy-500 to-navy-600',
    scoreBefore: 1350,
    scoreAfter: 1560,
    quote:
      'The detailed analytics helped me focus on exactly what I needed to improve. Best investment in my future.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Yale University',
    avatar: 'ER',
    avatarBg: 'from-sage-500 to-sage-600',
    scoreBefore: 1180,
    scoreAfter: 1480,
    quote:
      'I was struggling with time management until I found this platform. The timed practice tests were a game-changer.',
    rating: 5,
  },
];

const universities = [
  'Harvard',
  'Stanford',
  'MIT',
  'Yale',
  'Princeton',
  'Columbia',
  'Penn',
  'Duke',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-navy-200/15 rounded-full blur-3xl" />
      </div>

      <div className="container-wide mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream-200 border border-cream-300 rounded-full mb-6">
            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
            <span className="font-sans text-sm font-medium text-navy-700">
              Success Stories
            </span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg text-navy-900 mb-6">
            Students Love Our Platform
          </h2>
          <p className="font-body text-lg text-navy-600 leading-relaxed">
            Join thousands of students who achieved their dream scores and got
            into their top-choice universities.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl shadow-card hover:shadow-card-hover border border-cream-200 p-8 transition-all duration-300">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-gold-300" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold-500 fill-gold-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-navy-700 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Score improvement */}
                <div className="flex items-center gap-3 p-4 bg-cream-50 rounded-xl mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-sage-500 to-sage-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-sm text-navy-500">
                        {testimonial.scoreBefore}
                      </span>
                      <span className="text-navy-400">→</span>
                      <span className="font-display text-xl font-bold text-navy-900">
                        {testimonial.scoreAfter}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-sage-600 font-medium">
                      +{testimonial.scoreAfter - testimonial.scoreBefore} points
                    </p>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-sans font-semibold text-sm`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-navy-900">
                      {testimonial.name}
                    </h4>
                    <p className="font-sans text-sm text-navy-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* University logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="font-sans text-sm text-navy-500 mb-6">
            Our students have been accepted to
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {universities.map((uni, index) => (
              <motion.div
                key={uni}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="px-6 py-3 bg-white rounded-full border border-cream-200 shadow-sm"
              >
                <span className="font-display text-sm font-semibold text-navy-700">
                  {uni}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
