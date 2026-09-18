# Test Mode Translations Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Uzbek/Russian language switching with 3D flip animation to test mode (TestQuestionCard during the session, and question review cards in TestResults).

**Architecture:** Replicate the exact same flip mechanism from `QuestionCard.jsx` into `TestQuestionCard.jsx`. For TestResults, extract each question row into a `ReviewQuestionItem` component that owns its own flip state — necessary because React hooks can't be called inside a `.map()`.

**Tech Stack:** React (useState, useEffect, useRef), Lucide React (Languages, ChevronDown), existing `translations.js` helpers (getTranslation, getAvailableLanguages, LANGUAGES).

---

## Key Data Mapping

Test mode questions use `options: [{ id: 'A', text: '...' }, ...]`.
Translations use `choice_a`, `choice_b`, `choice_c`, `choice_d` fields.

Mapping rule: `options[i].id.toLowerCase()` → `choice_${id.toLowerCase()}`:
- `{ id: 'A', text: ... }` → `data.choice_a`
- `{ id: 'B', text: ... }` → `data.choice_b`

---

### Task 1: Add flip animation to TestQuestionCard.jsx

**Files:**
- Modify: `packages/frontend/src/components/TestQuestionCard.jsx`

No tests exist for this component (it's UI). Verify manually by running the dev server.

**Step 1: Replace the imports at the top of TestQuestionCard.jsx**

Replace:
```jsx
import { Flag } from 'lucide-react';
import { MathVisualization } from './visualizations';
```

With:
```jsx
import { useState, useEffect, useRef } from 'react';
import { Flag, Languages, ChevronDown } from 'lucide-react';
import { MathVisualization } from './visualizations';
import { getTranslation, getAvailableLanguages, LANGUAGES } from '../data/translations';
```

**Step 2: Replace the function body up to the return statement**

Replace everything from `export default function TestQuestionCard({` through the `const choices = question.options || [];` line with this:

```jsx
export default function TestQuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  isFlagged,
  onSelectAnswer,
  onToggleFlag,
}) {
  // ── Language flip state (mirrors QuestionCard.jsx) ──────────────────────────
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
  // Test mode uses options array → map to translated choice_a/b/c/d fields
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
```

**Step 3: Replace the return statement**

Replace the entire `return (...)` block with:

```jsx
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
          {/* Language selector — outside the flip so it's always clickable */}
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
```

**Step 4: Verify the file looks correct**

The final TestQuestionCard.jsx should:
- Import `useState`, `useEffect`, `useRef` from react
- Import `Languages`, `ChevronDown` from lucide-react
- Import translation helpers
- Have NO `const choices = question.options || [];` line at top level (it's inside `buildFaceData` now)
- Have the language dropdown in the header next to the flag button
- Have the 3D flip container wrapping the content area

**Step 5: Test manually**

1. Start dev server: `cd packages/frontend && npm run dev`
2. Navigate to a mini test session
3. Verify: language selector appears in each question's header
4. Click language → card flips to Uzbek/Russian
5. Click again → flips back to English
6. Answer selection still works correctly in translated language
7. Flag button still works

---

### Task 2: Create ReviewQuestionItem component for TestResults

**Files:**
- Create: `packages/frontend/src/components/ReviewQuestionItem.jsx`
- Modify: `packages/frontend/src/pages/TestResults.jsx`

**Step 1: Create `packages/frontend/src/components/ReviewQuestionItem.jsx`**

This extracts the per-question expanded card from TestResults into its own component so it can hold flip state:

```jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Flag, ChevronDown, ChevronUp, Languages } from 'lucide-react';
import { getTranslation, getAvailableLanguages, LANGUAGES } from '../data/translations';

export default function ReviewQuestionItem({ q, index, difficultyColor }) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  // Build display data for a face
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
        // Grid-in display
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
      {/* Question Header (collapse/expand toggle) */}
      <button
        onClick={() => setIsExpanded((v) => !v)}
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

            {/* 3D flip container for question + explanation */}
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
```

**Step 2: Update TestResults.jsx to use ReviewQuestionItem**

At the top of TestResults.jsx, add the import after the existing imports:
```jsx
import ReviewQuestionItem from '../components/ReviewQuestionItem';
```

Also remove these imports that are no longer needed directly (they move into ReviewQuestionItem):
- `Flag` (still needed for the stats grid — keep it)
- `ChevronDown`, `ChevronUp` — KEEP (still used elsewhere? Check. Actually only used in question rows → can remove from TestResults)
- `AnimatePresence` — check if still used after moving question rows. It's only used for the question expand animation → can remove.

Wait — re-examine: after moving the question rows to ReviewQuestionItem, the only `AnimatePresence` usage would be inside ReviewQuestionItem. So remove `AnimatePresence` from TestResults imports.
`ChevronDown`, `ChevronUp` — only used in question rows → remove from TestResults imports.
`CheckCircle`, `XCircle` — CheckCircle used in stats? No. XCircle used in error screen. CheckCircle used in nothing else in TestResults. Actually looking at the code:
- `CheckCircle` → used only in question rows (line 309) → remove from TestResults
- `XCircle` → used in error display (line 126) AND question rows (line 311) → KEEP
- `Flag` → used in stats grid (line 238) AND question rows (line 325) → KEEP (also used in ReviewQuestionItem)
- `ChevronDown`, `ChevronUp` → only question rows → remove from TestResults

So update the import block from:
```jsx
import {
  GraduationCap,
  CheckCircle,
  XCircle,
  Flag,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Trophy,
  Target,
  BarChart3,
  Star,
} from 'lucide-react';
```
To:
```jsx
import {
  GraduationCap,
  XCircle,
  Flag,
  ArrowLeft,
  Trophy,
  Target,
  BarChart3,
  Star,
} from 'lucide-react';
```

Also remove `AnimatePresence` from the framer-motion import:
```jsx
import { motion } from 'framer-motion';
```

Also remove `expandedQuestions` state and `toggleQuestion`, `expandAll`, `collapseAll` functions — these move into ReviewQuestionItem. Wait — `expandAll` and `collapseAll` still work on the outer expand state... but now ReviewQuestionItem manages its own `isExpanded` state.

Actually, `expandAll` / `collapseAll` won't work anymore since ReviewQuestionItem manages its own state. Two options:
1. Keep expand/collapse in TestResults by passing `isExpanded` + `onToggle` as props to ReviewQuestionItem
2. Remove the expand/collapse all buttons (YAGNI — simplest change)

**Decision: Keep expandAll/collapseAll.** Pass `isExpanded` and `onToggle` as props to ReviewQuestionItem, and remove the internal `isExpanded` state from ReviewQuestionItem. This keeps the feature intact.

**Updated approach for ReviewQuestionItem:**
- Remove `isExpanded` state from ReviewQuestionItem
- Add `isExpanded` and `onToggle` as props
- TestResults still manages `expandedQuestions` Set and `toggleQuestion`/`expandAll`/`collapseAll`

**Step 2 (revised): Update TestResults.jsx**

Remove the `expandedQuestions` state management — actually KEEP it.
Remove `toggleQuestion` function — keep it but now pass to ReviewQuestionItem.

Update the question list section. Replace:
```jsx
<div className="space-y-3">
  {questions.map((q, index) => {
    const isExpanded = expandedQuestions.has(q.order);
    const choices = q.options || [];

    return (
      <motion.div
        key={q.order}
        ...
      >
        {/* ...entire question card JSX... */}
      </motion.div>
    );
  })}
</div>
```

With:
```jsx
<div className="space-y-3">
  {questions.map((q, index) => (
    <ReviewQuestionItem
      key={q.order}
      q={q}
      index={index}
      isExpanded={expandedQuestions.has(q.order)}
      onToggle={() => toggleQuestion(q.order)}
      difficultyColor={difficultyColor}
    />
  ))}
</div>
```

**Step 3: Update ReviewQuestionItem to accept isExpanded and onToggle as props**

Replace the internal `isExpanded` state and toggle in ReviewQuestionItem:

Change:
```jsx
export default function ReviewQuestionItem({ q, index, difficultyColor }) {
  const [isExpanded, setIsExpanded] = useState(false);
  ...
  // Reset flip when collapsed
  useEffect(() => {
    if (!isExpanded) { ... }
  }, [isExpanded]);
  ...
  <button onClick={() => setIsExpanded((v) => !v)} ...>
```

To:
```jsx
export default function ReviewQuestionItem({ q, index, isExpanded, onToggle, difficultyColor }) {
  // (no isExpanded state)
  ...
  // Reset flip when collapsed
  useEffect(() => {
    if (!isExpanded) { ... }
  }, [isExpanded]);
  ...
  <button onClick={onToggle} ...>
```

**Step 4: Test manually**

1. Start dev server
2. Complete a mini test (or use an existing completed session)
3. Navigate to results page
4. Expand a question → verify translated question text, choices, and explanation appear on flip
5. Collapse → flip resets to English
6. "Expand All" / "Collapse All" buttons still work

---

### Task 3: Commit

```bash
git add packages/frontend/src/components/TestQuestionCard.jsx \
        packages/frontend/src/components/ReviewQuestionItem.jsx \
        packages/frontend/src/pages/TestResults.jsx
git commit -m "feat: add Uzbek/Russian language flip to test mode and results review"
```

---

## Quick Reference: Flip Mechanism

The 3D flip uses two "faces" (Face A, Face B) stacked in 3D space:
- Face A: `backfaceVisibility: hidden`, starts facing the user (0°)
- Face B: `backfaceVisibility: hidden`, pre-rotated 180° so it's on the back
- Container rotates by 180° increments → alternates which face is visible
- Before flipping, the **hidden** face has its content updated (no flash)
- `isAnimatingRef` prevents double-clicks during the 420ms animation

The key rule: **always increment rotationDeg by +180**, never set it directly.
