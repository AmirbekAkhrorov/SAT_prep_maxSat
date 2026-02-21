/**
 * Uzbek translations for SAT questions.
 * Key: question_id → translated fields.
 * For now: only ADV-E-001 (Advanced Math, easy).
 */
const TRANSLATIONS = {
  'ADV-E-001': {
    question_text: 'Quyidagi ifodalardan qaysi biri 3x² + 6x ga teng?',
    choice_a: '3x(x + 2)',
    choice_b: '3(x² + 2x)',
    choice_c: 'x(3x + 6)',
    choice_d: 'Yuqoridagilarning barchasi',
    explanation:
      'Barcha uchta ko\'rinish bir xil: 3x(x + 2) = 3x² + 6x, 3(x² + 2x) = 3x² + 6x, va x(3x + 6) = 3x² + 6x.',
  },
};

export function getTranslation(questionId) {
  return TRANSLATIONS[questionId] || null;
}

export function hasTranslation(questionId) {
  return questionId in TRANSLATIONS;
}
