import { useState } from 'react';
import { CheckCircle, XCircle, Star, Edit2, Save, X, Languages } from 'lucide-react';
import { MathVisualization } from './visualizations';
import { getTranslation, hasTranslation } from '../data/translations';

export default function QuestionCard({
  question,
  onAnswer,
  showFeedback,
  userProgress,
  onAddNote,
  userNote,
  selectedAnswer,
  onSelectAnswer,
}) {
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  const [noteContent, setNoteContent] = useState(userNote?.content || '');
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const translation = getTranslation(question.question_id);
  const canFlip = hasTranslation(question.question_id);

  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswer(question.question_id, selectedAnswer);
    }
  };

  const handleSaveNote = async () => {
    setIsSavingNote(true);
    try {
      await onAddNote(question.question_id, noteContent);
      setShowNoteEditor(false);
    } catch (error) {
      console.error('Failed to save note:', error);
      alert('Failed to save note. Please try again.');
    } finally {
      setIsSavingNote(false);
    }
  };

  const difficultyColor = {
    easy: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    hard: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-800',
  };

  // Get choices - support both formats (choice_a or options array)
  const getChoice = (letter) => {
    // Try individual choice fields first
    if (question[`choice_${letter.toLowerCase()}`]) {
      return question[`choice_${letter.toLowerCase()}`];
    }
    // Fall back to options array
    if (question.options) {
      const opt = question.options.find(o => o.id === letter);
      return opt ? opt.text : '';
    }
    return '';
  };

  const choices = ['A', 'B', 'C', 'D'].map(letter => ({
    id: letter,
    text: getChoice(letter)
  })).filter(c => c.text);

  // Check if this is a grid-in question (no choices, numeric answer)
  const isGridIn = choices.length === 0 && question.correct_answer && /^\d/.test(question.correct_answer);

  // Show message if no choices available (for non-grid-in questions)
  if (choices.length === 0 && !isGridIn) {
    return (
      <div className="bg-white dark:bg-navy-900 rounded-2xl shadow-card overflow-hidden p-6">
        <p className="text-navy-500 dark:text-navy-400 text-center py-4">
          No answer choices available for this question.
        </p>
        <p className="text-sm text-navy-400 dark:text-navy-500 text-center">
          Question ID: {question.question_id}
        </p>
      </div>
    );
  }

  // Build translated question object
  const uzQuestion = translation ? { ...question, ...translation } : null;

  // Translated choices
  const getUzChoice = (letter) => {
    if (!uzQuestion) return '';
    if (uzQuestion[`choice_${letter.toLowerCase()}`]) return uzQuestion[`choice_${letter.toLowerCase()}`];
    if (uzQuestion.options) {
      const opt = uzQuestion.options.find(o => o.id === letter);
      return opt ? opt.text : '';
    }
    return '';
  };
  const uzChoices = uzQuestion
    ? ['A', 'B', 'C', 'D'].map(letter => ({ id: letter, text: getUzChoice(letter) })).filter(c => c.text)
    : [];

  // Helper to render a question face (reused for front & back)
  const renderQuestionContent = (q, qChoices, isUzbek) => (
    <div className="p-6">
      <div className="mb-6">
        <p className="text-navy-900 dark:text-cream-100 text-lg leading-relaxed font-medium">
          {q.question_text}
        </p>
        <p className="text-sm text-navy-500 dark:text-navy-400 mt-2">{question.skill}</p>
        {isGridIn && (
          <p className="text-sm text-navy-400 dark:text-navy-500 mt-1 italic">
            {isUzbek ? 'Javobingizni quyida kiriting' : 'Enter your numeric answer below'}
          </p>
        )}
      </div>

      {question.visualization && (
        <div className="my-6 flex justify-center">
          <MathVisualization visualization={question.visualization} />
        </div>
      )}

      {isGridIn ? (
        <div className="mb-6">
          <input
            type="text"
            value={selectedAnswer || ''}
            onChange={(e) => onSelectAnswer(e.target.value)}
            disabled={showFeedback}
            placeholder={isUzbek ? 'Javobingizni kiriting...' : 'Enter your answer...'}
            className={`w-full p-4 text-lg rounded-xl border-2 transition-all ${
              showFeedback
                ? selectedAnswer === question.correct_answer
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-300'
                  : 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-300'
                : 'border-cream-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-cream-100 focus:border-gold-500 focus:outline-none'
            }`}
          />
          {showFeedback && selectedAnswer !== question.correct_answer && (
            <p className="text-navy-600 dark:text-cream-300 mt-2">
              {isUzbek ? "To'g'ri javob" : 'Correct answer'}: <strong>{question.correct_answer}</strong>
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {qChoices.map((choice) => {
            const isSelected = selectedAnswer === choice.id;
            const isCorrect = showFeedback && choice.id === question.correct_answer;
            const isWrong = showFeedback && isSelected && choice.id !== question.correct_answer;
            return (
              <button
                key={choice.id}
                onClick={() => !showFeedback && onSelectAnswer(choice.id)}
                disabled={showFeedback}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  isCorrect
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : isWrong
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                    : isSelected
                    ? 'border-gold-500 bg-cream-50 dark:bg-navy-800'
                    : 'border-cream-200 dark:border-navy-700 hover:border-navy-300 dark:hover:border-navy-600 hover:bg-cream-50 dark:hover:bg-navy-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    isCorrect ? 'bg-green-500 text-white'
                    : isWrong ? 'bg-red-500 text-white'
                    : isSelected ? 'bg-gold-500 text-white'
                    : 'bg-cream-200 dark:bg-navy-700 text-navy-600 dark:text-cream-300'
                  }`}>
                    {isCorrect ? '✓' : isWrong ? '✗' : choice.id}
                  </span>
                  <span className="flex-1 text-navy-900 dark:text-cream-100">{choice.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {showFeedback && (
        <div className={`p-4 rounded-xl mb-6 ${
          selectedAnswer === question.correct_answer
            ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
            : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            {selectedAnswer === question.correct_answer ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-green-800 dark:text-green-300">
                  {isUzbek ? "To'g'ri!" : 'Correct!'}
                </span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="font-semibold text-red-800 dark:text-red-300">
                  {isUzbek
                    ? `Noto'g'ri. To'g'ri javob: ${question.correct_answer}`
                    : `Incorrect. The correct answer is ${question.correct_answer}`}
                </span>
              </>
            )}
          </div>
          {q.explanation && (
            <p className="text-navy-700 dark:text-cream-300 text-sm leading-relaxed">{q.explanation}</p>
          )}
        </div>
      )}

      <div className="flex gap-3">
        {!showFeedback ? (
          <button onClick={handleSubmit} disabled={!selectedAnswer}
            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed">
            {isUzbek ? 'Javobni tekshirish' : 'Check Answer'}
          </button>
        ) : (
          <button onClick={() => { onSelectAnswer(null); onAnswer(question.question_id, null, true); }}
            className="btn-primary flex-1">
            {isUzbek ? 'Keyingi savol' : 'Next Question'}
          </button>
        )}
      </div>

      {showNoteEditor && (
        <div className="mt-4 p-4 bg-cream-100 dark:bg-navy-800 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-navy-700 dark:text-cream-300">Your Notes</label>
            <button onClick={() => { setNoteContent(userNote?.content || ''); setShowNoteEditor(false); }}
              className="p-1 text-navy-400 hover:text-navy-600 dark:hover:text-cream-300">
              <X className="w-4 h-4" />
            </button>
          </div>
          <textarea value={noteContent} onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Add your notes, or reminders..."
            className="w-full p-3 rounded-lg border border-cream-300 dark:border-navy-600 bg-white dark:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-800 dark:text-cream-100 placeholder-navy-400 dark:placeholder-navy-500 resize-none"
            rows={3} />
          <div className="flex justify-end mt-2">
            <button onClick={handleSaveNote} disabled={isSavingNote}
              className="flex items-center gap-2 btn-secondary !py-2 !px-4 text-sm disabled:opacity-50">
              <Save className="w-4 h-4" />
              {isSavingNote ? 'Saving...' : 'Save Note'}
            </button>
          </div>
        </div>
      )}

      {userNote && !showNoteEditor && userNote.content && (
        <div className="mt-4 p-3 bg-gold-50 dark:bg-gold-900/20 rounded-xl border border-gold-200 dark:border-gold-800">
          <p className="text-navy-700 dark:text-cream-300 text-sm italic">"{userNote.content}"</p>
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* Flip button — OUTSIDE the flipping card so it's always clickable */}
      {canFlip && (
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-sans font-medium transition-all ${
              isFlipped
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'bg-cream-100 dark:bg-navy-800 text-navy-500 dark:text-cream-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600'
            }`}
          >
            <Languages className="w-4 h-4" />
            {isFlipped ? '← English' : "O'zbekcha 🇺🇿"}
          </button>
        </div>
      )}

      {/* 3D flip container */}
      <div style={{ perspective: '1200px' }}>
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease',
            position: 'relative',
          }}
        >
          {/* ── FRONT FACE (English) ── */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className="bg-white dark:bg-navy-900 rounded-2xl shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cream-200 dark:border-navy-700">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColor[question.difficulty]}`}>
                  {question.difficulty}
                </span>
                <span className="text-sm text-navy-500 dark:text-navy-400">{question.domain}</span>
              </div>
              <div className="flex items-center gap-2">
                {userProgress?.is_mastered && (
                  <div className="flex items-center gap-1 text-gold-600">
                    <Star className="w-4 h-4 fill-gold-600" />
                    <span className="text-xs font-medium">Mastered</span>
                  </div>
                )}
                <button onClick={() => setShowNoteEditor(!showNoteEditor)}
                  className={`p-2 rounded-lg transition-colors ${showNoteEditor
                    ? 'bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400'
                    : 'text-navy-400 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-cream-100 dark:hover:bg-navy-800'
                  }`} title="Add note">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            {renderQuestionContent(question, choices, false)}
          </div>

          {/* ── BACK FACE (Uzbek) ── */}
          {uzQuestion && (
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
              }}
              className="bg-white dark:bg-navy-900 rounded-2xl shadow-card overflow-hidden"
            >
              {/* Uzbek banner */}
              <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 border-b border-blue-200 dark:border-blue-800">
                <span className="text-xs font-sans font-semibold text-blue-600 dark:text-blue-400">🇺🇿 O'zbek tilida</span>
              </div>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-cream-200 dark:border-navy-700">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColor[question.difficulty]}`}>
                    {question.difficulty}
                  </span>
                  <span className="text-sm text-navy-500 dark:text-navy-400">{question.domain}</span>
                </div>
              </div>
              {renderQuestionContent(uzQuestion, uzChoices, true)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
