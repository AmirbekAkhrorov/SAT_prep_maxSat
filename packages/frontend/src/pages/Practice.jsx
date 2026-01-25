import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Filter,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  XCircle,
  Star,
  ArrowLeft,
} from 'lucide-react';
import QuestionCard from '../components/QuestionCard';

export default function Practice() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [progress, setProgress] = useState({});
  const [notes, setNotes] = useState({});
  const [attemptedQuestions, setAttemptedQuestions] = useState(new Set());
  const [filter, setFilter] = useState({ domain: '', difficulty: '' });
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [expandedDomains, setExpandedDomains] = useState({});
  const [expandedDifficulties, setExpandedDifficulties] = useState({});
  const [error, setError] = useState(null);

  // Track time spent on each question
  const questionStartTime = useRef({});

  useEffect(() => {
    fetchQuestions();
    fetchProgress();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filter, questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions/?format=json');
      const data = await response.json();
      const questionsData = data.results || data;
      setQuestions(questionsData);

      // Auto-expand first domain
      if (questionsData.length > 0) {
        const domains = [...new Set(questionsData.map(q => q.domain))];
        setExpandedDomains(domains.reduce((acc, d) => ({ ...acc, [d]: true }), {}));
      }
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      setError('Failed to load questions. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };

  const fetchProgress = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch('/api/attempts/progress/', {
        headers: { Authorization: `Token ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setProgress(data);
      }
    } catch (error) {
      console.error('Failed to fetch progress:', error);
    }

    try {
      const notesRes = await fetch('/api/notes/', {
        headers: { Authorization: `Token ${token}` },
      });
      if (notesRes.ok) {
        const notesData = await notesRes.json();
        const notesMap = {};
        notesData.forEach(note => {
          notesMap[note.question] = note;
        });
        setNotes(notesMap);
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }

    // Fetch all attempts to track attempted questions
    try {
      const attemptsRes = await fetch('/api/attempts/', {
        headers: { Authorization: `Token ${token}` },
      });
      if (attemptsRes.ok) {
        const attemptsData = await attemptsRes.json();
        const attemptedSet = new Set();
        attemptsData.forEach(attempt => {
          attemptedSet.add(attempt.question);
        });
        setAttemptedQuestions(attemptedSet);
      }
    } catch (error) {
      console.error('Failed to fetch attempts:', error);
    }
  };

  const applyFilters = () => {
    let filtered = [...questions];
    if (filter.domain) {
      filtered = filtered.filter(q => q.domain === filter.domain);
    }
    if (filter.difficulty) {
      filtered = filtered.filter(q => q.difficulty === filter.difficulty);
    }
    setFilteredQuestions(filtered);
    setShowFeedback(false);
  };

  const handleAnswer = async (questionId, answer, skipFeedback = false) => {
    if (skipFeedback) {
      // Find next question
      const currentIdx = filteredQuestions.findIndex(q => q.question_id === questionId);
      if (currentIdx >= 0 && currentIdx < filteredQuestions.length - 1) {
        const nextQuestion = filteredQuestions[currentIdx + 1];
        setCurrentQuestion(nextQuestion);
        setShowFeedback(false);
        setSelectedAnswer(null);
        questionStartTime.current[nextQuestion.question_id] = Date.now();
      } else {
        // No more questions, go back to list
        setCurrentQuestion(null);
        setShowFeedback(false);
      }
      return;
    }

    if (!answer) {
      alert('Please select an answer');
      return;
    }

    const token = localStorage.getItem('token');
    const startTime = questionStartTime.current[questionId] ?? Date.now();
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    try {
      const res = await fetch('/api/check-answer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Token ${token}` }),
        },
        body: JSON.stringify({
          question_id: questionId,
          answer,
          time_spent: timeSpent
        }),
      });

      if (res.ok) {
        const data = await res.json();

        // Update current question with correct answer from API response
        setCurrentQuestion(prev => ({
          ...prev,
          correct_answer: data.correct_answer,
          explanation: data.explanation,
        }));

        // Now show feedback with the correct answer available
        setShowFeedback(true);

        // Add to attempted questions
        const question = questions.find(q => q.question_id === questionId);
        if (question) {
          setAttemptedQuestions(prev => new Set([...prev, question.id]));
        }

        if (token) {
          fetchProgress();
        }
      } else {
        throw new Error('Failed to check answer');
      }
    } catch (error) {
      console.error('Failed to check answer:', error);
      setError('Failed to check your answer. Please try again.');
    }
  };

  const handleAddNote = async (questionId, content) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please sign in to save notes');
      return;
    }

    const existingNote = notes[questionId];
    try {
      if (existingNote) {
        await fetch(`/api/notes/${existingNote.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ question: questionId, content }),
        });
      } else {
        await fetch('/api/notes/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ question: questionId, content }),
        });
      }
      fetchProgress();
    } catch (error) {
      console.error('Failed to save note:', error);
      throw error; // Re-throw to show error in QuestionCard
    }
  };

  const toggleDomain = (domain) => {
    setExpandedDomains(prev => ({ ...prev, [domain]: !prev[domain] }));
  };

  const toggleDifficulty = (domain, difficulty) => {
    const key = `${domain}-${difficulty}`;
    setExpandedDifficulties(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Group questions by domain, then by difficulty
  const groupedQuestions = filteredQuestions.reduce((acc, q) => {
    if (!acc[q.domain]) acc[q.domain] = { easy: [], medium: [], hard: [] };
    acc[q.domain][q.difficulty].push(q);
    return acc;
  }, {});

  const domains = Object.keys(groupedQuestions).sort();
  const difficulties = ['easy', 'medium', 'hard'];

  const difficultyColor = {
    easy: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    hard: 'bg-red-100 text-red-800 border-red-200',
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-100 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  // If viewing a question, show the practice mode
  if (currentQuestion) {
    const userProgress = progress.by_difficulty?.[currentQuestion.difficulty];
    const userNote = notes[currentQuestion.id];

    return (
      <div className="min-h-screen bg-cream-100">
        <header className="bg-white shadow-card">
          <div className="container-wide mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setCurrentQuestion(null);
                    setShowFeedback(false);
                    setSelectedAnswer(null);
                  }}
                  className="p-2 hover:bg-cream-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-navy-700" />
                </button>
                <Link to="/cabinet" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="font-display text-xl font-semibold text-navy-900">
                    SAT<span className="text-gold-600">Prep</span>
                  </span>
                </Link>
                <div className="h-6 w-px bg-cream-300" />
                <span className="font-sans font-medium text-navy-700">Practice</span>
              </div>

              {/* Progress Stats */}
              <div className="hidden md:flex items-center gap-4 text-sm">
                <span className="text-navy-600">
                  Accuracy: <strong>{progress.accuracy || 0}%</strong>
                </span>
                <span className="text-navy-600">
                  Mastered: <strong>{progress.mastered_questions || 0}</strong>
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="container-wide mx-auto px-6 py-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {error}
              <button onClick={() => setError(null)} className="float-right text-red-500">×</button>
            </div>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.question_id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <QuestionCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                showFeedback={showFeedback}
                userProgress={userProgress}
                onAddNote={handleAddNote}
                userNote={userNote}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={setSelectedAnswer}
              />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  }

  // Show the categorized list view
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
              <span className="font-sans font-medium text-navy-700">Practice</span>
            </div>

            {/* Overall Progress */}
            <div className="hidden md:flex items-center gap-6">
              <div className="text-sm">
                <span className="text-navy-500">Accuracy</span>
                <p className="font-semibold text-navy-900">{progress.accuracy || 0}%</p>
              </div>
              <div className="text-sm">
                <span className="text-navy-500">Mastered</span>
                <p className="font-semibold text-green-600">{progress.mastered_questions || 0}</p>
              </div>
              <div className="text-sm">
                <span className="text-navy-500">Attempted</span>
                <p className="font-semibold text-navy-900">{progress.unique_questions_attempted || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container-wide mx-auto px-6 py-8">
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
            {error}
            <button onClick={() => setError(null)} className="float-right text-red-500">×</button>
          </div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 mb-8"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-navy-500" />
              <span className="font-sans font-medium text-navy-700">Filters:</span>
            </div>

            <select
              value={filter.domain}
              onChange={(e) => setFilter(prev => ({ ...prev, domain: e.target.value }))}
              className="px-4 py-2 bg-cream-100 border border-cream-300 rounded-lg font-sans text-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="">All Domains</option>
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>

            <select
              value={filter.difficulty}
              onChange={(e) => setFilter(prev => ({ ...prev, difficulty: e.target.value }))}
              className="px-4 py-2 bg-cream-100 border border-cream-300 rounded-lg font-sans text-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</option>
              ))}
            </select>

            <div className="ml-auto font-sans text-sm text-navy-500">
              {filteredQuestions.length} questions
            </div>
          </div>
        </motion.div>

        {/* Questions by Domain */}
        <div className="space-y-6">
          {domains.map(domain => (
            <motion.div
              key={domain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card overflow-hidden"
            >
              {/* Domain Header */}
              <button
                onClick={() => toggleDomain(domain)}
                className="w-full p-4 bg-cream-100 flex items-center justify-between hover:bg-cream-200 transition-colors"
              >
                <h2 className="font-semibold text-navy-900">{domain}</h2>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {difficulties.map(diff => {
                      const count = groupedQuestions[domain][diff].length;
                      return (
                        <span
                          key={diff}
                          className={`text-xs px-2 py-1 rounded-full ${difficultyColor[diff]}`}
                        >
                          {count}
                        </span>
                      );
                    })}
                  </div>
                  {expandedDomains[domain] ? (
                    <ChevronDown className="w-5 h-5 text-navy-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-navy-500" />
                  )}
                </div>
              </button>

              {/* Difficulty Sections */}
              <AnimatePresence>
                {expandedDomains[domain] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="divide-y divide-cream-200"
                  >
                    {difficulties.map(difficulty => {
                      const diffQuestions = groupedQuestions[domain][difficulty];
                      if (diffQuestions.length === 0) return null;

                      const diffKey = `${domain}-${difficulty}`;
                      const isExpanded = expandedDifficulties[diffKey];

                      return (
                        <div key={difficulty}>
                          {/* Difficulty Header */}
                          <button
                            onClick={() => toggleDifficulty(domain, difficulty)}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-cream-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColor[difficulty]}`}
                              >
                                {difficulty}
                              </span>
                              <span className="text-sm text-navy-600">
                                {diffQuestions.length} questions
                              </span>
                            </div>
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-navy-400" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-navy-400" />
                            )}
                          </button>

                          {/* Questions List */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="divide-y divide-cream-100"
                              >
                                {diffQuestions.map((q, idx) => {
                                  const qProgress = progress.by_difficulty?.[difficulty];
                                  const isMastered = qProgress?.mastered > 0;
                                  const userNote = notes[q.id];
                                  const isAttempted = attemptedQuestions.has(q.id);

                                  return (
                                    <motion.button
                                      key={q.id}
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: idx * 0.03 }}
                                      onClick={() => {
                                        setCurrentQuestion(q);
                                        setShowFeedback(false);
                                        setSelectedAnswer(null);
                                        questionStartTime.current[q.question_id] = Date.now();
                                      }}
                                      className="w-full p-4 flex items-center justify-between hover:bg-cream-50 transition-colors text-left group"
                                    >
                                      <div className="flex-1 min-w-0 mr-4">
                                        <p className="text-navy-800 line-clamp-2 text-sm">
                                          {q.question_text}
                                        </p>
                                        <p className="text-xs text-navy-500 mt-1">
                                          {q.skill}
                                        </p>
                                      </div>
                                      <div className="flex items-center gap-3">
                                        {isAttempted && (
                                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" title="Attempted" />
                                        )}
                                        {isMastered && (
                                          <Star className="w-4 h-4 text-gold-500 fill-gold-500 flex-shrink-0" title="Mastered" />
                                        )}
                                        {userNote?.content && (
                                          <div className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0" title="Has note" />
                                        )}
                                        <ChevronRight className="w-4 h-4 text-navy-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                      </div>
                                    </motion.button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {domains.length === 0 && (
          <div className="text-center py-12">
            <p className="text-navy-600">No questions match your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
