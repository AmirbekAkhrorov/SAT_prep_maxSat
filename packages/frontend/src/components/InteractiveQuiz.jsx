import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  BookOpen,
  PenTool,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Check,
  X,
  Lightbulb,
  Target,
  RefreshCw,
  ArrowRight,
  Zap,
  Loader2,
  Languages,
  Trophy,
} from 'lucide-react';
import { fetchSampleQuestions, checkSampleAnswer } from '../services/api';
import { sampleQuestions as fallbackQuestions } from '../data/sampleQuestions';
import { getTranslation, getAvailableLanguages, LANGUAGES, UI_STRINGS } from '../data/translations';

const typeIcons = { math: Calculator, reading: BookOpen, writing: PenTool };
const typeLabels = { math: 'Math', reading: 'Reading', writing: 'Writing' };

const difficultyColors = {
  easy:   'bg-sage-400/20 text-sage-600 border-sage-300',
  medium: 'bg-gold-100 text-gold-700 border-gold-300',
  hard:   'bg-coral-400/20 text-coral-500 border-coral-400',
};

// Per-language color theme (header gradient, badge text, explanation bg, dropdown button)
const LANG_THEME = {
  uz: {
    header:        'bg-gradient-to-r from-emerald-900 to-emerald-800',
    badge:         'text-emerald-300',
    explanationBg: 'bg-emerald-50',
    btnActive:     'bg-emerald-100 text-emerald-700',
  },
  ru: {
    header:        'bg-gradient-to-r from-blue-900 to-blue-800',
    badge:         'text-blue-300',
    explanationBg: 'bg-blue-50',
    btnActive:     'bg-blue-100 text-blue-600',
  },
};
// Fallback = English (navy)
const DEFAULT_THEME = {
  header:        'bg-gradient-to-r from-navy-900 to-navy-800',
  badge:         'text-cream-200',
  explanationBg: 'bg-cream-50',
  btnActive:     'bg-white text-navy-500 shadow-sm border border-cream-200',
};
const getLangTheme = (lang) => LANG_THEME[lang] || DEFAULT_THEME;

// Shared flip logic extracted for both card types
function useFlip(questionKey) {
  const [faceALang, setFaceALang] = useState(null);
  const [faceBLang, setFaceBLang] = useState(null);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [containerMinHeight, setContainerMinHeight] = useState(0);
  const isAnimatingRef = useRef(false);
  const dropdownRef = useRef(null);
  const faceARef = useRef(null);
  const faceBRef = useRef(null);

  // Reset flip state when question changes
  useEffect(() => {
    setFaceALang(null);
    setFaceBLang(null);
    setRotationDeg(0);
    setShowLangMenu(false);
    setContainerMinHeight(0);
    isAnimatingRef.current = false;
  }, [questionKey]);

  // Measure both face heights every render to keep container stable during flip
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const aH = faceARef.current?.offsetHeight ?? 0;
      const bH = faceBRef.current?.offsetHeight ?? 0;
      const needed = Math.max(aH, bH);
      if (needed > 0) setContainerMinHeight(needed);
    });
    return () => cancelAnimationFrame(frame);
  });

  // Close menu on outside click
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

  const showingFaceB = (rotationDeg / 180) % 2 === 1;
  const activeLang = showingFaceB ? faceBLang : faceALang;

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

  return {
    faceALang, faceBLang, rotationDeg, showLangMenu, setShowLangMenu,
    containerMinHeight, dropdownRef, faceARef, faceBRef,
    activeLang, showingFaceB, handleSelectLang,
  };
}

