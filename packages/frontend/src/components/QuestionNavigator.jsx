import { Flag } from 'lucide-react';

export default function QuestionNavigator({
  questions,
  currentIndex,
  answers,
  flagged,
  onNavigate,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((q, idx) => {
        const isAnswered = answers[q.order] != null;
        const isFlagged = flagged.has(q.order);
        const isCurrent = idx === currentIndex;

        let bgColor = 'bg-cream-100 dark:bg-navy-800 text-navy-600 dark:text-cream-300 hover:bg-cream-200 dark:hover:bg-navy-700';
        if (isCurrent) {
          bgColor = 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900';
        } else if (isAnswered) {
          bgColor = 'bg-gold-500 text-white hover:bg-gold-600';
        }

        return (
          <button
            key={q.order}
            onClick={() => onNavigate(idx)}
            className={`relative w-10 h-10 rounded-lg font-semibold text-sm transition-all ${bgColor}`}
          >
            {q.order}
            {isFlagged && (
              <Flag className="absolute -top-1 -right-1 w-3 h-3 text-red-500 fill-red-500" />
            )}
          </button>
        );
      })}
    </div>
  );
}
