/**
 * Multi-language translations for SAT questions.
 * Structure: question_id → { lang_code: { ...translated fields } }
 * For now: only ADV-E-001 (Advanced Math, easy) in Uzbek and Russian.
 */
const TRANSLATIONS = {
  'ADV-E-001': {
    uz: {
      question_text: 'Quyidagi ifodalardan qaysi biri 3x² + 6x ga teng?',
      choice_a: '3x(x + 2)',
      choice_b: '3(x² + 2x)',
      choice_c: 'x(3x + 6)',
      choice_d: 'Yuqoridagilarning barchasi',
      explanation:
        'Barcha uchta ko\'rinish bir xil: 3x(x + 2) = 3x² + 6x, 3(x² + 2x) = 3x² + 6x, va x(3x + 6) = 3x² + 6x.',
    },
    ru: {
      question_text: 'Какое из следующих выражений равно 3x² + 6x?',
      choice_a: '3x(x + 2)',
      choice_b: '3(x² + 2x)',
      choice_c: 'x(3x + 6)',
      choice_d: 'Все вышеперечисленные',
      explanation:
        'Все три варианта одинаковы: 3x(x + 2) = 3x² + 6x, 3(x² + 2x) = 3x² + 6x и x(3x + 6) = 3x² + 6x.',
    },
  },
};

/** Language display metadata (including English) */
export const LANGUAGES = {
  en: { label: 'English', flag: '🇺🇸', banner: 'In English' },
  uz: { label: "O'zbekcha", flag: '🇺🇿', banner: "O'zbek tilida" },
  ru: { label: 'Русский', flag: '🇷🇺', banner: 'На русском языке' },
};

/** UI strings per language (buttons, feedback text, etc.) */
export const UI_STRINGS = {
  uz: {
    checkAnswer: 'Javobni tekshirish',
    nextQuestion: 'Keyingi savol',
    correct: "To'g'ri!",
    incorrect: "Noto'g'ri. To'g'ri javob",
    enterAnswer: 'Javobingizni quyida kiriting',
    placeholder: 'Javobingizni kiriting...',
    correctAnswer: "To'g'ri javob",
  },
  ru: {
    checkAnswer: 'Проверить ответ',
    nextQuestion: 'Следующий вопрос',
    correct: 'Правильно!',
    incorrect: 'Неправильно. Правильный ответ',
    enterAnswer: 'Введите числовой ответ ниже',
    placeholder: 'Введите ответ...',
    correctAnswer: 'Правильный ответ',
  },
};

export function getTranslation(questionId, lang) {
  return TRANSLATIONS[questionId]?.[lang] || null;
}

export function getAvailableLanguages(questionId) {
  const entry = TRANSLATIONS[questionId];
  return entry ? Object.keys(entry) : [];
}
