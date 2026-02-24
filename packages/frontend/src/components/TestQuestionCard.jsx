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

  // Refs for measuring face heights — prevents Face B from overflowing into buttons
  const faceARef = useRef(null);
  const faceBRef = useRef(null);
  const [containerMinHeight, setContainerMinHeight] = useState(0);

  const availableLangs = getAvailableLanguages(question.question_id);
  const canTranslate = availableLangs.length > 0;

  const showingFaceB = (rotationDeg / 180) % 2 === 1;
  const activeLang = showingFaceB ? faceBLang : faceALang;
  const isFlipped = activeLang !== null;

  // Reset on question change
  useEffect(() => {
    setFaceALang(null);
    setFaceBLang(null);
    setRotationDeg(0);
    setShowLangMenu(false);
    setContainerMinHeight(0);
    isAnimatingRef.current = false;
  }, [question.question_id]);

  // After render: measure both faces and lock container to the taller one.
  // This prevents Face B (position:absolute) from overflowing into sibling elements.
  useEffect(() => {
    const aH = faceARef.current?.offsetHeight ?? 0;
    const bH = faceBRef.current?.offsetHeight ?? 0;
    const needed = Math.max(aH, bH);
    if (needed > 0) setContainerMinHeight(needed);
  });

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

  // Renders the visual card content for one face.
  // `faceRef` goes on the outer 3D-transform wrapper; `lang` drives the banner.
  // IMPORTANT: card styling (bg, rounded, shadow, overflow-hidden) is on the INNER
  // div — never on the 3D-transformed element itself, which causes shape artifacts.
  const renderFace = ({ questionText, options }, lang, faceRef, extraStyle = {}) => (
    <div ref={faceRef} style={{ backfaceVisibility: 'hidden', willChange: 'transform', ...extraStyle }}>
      {/* Inner visual card — overflow-hidden lives here, not on the 3D wrapper */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl shadow-card overflow-hidden">
        {/* Language banner */}
        {lang && (
          <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-2 border-b border-blue-200 dark:border-blue-800">
            <span className="text-xs font-sans font-semibold text-blue-600 dark:text-blue-400">
              {LANGUAGES[lang]?.flag} {LANGUAGES[lang]?.banner}
            </span>
          </div>
        )}

        {/* Card header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200 dark:border-navy-700">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-navy-900 dark:text-cream-100">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColor[question.difficulty]}`}>
              {question.difficulty}
            </span>
          </div>
          <span className="text-sm text-navy-500 dark:text-navy-400">{question.domain}</span>
        </div>

        {/* Card body */}
        <div className="p-6">
          {/* Passage */}
          {question.passage && (
            <div className="mb-6 p-4 bg-cream-50 dark:bg-navy-800 rounded-xl border border-cream-200 dark:border-navy-700">
              <p className="text-navy-700 dark:text-cream-300 text-sm leading-relaxed whitespace-pre-wrap">
                {question.passage}
              </p>
            </div>
          )}

          {/* Question text */}
          <div className="mb-6">
            <p className="text-navy-900 dark:text-cream-100 text-lg leading-relaxed font-medium">
              {questionText}
            </p>
            <p className="text-sm text-navy-500 dark:text-navy-400 mt-2">{question.skill}</p>
          </div>

          {/* Visualization */}
          {question.visualization && (
            <div className="my-6 flex justify-center">
              <MathVisualization visualization={question.visualization} />
            </div>
          )}

          {/* Answer choices */}
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
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        isSelected
                          ? 'bg-gold-500 text-white'
                          : 'bg-cream-200 dark:bg-navy-700 text-navy-600 dark:text-cream-300'
                      }`}>
                        {choice.id}
                      </span>
                      <span className="flex-1 text-navy-900 dark:text-cream-100">{choice.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <input
              type="text"
              value={selectedAnswer || ''}
              onChange={(e) => onSelectAnswer(e.target.value)}
              placeholder="Enter your numeric answer..."
              className="w-full p-4 text-lg rounded-xl border-2 border-cream-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-cream-100 placeholder-navy-400 dark:placeholder-navy-500 focus:border-gold-500 focus:outline-none transition-all"
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* ── Top bar: flag + language selector — OUTSIDE flip, always clickable ── */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onToggleFlag}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            isFlagged
              ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              : 'text-navy-500 dark:text-cream-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400'
          }`}
        >
          <Flag className={`w-4 h-4 ${isFlagged ? 'fill-red-600 dark:fill-red-400' : ''}`} />
          {isFlagged ? 'Flagged' : 'Flag'}
        </button>

        {canTranslate && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLangMenu((v) => !v)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-sans font-medium transition-all ${
                isFlipped
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'bg-cream-100 dark:bg-navy-800 text-navy-500 dark:text-cream-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600'
              }`}
            >
              <Languages className="w-4 h-4" />
              <span className="text-base leading-none">{currentLangMeta.flag}</span>
              {currentLangMeta.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-1.5 w-48 bg-white dark:bg-navy-800 rounded-xl shadow-lg border border-cream-200 dark:border-navy-700 overflow-hidden z-50">
                {dropdownLangs.map((lang) => {
                  const meta = LANGUAGES[lang];
                  return (
                    <button
                      key={lang}
                      onClick={() => handleSelectLang(lang)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-sans transition-colors text-navy-700 dark:text-cream-200 hover:bg-cream-50 dark:hover:bg-navy-700"
                    >
                      <span className="text-lg">{meta.flag}</span>
                      <span className="font-medium">{meta.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── 3D flip container ──
          minHeight is set to max(faceA, faceB) so Face B (position:absolute)
          never overflows into the Previous/Next buttons below.           ── */}
      <div style={{ perspective: '1200px' }}>
        <div
          style={{
            position: 'relative',
            minHeight: containerMinHeight || undefined,
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationDeg}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
          }}
        >
          {/* Face A — in normal flow, sets container height */}
          {renderFace(faceAData, faceALang, faceARef)}

          {/* Face B — absolutely positioned on top, pre-rotated 180° */}
          {renderFace(faceBData, faceBLang, faceBRef, {
            transform: 'rotateY(180deg)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })}
        </div>
      </div>
    </div>
  );
}
