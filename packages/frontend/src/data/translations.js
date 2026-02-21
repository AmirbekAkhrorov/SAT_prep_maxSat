/**
 * Multi-language translations for SAT questions.
 * Structure: question_id → { lang_code: { ...translated fields } }
 * Covers: All 30 easy Advanced Math questions (ADV-E-001 through ADV-E-030).
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
  'ADV-E-002': {
    uz: {
      question_text: 'Soddalashtiring: (2x + 3)(x - 4)',
      choice_a: '2x² - 5x - 12',
      choice_b: '2x² - 8x - 12',
      choice_c: '2x² + 5x - 12',
      choice_d: '2x² - 5x + 12',
      explanation:
        'FOIL usuli: 2x(x) + 2x(-4) + 3(x) + 3(-4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12.',
    },
    ru: {
      question_text: 'Упростите: (2x + 3)(x - 4)',
      choice_a: '2x² - 5x - 12',
      choice_b: '2x² - 8x - 12',
      choice_c: '2x² + 5x - 12',
      choice_d: '2x² - 5x + 12',
      explanation:
        'Метод FOIL: 2x(x) + 2x(-4) + 3(x) + 3(-4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12.',
    },
  },
  'ADV-E-003': {
    uz: {
      question_text: 'x² - 9 = 0 tenglamaning yechimlari qanday?',
      choice_a: 'Faqat x = 3',
      choice_b: 'Faqat x = -3',
      choice_c: 'x = 3 va x = -3',
      choice_d: 'x = 9 va x = -9',
      explanation:
        'x² - 9 = 0 → x² = 9 → x = ±3. Bu kvadratlar ayirmasi: (x + 3)(x - 3) = 0.',
    },
    ru: {
      question_text: 'Каковы решения уравнения x² - 9 = 0?',
      choice_a: 'Только x = 3',
      choice_b: 'Только x = -3',
      choice_c: 'x = 3 и x = -3',
      choice_d: 'x = 9 и x = -9',
      explanation:
        'x² - 9 = 0 → x² = 9 → x = ±3. Это разность квадратов: (x + 3)(x - 3) = 0.',
    },
  },
  'ADV-E-004': {
    uz: {
      question_text: 'Yeching: x² - 5x + 6 = 0',
      choice_a: 'x = 1 va x = 6',
      choice_b: 'x = 2 va x = 3',
      choice_c: 'x = -2 va x = -3',
      choice_d: 'x = -1 va x = 6',
      explanation:
        'Ko\'paytuvchilarga ajrating: (x - 2)(x - 3) = 0. Har bir ko\'paytuvchini nolga tenglashtiramiz: x = 2 yoki x = 3.',
    },
    ru: {
      question_text: 'Решите: x² - 5x + 6 = 0',
      choice_a: 'x = 1 и x = 6',
      choice_b: 'x = 2 и x = 3',
      choice_c: 'x = -2 и x = -3',
      choice_d: 'x = -1 и x = 6',
      explanation:
        'Разложим на множители: (x - 2)(x - 3) = 0. Приравняем каждый множитель к нулю: x = 2 или x = 3.',
    },
  },
  'ADV-E-005': {
    uz: {
      question_text: 'Agar f(x) = x² + 2 bo\'lsa, f(3) nechaga teng?',
      choice_a: '5',
      choice_b: '9',
      choice_c: '11',
      choice_d: '14',
      explanation: 'f(3) = (3)² + 2 = 9 + 2 = 11.',
    },
    ru: {
      question_text: 'Если f(x) = x² + 2, чему равно f(3)?',
      choice_a: '5',
      choice_b: '9',
      choice_c: '11',
      choice_d: '14',
      explanation: 'f(3) = (3)² + 2 = 9 + 2 = 11.',
    },
  },
  'ADV-E-006': {
    uz: {
      question_text: 'f(x) = 2^x funksiya. f(4) nechaga teng?',
      choice_a: '8',
      choice_b: '16',
      choice_c: '32',
      choice_d: '64',
      explanation: 'f(4) = 2⁴ = 2 × 2 × 2 × 2 = 16.',
    },
    ru: {
      question_text: 'Функция f(x) = 2^x. Чему равно f(4)?',
      choice_a: '8',
      choice_b: '16',
      choice_c: '32',
      choice_d: '64',
      explanation: 'f(4) = 2⁴ = 2 × 2 × 2 × 2 = 16.',
    },
  },
  'ADV-E-007': {
    uz: {
      question_text: 'To\'liq ko\'paytuvchilarga ajrating: x² - 16',
      choice_a: '(x - 4)²',
      choice_b: '(x + 4)²',
      choice_c: '(x - 4)(x + 4)',
      choice_d: '(x - 8)(x + 2)',
      explanation:
        'Bu kvadratlar ayirmasi: a² - b² = (a - b)(a + b). Bu yerda: x² - 16 = x² - 4² = (x - 4)(x + 4).',
    },
    ru: {
      question_text: 'Разложите на множители полностью: x² - 16',
      choice_a: '(x - 4)²',
      choice_b: '(x + 4)²',
      choice_c: '(x - 4)(x + 4)',
      choice_d: '(x - 8)(x + 2)',
      explanation:
        'Это разность квадратов: a² - b² = (a - b)(a + b). Здесь: x² - 16 = x² - 4² = (x - 4)(x + 4).',
    },
  },
  'ADV-E-008': {
    uz: {
      question_text: 'Agar x² = 49 bo\'lsa, x ning musbat qiymati nechaga teng?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'x² = 49 degani x = ±7. Musbat qiymati x = 7.',
    },
    ru: {
      question_text: 'Если x² = 49, каково положительное значение x?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'x² = 49 означает x = ±7. Положительное значение: x = 7.',
    },
  },
  'ADV-E-009': {
    uz: {
      question_text: 'f(x) = -x² + 4 funksiya uchun f(x) ning maksimal qiymati qancha?',
      choice_a: '-4',
      choice_b: '0',
      choice_c: '4',
      choice_d: 'Maksimum yo\'q',
      explanation:
        'x² koeffitsienti manfiy (-1) bo\'lgani uchun parabola pastga ochiladi. Cho\'qqi nuqtasi x = 0 da, va f(0) = -0² + 4 = 4. Bu maksimum.',
    },
    ru: {
      question_text: 'Для функции f(x) = -x² + 4, каково максимальное значение f(x)?',
      choice_a: '-4',
      choice_b: '0',
      choice_c: '4',
      choice_d: 'Максимума нет',
      explanation:
        'Так как коэффициент при x² отрицательный (-1), парабола открывается вниз. Вершина при x = 0, и f(0) = -0² + 4 = 4. Это максимум.',
    },
  },
  'ADV-E-010': {
    uz: {
      question_text: 'Agar y = x² va y = 4 bo\'lsa, x ning qiymatlari qanday?',
      choice_a: 'Faqat x = 2',
      choice_b: 'Faqat x = -2',
      choice_c: 'x = 2 va x = -2',
      choice_d: 'Faqat x = 4',
      explanation: 'y = 4 ni y = x² ga qo\'yamiz: 4 = x², demak x = ±2.',
    },
    ru: {
      question_text: 'Если y = x² и y = 4, каковы значения x?',
      choice_a: 'Только x = 2',
      choice_b: 'Только x = -2',
      choice_c: 'x = 2 и x = -2',
      choice_d: 'Только x = 4',
      explanation: 'Подставим y = 4 в y = x²: 4 = x², значит x = ±2.',
    },
  },
  'ADV-E-011': {
    uz: {
      question_text: 'Soddalashtiring: (x + 5)(x + 3)',
      choice_a: 'x² + 8x + 15',
      choice_b: 'x² + 15x + 8',
      choice_c: 'x² + 2x + 15',
      choice_d: 'x² + 8x + 8',
      explanation: 'FOIL usuli: x² + 3x + 5x + 15 = x² + 8x + 15.',
    },
    ru: {
      question_text: 'Упростите: (x + 5)(x + 3)',
      choice_a: 'x² + 8x + 15',
      choice_b: 'x² + 15x + 8',
      choice_c: 'x² + 2x + 15',
      choice_d: 'x² + 8x + 8',
      explanation: 'Метод FOIL: x² + 3x + 5x + 15 = x² + 8x + 15.',
    },
  },
  'ADV-E-012': {
    uz: {
      question_text: 'Qaysi ifoda 4x² - 12x ga teng?',
      choice_a: '4x(x - 3)',
      choice_b: '4(x² - 3x)',
      choice_c: '2x(2x - 6)',
      choice_d: 'Yuqoridagilarning barchasi',
      explanation: 'Barcha ko\'paytuvchilar yoyilganda 4x² - 12x ga teng bo\'ladi.',
    },
    ru: {
      question_text: 'Какое выражение равно 4x² - 12x?',
      choice_a: '4x(x - 3)',
      choice_b: '4(x² - 3x)',
      choice_c: '2x(2x - 6)',
      choice_d: 'Все вышеперечисленные',
      explanation: 'Все разложения при раскрытии дают 4x² - 12x.',
    },
  },
  'ADV-E-013': {
    uz: {
      question_text: 'Yeching: x² - 4x = 0',
      choice_a: 'Faqat x = 0',
      choice_b: 'Faqat x = 4',
      choice_c: 'x = 0 va x = 4',
      choice_d: 'x = 2 va x = -2',
      explanation: 'Ko\'paytuvchilarga ajratamiz: x(x - 4) = 0. Demak x = 0 yoki x = 4.',
    },
    ru: {
      question_text: 'Решите: x² - 4x = 0',
      choice_a: 'Только x = 0',
      choice_b: 'Только x = 4',
      choice_c: 'x = 0 и x = 4',
      choice_d: 'x = 2 и x = -2',
      explanation: 'Разложим на множители: x(x - 4) = 0. Значит x = 0 или x = 4.',
    },
  },
  'ADV-E-014': {
    uz: {
      question_text: 'x² = 25 tenglamaning yechimlari qanday?',
      choice_a: 'Faqat x = 5',
      choice_b: 'Faqat x = -5',
      choice_c: 'x = 5 va x = -5',
      choice_d: 'x = 25',
      explanation: 'x² = 25 degani x = ±5.',
    },
    ru: {
      question_text: 'Каковы решения уравнения x² = 25?',
      choice_a: 'Только x = 5',
      choice_b: 'Только x = -5',
      choice_c: 'x = 5 и x = -5',
      choice_d: 'x = 25',
      explanation: 'x² = 25 означает x = ±5.',
    },
  },
  'ADV-E-015': {
    uz: {
      question_text: 'Agar g(x) = x² - 1 bo\'lsa, g(4) nechaga teng?',
      choice_a: '7',
      choice_b: '15',
      choice_c: '16',
      choice_d: '17',
      explanation: 'g(4) = 4² - 1 = 16 - 1 = 15.',
    },
    ru: {
      question_text: 'Если g(x) = x² - 1, чему равно g(4)?',
      choice_a: '7',
      choice_b: '15',
      choice_c: '16',
      choice_d: '17',
      explanation: 'g(4) = 4² - 1 = 16 - 1 = 15.',
    },
  },
  'ADV-E-016': {
    uz: {
      question_text: 'f(x) = 3^x uchun f(2) nechaga teng?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '9',
      choice_d: '27',
      explanation: 'f(2) = 3² = 9.',
    },
    ru: {
      question_text: 'Для f(x) = 3^x, чему равно f(2)?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '9',
      choice_d: '27',
      explanation: 'f(2) = 3² = 9.',
    },
  },
  'ADV-E-017': {
    uz: {
      question_text: 'Ko\'paytuvchilarga ajrating: x² + 6x + 9',
      choice_a: '(x + 3)²',
      choice_b: '(x + 9)(x + 1)',
      choice_c: '(x - 3)²',
      choice_d: '(x + 3)(x - 3)',
      explanation: 'Bu to\'liq kvadrat uchburchak: x² + 6x + 9 = (x + 3)².',
    },
    ru: {
      question_text: 'Разложите на множители: x² + 6x + 9',
      choice_a: '(x + 3)²',
      choice_b: '(x + 9)(x + 1)',
      choice_c: '(x - 3)²',
      choice_d: '(x + 3)(x - 3)',
      explanation: 'Это полный квадрат: x² + 6x + 9 = (x + 3)².',
    },
  },
  'ADV-E-018': {
    uz: {
      question_text: 'Agar y = x² va y = 9 bo\'lsa, x ning musbat qiymati nechaga teng?',
      choice_a: '1',
      choice_b: '3',
      choice_c: '4.5',
      choice_d: '9',
      explanation: 'x² = 9, demak x = ±3. Musbat qiymati 3.',
    },
    ru: {
      question_text: 'Если y = x² и y = 9, каково положительное значение x?',
      choice_a: '1',
      choice_b: '3',
      choice_c: '4,5',
      choice_d: '9',
      explanation: 'x² = 9, значит x = ±3. Положительное значение: 3.',
    },
  },
  'ADV-E-019': {
    uz: {
      question_text: 'Yeching: (x - 5)(x + 2) = 0',
      choice_a: 'Faqat x = 5',
      choice_b: 'Faqat x = -2',
      choice_c: 'x = 5 va x = -2',
      choice_d: 'x = -5 va x = 2',
      explanation:
        'Har bir ko\'paytuvchini nolga tenglashtiring: x - 5 = 0 dan x = 5, x + 2 = 0 dan x = -2.',
    },
    ru: {
      question_text: 'Решите: (x - 5)(x + 2) = 0',
      choice_a: 'Только x = 5',
      choice_b: 'Только x = -2',
      choice_c: 'x = 5 и x = -2',
      choice_d: 'x = -5 и x = 2',
      explanation:
        'Приравняем каждый множитель к нулю: x - 5 = 0 даёт x = 5, x + 2 = 0 даёт x = -2.',
    },
  },
  'ADV-E-020': {
    uz: {
      question_text: 'Agar h(x) = 2x² bo\'lsa, h(-3) nechaga teng?',
      choice_a: '-18',
      choice_b: '-12',
      choice_c: '12',
      choice_d: '18',
      explanation: 'h(-3) = 2(-3)² = 2(9) = 18.',
    },
    ru: {
      question_text: 'Если h(x) = 2x², чему равно h(-3)?',
      choice_a: '-18',
      choice_b: '-12',
      choice_c: '12',
      choice_d: '18',
      explanation: 'h(-3) = 2(-3)² = 2(9) = 18.',
    },
  },
  'ADV-E-021': {
    uz: {
      question_text: 'Soddalashtiring: (x - 2)(x - 2)',
      choice_a: 'x² - 4',
      choice_b: 'x² - 2x + 4',
      choice_c: 'x² - 4x + 4',
      choice_d: 'x² + 4x + 4',
      explanation: '(x - 2)² = x² - 4x + 4.',
    },
    ru: {
      question_text: 'Упростите: (x - 2)(x - 2)',
      choice_a: 'x² - 4',
      choice_b: 'x² - 2x + 4',
      choice_c: 'x² - 4x + 4',
      choice_d: 'x² + 4x + 4',
      explanation: '(x - 2)² = x² - 4x + 4.',
    },
  },
  'ADV-E-022': {
    uz: {
      question_text: 'x² + x = 0 tenglamasini x = 0 dan boshqa qaysi qiymat qanoatlantiradi?',
      choice_a: '-1',
      choice_b: '1',
      choice_c: '-2',
      choice_d: '2',
      explanation: 'Ko\'paytuvchilarga ajratamiz: x(x + 1) = 0. Yechimlar: x = 0 va x = -1.',
    },
    ru: {
      question_text: 'Какое значение x, кроме x = 0, удовлетворяет уравнению x² + x = 0?',
      choice_a: '-1',
      choice_b: '1',
      choice_c: '-2',
      choice_d: '2',
      explanation: 'Разложим на множители: x(x + 1) = 0. Решения: x = 0 и x = -1.',
    },
  },
  'ADV-E-023': {
    uz: {
      question_text: 'f(x) = x² funksiya qanday simmetriyaga ega?',
      choice_a: 'Simmetriya yo\'q',
      choice_b: 'x o\'qi bo\'yicha simmetriya',
      choice_c: 'y o\'qi bo\'yicha simmetriya',
      choice_d: 'Koordinata boshi bo\'yicha simmetriya',
      explanation:
        'f(x) = x² juft funksiya: f(-x) = (-x)² = x² = f(x). U y o\'qi bo\'yicha simmetrik.',
    },
    ru: {
      question_text: 'Какой тип симметрии имеет функция f(x) = x²?',
      choice_a: 'Нет симметрии',
      choice_b: 'Симметрия относительно оси x',
      choice_c: 'Симметрия относительно оси y',
      choice_d: 'Симметрия относительно начала координат',
      explanation:
        'f(x) = x² — чётная функция: f(-x) = (-x)² = x² = f(x). Она симметрична относительно оси y.',
    },
  },
  'ADV-E-024': {
    uz: {
      question_text: 'Agar y = x va y = x² bo\'lsa, ular qaysi musbat x qiymatda kesishadi?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation:
        'Tenglashtiring: x = x² → x² - x = 0 → x(x-1) = 0. Yechimlar: x = 0 va x = 1. Musbat qiymati 1.',
    },
    ru: {
      question_text: 'Если y = x и y = x², при каком положительном значении x они пересекаются?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation:
        'Приравняем: x = x² → x² - x = 0 → x(x-1) = 0. Решения: x = 0 и x = 1. Положительное значение: 1.',
    },
  },
  'ADV-E-025': {
    uz: {
      question_text: 'Ko\'paytuvchilarga ajrating: x² - 1',
      choice_a: '(x - 1)²',
      choice_b: '(x + 1)²',
      choice_c: '(x - 1)(x + 1)',
      choice_d: 'Ko\'paytuvchilarga ajratib bo\'lmaydi',
      explanation: 'Kvadratlar ayirmasi: x² - 1 = (x - 1)(x + 1).',
    },
    ru: {
      question_text: 'Разложите на множители: x² - 1',
      choice_a: '(x - 1)²',
      choice_b: '(x + 1)²',
      choice_c: '(x - 1)(x + 1)',
      choice_d: 'Нельзя разложить',
      explanation: 'Разность квадратов: x² - 1 = (x - 1)(x + 1).',
    },
  },
  'ADV-E-026': {
    uz: {
      question_text: 'x² = -4 tenglamaning nechta haqiqiy yechimi bor?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation:
        'Haqiqiy x uchun x² doimo ≥ 0. -4 < 0 bo\'lgani uchun haqiqiy yechim yo\'q.',
    },
    ru: {
      question_text: 'Сколько действительных решений имеет уравнение x² = -4?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation:
        'x² всегда ≥ 0 для действительных x. Так как -4 < 0, действительных решений нет.',
    },
  },
  'ADV-E-027': {
    uz: {
      question_text: 'f(x) = x² + 3x - 5 funksiyaning y o\'qi bilan kesishish nuqtasi qanday?',
      choice_a: '-5',
      choice_b: '-3',
      choice_c: '0',
      choice_d: '3',
      explanation: 'y o\'qi bilan kesishish x = 0 da: f(0) = 0² + 3(0) - 5 = -5.',
    },
    ru: {
      question_text: 'Какова точка пересечения с осью y для f(x) = x² + 3x - 5?',
      choice_a: '-5',
      choice_b: '-3',
      choice_c: '0',
      choice_d: '3',
      explanation: 'Пересечение с осью y при x = 0: f(0) = 0² + 3(0) - 5 = -5.',
    },
  },
  'ADV-E-028': {
    uz: {
      question_text: 'Yoying: (x + 4)²',
      choice_a: 'x² + 16',
      choice_b: 'x² + 4x + 16',
      choice_c: 'x² + 8x + 16',
      choice_d: 'x² + 8x + 8',
      explanation: '(x + 4)² = x² + 2(4)x + 16 = x² + 8x + 16.',
    },
    ru: {
      question_text: 'Раскройте: (x + 4)²',
      choice_a: 'x² + 16',
      choice_b: 'x² + 4x + 16',
      choice_c: 'x² + 8x + 16',
      choice_d: 'x² + 8x + 8',
      explanation: '(x + 4)² = x² + 2(4)x + 16 = x² + 8x + 16.',
    },
  },
  'ADV-E-029': {
    uz: {
      question_text: 'Agar y = 2x va y = x² bo\'lsa, ular qaysi x qiymatlarda kesishadi?',
      choice_a: 'Faqat x = 0',
      choice_b: 'Faqat x = 2',
      choice_c: 'x = 0 va x = 2',
      choice_d: 'x = -2 va x = 2',
      explanation:
        'Tenglashtiring: 2x = x² → x² - 2x = 0 → x(x - 2) = 0. Yechimlar: x = 0 va x = 2.',
    },
    ru: {
      question_text: 'Если y = 2x и y = x², при каких значениях x они пересекаются?',
      choice_a: 'Только x = 0',
      choice_b: 'Только x = 2',
      choice_c: 'x = 0 и x = 2',
      choice_d: 'x = -2 и x = 2',
      explanation:
        'Приравняем: 2x = x² → x² - 2x = 0 → x(x - 2) = 0. Решения: x = 0 и x = 2.',
    },
  },
  'ADV-E-030': {
    uz: {
      question_text: 'Agar f(x) = 5^x bo\'lsa, f(0) nechaga teng?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '5',
      choice_d: 'Aniqlanmagan',
      explanation: 'Nolga teng bo\'lmagan har qanday son 0-darajaga ko\'tarilsa 1 ga teng. f(0) = 5⁰ = 1.',
    },
    ru: {
      question_text: 'Если f(x) = 5^x, чему равно f(0)?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '5',
      choice_d: 'Не определено',
      explanation: 'Любое ненулевое число в степени 0 равно 1. f(0) = 5⁰ = 1.',
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
