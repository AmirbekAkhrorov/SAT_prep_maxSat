import { useState, useEffect, useRef } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

export default function TestTimer({
  initialSeconds,
  onTimeUp,
  onWarning,
  isPaused = false
}) {
  const [timeRemaining, setTimeRemaining] = useState(initialSeconds);
  const [warningLevel, setWarningLevel] = useState(null); // null, '5min', '1min'
  const timerRef = useRef(null);
  const warned5min = useRef(false);
  const warned1min = useRef(false);

  useEffect(() => {
    setTimeRemaining(initialSeconds);
    warned5min.current = false;
    warned1min.current = false;
    setWarningLevel(null);
  }, [initialSeconds]);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        const newTime = prev - 1;

        // Check for warnings
        if (newTime <= 60 && !warned1min.current) {
          warned1min.current = true;
          setWarningLevel('1min');
          onWarning?.('1min');
        } else if (newTime <= 300 && !warned5min.current) {
          warned5min.current = true;
          setWarningLevel('5min');
          onWarning?.('5min');
        }

        // Check for time up
        if (newTime <= 0) {
          clearInterval(timerRef.current);
          onTimeUp?.();
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, onTimeUp, onWarning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerStyles = () => {
    if (warningLevel === '1min') {
      return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-800 animate-pulse';
    }
    if (warningLevel === '5min') {
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-800';
    }
    return 'bg-cream-100 dark:bg-navy-800 text-navy-700 dark:text-cream-300 border-cream-300 dark:border-navy-700';
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getTimerStyles()}`}>
      {warningLevel === '1min' ? (
        <AlertTriangle className="w-5 h-5" />
      ) : (
        <Clock className="w-5 h-5" />
      )}
      <span className="font-mono font-semibold text-lg">
        {formatTime(timeRemaining)}
      </span>
    </div>
  );
}
