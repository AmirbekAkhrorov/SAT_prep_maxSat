import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  X,
} from 'lucide-react';
import TestTimer from '../components/TestTimer';
import TestQuestionCard from '../components/TestQuestionCard';
import QuestionNavigator from '../components/QuestionNavigator';
import ThemeToggle from '../components/ThemeToggle';
import ToolsSpeedDial from '../components/ToolsSpeedDial';

export default function TestSession() {
  const navigate = useNavigate();
  const { sessionId } = useParams();

  const [session, setSession] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState(new Set());
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = localStorage.getItem('token');

  // Fetch session data
  useEffect(() => {
    const fetchSession = async () => {
      if (!sessionId) {
        setError('No session ID provided');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/tests/${sessionId}/`, {
          headers: { Authorization: `Token ${token}` },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch session');
        }

        const data = await res.json();

        if (data.status !== 'in_progress') {
          // Session is completed, redirect to results
          navigate(`/cabinet/test/results/${sessionId}`, { replace: true });
          return;
        }

        setSession(data);
        setQuestions(data.questions || []);
        setTimeRemaining(data.time_remaining_seconds);

        // Restore saved answers and flags
        const savedAnswers = {};
        const savedFlags = new Set();
        (data.questions || []).forEach((q) => {
          if (q.user_answer) {
            savedAnswers[q.order] = q.user_answer;
          }
          if (q.is_flagged) {
            savedFlags.add(q.order);
          }
        });
        setAnswers(savedAnswers);
        setFlagged(savedFlags);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId, token, navigate]);

  // Auto-save answers periodically
  useEffect(() => {
    if (!session || Object.keys(answers).length === 0) return;

    const saveAnswers = async () => {
      const pendingAnswers = Object.entries(answers);
      for (const [order, answer] of pendingAnswers) {
        try {
          await fetch(`/api/tests/${sessionId}/answer/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ question_order: parseInt(order), answer }),
          });
        } catch (err) {
          console.error('Failed to save answer:', err);
        }
      }
    };

    const timer = setTimeout(saveAnswers, 5000); // Save every 5 seconds if there are changes
    return () => clearTimeout(timer);
  }, [answers, session, sessionId, token]);

  const handleSelectAnswer = useCallback((answer) => {
    const currentQuestion = questions[currentIndex];
    if (currentQuestion) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.order]: answer,
      }));
    }
  }, [currentIndex, questions]);

  const handleToggleFlag = useCallback(async () => {
    const currentQuestion = questions[currentIndex];
    if (!currentQuestion) return;

    const order = currentQuestion.order;
    const newFlagged = new Set(flagged);

    if (newFlagged.has(order)) {
      newFlagged.delete(order);
    } else {
      newFlagged.add(order);
    }
    setFlagged(newFlagged);

    // Save flag to server
    try {
      await fetch(`/api/tests/${sessionId}/flag/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ question_order: order }),
      });
    } catch (err) {
      console.error('Failed to save flag:', err);
    }
  }, [currentIndex, questions, flagged, sessionId, token]);

  const handleNavigate = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, questions.length]);

  const handleTimeWarning = useCallback((level) => {
    setShowWarningModal(level);
    // Auto-close after 3 seconds
    setTimeout(() => setShowWarningModal(null), 3000);
  }, []);

  const handleTimeUp = useCallback(() => {
    handleSubmit(true);
  }, []);

  const handleSubmit = async (autoSubmit = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setShowSubmitModal(false);

    try {
      const res = await fetch(`/api/tests/${sessionId}/submit/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ answers }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit test');
      }

      navigate(`/cabinet/test/results/${sessionId}`, { replace: true });
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  const getTestTypeName = (type) => {
    const names = {
      mini: 'Mini Test',
      section: 'Section Test',
      full: 'Full Practice',
    };
    return names[type] || type;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-100 dark:bg-navy-950 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cream-100 dark:bg-navy-950 flex items-center justify-center">
        <div className="card p-8 text-center max-w-md">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="font-display text-xl text-navy-900 mb-2">Error</h2>
          <p className="text-navy-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/cabinet/test')}
            className="btn-primary"
          >
            Back to Test Selection
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-navy-950 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-navy-900 shadow-card sticky top-0 z-10">
        <div className="container-wide mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                <span className="font-display font-black text-sm leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-navy-900 dark:text-cream-100">
                  {getTestTypeName(session?.test_type)}
                </span>
                <p className="text-sm text-navy-500 dark:text-navy-400">
                  {questions.length} questions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <TestTimer
                initialSeconds={timeRemaining}
                onTimeUp={handleTimeUp}
                onWarning={handleTimeWarning}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto container-wide mx-auto px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {currentQuestion && (
              <motion.div
                key={currentQuestion.order}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <TestQuestionCard
                  question={currentQuestion}
                  questionNumber={currentIndex + 1}
                  totalQuestions={questions.length}
                  selectedAnswer={answers[currentQuestion.order]}
                  isFlagged={flagged.has(currentQuestion.order)}
                  onSelectAnswer={handleSelectAnswer}
                  onToggleFlag={handleToggleFlag}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 text-navy-700 dark:text-cream-300 hover:bg-cream-50 dark:hover:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 text-navy-700 dark:text-cream-300 hover:bg-cream-50 dark:hover:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer with Navigation Grid and Submit */}
      <footer className="bg-white dark:bg-navy-900 border-t border-cream-200 dark:border-navy-700 sticky bottom-0">
        <div className="container-wide mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 overflow-x-auto">
              <QuestionNavigator
                questions={questions}
                currentIndex={currentIndex}
                answers={answers}
                flagged={flagged}
                onNavigate={handleNavigate}
              />
            </div>
            <button
              onClick={() => setShowSubmitModal(true)}
              disabled={isSubmitting}
              className="btn-primary whitespace-nowrap"
            >
              Submit Test
            </button>
          </div>
        </div>
      </footer>

      {/* Submit Confirmation Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-navy-900 rounded-2xl p-6 max-w-md w-full shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-navy-900 dark:text-cream-100">
                  Submit Test?
                </h3>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="p-2 text-navy-400 hover:text-navy-600 dark:hover:text-cream-300 rounded-lg hover:bg-cream-100 dark:hover:bg-navy-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-navy-600 dark:text-cream-300 mb-4">
                  Are you sure you want to submit your test?
                </p>
                <div className="bg-cream-100 dark:bg-navy-800 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-600 dark:text-cream-300">Answered</span>
                    <span className="font-semibold text-navy-900 dark:text-cream-100">
                      {answeredCount} / {questions.length}
                    </span>
                  </div>
                  {unansweredCount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-red-600">Unanswered</span>
                      <span className="font-semibold text-red-600">
                        {unansweredCount}
                      </span>
                    </div>
                  )}
                  {flagged.size > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-600">Flagged</span>
                      <span className="font-semibold text-yellow-600">
                        {flagged.size}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Continue Test
                </button>
                <button
                  onClick={() => handleSubmit(false)}
                  disabled={isSubmitting}
                  className="flex-1 btn-primary"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Time Warning Modal */}
      <AnimatePresence>
        {showWarningModal && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div
              className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg ${
                showWarningModal === '1min'
                  ? 'bg-red-100 border border-red-300'
                  : 'bg-yellow-100 border border-yellow-300'
              }`}
            >
              <AlertTriangle
                className={`w-6 h-6 ${
                  showWarningModal === '1min' ? 'text-red-600' : 'text-yellow-600'
                }`}
              />
              <span
                className={`font-semibold ${
                  showWarningModal === '1min' ? 'text-red-800' : 'text-yellow-800'
                }`}
              >
                {showWarningModal === '1min'
                  ? '1 minute remaining!'
                  : '5 minutes remaining!'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ToolsSpeedDial variant="test" />
    </div>
  );
}
