import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Flag, ChevronDown, ChevronUp, Languages } from 'lucide-react';
import { getTranslation, getAvailableLanguages, LANGUAGES } from '../data/translations';

export default function ReviewQuestionItem({ q, index, isExpanded, onToggle, difficultyColor }) {
  // ── Language flip state ──────────────────────────────────────────────────────
  const [faceALang, setFaceALang] = useState(null);
  const [faceBLang, setFaceBLang] = useState(null);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const isAnimatingRef = useRef(false);
  const dropdownRef = useRef(null);

  const availableLangs = getAvailableLanguages(q.question_id);
  const canTranslate = availableLangs.length > 0;

  const showingFaceB = (rotationDeg / 180) % 2 === 1;
  const activeLang = showingFaceB ? faceBLang : faceALang;

  // Reset flip when collapsed
  useEffect(() => {
    if (!isExpanded) {
      setFaceALang(null);
      setFaceBLang(null);
      setRotationDeg(0);
      setShowLangMenu(false);
      isAnimatingRef.current = false;
    }
  }, [isExpanded]);

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

  const buildFaceData = (lang) => {
    const baseOptions = q.options || [];
    if (!lang) return { questionText: q.question_text, options: baseOptions, explanation: q.explanation };
    const data = getTranslation(q.question_id, lang);
    if (!data) return { questionText: q.question_text, options: baseOptions, explanation: q.explanation };
    const translatedOptions = baseOptions.map((opt) => ({
      ...opt,
      text: data[`choice_${opt.id.toLowerCase()}`] || opt.text,
    }));
    return {
      questionText: data.question_text,
      options: translatedOptions,
      explanation: data.explanation || q.explanation,
    };
  };

  const faceAData = buildFaceData(faceALang);
  const faceBData = buildFaceData(faceBLang);

  const currentLangKey = activeLang || 'en';
  const currentLangMeta = LANGUAGES[currentLangKey];
  const allLangs = ['en', ...availableLangs];
  const dropdownLangs = allLangs.filter((l) => l !== currentLangKey);

  const renderExpandedContent = ({ questionText, options, explanation }) => (
    <div className="p-6">
      {/* Passage */}
      {q.passage && (
        <div className="mb-4 p-4 bg-cream-50 dark:bg-navy-800 rounded-xl border border-cream-200 dark:border-navy-700">
          <p className="text-navy-700 dark:text-cream-300 text-sm leading-relaxed whitespace-pre-wrap">
            {q.passage}
          </p>
        </div>
      )}

      {/* Question Text */}
      <p className="text-navy-900 dark:text-cream-100 font-medium mb-4">{questionText}</p>

      {/* Answer Choices */}
      {options.length > 0 ? (
        <div className="space-y-2 mb-4">
          {options.map((choice) => {
            const isUserAnswer = q.user_answer === choice.id;
            const isCorrectAnswer = q.correct_answer === choice.id;
            let bgColor = 'bg-cream-50 dark:bg-navy-800 border-cream-200 dark:border-navy-700';
            if (isCorrectAnswer) {
              bgColor = 'bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-800';
            } else if (isUserAnswer && !q.is_correct) {
              bgColor = 'bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-800';
            }
            return (
              <div key={choice.id} className={`p-3 rounded-xl border ${bgColor}`}>
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                      isCorrectAnswer
                        ? 'bg-green-500 text-white'
                        : isUserAnswer && !q.is_correct
                        ? 'bg-red-500 text-white'
                        : 'bg-cream-200 dark:bg-navy-700 text-navy-600 dark:text-cream-300'
                    }`}
                  >
                    {isCorrectAnswer ? '✓' : isUserAnswer && !q.is_correct ? '✗' : choice.id}
                  </span>
                  <span className="flex-1 text-navy-800 dark:text-cream-200">{choice.text}</span>
                  {isUserAnswer && (
                    <span className="text-xs text-navy-500">Your answer</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mb-4 p-4 bg-cream-50 dark:bg-navy-800 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-navy-500 dark:text-navy-400">Your answer:</span>
              <span className={`ml-2 font-semibold ${q.is_correct ? 'text-green-600' : 'text-red-600'}`}>
                {q.user_answer || '(no answer)'}
              </span>
            </div>
            <div>
              <span className="text-sm text-navy-500 dark:text-navy-400">Correct answer:</span>
              <span className="ml-2 font-semibold text-green-600">{q.correct_answer}</span>
            </div>
          </div>
        </div>
      )}

      {/* Explanation */}
      {explanation && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
          <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">Explanation</p>
          <p className="text-navy-700 dark:text-cream-300 text-sm leading-relaxed">{explanation}</p>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="card overflow-hidden"
    >
      {/* Question Header */}
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-cream-50 dark:hover:bg-navy-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          {q.is_correct ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <XCircle className="w-6 h-6 text-red-500" />
          )}
          <span className="font-semibold text-navy-900 dark:text-cream-100">
            Question {q.order}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColor[q.difficulty]}`}>
            {q.difficulty}
          </span>
          {q.is_flagged && <Flag className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-navy-500 dark:text-navy-400">{q.domain}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-navy-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-navy-400" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-cream-200 dark:border-navy-700"
          >
            {/* Language selector bar */}
            {canTranslate && (
              <div className="flex items-center justify-end px-6 pt-4" ref={dropdownRef}>
                <div className="relative">
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
              </div>
            )}

            {/* 3D flip container */}
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
                  {renderExpandedContent(faceAData)}
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
                  {renderExpandedContent(faceBData)}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
