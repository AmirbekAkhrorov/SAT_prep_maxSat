import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Clock, ArrowLeft, LogOut, Play, RefreshCw, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';

const testTypes = [
  {
    id: 'mini',
    name: 'Mini Test',
    description: 'Quick practice session',
    questions: 5,
    time: 10,
    color: 'bg-gold-500',
    available: true
  },
  {
    id: 'section',
    name: 'Partial Test',
    description: 'Practice a full SAT section',
    questions: 20,
    time: 35,
    color: 'bg-navy-700',
    available: true
  },
  {
    id: 'full',
    name: 'Full Test',
    description: 'Complete SAT simulation',
    questions: 55,
    time: 120,
    color: 'bg-navy-900',
    available: true
  }
];

export default function Test() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [currentSession, setCurrentSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  // Check for in-progress session on mount
  useEffect(() => {
    const checkCurrentSession = async () => {
      try {
        const res = await fetch('/api/tests/current/', {
          headers: { Authorization: `Token ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.has_session) {
            setCurrentSession(data.session);
          }
        }
      } catch (err) {
        console.error('Failed to check current session:', err);
      } finally {
        setLoading(false);
      }
    };

    checkCurrentSession();
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleStartTest = async (testType) => {
    if (!testType.available) {
      return;
    }

    setStarting(true);
    setError(null);

    try {
      const res = await fetch('/api/tests/start/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ test_type: testType.id }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to start test');
      }

      const session = await res.json();
      navigate(`/cabinet/test/session/${session.id}`);
    } catch (err) {
      setError(err.message);
      setStarting(false);
    }
  };

  const handleResumeTest = () => {
    if (currentSession) {
      navigate(`/cabinet/test/session/${currentSession.id}`);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-100 dark:bg-navy-950 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
      {/* Header */}
      <header className="bg-white dark:bg-navy-900 shadow-card">
        <div className="container-wide mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/cabinet" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gold-400" />
                </div>
                <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                  SAT<span className="text-gold-600 dark:text-gold-400">Prep</span>
                </span>
              </Link>
              <div className="h-6 w-px bg-cream-300 dark:bg-navy-700" />
              <span className="font-sans font-medium text-navy-700 dark:text-cream-300">Test Mode</span>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
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
      </header>

      <motion.main
        className="container-wide mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link
          to="/cabinet"
          className="inline-flex items-center gap-2 text-navy-600 dark:text-cream-300 hover:text-navy-900 dark:hover:text-cream-100 mb-6 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
            >
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resume Session Card */}
        <AnimatePresence>
          {currentSession && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              <div className="card p-6 border-2 border-gold-400 bg-gold-50 dark:bg-gold-900/20 max-w-2xl mx-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <RefreshCw className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                      <h3 className="font-display text-lg text-navy-900 dark:text-cream-100">
                        Test in Progress
                      </h3>
                    </div>
                    <p className="text-navy-600 dark:text-cream-300 text-sm mb-1">
                      You have an unfinished{' '}
                      <strong>
                        {testTypes.find((t) => t.id === currentSession.test_type)?.name || 'Test'}
                      </strong>
                    </p>
                    <p className="text-navy-500 dark:text-navy-400 text-sm">
                      Time remaining:{' '}
                      <strong>{formatTime(currentSession.time_remaining_seconds)}</strong>
                    </p>
                  </div>
                  <button
                    onClick={handleResumeTest}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Resume Test
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="font-display text-3xl text-navy-900 dark:text-cream-100 mb-2">
            Choose Your Practice Test
          </h1>
          <p className="font-body text-navy-600 dark:text-cream-300">
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
              className={`card p-6 transition-all group relative ${
                test.available
                  ? 'hover:shadow-card-hover cursor-pointer'
                  : 'opacity-60 cursor-not-allowed'
              }`}
              onClick={() => !starting && handleStartTest(test)}
            >
              {!test.available && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-navy-200 text-navy-600 text-xs font-medium rounded-full">
                  Coming Soon
                </div>
              )}
              <div className={`w-14 h-14 ${test.color} rounded-2xl flex items-center justify-center mb-4 ${
                test.available ? 'group-hover:scale-110' : ''
              } transition-transform`}>
                <Clock className="w-7 h-7 text-cream-100" />
              </div>
              <h2 className="font-display text-xl text-navy-900 dark:text-cream-100 mb-1">{test.name}</h2>
              <p className="font-body text-navy-600 dark:text-cream-300 text-sm mb-4">{test.description}</p>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="font-sans text-navy-700 dark:text-cream-300">
                  <strong>{test.questions}</strong> questions
                </span>
                <span className="font-sans text-navy-700 dark:text-cream-300">
                  <strong>{test.time}</strong> min
                </span>
              </div>
              {test.available && (
                <button
                  disabled={starting || currentSession}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {starting ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Starting...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Start Test
                    </>
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="card p-6 max-w-lg mx-auto">
            <h3 className="font-display text-lg text-navy-900 dark:text-cream-100 mb-3">About Test Mode</h3>
            <ul className="text-left text-navy-600 dark:text-cream-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gold-500">&#x2022;</span>
                Timed tests with auto-submit when time expires
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500">&#x2022;</span>
                Navigate between questions freely
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500">&#x2022;</span>
                Flag questions for review before submitting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500">&#x2022;</span>
                Resume if you close your browser
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500">&#x2022;</span>
                Full review with explanations after completion
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
