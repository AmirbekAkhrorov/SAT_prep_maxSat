import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, ArrowLeft } from 'lucide-react';

const testTypes = [
  {
    id: 'mini',
    name: 'Mini Test',
    description: 'Quick practice session',
    questions: 5,
    time: 10,
    color: 'bg-gold-500'
  },
  {
    id: 'section',
    name: 'Section Test',
    description: 'Practice a full SAT section',
    questions: 20,
    time: 35,
    color: 'bg-navy-700'
  },
  {
    id: 'full',
    name: 'Full Practice',
    description: 'Complete SAT simulation',
    questions: 54,
    time: 120,
    color: 'bg-navy-900'
  }
];

export default function Test() {
  const [selectedTest, setSelectedTest] = useState(null);

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Header */}
      <header className="bg-white shadow-card">
        <div className="container-wide mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/cabinet" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gold-400" />
                </div>
                <span className="font-display text-xl font-semibold text-navy-900">
                  SAT<span className="text-gold-600">Prep</span>
                </span>
              </Link>
              <div className="h-6 w-px bg-cream-300" />
              <span className="font-sans font-medium text-navy-700">Test Mode</span>
            </div>
          </div>
        </div>
      </header>

      <motion.main
        className="container-wide mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link
          to="/cabinet"
          className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 mb-6 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="font-display text-3xl text-navy-900 mb-2">
            Choose Your Practice Test
          </h1>
          <p className="font-body text-navy-600">
            Select a test format that fits your study goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testTypes.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 hover:shadow-card-hover transition-all cursor-pointer group"
              onClick={() => setSelectedTest(test)}
            >
              <div className={`w-14 h-14 ${test.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Clock className="w-7 h-7 text-cream-100" />
              </div>
              <h2 className="font-display text-xl text-navy-900 mb-1">{test.name}</h2>
              <p className="font-body text-navy-600 text-sm mb-4">{test.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-sans text-navy-700">
                  <strong>{test.questions}</strong> questions
                </span>
                <span className="font-sans text-navy-700">
                  <strong>{test.time}</strong> min
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Test Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="card p-6 max-w-lg mx-auto">
            <p className="font-body text-navy-600">
              Test mode with timed sessions is coming soon. For now, use the Practice section to work on individual questions!
            </p>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
