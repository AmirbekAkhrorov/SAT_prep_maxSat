import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Trophy,
  Flame,
  Clock,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    questionsCompleted: 0,
    streak: 0,
    averageScore: 0,
    timeSpent: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Simulated stats (would come from API)
    setStats({
      questionsCompleted: 12,
      streak: 5,
      averageScore: 78,
      timeSpent: 45
    });

    setLoading(false);
  }, []);

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
      <div className="min-h-screen bg-cream-100 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Header */}
      <header className="bg-white shadow-card">
        <div className="container-wide mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-display text-xl font-semibold text-navy-900">
                SAT<span className="text-gold-600">Prep</span>
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-coral-50 rounded-full">
                <Flame className="w-4 h-4 text-coral-500" />
                <span className="font-sans text-sm font-medium text-coral-600">{stats.streak} day streak</span>
              </div>
              {user?.avatar_url ? (
                <img src={user.avatar_url} alt={user.username} className="w-10 h-10 rounded-full" />
              ) : (
                <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="font-sans font-medium text-gold-600">
                    {user?.username?.[0]?.toUpperCase() || 'U'}
                  </span>
                </div>
              )}
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
          <h1 className="font-display text-3xl text-navy-900 mb-2">
            Welcome back, {user?.username || 'scholar'}!
          </h1>
          <p className="font-body text-navy-600">
            Ready to continue your SAT preparation journey?
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-gold-600" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 mb-1">Questions Done</p>
            <p className="font-display text-2xl text-navy-900">{stats.questionsCompleted}</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-sage-600" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 mb-1">Average Score</p>
            <p className="font-display text-2xl text-navy-900">{stats.averageScore}%</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-navy-600" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 mb-1">Minutes Studied</p>
            <p className="font-display text-2xl text-navy-900">{stats.timeSpent}</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-coral-100 rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-coral-600" />
              </div>
            </div>
            <p className="font-sans text-sm text-navy-500 mb-1">Best Score</p>
            <p className="font-display text-2xl text-navy-900">92%</p>
          </div>
        </motion.div>

        {/* Main Actions */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
          {/* Practice Card */}
          <Link
            to="/cabinet/practice"
            className="card p-8 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-gold-400" />
              </div>
              <ArrowRight className="w-5 h-5 text-navy-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="font-display text-2xl text-navy-900 mb-2">Practice</h2>
            <p className="font-body text-navy-600 mb-4">
              Practice individual questions by skill, difficulty, or topic. Get instant feedback and explanations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cream-200 rounded-full font-sans text-sm text-navy-700">
                Algebra
              </span>
              <span className="px-3 py-1 bg-cream-200 rounded-full font-sans text-sm text-navy-700">
                Functions
              </span>
              <span className="px-3 py-1 bg-cream-200 rounded-full font-sans text-sm text-navy-700">
                +3 more
              </span>
            </div>
          </Link>

          {/* Test Card */}
          <Link
            to="/cabinet/test"
            className="card p-8 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ClipboardCheck className="w-7 h-7 text-navy-900" />
              </div>
              <ArrowRight className="w-5 h-5 text-navy-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="font-display text-2xl text-navy-900 mb-2">Test Mode</h2>
            <p className="font-body text-navy-600 mb-4">
              Take timed practice tests to simulate real SAT conditions. Track your progress over time.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gold-100 rounded-full font-sans text-sm text-navy-700">
                Mini (5 q)
              </span>
              <span className="px-3 py-1 bg-gold-100 rounded-full font-sans text-sm text-navy-700">
                Section (20 q)
              </span>
              <span className="px-3 py-1 bg-gold-100 rounded-full font-sans text-sm text-navy-700">
                Full (54 q)
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Recent Activity Placeholder */}
        <motion.div variants={itemVariants} className="mt-10">
          <h3 className="font-display text-xl text-navy-900 mb-4">Recent Activity</h3>
          <div className="card p-6">
            <div className="flex items-center justify-center py-8 text-navy-400">
              <p className="font-body">No recent activity. Start practicing to see your history!</p>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
