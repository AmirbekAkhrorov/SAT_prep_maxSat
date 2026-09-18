import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Filter,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  XCircle,
  Star,
  ArrowLeft,
  LogOut,
  Check,
  X,
} from 'lucide-react';
import QuestionCard from '../components/QuestionCard';
import ToolsSpeedDial from '../components/ToolsSpeedDial';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';
import { API_BASE } from '../services/api';

export default function Practice() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [progress, setProgress] = useState({});
  const [notes, setNotes] = useState({});
  const [attemptedQuestions, setAttemptedQuestions] = useState(new Set());
  const [filter, setFilter] = useState({ domains: [], difficulties: [], skills: [] });
  const [openDropdown, setOpenDropdown] = useState(null); // 'domain' | 'difficulty' | 'skill' | null
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [expandedDomains, setExpandedDomains] = useState({});
  const [expandedDifficulties, setExpandedDifficulties] = useState({});
  const [error, setError] = useState(null);
  const [skills, setSkills] = useState([]);

  // Track time spent on each question
  const questionStartTime = useRef({});

  useEffect(() => {
    fetchQuestions();
    fetchProgress();
    fetchSkills();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filter, questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${API_BASE}/questions/?format=json`);
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

  const fetchSkills = async () => {
    try {
      const response = await fetch(`${API_BASE}/skills/?format=json`);
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error('Failed to fetch skills:', error);
    }
  };

  const fetchProgress = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch(`${API_BASE}/attempts/progress/`, {
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
      const notesRes = await fetch(`${API_BASE}/notes/`, {
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
      const attemptsRes = await fetch(`${API_BASE}/attempts/`, {
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
    if (filter.domains.length > 0) {
      filtered = filtered.filter(q => filter.domains.includes(q.domain));
    }
    if (filter.difficulties.length > 0) {
      filtered = filtered.filter(q => filter.difficulties.includes(q.difficulty));
    }
    if (filter.skills.length > 0) {
      filtered = filtered.filter(q => filter.skills.includes(q.skill));
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
      const res = await fetch(`${API_BASE}/check-answer/`, {
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
        await fetch(`${API_BASE}/notes/${existingNote.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ question: questionId, content }),
        });
      } else {
        await fetch(`${API_BASE}/notes/`, {
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

  // Compute all available options from full question set (not filtered)
  const allDomains = useMemo(() =>
    [...new Set(questions.map(q => q.domain))].sort(),
    [questions]
  );

  // All unique difficulties (static)
  const allDifficulties = ['easy', 'medium', 'hard'];

  // Skills filtered by selected domains (from skills API, not filtered questions)
  const availableSkills = useMemo(() =>
    filter.domains.length > 0
      ? skills.filter(s => filter.domains.includes(s.domain))
      : skills,
    [skills, filter.domains]
  );

  // Domains to display in the question list (from filtered questions)
  const domains = Object.keys(groupedQuestions).sort();
  const difficulties = ['easy', 'medium', 'hard'];

  // Helper functions for filter management
  const toggleFilterValue = (filterKey, value) => {
    setFilter(prev => {
      const currentValues = prev[filterKey];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];

      // If clearing domains, also clear skills that no longer match
      if (filterKey === 'domains' && newValues.length < currentValues.length) {
        const validSkills = skills
          .filter(s => newValues.length === 0 || newValues.includes(s.domain))
          .map(s => s.name);
        const filteredSkills = prev.skills.filter(s => validSkills.includes(s));
        return { ...prev, [filterKey]: newValues, skills: filteredSkills };
      }

      return { ...prev, [filterKey]: newValues };
    });
  };

  const clearFilter = (filterKey, value) => {
    setFilter(prev => {
      const newValues = prev[filterKey].filter(v => v !== value);

      // If clearing a domain, also clear skills that no longer match
      if (filterKey === 'domains') {
        const validSkills = skills
          .filter(s => newValues.length === 0 || newValues.includes(s.domain))
          .map(s => s.name);
        const filteredSkills = prev.skills.filter(s => validSkills.includes(s));
        return { ...prev, [filterKey]: newValues, skills: filteredSkills };
      }

      return { ...prev, [filterKey]: newValues };
    });
  };

  const clearFilterCategory = (filterKey) => {
    setFilter(prev => {
      if (filterKey === 'domains') {
        return { ...prev, domains: [], skills: [] };
      }
      return { ...prev, [filterKey]: [] };
    });
  };

  const clearAllFilters = () => {
    setFilter({ domains: [], difficulties: [], skills: [] });
    setOpenDropdown(null);
  };

  const activeFilterCount = filter.domains.length + filter.difficulties.length + filter.skills.length;

  // Close dropdown when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  // If viewing a question, show the practice mode
  if (currentQuestion) {
    const userProgress = progress.by_difficulty?.[currentQuestion.difficulty];
    const userNote = notes[currentQuestion.id];

    return (
      <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
        <header className="bg-white dark:bg-navy-900 shadow-card">
          <div className="container-wide mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setCurrentQuestion(null);
                    setShowFeedback(false);
                    setSelectedAnswer(null);
                  }}
                  className="p-2 hover:bg-cream-100 dark:hover:bg-navy-800 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-navy-700 dark:text-cream-300" />
                </button>
                <Link to="/cabinet" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                    <span className="font-display font-black text-sm leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
                  </div>
                  <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                    max<span className="text-gold-500 dark:text-gold-400 font-black">SAT</span>
                  </span>
                </Link>
                <div className="h-6 w-px bg-cream-300 dark:bg-navy-700" />
                <span className="font-sans font-medium text-navy-700 dark:text-cream-300">Practice</span>
              </div>

              {/* Progress Stats and User */}
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4 text-sm">
                  <span className="text-navy-600 dark:text-cream-300">
                    Accuracy: <strong>{progress.accuracy || 0}%</strong>
                  </span>
                  <span className="text-navy-600 dark:text-cream-300">
                    Mastered: <strong>{progress.mastered_questions || 0}</strong>
                  </span>
                </div>
                <ThemeToggle />
                <button
                  onClick={handleLogout}
                  className="p-2 text-navy-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                  title="Log out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container-wide mx-auto px-6 py-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400">
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
        <ToolsSpeedDial />
      </div>
    );
  }

  // Show the categorized list view
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
      {/* Header */}
      <header className="bg-white dark:bg-navy-900 shadow-card">
        <div className="container-wide mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/cabinet" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                  <span className="font-display font-black text-sm leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
                </div>
                <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                  max<span className="text-gold-500 dark:text-gold-400 font-black">SAT</span>
                </span>
              </Link>
              <div className="h-6 w-px bg-cream-300 dark:bg-navy-700" />
              <span className="font-sans font-medium text-navy-700 dark:text-cream-300">Practice</span>
            </div>

            {/* Overall Progress and User */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <div className="text-sm">
                  <span className="text-navy-500 dark:text-navy-400">Accuracy</span>
                  <p className="font-semibold text-navy-900 dark:text-cream-100">{progress.accuracy || 0}%</p>
                </div>
                <div className="text-sm">
                  <span className="text-navy-500 dark:text-navy-400">Mastered</span>
                  <p className="font-semibold text-green-600 dark:text-green-400">{progress.mastered_questions || 0}</p>
                </div>
                <div className="text-sm">
                  <span className="text-navy-500 dark:text-navy-400">Attempted</span>
                  <p className="font-semibold text-navy-900 dark:text-cream-100">{progress.unique_questions_attempted || 0}</p>
                </div>
              </div>
              <ThemeToggle />
              <div className="flex items-center gap-3">
                {user?.avatar_url ? (
                  <img src={user.avatar_url} alt={user.username} className="w-8 h-8 rounded-full" />
                ) : (
                  <div className="w-8 h-8 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center">
                    <span className="font-sans text-sm font-medium text-gold-600 dark:text-gold-400">
                      {user?.username?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                )}
                <button
                  onClick={handleLogout}
                  className="p-2 text-navy-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                  title="Log out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container-wide mx-auto px-6 py-8">
        {error && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400">
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
          {/* Filter Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-navy-500 dark:text-navy-400" />
              <span className="font-sans font-medium text-navy-700 dark:text-cream-300">
                Filters{activeFilterCount > 0 && ` (${activeFilterCount})`}
              </span>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm font-sans text-navy-500 dark:text-navy-400 hover:text-navy-700 dark:hover:text-cream-300 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center gap-4 flex-wrap" ref={dropdownRef}>
            {/* Domain Filter */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'domain' ? null : 'domain')}
                className={`w-48 px-4 py-2.5 bg-cream-100 dark:bg-navy-800 border rounded-lg font-sans text-navy-700 dark:text-cream-300 text-left flex items-center justify-between transition-all ${
                  filter.domains.length > 0 ? 'border-gold-400 ring-2 ring-gold-400' : 'border-cream-300 dark:border-navy-700'
                } ${openDropdown === 'domain' ? 'ring-2 ring-gold-500' : ''}`}
              >
                <span className="truncate">
                  {filter.domains.length === 0
                    ? 'All Domains'
                    : filter.domains.length === 1
                    ? filter.domains[0]
                    : `${filter.domains.length} selected`}
                </span>
                <ChevronDown className={`w-4 h-4 text-navy-400 transition-transform ${openDropdown === 'domain' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'domain' && (
                <div className="absolute z-20 mt-1 w-56 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-lg shadow-lg py-2 max-h-64 overflow-y-auto">
                  {allDomains.map(domain => (
                    <label
                      key={domain}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-cream-50 dark:hover:bg-navy-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filter.domains.includes(domain)}
                        onChange={() => toggleFilterValue('domains', domain)}
                        className="w-4 h-4 rounded border-cream-400 text-gold-500 focus:ring-gold-500"
                      />
                      <span className="font-sans text-sm text-navy-700 dark:text-cream-300">{domain}</span>
                    </label>
                  ))}
                  {filter.domains.length > 0 && (
                    <div className="border-t border-cream-200 dark:border-navy-700 mt-2 pt-2 px-4">
                      <button
                        onClick={() => clearFilterCategory('domains')}
                        className="text-sm text-navy-500 dark:text-navy-400 hover:text-navy-700 dark:hover:text-cream-300"
                      >
                        Clear domains
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'difficulty' ? null : 'difficulty')}
                className={`w-48 px-4 py-2.5 bg-cream-100 dark:bg-navy-800 border rounded-lg font-sans text-navy-700 dark:text-cream-300 text-left flex items-center justify-between transition-all ${
                  filter.difficulties.length > 0 ? 'border-gold-400 ring-2 ring-gold-400' : 'border-cream-300 dark:border-navy-700'
                } ${openDropdown === 'difficulty' ? 'ring-2 ring-gold-500' : ''}`}
              >
                <span className="truncate">
                  {filter.difficulties.length === 0
                    ? 'All Difficulties'
                    : filter.difficulties.length === 1
                    ? filter.difficulties[0].charAt(0).toUpperCase() + filter.difficulties[0].slice(1)
                    : `${filter.difficulties.length} selected`}
                </span>
                <ChevronDown className={`w-4 h-4 text-navy-400 transition-transform ${openDropdown === 'difficulty' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'difficulty' && (
                <div className="absolute z-20 mt-1 w-56 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-lg shadow-lg py-2">
                  {allDifficulties.map(diff => (
                    <label
                      key={diff}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-cream-50 dark:hover:bg-navy-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filter.difficulties.includes(diff)}
                        onChange={() => toggleFilterValue('difficulties', diff)}
                        className="w-4 h-4 rounded border-cream-400 text-gold-500 focus:ring-gold-500"
                      />
                      <span className={`font-sans text-sm px-2 py-0.5 rounded-full ${difficultyColor[diff]}`}>
                        {diff.charAt(0).toUpperCase() + diff.slice(1)}
                      </span>
                    </label>
                  ))}
                  {filter.difficulties.length > 0 && (
                    <div className="border-t border-cream-200 dark:border-navy-700 mt-2 pt-2 px-4">
                      <button
                        onClick={() => clearFilterCategory('difficulties')}
                        className="text-sm text-navy-500 dark:text-navy-400 hover:text-navy-700 dark:hover:text-cream-300"
                      >
                        Clear difficulties
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Skill Filter */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'skill' ? null : 'skill')}
                className={`w-48 px-4 py-2.5 bg-cream-100 dark:bg-navy-800 border rounded-lg font-sans text-navy-700 dark:text-cream-300 text-left flex items-center justify-between transition-all ${
                  filter.skills.length > 0 ? 'border-gold-400 ring-2 ring-gold-400' : 'border-cream-300 dark:border-navy-700'
                } ${openDropdown === 'skill' ? 'ring-2 ring-gold-500' : ''}`}
              >
                <span className="truncate">
                  {filter.skills.length === 0
                    ? 'All Skills'
                    : filter.skills.length === 1
                    ? filter.skills[0]
                    : `${filter.skills.length} selected`}
                </span>
                <ChevronDown className={`w-4 h-4 text-navy-400 transition-transform ${openDropdown === 'skill' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'skill' && (
                <div className="absolute z-20 mt-1 w-64 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-lg shadow-lg py-2 max-h-64 overflow-y-auto">
                  {availableSkills.length === 0 ? (
                    <div className="px-4 py-2 text-sm text-navy-500 dark:text-navy-400">No skills available</div>
                  ) : (
                    availableSkills.map(skill => (
                      <label
                        key={skill.skill_id}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-cream-50 dark:hover:bg-navy-700 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filter.skills.includes(skill.name)}
                          onChange={() => toggleFilterValue('skills', skill.name)}
                          className="w-4 h-4 rounded border-cream-400 text-gold-500 focus:ring-gold-500"
                        />
                        <span className="font-sans text-sm text-navy-700 dark:text-cream-300">{skill.name}</span>
                      </label>
                    ))
                  )}
                  {filter.skills.length > 0 && (
                    <div className="border-t border-cream-200 dark:border-navy-700 mt-2 pt-2 px-4">
                      <button
                        onClick={() => clearFilterCategory('skills')}
                        className="text-sm text-navy-500 dark:text-navy-400 hover:text-navy-700 dark:hover:text-cream-300"
                      >
                        Clear skills
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="ml-auto font-sans text-sm text-navy-500 dark:text-navy-400">
              {filteredQuestions.length} questions
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-cream-200 dark:border-navy-700 flex-wrap">
              <span className="text-sm text-navy-500 dark:text-navy-400 font-sans">Active:</span>
              {filter.domains.map(domain => (
                <span key={domain} className="filter-chip">
                  <Check className="w-3 h-3 text-green-500" />
                  {domain}
                  <button
                    onClick={() => clearFilter('domains', domain)}
                    className="ml-1 hover:text-red-500 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {filter.difficulties.map(diff => (
                <span key={diff} className="filter-chip">
                  <Check className="w-3 h-3 text-green-500" />
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  <button
                    onClick={() => clearFilter('difficulties', diff)}
                    className="ml-1 hover:text-red-500 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {filter.skills.map(skill => (
                <span key={skill} className="filter-chip">
                  <Check className="w-3 h-3 text-green-500" />
                  {skill}
                  <button
                    onClick={() => clearFilter('skills', skill)}
                    className="ml-1 hover:text-red-500 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
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
                className="w-full p-4 bg-cream-100 dark:bg-navy-800 flex items-center justify-between hover:bg-cream-200 dark:hover:bg-navy-700 transition-colors"
              >
                <h2 className="font-semibold text-navy-900 dark:text-cream-100">{domain}</h2>
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
                    className="divide-y divide-cream-200 dark:divide-navy-700"
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
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-cream-50 dark:hover:bg-navy-800 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColor[difficulty]}`}
                              >
                                {difficulty}
                              </span>
                              <span className="text-sm text-navy-600 dark:text-cream-300">
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
                                className="divide-y divide-cream-100 dark:divide-navy-800"
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
                                      className="w-full p-4 flex items-center justify-between hover:bg-cream-50 dark:hover:bg-navy-800 transition-colors text-left group"
                                    >
                                      <div className="flex-1 min-w-0 mr-4">
                                        <p className="text-navy-800 dark:text-cream-200 line-clamp-2 text-sm">
                                          {q.question_text}
                                        </p>
                                        <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">
                                          {q.skill}
                                        </p>
                                      </div>
                                      <div className="flex items-center gap-3">
                                        {q.is_new && (
                                          <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 border border-gold-300 dark:border-gold-700 rounded flex-shrink-0">NEW</span>
                                        )}
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
            <p className="text-navy-600 dark:text-cream-300">No questions match your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
