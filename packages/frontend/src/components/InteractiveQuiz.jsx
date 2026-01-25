import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  BookOpen,
  PenTool,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Lightbulb,
  Target,
  RefreshCw,
  ArrowRight,
  Zap,
  Loader2,
} from 'lucide-react';
import { fetchSampleQuestions } from '../services/api';
import { sampleQuestions as fallbackQuestions } from '../data/sampleQuestions';

const typeIcons = {
  math: Calculator,
  reading: BookOpen,
  writing: PenTool,
};

const typeLabels = {
  math: 'Math',
  reading: 'Reading',
  writing: 'Writing',
};

const difficultyColors = {
  easy: 'bg-sage-400/20 text-sage-600 border-sage-300',
  medium: 'bg-gold-100 text-gold-700 border-gold-300',
  hard: 'bg-coral-400/20 text-coral-500 border-coral-400',
};

export default function InteractiveQuiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  // Fetch questions from API on mount
  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchSampleQuestions(4);
      setQuestions(data);
    } catch (err) {
      console.error('Failed to fetch questions, using fallback:', err);
      // Use fallback static questions if API fails
      setQuestions(fallbackQuestions);
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = questions[currentIndex];
  const isAnswered = answeredQuestions.includes(currentIndex);
  const totalQuestions = questions.length;
  const TypeIcon = currentQuestion ? typeIcons[currentQuestion.type] : Calculator;

  const handleSelectAnswer = (answerId) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedAnswer(answerId);
    setAnsweredQuestions([...answeredQuestions, currentIndex]);

    if (answerId === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Show explanation after a brief delay
    setTimeout(() => setShowExplanation(true), 500);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleReset = async () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setIsComplete(false);
    // Fetch new questions for variety
    await loadQuestions();
  };

  const getOptionClass = (optionId) => {
    if (!isAnswered) {
      return selectedAnswer === optionId ? 'selected' : '';
    }

    if (optionId === currentQuestion.correctAnswer) {
      return 'correct';
    }

    if (selectedAnswer === optionId && optionId !== currentQuestion.correctAnswer) {
      return 'incorrect';
    }

    return '';
  };

  const progressPercentage = totalQuestions > 0 ? ((answeredQuestions.length) / totalQuestions) * 100 : 0;

  // Loading state
  if (loading) {
    return (
      <section id="quiz" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />
        <div className="container-narrow mx-auto relative">
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-navy-600 animate-spin mb-4" />
            <p className="font-body text-navy-600">Loading questions...</p>
          </div>
        </div>
      </section>
    );
  }

  // No questions available
  if (!currentQuestion) {
    return (
      <section id="quiz" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />
        <div className="container-narrow mx-auto relative text-center py-20">
          <p className="font-body text-navy-600 mb-4">No questions available.</p>
          <button onClick={loadQuestions} className="btn-primary">
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-navy-900/[0.02] to-transparent rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 rounded-full mb-6">
            <Zap className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-sm font-medium text-cream-100">
              Interactive Demo
            </span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg text-navy-900 mb-4">
            Experience SAT Questions
          </h2>
          <p className="font-body text-lg text-navy-600 max-w-2xl mx-auto">
            Try real SAT questions from the official College Board question bank.
            Instant feedback and detailed explanations included.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-sans text-sm text-navy-500">
                    Question {currentIndex + 1} of {totalQuestions}
                  </span>
                  <span className="font-sans text-sm font-medium text-navy-700">
                    Score: {score}/{answeredQuestions.length}
                  </span>
                </div>
                <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-navy-600 to-navy-400 rounded-full"
                  />
                </div>
              </div>

              {/* Question Card */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-card border border-cream-200 overflow-hidden"
              >
                {/* Question Header */}
                <div className="px-8 py-6 bg-gradient-to-r from-navy-900 to-navy-800 text-cream-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <TypeIcon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-sm font-medium text-cream-200">
                        {typeLabels[currentQuestion.type] || 'Math'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[currentQuestion.difficulty]}`}>
                        {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
                      </span>
                      {currentQuestion.skill && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-cream-200">
                          {currentQuestion.skill}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Passage for reading questions */}
                  {currentQuestion.passage && (
                    <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                      <p className="font-body text-sm text-cream-200 italic leading-relaxed">
                        {currentQuestion.passage}
                      </p>
                    </div>
                  )}

                  <h3 className="font-body text-lg leading-relaxed whitespace-pre-wrap">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Options */}
                <div className="p-8 space-y-4">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSelectAnswer(option.id)}
                      disabled={isAnswered}
                      className={`quiz-option w-full text-left ${getOptionClass(option.id)}`}
                    >
                      <span className="quiz-option-indicator">
                        {isAnswered && option.id === currentQuestion.correctAnswer ? (
                          <Check className="w-4 h-4" />
                        ) : isAnswered && selectedAnswer === option.id && option.id !== currentQuestion.correctAnswer ? (
                          <X className="w-4 h-4" />
                        ) : (
                          option.id
                        )}
                      </span>
                      <span className="font-body text-navy-800">{option.text}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && currentQuestion.explanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-cream-200"
                    >
                      <div className="p-8 bg-cream-50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-gold-600" />
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-navy-900 mb-2">
                              Explanation
                            </h4>
                            <p className="font-body text-navy-600 leading-relaxed">
                              {currentQuestion.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="px-8 py-6 bg-cream-50 border-t border-cream-200 flex justify-between items-center">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 font-sans text-sm font-medium text-navy-600 hover:text-navy-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>

                  {isAnswered && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={handleNext}
                      className="btn-gold !py-3 !px-6"
                    >
                      {currentIndex < totalQuestions - 1 ? (
                        <>
                          Next Question
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </>
                      ) : (
                        <>
                          See Results
                          <Target className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* Results Card */
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-card-hover border border-cream-200 overflow-hidden text-center">
                <div className="px-8 py-12 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-gold"
                  >
                    <Target className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="font-display text-display-sm text-cream-100 mb-2">
                    Great Job!
                  </h3>
                  <p className="font-body text-cream-200">
                    You completed the demo quiz
                  </p>
                </div>

                <div className="px-8 py-10">
                  <div className="mb-8">
                    <div className="font-display text-6xl font-bold text-navy-900 mb-2">
                      {score}/{totalQuestions}
                    </div>
                    <p className="font-sans text-navy-500">
                      {score === totalQuestions
                        ? 'Perfect Score!'
                        : score >= totalQuestions * 0.75
                        ? 'Excellent Work!'
                        : score >= totalQuestions * 0.5
                        ? 'Good Progress!'
                        : 'Keep Practicing!'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full btn-gold group">
                      Start Full Practice Test
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={handleReset}
                      className="w-full btn-secondary group"
                    >
                      <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
