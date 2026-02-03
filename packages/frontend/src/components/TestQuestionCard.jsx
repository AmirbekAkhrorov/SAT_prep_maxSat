import { Flag } from 'lucide-react';
import { MathVisualization } from './visualizations';

export default function TestQuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  isFlagged,
  onSelectAnswer,
  onToggleFlag,
}) {
  const difficultyColor = {
    easy: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    hard: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-800',
  };

  // Get choices from options array
  const choices = question.options || [];

  return (
    <div className="bg-white dark:bg-navy-900 rounded-2xl shadow-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cream-200 dark:border-navy-700">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-navy-900 dark:text-cream-100">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColor[question.difficulty]}`}
          >
            {question.difficulty}
          </span>
        </div>
        <button
          onClick={onToggleFlag}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isFlagged
              ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              : 'text-navy-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
          }`}
          title={isFlagged ? 'Remove flag' : 'Flag for review'}
        >
          <Flag className={`w-4 h-4 ${isFlagged ? 'fill-red-600' : ''}`} />
          <span className="text-sm font-medium">
            {isFlagged ? 'Flagged' : 'Flag'}
          </span>
        </button>
      </div>

      <div className="p-6">
        {/* Passage (if any) */}
        {question.passage && (
          <div className="mb-6 p-4 bg-cream-50 dark:bg-navy-800 rounded-xl border border-cream-200 dark:border-navy-700">
            <p className="text-navy-700 dark:text-cream-300 text-sm leading-relaxed whitespace-pre-wrap">
              {question.passage}
            </p>
          </div>
        )}

        {/* Question Text */}
        <div className="mb-6">
          <p className="text-navy-900 dark:text-cream-100 text-lg leading-relaxed font-medium">
            {question.question_text}
          </p>
          <p className="text-sm text-navy-500 dark:text-navy-400 mt-2">
            {question.domain} - {question.skill}
          </p>
        </div>

        {/* Visualization */}
        {question.visualization && (
          <div className="my-6 flex justify-center">
            <MathVisualization visualization={question.visualization} />
          </div>
        )}

        {/* Answer Choices */}
        {choices.length > 0 ? (
          <div className="space-y-3">
            {choices.map((choice) => {
              const isSelected = selectedAnswer === choice.id;

              return (
                <button
                  key={choice.id}
                  onClick={() => onSelectAnswer(choice.id)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    isSelected
                      ? 'border-gold-500 bg-cream-50 dark:bg-navy-800'
                      : 'border-cream-200 dark:border-navy-700 hover:border-navy-300 dark:hover:border-navy-600 hover:bg-cream-50 dark:hover:bg-navy-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        isSelected
                          ? 'bg-gold-500 text-white'
                          : 'bg-cream-200 dark:bg-navy-700 text-navy-600 dark:text-cream-300'
                      }`}
                    >
                      {choice.id}
                    </span>
                    <span className="flex-1 text-navy-900 dark:text-cream-100">{choice.text}</span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          // Grid-in input for numeric answers
          <div>
            <input
              type="text"
              value={selectedAnswer || ''}
              onChange={(e) => onSelectAnswer(e.target.value)}
              placeholder="Enter your numeric answer..."
              className="w-full p-4 text-lg rounded-xl border-2 border-cream-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-cream-100 placeholder-navy-400 dark:placeholder-navy-500 focus:border-gold-500 focus:outline-none transition-all"
            />
          </div>
        )}
      </div>
    </div>
  );
}
