import { Trophy, Award, Star, Gem, Crown, Sparkles } from 'lucide-react';

const RANK_CONFIG = {
  Bronze: {
    color: 'bg-amber-700',
    textColor: 'text-amber-700',
    bgLight: 'bg-amber-100',
    borderColor: 'border-amber-300',
    icon: Award,
    gradient: 'from-amber-600 to-amber-800',
  },
  Silver: {
    color: 'bg-gray-400',
    textColor: 'text-gray-600',
    bgLight: 'bg-gray-100',
    borderColor: 'border-gray-300',
    icon: Award,
    gradient: 'from-gray-400 to-gray-600',
  },
  Gold: {
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    bgLight: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    icon: Star,
    gradient: 'from-yellow-400 to-yellow-600',
  },
  Platinum: {
    color: 'bg-cyan-500',
    textColor: 'text-cyan-600',
    bgLight: 'bg-cyan-100',
    borderColor: 'border-cyan-300',
    icon: Gem,
    gradient: 'from-cyan-400 to-cyan-600',
  },
  Diamond: {
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    bgLight: 'bg-blue-100',
    borderColor: 'border-blue-300',
    icon: Gem,
    gradient: 'from-blue-400 to-blue-600',
  },
  Master: {
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    bgLight: 'bg-purple-100',
    borderColor: 'border-purple-300',
    icon: Crown,
    gradient: 'from-purple-500 to-purple-700',
  },
};

export default function RankBadge({ rank, size = 'md', showLabel = true, className = '' }) {
  const config = RANK_CONFIG[rank] || RANK_CONFIG.Bronze;
  const Icon = config.icon;

  const sizeClasses = {
    sm: {
      container: 'px-2 py-1',
      icon: 'w-3 h-3',
      text: 'text-xs',
    },
    md: {
      container: 'px-3 py-1.5',
      icon: 'w-4 h-4',
      text: 'text-sm',
    },
    lg: {
      container: 'px-4 py-2',
      icon: 'w-5 h-5',
      text: 'text-base',
    },
  };

  const sizes = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full ${config.bgLight} border ${config.borderColor} ${sizes.container} ${className}`}
    >
      <Icon className={`${sizes.icon} ${config.textColor}`} />
      {showLabel && (
        <span className={`font-semibold ${config.textColor} ${sizes.text}`}>
          {rank}
        </span>
      )}
    </div>
  );
}

export function RankIcon({ rank, size = 'md', className = '' }) {
  const config = RANK_CONFIG[rank] || RANK_CONFIG.Bronze;
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br ${config.gradient} p-1.5 ${className}`}
    >
      <Icon className={`${sizeClasses[size]} text-white`} />
    </div>
  );
}

export { RANK_CONFIG };
