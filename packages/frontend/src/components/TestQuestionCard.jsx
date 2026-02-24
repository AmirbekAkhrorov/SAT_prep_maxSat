import { useState, useEffect, useRef } from 'react';
import { Flag, Languages, ChevronDown } from 'lucide-react';
import { MathVisualization } from './visualizations';
import { getTranslation, getAvailableLanguages, LANGUAGES } from '../data/translations';

export default function TestQuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  isFlagged,
  onSelectAnswer,
  onToggleFlag,
}) {
  // ── Language flip state ──────────────────────────────────────────────────────
  const [faceALang, setFaceALang] = useState(null); // null = English
  const [faceBLang, setFaceBLang] = useState(null);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const isAnimatingRef = useRef(false);
  const dropdownRef = useRef(null);

  const availableLangs = getAvailableLanguages(question.question_id);
  const canTranslate = availableLangs.length > 0;

  // Face A visible at 0°, 360°... Face B visible at 180°, 540°...
  const showingFaceB = (rotationDeg / 180) % 2 === 1;
  const activeLang = showingFaceB ? faceBLang : faceALang;

  // Reset on question change
  useEffect(() => {
    setFaceALang(null);
    setFaceBLang(null);
    setRotationDeg(0);
    setShowLangMenu(false);
    isAnimatingRef.current = false;
  }, [question.question_id]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!showLangMenu) return;
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showLangMenu]);

  const handleSelectLang = (lang) => {
    setShowLangMenu(false);
    if (isAnimatingRef.current) return;
    const targetLang = lang === 'en' ? null : lang;
    if (activeLang === targetLang) return;
    isAnimatingRef.current = true;
    const setHiddenFace = showingFaceB ? setFaceALang : setFaceBLang;
    setHiddenFace(targetLang);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRotationDeg((prev) => prev + 180);
        setTimeout(() => { isAnimatingRef.current = false; }, 420);
      });
    });
  };

  // Build display data for one face (lang=null means English)
  // Test mode: options array → map to translated choice_a/b/c/d fields
  const buildFaceData = (lang) => {
    const baseOptions = question.options || [];
    if (!lang) return { questionText: question.question_text, options: baseOptions };
    const data = getTranslation(question.question_id, lang);
    if (!data) return { questionText: question.question_text, options: baseOptions };
    const translatedOptions = baseOptions.map((opt) => ({
      ...opt,
      text: data[`choice_${opt.id.toLowerCase()}`] || opt.text,
    }));
    return { questionText: data.question_text, options: translatedOptions };
  };

  const faceAData = buildFaceData(faceALang);
  const faceBData = buildFaceData(faceBLang);

  const currentLangKey = activeLang || 'en';
  const currentLangMeta = LANGUAGES[currentLangKey];
  const allLangs = ['en', ...availableLangs];
  const dropdownLangs = allLangs.filter((l) => l !== currentLangKey);

  const difficultyColor = {
    easy: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    hard: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-800',
  };

  // Render the inner content for one face
  const renderFace = ({ questionText, options }) => (
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
          {questionText}
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
      {options.length > 0 ? (
        <div className="space-y-3">
          {options.map((choice) => {
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
  );

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
        <div className="flex items-center gap-2">
          {/* Language selector — outside flip so it's always clickable */}
          {canTranslate && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowLangMenu((v) => !v)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-sans transition-colors ${
                  activeLang
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    : 'text-navy-600 dark:text-cream-300 hover:bg-cream-100 dark:hover:bg-navy-800 border border-cream-200 dark:border-navy-700'
                }`}
              >
                <Languages className="w-4 h-4" />
                {currentLangMeta.flag} {currentLangMeta.label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${showLangMenu ? 'rotate-180' : ''}`}
                />
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-1 w-44 bg-white dark:bg-navy-800 rounded-xl shadow-lg border border-cream-200 dark:border-navy-700 z-50 overflow-hidden">
                  {dropdownLangs.map((lang) => {
                    const meta = LANGUAGES[lang];
                    return (
                      <button
                        key={lang}
                        onClick={() => handleSelectLang(lang)}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-navy-700 dark:text-cream-300 hover:bg-cream-50 dark:hover:bg-navy-700 transition-colors"
                      >
                        {meta.flag} {meta.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Flag button */}
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
      </div>

      {/* 3D Flip container */}
      <div style={{ perspective: '1200px' }}>
        <div
          style={{
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationDeg}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Face A */}
          <div style={{ backfaceVisibility: 'hidden' }}>
            {renderFace(faceAData)}
          </div>
          {/* Face B */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }}
          >
            {renderFace(faceBData)}
          </div>
        </div>
      </div>
    </div>
  );
}
