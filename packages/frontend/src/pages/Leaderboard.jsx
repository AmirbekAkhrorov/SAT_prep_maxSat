import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Trophy,
  Medal,
  Target,
  Flame,
  TrendingUp,
  ArrowLeft,
  LogOut,
  Crown,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import RankBadge, { RankIcon, RANK_CONFIG } from '../components/RankBadge';
import ThemeToggle from '../components/ThemeToggle';

export default function Leaderboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('all-time');
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [monthlyData, setMonthlyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    setLoading(true);
    try {
      // Fetch all-time, weekly, and monthly leaderboards in parallel
      const [allTimeRes, weeklyRes, monthlyRes] = await Promise.all([
        fetch('/api/leaderboard/', {
          headers: { Authorization: `Token ${token}` },
        }),
        fetch('/api/leaderboard/weekly/', {
          headers: { Authorization: `Token ${token}` },
        }),
        fetch('/api/leaderboard/monthly/', {
          headers: { Authorization: `Token ${token}` },
        }),
      ]);

      if (!allTimeRes.ok || !weeklyRes.ok || !monthlyRes.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }

      const allTimeData = await allTimeRes.json();
      const weeklyDataRes = await weeklyRes.json();
      const monthlyDataRes = await monthlyRes.json();

      setLeaderboardData(allTimeData);
      setWeeklyData(weeklyDataRes);
      setMonthlyData(monthlyDataRes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const currentData = activeTab === 'all-time'
    ? leaderboardData
    : activeTab === 'weekly'
    ? weeklyData
    : monthlyData;
  const userStats = currentData?.user_stats;
  const userPosition = currentData?.user_position;

  const getPositionIcon = (position) => {
    if (position === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (position === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (position === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="w-5 text-center font-semibold text-navy-600 dark:text-cream-300">#{position}</span>;
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
          <Trophy className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="font-display text-xl text-navy-900 dark:text-cream-100 mb-2">Error</h2>
          <p className="text-navy-600 dark:text-cream-300 mb-4">{error}</p>
          <button onClick={() => fetchLeaderboardData()} className="btn-primary">
            Try Again
          </button>
        </div>
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
                  <span className="font-display font-black text-sm leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
                </div>
                <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                  max<span className="text-gold-500 dark:text-gold-400 font-black">SAT</span>
                </span>
              </Link>
              <div className="h-6 w-px bg-cream-300 dark:bg-navy-700" />
              <span className="font-sans font-medium text-navy-700 dark:text-cream-300">Leaderboard</span>
            </div>
            <div className="flex items-center gap-3">
              {userStats && <RankBadge rank={userStats.rank} size="sm" />}
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

      <main className="container-wide mx-auto px-6 py-8">
        <Link
          to="/cabinet"
          className="inline-flex items-center gap-2 text-navy-600 dark:text-cream-300 hover:text-navy-900 dark:hover:text-cream-100 mb-6 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* User Stats Card */}
        {userStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <RankIcon rank={userStats.rank} size="xl" />
                <div>
                  <h2 className="font-display text-xl text-navy-900 dark:text-cream-100">
                    {userStats.username}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <RankBadge rank={userStats.rank} size="sm" />
                    <span className="text-navy-500 dark:text-navy-400 text-sm">
                      #{userPosition} of {leaderboardData?.total_users || 0}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gold-600 mb-1">
                    <Trophy className="w-4 h-4" />
                    <span className="font-bold text-xl">
                      {activeTab === 'all-time'
                        ? userStats.total_points
                        : activeTab === 'monthly'
                        ? userStats.monthly_points
                        : userStats.weekly_points}
                    </span>
                  </div>
                  <p className="text-xs text-navy-500 dark:text-navy-400">
                    {activeTab === 'all-time'
                      ? 'Total Points'
                      : activeTab === 'monthly'
                      ? 'Monthly Points'
                      : 'Weekly Points'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="font-bold text-xl">{userStats.accuracy}%</span>
                  </div>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold text-xl">{userStats.tests_completed}</span>
                  </div>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Tests</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-orange-500 mb-1">
                    <Flame className="w-4 h-4" />
                    <span className="font-bold text-xl">{userStats.current_streak}</span>
                  </div>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Day Streak</p>
                </div>
              </div>
            </div>

            {/* Progress to next rank */}
            {userStats.next_rank && (
              <div className="mt-6 pt-6 border-t border-cream-200 dark:border-navy-700">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-navy-600 dark:text-cream-300">Progress to {userStats.next_rank}</span>
                  <span className="text-navy-500 dark:text-navy-400">
                    {userStats.points_to_next_rank} points to go
                  </span>
                </div>
                <div className="h-2 bg-cream-200 dark:bg-navy-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.min(
                        100,
                        ((userStats.total_points % 500) / 500) * 100
                      )}%`,
                    }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${
                      RANK_CONFIG[userStats.next_rank]?.gradient || 'from-gold-400 to-gold-600'
                    }`}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('all-time')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'all-time'
                ? 'bg-navy-900 text-white'
                : 'bg-white dark:bg-navy-800 text-navy-600 dark:text-cream-300 hover:bg-cream-100 dark:hover:bg-navy-700'
            }`}
          >
            All Time
          </button>
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'monthly'
                ? 'bg-navy-900 text-white'
                : 'bg-white dark:bg-navy-800 text-navy-600 dark:text-cream-300 hover:bg-cream-100 dark:hover:bg-navy-700'
            }`}
          >
            This Month
          </button>
          <button
            onClick={() => setActiveTab('weekly')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'weekly'
                ? 'bg-navy-900 text-white'
                : 'bg-white dark:bg-navy-800 text-navy-600 dark:text-cream-300 hover:bg-cream-100 dark:hover:bg-navy-700'
            }`}
          >
            This Week
          </button>
        </div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-cream-100 dark:bg-navy-800 border-b border-cream-200 dark:border-navy-700 text-sm font-semibold text-navy-600 dark:text-cream-300">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-4">Player</div>
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-2 text-right">Points</div>
            <div className="col-span-2 text-right hidden md:block">Tests</div>
            <div className="col-span-1 text-right hidden md:block">Acc.</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-cream-100 dark:divide-navy-700">
            {currentData?.leaderboard?.length > 0 ? (
              currentData.leaderboard.map((entry, index) => {
                const isCurrentUser = entry.username === user?.username;
                const position = entry.position || index + 1;

                return (
                  <motion.div
                    key={entry.username}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={`grid grid-cols-12 gap-4 p-4 items-center transition-colors ${
                      isCurrentUser
                        ? 'bg-gold-50 dark:bg-gold-900/20 border-l-4 border-gold-500'
                        : 'hover:bg-cream-50 dark:hover:bg-navy-800'
                    }`}
                  >
                    <div className="col-span-1 flex justify-center">
                      {getPositionIcon(position)}
                    </div>
                    <div className="col-span-4">
                      <span
                        className={`font-medium ${
                          isCurrentUser ? 'text-gold-700 dark:text-gold-400' : 'text-navy-900 dark:text-cream-100'
                        }`}
                      >
                        {entry.username}
                        {isCurrentUser && (
                          <span className="ml-2 text-xs text-gold-600 dark:text-gold-400">(You)</span>
                        )}
                      </span>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <RankBadge rank={entry.rank} size="sm" />
                    </div>
                    <div className="col-span-2 text-right font-semibold text-navy-900 dark:text-cream-100">
                      {activeTab === 'all-time'
                        ? entry.total_points?.toLocaleString()
                        : activeTab === 'monthly'
                        ? entry.monthly_points?.toLocaleString()
                        : entry.weekly_points?.toLocaleString()}
                    </div>
                    <div className="col-span-2 text-right text-navy-600 dark:text-cream-300 hidden md:block">
                      {entry.tests_completed}
                    </div>
                    <div className="col-span-1 text-right text-navy-600 dark:text-cream-300 hidden md:block">
                      {entry.accuracy}%
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="p-8 text-center text-navy-500 dark:text-navy-400">
                No leaderboard data available yet. Complete some tests to appear here!
              </div>
            )}
          </div>
        </motion.div>

        {/* Rank Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="font-display text-lg text-navy-900 dark:text-cream-100 mb-4">Rank Tiers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { rank: 'Bronze', points: '0+' },
              { rank: 'Silver', points: '500+' },
              { rank: 'Gold', points: '1,500+' },
              { rank: 'Platinum', points: '3,500+' },
              { rank: 'Diamond', points: '7,000+' },
              { rank: 'Master', points: '15,000+' },
            ].map((tier) => (
              <div
                key={tier.rank}
                className="card p-4 text-center"
              >
                <RankIcon rank={tier.rank} size="lg" className="mx-auto mb-2" />
                <p className="font-semibold text-navy-900 dark:text-cream-100">{tier.rank}</p>
                <p className="text-xs text-navy-500 dark:text-navy-400">{tier.points} pts</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