// Language dropdown rendered above the flip card
function LangDropdown({ availableLangs, activeLang, showLangMenu, setShowLangMenu, handleSelectLang, dropdownRef }) {
  const canTranslate = availableLangs.length > 0;
  if (!canTranslate) return null;

  const currentLangKey = activeLang || 'en';
  const currentLangMeta = LANGUAGES[currentLangKey];
  const dropdownLangs = ['en', ...availableLangs].filter((l) => l !== currentLangKey);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowLangMenu((v) => !v)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-sans font-medium transition-all ${
          activeLang
            ? getLangTheme(activeLang).btnActive
            : 'bg-white text-navy-500 shadow-sm border border-cream-200 hover:bg-cream-100'
        }`}
      >
        <Languages className="w-4 h-4" />
        <span className="text-base leading-none">{currentLangMeta.flag}</span>
        {currentLangMeta.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
      </button>
      {showLangMenu && (
        <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-xl shadow-lg border border-cream-200 overflow-hidden z-50">
          {dropdownLangs.map((lang) => {
            const meta = LANGUAGES[lang];
            return (
              <button
                key={lang}
                onClick={() => handleSelectLang(lang)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-sans text-navy-700 hover:bg-cream-50 transition-colors"
              >
                <span className="text-lg">{meta.flag}</span>
                <span className="font-medium">{meta.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── QuizCard ────────────────────────────────────────────────────────────────
// Question card during the quiz — NO correct/wrong feedback, just selection mark.
function QuizCard({ question, selectedAnswer, onSelectAnswer }) {
  const questionKey = question.questionId || question.id;
  const availableLangs = getAvailableLanguages(question.questionId);
  const TypeIcon = typeIcons[question.type] || Calculator;

  const {
    faceALang, faceBLang, rotationDeg, showLangMenu, setShowLangMenu,
    containerMinHeight, dropdownRef, faceARef, faceBRef,
    activeLang, handleSelectLang,
  } = useFlip(questionKey);

  const buildFaceData = (lang) => {
    const baseOptions = question.options || [];
    if (!lang || !question.questionId) return { questionText: question.question, options: baseOptions };
    const data = getTranslation(question.questionId, lang);
    if (!data) return { questionText: question.question, options: baseOptions };
    return {
      questionText: data.question_text,
      options: baseOptions.map((opt) => ({
        ...opt,
        text: data[`choice_${opt.id.toLowerCase()}`] || opt.text,
      })),
    };
  };

  const faceAData = buildFaceData(faceALang);
  const faceBData = buildFaceData(faceBLang);

  const renderFaceContent = (lang, { questionText, options }) => {
    const theme = getLangTheme(lang);
    return (
    <>
      <div className={`px-8 py-6 text-cream-100 transition-colors duration-300 ${theme.header}`}>
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <TypeIcon className="w-5 h-5 text-gold-400" />
          </div>
          <span className="font-sans text-sm font-medium text-cream-200">
            {typeLabels[question.type] || 'Math'}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[question.difficulty]}`}>
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </span>
          {question.skill && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-cream-200">
              {question.skill}
            </span>
          )}
          {lang && (
            <span className={`text-xs font-sans font-semibold ${theme.badge}`}>
              {LANGUAGES[lang]?.flag} {LANGUAGES[lang]?.label}
            </span>
          )}
        </div>
        {question.passage && (
          <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
            <p className="font-body text-sm text-cream-200 italic leading-relaxed">
              {question.passage}
            </p>
          </div>
        )}
        <h3 className="font-body text-lg leading-relaxed whitespace-pre-wrap">
          {questionText}
        </h3>
      </div>

      {/* Options — selection only, no correct/wrong colors */}
      <div className="p-8 space-y-3">
        {options.map((opt) => {
          const isSelected = selectedAnswer === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onSelectAnswer(opt.id)}
              className={`w-full p-3 text-left rounded-xl border-2 transition-all ${
                isSelected
                  ? 'border-gold-500 bg-cream-50'
                  : 'border-cream-200 hover:border-navy-300 hover:bg-cream-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                  isSelected ? 'bg-gold-500 text-white' : 'bg-cream-200 text-navy-600'
                }`}>
                  {opt.id}
                </span>
                <span className="font-body text-navy-800">{opt.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
  };

  return (
    <div>
      {/* Top bar with language switcher */}
      <div className="flex justify-end mb-2">
        <LangDropdown
          availableLangs={availableLangs}
          activeLang={activeLang}
          showLangMenu={showLangMenu}
          setShowLangMenu={setShowLangMenu}
          handleSelectLang={handleSelectLang}
          dropdownRef={dropdownRef}
        />
      </div>

      {/* 3D flip container */}
      <div style={{ perspective: '1200px' }}>
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationDeg}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            minHeight: containerMinHeight || undefined,
            willChange: 'transform',
          }}
        >
          {/* Face A */}
          <div
            ref={faceARef}
            style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
            className="bg-white rounded-3xl shadow-card border border-cream-200 overflow-hidden"
          >
            {renderFaceContent(faceALang, faceAData)}
          </div>
          {/* Face B */}
          <div
            ref={faceBRef}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              position: 'absolute',
              top: 0, left: 0, width: '100%',
              willChange: 'transform',
            }}
            className="bg-white rounded-3xl shadow-card border border-cream-200 overflow-hidden"
          >
            {renderFaceContent(faceBLang, faceBData)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ResultCard ───────────────────────────────────────────────────────────────
// One question in the results view — shows correct/wrong + explanation + flip.
function ResultCard({ question, userAnswer, questionNumber }) {
  const questionKey = question.questionId || question.id;
  const availableLangs = getAvailableLanguages(question.questionId);
  const isCorrect = userAnswer === question.correctAnswer;

  const {
    faceALang, faceBLang, rotationDeg, showLangMenu, setShowLangMenu,
    containerMinHeight, dropdownRef, faceARef, faceBRef,
    activeLang, handleSelectLang,
  } = useFlip(questionKey);

  const buildFaceData = (lang) => {
    const baseOptions = question.options || [];
    if (!lang || !question.questionId) {
      return { questionText: question.question, options: baseOptions, explanation: question.explanation };
    }
    const data = getTranslation(question.questionId, lang);
    if (!data) {
      return { questionText: question.question, options: baseOptions, explanation: question.explanation };
    }
    return {
      questionText: data.question_text,
      options: baseOptions.map((opt) => ({
        ...opt,
        text: data[`choice_${opt.id.toLowerCase()}`] || opt.text,
      })),
      explanation: data.explanation || question.explanation,
    };
  };

  const faceAData = buildFaceData(faceALang);
  const faceBData = buildFaceData(faceBLang);

  const renderFaceContent = (lang, { questionText, options, explanation }) => {
    const theme = getLangTheme(lang);
    return (
    <>
      {/* Header */}
      <div className={`px-6 py-5 text-cream-100 transition-colors duration-300 ${theme.header}`}>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[question.difficulty]}`}>
            {question.difficulty}
          </span>
          <span className="text-sm text-cream-300">{question.domain}</span>
          {lang && (
            <span className={`text-xs font-sans font-semibold ${theme.badge}`}>
              {LANGUAGES[lang]?.flag} {LANGUAGES[lang]?.label}
            </span>
          )}
          <span className={`ml-auto flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
            isCorrect ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
          }`}>
            {isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
            {isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
        <p className="font-body text-base leading-relaxed whitespace-pre-wrap">
          {questionText}
        </p>
      </div>

      {/* Options with correct/wrong highlights */}
      <div className="p-6 space-y-2">
        {options.map((opt) => {
          const isCorrectOpt = opt.id === question.correctAnswer;
          const isWrong = opt.id === userAnswer && !isCorrectOpt;
          return (
            <div
              key={opt.id}
              className={`w-full p-3 rounded-xl border-2 ${
                isCorrectOpt
                  ? 'border-green-400 bg-green-50'
                  : isWrong
                  ? 'border-red-400 bg-red-50'
                  : 'border-cream-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                  isCorrectOpt
                    ? 'bg-green-500 text-white'
                    : isWrong
                    ? 'bg-red-500 text-white'
                    : 'bg-cream-200 text-navy-600'
                }`}>
                  {isCorrectOpt ? <Check className="w-4 h-4" /> : isWrong ? <X className="w-4 h-4" /> : opt.id}
                </span>
                <span className={`font-body text-sm ${
                  isCorrectOpt ? 'text-green-800 font-medium' : isWrong ? 'text-red-800' : 'text-navy-700'
                }`}>
                  {opt.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanation */}
      {explanation && (
        <div className={`border-t border-cream-200 p-6 transition-colors duration-300 ${theme.explanationBg}`}>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gold-100 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-gold-600" />
            </div>
            <div>
              <p className="font-sans text-xs font-semibold text-navy-500 uppercase tracking-wide mb-1">
                {lang ? (UI_STRINGS[lang]?.explanation || 'Explanation') : 'Explanation'}
              </p>
              <p className="font-body text-sm text-navy-700 leading-relaxed">
                {explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
  };

  return (
    <div className="mb-6">
      {/* Question number + language switcher */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans text-sm font-semibold text-navy-500">
          Question {questionNumber}
        </span>
        <LangDropdown
          availableLangs={availableLangs}
          activeLang={activeLang}
          showLangMenu={showLangMenu}
          setShowLangMenu={setShowLangMenu}
          handleSelectLang={handleSelectLang}
          dropdownRef={dropdownRef}
        />
      </div>

      {/* 3D flip container */}
      <div style={{ perspective: '1200px' }}>
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationDeg}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            minHeight: containerMinHeight || undefined,
            willChange: 'transform',
          }}
        >
          {/* Face A */}
          <div
            ref={faceARef}
            style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
            className="bg-white rounded-2xl shadow-card border border-cream-200 overflow-hidden"
          >
            {renderFaceContent(faceALang, faceAData)}
          </div>
          {/* Face B */}
          <div
            ref={faceBRef}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              position: 'absolute',
              top: 0, left: 0, width: '100%',
              willChange: 'transform',
            }}
            className="bg-white rounded-2xl shadow-card border border-cream-200 overflow-hidden"
          >
            {renderFaceContent(faceBLang, faceBData)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── InteractiveQuiz ─────────────────────────────────────────────────────────
export default function InteractiveQuiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionIndex]: answerId }
  const [isComplete, setIsComplete] = useState(false);
  const [grading, setGrading] = useState(false);

  useEffect(() => { loadQuestions(); }, []);

  const loadQuestions = async () => {
    setLoading(true);
    try {
      const data = await fetchSampleQuestions(4);
      setQuestions(data);
    } catch (err) {
      console.error('Failed to fetch questions, using fallback:', err);
      setQuestions(fallbackQuestions);
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const currentAnswer = answers[currentIndex];
  const isAnswered = currentAnswer !== undefined;
  const answeredCount = Object.keys(answers).length;
  const progressPercentage = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  const handleSelectAnswer = (answerId) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: answerId }));
  };

  // The public question endpoints omit the answer key, so grading happens on
  // the server once the user has committed to their answers.
  const finishQuiz = async () => {
    setGrading(true);
    try {
      const graded = await Promise.all(
        questions.map(async (q, i) => {
          const answer = answers[i];
          if (answer === undefined || !q.questionId) return q;
          try {
            const result = await checkSampleAnswer(q.questionId, answer);
            return { ...q, correctAnswer: result.correct_answer, explanation: result.explanation };
          } catch (err) {
            // Offline or rate limited: keep whatever the question already had
            // (the bundled fallback questions ship with their own answers).
            console.error('Failed to grade question', q.questionId, err);
            return q;
          }
        }),
      );
      setQuestions(graded);
    } finally {
      setGrading(false);
      setIsComplete(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReset = async () => {
    setCurrentIndex(0);
    setAnswers({});
    setIsComplete(false);
    await loadQuestions();
  };

  // Compute final score from answers map
  const score = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0),
    0,
  );

  if (loading) {
    return (
      <section id="quiz" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />
        <div className="container-narrow mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-navy-600 animate-spin mb-4" />
            <p className="font-body text-navy-600">Loading questions...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!currentQuestion && !isComplete) {
    return (
      <section id="quiz" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />
        <div className="container-narrow mx-auto relative text-center py-20">
          <p className="font-body text-navy-600 mb-4">No questions available.</p>
          <button onClick={loadQuestions} className="btn-primary">Try Again</button>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-navy-900/[0.02] to-transparent rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 rounded-full mb-6">
            <Zap className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-sm font-medium text-cream-100">Interactive Demo</span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg text-navy-900 mb-4">
            Experience SAT Questions
          </h2>
          <p className="font-body text-lg text-navy-600 max-w-2xl mx-auto">
            Try real SAT questions from the official College Board question bank.
            Instant feedback and detailed explanations included.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            /* ── Quiz mode ── */
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-sans text-sm text-navy-500">
                    Question {currentIndex + 1} of {totalQuestions}
                  </span>
                  <span className="font-sans text-sm font-medium text-navy-700">
                    {answeredCount} / {totalQuestions} answered
                  </span>
                </div>
                <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-navy-600 to-navy-400 rounded-full"
                  />
                </div>
              </div>

              {/* Question card — slide in/out between questions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <QuizCard
                    question={currentQuestion}
                    selectedAnswer={currentAnswer}
                    onSelectAnswer={handleSelectAnswer}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-sm font-medium text-navy-600 hover:text-navy-900 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                {isAnswered && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={handleNext}
                    disabled={grading}
                    className="btn-gold !py-3 !px-6 disabled:opacity-60"
                  >
                    {currentIndex < totalQuestions - 1 ? (
                      <>Next Question <ChevronRight className="w-5 h-5 ml-2" /></>
                    ) : grading ? (
                      <>Checking <Loader2 className="w-5 h-5 ml-2 animate-spin" /></>
                    ) : (
                      <>See Results <Target className="w-5 h-5 ml-2" /></>
                    )}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ) : (
            /* ── Results mode ── */
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              {/* Score summary */}
              <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 mb-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-gold"
                >
                  <Trophy className="w-10 h-10 text-white" />
                </motion.div>
                <div className="font-display text-5xl font-bold text-cream-100 mb-1">
                  {score} / {totalQuestions}
                </div>
                <p className="font-sans text-cream-300 mb-6">
                  {score === totalQuestions
                    ? 'Perfect Score!'
                    : score >= totalQuestions * 0.75
                    ? 'Excellent Work!'
                    : score >= totalQuestions * 0.5
                    ? 'Good Progress!'
                    : 'Keep Practicing!'}
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-cream-100 rounded-xl font-sans font-medium transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
              </div>

              {/* Per-question review cards with flip */}
              <p className="font-sans text-sm font-semibold text-navy-500 uppercase tracking-wide mb-4">
                Question Review
              </p>
              {questions.map((q, i) => (
                <ResultCard
                  key={q.questionId || q.id || i}
                  question={q}
                  userAnswer={answers[i]}
                  questionNumber={i + 1}
                />
              ))}

              <div className="mt-6 text-center">
                <button className="btn-gold group">
                  Start Full Practice Test
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
