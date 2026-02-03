import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  CheckCircle,
  XCircle,
  Flag,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Trophy,
  Target,
  BarChart3,
  Star,
} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function TestResults() {
  const navigate = useNavigate();
  const { sessionId } = useParams();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchResults = async () => {
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
          throw new Error('Failed to fetch results');
        }

        const data = await res.json();

        if (data.status === 'in_progress') {
          // Session is still in progress, redirect back
          navigate(`/cabinet/test/session/${sessionId}`, { replace: true });
          return;
        }

        setSession(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [sessionId, token, navigate]);

  const toggleQuestion = (order) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(order)) {
      newExpanded.delete(order);
    } else {
      newExpanded.add(order);
    }
    setExpandedQuestions(newExpanded);
  };

  const expandAll = () => {
    if (!session?.questions) return;
    const allOrders = new Set(session.questions.map((q) => q.order));
    setExpandedQuestions(allOrders);
  };

  const collapseAll = () => {
    setExpandedQuestions(new Set());
  };

  const getTestTypeName = (type) => {
    const names = {
      mini: 'Mini Test',
      section: 'Section Test',
      full: 'Full Practice',
    };
    return names[type] || type;
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800';
    if (percentage >= 60) return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800';
    return 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800';
  };

  const difficultyColor = {
    easy: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    hard: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-800',
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
          <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="font-display text-xl text-navy-900 dark:text-cream-100 mb-2">Error</h2>
          <p className="text-navy-600 dark:text-cream-300 mb-4">{error}</p>
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

  const questions = session?.questions || [];
  const correctCount = session?.correct_count || 0;
  const totalQuestions = session?.total_questions || questions.length;
  const scorePercentage = session?.score_percentage || 0;

  // Group questions by correctness for stats
  const incorrectQuestions = questions.filter((q) => !q.is_correct);
  const flaggedQuestions = questions.filter((q) => q.is_flagged);

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
      {/* Header */}
      <header className="bg-white dark:bg-navy-900 shadow-card">
        <div className="container-wide mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/cabinet/test"
                className="p-2 hover:bg-cream-100 dark:hover:bg-navy-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-navy-700 dark:text-cream-300" />
              </Link>
              <Link to="/cabinet" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gold-400" />
                </div>
                <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                  SAT<span className="text-gold-600 dark:text-gold-400">Prep</span>
                </span>
              </Link>
              <div className="h-6 w-px bg-cream-300 dark:bg-navy-700" />
              <span className="font-sans font-medium text-navy-700 dark:text-cream-300">
                Test Results
              </span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container-wide mx-auto px-6 py-8">
        {/* Score Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="card p-8">
            <div className="text-center mb-6">
              <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h1 className="font-display text-2xl text-navy-900 dark:text-cream-100 mb-2">
                {getTestTypeName(session?.test_type)} Complete!
              </h1>
              <p className="text-navy-600 dark:text-cream-300">
                {session?.status === 'timed_out'
                  ? 'Time expired - test auto-submitted'
                  : 'Great job completing your test'}
              </p>
            </div>

            {/* Score Display */}
            <div
              className={`rounded-2xl p-6 border ${getScoreBgColor(
                scorePercentage
              )} mb-6`}
            >
              <div className="text-center">
                <span
                  className={`font-display text-5xl font-bold ${getScoreColor(
                    scorePercentage
                  )}`}
                >
                  {scorePercentage}%
                </span>
                <p className="text-navy-600 dark:text-navy-400 mt-2">
                  {correctCount} out of {totalQuestions} correct
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-4 bg-cream-100 dark:bg-navy-800 rounded-xl">
                <Target className="w-6 h-6 text-navy-500 dark:text-navy-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-navy-900 dark:text-cream-100">
                  {correctCount}
                </p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Correct</p>
              </div>
              <div className="text-center p-4 bg-cream-100 dark:bg-navy-800 rounded-xl">
                <XCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-navy-900 dark:text-cream-100">
                  {incorrectQuestions.length}
                </p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Incorrect</p>
              </div>
              <div className="text-center p-4 bg-cream-100 dark:bg-navy-800 rounded-xl">
                <Flag className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-navy-900 dark:text-cream-100">
                  {flaggedQuestions.length}
                </p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Flagged</p>
              </div>
              <div className="text-center p-4 bg-gold-100 dark:bg-gold-900/30 rounded-xl">
                <Star className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gold-600 dark:text-gold-400">
                  +{session?.points_earned || 0}
                </p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Points</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <Link to="/cabinet/test" className="flex-1 btn-secondary text-center">
                Take Another Test
              </Link>
              <Link to="/cabinet/practice" className="flex-1 btn-primary text-center">
                Practice More
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Question Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl text-navy-900 dark:text-cream-100">
              Review Questions
            </h2>
            <div className="flex gap-2">
              <button
                onClick={expandAll}
                className="text-sm text-navy-600 dark:text-cream-300 hover:text-navy-900 dark:hover:text-cream-100 px-3 py-1 rounded-lg hover:bg-cream-200 dark:hover:bg-navy-800"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="text-sm text-navy-600 dark:text-cream-300 hover:text-navy-900 dark:hover:text-cream-100 px-3 py-1 rounded-lg hover:bg-cream-200 dark:hover:bg-navy-800"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {questions.map((q, index) => {
              const isExpanded = expandedQuestions.has(q.order);
              const choices = q.options || [];

              return (
                <motion.div
                  key={q.order}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card overflow-hidden"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleQuestion(q.order)}
                    className="w-full p-4 flex items-center justify-between hover:bg-cream-50 dark:hover:bg-navy-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {q.is_correct ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500" />
                      )}
                      <span className="font-semibold text-navy-900 dark:text-cream-100">
                        Question {q.order}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                          difficultyColor[q.difficulty]
                        }`}
                      >
                        {q.difficulty}
                      </span>
                      {q.is_flagged && (
                        <Flag className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-navy-500 dark:text-navy-400">{q.domain}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-navy-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-navy-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-cream-200 dark:border-navy-700"
                      >
                        <div className="p-6">
                          {/* Passage */}
                          {q.passage && (
                            <div className="mb-4 p-4 bg-cream-50 dark:bg-navy-800 rounded-xl border border-cream-200 dark:border-navy-700">
                              <p className="text-navy-700 dark:text-cream-300 text-sm leading-relaxed whitespace-pre-wrap">
                                {q.passage}
                              </p>
                            </div>
                          )}

                          {/* Question Text */}
                          <p className="text-navy-900 dark:text-cream-100 font-medium mb-4">
                            {q.question_text}
                          </p>

                          {/* Answer Choices */}
                          {choices.length > 0 ? (
                            <div className="space-y-2 mb-4">
                              {choices.map((choice) => {
                                const isUserAnswer = q.user_answer === choice.id;
                                const isCorrectAnswer =
                                  q.correct_answer === choice.id;

                                let bgColor = 'bg-cream-50 dark:bg-navy-800 border-cream-200 dark:border-navy-700';
                                if (isCorrectAnswer) {
                                  bgColor =
                                    'bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-800';
                                } else if (isUserAnswer && !q.is_correct) {
                                  bgColor = 'bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-800';
                                }

                                return (
                                  <div
                                    key={choice.id}
                                    className={`p-3 rounded-xl border ${bgColor}`}
                                  >
                                    <div className="flex items-start gap-3">
                                      <span
                                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                                          isCorrectAnswer
                                            ? 'bg-green-500 text-white'
                                            : isUserAnswer && !q.is_correct
                                            ? 'bg-red-500 text-white'
                                            : 'bg-cream-200 dark:bg-navy-700 text-navy-600 dark:text-cream-300'
                                        }`}
                                      >
                                        {isCorrectAnswer
                                          ? '✓'
                                          : isUserAnswer && !q.is_correct
                                          ? '✗'
                                          : choice.id}
                                      </span>
                                      <span className="flex-1 text-navy-800 dark:text-cream-200">
                                        {choice.text}
                                      </span>
                                      {isUserAnswer && (
                                        <span className="text-xs text-navy-500">
                                          Your answer
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            // Grid-in display
                            <div className="mb-4 p-4 bg-cream-50 dark:bg-navy-800 rounded-xl">
                              <div className="flex justify-between items-center">
                                <div>
                                  <span className="text-sm text-navy-500 dark:text-navy-400">
                                    Your answer:
                                  </span>
                                  <span
                                    className={`ml-2 font-semibold ${
                                      q.is_correct
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                    }`}
                                  >
                                    {q.user_answer || '(no answer)'}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-sm text-navy-500 dark:text-navy-400">
                                    Correct answer:
                                  </span>
                                  <span className="ml-2 font-semibold text-green-600">
                                    {q.correct_answer}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Explanation */}
                          {q.explanation && (
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
                                Explanation
                              </p>
                              <p className="text-navy-700 dark:text-cream-300 text-sm leading-relaxed">
                                {q.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
