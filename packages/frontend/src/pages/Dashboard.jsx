import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ClipboardCheck,
  Trophy,
  Flame,
  Target,
  TrendingUp,
  ArrowRight,
  LogOut,
  Medal,
  Upload,
  PenLine,
  FileText
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import RankBadge, { RankIcon } from '../components/RankBadge';
import ThemeToggle from '../components/ThemeToggle';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const [userStats, setUserStats] = useState(null);
  const [globalPosition, setGlobalPosition] = useState(null);
  const [recentTests, setRecentTests] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user stats
        const statsRes = await fetch('/api/leaderboard/me/', {
          headers: { Authorization: `Token ${token}` },
        });
        if (statsRes.ok) {
          const data = await statsRes.json();
          setUserStats(data.stats);
          setGlobalPosition(data.global_position);
        }

        // Fetch recent test history
        const historyRes = await fetch('/api/tests/history/', {
          headers: { Authorization: `Token ${token}` },
        });
        if (historyRes.ok) {
          const historyData = await historyRes.json();
          setRecentTests(historyData.slice(0, 5)); // Get last 5 tests
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                <span className="font-display font-black text-sm leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
              </div>
              <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                max<span className="text-gold-500 dark:text-gold-400 font-black">SAT</span>
              </span>
            </Link>

            <div className="flex items-center gap-4">
              {userStats?.current_streak > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-coral-50 dark:bg-coral-900/30 rounded-full">
                  <Flame className="w-4 h-4 text-coral-500 dark:text-coral-400" />
                  <span className="font-sans text-sm font-medium text-coral-600 dark:text-coral-400">{userStats.current_streak} day streak</span>
                </div>
              )}
              {userStats && <RankBadge rank={userStats.rank} size="sm" />}
              <ThemeToggle />
              <div className="flex items-center gap-3">
                {user?.avatar_url ? (
                  <img src={user.avatar_url} alt={user.username} className="w-10 h-10 rounded-full" />
                ) : (
                  <div className="w-10 h-10 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center">
                    <span className="font-sans font-medium text-gold-600 dark:text-gold-400">
                      {user?.username?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                )}
                <span className="font-sans text-sm font-medium text-navy-700 dark:text-cream-300 hidden sm:block">
                  {user?.username || user?.email}
                </span>
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

      <motion.main
        className="container-wide mx-auto px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants} className="mb-10">
          <h1 className="font-display text-3xl text-navy-900 dark:text-cream-100 mb-2">
            Welcome back, {user?.username || 'scholar'}!
          </h1>
          <p className="font-body text-navy-600 dark:text-cream-300">
            Ready to continue your SAT preparation journey?
          </p>
        </motion.div>

        {/* Teacher Upload Card */}
        {user?.role === 'teacher' && (
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-gradient-to-r from-gold-500 to-gold-400 rounded-2xl p-6 shadow-gold">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-900">Upload New Exam Questions</h2>
                  <p className="font-sans text-sm text-navy-800/70">Add questions from the latest SAT exam</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/cabinet/upload"
                  className="flex-1 flex items-center justify-center gap-2.5 py-3 bg-navy-900 text-cream-100 rounded-xl font-sans font-medium text-sm hover:bg-navy-800 transition-colors"
                >
                  <PenLine className="w-4.5 h-4.5" />
                  Enter Manually
                </Link>
                <Link
                  to="/cabinet/upload?mode=pdf"
                  className="flex-1 flex items-center justify-center gap-2.5 py-3 bg-white/90 text-navy-900 rounded-xl font-sans font-medium text-sm hover:bg-white transition-colors"
                >
                  <FileText className="w-4.5 h-4.5" />
                  Upload PDF
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gold-100 dark:bg-gold-900/30 rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-1">Total Points</p>
            <p className="font-display text-2xl text-navy-900 dark:text-cream-100">{userStats?.total_points?.toLocaleString() || 0}</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-1">Accuracy</p>
            <p className="font-display text-2xl text-navy-900 dark:text-cream-100">{userStats?.accuracy || 0}%</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-1">Tests Done</p>
            <p className="font-display text-2xl text-navy-900 dark:text-cream-100">{userStats?.tests_completed || 0}</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center">
                <Flame className="w-5 h-5 text-coral-600 dark:text-coral-400" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-1">Best Streak</p>
            <p className="font-display text-2xl text-navy-900 dark:text-cream-100">{userStats?.best_streak || 0} days</p>
          </div>

          <Link to="/cabinet/leaderboard" className="card p-5 hover:shadow-card-hover transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Medal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-1">Global Rank</p>
            <p className="font-display text-2xl text-navy-900 dark:text-cream-100">#{globalPosition || '-'}</p>
          </Link>
        </motion.div>

        {/* Main Actions */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
          {/* Practice Card */}
          <Link
            to="/cabinet/practice"
            className="card p-6 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-navy-900 dark:bg-navy-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-gold-400" />
              </div>
              <ArrowRight className="w-5 h-5 text-navy-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="font-display text-xl text-navy-900 dark:text-cream-100 mb-2">Practice</h2>
            <p className="font-body text-navy-600 dark:text-cream-300 text-sm mb-4">
              Practice questions by skill or topic with instant feedback.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cream-200 dark:bg-navy-700 rounded-full font-sans text-xs text-navy-700 dark:text-cream-300">
                Algebra
              </span>
              <span className="px-2 py-1 bg-cream-200 dark:bg-navy-700 rounded-full font-sans text-xs text-navy-700 dark:text-cream-300">
                Geometry
              </span>
              <span className="px-2 py-1 bg-cream-200 dark:bg-navy-700 rounded-full font-sans text-xs text-navy-700 dark:text-cream-300">
                +more
              </span>
            </div>
          </Link>

          {/* Test Card */}
          <Link
            to="/cabinet/test"
            className="card p-6 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ClipboardCheck className="w-6 h-6 text-navy-900" />
              </div>
              <ArrowRight className="w-5 h-5 text-navy-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="font-display text-xl text-navy-900 dark:text-cream-100 mb-2">Test Mode</h2>
            <p className="font-body text-navy-600 dark:text-cream-300 text-sm mb-4">
              Take timed tests to simulate real SAT conditions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gold-100 dark:bg-gold-900/30 rounded-full font-sans text-xs text-navy-700 dark:text-gold-400">
                Mini
              </span>
              <span className="px-2 py-1 bg-gold-100 dark:bg-gold-900/30 rounded-full font-sans text-xs text-navy-700 dark:text-gold-400">
                Section
              </span>
              <span className="px-2 py-1 bg-gold-100 dark:bg-gold-900/30 rounded-full font-sans text-xs text-navy-700 dark:text-gold-400">
                Full
              </span>
            </div>
          </Link>

          {/* Leaderboard Card */}
          <Link
            to="/cabinet/leaderboard"
            className="card p-6 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 text-navy-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="font-display text-xl text-navy-900 dark:text-cream-100 mb-2">Leaderboard</h2>
            <p className="font-body text-navy-600 dark:text-cream-300 text-sm mb-4">
              See how you rank against other students globally.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full font-sans text-xs text-purple-700 dark:text-purple-400">
                All Time
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full font-sans text-xs text-purple-700 dark:text-purple-400">
                Weekly
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full font-sans text-xs text-purple-700 dark:text-purple-400">
                Ranks
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Recent Tests */}
        <motion.div variants={itemVariants} className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-xl text-navy-900 dark:text-cream-100">Recent Tests</h3>
            <Link to="/cabinet/test" className="text-sm text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium">
              View All
            </Link>
          </div>
          <div className="card overflow-hidden">
            {recentTests.length > 0 ? (
              <div className="divide-y divide-cream-100 dark:divide-navy-800">
                {recentTests.map((test) => {
                  const testTypeNames = {
                    mini: 'Mini Test',
                    section: 'Section Test',
                    full: 'Full Practice',
                  };
                  const date = new Date(test.started_at);
                  const formattedDate = date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  });

                  return (
                    <Link
                      key={test.id}
                      to={`/cabinet/test/results/${test.id}`}
                      className="flex items-center justify-between p-4 hover:bg-cream-50 dark:hover:bg-navy-800 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            test.score_percentage >= 80
                              ? 'bg-green-100 dark:bg-green-900/30'
                              : test.score_percentage >= 60
                              ? 'bg-yellow-100 dark:bg-yellow-900/30'
                              : 'bg-red-100 dark:bg-red-900/30'
                          }`}
                        >
                          <span
                            className={`font-bold text-sm ${
                              test.score_percentage >= 80
                                ? 'text-green-600 dark:text-green-400'
                                : test.score_percentage >= 60
                                ? 'text-yellow-600 dark:text-yellow-400'
                                : 'text-red-600 dark:text-red-400'
                            }`}
                          >
                            {test.score_percentage}%
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-navy-900 dark:text-cream-100">
                            {testTypeNames[test.test_type] || test.test_type}
                          </p>
                          <p className="text-sm text-navy-500 dark:text-navy-400">
                            {test.correct_count}/{test.total_questions} correct
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-navy-500 dark:text-navy-400">{formattedDate}</p>
                        {test.points_earned > 0 && (
                          <p className="text-sm font-medium text-gold-600 dark:text-gold-400">
                            +{test.points_earned} pts
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center py-8 text-navy-400">
                <p className="font-body">No tests completed yet. Start a test to see your history!</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
