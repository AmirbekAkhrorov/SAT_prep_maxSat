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
  'ADV-E-031': {
    uz: {
      question_text: 'Ko\'paytuvchilarga ajrating: x² - 4x',
      choice_a: 'x(x - 4)',
      choice_b: 'x(x + 4)',
      choice_c: '(x - 2)²',
      choice_d: '(x + 2)(x - 2)',
      explanation: 'x ni ajratib olamiz: x² - 4x = x(x - 4).',
    },
    ru: {
      question_text: 'Разложите на множители: x² - 4x',
      choice_a: 'x(x - 4)',
      choice_b: 'x(x + 4)',
      choice_c: '(x - 2)²',
      choice_d: '(x + 2)(x - 2)',
      explanation: 'Вынесем x за скобки: x² - 4x = x(x - 4).',
    },
  },
  'ADV-E-032': {
    uz: {
      question_text: 'Yoying: (x + 5)²',
      choice_a: 'x² + 25',
      choice_b: 'x² + 5x + 25',
      choice_c: 'x² + 10x + 25',
      choice_d: 'x² + 10x + 5',
      explanation: '(x + 5)² = x² + 2(x)(5) + 25 = x² + 10x + 25.',
    },
    ru: {
      question_text: 'Раскройте: (x + 5)²',
      choice_a: 'x² + 25',
      choice_b: 'x² + 5x + 25',
      choice_c: 'x² + 10x + 25',
      choice_d: 'x² + 10x + 5',
      explanation: '(x + 5)² = x² + 2(x)(5) + 25 = x² + 10x + 25.',
    },
  },
  'ADV-E-033': {
    uz: {
      question_text: 'Yeching: x² = 49',
      choice_a: 'x = 7',
      choice_b: 'x = -7',
      choice_c: 'x = 7 yoki x = -7',
      choice_d: 'x = 24.5',
      explanation: 'x² = 49 degani x = ±√49 = ±7.',
    },
    ru: {
      question_text: 'Решите: x² = 49',
      choice_a: 'x = 7',
      choice_b: 'x = -7',
      choice_c: 'x = 7 или x = -7',
      choice_d: 'x = 24,5',
      explanation: 'x² = 49 означает x = ±√49 = ±7.',
    },
  },
  'ADV-E-034': {
    uz: {
      question_text: 'Agar (x - 3)(x + 2) = 0 bo\'lsa, yechimlar qanday?',
      choice_a: 'x = 3 va x = 2',
      choice_b: 'x = -3 va x = -2',
      choice_c: 'x = 3 va x = -2',
      choice_d: 'x = -3 va x = 2',
      explanation: 'Har bir ko\'paytuvchini nolga tenglashtiring: x - 3 = 0 dan x = 3; x + 2 = 0 dan x = -2.',
    },
    ru: {
      question_text: 'Если (x - 3)(x + 2) = 0, каковы решения?',
      choice_a: 'x = 3 и x = 2',
      choice_b: 'x = -3 и x = -2',
      choice_c: 'x = 3 и x = -2',
      choice_d: 'x = -3 и x = 2',
      explanation: 'Приравняем каждый множитель к нулю: x - 3 = 0 даёт x = 3; x + 2 = 0 даёт x = -2.',
    },
  },
  'ADV-E-035': {
    uz: {
      question_text: 'Agar f(x) = x² bo\'lsa, f(4) nechaga teng?',
      choice_a: '8',
      choice_b: '12',
      choice_c: '16',
      choice_d: '64',
      explanation: 'f(4) = 4² = 16.',
    },
    ru: {
      question_text: 'Если f(x) = x², чему равно f(4)?',
      choice_a: '8',
      choice_b: '12',
      choice_c: '16',
      choice_d: '64',
      explanation: 'f(4) = 4² = 16.',
    },
  },
  'ADV-E-036': {
    uz: {
      question_text: 'Agar g(x) = 2^x bo\'lsa, g(3) nechaga teng?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '8',
      choice_d: '9',
      explanation: 'g(3) = 2³ = 8.',
    },
    ru: {
      question_text: 'Если g(x) = 2^x, чему равно g(3)?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '8',
      choice_d: '9',
      explanation: 'g(3) = 2³ = 8.',
    },
  },
  'ADV-E-037': {
    uz: {
      question_text: 'Soddalashtiring: 5x² + 3x² - 2x²',
      choice_a: '6x²',
      choice_b: '8x²',
      choice_c: '10x²',
      choice_d: '6x⁶',
      explanation: 'O\'xshash hadlarni yig\'amiz: 5 + 3 - 2 = 6, demak 6x².',
    },
    ru: {
      question_text: 'Упростите: 5x² + 3x² - 2x²',
      choice_a: '6x²',
      choice_b: '8x²',
      choice_c: '10x²',
      choice_d: '6x⁶',
      explanation: 'Складываем подобные члены: 5 + 3 - 2 = 6, значит 6x².',
    },
  },
  'ADV-E-038': {
    uz: {
      question_text: '(x - 3)(x + 3) nimaga teng?',
      choice_a: 'x² - 9',
      choice_b: 'x² + 9',
      choice_c: 'x² - 6',
      choice_d: 'x² - 6x + 9',
      explanation: 'Bu kvadratlar ayirmasi: (x - 3)(x + 3) = x² - 9.',
    },
    ru: {
      question_text: 'Чему равно (x - 3)(x + 3)?',
      choice_a: 'x² - 9',
      choice_b: 'x² + 9',
      choice_c: 'x² - 6',
      choice_d: 'x² - 6x + 9',
      explanation: 'Это разность квадратов: (x - 3)(x + 3) = x² - 9.',
    },
  },
  'ADV-E-039': {
    uz: {
      question_text: 'Yeching: x² - 16 = 0',
      choice_a: 'x = 4',
      choice_b: 'x = -4',
      choice_c: 'x = 4 yoki x = -4',
      choice_d: 'x = 8',
      explanation: 'x² = 16, demak x = ±4.',
    },
    ru: {
      question_text: 'Решите: x² - 16 = 0',
      choice_a: 'x = 4',
      choice_b: 'x = -4',
      choice_c: 'x = 4 или x = -4',
      choice_d: 'x = 8',
      explanation: 'x² = 16, значит x = ±4.',
    },
  },
  'ADV-E-040': {
    uz: {
      question_text: 'y = x² grafigi qaysi tomonga ochiladi?',
      choice_a: 'Yuqoriga',
      choice_b: 'Pastga',
      choice_c: 'O\'ngga',
      choice_d: 'Chapga',
      explanation: 'y = x² ning yetakchi koeffitsienti musbat, shuning uchun parabola yuqoriga ochiladi.',
    },
    ru: {
      question_text: 'График y = x² открывается:',
      choice_a: 'Вверх',
      choice_b: 'Вниз',
      choice_c: 'Вправо',
      choice_d: 'Влево',
      explanation: 'Старший коэффициент y = x² положительный, поэтому парабола открывается вверх.',
    },
  },
  'ADV-E-041': {
    uz: {
      question_text: 'Ko\'paytuvchilarga ajrating: 2x² + 4x',
      choice_a: '2(x² + 2x)',
      choice_b: '2x(x + 2)',
      choice_c: 'x(2x + 4)',
      choice_d: 'Yuqoridagilarning barchasi',
      explanation: 'Barchasi to\'g\'ri: 2(x² + 2x) = 2x² + 4x, 2x(x + 2) = 2x² + 4x, x(2x + 4) = 2x² + 4x.',
    },
    ru: {
      question_text: 'Разложите на множители: 2x² + 4x',
      choice_a: '2(x² + 2x)',
      choice_b: '2x(x + 2)',
      choice_c: 'x(2x + 4)',
      choice_d: 'Все вышеперечисленные',
      explanation: 'Все верны: 2(x² + 2x) = 2x² + 4x, 2x(x + 2) = 2x² + 4x, x(2x + 4) = 2x² + 4x.',
    },
  },
  'ADV-E-042': {
    uz: {
      question_text: 'x² = 25 ning musbat yechimi qancha?',
      choice_a: '5',
      choice_b: '12.5',
      choice_c: '25',
      choice_d: '125',
      explanation: 'x² = 25 dan x = ±5. Musbat yechimi 5.',
    },
    ru: {
      question_text: 'Каково положительное решение x² = 25?',
      choice_a: '5',
      choice_b: '12,5',
      choice_c: '25',
      choice_d: '125',
      explanation: 'x² = 25 даёт x = ±5. Положительное решение: 5.',
    },
  },
  'ADV-E-043': {
    uz: {
      question_text: 'Agar h(x) = x³ bo\'lsa, h(2) nechaga teng?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '16',
      explanation: 'h(2) = 2³ = 8.',
    },
    ru: {
      question_text: 'Если h(x) = x³, чему равно h(2)?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '16',
      explanation: 'h(2) = 2³ = 8.',
    },
  },
  'ADV-E-044': {
    uz: {
      question_text: 'Yoying: (x - 2)(x - 2)',
      choice_a: 'x² - 4',
      choice_b: 'x² - 4x + 4',
      choice_c: 'x² + 4x + 4',
      choice_d: 'x² - 2x + 4',
      explanation: '(x - 2)² = x² - 2(x)(2) + 4 = x² - 4x + 4.',
    },
    ru: {
      question_text: 'Раскройте: (x - 2)(x - 2)',
      choice_a: 'x² - 4',
      choice_b: 'x² - 4x + 4',
      choice_c: 'x² + 4x + 4',
      choice_d: 'x² - 2x + 4',
      explanation: '(x - 2)² = x² - 2(x)(2) + 4 = x² - 4x + 4.',
    },
  },
  'ADV-E-045': {
    uz: {
      question_text: 'Yeching: x² + 6x + 9 = 0',
      choice_a: 'x = 3',
      choice_b: 'x = -3',
      choice_c: 'x = 3 yoki x = -3',
      choice_d: 'x = 9',
      explanation: 'x² + 6x + 9 = (x + 3)² = 0, demak x + 3 = 0, x = -3.',
    },
    ru: {
      question_text: 'Решите: x² + 6x + 9 = 0',
      choice_a: 'x = 3',
      choice_b: 'x = -3',
      choice_c: 'x = 3 или x = -3',
      choice_d: 'x = 9',
      explanation: 'x² + 6x + 9 = (x + 3)² = 0, значит x + 3 = 0, x = -3.',
    },
  },
  'ADV-E-046': {
    uz: {
      question_text: 'y = x² - 4 ning cho\'qqi nuqtasi qayerda?',
      choice_a: '(0, 4)',
      choice_b: '(0, -4)',
      choice_c: '(4, 0)',
      choice_d: '(-4, 0)',
      explanation: 'y = x² - 4 bu y = x² ning 4 birlikka pastga siljishi. Cho\'qqi (0, -4) da.',
    },
    ru: {
      question_text: 'Вершина y = x² - 4 находится в точке:',
      choice_a: '(0, 4)',
      choice_b: '(0, -4)',
      choice_c: '(4, 0)',
      choice_d: '(-4, 0)',
      explanation: 'y = x² - 4 — это y = x², сдвинутая на 4 единицы вниз. Вершина в точке (0, -4).',
    },
  },
  'ADV-E-047': {
    uz: {
      question_text: 'Soddalashtiring: x³ · x²',
      choice_a: 'x⁵',
      choice_b: 'x⁶',
      choice_c: '2x⁵',
      choice_d: 'x',
      explanation: 'Bir xil asosli darajalarni ko\'paytirganda daraja ko\'rsatkichlari qo\'shiladi: x³ · x² = x^(3+2) = x⁵.',
    },
    ru: {
      question_text: 'Упростите: x³ · x²',
      choice_a: 'x⁵',
      choice_b: 'x⁶',
      choice_c: '2x⁵',
      choice_d: 'x',
      explanation: 'При умножении степеней с одинаковым основанием показатели складываются: x³ · x² = x^(3+2) = x⁵.',
    },
  },
  'ADV-E-048': {
    uz: {
      question_text: 'Agar x² = 0 bo\'lsa, x nechaga teng?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '-1',
      choice_d: 'Yechim yo\'q',
      explanation: 'x² = 0 degani x = 0.',
    },
    ru: {
      question_text: 'Если x² = 0, чему равен x?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '-1',
      choice_d: 'Нет решения',
      explanation: 'x² = 0 означает x = 0.',
    },
  },
  'ADV-E-049': {
    uz: {
      question_text: 'Agar f(x) = 3^x bo\'lsa, f(0) nechaga teng?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '3',
      choice_d: '9',
      explanation: 'Nolga teng bo\'lmagan har qanday son 0-darajaga ko\'tarilsa 1 ga teng: 3⁰ = 1.',
    },
    ru: {
      question_text: 'Если f(x) = 3^x, чему равно f(0)?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '3',
      choice_d: '9',
      explanation: 'Любое ненулевое число в степени 0 равно 1: 3⁰ = 1.',
    },
  },
  'ADV-E-050': {
    uz: {
      question_text: 'Soddalashtiring: (3x)²',
      choice_a: '6x²',
      choice_b: '9x',
      choice_c: '9x²',
      choice_d: '3x²',
      explanation: '(3x)² = 3² · x² = 9x².',
    },
    ru: {
      question_text: 'Упростите: (3x)²',
      choice_a: '6x²',
      choice_b: '9x',
      choice_c: '9x²',
      choice_d: '3x²',
      explanation: '(3x)² = 3² · x² = 9x².',
    },
  },
  'ADV-E-051': {
    uz: {
      question_text: 'Yeching: (x + 4)² = 0',
      choice_a: 'x = 4',
      choice_b: 'x = -4',
      choice_c: 'x = 2',
      choice_d: 'x = 16',
      explanation: '(x + 4)² = 0 degani x + 4 = 0, demak x = -4.',
    },
    ru: {
      question_text: 'Решите: (x + 4)² = 0',
      choice_a: 'x = 4',
      choice_b: 'x = -4',
      choice_c: 'x = 2',
      choice_d: 'x = 16',
      explanation: '(x + 4)² = 0 означает x + 4 = 0, значит x = -4.',
    },
  },
  'ADV-E-052': {
    uz: {
      question_text: 'y = x² + 5 ning y o\'qi bilan kesishish nuqtasi:',
      choice_a: '0',
      choice_b: '1',
      choice_c: '5',
      choice_d: '25',
      explanation: 'x = 0 ni qo\'yamiz: y = 0² + 5 = 5.',
    },
    ru: {
      question_text: 'Точка пересечения y = x² + 5 с осью y:',
      choice_a: '0',
      choice_b: '1',
      choice_c: '5',
      choice_d: '25',
      explanation: 'Подставим x = 0: y = 0² + 5 = 5.',
    },
  },
  'ADV-E-053': {
    uz: {
      question_text: 'Soddalashtiring: x⁶ ÷ x²',
      choice_a: 'x³',
      choice_b: 'x⁴',
      choice_c: 'x⁸',
      choice_d: 'x¹²',
      explanation: 'Bir xil asosli darajalarni bo\'lganda daraja ko\'rsatkichlari ayiriladi: x⁶ ÷ x² = x^(6-2) = x⁴.',
    },
    ru: {
      question_text: 'Упростите: x⁶ ÷ x²',
      choice_a: 'x³',
      choice_b: 'x⁴',
      choice_c: 'x⁸',
      choice_d: 'x¹²',
      explanation: 'При делении степеней с одинаковым основанием показатели вычитаются: x⁶ ÷ x² = x^(6-2) = x⁴.',
    },
  },
  'ADV-E-054': {
    uz: {
      question_text: 'x² - 1 = 0 ni qanoatlantiruvchi x qiymatlari qanday?',
      choice_a: 'Faqat 1',
      choice_b: 'Faqat -1',
      choice_c: '1 va -1',
      choice_d: '0',
      explanation: 'x² - 1 = (x - 1)(x + 1) = 0, demak x = 1 yoki x = -1.',
    },
    ru: {
      question_text: 'Какие значения x удовлетворяют x² - 1 = 0?',
      choice_a: 'Только 1',
      choice_b: 'Только -1',
      choice_c: '1 и -1',
      choice_d: '0',
      explanation: 'x² - 1 = (x - 1)(x + 1) = 0, значит x = 1 или x = -1.',
    },
  },
  'ADV-E-055': {
    uz: {
      question_text: 'Agar f(x) = x² + 1 bo\'lsa, f(-2) nechaga teng?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '5',
      choice_d: '-5',
      explanation: 'f(-2) = (-2)² + 1 = 4 + 1 = 5.',
    },
    ru: {
      question_text: 'Если f(x) = x² + 1, чему равно f(-2)?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '5',
      choice_d: '-5',
      explanation: 'f(-2) = (-2)² + 1 = 4 + 1 = 5.',
    },
  },
  'ADV-E-056': {
    uz: {
      question_text: 'x² - 25 nimaga teng?',
      choice_a: '(x - 5)²',
      choice_b: '(x + 5)²',
      choice_c: '(x - 5)(x + 5)',
      choice_d: '(x - 25)(x + 1)',
      explanation: 'x² - 25 kvadratlar ayirmasi: (x - 5)(x + 5).',
    },
    ru: {
      question_text: 'Чему равно x² - 25?',
      choice_a: '(x - 5)²',
      choice_b: '(x + 5)²',
      choice_c: '(x - 5)(x + 5)',
      choice_d: '(x - 25)(x + 1)',
      explanation: 'x² - 25 — разность квадратов: (x - 5)(x + 5).',
    },
  },
  'ADV-E-057': {
    uz: {
      question_text: 'Yeching: x² = 100',
      choice_a: 'x = 10',
      choice_b: 'x = -10',
      choice_c: 'x = 50',
      choice_d: 'x = 10 yoki x = -10',
      explanation: 'x² = 100 dan x = ±10.',
    },
    ru: {
      question_text: 'Решите: x² = 100',
      choice_a: 'x = 10',
      choice_b: 'x = -10',
      choice_c: 'x = 50',
      choice_d: 'x = 10 или x = -10',
      explanation: 'x² = 100 даёт x = ±10.',
    },
  },
  'ADV-E-058': {
    uz: {
      question_text: 'y = -x² grafigi qaysi tomonga ochiladi?',
      choice_a: 'Yuqoriga',
      choice_b: 'Pastga',
      choice_c: 'O\'ngga',
      choice_d: 'Chapga',
      explanation: 'Manfiy koeffitsient parabola pastga ochilishini bildiradi.',
    },
    ru: {
      question_text: 'График y = -x² открывается:',
      choice_a: 'Вверх',
      choice_b: 'Вниз',
      choice_c: 'Вправо',
      choice_d: 'Влево',
      explanation: 'Отрицательный коэффициент означает, что парабола открывается вниз.',
    },
  },
  'ADV-E-059': {
    uz: {
      question_text: 'Soddalashtiring: (x²)³',
      choice_a: 'x⁵',
      choice_b: 'x⁶',
      choice_c: 'x⁸',
      choice_d: '3x²',
      explanation: 'Darajani darajaga ko\'tarilganda daraja ko\'rsatkichlari ko\'paytiriladi: (x²)³ = x^(2×3) = x⁶.',
    },
    ru: {
      question_text: 'Упростите: (x²)³',
      choice_a: 'x⁵',
      choice_b: 'x⁶',
      choice_c: 'x⁸',
      choice_d: '3x²',
      explanation: 'При возведении степени в степень показатели перемножаются: (x²)³ = x^(2×3) = x⁶.',
    },
  },
  'ADV-E-060': {
    uz: {
      question_text: 'Agar x² = 4 va x + y = 5 bo\'lsa (x > 0), y nechaga teng?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'x² = 4 va x > 0 degani x = 2. Keyin 2 + y = 5, demak y = 3.',
    },
    ru: {
      question_text: 'Если x² = 4 и x + y = 5, где x > 0, чему равен y?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'x² = 4 и x > 0 означает x = 2. Тогда 2 + y = 5, значит y = 3.',
    },
  },
  'ADV-M-001': {
    uz: {
      question_text: 'Quyidagi ifodalardan qaysi biri ... ga teng: (x² - 4)/(x - 2)?',
      choice_a: 'x - 2',
      choice_b: 'x + 2',
      choice_c: 'x² - 2',
      choice_d: '(x - 2)²',
      explanation: 'Suratni ko\'paytuvchilarga ajratamiz: x² - 4 = (x + 2)(x - 2). Keyin (x + 2)(x - 2)/(x - 2) = x + 2 (x ≠ 2 uchun).',
    },
    ru: {
      question_text: 'Какое выражение равно (x² - 4)/(x - 2)?',
      choice_a: 'x - 2',
      choice_b: 'x + 2',
      choice_c: 'x² - 2',
      choice_d: '(x - 2)²',
      explanation: 'Разложим числитель: x² - 4 = (x + 2)(x - 2). Затем (x + 2)(x - 2)/(x - 2) = x + 2 (при x ≠ 2).',
    },
  },
  'ADV-M-002': {
    uz: {
      question_text: '... tenglamaning yechimlar yig\'indisi nechaga teng: x² - 8x + 12 = 0?',
      choice_a: '2',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: 'Ko\'paytuvchilarga ajratamiz: (x - 2)(x - 6) = 0, demak x = 2 yoki x = 6. Yig\'indi = 2 + 6 = 8. Boshqacha qilib, Viyet formulasiga ko\'ra, ildizlar yig\'indisi = -(-8)/1 = 8.',
    },
    ru: {
      question_text: 'Какова сумма решений уравнения x² - 8x + 12 = 0?',
      choice_a: '2',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: 'Разложим: (x - 2)(x - 6) = 0, следовательно x = 2 или x = 6. Сумма = 2 + 6 = 8. Или иначе, по формулам Виета, сумма корней = -(-8)/1 = 8.',
    },
  },
  'ADV-M-003': {
    uz: {
      question_text: 'Funksiya f(x) = (x - 3)² - 4. Parabolaning cho\'qqisi qayerda?',
      choice_a: '(3, -4)',
      choice_b: '(-3, -4)',
      choice_c: '(3, 4)',
      choice_d: '(-3, 4)',
      explanation: 'Cho\'qqi shaklida f(x) = (x - h)² + k, bu yerda cho\'qqi (h, k). Bu yerda h = 3 va k = -4, demak cho\'qqi (3, -4).',
    },
    ru: {
      question_text: 'Функция f(x) = (x - 3)² - 4. Каковы координаты вершины параболы?',
      choice_a: '(3, -4)',
      choice_b: '(-3, -4)',
      choice_c: '(3, 4)',
      choice_d: '(-3, 4)',
      explanation: 'В форме с вершиной f(x) = (x - h)² + k вершина равна (h, k). Здесь h = 3 и k = -4, следовательно вершина (3, -4).',
    },
  },
  'ADV-M-004': {
    uz: {
      question_text: 'Populyatsiya har 5 yilda ikki baravar ortadi. Agar boshlang\'ich populyatsiya 1000 bo\'lsa, qaysi funksiya P populyatsiyasini t yil o\'tgach modellashtiradi?',
      choice_a: 'P(t) = 1000(2)^t',
      choice_b: 'P(t) = 1000(2)^(t/5)',
      choice_c: 'P(t) = 1000(2)^(5t)',
      choice_d: 'P(t) = 2000t',
      explanation: '5 yillik ikkilanish davri bilan eksponentsial o\'sish uchun: P(t) = P₀(2)^(t/T), bunda T ikkilanish vaqti. Demak P(t) = 1000(2)^(t/5).',
    },
    ru: {
      question_text: 'Популяция удваивается каждые 5 лет. Если начальная популяция равна 1000, какая функция моделирует популяцию P через t лет?',
      choice_a: 'P(t) = 1000(2)^t',
      choice_b: 'P(t) = 1000(2)^(t/5)',
      choice_c: 'P(t) = 1000(2)^(5t)',
      choice_d: 'P(t) = 2000t',
      explanation: 'Для экспоненциального роста со временем удвоения 5 лет: P(t) = P₀(2)^(t/T), где T — время удвоения. Значит P(t) = 1000(2)^(t/5).',
    },
  },
  'ADV-M-005': {
    uz: {
      question_text: 'Yeching: √(x + 5) = 3',
      choice_a: 'x = 2',
      choice_b: 'x = 4',
      choice_c: 'x = 8',
      choice_d: 'x = 14',
      explanation: 'Ikkala tomonni kvadratga ko\'taramiz: x + 5 = 9. Ayiramiz 5: x = 4. Tekshiramiz: √(4 + 5) = √9 = 3 ✓',
    },
    ru: {
      question_text: 'Решите: √(x + 5) = 3',
      choice_a: 'x = 2',
      choice_b: 'x = 4',
      choice_c: 'x = 8',
      choice_d: 'x = 14',
      explanation: 'Возведём обе части в квадрат: x + 5 = 9. Вычтем 5: x = 4. Проверим: √(4 + 5) = √9 = 3 ✓',
    },
  },
  'ADV-M-006': {
    uz: {
      question_text: 'Soddalashtiring: (3x³y²)/(9x²y⁴)',
      choice_a: 'x/(3y²)',
      choice_b: '3x/y²',
      choice_c: 'x³/(3y²)',
      choice_d: '3xy²',
      explanation: 'Koeffitsientlarni soddalashtiring: 3/9 = 1/3. x uchun: x³/x² = x. y uchun: y²/y⁴ = 1/y². Natija: x/(3y²).',
    },
    ru: {
      question_text: 'Упростите: (3x³y²)/(9x²y⁴)',
      choice_a: 'x/(3y²)',
      choice_b: '3x/y²',
      choice_c: 'x³/(3y²)',
      choice_d: '3xy²',
      explanation: 'Koeffitsientlarni soddalashtiring: 3/9 = 1/3. x uchun: x³/x² = x. y uchun: y²/y⁴ = 1/y². Natija: x/(3y²).',
    },
  },
  'ADV-M-007': {
    uz: {
      question_text: 'Agar y = x² - 4 va y = 2x - 1 bo\'lsa, ikkala tenglamani qondiradigan x ning katta qiymati nechaga teng?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Tenglashtiring: x² - 4 = 2x - 1 → x² - 2x - 3 = 0 → (x - 3)(x + 1) = 0. Demak x = 3 or x = -1. larger value is 3.',
    },
    ru: {
      question_text: 'Если y = x² - 4 и y = 2x - 1, чему равно большее значение x, которое удовлетворяет обоим уравнениям?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Приравняем: x² - 4 = 2x - 1 → x² - 2x - 3 = 0 → (x - 3)(x + 1) = 0. Значит x = 3 or x = -1. larger value is 3.',
    },
  },
  'ADV-M-008': {
    uz: {
      question_text: 'Nechta haqiqiy yechimi bor: x² + 4x + 5 = 0 bor?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Cheksiz ko\'p',
      explanation: 'Diskriminantni hisoblang: b² - 4ac = 16 - 20 = -4. Chunki diskriminant < 0, haqiqiy yechim yo\'q.',
    },
    ru: {
      question_text: 'Сколько действительных решений имеет x² + 4x + 5 = 0 ?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Бесконечно много',
      explanation: 'Calculate дискриминант: b² - 4ac = 16 - 20 = -4. Так как дискриминант < 0, there are нет действительных решений.',
    },
  },
  'ADV-M-009': {
    uz: {
      question_text: 'Agar f(x) = 2^(x+1), nechaga teng f(2)?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '16',
      explanation: 'f(2) = 2^(2+1) = 2^3 = 8.',
    },
    ru: {
      question_text: 'Если f(x) = 2^(x+1), чему равно f(2)?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '16',
      explanation: 'f(2) = 2^(2+1) = 2^3 = 8.',
    },
  },
  'ADV-M-010': {
    uz: {
      question_text: 'Yoying va soddalashtiring: (x + 2)³ when x = 1',
      choice_a: '9',
      choice_b: '18',
      choice_c: '27',
      choice_d: '64',
      explanation: '(1 + 2)³ = 3³ = 27.',
    },
    ru: {
      question_text: 'Раскройте и упростите: (x + 2)³ when x = 1',
      choice_a: '9',
      choice_b: '18',
      choice_c: '27',
      choice_d: '64',
      explanation: '(1 + 2)³ = 3³ = 27.',
    },
  },
  'ADV-M-011': {
    uz: {
      question_text: 'Soddalashtiring: (x² - 9)/(x + 3)',
      choice_a: 'x - 3',
      choice_b: 'x + 3',
      choice_c: 'x - 9',
      choice_d: 'x² - 3',
      explanation: 'Factor numerator: (x - 3)(x + 3)/(x + 3) = x - 3 (for x ≠ -3).',
    },
    ru: {
      question_text: 'Упростите: (x² - 9)/(x + 3)',
      choice_a: 'x - 3',
      choice_b: 'x + 3',
      choice_c: 'x - 9',
      choice_d: 'x² - 3',
      explanation: 'Factor numerator: (x - 3)(x + 3)/(x + 3) = x - 3 (for x ≠ -3).',
    },
  },
  'ADV-M-012': {
    uz: {
      question_text: '... tenglamaning yechimlar ko\'paytmasi nechaga teng: x² - 7x + 10 = 0?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '7',
      choice_d: '10',
      explanation: 'Viyet formulasiga ko\'ra, ildizlar ko\'paytmasi = c/a = 10/1 = 10. Yoki ko\'paytuvchilarga ajrating: (x-2)(x-5) = 0, yechimlar 2 va 5, ko\'paytma = 10.',
    },
    ru: {
      question_text: 'Каково произведение решений уравнения x² - 7x + 10 = 0?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '7',
      choice_d: '10',
      explanation: 'По формулам Виета, произведение корней = c/a = 10/1 = 10. Или разложим: (x-2)(x-5) = 0, решения 2 и 5, произведение = 10.',
    },
  },
  'ADV-M-013': {
    uz: {
      question_text: 'Funksiya g(x) = -2x² + 8x - 3. Maksimum qaysi x qiymatda bo\'ladi?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'ax² + bx + c parabolasida cho\'qqi x-koordinatasi -b/(2a) = -8/(2(-2)) = -8/(-4) = 2.',
    },
    ru: {
      question_text: 'Функция g(x) = -2x² + 8x - 3. При каком значении x достигается максимум?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Для параболы ax² + bx + c x-координата вершины равна -b/(2a) = -8/(2(-2)) = -8/(-4) = 2.',
    },
  },
  'ADV-M-014': {
    uz: {
      question_text: 'Nechta nuqtada y = x² and y = 4x - 4 kesishadi?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Cheksiz ko\'p',
      explanation: 'Tenglashtiring: x² = 4x - 4 → x² - 4x + 4 = 0 → (x - 2)² = 0. Only x = 2. One intersection point.',
    },
    ru: {
      question_text: 'В скольких точках y = x² and y = 4x - 4 пересекаются?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Бесконечно много',
      explanation: 'Приравняем: x² = 4x - 4 → x² - 4x + 4 = 0 → (x - 2)² = 0. Only x = 2. One intersection point.',
    },
  },
  'ADV-M-015': {
    uz: {
      question_text: 'To\'liq ko\'paytuvchilarga ajrating: 2x² - 8',
      choice_a: '2(x² - 4)',
      choice_b: '2(x - 2)(x + 2)',
      choice_c: '(2x - 4)(x + 2)',
      choice_d: '2(x - 4)(x + 1)',
      explanation: 'Ajratib olamiz 2: 2(x² - 4) = 2(x - 2)(x + 2).',
    },
    ru: {
      question_text: 'Разложите на множители полностью: 2x² - 8',
      choice_a: '2(x² - 4)',
      choice_b: '2(x - 2)(x + 2)',
      choice_c: '(2x - 4)(x + 2)',
      choice_d: '2(x - 4)(x + 1)',
      explanation: 'Вынесем за скобки 2: 2(x² - 4) = 2(x - 2)(x + 2).',
    },
  },
  'ADV-M-016': {
    uz: {
      question_text: 'Yeching: x² - 6x + 9 = 0',
      choice_a: 'x = 3 faqat',
      choice_b: 'x = -3 faqat',
      choice_c: 'x = 3 va x = -3',
      choice_d: 'x = 9 faqat',
      explanation: '(x - 3)² = 0, demak x = 3 ikkilangan ildiz (yagona yechim).',
    },
    ru: {
      question_text: 'Решите: x² - 6x + 9 = 0',
      choice_a: 'x = 3 только',
      choice_b: 'x = -3 только',
      choice_c: 'x = 3 и x = -3',
      choice_d: 'x = 9 только',
      explanation: '(x - 3)² = 0, следовательно x = 3 — кратный корень (единственное решение).',
    },
  },
  'ADV-M-017': {
    uz: {
      question_text: 'To\'p h(t) = -16t² + 64t + 5 fut balandlikka otildi, bunda t sekundlarda. Maksimal balandlik nechaga teng?',
      choice_a: '64 fut',
      choice_b: '69 fut',
      choice_c: '80 fut',
      choice_d: '85 fut',
      explanation: 'Maksimum t = -64/(2(-16)) = 2 seconds. h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69 feet.',
    },
    ru: {
      question_text: 'Мяч брошен, и его высота h(t) = -16t² + 64t + 5 футов через t секунд. Чему равна максимальная высота?',
      choice_a: '64 футов',
      choice_b: '69 футов',
      choice_c: '80 футов',
      choice_d: '85 футов',
      explanation: 'Максимум при t = -64/(2(-16)) = 2 seconds. h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69 feet.',
    },
  },
  'ADV-M-018': {
    uz: {
      question_text: 'Quyidagi ifodalardan qaysi biri ... ga teng: x^(-2)?',
      choice_a: '-x²',
      choice_b: '1/x²',
      choice_c: '-2x',
      choice_d: '√x',
      explanation: 'Manfiy daraja teskari qiymatni bildiradi: x^(-2) = 1/x².',
    },
    ru: {
      question_text: 'Какое выражение равно x^(-2)?',
      choice_a: '-x²',
      choice_b: '1/x²',
      choice_c: '-2x',
      choice_d: '√x',
      explanation: 'Manfiy daraja teskari qiymatni bildiradi: x^(-2) = 1/x².',
    },
  },
  'ADV-M-019': {
    uz: {
      question_text: 'Yeching: √(2x + 1) = 5',
      choice_a: 'x = 2',
      choice_b: 'x = 8',
      choice_c: 'x = 12',
      choice_d: 'x = 13',
      explanation: 'Ikkala tomonni kvadratga ko\'taramiz: 2x + 1 = 25. Demak 2x = 24, x = 12.',
    },
    ru: {
      question_text: 'Решите: √(2x + 1) = 5',
      choice_a: 'x = 2',
      choice_b: 'x = 8',
      choice_c: 'x = 12',
      choice_d: 'x = 13',
      explanation: 'Возведём обе части в квадрат: 2x + 1 = 25. Значит 2x = 24, x = 12.',
    },
  },
  'ADV-M-020': {
    uz: {
      question_text: 'Agar y = x² - 1 and y = 3, nechaga teng barcha x qiymatlar yig\'indisi?',
      choice_a: '-4',
      choice_b: '0',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x² - 1 = 3 → x² = 4 → x = ±2. Sum = 2 + (-2) = 0.',
    },
    ru: {
      question_text: 'Если y = x² - 1 and y = 3, чему равно сумма всех значений x?',
      choice_a: '-4',
      choice_b: '0',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x² - 1 = 3 → x² = 4 → x = ±2. Sum = 2 + (-2) = 0.',
    },
  },
  'ADV-M-021': {
    uz: {
      question_text: 'Soddalashtiring: (2x²)³',
      choice_a: '6x⁶',
      choice_b: '8x⁵',
      choice_c: '8x⁶',
      choice_d: '2x⁶',
      explanation: '(2x²)³ = 2³ · (x²)³ = 8x⁶.',
    },
    ru: {
      question_text: 'Упростите: (2x²)³',
      choice_a: '6x⁶',
      choice_b: '8x⁵',
      choice_c: '8x⁶',
      choice_d: '2x⁶',
      explanation: '(2x²)³ = 2³ · (x²)³ = 8x⁶.',
    },
  },
  'ADV-M-022': {
    uz: {
      question_text: 'Nechta yechimi bor: x² + 6x + 9 = 0 bor?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Cheksiz ko\'p',
      explanation: 'Diskriminant = 36 - 36 = 0. Diskriminant = 0 bo\'lganda, aynan bitta yechim mavjud.',
    },
    ru: {
      question_text: 'Сколько решений имеет x² + 6x + 9 = 0 ?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Бесконечно много',
      explanation: 'Дискриминант = 36 - 36 = 0. Когда дискриминант = 0, существует ровно одно решение.',
    },
  },
  'ADV-M-023': {
    uz: {
      question_text: 'Funksiya f(x) = 3(2)^x. Nechaga teng f(3)?',
      choice_a: '12',
      choice_b: '18',
      choice_c: '24',
      choice_d: '48',
      explanation: 'f(3) = 3(2)³ = 3(8) = 24.',
    },
    ru: {
      question_text: 'Функция f(x) = 3(2)^x. Чему равно f(3)?',
      choice_a: '12',
      choice_b: '18',
      choice_c: '24',
      choice_d: '48',
      explanation: 'f(3) = 3(2)³ = 3(8) = 24.',
    },
  },
  'ADV-M-024': {
    uz: {
      question_text: 'y = x² va y = -x² + 8 grafiklar qaysi y qiymatida kesishadi?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Tenglashtiring: x² = -x² + 8 → 2x² = 8 → x² = 4 → x = ±2. Keyin y = (2)² = 4.',
    },
    ru: {
      question_text: 'Графики y = x² и y = -x² + 8 пересекаются при каком значении y?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Приравняем: x² = -x² + 8 → 2x² = 8 → x² = 4 → x = ±2. Затем y = (2)² = 4.',
    },
  },
  'ADV-M-025': {
    uz: {
      question_text: 'Ko\'paytuvchilarga ajrating: x² - 5x - 14',
      choice_a: '(x - 7)(x + 2)',
      choice_b: '(x + 7)(x - 2)',
      choice_c: '(x - 7)(x - 2)',
      choice_d: '(x + 7)(x + 2)',
      explanation: '-14 ning yig\'indisi -5 bo\'lgan ko\'paytuvchilari: -7 va 2. Demak (x - 7)(x + 2).',
    },
    ru: {
      question_text: 'Разложите на множители: x² - 5x - 14',
      choice_a: '(x - 7)(x + 2)',
      choice_b: '(x + 7)(x - 2)',
      choice_c: '(x - 7)(x - 2)',
      choice_d: '(x + 7)(x + 2)',
      explanation: 'Найдём множители числа -14, дающие в сумме -5: -7 и 2. Значит (x - 7)(x + 2).',
    },
  },
  'ADV-M-026': {
    uz: {
      question_text: 'Agar 2^x = 32, nechaga teng x?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '16',
      explanation: '32 = 2⁵, demak 2^x = 2⁵ x = 5 degani.',
    },
    ru: {
      question_text: 'Если 2^x = 32, чему равно x?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '16',
      explanation: '32 = 2⁵, demak 2^x = 2⁵ x = 5 degani.',
    },
  },
  'ADV-M-027': {
    uz: {
      question_text: 'f(x) = x² - 4x + 3 uchun x o\'qi bilan kesishish nuqtalarini toping.',
      choice_a: 'x = 1 va x = 3',
      choice_b: 'x = -1 va x = -3',
      choice_c: 'x = 1 va x = -3',
      choice_d: 'x = 2 faqat',
      explanation: 'Set f(x) = 0: x² - 4x + 3 = 0 → (x - 1)(x - 3) = 0. x = 1 and x = 3.',
    },
    ru: {
      question_text: 'Для f(x) = x² - 4x + 3 найдите точки пересечения с осью x.',
      choice_a: 'x = 1 и x = 3',
      choice_b: 'x = -1 и x = -3',
      choice_c: 'x = 1 и x = -3',
      choice_d: 'x = 2 только',
      explanation: 'Set f(x) = 0: x² - 4x + 3 = 0 → (x - 1)(x - 3) = 0. x = 1 and x = 3.',
    },
  },
  'ADV-M-028': {
    uz: {
      question_text: 'Soddalashtiring: (x + y)² - (x - y)²',
      choice_a: '2xy',
      choice_b: '4xy',
      choice_c: '2x² + 2y²',
      choice_d: '0',
      explanation: '(x+y)² = x² + 2xy + y². (x-y)² = x² - 2xy + y². Difference = 4xy.',
    },
    ru: {
      question_text: 'Упростите: (x + y)² - (x - y)²',
      choice_a: '2xy',
      choice_b: '4xy',
      choice_c: '2x² + 2y²',
      choice_d: '0',
      explanation: '(x+y)² = x² + 2xy + y². (x-y)² = x² - 2xy + y². Difference = 4xy.',
    },
  },
  'ADV-M-029': {
    uz: {
      question_text: 'Agar y = x² + 2 and y = 6, nechaga teng x ning musbat qiymati?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'x² + 2 = 6 → x² = 4 → x = ±2. positive value is 2.',
    },
    ru: {
      question_text: 'Если y = x² + 2 and y = 6, чему равно положительное значение x?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'x² + 2 = 6 → x² = 4 → x = ±2. positive value is 2.',
    },
  },
  'ADV-M-030': {
    uz: {
      question_text: 'Yeching: x² - 2x - 15 = 0',
      choice_a: 'x = 3 va x = -5',
      choice_b: 'x = -3 va x = 5',
      choice_c: 'x = 3 va x = 5',
      choice_d: 'x = -3 va x = -5',
      explanation: 'Ko\'paytuvchilarga ajratamiz: (x + 3)(x - 5) = 0. Demak x = -3 or x = 5.',
    },
    ru: {
      question_text: 'Решите: x² - 2x - 15 = 0',
      choice_a: 'x = 3 и x = -5',
      choice_b: 'x = -3 и x = 5',
      choice_c: 'x = 3 и x = 5',
      choice_d: 'x = -3 и x = -5',
      explanation: 'Разложим: (x + 3)(x - 5) = 0. Значит x = -3 or x = 5.',
    },
  },
  'ADV-H-001': {
    uz: {
      question_text: 'Agar x³ - 8 = (x - 2)(x² + ax + 4), ... ning qiymati nechaga teng a?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x³ - 8 kublar ayirmasi: a³ - b³ = (a - b)(a² + ab + b²). Bu yerda: x³ - 2³ = (x - 2)(x² + 2x + 4). Demak a = 2.',
    },
    ru: {
      question_text: 'Если x³ - 8 = (x - 2)(x² + ax + 4), каково значение a?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x³ - 8 is a разность кубов: a³ - b³ = (a - b)(a² + ab + b²). Here: x³ - 2³ = (x - 2)(x² + 2x + 4). Значит a = 2.',
    },
  },
  'ADV-H-002': {
    uz: {
      question_text: 'Agar x² - 6x + k = 0 aniq bitta yechimga ega, ... ning qiymati nechaga teng k?',
      choice_a: '6',
      choice_b: '9',
      choice_c: '12',
      choice_d: '36',
      explanation: 'Aynan bitta yechim uchun diskriminant = 0. b² - 4ac = 0 → 36 - 4(1)(k) = 0 → k = 9.',
    },
    ru: {
      question_text: 'Если x² - 6x + k = 0 имеет ровно одно решение, каково значение k?',
      choice_a: '6',
      choice_b: '9',
      choice_c: '12',
      choice_d: '36',
      explanation: 'Для ровно одного решения дискриминант = 0. b² - 4ac = 0 → 36 - 4(1)(k) = 0 → k = 9.',
    },
  },
  'ADV-H-003': {
    uz: {
      question_text: 'Funksiya h(x) = -2(x + 1)² + 8 qaysi nuqtada maksimumga ega?',
      choice_a: '(-1, 8)',
      choice_b: '(1, 8)',
      choice_c: '(-1, -8)',
      choice_d: '(8, -1)',
      explanation: 'Funksiya cho\'qqi shaklida h(x) = a(x - h)² + k. Bu yerda cho\'qqi (-1, 8). Chunki a = -2 < 0, bu maksimum.',
    },
    ru: {
      question_text: 'Функция h(x) = -2(x + 1)² + 8 в какой точке имеет максимум?',
      choice_a: '(-1, 8)',
      choice_b: '(1, 8)',
      choice_c: '(-1, -8)',
      choice_d: '(8, -1)',
      explanation: 'Функция в форме с вершиной h(x) = a(x - h)² + k. Здесь вершина (-1, 8). Так как a = -2 < 0, это максимум.',
    },
  },
  'ADV-H-004': {
    uz: {
      question_text: '... tenglamaning yechimlar ko\'paytmasi nechaga teng: 2x² - 7x + 3 = 0?',
      choice_a: '1.5',
      choice_b: '3',
      choice_c: '3.5',
      choice_d: '7',
      explanation: 'Viyet formulasiga ko\'ra, ildizlar ko\'paytmasi = c/a = 3/2 = 1.5. Or solve: (2x - 1)(x - 3) = 0 → x = 1/2, x = 3. Product = (1/2)(3) = 1.5.',
    },
    ru: {
      question_text: 'Каково произведение решений уравнения 2x² - 7x + 3 = 0?',
      choice_a: '1.5',
      choice_b: '3',
      choice_c: '3.5',
      choice_d: '7',
      explanation: 'По формулам Виета, произведение корней = c/a = 3/2 = 1.5. Or solve: (2x - 1)(x - 3) = 0 → x = 1/2, x = 3. Product = (1/2)(3) = 1.5.',
    },
  },
  'ADV-H-005': {
    uz: {
      question_text: 'Radioaktiv modda A(t) = 100(0.5)^(t/4) qonuniyatiga ko\'ra parchalanadi, bunda t yillarda. Miqdor 12.5 gramga necha yildan keyin teng bo\'ladi?',
      choice_a: '8',
      choice_b: '10',
      choice_c: '12',
      choice_d: '16',
      explanation: '12.5 = 100(0.5)^(t/4) → 0.125 = (0.5)^(t/4) → (0.5)³ = (0.5)^(t/4) → 3 = t/4 → t = 12 years.',
    },
    ru: {
      question_text: 'Радиоактивное вещество распадается по закону A(t) = 100(0.5)^(t/4), где t — в годах. Через сколько лет количество станет равным 12.5 граммам?',
      choice_a: '8',
      choice_b: '10',
      choice_c: '12',
      choice_d: '16',
      explanation: '12.5 = 100(0.5)^(t/4) → 0.125 = (0.5)^(t/4) → (0.5)³ = (0.5)^(t/4) → 3 = t/4 → t = 12 years.',
    },
  },
  'ADV-H-006': {
    uz: {
      question_text: 'y = x² va y = 2x + 3 grafiklar ikkita nuqtada kesishadi. Bu nuqtalarning y-koordinatalarining yig\'indisi nechaga teng?',
      choice_a: '6',
      choice_b: '10',
      choice_c: '12',
      choice_d: '18',
      explanation: 'Tenglashtiring: x² = 2x + 3 → x² - 2x - 3 = 0 → (x - 3)(x + 1) = 0 → x = 3 yoki x = -1. y-qiymatlari: y = 2(3) + 3 = 9 va y = 2(-1) + 3 = 1. Yig\'indi = 9 + 1 = 10.',
    },
    ru: {
      question_text: 'Графики y = x² и y = 2x + 3 пересекаются в двух точках. Чему равна сумма y-координат этих точек?',
      choice_a: '6',
      choice_b: '10',
      choice_c: '12',
      choice_d: '18',
      explanation: 'Приравняем: x² = 2x + 3 → x² - 2x - 3 = 0 → (x - 3)(x + 1) = 0 → x = 3 или x = -1. y-значения: y = 2(3) + 3 = 9 и y = 2(-1) + 3 = 1. Сумма = 9 + 1 = 10.',
    },
  },
  'ADV-H-007': {
    uz: {
      question_text: 'Soddalashtiring: (x² - 9)/(x² - x - 6)',
      choice_a: '(x + 3)/(x + 2)',
      choice_b: '(x - 3)/(x - 2)',
      choice_c: '(x + 3)/(x - 2)',
      choice_d: '(x - 3)/(x + 2)',
      explanation: 'Ko\'paytuvchilarga ajratamiz: numerator = (x + 3)(x - 3), denominator = (x - 3)(x + 2). Cancel (x - 3): (x + 3)/(x + 2).',
    },
    ru: {
      question_text: 'Упростите: (x² - 9)/(x² - x - 6)',
      choice_a: '(x + 3)/(x + 2)',
      choice_b: '(x - 3)/(x - 2)',
      choice_c: '(x + 3)/(x - 2)',
      choice_d: '(x - 3)/(x + 2)',
      explanation: 'Разложим: numerator = (x + 3)(x - 3), denominator = (x - 3)(x + 2). Cancel (x - 3): (x + 3)/(x + 2).',
    },
  },
  'ADV-H-008': {
    uz: {
      question_text: 'Agar |3x - 6| = 12, nechaga teng the sum of all possible values of x?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Case 1: 3x - 6 = 12 → x = 6. Case 2: 3x - 6 = -12 → 3x = -6 → x = -2. Sum = 6 + (-2) = 4.',
    },
    ru: {
      question_text: 'Если |3x - 6| = 12, чему равно the sum of all possible values of x?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Case 1: 3x - 6 = 12 → x = 6. Case 2: 3x - 6 = -12 → 3x = -6 → x = -2. Sum = 6 + (-2) = 4.',
    },
  },
  'ADV-H-009': {
    uz: {
      question_text: 'f(x) = x³ - 3x² + 2x uchun f(2) ni toping.',
      choice_a: '0',
      choice_b: '2',
      choice_c: '4',
      choice_d: '8',
      explanation: 'f(2) = (2)³ - 3(2)² + 2(2) = 8 - 12 + 4 = 0.',
    },
    ru: {
      question_text: 'f(x) = x³ - 3x² + 2x uchun f(2) ni toping.',
      choice_a: '0',
      choice_b: '2',
      choice_c: '4',
      choice_d: '8',
      explanation: 'f(2) = (2)³ - 3(2)² + 2(2) = 8 - 12 + 4 = 0.',
    },
  },
  'ADV-H-010': {
    uz: {
      question_text: 'y = x² - 4x + 3 va y = -x + 5 sistemasining nechta yechimi bor?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Cheksiz ko\'p',
      explanation: 'Tenglashtiring: x² - 4x + 3 = -x + 5 → x² - 3x - 2 = 0. Diskriminant = 9 + 8 = 17 > 0, demak 2 ta yechim bor.',
    },
    ru: {
      question_text: 'Сколько решений имеет система y = x² - 4x + 3 и y = -x + 5?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: 'Бесконечно много',
      explanation: 'Приравняем: x² - 4x + 3 = -x + 5 → x² - 3x - 2 = 0. Дискриминант = 9 + 8 = 17 > 0, значит 2 решения.',
    },
  },
  'ADV-H-011': {
    uz: {
      question_text: 'Agar x + 1/x = 5, nechaga teng x² + 1/x²?',
      choice_a: '21',
      choice_b: '23',
      choice_c: '25',
      choice_d: '27',
      explanation: 'Ikkala tomonni kvadratga ko\'taramiz: (x + 1/x)² = 25. x² + 2 + 1/x² = 25. Demak x² + 1/x² = 23.',
    },
    ru: {
      question_text: 'Если x + 1/x = 5, чему равно x² + 1/x²?',
      choice_a: '21',
      choice_b: '23',
      choice_c: '25',
      choice_d: '27',
      explanation: 'Возведём обе части в квадрат: (x + 1/x)² = 25. x² + 2 + 1/x² = 25. Значит x² + 1/x² = 23.',
    },
  },
  'ADV-H-012': {
    uz: {
      question_text: 'Yeching: x⁴ - 5x² + 4 = 0. Nechaga teng the product of all solutions?',
      choice_a: '-4',
      choice_b: '2',
      choice_c: '4',
      choice_d: '8',
      explanation: 'u = x² deb olamiz. Keyin u² - 5u + 4 = 0 → (u-1)(u-4) = 0 → u = 1 yoki u = 4. Demak x² = 1 (x = ±1) yoki x² = 4 (x = ±2). Product = (1)(-1)(2)(-2) = 4.',
    },
    ru: {
      question_text: 'Решите: x⁴ - 5x² + 4 = 0. Чему равно the product of all solutions?',
      choice_a: '-4',
      choice_b: '2',
      choice_c: '4',
      choice_d: '8',
      explanation: 'Пусть u = x². Тогда u² - 5u + 4 = 0 → (u-1)(u-4) = 0 → u = 1 или u = 4. Значит x² = 1 (x = ±1) или x² = 4 (x = ±2). Product = (1)(-1)(2)(-2) = 4.',
    },
  },
  'ADV-H-013': {
    uz: {
      question_text: 'Funksiya f(x) = a(x - 2)(x + 4) ning y bilan kesishish nuqtasi -24. ... ning qiymati nechaga teng a?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '-6',
      choice_d: '6',
      explanation: 'y-intercept at x = 0: f(0) = a(-2)(4) = -8a = -24. Demak a = 3.',
    },
    ru: {
      question_text: 'Функция f(x) = a(x - 2)(x + 4) пересекает ось y в точке -24. Каково значение a?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '-6',
      choice_d: '6',
      explanation: 'y-intercept at x = 0: f(0) = a(-2)(4) = -8a = -24. Значит a = 3.',
    },
  },
  'ADV-H-014': {
    uz: {
      question_text: 'Parabola y = x² - 2x + k nuqtadan o\'tadi (3, 2). Nechaga teng k?',
      choice_a: '-1',
      choice_b: '0',
      choice_c: '1',
      choice_d: '2',
      explanation: 'Substitute (3, 2): 2 = 9 - 6 + k = 3 + k. Demak k = -1.',
    },
    ru: {
      question_text: 'Парабола y = x² - 2x + k проходит через точку (3, 2). Чему равно k?',
      choice_a: '-1',
      choice_b: '0',
      choice_c: '1',
      choice_d: '2',
      explanation: 'Substitute (3, 2): 2 = 9 - 6 + k = 3 + k. Значит k = -1.',
    },
  },
  'ADV-H-015': {
    uz: {
      question_text: 'Soddalashtiring: (x³ + 8)/(x + 2)',
      choice_a: 'x² - 2x + 4',
      choice_b: 'x² + 2x + 4',
      choice_c: 'x² - 4',
      choice_d: 'x² + 4',
      explanation: 'Sum of cubes: x³ + 8 = (x + 2)(x² - 2x + 4). Divide by (x + 2): x² - 2x + 4.',
    },
    ru: {
      question_text: 'Упростите: (x³ + 8)/(x + 2)',
      choice_a: 'x² - 2x + 4',
      choice_b: 'x² + 2x + 4',
      choice_c: 'x² - 4',
      choice_d: 'x² + 4',
      explanation: 'Sum of cubes: x³ + 8 = (x + 2)(x² - 2x + 4). Divide by (x + 2): x² - 2x + 4.',
    },
  },
  'ADV-H-016': {
    uz: {
      question_text: 'Agar 3^(2x) = 81, nechaga teng x?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: '81 = 3⁴. Demak 3^(2x) = 3⁴ → 2x = 4 → x = 2.',
    },
    ru: {
      question_text: 'Если 3^(2x) = 81, чему равно x?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: '81 = 3⁴. Значит 3^(2x) = 3⁴ → 2x = 4 → x = 2.',
    },
  },
  'ADV-H-017': {
    uz: {
      question_text: 'Bakteriya populyatsiyasi har 2 soatda uch baravar ortadi. Agar dastlabki miqdor 500 ta bo\'lsa, qaysi funksiya t soatdan keyin P populyatsiyani modellashtiradi?',
      choice_a: 'P(t) = 500(3)^t',
      choice_b: 'P(t) = 500(3)^(t/2)',
      choice_c: 'P(t) = 500(3)^(2t)',
      choice_d: 'P(t) = 1500t',
      explanation: 'Har 2 soatda uch baravar ortadi: P(t) = 500(3)^(t/2). t = 2 da: P = 500(3)¹ = 1500 ✓',
    },
    ru: {
      question_text: 'Популяция бактерий утраивается каждые 2 часа. Если начальная численность 500 бактерий, какая функция моделирует популяцию P через t часов?',
      choice_a: 'P(t) = 500(3)^t',
      choice_b: 'P(t) = 500(3)^(t/2)',
      choice_c: 'P(t) = 500(3)^(2t)',
      choice_d: 'P(t) = 1500t',
      explanation: 'Утроение каждые 2 часа: P(t) = 500(3)^(t/2). При t = 2: P = 500(3)¹ = 1500 ✓',
    },
  },
  'ADV-H-018': {
    uz: {
      question_text: 'To\'g\'ri chiziq y = mx y = x² - 2x + 2 parabolasiga urinma bo\'ladi. Nechaga teng m?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '1',
      choice_d: '2',
      explanation: 'Urinma bitta yechim degani: x² - 2x + 2 = mx → x² - (2+m)x + 2 = 0. Diskriminant = 0: (2+m)² - 8 = 0 → (2+m)² = 8 → 2+m = ±2√2. Boshlang\'ich nuqtadan urinma uchun m = -2 - 2√2 yoki m = -2 + 2√2 ≈ 0.83. Chunki -2 javoblar orasida, javob A.',
    },
    ru: {
      question_text: 'Прямая y = mx является касательной к параболе y = x² - 2x + 2. Чему равно m?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '1',
      choice_d: '2',
      explanation: 'Касательная означает одно решение: x² - 2x + 2 = mx → x² - (2+m)x + 2 = 0. Дискриминант = 0: (2+m)² - 8 = 0 → (2+m)² = 8 → 2+m = ±2√2. Для касательной из начала координат m = -2 - 2√2 или m = -2 + 2√2 ≈ 0.83. Так как -2 присутствует среди ответов, ответ A.',
    },
  },
  'ADV-H-019': {
    uz: {
      question_text: 'Agar a² + b² = 10 and ab = 3, nechaga teng (a + b)²?',
      choice_a: '13',
      choice_b: '16',
      choice_c: '19',
      choice_d: '22',
      explanation: '(a + b)² = a² + 2ab + b² = (a² + b²) + 2ab = 10 + 2(3) = 16.',
    },
    ru: {
      question_text: 'Если a² + b² = 10 and ab = 3, чему равно (a + b)²?',
      choice_a: '13',
      choice_b: '16',
      choice_c: '19',
      choice_d: '22',
      explanation: '(a + b)² = a² + 2ab + b² = (a² + b²) + 2ab = 10 + 2(3) = 16.',
    },
  },
  'ADV-H-020': {
    uz: {
      question_text: 'Yeching: √(x + 7) = x - 5. Nechaga teng x?',
      choice_a: '2',
      choice_b: '9',
      choice_c: '2 va 9',
      choice_d: 'Yechim yo\'q',
      explanation: 'Square: x + 7 = x² - 10x + 25 → x² - 11x + 18 = 0 → (x-2)(x-9) = 0. Check x = 2: √9 = 3, but 2-5 = -3 ✗. Check x = 9: √16 = 4 and 9-5 = 4 ✓. Only x = 9.',
    },
    ru: {
      question_text: 'Решите: √(x + 7) = x - 5. Чему равно x?',
      choice_a: '2',
      choice_b: '9',
      choice_c: '2 и 9',
      choice_d: 'Нет решения',
      explanation: 'Square: x + 7 = x² - 10x + 25 → x² - 11x + 18 = 0 → (x-2)(x-9) = 0. Check x = 2: √9 = 3, but 2-5 = -3 ✗. Check x = 9: √16 = 4 and 9-5 = 4 ✓. Only x = 9.',
    },
  },
  'ADV-H-021': {
    uz: {
      question_text: 'Funksiya f(x) = x² + bx + c ning ildizlari x = -3 va x = 5 da. Nechaga teng b + c?',
      choice_a: '-17',
      choice_b: '-13',
      choice_c: '13',
      choice_d: '17',
      explanation: 'f(x) = (x + 3)(x - 5) = x² - 2x - 15. Demak b = -2, c = -15. b + c = -17.',
    },
    ru: {
      question_text: 'Функция f(x) = x² + bx + c имеет корни x = -3 и x = 5. Чему равно b + c?',
      choice_a: '-17',
      choice_b: '-13',
      choice_c: '13',
      choice_d: '17',
      explanation: 'f(x) = (x + 3)(x - 5) = x² - 2x - 15. Значит b = -2, c = -15. b + c = -17.',
    },
  },
  'ADV-H-022': {
    uz: {
      question_text: 'k ning qaysi qiymatida y = x² va y = kx - 4 egri chiziqlari aynan bitta nuqtada kesishadi?',
      choice_a: '-4',
      choice_b: '0',
      choice_c: '4',
      choice_d: 'Ham A, ham C',
      explanation: 'x² = kx - 4 → x² - kx + 4 = 0. Bitta yechim diskriminant = 0 bo\'lganda: k² - 16 = 0 → k = ±4.',
    },
    ru: {
      question_text: 'При каком значении k кривые y = x² и y = kx - 4 пересекаются ровно в одной точке?',
      choice_a: '-4',
      choice_b: '0',
      choice_c: '4',
      choice_d: 'Оба: A и C',
      explanation: 'x² = kx - 4 → x² - kx + 4 = 0. Одно решение когда дискриминант = 0: k² - 16 = 0 → k = ±4.',
    },
  },
  'ADV-H-023': {
    uz: {
      question_text: 'Soddalashtiring: (1/(x-1) - 1/(x+1))',
      choice_a: '2/(x² - 1)',
      choice_b: '-2/(x² - 1)',
      choice_c: '2x/(x² - 1)',
      choice_d: '0',
      explanation: 'Common denominator: [(x+1) - (x-1)]/[(x-1)(x+1)] = 2/(x² - 1).',
    },
    ru: {
      question_text: 'Упростите: (1/(x-1) - 1/(x+1))',
      choice_a: '2/(x² - 1)',
      choice_b: '-2/(x² - 1)',
      choice_c: '2x/(x² - 1)',
      choice_d: '0',
      explanation: 'Common denominator: [(x+1) - (x-1)]/[(x-1)(x+1)] = 2/(x² - 1).',
    },
  },
  'ADV-H-024': {
    uz: {
      question_text: 'Agar 4^x = 8, nechaga teng x?',
      choice_a: '1.5',
      choice_b: '2',
      choice_c: '2.5',
      choice_d: '3',
      explanation: '4^x = 8 → (2²)^x = 2³ → 2^(2x) = 2³ → 2x = 3 → x = 1.5.',
    },
    ru: {
      question_text: 'Если 4^x = 8, чему равно x?',
      choice_a: '1.5',
      choice_b: '2',
      choice_c: '2.5',
      choice_d: '3',
      explanation: '4^x = 8 → (2²)^x = 2³ → 2^(2x) = 2³ → 2x = 3 → x = 1.5.',
    },
  },
  'ADV-H-025': {
    uz: {
      question_text: 'Qiymati investitsiya o\'sadi according to V(t) = 1000(1.05)^t. Necha yildan keyin will it be worth $1,500? (Use log 1.5 ≈ 0.176, log 1.05 ≈ 0.021)',
      choice_a: 'Taxminan 8 yil',
      choice_b: 'Taxminan 10 yil',
      choice_c: 'Taxminan 12 yil',
      choice_d: 'Taxminan 15 yil',
      explanation: '1500 = 1000(1.05)^t → 1.5 = (1.05)^t → t = log(1.5)/log(1.05) ≈ 0.176/0.021 ≈ 8.4 years.',
    },
    ru: {
      question_text: 'Стоимость инвестиция растёт according to V(t) = 1000(1.05)^t. Через сколько лет will it be worth $1,500? (Use log 1.5 ≈ 0.176, log 1.05 ≈ 0.021)',
      choice_a: 'Около 8 лет',
      choice_b: 'Около 10 лет',
      choice_c: 'Около 12 лет',
      choice_d: 'Около 15 лет',
      explanation: '1500 = 1000(1.05)^t → 1.5 = (1.05)^t → t = log(1.5)/log(1.05) ≈ 0.176/0.021 ≈ 8.4 years.',
    },
  },
  'ADV-H-026': {
    uz: {
      question_text: 'y = x² va y = x + 6 grafiklarining kesishish nuqtalari orasidagi masofa:',
      choice_a: '5',
      choice_b: '5√2',
      choice_c: '6',
      choice_d: '6√2',
      explanation: 'x² = x + 6 → x² - x - 6 = 0 → (x-3)(x+2) = 0. Nuqtalar: (3, 9) va (-2, 4). Masofa = √[(3-(-2))² + (9-4)²] = √(25 + 25) = √50 = 5√2.',
    },
    ru: {
      question_text: 'Расстояние между точками пересечения y = x² и y = x + 6 равно:',
      choice_a: '5',
      choice_b: '5√2',
      choice_c: '6',
      choice_d: '6√2',
      explanation: 'x² = x + 6 → x² - x - 6 = 0 → (x-3)(x+2) = 0. Точки: (3, 9) и (-2, 4). Расстояние = √[(3-(-2))² + (9-4)²] = √(25 + 25) = √50 = 5√2.',
    },
  },
  'ADV-H-027': {
    uz: {
      question_text: 'To\'liq ko\'paytuvchilarga ajrating: x⁴ - 16',
      choice_a: '(x² - 4)(x² + 4)',
      choice_b: '(x - 2)(x + 2)(x² + 4)',
      choice_c: '(x² - 4)²',
      choice_d: '(x - 2)²(x + 2)²',
      explanation: 'x⁴ - 16 = (x² - 4)(x² + 4) = (x-2)(x+2)(x² + 4). factor (x² + 4) cannot be factored over reals.',
    },
    ru: {
      question_text: 'Разложите на множители полностью: x⁴ - 16',
      choice_a: '(x² - 4)(x² + 4)',
      choice_b: '(x - 2)(x + 2)(x² + 4)',
      choice_c: '(x² - 4)²',
      choice_d: '(x - 2)²(x + 2)²',
      explanation: 'x⁴ - 16 = (x² - 4)(x² + 4) = (x-2)(x+2)(x² + 4). factor (x² + 4) cannot be factored over reals.',
    },
  },
  'ADV-H-028': {
    uz: {
      question_text: 'Yeching: x²/³ = 4. Nechaga teng x?',
      choice_a: '4 va -4',
      choice_b: '8 va -8',
      choice_c: '16 va -16',
      choice_d: '64 va -64',
      explanation: 'Ikkala tomonni 3/2 darajaga ko\'taring: x = 4^(3/2) = (√4)³ = 8. Chunki x²/³ = (x^(1/3))² x^(1/3) bo\'yicha juft, ±8 ham to\'g\'ri yechimlar.',
    },
    ru: {
      question_text: 'Решите: x²/³ = 4. Чему равно x?',
      choice_a: '4 и -4',
      choice_b: '8 и -8',
      choice_c: '16 и -16',
      choice_d: '64 и -64',
      explanation: 'Возведём обе части в степень 3/2: x = 4^(3/2) = (√4)³ = 8. Так как x²/³ = (x^(1/3))² является чётной по x^(1/3), оба ±8 являются решениями.',
    },
  },
  'ADV-H-029': {
    uz: {
      question_text: 'Agar f(x) = 2^x va g(x) = x² bo\'lsa, 1 dan 10 gacha bo\'lgan x ning nechta butun son qiymatida f(x) > g(x)?',
      choice_a: '6',
      choice_b: '7',
      choice_c: '8',
      choice_d: '9',
      explanation: 'Check each: x=1: 2>1✓, x=2: 4=4✗, x=3: 8>9✗, x=4: 16>16✗, x=5: 32>25✓, x=6: 64>36✓, x=7: 128>49✓, x=8: 256>64✓, x=9: 512>81✓, x=10: 1024>100✓. Count: 8 values.',
    },
    ru: {
      question_text: 'Если f(x) = 2^x и g(x) = x², для скольких целых значений x от 1 до 10 выполняется f(x) > g(x)?',
      choice_a: '6',
      choice_b: '7',
      choice_c: '8',
      choice_d: '9',
      explanation: 'Check each: x=1: 2>1✓, x=2: 4=4✗, x=3: 8>9✗, x=4: 16>16✗, x=5: 32>25✓, x=6: 64>36✓, x=7: 128>49✓, x=8: 256>64✓, x=9: 512>81✓, x=10: 1024>100✓. Count: 8 values.',
    },
  },
  'ADV-H-030': {
    uz: {
      question_text: 'Agar xy = 12 and x + y = 7, nechaga teng x² + y²?',
      choice_a: '25',
      choice_b: '37',
      choice_c: '49',
      choice_d: '61',
      explanation: '(x + y)² = x² + 2xy + y² = 49. Demak x² + y² = 49 - 2(12) = 49 - 24 = 25.',
    },
    ru: {
      question_text: 'Если xy = 12 and x + y = 7, чему равно x² + y²?',
      choice_a: '25',
      choice_b: '37',
      choice_c: '49',
      choice_d: '61',
      explanation: '(x + y)² = x² + 2xy + y² = 49. Значит x² + y² = 49 - 2(12) = 49 - 24 = 25.',
    },
  },
  'ADV-M-031': {
    uz: {
      question_text: 'To\'liq ko\'paytuvchilarga ajrating: x³ - 4x',
      choice_a: 'x(x² - 4)',
      choice_b: 'x(x - 2)(x + 2)',
      choice_c: '(x - 2)(x² + 2x)',
      choice_d: 'x²(x - 4)',
      explanation: 'x³ - 4x = x(x² - 4) = x(x - 2)(x + 2), using kvadratlar ayirmasi.',
    },
    ru: {
      question_text: 'Разложите на множители полностью: x³ - 4x',
      choice_a: 'x(x² - 4)',
      choice_b: 'x(x - 2)(x + 2)',
      choice_c: '(x - 2)(x² + 2x)',
      choice_d: 'x²(x - 4)',
      explanation: 'x³ - 4x = x(x² - 4) = x(x - 2)(x + 2), using разность квадратов.',
    },
  },
  'ADV-M-032': {
    uz: {
      question_text: 'Yoying va soddalashtiring: (2x + 1)(x² - x + 3)',
      choice_a: '2x³ - x² + 5x + 3',
      choice_b: '2x³ - x² + 7x + 3',
      choice_c: '2x³ + x² + 5x + 3',
      choice_d: '2x³ - 3x² + 7x + 3',
      explanation: '2x(x² - x + 3) + 1(x² - x + 3) = 2x³ - 2x² + 6x + x² - x + 3 = 2x³ - x² + 5x + 3.',
    },
    ru: {
      question_text: 'Раскройте и упростите: (2x + 1)(x² - x + 3)',
      choice_a: '2x³ - x² + 5x + 3',
      choice_b: '2x³ - x² + 7x + 3',
      choice_c: '2x³ + x² + 5x + 3',
      choice_d: '2x³ - 3x² + 7x + 3',
      explanation: '2x(x² - x + 3) + 1(x² - x + 3) = 2x³ - 2x² + 6x + x² - x + 3 = 2x³ - x² + 5x + 3.',
    },
  },
  'ADV-M-033': {
    uz: {
      question_text: 'Solve using the quadratic formula: x² - 6x + 8 = 0',
      choice_a: 'x = 2 va x = 4',
      choice_b: 'x = -2 va x = -4',
      choice_c: 'x = 3 ± √17',
      choice_d: 'x = 6 va x = 8',
      explanation: 'Ko\'paytuvchilarga ajratamiz: (x - 2)(x - 4) = 0. Or use quadratic formula: x = (6 ± √(36-32))/2 = (6 ± 2)/2, giving x = 4 or x = 2.',
    },
    ru: {
      question_text: 'Solve using the quadratic formula: x² - 6x + 8 = 0',
      choice_a: 'x = 2 и x = 4',
      choice_b: 'x = -2 и x = -4',
      choice_c: 'x = 3 ± √17',
      choice_d: 'x = 6 и x = 8',
      explanation: 'Разложим: (x - 2)(x - 4) = 0. Or use quadratic formula: x = (6 ± √(36-32))/2 = (6 ± 2)/2, giving x = 4 or x = 2.',
    },
  },
  'ADV-M-034': {
    uz: {
      question_text: '... tenglamaning yechimlar yig\'indisi nechaga teng: x² - 7x + 10 = 0?',
      choice_a: '5',
      choice_b: '7',
      choice_c: '10',
      choice_d: '12',
      explanation: 'Viyet formulasiga ko\'ra, ildizlar yig\'indisi = -(-7)/1 = 7. Yoki ko\'paytuvchilarga ajrating: (x-2)(x-5) = 0, ildizlar 2 va 5, yig\'indi = 7.',
    },
    ru: {
      question_text: 'Какова сумма решений уравнения x² - 7x + 10 = 0?',
      choice_a: '5',
      choice_b: '7',
      choice_c: '10',
      choice_d: '12',
      explanation: 'По формулам Виета, сумма корней = -(-7)/1 = 7. Или разложим: (x-2)(x-5) = 0, корни 2 и 5, сумма = 7.',
    },
  },
  'ADV-M-035': {
    uz: {
      question_text: 'Funksiya f(x) = (x - 3)² + 2 cho\'qqi nuqtasi:',
      choice_a: '(3, 2)',
      choice_b: '(-3, 2)',
      choice_c: '(3, -2)',
      choice_d: '(2, 3)',
      explanation: 'Cho\'qqi shakli f(x) = (x - h)² + k, bunda cho\'qqi (h, k). Bu yerda h = 3, k = 2.',
    },
    ru: {
      question_text: 'Функция f(x) = (x - 3)² + 2 имеет вершину в:',
      choice_a: '(3, 2)',
      choice_b: '(-3, 2)',
      choice_c: '(3, -2)',
      choice_d: '(2, 3)',
      explanation: 'Форма с вершиной: f(x) = (x - h)² + k, где вершина (h, k). Здесь h = 3, k = 2.',
    },
  },
  'ADV-M-036': {
    uz: {
      question_text: 'Agar f(x) = 2x² - 8 bo\'lsa, x o\'qi bilan kesishish nuqtalari qaysilar?',
      choice_a: 'x = 2 va x = -2',
      choice_b: 'x = 4 va x = -4',
      choice_c: 'x = √2 va x = -√2',
      choice_d: 'x = 2√2 va x = -2√2',
      explanation: 'Set f(x) = 0: 2x² - 8 = 0, 2x² = 8, x² = 4, x = ±2.',
    },
    ru: {
      question_text: 'Если f(x) = 2x² - 8, what are точки пересечения с осью x?',
      choice_a: 'x = 2 и x = -2',
      choice_b: 'x = 4 и x = -4',
      choice_c: 'x = √2 и x = -√2',
      choice_d: 'x = 2√2 и x = -2√2',
      explanation: 'Set f(x) = 0: 2x² - 8 = 0, 2x² = 8, x² = 4, x = ±2.',
    },
  },
  'ADV-M-037': {
    uz: {
      question_text: 'Agar y = x² va y = 2x + 3 bo\'lsa, kesishish nuqtalarining x qiymatlari qanday?',
      choice_a: 'x = -1 va x = 3',
      choice_b: 'x = 1 va x = -3',
      choice_c: 'x = 1 va x = 3',
      choice_d: 'x = -1 va x = -3',
      explanation: 'x² = 2x + 3, demak x² - 2x - 3 = 0. Ko\'paytuvchilarga ajratamiz: (x - 3)(x + 1) = 0, natijada x = 3 yoki x = -1.',
    },
    ru: {
      question_text: 'Если y = x² и y = 2x + 3, каковы значения x в точках пересечения?',
      choice_a: 'x = -1 и x = 3',
      choice_b: 'x = 1 и x = -3',
      choice_c: 'x = 1 и x = 3',
      choice_d: 'x = -1 и x = -3',
      explanation: 'x² = 2x + 3, значит x² - 2x - 3 = 0. Разложим: (x - 3)(x + 1) = 0, получаем x = 3 или x = -1.',
    },
  },
  'ADV-M-038': {
    uz: {
      question_text: 'Soddalashtiring: (x² - 9)/(x - 3)',
      choice_a: 'x + 3',
      choice_b: 'x - 3',
      choice_c: 'x² - 3',
      choice_d: 'x - 9',
      explanation: '(x² - 9)/(x - 3) = (x - 3)(x + 3)/(x - 3) = x + 3 (qachonki x ≠ 3).',
    },
    ru: {
      question_text: 'Упростите: (x² - 9)/(x - 3)',
      choice_a: 'x + 3',
      choice_b: 'x - 3',
      choice_c: 'x² - 3',
      choice_d: 'x - 9',
      explanation: '(x² - 9)/(x - 3) = (x - 3)(x + 3)/(x - 3) = x + 3 (когда x ≠ 3).',
    },
  },
  'ADV-M-039': {
    uz: {
      question_text: '... tenglamaning yechimlar ko\'paytmasi nechaga teng: x² + 2x - 15 = 0?',
      choice_a: '-15',
      choice_b: '-2',
      choice_c: '2',
      choice_d: '15',
      explanation: 'Viyet formulasiga ko\'ra, ildizlar ko\'paytmasi = c/a = -15/1 = -15.',
    },
    ru: {
      question_text: 'Каково произведение решений уравнения x² + 2x - 15 = 0?',
      choice_a: '-15',
      choice_b: '-2',
      choice_c: '2',
      choice_d: '15',
      explanation: 'По формулам Виета, произведение корней = c/a = -15/1 = -15.',
    },
  },
  'ADV-M-040': {
    uz: {
      question_text: 'P populyatsiya har 3 yilda ikkilanadi va 100 dan boshlanadi. Qaysi funksiya t yildan keyin P ni ifodalaydi?',
      choice_a: 'P = 100(2)^t',
      choice_b: 'P = 100(2)^(t/3)',
      choice_c: 'P = 100(3)^(t/2)',
      choice_d: 'P = 200t',
      explanation: 'Har 3 yilda ikkilanish P = 100(2)^(t/3) degani.',
    },
    ru: {
      question_text: 'Популяция P удваивается каждые 3 года, начиная со 100. Какая функция описывает P через t лет?',
      choice_a: 'P = 100(2)^t',
      choice_b: 'P = 100(2)^(t/3)',
      choice_c: 'P = 100(3)^(t/2)',
      choice_d: 'P = 200t',
      explanation: 'Har 3 yilda ikkilanish P = 100(2)^(t/3) degani.',
    },
  },
  'ADV-M-041': {
    uz: {
      question_text: 'Ko\'paytuvchilarga ajrating: x² - 10x + 25',
      choice_a: '(x - 5)²',
      choice_b: '(x + 5)²',
      choice_c: '(x - 5)(x + 5)',
      choice_d: '(x - 25)(x - 1)',
      explanation: 'x² - 10x + 25 = (x - 5)² (to\'liq kvadrat).',
    },
    ru: {
      question_text: 'Разложите на множители: x² - 10x + 25',
      choice_a: '(x - 5)²',
      choice_b: '(x + 5)²',
      choice_c: '(x - 5)(x + 5)',
      choice_d: '(x - 25)(x - 1)',
      explanation: 'x² - 10x + 25 = (x - 5)² (полный квадрат).',
    },
  },
  'ADV-M-042': {
    uz: {
      question_text: 'Yeching: 2x² - 8x = 0',
      choice_a: 'x = 0 faqat',
      choice_b: 'x = 4 faqat',
      choice_c: 'x = 0 va x = 4',
      choice_d: 'x = 2 va x = -2',
      explanation: '2x² - 8x = 2x(x - 4) = 0, so x = 0 or x = 4.',
    },
    ru: {
      question_text: 'Решите: 2x² - 8x = 0',
      choice_a: 'x = 0 только',
      choice_b: 'x = 4 только',
      choice_c: 'x = 0 и x = 4',
      choice_d: 'x = 2 и x = -2',
      explanation: '2x² - 8x = 2x(x - 4) = 0, so x = 0 or x = 4.',
    },
  },
  'ADV-M-043': {
    uz: {
      question_text: 'Agar f(x) = x² - 4x + 3, nechaga teng f(2)?',
      choice_a: '-3',
      choice_b: '-1',
      choice_c: '1',
      choice_d: '3',
      explanation: 'f(2) = 4 - 8 + 3 = -1.',
    },
    ru: {
      question_text: 'Если f(x) = x² - 4x + 3, чему равно f(2)?',
      choice_a: '-3',
      choice_b: '-1',
      choice_c: '1',
      choice_d: '3',
      explanation: 'f(2) = 4 - 8 + 3 = -1.',
    },
  },
  'ADV-M-044': {
    uz: {
      question_text: 'Agar x + y = 5 and xy = 6, nechaga teng x² + y²?',
      choice_a: '11',
      choice_b: '13',
      choice_c: '17',
      choice_d: '19',
      explanation: '(x + y)² = x² + 2xy + y² = 25. Demak x² + y² = 25 - 2(6) = 25 - 12 = 13.',
    },
    ru: {
      question_text: 'Если x + y = 5 and xy = 6, чему равно x² + y²?',
      choice_a: '11',
      choice_b: '13',
      choice_c: '17',
      choice_d: '19',
      explanation: '(x + y)² = x² + 2xy + y² = 25. Значит x² + y² = 25 - 2(6) = 25 - 12 = 13.',
    },
  },
  'ADV-M-045': {
    uz: {
      question_text: 'Soddalashtiring: (2x³)(3x²)',
      choice_a: '5x⁵',
      choice_b: '6x⁵',
      choice_c: '6x⁶',
      choice_d: '5x⁶',
      explanation: '(2x³)(3x²) = 2·3·x³·x² = 6x⁵.',
    },
    ru: {
      question_text: 'Упростите: (2x³)(3x²)',
      choice_a: '5x⁵',
      choice_b: '6x⁵',
      choice_c: '6x⁶',
      choice_d: '5x⁶',
      explanation: '(2x³)(3x²) = 2·3·x³·x² = 6x⁵.',
    },
  },
  'ADV-M-046': {
    uz: {
      question_text: 'Nechta haqiqiy yechimi bor: x² + 4 = 0 bor?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x² = -4 haqiqiy yechimga ega emas, chunki barcha haqiqiy x lar uchun x² ≥ 0.',
    },
    ru: {
      question_text: 'Сколько действительных решений имеет x² + 4 = 0 ?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x² = -4 has нет действительных решений так как x² ≥ 0 for all real x.',
    },
  },
  'ADV-M-047': {
    uz: {
      question_text: 'Nechaga teng simmetriya o\'qi for y = x² - 6x + 5?',
      choice_a: 'x = -3',
      choice_b: 'x = 3',
      choice_c: 'x = 5',
      choice_d: 'x = -6',
      explanation: 'y = ax² + bx + c uchun simmetria o\'qi x = -b/(2a) = -(-6)/(2·1) = 3.',
    },
    ru: {
      question_text: 'Чему равно ось симметрии for y = x² - 6x + 5?',
      choice_a: 'x = -3',
      choice_b: 'x = 3',
      choice_c: 'x = 5',
      choice_d: 'x = -6',
      explanation: 'y = ax² + bx + c uchun simmetria o\'qi x = -b/(2a) = -(-6)/(2·1) = 3.',
    },
  },
  'ADV-M-048': {
    uz: {
      question_text: 'Qaysi biri ... ga teng: x⁴ - 1?',
      choice_a: '(x² - 1)(x² + 1)',
      choice_b: '(x - 1)⁴',
      choice_c: '(x² - 1)²',
      choice_d: '(x - 1)(x + 1)(x + 1)²',
      explanation: 'x⁴ - 1 = (x²)² - 1² = (x² - 1)(x² + 1) by kvadratlar ayirmasi.',
    },
    ru: {
      question_text: 'Чему равно x⁴ - 1?',
      choice_a: '(x² - 1)(x² + 1)',
      choice_b: '(x - 1)⁴',
      choice_c: '(x² - 1)²',
      choice_d: '(x - 1)(x + 1)(x + 1)²',
      explanation: 'x⁴ - 1 = (x²)² - 1² = (x² - 1)(x² + 1) by разность квадратов.',
    },
  },
  'ADV-M-049': {
    uz: {
      question_text: 'Yeching: (x - 1)² = 9',
      choice_a: 'x = 4 va x = -2',
      choice_b: 'x = 4 va x = 2',
      choice_c: 'x = 10 va x = -8',
      choice_d: 'x = 3 va x = -3',
      explanation: 'x - 1 = ±3. Demak x = 1 + 3 = 4 or x = 1 - 3 = -2.',
    },
    ru: {
      question_text: 'Решите: (x - 1)² = 9',
      choice_a: 'x = 4 и x = -2',
      choice_b: 'x = 4 и x = 2',
      choice_c: 'x = 10 и x = -8',
      choice_d: 'x = 3 и x = -3',
      explanation: 'x - 1 = ±3. Значит x = 1 + 3 = 4 or x = 1 - 3 = -2.',
    },
  },
  'ADV-M-050': {
    uz: {
      question_text: 'To\'p yuqoriga h(t) = -16t² + 48t + 4 fut balandlikka otildi. Maksimal balandlik nechaga teng?',
      choice_a: '36 fut',
      choice_b: '40 fut',
      choice_c: '48 fut',
      choice_d: '52 fut',
      explanation: 'Max at t = -48/(2·(-16)) = 1.5. h(1.5) = -16(2.25) + 48(1.5) + 4 = -36 + 72 + 4 = 40.',
    },
    ru: {
      question_text: 'Мяч брошен вверх, его высота h(t) = -16t² + 48t + 4 футов. Чему равна максимальная высота?',
      choice_a: '36 футов',
      choice_b: '40 футов',
      choice_c: '48 футов',
      choice_d: '52 футов',
      explanation: 'Max at t = -48/(2·(-16)) = 1.5. h(1.5) = -16(2.25) + 48(1.5) + 4 = -36 + 72 + 4 = 40.',
    },
  },
  'ADV-M-051': {
    uz: {
      question_text: 'Soddalashtiring: (x + 2)² - (x - 2)²',
      choice_a: '4x',
      choice_b: '8x',
      choice_c: '4',
      choice_d: '8',
      explanation: '(x + 2)² - (x - 2)² = (x² + 4x + 4) - (x² - 4x + 4) = 8x.',
    },
    ru: {
      question_text: 'Упростите: (x + 2)² - (x - 2)²',
      choice_a: '4x',
      choice_b: '8x',
      choice_c: '4',
      choice_d: '8',
      explanation: '(x + 2)² - (x - 2)² = (x² + 4x + 4) - (x² - 4x + 4) = 8x.',
    },
  },
  'ADV-M-052': {
    uz: {
      question_text: 'k ning qaysi qiymatlarida x² - 6x + k = 0 tenglamasi aynan bitta yechimga ega?',
      choice_a: 'k = 6',
      choice_b: 'k = 9',
      choice_c: 'k = 12',
      choice_d: 'k = 36',
      explanation: 'Bitta yechim diskriminant = 0 degani: b² - 4ac = 36 - 4k = 0, demak k = 9.',
    },
    ru: {
      question_text: 'При каких значениях k уравнение x² - 6x + k = 0 имеет ровно одно решение?',
      choice_a: 'k = 6',
      choice_b: 'k = 9',
      choice_c: 'k = 12',
      choice_d: 'k = 36',
      explanation: 'One solution means дискриминант = 0: b² - 4ac = 36 - 4k = 0, so k = 9.',
    },
  },
  'ADV-M-053': {
    uz: {
      question_text: 'Agar f(x) = 2^x, nechaga teng f(3) - f(2)?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'f(3) = 8, f(2) = 4. f(3) - f(2) = 8 - 4 = 4.',
    },
    ru: {
      question_text: 'Если f(x) = 2^x, чему равно f(3) - f(2)?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'f(3) = 8, f(2) = 4. f(3) - f(2) = 8 - 4 = 4.',
    },
  },
  'ADV-M-054': {
    uz: {
      question_text: 'y = x + 2 to\'g\'ri chiziqi y = x² parabola bilan nechta nuqtada kesishadi?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '3',
      explanation: 'x² = x + 2, x² - x - 2 = 0, (x - 2)(x + 1) = 0. Ikki yechim, demak 2 kesishish nuqtasi.',
    },
    ru: {
      question_text: 'Прямая y = x + 2 пересекает параболу y = x² в скольких точках?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '3',
      explanation: 'x² = x + 2, x² - x - 2 = 0, (x - 2)(x + 1) = 0. Ikki yechim, demak 2 kesishish nuqtasi.',
    },
  },
  'ADV-M-055': {
    uz: {
      question_text: 'Ko\'paytuvchilarga ajrating: 4x² - 12x + 9',
      choice_a: '(2x - 3)²',
      choice_b: '(2x + 3)²',
      choice_c: '(4x - 3)(x - 3)',
      choice_d: '4(x - 3)²',
      explanation: '4x² - 12x + 9 = (2x)² - 2(2x)(3) + 3² = (2x - 3)².',
    },
    ru: {
      question_text: 'Разложите на множители: 4x² - 12x + 9',
      choice_a: '(2x - 3)²',
      choice_b: '(2x + 3)²',
      choice_c: '(4x - 3)(x - 3)',
      choice_d: '4(x - 3)²',
      explanation: '4x² - 12x + 9 = (2x)² - 2(2x)(3) + 3² = (2x - 3)².',
    },
  },
  'ADV-M-056': {
    uz: {
      question_text: 'Yeching: x² - 5x - 14 = 0',
      choice_a: 'x = 7 va x = -2',
      choice_b: 'x = -7 va x = 2',
      choice_c: 'x = 7 va x = 2',
      choice_d: 'x = -7 va x = -2',
      explanation: 'Ko\'paytuvchilarga ajratamiz: (x - 7)(x + 2) = 0, so x = 7 or x = -2.',
    },
    ru: {
      question_text: 'Решите: x² - 5x - 14 = 0',
      choice_a: 'x = 7 и x = -2',
      choice_b: 'x = -7 и x = 2',
      choice_c: 'x = 7 и x = 2',
      choice_d: 'x = -7 и x = -2',
      explanation: 'Разложим: (x - 7)(x + 2) = 0, so x = 7 or x = -2.',
    },
  },
  'ADV-M-057': {
    uz: {
      question_text: 'Qiymat har yili 10% ga kamayadi. Agar boshlang\'ich qiymat $1000 bo\'lsa, 2 yildan keyin qiymati nechaga teng?',
      choice_a: '$800',
      choice_b: '$810',
      choice_c: '$900',
      choice_d: '$990',
      explanation: 'After 1 year: 1000(0.9) = 900. After 2 years: 900(0.9) = 810.',
    },
    ru: {
      question_text: 'Стоимость уменьшается на 10% каждый год. Если начальная стоимость $1000, чему равна стоимость через 2 года?',
      choice_a: '$800',
      choice_b: '$810',
      choice_c: '$900',
      choice_d: '$990',
      explanation: 'After 1 year: 1000(0.9) = 900. After 2 years: 900(0.9) = 810.',
    },
  },
  'ADV-M-058': {
    uz: {
      question_text: 'Agar x - y = 2 and xy = 8, nechaga teng (x + y)²?',
      choice_a: '32',
      choice_b: '36',
      choice_c: '40',
      choice_d: '44',
      explanation: '(x - y)² = x² - 2xy + y² = 4. (x + y)² = x² + 2xy + y² = (x² - 2xy + y²) + 4xy = 4 + 32 = 36.',
    },
    ru: {
      question_text: 'Если x - y = 2 and xy = 8, чему равно (x + y)²?',
      choice_a: '32',
      choice_b: '36',
      choice_c: '40',
      choice_d: '44',
      explanation: '(x - y)² = x² - 2xy + y² = 4. (x + y)² = x² + 2xy + y² = (x² - 2xy + y²) + 4xy = 4 + 32 = 36.',
    },
  },
  'ADV-M-059': {
    uz: {
      question_text: 'Soddalashtiring: (x² - 4)/(x² - 4x + 4)',
      choice_a: '(x + 2)/(x - 2)',
      choice_b: '(x - 2)/(x + 2)',
      choice_c: '1',
      choice_d: '(x + 2)²/(x - 2)²',
      explanation: '(x² - 4)/(x² - 4x + 4) = (x - 2)(x + 2)/(x - 2)² = (x + 2)/(x - 2).',
    },
    ru: {
      question_text: 'Упростите: (x² - 4)/(x² - 4x + 4)',
      choice_a: '(x + 2)/(x - 2)',
      choice_b: '(x - 2)/(x + 2)',
      choice_c: '1',
      choice_d: '(x + 2)²/(x - 2)²',
      explanation: '(x² - 4)/(x² - 4x + 4) = (x - 2)(x + 2)/(x - 2)² = (x + 2)/(x - 2).',
    },
  },
  'ADV-M-060': {
    uz: {
      question_text: 'Agar ax² + bx + c = 0 tenglamasining diskriminanti manfiy bo\'lsa, tenglama:',
      choice_a: 'Ikkita haqiqiy yechim',
      choice_b: 'Bitta haqiqiy yechim',
      choice_c: 'Haqiqiy yechim yo\'q',
      choice_d: 'Cheksiz ko\'p yechim',
      explanation: 'Manfiy diskriminant parabolaning x o\'qini kesmasligini bildiradi, shuning uchun haqiqiy yechim yo\'q.',
    },
    ru: {
      question_text: 'Если дискриминант уравнения ax² + bx + c = 0 отрицателен, уравнение имеет:',
      choice_a: 'Два действительных решения',
      choice_b: 'Одно действительное решение',
      choice_c: 'Нет действительных решений',
      choice_d: 'Бесконечно много решений',
      explanation: 'Отрицательный дискриминант означает, что парабола не пересекает ось x, поэтому нет действительных решений.',
    },
  },
  'ADV-H-031': {
    uz: {
      question_text: 'Agar x² + 1/x² = 7, nechaga teng x + 1/x?',
      choice_a: '±2',
      choice_b: '±3',
      choice_c: '±√5',
      choice_d: '±√7',
      explanation: '(x + 1/x)² = x² + 2 + 1/x² = 7 + 2 = 9. Demak x + 1/x = ±3.',
    },
    ru: {
      question_text: 'Если x² + 1/x² = 7, чему равно x + 1/x?',
      choice_a: '±2',
      choice_b: '±3',
      choice_c: '±√5',
      choice_d: '±√7',
      explanation: '(x + 1/x)² = x² + 2 + 1/x² = 7 + 2 = 9. Значит x + 1/x = ±3.',
    },
  },
  'ADV-H-032': {
    uz: {
      question_text: 'To\'liq ko\'paytuvchilarga ajrating: x⁴ - 16',
      choice_a: '(x² - 4)(x² + 4)',
      choice_b: '(x - 2)(x + 2)(x² + 4)',
      choice_c: '(x - 2)²(x + 2)²',
      choice_d: '(x² - 4)²',
      explanation: 'x⁴ - 16 = (x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4). Note: x² + 4 doesn\'t factor over reals.',
    },
    ru: {
      question_text: 'Разложите на множители полностью: x⁴ - 16',
      choice_a: '(x² - 4)(x² + 4)',
      choice_b: '(x - 2)(x + 2)(x² + 4)',
      choice_c: '(x - 2)²(x + 2)²',
      choice_d: '(x² - 4)²',
      explanation: 'x⁴ - 16 = (x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4). Note: x² + 4 doesn\'t factor over reals.',
    },
  },
  'ADV-H-033': {
    uz: {
      question_text: 'Yeching: x⁴ - 5x² + 4 = 0',
      choice_a: 'x = ±1, ±2',
      choice_b: 'x = ±1, ±4',
      choice_c: 'x = 1, 2, 4',
      choice_d: 'x = ±2, ±4',
      explanation: 'u = x² deb olamiz. Keyin u² - 5u + 4 = 0, (u - 1)(u - 4) = 0. u = 1 yoki u = 4, demak x² = 1 yoki x² = 4, bu x = ±1 yoki ±2 beradi.',
    },
    ru: {
      question_text: 'Решите: x⁴ - 5x² + 4 = 0',
      choice_a: 'x = ±1, ±2',
      choice_b: 'x = ±1, ±4',
      choice_c: 'x = 1, 2, 4',
      choice_d: 'x = ±2, ±4',
      explanation: 'u = x² deb olamiz. Keyin u² - 5u + 4 = 0, (u - 1)(u - 4) = 0. u = 1 yoki u = 4, demak x² = 1 yoki x² = 4, bu x = ±1 yoki ±2 beradi.',
    },
  },
  'ADV-H-034': {
    uz: {
      question_text: '2x² - 7x + 5 = 0 ning ildizlar yig\'indisini ildizlar ko\'paytmasiga bo\'lganda:',
      choice_a: '7/5',
      choice_b: '5/7',
      choice_c: '2/5',
      choice_d: '7/10',
      explanation: 'Sum = 7/2, Product = 5/2. Sum/Product = (7/2)/(5/2) = 7/5.',
    },
    ru: {
      question_text: 'Сумма корней 2x² - 7x + 5 = 0, делённая на произведение корней, равна:',
      choice_a: '7/5',
      choice_b: '5/7',
      choice_c: '2/5',
      choice_d: '7/10',
      explanation: 'Sum = 7/2, Product = 5/2. Sum/Product = (7/2)/(5/2) = 7/5.',
    },
  },
  'ADV-H-035': {
    uz: {
      question_text: 'Funksiya f(x) = x² - 6x + k ning minimal qiymati 2. Nechaga teng k?',
      choice_a: '9',
      choice_b: '11',
      choice_c: '13',
      choice_d: '15',
      explanation: 'f(x) = (x - 3)² + (k - 9). Minimum is k - 9 = 2, so k = 11.',
    },
    ru: {
      question_text: 'Функция f(x) = x² - 6x + k имеет минимальное значение 2. Чему равно k?',
      choice_a: '9',
      choice_b: '11',
      choice_c: '13',
      choice_d: '15',
      explanation: 'f(x) = (x - 3)² + (k - 9). Minimum is k - 9 = 2, so k = 11.',
    },
  },
  'ADV-H-036': {
    uz: {
      question_text: 'Agar f(x) = 3^x, solve f(2x) = 27f(x).',
      choice_a: 'x = 1',
      choice_b: 'x = 2',
      choice_c: 'x = 3',
      choice_d: 'x = 4',
      explanation: '3^(2x) = 27 · 3^x = 3³ · 3^x = 3^(x+3). Demak 2x = x + 3, x = 3.',
    },
    ru: {
      question_text: 'Если f(x) = 3^x, solve f(2x) = 27f(x).',
      choice_a: 'x = 1',
      choice_b: 'x = 2',
      choice_c: 'x = 3',
      choice_d: 'x = 4',
      explanation: '3^(2x) = 27 · 3^x = 3³ · 3^x = 3^(x+3). Значит 2x = x + 3, x = 3.',
    },
  },
  'ADV-H-037': {
    uz: {
      question_text: 'Agar x² + y² = 25 and x + y = 7, nechaga teng xy?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: '(x + y)² = x² + 2xy + y² = 49. Demak 25 + 2xy = 49, 2xy = 24, xy = 12.',
    },
    ru: {
      question_text: 'Если x² + y² = 25 and x + y = 7, чему равно xy?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: '(x + y)² = x² + 2xy + y² = 49. Значит 25 + 2xy = 49, 2xy = 24, xy = 12.',
    },
  },
  'ADV-H-038': {
    uz: {
      question_text: 'Soddalashtiring: (x³ - 8)/(x - 2)',
      choice_a: 'x² + 4',
      choice_b: 'x² - 4',
      choice_c: 'x² + 2x + 4',
      choice_d: 'x² - 2x + 4',
      explanation: 'x³ - 8 = (x - 2)(x² + 2x + 4) kublar ayirmasi formulasi bo\'yicha. (x - 2) ga bo\'lganda x² + 2x + 4 hosil bo\'ladi.',
    },
    ru: {
      question_text: 'Упростите: (x³ - 8)/(x - 2)',
      choice_a: 'x² + 4',
      choice_b: 'x² - 4',
      choice_c: 'x² + 2x + 4',
      choice_d: 'x² - 2x + 4',
      explanation: 'x³ - 8 = (x - 2)(x² + 2x + 4) по формуле разности кубов. Разделив на (x - 2), получаем x² + 2x + 4.',
    },
  },
  'ADV-H-039': {
    uz: {
      question_text: 'k ning qaysi qiymatida x² + kx + 9 = 0 tenglamasi teng ildizlarga ega?',
      choice_a: '±3',
      choice_b: '±6',
      choice_c: '±9',
      choice_d: '±12',
      explanation: 'Teng ildizlar diskriminant = 0 bo\'lganda: k² - 36 = 0, k = ±6.',
    },
    ru: {
      question_text: 'При каком значении k уравнение x² + kx + 9 = 0 имеет равные корни?',
      choice_a: '±3',
      choice_b: '±6',
      choice_c: '±9',
      choice_d: '±12',
      explanation: 'Равные корни когда дискриминант = 0: k² - 36 = 0, k = ±6.',
    },
  },
  'ADV-H-040': {
    uz: {
      question_text: 'Populyatsiya har 4 yilda uch baravar ortadi. Necha yildan keyin u asl miqdordan 9 marta ko\'p bo\'ladi?',
      choice_a: '6 years',
      choice_b: '8 years',
      choice_c: '12 years',
      choice_d: '16 years',
      explanation: 'P = P₀(3)^(t/4) = 9P₀ = 3²P₀. Demak 3^(t/4) = 3², t/4 = 2, t = 8 years.',
    },
    ru: {
      question_text: 'Популяция утраивается каждые 4 года. Через сколько лет она станет в 9 раз больше исходной?',
      choice_a: '6 years',
      choice_b: '8 years',
      choice_c: '12 years',
      choice_d: '16 years',
      explanation: 'P = P₀(3)^(t/4) = 9P₀ = 3²P₀. Значит 3^(t/4) = 3², t/4 = 2, t = 8 years.',
    },
  },
  'ADV-H-041': {
    uz: {
      question_text: 'Agar a + b = 5 and ab = 6, nechaga teng a³ + b³?',
      choice_a: '35',
      choice_b: '45',
      choice_c: '55',
      choice_d: '65',
      explanation: 'a³ + b³ = (a + b)(a² - ab + b²) = (a + b)((a + b)² - 3ab) = 5(25 - 18) = 5(7) = 35.',
    },
    ru: {
      question_text: 'Если a + b = 5 and ab = 6, чему равно a³ + b³?',
      choice_a: '35',
      choice_b: '45',
      choice_c: '55',
      choice_d: '65',
      explanation: 'a³ + b³ = (a + b)(a² - ab + b²) = (a + b)((a + b)² - 3ab) = 5(25 - 18) = 5(7) = 35.',
    },
  },
  'ADV-H-042': {
    uz: {
      question_text: 'Yeching: √(2x + 3) = x',
      choice_a: 'x = 3 faqat',
      choice_b: 'x = -1 faqat',
      choice_c: 'x = 3 va x = -1',
      choice_d: 'Yechim yo\'q',
      explanation: 'Square: 2x + 3 = x². Rearrange: x² - 2x - 3 = 0, (x - 3)(x + 1) = 0. x = 3 or x = -1. Tekshiramiz: √9 = 3 ✓, √1 = 1 ≠ -1. Only x = 3.',
    },
    ru: {
      question_text: 'Решите: √(2x + 3) = x',
      choice_a: 'x = 3 только',
      choice_b: 'x = -1 только',
      choice_c: 'x = 3 и x = -1',
      choice_d: 'Нет решения',
      explanation: 'Square: 2x + 3 = x². Rearrange: x² - 2x - 3 = 0, (x - 3)(x + 1) = 0. x = 3 or x = -1. Проверим: √9 = 3 ✓, √1 = 1 ≠ -1. Only x = 3.',
    },
  },
  'ADV-H-043': {
    uz: {
      question_text: 'Agar f(x) = x² - 2x - 3, qaysi x qiymatlarida f(x) < 0?',
      choice_a: 'x < -1 yoki x > 3',
      choice_b: '-1 < x < 3',
      choice_c: 'x < -3 yoki x > 1',
      choice_d: '-3 < x < 1',
      explanation: 'f(x) = (x - 3)(x + 1) = 0 at x = 3 and x = -1. Parabola opens up, so f(x) < 0 between roots: -1 < x < 3.',
    },
    ru: {
      question_text: 'Если f(x) = x² - 2x - 3, при каких значениях x f(x) < 0?',
      choice_a: 'x < -1 или x > 3',
      choice_b: '-1 < x < 3',
      choice_c: 'x < -3 или x > 1',
      choice_d: '-3 < x < 1',
      explanation: 'f(x) = (x - 3)(x + 1) = 0 at x = 3 and x = -1. Parabola opens up, so f(x) < 0 between roots: -1 < x < 3.',
    },
  },
  'ADV-H-044': {
    uz: {
      question_text: 'y = x² va y = 4 sistemasining nechta yechimi bor?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x² = 4 → x = ±2. Ikkita kesishish nuqtasi: (2, 4) va (-2, 4).',
    },
    ru: {
      question_text: 'Сколько решений имеет система y = x² и y = 4?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '4',
      explanation: 'x² = 4 → x = ±2. Две точки пересечения: (2, 4) и (-2, 4).',
    },
  },
  'ADV-H-045': {
    uz: {
      question_text: 'Soddalashtiring: (a² - b²)/(a³ - b³) × (a² + ab + b²)',
      choice_a: '1',
      choice_b: '(a + b)/(a - b)',
      choice_c: '(a - b)/(a + b)',
      choice_d: 'a + b',
      explanation: '(a² - b²) = (a-b)(a+b), (a³ - b³) = (a-b)(a² + ab + b²). Demak [(a-b)(a+b)]/[(a-b)(a²+ab+b²)] × (a²+ab+b²) = a + b.',
    },
    ru: {
      question_text: 'Упростите: (a² - b²)/(a³ - b³) × (a² + ab + b²)',
      choice_a: '1',
      choice_b: '(a + b)/(a - b)',
      choice_c: '(a - b)/(a + b)',
      choice_d: 'a + b',
      explanation: '(a² - b²) = (a-b)(a+b), (a³ - b³) = (a-b)(a² + ab + b²). Значит [(a-b)(a+b)]/[(a-b)(a²+ab+b²)] × (a²+ab+b²) = a + b.',
    },
  },
  'ADV-H-046': {
    uz: {
      question_text: 'Agar one root of x² - 5x + k = 0 is 3, nechaga teng the other root?',
      choice_a: '2',
      choice_b: '-2',
      choice_c: '3',
      choice_d: '5',
      explanation: 'Sum of roots = 5. If one root is 3, the other is 5 - 3 = 2.',
    },
    ru: {
      question_text: 'Если one root of x² - 5x + k = 0 is 3, чему равно the other root?',
      choice_a: '2',
      choice_b: '-2',
      choice_c: '3',
      choice_d: '5',
      explanation: 'Sum of roots = 5. If one root is 3, the other is 5 - 3 = 2.',
    },
  },
  'ADV-H-047': {
    uz: {
      question_text: 'Funksiya f(x) = ax² + bx + c ning cho\'qqisi (2, -3) va (0, 5) nuqtadan o\'tadi. Nechaga teng a?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Vertex form: f(x) = a(x - 2)² - 3. At x = 0: f(0) = 4a - 3 = 5, so 4a = 8, a = 2.',
    },
    ru: {
      question_text: 'Функция f(x) = ax² + bx + c имеет вершину (2, -3) и проходит через (0, 5). Чему равно a?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Vertex form: f(x) = a(x - 2)² - 3. At x = 0: f(0) = 4a - 3 = 5, so 4a = 8, a = 2.',
    },
  },
  'ADV-H-048': {
    uz: {
      question_text: 'Agar x² - y² = 21 and x - y = 3, nechaga teng x + y?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'x² - y² = (x - y)(x + y) = 21. Chunki x - y = 3: 3(x + y) = 21, so x + y = 7.',
    },
    ru: {
      question_text: 'Если x² - y² = 21 and x - y = 3, чему равно x + y?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'x² - y² = (x - y)(x + y) = 21. Так как x - y = 3: 3(x + y) = 21, so x + y = 7.',
    },
  },
  'ADV-H-049': {
    uz: {
      question_text: 'Agar x + y = 4 and x² + y² = 10, nechaga teng xy?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '6',
      explanation: '(x + y)² = x² + 2xy + y² = 16. Demak 10 + 2xy = 16, 2xy = 6, xy = 3.',
    },
    ru: {
      question_text: 'Если x + y = 4 and x² + y² = 10, чему равно xy?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '6',
      explanation: '(x + y)² = x² + 2xy + y² = 16. Значит 10 + 2xy = 16, 2xy = 6, xy = 3.',
    },
  },
  'ADV-H-050': {
    uz: {
      question_text: 'Yeching: |x² - 4| = 5',
      choice_a: 'x = ±1, ±3',
      choice_b: 'x = ±3 faqat',
      choice_c: 'x = ±1 faqat',
      choice_d: 'x = 1, 3',
      explanation: 'Case 1: x² - 4 = 5, x² = 9, x = ±3. Case 2: x² - 4 = -5, x² = -1, no real solution. Demak x = ±3.',
    },
    ru: {
      question_text: 'Решите: |x² - 4| = 5',
      choice_a: 'x = ±1, ±3',
      choice_b: 'x = ±3 только',
      choice_c: 'x = ±1 только',
      choice_d: 'x = 1, 3',
      explanation: 'Case 1: x² - 4 = 5, x² = 9, x = ±3. Case 2: x² - 4 = -5, x² = -1, no real solution. Значит x = ±3.',
    },
  },
  'ADV-H-051': {
    uz: {
      question_text: 'Agar f(x) = 2x² - 4x + 5, nechaga teng the range of f?',
      choice_a: 'y ≥ 3',
      choice_b: 'y ≥ 5',
      choice_c: 'y ≥ 1',
      choice_d: 'Barcha haqiqiy sonlar',
      explanation: 'f(x) = 2(x² - 2x) + 5 = 2(x - 1)² - 2 + 5 = 2(x - 1)² + 3. Minimum is 3 at x = 1, so range is y ≥ 3.',
    },
    ru: {
      question_text: 'Если f(x) = 2x² - 4x + 5, чему равно the range of f?',
      choice_a: 'y ≥ 3',
      choice_b: 'y ≥ 5',
      choice_c: 'y ≥ 1',
      choice_d: 'Все действительные числа',
      explanation: 'f(x) = 2(x² - 2x) + 5 = 2(x - 1)² - 2 + 5 = 2(x - 1)² + 3. Minimum is 3 at x = 1, so range is y ≥ 3.',
    },
  },
  'ADV-H-052': {
    uz: {
      question_text: 'Soddalashtiring: (2x² - 3x - 2)/(x² - 4), bunda x ≠ ±2',
      choice_a: '(2x + 1)/(x + 2)',
      choice_b: '(2x - 1)/(x - 2)',
      choice_c: '(2x + 1)/(x - 2)',
      choice_d: '(2x - 1)/(x + 2)',
      explanation: '2x² - 3x - 2 = (2x + 1)(x - 2). x² - 4 = (x - 2)(x + 2). Result: (2x + 1)/(x + 2).',
    },
    ru: {
      question_text: 'Упростите: (2x² - 3x - 2)/(x² - 4), где x ≠ ±2',
      choice_a: '(2x + 1)/(x + 2)',
      choice_b: '(2x - 1)/(x - 2)',
      choice_c: '(2x + 1)/(x - 2)',
      choice_d: '(2x - 1)/(x + 2)',
      explanation: '2x² - 3x - 2 = (2x + 1)(x - 2). x² - 4 = (x - 2)(x + 2). Result: (2x + 1)/(x + 2).',
    },
  },
  'ADV-H-053': {
    uz: {
      question_text: 'x² + px + 12 = 0 ning ildizlari 3:4 nisbatida. Nechaga teng p?',
      choice_a: '-7',
      choice_b: '7',
      choice_c: '-7 yoki 7',
      choice_d: '±12',
      explanation: 'Let roots be 3k and 4k. Product: 12k² = 12, k = ±1. Sum: 7k = -p. If k = 1, p = -7. If k = -1, p = 7.',
    },
    ru: {
      question_text: 'Корни x² + px + 12 = 0 относятся как 3:4. Чему равно p?',
      choice_a: '-7',
      choice_b: '7',
      choice_c: '-7 или 7',
      choice_d: '±12',
      explanation: 'Let roots be 3k and 4k. Product: 12k² = 12, k = ±1. Sum: 7k = -p. If k = 1, p = -7. If k = -1, p = 7.',
    },
  },
  'ADV-H-054': {
    uz: {
      question_text: 'Radioaktiv moddaning yarim parchalanish davri 5 yil. 15 yildan keyin qancha qism qoladi?',
      choice_a: '1/4',
      choice_b: '1/6',
      choice_c: '1/8',
      choice_d: '1/16',
      explanation: '15 years = 3 half-lives. Remaining = (1/2)³ = 1/8.',
    },
    ru: {
      question_text: 'Радиоактивное вещество has период полураспада of 5 years. Какая доля остаётся after 15 years?',
      choice_a: '1/4',
      choice_b: '1/6',
      choice_c: '1/8',
      choice_d: '1/16',
      explanation: '15 years = 3 half-lives. Remaining = (1/2)³ = 1/8.',
    },
  },
  'ADV-H-055': {
    uz: {
      question_text: 'y = x² - 2 va y = kx sistemasi aynan bitta yechimga ega. k ning mumkin bo\'lgan qiymatlari qanday?',
      choice_a: 'k = 0',
      choice_b: 'k = ±2√2',
      choice_c: 'k = ±4',
      choice_d: 'k = 0 yoki k = ±2√2',
      explanation: 'x² - 2 = kx, x² - kx - 2 = 0. Bitta yechim diskriminant = 0 bo\'lganda: k² + 8 = 0 (haqiqiy k yo\'q). x = 0 da: y = -2 ≠ 0, qarama-qarshilik. Diskriminant k² + 8 > 0 har doim, demak har doim 2 yechim bor. Urinma holat: k² - 4(1)(-2) = k² + 8 = 0 — yechim yo\'q. Demak k = ±2√2 javob B to\'g\'ri.',
    },
    ru: {
      question_text: 'Система y = x² - 2 и y = kx имеет ровно одно решение. Каковы возможные значения k?',
      choice_a: 'k = 0',
      choice_b: 'k = ±2√2',
      choice_c: 'k = ±4',
      choice_d: 'k = 0 или k = ±2√2',
      explanation: 'x² - 2 = kx, x² - kx - 2 = 0. Одно решение когда дискриминант = 0: k² + 8 = 0 (нет вещественных k). При x = 0: y = -2 ≠ 0, противоречие. Дискриминант k² + 8 > 0 всегда, значит всегда 2 решения. Случай касательной: k² - 4(1)(-2) = k² + 8 = 0 — решений нет. Значит ответ B: k = ±2√2.',
    },
  },
  'ADV-H-056': {
    uz: {
      question_text: 'Agar (x + 1/x)² = 5, nechaga teng x² + 1/x²?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: '(x + 1/x)² = x² + 2 + 1/x² = 5. Demak x² + 1/x² = 5 - 2 = 3.',
    },
    ru: {
      question_text: 'Если (x + 1/x)² = 5, чему равно x² + 1/x²?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: '(x + 1/x)² = x² + 2 + 1/x² = 5. Значит x² + 1/x² = 5 - 2 = 3.',
    },
  },
  'ADV-H-057': {
    uz: {
      question_text: 'Yeching: 4^x - 6(2^x) + 8 = 0',
      choice_a: 'x = 1 va x = 2',
      choice_b: 'x = 2 va x = 3',
      choice_c: 'x = 1 va x = 3',
      choice_d: 'x = 0 va x = 2',
      explanation: 'u = 2^x deb olamiz. Keyin 4^x = u². Tenglama: u² - 6u + 8 = 0, (u - 2)(u - 4) = 0. u = 2 → 2^x = 2, x = 1. u = 4 → 2^x = 4, x = 2.',
    },
    ru: {
      question_text: 'Решите: 4^x - 6(2^x) + 8 = 0',
      choice_a: 'x = 1 и x = 2',
      choice_b: 'x = 2 и x = 3',
      choice_c: 'x = 1 и x = 3',
      choice_d: 'x = 0 и x = 2',
      explanation: 'u = 2^x deb olamiz. Keyin 4^x = u². Tenglama: u² - 6u + 8 = 0, (u - 2)(u - 4) = 0. u = 2 → 2^x = 2, x = 1. u = 4 → 2^x = 4, x = 2.',
    },
  },
  'ADV-H-058': {
    uz: {
      question_text: 'Grafigi y = ax² + bx + c dan o\'tadi (0, 3), (1, 4), and (2, 9). Nechaga teng a + b + c?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'a + b + c = f(1) = 4.',
    },
    ru: {
      question_text: 'График y = ax² + bx + c проходит через (0, 3), (1, 4), and (2, 9). Чему равно a + b + c?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'a + b + c = f(1) = 4.',
    },
  },
  'ADV-H-059': {
    uz: {
      question_text: 'Agar x + y = 6 and x² + y² = 20, nechaga teng x³ + y³?',
      choice_a: '54',
      choice_b: '72',
      choice_c: '84',
      choice_d: '96',
      explanation: 'xy = (36 - 20)/2 = 8. x³ + y³ = (x + y)(x² - xy + y²) = 6(20 - 8) = 6(12) = 72.',
    },
    ru: {
      question_text: 'Если x + y = 6 and x² + y² = 20, чему равно x³ + y³?',
      choice_a: '54',
      choice_b: '72',
      choice_c: '84',
      choice_d: '96',
      explanation: 'xy = (36 - 20)/2 = 8. x³ + y³ = (x + y)(x² - xy + y²) = 6(20 - 8) = 6(12) = 72.',
    },
  },
  'ADV-H-060': {
    uz: {
      question_text: 'Tenglama x² - (k + 3)x + 3k = 0 bitta ildizi ... ga teng 3. Nechaga teng the other root?',
      choice_a: 'k',
      choice_b: 'k - 3',
      choice_c: 'k + 3',
      choice_d: '3k',
      explanation: 'If x = 3: 9 - 3(k + 3) + 3k = 9 - 3k - 9 + 3k = 0 ✓. Product of roots = 3k, so other root × 3 = 3k, other root = k.',
    },
    ru: {
      question_text: 'Уравнение x² - (k + 3)x + 3k = 0 имеет один корень, равный 3. Чему равно the other root?',
      choice_a: 'k',
      choice_b: 'k - 3',
      choice_c: 'k + 3',
      choice_d: '3k',
      explanation: 'If x = 3: 9 - 3(k + 3) + 3k = 9 - 3k - 9 + 3k = 0 ✓. Product of roots = 3k, so other root × 3 = 3k, other root = k.',
    },
  },
  'ALG-E-001': {
    uz: {
      question_text: 'Agar 3x + 9 = 24 bo\'lsa, x ning qiymati nechaga teng?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '11',
      explanation: 'Ikkala tomondan 9 ni ayiramiz: 3x = 15. Ikkala tomonni 3 ga bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Если 3x + 9 = 24, чему равно значение x?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '11',
      explanation: 'Вычтем 9 из обеих частей: 3x = 15. Разделим обе части на 3: x = 5.',
    },
  },
  'ALG-E-002': {
    uz: {
      question_text: 'x ning qaysi qiymati 2(x - 4) = 10 tenglamani qanoatlantiradi?',
      choice_a: '3',
      choice_b: '7',
      choice_c: '9',
      choice_d: '14',
      explanation: 'Qavsni ochamiz: 2x - 8 = 10. 8 ni qo\'shamiz: 2x = 18. 2 ga bo\'lamiz: x = 9.',
    },
    ru: {
      question_text: 'Какое значение x удовлетворяет уравнению 2(x - 4) = 10?',
      choice_a: '3',
      choice_b: '7',
      choice_c: '9',
      choice_d: '14',
      explanation: 'Раскроем скобки: 2x - 8 = 10. Прибавим 8: 2x = 18. Разделим на 2: x = 9.',
    },
  },
  'ALG-E-003': {
    uz: {
      question_text: 'Agar f(x) = 4x - 3 bo\'lsa, f(5) nechaga teng?',
      choice_a: '13',
      choice_b: '17',
      choice_c: '20',
      choice_d: '23',
      explanation: 'x = 5 ni qo\'yamiz: f(5) = 4(5) - 3 = 20 - 3 = 17.',
    },
    ru: {
      question_text: 'Если f(x) = 4x - 3, чему равно f(5)?',
      choice_a: '13',
      choice_b: '17',
      choice_c: '20',
      choice_d: '23',
      explanation: 'Подставим x = 5: f(5) = 4(5) - 3 = 20 - 3 = 17.',
    },
  },
  'ALG-E-004': {
    uz: {
      question_text: 'To\'g\'ri chiziqning burchak koeffitsienti 2 ga teng va u (0, 5) nuqtadan o\'tadi. Bu to\'g\'ri chiziqning tenglamasi qanday?',
      choice_a: 'y = 2x + 5',
      choice_b: 'y = 5x + 2',
      choice_c: 'y = 2x - 5',
      choice_d: 'y = -2x + 5',
      explanation: '(0, 5) nuqta y o\'qi bilan kesishish nuqtasi, shuning uchun b = 5. Burchak koeffitsienti m = 2 bo\'lganda, tenglama y = 2x + 5.',
    },
    ru: {
      question_text: 'Прямая имеет угловой коэффициент 2 и проходит через точку (0, 5). Каково уравнение этой прямой?',
      choice_a: 'y = 2x + 5',
      choice_b: 'y = 5x + 2',
      choice_c: 'y = 2x - 5',
      choice_d: 'y = -2x + 5',
      explanation: 'Точка (0, 5) — это точка пересечения с осью y, значит b = 5. При угловом коэффициенте m = 2 уравнение: y = 2x + 5.',
    },
  },
  'ALG-E-005': {
    uz: {
      question_text: '3x + 2y = 12 to\'g\'ri chiziqning y o\'qi bilan kesishish nuqtasi nechaga teng?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '6',
      choice_d: '12',
      explanation: 'x = 0 qo\'yamiz: 3(0) + 2y = 12, demak 2y = 12, va y = 6. Y o\'qi bilan kesishish nuqtasi 6.',
    },
    ru: {
      question_text: 'Какова точка пересечения с осью y для прямой 3x + 2y = 12?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '6',
      choice_d: '12',
      explanation: 'Подставим x = 0: 3(0) + 2y = 12, значит 2y = 12, и y = 6. Точка пересечения с осью y равна 6.',
    },
  },
  'ALG-E-006': {
    uz: {
      question_text: 'Agar x + y = 10 va x = 4 bo\'lsa, y ning qiymati nechaga teng?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '10',
      choice_d: '14',
      explanation: 'x = 4 ni x + y = 10 ga qo\'yamiz: 4 + y = 10, demak y = 6.',
    },
    ru: {
      question_text: 'Если x + y = 10 и x = 4, чему равно значение y?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '10',
      choice_d: '14',
      explanation: 'Подставим x = 4 в x + y = 10: 4 + y = 10, значит y = 6.',
    },
  },
  'ALG-E-007': {
    uz: {
      question_text: 'x ning qaysi qiymati 2x + 3 < 15 tengsizlikni qanoatlantiradi?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '8',
      explanation: '2x + 3 < 15 degani 2x < 12, demak x < 6. Variantlar ichida x = 4 va x = 5 mos keladi. Javob B (5).',
    },
    ru: {
      question_text: 'Какое значение x удовлетворяет неравенству 2x + 3 < 15?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '8',
      explanation: '2x + 3 < 15 означает 2x < 12, значит x < 6. Среди вариантов x = 4 и x = 5 подходят. Ответ B (5).',
    },
  },
  'ALG-E-008': {
    uz: {
      question_text: 'x ni toping: 5x - 15 = 0',
      choice_a: '-3',
      choice_b: '0',
      choice_c: '3',
      choice_d: '5',
      explanation: 'Ikkala tomonga 15 ni qo\'shamiz: 5x = 15. 5 ga bo\'lamiz: x = 3.',
    },
    ru: {
      question_text: 'Найдите x: 5x - 15 = 0',
      choice_a: '-3',
      choice_b: '0',
      choice_c: '3',
      choice_d: '5',
      explanation: 'Прибавим 15 к обеим частям: 5x = 15. Разделим на 5: x = 3.',
    },
  },
  'ALG-E-009': {
    uz: {
      question_text: 'g funksiyasi g(x) = 3x + 7 ko\'rinishida aniqlangan. x ning qaysi qiymatida g(x) = 22 bo\'ladi?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'g(x) = 22 deb olamiz: 3x + 7 = 22. 7 ni ayiramiz: 3x = 15. 3 ga bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Функция g определена как g(x) = 3x + 7. При каком значении x выполняется g(x) = 22?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Приравняем g(x) = 22: 3x + 7 = 22. Вычтем 7: 3x = 15. Разделим на 3: x = 5.',
    },
  },
  'ALG-E-010': {
    uz: {
      question_text: 'y = -3x + 8 tenglamasi bilan ifodalangan to\'g\'ri chiziqning burchak koeffitsienti nechaga teng?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '8',
      choice_d: '-8',
      explanation: 'Tenglama y = mx + b ko\'rinishida, bu yerda m — burchak koeffitsienti. Bu yerda m = -3.',
    },
    ru: {
      question_text: 'Каков угловой коэффициент прямой, заданной уравнением y = -3x + 8?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '8',
      choice_d: '-8',
      explanation: 'Уравнение записано в виде y = mx + b, где m — угловой коэффициент. Здесь m = -3.',
    },
  },
  'ALG-E-011': {
    uz: {
      question_text: 'x ni toping: 7x + 14 = 49',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Ikkala tomondan 14 ni ayiramiz: 7x = 35. 7 ga bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Найдите x: 7x + 14 = 49',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Вычтем 14 из обеих частей: 7x = 35. Разделим на 7: x = 5.',
    },
  },
  'ALG-E-012': {
    uz: {
      question_text: 'Agar 4x - 8 = 20 bo\'lsa, x ning qiymati nechaga teng?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Ikkala tomonga 8 ni qo\'shamiz: 4x = 28. 4 ga bo\'lamiz: x = 7.',
    },
    ru: {
      question_text: 'Если 4x - 8 = 20, чему равно значение x?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Прибавим 8 к обеим частям: 4x = 28. Разделим на 4: x = 7.',
    },
  },
  'ALG-E-013': {
    uz: {
      question_text: 'Agar h(x) = 5x - 10 bo\'lsa, h(4) nechaga teng?',
      choice_a: '5',
      choice_b: '10',
      choice_c: '15',
      choice_d: '20',
      explanation: 'x = 4 ni qo\'yamiz: h(4) = 5(4) - 10 = 20 - 10 = 10.',
    },
    ru: {
      question_text: 'Если h(x) = 5x - 10, чему равно h(4)?',
      choice_a: '5',
      choice_b: '10',
      choice_c: '15',
      choice_d: '20',
      explanation: 'Подставим x = 4: h(4) = 5(4) - 10 = 20 - 10 = 10.',
    },
  },
  'ALG-E-014': {
    uz: {
      question_text: 'To\'g\'ri chiziq koordinata boshidan o\'tadi va burchak koeffitsienti 4 ga teng. Bu chiziqning tenglamasi qanday?',
      choice_a: 'y = 4x',
      choice_b: 'y = x + 4',
      choice_c: 'y = 4x + 4',
      choice_d: 'y = x/4',
      explanation: 'Koordinata boshidan o\'tuvchi chiziqning y o\'qi bilan kesishish nuqtasi 0. Burchak koeffitsienti 4 bo\'lganda: y = 4x + 0 = 4x.',
    },
    ru: {
      question_text: 'Прямая проходит через начало координат с угловым коэффициентом 4. Каково уравнение этой прямой?',
      choice_a: 'y = 4x',
      choice_b: 'y = x + 4',
      choice_c: 'y = 4x + 4',
      choice_d: 'y = x/4',
      explanation: 'Прямая через начало координат имеет точку пересечения с осью y равную 0. При угловом коэффициенте 4: y = 4x + 0 = 4x.',
    },
  },
  'ALG-E-015': {
    uz: {
      question_text: '2x + 4y = 8 to\'g\'ri chiziqning x o\'qi bilan kesishish nuqtasi nechaga teng?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'y = 0 qo\'yamiz: 2x + 4(0) = 8, demak 2x = 8, va x = 4. X o\'qi bilan kesishish nuqtasi 4.',
    },
    ru: {
      question_text: 'Какова точка пересечения с осью x для прямой 2x + 4y = 8?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Подставим y = 0: 2x + 4(0) = 8, значит 2x = 8, и x = 4. Точка пересечения с осью x равна 4.',
    },
  },
  'ALG-E-016': {
    uz: {
      question_text: 'Qaysi nuqta y = 2x + 1 to\'g\'ri chiziqda yotadi?',
      choice_a: '(1, 2)',
      choice_b: '(2, 5)',
      choice_c: '(3, 6)',
      choice_d: '(0, 2)',
      explanation: '(2, 5) ni tekshiramiz: y = 2(2) + 1 = 5. Ha, bu nuqta tenglamani qanoatlantiradi.',
    },
    ru: {
      question_text: 'Какая точка лежит на прямой y = 2x + 1?',
      choice_a: '(1, 2)',
      choice_b: '(2, 5)',
      choice_c: '(3, 6)',
      choice_d: '(0, 2)',
      explanation: 'Проверим (2, 5): y = 2(2) + 1 = 5. Да, эта точка удовлетворяет уравнению.',
    },
  },
  'ALG-E-017': {
    uz: {
      question_text: 'Agar x - y = 5 va y = 3 bo\'lsa, x nechaga teng?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '8',
      choice_d: '15',
      explanation: 'y = 3 ni qo\'yamiz: x - 3 = 5, demak x = 8.',
    },
    ru: {
      question_text: 'Если x - y = 5 и y = 3, чему равно x?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '8',
      choice_d: '15',
      explanation: 'Подставим y = 3: x - 3 = 5, значит x = 8.',
    },
  },
  'ALG-E-018': {
    uz: {
      question_text: 'Agar 2x + y = 10 va x = 2 bo\'lsa, y nechaga teng?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'x = 2 ni qo\'yamiz: 2(2) + y = 10, demak 4 + y = 10, va y = 6.',
    },
    ru: {
      question_text: 'Если 2x + y = 10 и x = 2, чему равно y?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'Подставим x = 2: 2(2) + y = 10, значит 4 + y = 10, и y = 6.',
    },
  },
  'ALG-E-019': {
    uz: {
      question_text: 'x ning qaysi qiymati x + 5 > 8 tengsizlikni qanoatlanTIRMAYDI?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '5',
      choice_d: '10',
      explanation: 'x + 5 > 8 degani x > 3. x = 2 qiymati buni qanoatlantirmaydi, chunki 2 > 3 emas.',
    },
    ru: {
      question_text: 'Какое значение x НЕ удовлетворяет неравенству x + 5 > 8?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '5',
      choice_d: '10',
      explanation: 'x + 5 > 8 означает x > 3. Значение x = 2 не удовлетворяет, так как 2 не больше 3.',
    },
  },
  'ALG-E-020': {
    uz: {
      question_text: 'Yeching: 3x - 6 ≤ 9',
      choice_a: 'x ≤ 1',
      choice_b: 'x ≤ 3',
      choice_c: 'x ≤ 5',
      choice_d: 'x ≤ 15',
      explanation: 'Ikkala tomonga 6 ni qo\'shamiz: 3x ≤ 15. 3 ga bo\'lamiz: x ≤ 5.',
    },
    ru: {
      question_text: 'Решите: 3x - 6 ≤ 9',
      choice_a: 'x ≤ 1',
      choice_b: 'x ≤ 3',
      choice_c: 'x ≤ 5',
      choice_d: 'x ≤ 15',
      explanation: 'Прибавим 6 к обеим частям: 3x ≤ 15. Разделим на 3: x ≤ 5.',
    },
  },
  'ALG-E-021': {
    uz: {
      question_text: 'Agar x/3 = 12 bo\'lsa, x ning qiymati nechaga teng?',
      choice_a: '4',
      choice_b: '9',
      choice_c: '36',
      choice_d: '48',
      explanation: 'Ikkala tomonni 3 ga ko\'paytiramiz: x = 36.',
    },
    ru: {
      question_text: 'Если x/3 = 12, чему равно значение x?',
      choice_a: '4',
      choice_b: '9',
      choice_c: '36',
      choice_d: '48',
      explanation: 'Умножим обе части на 3: x = 36.',
    },
  },
  'ALG-E-022': {
    uz: {
      question_text: 'Agar f(x) = -2x + 8 bo\'lsa, f(0) nechaga teng?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '6',
      choice_d: '8',
      explanation: 'x = 0 ni qo\'yamiz: f(0) = -2(0) + 8 = 0 + 8 = 8.',
    },
    ru: {
      question_text: 'Если f(x) = -2x + 8, чему равно f(0)?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Подставим x = 0: f(0) = -2(0) + 8 = 0 + 8 = 8.',
    },
  },
  'ALG-E-023': {
    uz: {
      question_text: 'To\'g\'ri chiziqning burchak koeffitsienti 0 va u (3, 7) nuqtadan o\'tadi. Bu chiziqning tenglamasi qanday?',
      choice_a: 'x = 3',
      choice_b: 'y = 3',
      choice_c: 'x = 7',
      choice_d: 'y = 7',
      explanation: 'Burchak koeffitsienti 0 bo\'lgan chiziq gorizontal. U bir xil y qiymatli barcha nuqtalardan o\'tadi, shuning uchun y = 7.',
    },
    ru: {
      question_text: 'Прямая имеет угловой коэффициент 0 и проходит через точку (3, 7). Каково уравнение этой прямой?',
      choice_a: 'x = 3',
      choice_b: 'y = 3',
      choice_c: 'x = 7',
      choice_d: 'y = 7',
      explanation: 'Прямая с угловым коэффициентом 0 — горизонтальная. Она проходит через все точки с одинаковым значением y, поэтому y = 7.',
    },
  },
  'ALG-E-024': {
    uz: {
      question_text: 'Agar x + y = 12 va x - y = 4 bo\'lsa, x ning qiymati nechaga teng?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'Tenglamalarni qo\'shamiz: 2x = 16, demak x = 8.',
    },
    ru: {
      question_text: 'Если x + y = 12 и x - y = 4, чему равно значение x?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'Сложим уравнения: 2x = 16, значит x = 8.',
    },
  },
  'ALG-E-025': {
    uz: {
      question_text: 'Agar 5x > 25 bo\'lsa, quyidagilardan qaysi biri albatta to\'g\'ri?',
      choice_a: 'x > 4',
      choice_b: 'x > 5',
      choice_c: 'x > 6',
      choice_d: 'x > 25',
      explanation: 'Ikkala tomonni 5 ga bo\'lamiz: x > 5.',
    },
    ru: {
      question_text: 'Если 5x > 25, какое из следующих утверждений обязательно верно?',
      choice_a: 'x > 4',
      choice_b: 'x > 5',
      choice_c: 'x > 6',
      choice_d: 'x > 25',
      explanation: 'Разделим обе части на 5: x > 5.',
    },
  },
  'ALG-E-026': {
    uz: {
      question_text: 'x ni toping: 2x + 2x = 24',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: 'O\'xshash hadlarni birlashtiramiz: 4x = 24. 4 ga bo\'lamiz: x = 6.',
    },
    ru: {
      question_text: 'Найдите x: 2x + 2x = 24',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: 'Приведём подобные слагаемые: 4x = 24. Разделим на 4: x = 6.',
    },
  },
  'ALG-E-027': {
    uz: {
      question_text: 'g(x) = x + 9 funksiya. g(-3) nechaga teng?',
      choice_a: '-12',
      choice_b: '-3',
      choice_c: '6',
      choice_d: '12',
      explanation: 'x = -3 ni qo\'yamiz: g(-3) = -3 + 9 = 6.',
    },
    ru: {
      question_text: 'Функция g(x) = x + 9. Чему равно g(-3)?',
      choice_a: '-12',
      choice_b: '-3',
      choice_c: '6',
      choice_d: '12',
      explanation: 'Подставим x = -3: g(-3) = -3 + 9 = 6.',
    },
  },
  'ALG-E-028': {
    uz: {
      question_text: 'y = 7 to\'g\'ri chiziqning burchak koeffitsienti nechaga teng?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '7',
      choice_d: 'Aniqlanmagan',
      explanation: 'y = 7 gorizontal chiziq bo\'lib, uning burchak koeffitsienti 0 ga teng.',
    },
    ru: {
      question_text: 'Каков угловой коэффициент прямой y = 7?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '7',
      choice_d: 'Не определён',
      explanation: 'y = 7 — горизонтальная прямая, её угловой коэффициент равен 0.',
    },
  },
  'ALG-E-029': {
    uz: {
      question_text: 'Agar 3x + y = 15 va x = 4 bo\'lsa, y nechaga teng?',
      choice_a: '1',
      choice_b: '3',
      choice_c: '5',
      choice_d: '7',
      explanation: 'x = 4 ni qo\'yamiz: 3(4) + y = 15, demak 12 + y = 15, va y = 3.',
    },
    ru: {
      question_text: 'Если 3x + y = 15 и x = 4, чему равно y?',
      choice_a: '1',
      choice_b: '3',
      choice_c: '5',
      choice_d: '7',
      explanation: 'Подставим x = 4: 3(4) + y = 15, значит 12 + y = 15, и y = 3.',
    },
  },
  'ALG-E-030': {
    uz: {
      question_text: 'Qaysi qiymat x > 2 va x < 7 ikkala shartni ham qanoatlantiradi?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '5',
      choice_d: '8',
      explanation: 'Qo\'shma tengsizlik 2 < x < 7 ni x = 5 qanoatlantiradi.',
    },
    ru: {
      question_text: 'Какое значение удовлетворяет обоим условиям x > 2 и x < 7?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '5',
      choice_d: '8',
      explanation: 'Составное неравенство 2 < x < 7 удовлетворяется при x = 5.',
    },
  },
  'ALG-E-031': {
    uz: {
      question_text: 'y ni toping: 6y - 12 = 30',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Ikkala tomonga 12 ni qo\'shamiz: 6y = 42. 6 ga bo\'lamiz: y = 7.',
    },
    ru: {
      question_text: 'Найдите y: 6y - 12 = 30',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Прибавим 12 к обеим частям: 6y = 42. Разделим на 6: y = 7.',
    },
  },
  'ALG-E-032': {
    uz: {
      question_text: 'Agar 8x = 56 bo\'lsa, x nechaga teng?',
      choice_a: '6',
      choice_b: '7',
      choice_c: '8',
      choice_d: '9',
      explanation: 'Ikkala tomonni 8 ga bo\'lamiz: x = 56 ÷ 8 = 7.',
    },
    ru: {
      question_text: 'Если 8x = 56, чему равно x?',
      choice_a: '6',
      choice_b: '7',
      choice_c: '8',
      choice_d: '9',
      explanation: 'Разделим обе части на 8: x = 56 ÷ 8 = 7.',
    },
  },
  'ALG-E-033': {
    uz: {
      question_text: 'Agar f(x) = 6x - 2 bo\'lsa, f(3) nechaga teng?',
      choice_a: '14',
      choice_b: '16',
      choice_c: '18',
      choice_d: '20',
      explanation: 'x = 3 ni qo\'yamiz: f(3) = 6(3) - 2 = 18 - 2 = 16.',
    },
    ru: {
      question_text: 'Если f(x) = 6x - 2, чему равно f(3)?',
      choice_a: '14',
      choice_b: '16',
      choice_c: '18',
      choice_d: '20',
      explanation: 'Подставим x = 3: f(3) = 6(3) - 2 = 18 - 2 = 16.',
    },
  },
  'ALG-E-034': {
    uz: {
      question_text: 'To\'g\'ri chiziqning burchak koeffitsienti -1, y o\'qi bilan kesishish nuqtasi 4. Uning tenglamasi qanday?',
      choice_a: 'y = x + 4',
      choice_b: 'y = -x + 4',
      choice_c: 'y = -x - 4',
      choice_d: 'y = 4x - 1',
      explanation: 'y = mx + b formulasida m = -1 va b = 4 bo\'lganda: y = -x + 4.',
    },
    ru: {
      question_text: 'Прямая имеет угловой коэффициент -1 и точку пересечения с осью y равную 4. Каково её уравнение?',
      choice_a: 'y = x + 4',
      choice_b: 'y = -x + 4',
      choice_c: 'y = -x - 4',
      choice_d: 'y = 4x - 1',
      explanation: 'Используя формулу y = mx + b с m = -1 и b = 4: y = -x + 4.',
    },
  },
  'ALG-E-035': {
    uz: {
      question_text: '5x + y = 10 to\'g\'ri chiziqning y o\'qi bilan kesishish nuqtasi nechaga teng?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '10',
      choice_d: '15',
      explanation: 'x = 0 qo\'yamiz: 5(0) + y = 10, demak y = 10. Y o\'qi bilan kesishish nuqtasi 10.',
    },
    ru: {
      question_text: 'Какова точка пересечения с осью y для прямой 5x + y = 10?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '10',
      choice_d: '15',
      explanation: 'Подставим x = 0: 5(0) + y = 10, значит y = 10. Точка пересечения с осью y равна 10.',
    },
  },
  'ALG-E-036': {
    uz: {
      question_text: 'Qaysi nuqta y = 3x - 2 to\'g\'ri chiziqda yotadi?',
      choice_a: '(1, 0)',
      choice_b: '(1, 1)',
      choice_c: '(2, 3)',
      choice_d: '(2, 4)',
      explanation: '(2, 4) ni tekshiramiz: y = 3(2) - 2 = 6 - 2 = 4. Ha, (2, 4) chiziqda yotadi.',
    },
    ru: {
      question_text: 'Какая точка лежит на прямой y = 3x - 2?',
      choice_a: '(1, 0)',
      choice_b: '(1, 1)',
      choice_c: '(2, 3)',
      choice_d: '(2, 4)',
      explanation: 'Проверим (2, 4): y = 3(2) - 2 = 6 - 2 = 4. Да, (2, 4) лежит на прямой.',
    },
  },
  'ALG-E-037': {
    uz: {
      question_text: 'Agar x + y = 15 va y = 7 bo\'lsa, x nechaga teng?',
      choice_a: '6',
      choice_b: '7',
      choice_c: '8',
      choice_d: '9',
      explanation: 'y = 7 ni qo\'yamiz: x + 7 = 15, demak x = 8.',
    },
    ru: {
      question_text: 'Если x + y = 15 и y = 7, чему равно x?',
      choice_a: '6',
      choice_b: '7',
      choice_c: '8',
      choice_d: '9',
      explanation: 'Подставим y = 7: x + 7 = 15, значит x = 8.',
    },
  },
  'ALG-E-038': {
    uz: {
      question_text: 'Agar 2x + y = 14 va x = 3 bo\'lsa, y nechaga teng?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '11',
      explanation: 'x = 3 ni qo\'yamiz: 2(3) + y = 14, demak 6 + y = 14, va y = 8.',
    },
    ru: {
      question_text: 'Если 2x + y = 14 и x = 3, чему равно y?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '11',
      explanation: 'Подставим x = 3: 2(3) + y = 14, значит 6 + y = 14, и y = 8.',
    },
  },
  'ALG-E-039': {
    uz: {
      question_text: 'x ning qaysi qiymati x + 8 > 12 tengsizlikni qanoatlantiradi?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'x + 8 > 12 degani x > 4. Faqat x = 5 bu tengsizlikni qanoatlantiradi.',
    },
    ru: {
      question_text: 'Какое значение x удовлетворяет неравенству x + 8 > 12?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'x + 8 > 12 означает x > 4. Только x = 5 удовлетворяет этому неравенству.',
    },
  },
  'ALG-E-040': {
    uz: {
      question_text: 'Yeching: 4x ≤ 24',
      choice_a: 'x ≤ 4',
      choice_b: 'x ≤ 6',
      choice_c: 'x ≤ 8',
      choice_d: 'x ≤ 20',
      explanation: 'Ikkala tomonni 4 ga bo\'lamiz: x ≤ 6.',
    },
    ru: {
      question_text: 'Решите: 4x ≤ 24',
      choice_a: 'x ≤ 4',
      choice_b: 'x ≤ 6',
      choice_c: 'x ≤ 8',
      choice_d: 'x ≤ 20',
      explanation: 'Разделим обе части на 4: x ≤ 6.',
    },
  },
  'ALG-E-041': {
    uz: {
      question_text: 'x ni toping: x/5 = 9',
      choice_a: '14',
      choice_b: '35',
      choice_c: '45',
      choice_d: '54',
      explanation: 'Ikkala tomonni 5 ga ko\'paytiramiz: x = 45.',
    },
    ru: {
      question_text: 'Найдите x: x/5 = 9',
      choice_a: '14',
      choice_b: '35',
      choice_c: '45',
      choice_d: '54',
      explanation: 'Умножим обе части на 5: x = 45.',
    },
  },
  'ALG-E-042': {
    uz: {
      question_text: 'Agar g(x) = x - 7 bo\'lsa, g(10) nechaga teng?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '7',
      choice_d: '17',
      explanation: 'x = 10 ni qo\'yamiz: g(10) = 10 - 7 = 3.',
    },
    ru: {
      question_text: 'Если g(x) = x - 7, чему равно g(10)?',
      choice_a: '-3',
      choice_b: '3',
      choice_c: '7',
      choice_d: '17',
      explanation: 'Подставим x = 10: g(10) = 10 - 7 = 3.',
    },
  },
  'ALG-E-043': {
    uz: {
      question_text: 'x = 5 to\'g\'ri chiziqning burchak koeffitsienti nechaga teng?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '5',
      choice_d: 'Aniqlanmagan',
      explanation: 'x = 5 vertikal chiziq. Vertikal chiziqlarning burchak koeffitsienti aniqlanmagan.',
    },
    ru: {
      question_text: 'Каков угловой коэффициент прямой x = 5?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '5',
      choice_d: 'Не определён',
      explanation: 'x = 5 — вертикальная прямая. Угловой коэффициент вертикальной прямой не определён.',
    },
  },
  'ALG-E-044': {
    uz: {
      question_text: 'Agar x - y = 3 va y = 2 bo\'lsa, x nechaga teng?',
      choice_a: '1',
      choice_b: '3',
      choice_c: '5',
      choice_d: '6',
      explanation: 'y = 2 ni qo\'yamiz: x - 2 = 3, demak x = 5.',
    },
    ru: {
      question_text: 'Если x - y = 3 и y = 2, чему равно x?',
      choice_a: '1',
      choice_b: '3',
      choice_c: '5',
      choice_d: '6',
      explanation: 'Подставим y = 2: x - 2 = 3, значит x = 5.',
    },
  },
  'ALG-E-045': {
    uz: {
      question_text: 'Qaysi qiymat 2x < 14 tengsizlikni qanoatlanTIRMAYDI?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '6',
      choice_d: '8',
      explanation: '2x < 14 degani x < 7. x = 8 qiymati buni qanoatlantirmaydi.',
    },
    ru: {
      question_text: 'Какое значение НЕ удовлетворяет неравенству 2x < 14?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '6',
      choice_d: '8',
      explanation: '2x < 14 означает x < 7. Значение x = 8 не удовлетворяет этому неравенству.',
    },
  },
  'ALG-E-046': {
    uz: {
      question_text: 'Agar 3x + 6 = 21 bo\'lsa, x + 2 ning qiymati nechaga teng?',
      choice_a: '5',
      choice_b: '7',
      choice_c: '9',
      choice_d: '15',
      explanation: 'E\'tibor bering: 3x + 6 = 3(x + 2) = 21, demak x + 2 = 7.',
    },
    ru: {
      question_text: 'Если 3x + 6 = 21, чему равно значение x + 2?',
      choice_a: '5',
      choice_b: '7',
      choice_c: '9',
      choice_d: '15',
      explanation: 'Заметим, что 3x + 6 = 3(x + 2) = 21, значит x + 2 = 7.',
    },
  },
  'ALG-E-047': {
    uz: {
      question_text: 'h(x) = 2x + 1 funksiya. x ning qaysi qiymatida h(x) = 9 bo\'ladi?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'h(x) = 9 deb olamiz: 2x + 1 = 9. 1 ni ayiramiz: 2x = 8. 2 ga bo\'lamiz: x = 4.',
    },
    ru: {
      question_text: 'Функция h(x) = 2x + 1. При каком значении x выполняется h(x) = 9?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'Приравняем h(x) = 9: 2x + 1 = 9. Вычтем 1: 2x = 8. Разделим на 2: x = 4.',
    },
  },
  'ALG-E-048': {
    uz: {
      question_text: 'y = 4x + 3 to\'g\'ri chizig\'i qaysi nuqtadan o\'tadi?',
      choice_a: '(0, 4)',
      choice_b: '(1, 6)',
      choice_c: '(1, 7)',
      choice_d: '(2, 10)',
      explanation: '(1, 7) ni tekshiramiz: y = 4(1) + 3 = 7. Ha, (1, 7) chiziqda yotadi.',
    },
    ru: {
      question_text: 'Через какую точку проходит прямая y = 4x + 3?',
      choice_a: '(0, 4)',
      choice_b: '(1, 6)',
      choice_c: '(1, 7)',
      choice_d: '(2, 10)',
      explanation: 'Проверим (1, 7): y = 4(1) + 3 = 7. Да, (1, 7) лежит на прямой.',
    },
  },
  'ALG-E-049': {
    uz: {
      question_text: 'Agar x + 2y = 10 va y = 3 bo\'lsa, x nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'y = 3 ni qo\'yamiz: x + 2(3) = 10, demak x + 6 = 10, va x = 4.',
    },
    ru: {
      question_text: 'Если x + 2y = 10 и y = 3, чему равно x?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'Подставим y = 3: x + 2(3) = 10, значит x + 6 = 10, и x = 4.',
    },
  },
  'ALG-E-050': {
    uz: {
      question_text: 'Agar x - 3 ≥ 5 bo\'lsa, x ning eng kichik butun son qiymati nechaga teng?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'x - 3 ≥ 5 degani x ≥ 8. Eng kichik butun son 8.',
    },
    ru: {
      question_text: 'Если x - 3 ≥ 5, каково наименьшее целое значение x?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'x - 3 ≥ 5 означает x ≥ 8. Наименьшее целое число — 8.',
    },
  },
  'ALG-E-051': {
    uz: {
      question_text: 'Yeching: 9 - x = 4',
      choice_a: '-5',
      choice_b: '4',
      choice_c: '5',
      choice_d: '13',
      explanation: 'Ikkala tomondan 9 ni ayiramiz: -x = -5. -1 ga ko\'paytiramiz: x = 5.',
    },
    ru: {
      question_text: 'Решите: 9 - x = 4',
      choice_a: '-5',
      choice_b: '4',
      choice_c: '5',
      choice_d: '13',
      explanation: 'Вычтем 9 из обеих частей: -x = -5. Умножим на -1: x = 5.',
    },
  },
  'ALG-E-052': {
    uz: {
      question_text: 'Agar f(x) = -3x + 12 bo\'lsa, f(4) nechaga teng?',
      choice_a: '-24',
      choice_b: '0',
      choice_c: '12',
      choice_d: '24',
      explanation: 'x = 4 ni qo\'yamiz: f(4) = -3(4) + 12 = -12 + 12 = 0.',
    },
    ru: {
      question_text: 'Если f(x) = -3x + 12, чему равно f(4)?',
      choice_a: '-24',
      choice_b: '0',
      choice_c: '12',
      choice_d: '24',
      explanation: 'Подставим x = 4: f(4) = -3(4) + 12 = -12 + 12 = 0.',
    },
  },
  'ALG-E-053': {
    uz: {
      question_text: 'y = 3x - 9 to\'g\'ri chiziqning x o\'qi bilan kesishish nuqtasi nechaga teng?',
      choice_a: '-9',
      choice_b: '-3',
      choice_c: '3',
      choice_d: '9',
      explanation: 'y = 0 qo\'yamiz: 0 = 3x - 9, demak 3x = 9, va x = 3. X o\'qi bilan kesishish nuqtasi 3.',
    },
    ru: {
      question_text: 'Какова точка пересечения с осью x для прямой y = 3x - 9?',
      choice_a: '-9',
      choice_b: '-3',
      choice_c: '3',
      choice_d: '9',
      explanation: 'Подставим y = 0: 0 = 3x - 9, значит 3x = 9, и x = 3. Точка пересечения с осью x равна 3.',
    },
  },
  'ALG-E-054': {
    uz: {
      question_text: 'Agar 3x + y = 21 va x = 6 bo\'lsa, y nechaga teng?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'x = 6 ni qo\'yamiz: 3(6) + y = 21, demak 18 + y = 21, va y = 3.',
    },
    ru: {
      question_text: 'Если 3x + y = 21 и x = 6, чему равно y?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Подставим x = 6: 3(6) + y = 21, значит 18 + y = 21, и y = 3.',
    },
  },
  'ALG-E-055': {
    uz: {
      question_text: 'Yeching: 6x + 6 > 24',
      choice_a: 'x > 2',
      choice_b: 'x > 3',
      choice_c: 'x > 4',
      choice_d: 'x > 5',
      explanation: '6 ni ayiramiz: 6x > 18. 6 ga bo\'lamiz: x > 3.',
    },
    ru: {
      question_text: 'Решите: 6x + 6 > 24',
      choice_a: 'x > 2',
      choice_b: 'x > 3',
      choice_c: 'x > 4',
      choice_d: 'x > 5',
      explanation: 'Вычтем 6: 6x > 18. Разделим на 6: x > 3.',
    },
  },
  'ALG-E-056': {
    uz: {
      question_text: 'Agar 2(x + 5) = 18 bo\'lsa, x nechaga teng?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: '2 ga bo\'lamiz: x + 5 = 9. 5 ni ayiramiz: x = 4.',
    },
    ru: {
      question_text: 'Если 2(x + 5) = 18, чему равно x?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Разделим на 2: x + 5 = 9. Вычтем 5: x = 4.',
    },
  },
  'ALG-E-057': {
    uz: {
      question_text: 'f funksiyasi f(x) = 7x ko\'rinishida aniqlangan. f(0) + f(1) nechaga teng?',
      choice_a: '0',
      choice_b: '7',
      choice_c: '8',
      choice_d: '14',
      explanation: 'f(0) = 7(0) = 0. f(1) = 7(1) = 7. Yig\'indisi = 0 + 7 = 7.',
    },
    ru: {
      question_text: 'Функция f определена как f(x) = 7x. Чему равно f(0) + f(1)?',
      choice_a: '0',
      choice_b: '7',
      choice_c: '8',
      choice_d: '14',
      explanation: 'f(0) = 7(0) = 0. f(1) = 7(1) = 7. Сумма = 0 + 7 = 7.',
    },
  },
  'ALG-E-058': {
    uz: {
      question_text: 'Ikki to\'g\'ri chiziqning burchak koeffitsientlari teng, lekin y o\'qi bilan kesishish nuqtalari farqli. Bu chiziqlar:',
      choice_a: 'Perpendikulyar',
      choice_b: 'Parallel',
      choice_c: 'Bitta nuqtada kesishadi',
      choice_d: 'Bir xil chiziq',
      explanation: 'Burchak koeffitsientlari teng, lekin y o\'qi bilan kesishish nuqtalari farqli bo\'lgan chiziqlar hech qachon kesishmaydi; ular parallel.',
    },
    ru: {
      question_text: 'Две прямые имеют одинаковый угловой коэффициент, но разные точки пересечения с осью y. Эти прямые:',
      choice_a: 'Перпендикулярны',
      choice_b: 'Параллельны',
      choice_c: 'Пересекаются в одной точке',
      choice_d: 'Совпадают',
      explanation: 'Прямые с одинаковыми угловыми коэффициентами, но разными точками пересечения с осью y, никогда не пересекаются — они параллельны.',
    },
  },
  'ALG-E-059': {
    uz: {
      question_text: 'Agar x + y = 8 va x = y bo\'lsa, y nechaga teng?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Agar x = y bo\'lsa, y + y = 8, demak 2y = 8, va y = 4.',
    },
    ru: {
      question_text: 'Если x + y = 8 и x = y, чему равно y?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Если x = y, то y + y = 8, значит 2y = 8, и y = 4.',
    },
  },
  'ALG-E-060': {
    uz: {
      question_text: 'Qaysi oraliq 3 ≤ x < 8 ni ifodalaydi?',
      choice_a: '(3, 8)',
      choice_b: '[3, 8)',
      choice_c: '(3, 8]',
      choice_d: '[3, 8]',
      explanation: '3 ≤ x degani x 3 ni o\'z ichiga oladi (yopiq qavs [). x < 8 degani x 8 ni o\'z ichiga olmaydi (ochiq qavs )). Demak [3, 8).',
    },
    ru: {
      question_text: 'Какой интервал представляет 3 ≤ x < 8?',
      choice_a: '(3, 8)',
      choice_b: '[3, 8)',
      choice_c: '(3, 8]',
      choice_d: '[3, 8]',
      explanation: '3 ≤ x означает, что x включает 3 (закрытая скобка [). x < 8 означает, что x не включает 8 (открытая скобка )). Значит [3, 8).',
    },
  },
  'ALG-M-001': {
    uz: {
      question_text: 'Agar 4(2x - 3) - 2(x + 4) = 10 bo\'lsa, x ning qiymati nechaga teng?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'Qavslarni ochamiz: 8x - 12 - 2x - 8 = 10. Birlashtirамiz: 6x - 20 = 10. 20 ni qo\'shamiz: 6x = 30. Bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Если 4(2x - 3) - 2(x + 4) = 10, чему равно значение x?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'Раскроем скобки: 8x - 12 - 2x - 8 = 10. Упростим: 6x - 20 = 10. Прибавим 20: 6x = 30. Разделим: x = 5.',
    },
  },
  'ALG-M-002': {
    uz: {
      question_text: 'f funksiyasi f(x) = 2x + 5 ko\'rinishida aniqlangan. g funksiyasi g(x) = f(x - 3) ko\'rinishida aniqlangan. g ni qaysi ifoda aniqlaydi?',
      choice_a: 'g(x) = 2x + 2',
      choice_b: 'g(x) = 2x - 1',
      choice_c: 'g(x) = 2x + 8',
      choice_d: 'g(x) = 2x + 11',
      explanation: 'g(x) = f(x - 3) = 2(x - 3) + 5 = 2x - 6 + 5 = 2x - 1.',
    },
    ru: {
      question_text: 'Функция f определена как f(x) = 2x + 5. Функция g определена как g(x) = f(x - 3). Какое из следующих выражений задаёт g?',
      choice_a: 'g(x) = 2x + 2',
      choice_b: 'g(x) = 2x - 1',
      choice_c: 'g(x) = 2x + 8',
      choice_d: 'g(x) = 2x + 11',
      explanation: 'g(x) = f(x - 3) = 2(x - 3) + 5 = 2x - 6 + 5 = 2x - 1.',
    },
  },
  'ALG-M-003': {
    uz: {
      question_text: 'p to\'g\'ri chizig\'i (2, 5) va (6, 13) nuqtalardan o\'tadi. p to\'g\'ri chiziqning burchak koeffitsienti nechaga teng?',
      choice_a: '1/2',
      choice_b: '2',
      choice_c: '4',
      choice_d: '8',
      explanation: 'Burchak koeffitsienti = (y₂ - y₁)/(x₂ - x₁) = (13 - 5)/(6 - 2) = 8/4 = 2.',
    },
    ru: {
      question_text: 'Прямая p проходит через точки (2, 5) и (6, 13). Каков угловой коэффициент прямой p?',
      choice_a: '1/2',
      choice_b: '2',
      choice_c: '4',
      choice_d: '8',
      explanation: 'Угловой коэффициент = (y₂ - y₁)/(x₂ - x₁) = (13 - 5)/(6 - 2) = 8/4 = 2.',
    },
  },
  'ALG-M-004': {
    uz: {
      question_text: 'Agar 2x + 3y = 13 va x - y = 1 bo\'lsa, x ning qiymati nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '3.2',
      choice_d: '4',
      explanation: 'x - y = 1 dan x = y + 1. Qo\'yamiz: 2(y + 1) + 3y = 13 → 5y = 11 → y = 2.2. Demak x = 3.2.',
    },
    ru: {
      question_text: 'Если 2x + 3y = 13 и x - y = 1, чему равно значение x?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '3.2',
      choice_d: '4',
      explanation: 'Из x - y = 1 получаем x = y + 1. Подставим: 2(y + 1) + 3y = 13 → 5y = 11 → y = 2.2. Значит x = 3.2.',
    },
  },
  'ALG-M-005': {
    uz: {
      question_text: '3x + 2y = 12 va 6x + 4y = 24 tenglamalar sistemasining nechta yechimi bor?',
      choice_a: 'Nol',
      choice_b: 'Aniq bitta',
      choice_c: 'Aniq ikkita',
      choice_d: 'Cheksiz ko\'p',
      explanation: 'Ikkinchi tenglama birinchining 2 baravar ko\'paytmasi (6x + 4y = 2(3x + 2y) = 24). Ular bir xil to\'g\'ri chiziqni ifodalaydi, shuning uchun cheksiz ko\'p yechim mavjud.',
    },
    ru: {
      question_text: 'Сколько решений имеет система уравнений 3x + 2y = 12 и 6x + 4y = 24?',
      choice_a: 'Ноль',
      choice_b: 'Ровно одно',
      choice_c: 'Ровно два',
      choice_d: 'Бесконечно много',
      explanation: 'Второе уравнение — это ровно 2-кратное первого. Они задают одну и ту же прямую, поэтому имеется бесконечно много решений.',
    },
  },
  'ALG-M-006': {
    uz: {
      question_text: 'Do\'kon daftarlarni 3 dollar va ruchkalarni 2 dollardan sotadi. Alexda 20 dollar bor va u kamida 2 ta daftar sotib olishi kerak. p ta ruchka olish mumkinligini qaysi tengsizlik ifodalaydi?',
      choice_a: '3(2) + 2p ≤ 20',
      choice_b: '2(3) + 2p ≥ 20',
      choice_c: '3 + 2p ≤ 20',
      choice_d: '6 + 2p > 20',
      explanation: 'Alex kamida 3(2) = 6 dollar daftar uchun sarflashi kerak. Jami xarajat 6 + 2p ≤ 20 bo\'lishi kerak.',
    },
    ru: {
      question_text: 'Магазин продаёт тетради по $3 и ручки по $2. У Алекса есть $20, и он должен купить не менее 2 тетрадей. Какое неравенство отражает количество ручек p, которые он может купить?',
      choice_a: '3(2) + 2p ≤ 20',
      choice_b: '2(3) + 2p ≥ 20',
      choice_c: '3 + 2p ≤ 20',
      choice_d: '6 + 2p > 20',
      explanation: 'Алекс должен потратить не менее 3(2) = $6 на тетради. Итоговая сумма 6 + 2p ≤ 20.',
    },
  },
  'ALG-M-007': {
    uz: {
      question_text: '3(x + 2) = k(x + 2) tenglamasi cheksiz ko\'p yechimga ega. k ning qiymati nechaga teng?',
      choice_a: '-3',
      choice_b: '0',
      choice_c: '2',
      choice_d: '3',
      explanation: 'Cheksiz ko\'p yechim bo\'lishi uchun ikkala tomon bir xil bo\'lishi kerak. 3(x + 2) = k(x + 2) da k = 3 bo\'lishi talab etiladi.',
    },
    ru: {
      question_text: 'Уравнение 3(x + 2) = k(x + 2) имеет бесконечно много решений. Чему равно k?',
      choice_a: '-3',
      choice_b: '0',
      choice_c: '2',
      choice_d: '3',
      explanation: 'Для бесконечно многих решений обе части должны быть одинаковыми. В 3(x + 2) = k(x + 2) необходимо k = 3.',
    },
  },
  'ALG-M-008': {
    uz: {
      question_text: 'Taksi belgilangan narx 3 dollar va har kilometr uchun 2.50 dollar oladi. m km uchun jami narx C ni qaysi funksiya ifodalaydi?',
      choice_a: 'C(m) = 3m + 2.50',
      choice_b: 'C(m) = 2.50m + 3',
      choice_c: 'C(m) = 5.50m',
      choice_d: 'C(m) = 3(m + 2.50)',
      explanation: 'Jami narx = belgilangan narx + (km narxi × km soni) = 3 + 2.50m = 2.50m + 3.',
    },
    ru: {
      question_text: 'Такси берёт фиксированную плату $3 плюс $2,50 за каждый километр. Какая функция представляет полную стоимость C за m километров?',
      choice_a: 'C(m) = 3m + 2.50',
      choice_b: 'C(m) = 2.50m + 3',
      choice_c: 'C(m) = 5.50m',
      choice_d: 'C(m) = 3(m + 2.50)',
      explanation: 'Полная стоимость = фиксированная плата + (стоимость за км × км) = 3 + 2.50m = 2.50m + 3.',
    },
  },
  'ALG-M-009': {
    uz: {
      question_text: 'Quyidagi to\'g\'ri chiziqlardan qaysi biri y = 2x + 5 ga perpendikulyar?',
      choice_a: 'y = 2x - 3',
      choice_b: 'y = -2x + 1',
      choice_c: 'y = -1/2x + 4',
      choice_d: 'y = 1/2x - 2',
      explanation: 'Perpendikulyar chiziqlarning burchak koeffitsientlari bir-biriga teskari va belgisi qarama-qarshi bo\'ladi. y = 2x + 5 ning burchak koeffitsienti 2. Teskari qiymat -1/2. Demak y = -1/2x + 4 perpendikulyar.',
    },
    ru: {
      question_text: 'Какая из следующих прямых перпендикулярна к y = 2x + 5?',
      choice_a: 'y = 2x - 3',
      choice_b: 'y = -2x + 1',
      choice_c: 'y = -1/2x + 4',
      choice_d: 'y = 1/2x - 2',
      explanation: 'Угловые коэффициенты перпендикулярных прямых — обратно противоположные. Угловой коэффициент y = 2x + 5 равен 2. Обратный — -1/2. Значит y = -1/2x + 4 перпендикулярна.',
    },
  },
  'ALG-M-010': {
    uz: {
      question_text: 'Qaysi nuqta y > 2x - 3 yechimlar to\'plamida?',
      choice_a: '(0, -3)',
      choice_b: '(2, 1)',
      choice_c: '(1, 0)',
      choice_d: '(3, 3)',
      explanation: '(1, 0) ni tekshiramiz: 0 > 2(1) - 3 = -1? Ha, 0 > -1 to\'g\'ri.',
    },
    ru: {
      question_text: 'Какая точка входит в область решений y > 2x - 3?',
      choice_a: '(0, -3)',
      choice_b: '(2, 1)',
      choice_c: '(1, 0)',
      choice_d: '(3, 3)',
      explanation: 'Проверим (1, 0): 0 > 2(1) - 3 = -1? Да, 0 > -1 верно.',
    },
  },
  'ALG-M-011': {
    uz: {
      question_text: 'Agar (2x + 5)/3 = 7 bo\'lsa, x ning qiymati nechaga teng?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '12',
      explanation: 'Ikkala tomonni 3 ga ko\'paytiramiz: 2x + 5 = 21. 5 ni ayiramiz: 2x = 16. 2 ga bo\'lamiz: x = 8.',
    },
    ru: {
      question_text: 'Если (2x + 5)/3 = 7, чему равно значение x?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '12',
      explanation: 'Умножим обе части на 3: 2x + 5 = 21. Вычтем 5: 2x = 16. Разделим на 2: x = 8.',
    },
  },
  'ALG-M-012': {
    uz: {
      question_text: 'Yeching: 5(x - 2) + 3 = 2(x + 4)',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Qavslarni ochamiz: 5x - 10 + 3 = 2x + 8. Soddalashtirамiz: 5x - 7 = 2x + 8. 2x ni ayiramiz: 3x = 15. Bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Решите: 5(x - 2) + 3 = 2(x + 4)',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Раскроем скобки: 5x - 10 + 3 = 2x + 8. Упростим: 5x - 7 = 2x + 8. Вычтем 2x: 3x = 15. Разделим: x = 5.',
    },
  },
  'ALG-M-013': {
    uz: {
      question_text: 'Telefon tarixi oyiga 25 dollar va har bir xabar uchun 0.10 dollar. Agar abonent 150 ta xabar yuborsa, oylik to\'lov qancha?',
      choice_a: '$30',
      choice_b: '$35',
      choice_c: '$40',
      choice_d: '$45',
      explanation: 'Narx = 25 + 0.10(150) = 25 + 15 = $40.',
    },
    ru: {
      question_text: 'Тарифный план телефона взимает $25 в месяц плюс $0,10 за каждое SMS. Если клиент отправил 150 SMS, какова ежемесячная стоимость?',
      choice_a: '$30',
      choice_b: '$35',
      choice_c: '$40',
      choice_d: '$45',
      explanation: 'Стоимость = 25 + 0.10(150) = 25 + 15 = $40.',
    },
  },
  'ALG-M-014': {
    uz: {
      question_text: 'Agar f(x) = 3x - 4 va f(a) = 11 bo\'lsa, a ning qiymati nechaga teng?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '7',
      explanation: 'f(a) = 11 deb olamiz: 3a - 4 = 11. 4 ni qo\'shamiz: 3a = 15. Bo\'lamiz: a = 5.',
    },
    ru: {
      question_text: 'Если f(x) = 3x - 4 и f(a) = 11, чему равно значение a?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '7',
      explanation: 'Приравняем f(a) = 11: 3a - 4 = 11. Прибавим 4: 3a = 15. Разделим: a = 5.',
    },
  },
  'ALG-M-015': {
    uz: {
      question_text: 'Burchak koeffitsienti -3 va (2, 4) nuqtadan o\'tuvchi to\'g\'ri chiziq tenglamasini toping.',
      choice_a: 'y = -3x + 10',
      choice_b: 'y = -3x + 4',
      choice_c: 'y = -3x - 2',
      choice_d: 'y = -3x + 2',
      explanation: 'Nuqta-burchak koeffitsienti formulasi: y - 4 = -3(x - 2). Qavsni ochamiz: y - 4 = -3x + 6. 4 ni qo\'shamiz: y = -3x + 10.',
    },
    ru: {
      question_text: 'Найдите уравнение прямой с угловым коэффициентом -3, проходящей через точку (2, 4).',
      choice_a: 'y = -3x + 10',
      choice_b: 'y = -3x + 4',
      choice_c: 'y = -3x - 2',
      choice_d: 'y = -3x + 2',
      explanation: 'Используем формулу y - y₁ = m(x - x₁): y - 4 = -3(x - 2). Раскроем: y - 4 = -3x + 6. Прибавим 4: y = -3x + 10.',
    },
  },
  'ALG-M-016': {
    uz: {
      question_text: 'y = 3x + 2 va y = 3x - 5 to\'g\'ri chiziqlari:',
      choice_a: 'Parallel',
      choice_b: 'Perpendikulyar',
      choice_c: 'Bitta nuqtada kesishadi',
      choice_d: 'Bir xil chiziq',
      explanation: 'Ikkala chiziqning burchak koeffitsienti 3, lekin y o\'qi bilan kesishish nuqtalari farqli. Teng burchak koeffitsientli chiziqlar parallel.',
    },
    ru: {
      question_text: 'Прямые y = 3x + 2 и y = 3x - 5:',
      choice_a: 'Параллельны',
      choice_b: 'Перпендикулярны',
      choice_c: 'Пересекаются в одной точке',
      choice_d: 'Совпадают',
      explanation: 'Обе прямые имеют угловой коэффициент 3, но разные точки пересечения с осью y. Прямые с одинаковыми угловыми коэффициентами параллельны.',
    },
  },
  'ALG-M-017': {
    uz: {
      question_text: 'Sistemani yeching: x + 2y = 8 va 3x - 2y = 8. y nechaga teng?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Tenglamalarni qo\'shamiz: 4x = 16, demak x = 4. x + 2y = 8 ga qo\'yamiz: 4 + 2y = 8, demak y = 2.',
    },
    ru: {
      question_text: 'Решите систему: x + 2y = 8 и 3x - 2y = 8. Чему равно y?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Сложим уравнения: 4x = 16, значит x = 4. Подставим в x + 2y = 8: 4 + 2y = 8, значит y = 2.',
    },
  },
  'ALG-M-018': {
    uz: {
      question_text: '2x + y = 5 va 4x + 2y = 7 sistemasining nechta yechimi bor?',
      choice_a: 'Nol',
      choice_b: 'Aniq bitta',
      choice_c: 'Aniq ikkita',
      choice_d: 'Cheksiz ko\'p',
      explanation: 'Birinchi tenglamani 2 ga ko\'paytiramiz: 4x + 2y = 10. Bu 4x + 2y = 7 ga zid (10 ≠ 7). Chiziqlar parallel, kesishish nuqtasi yo\'q, shuning uchun yechim yo\'q.',
    },
    ru: {
      question_text: 'Сколько решений имеет система 2x + y = 5 и 4x + 2y = 7?',
      choice_a: 'Ноль',
      choice_b: 'Ровно одно',
      choice_c: 'Ровно два',
      choice_d: 'Бесконечно много',
      explanation: 'Умножим первое уравнение на 2: 4x + 2y = 10. Это противоречит 4x + 2y = 7. Прямые параллельны, решений нет.',
    },
  },
  'ALG-M-019': {
    uz: {
      question_text: 'n soni boshqa m sonning ikki baravariga qaraganda kamida 5 ga kichik. Bu qaysi tengsizlik bilan ifodalanadi?',
      choice_a: 'n ≤ 2m - 5',
      choice_b: 'n ≥ 2m - 5',
      choice_c: 'n < 2m - 5',
      choice_d: 'n > 2m - 5',
      explanation: '\'Kamida\' degani katta yoki teng. n ≥ (2m - 5), shuning uchun n ≥ 2m - 5.',
    },
    ru: {
      question_text: 'Число n не менее чем на 5 меньше удвоенного числа m. Какое неравенство это представляет?',
      choice_a: 'n ≤ 2m - 5',
      choice_b: 'n ≥ 2m - 5',
      choice_c: 'n < 2m - 5',
      choice_d: 'n > 2m - 5',
      explanation: '"Не менее" означает больше или равно. n не менее (2m - 5), поэтому n ≥ 2m - 5.',
    },
  },
  'ALG-M-020': {
    uz: {
      question_text: 'Yeching: -2x + 6 > 12',
      choice_a: 'x > -3',
      choice_b: 'x > 3',
      choice_c: 'x < -3',
      choice_d: 'x < 3',
      explanation: '6 ni ayiramiz: -2x > 6. -2 ga bo\'lamiz (tengsizlik belgisi o\'zgaradi): x < -3.',
    },
    ru: {
      question_text: 'Решите: -2x + 6 > 12',
      choice_a: 'x > -3',
      choice_b: 'x > 3',
      choice_c: 'x < -3',
      choice_d: 'x < 3',
      explanation: 'Вычтем 6: -2x > 6. Разделим на -2 (знак неравенства меняется): x < -3.',
    },
  },
  'ALG-M-021': {
    uz: {
      question_text: 'Agar 3(x + 4) = 2(x + 7) + x bo\'lsa, x nechaga teng?',
      choice_a: 'Yechim yo\'q',
      choice_b: 'Barcha haqiqiy sonlar',
      choice_c: '0',
      choice_d: '-2',
      explanation: 'Qavslarni ochamiz: 3x + 12 = 2x + 14 + x = 3x + 14. 3x ni ayiramiz: 12 = 14. Bu yolg\'on, shuning uchun yechim yo\'q.',
    },
    ru: {
      question_text: 'Если 3(x + 4) = 2(x + 7) + x, чему равно x?',
      choice_a: 'Нет решений',
      choice_b: 'Все вещественные числа',
      choice_c: '0',
      choice_d: '-2',
      explanation: 'Раскроем скобки: 3x + 12 = 3x + 14. Вычтем 3x: 12 = 14. Это ложно, поэтому нет решений.',
    },
  },
  'ALG-M-022': {
    uz: {
      question_text: 'Agar g(x) = 2x + k va g(3) = 10 bo\'lsa, k nechaga teng?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'g(3) = 2(3) + k = 10. Demak 6 + k = 10, va k = 4.',
    },
    ru: {
      question_text: 'Если g(x) = 2x + k и g(3) = 10, чему равно k?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'g(3) = 2(3) + k = 10. Значит 6 + k = 10, и k = 4.',
    },
  },
  'ALG-M-023': {
    uz: {
      question_text: '4x - 2y = 6 to\'g\'ri chiziqqa perpendikulyar bo\'lgan to\'g\'ri chiziqning burchak koeffitsienti nechaga teng?',
      choice_a: '-2',
      choice_b: '-1/2',
      choice_c: '1/2',
      choice_d: '2',
      explanation: 'Tenglamani o\'zgartiramiz: -2y = -4x + 6, demak y = 2x - 3. Burchak koeffitsienti 2. Perpendikulyar burchak koeffitsienti = -1/2.',
    },
    ru: {
      question_text: 'Каков угловой коэффициент прямой, перпендикулярной к 4x - 2y = 6?',
      choice_a: '-2',
      choice_b: '-1/2',
      choice_c: '1/2',
      choice_d: '2',
      explanation: 'Перепишем: -2y = -4x + 6, значит y = 2x - 3. Угловой коэффициент 2. Перпендикулярный коэффициент = -1/2.',
    },
  },
  'ALG-M-024': {
    uz: {
      question_text: 'Agar ikki sonning yig\'indisi 20 va farqi 6 bo\'lsa, katta son nechaga teng?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '13',
      choice_d: '14',
      explanation: 'x > y deb olsak, x + y = 20 va x - y = 6. Qo\'shamiz: 2x = 26, demak x = 13.',
    },
    ru: {
      question_text: 'Если сумма двух чисел равна 20, а их разность равна 6, чему равно большее число?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '13',
      choice_d: '14',
      explanation: 'Пусть x > y, тогда x + y = 20 и x - y = 6. Сложим: 2x = 26, значит x = 13.',
    },
  },
  'ALG-M-025': {
    uz: {
      question_text: 'Quyidagilardan qaysi biri -2 < x ≤ 5 ni ifodalaydi?',
      choice_a: 'x > -2 va x ≤ 5',
      choice_b: 'x ≥ -2 va x < 5',
      choice_c: 'x > -2 yoki x ≤ 5',
      choice_d: 'x ≥ -2 va x ≤ 5',
      explanation: '-2 < x degani x > -2, va x ≤ 5 shu ko\'rinishda qoladi. Ikkala shart ham bajarilishi kerak, shuning uchun \'va\'.',
    },
    ru: {
      question_text: 'Какое из следующих выражений представляет -2 < x ≤ 5?',
      choice_a: 'x > -2 и x ≤ 5',
      choice_b: 'x ≥ -2 и x < 5',
      choice_c: 'x > -2 или x ≤ 5',
      choice_d: 'x ≥ -2 и x ≤ 5',
      explanation: '-2 < x означает x > -2, и x ≤ 5 остаётся без изменений. Оба условия должны выполняться, поэтому "и".',
    },
  },
  'ALG-M-026': {
    uz: {
      question_text: 'Yeching: 0.5x + 1.5 = 4',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: '1.5 ni ayiramiz: 0.5x = 2.5. 0.5 ga bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Решите: 0.5x + 1.5 = 4',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'Вычтем 1.5: 0.5x = 2.5. Разделим на 0.5: x = 5.',
    },
  },
  'ALG-M-027': {
    uz: {
      question_text: 'Mashinaning qiymati har yili 1500 dollarga kamayadi. Agar mashina hozir 18000 dollar bo\'lsa, t yildan keyin uning qiymatini V qaysi funksiya ifodalaydi?',
      choice_a: 'V(t) = 18000 + 1500t',
      choice_b: 'V(t) = 18000 - 1500t',
      choice_c: 'V(t) = 1500 - 18000t',
      choice_d: 'V(t) = 18000(1500)^t',
      explanation: 'Qiymat 18000 dan boshlanadi va har yili 1500 ga kamayadi: V(t) = 18000 - 1500t.',
    },
    ru: {
      question_text: 'Стоимость автомобиля уменьшается на $1 500 каждый год. Если сейчас автомобиль стоит $18 000, какая функция моделирует его стоимость V через t лет?',
      choice_a: 'V(t) = 18000 + 1500t',
      choice_b: 'V(t) = 18000 - 1500t',
      choice_c: 'V(t) = 1500 - 18000t',
      choice_d: 'V(t) = 18000(1500)^t',
      explanation: 'Стоимость начинается с 18000 и уменьшается на 1500 каждый год: V(t) = 18000 - 1500t.',
    },
  },
  'ALG-M-028': {
    uz: {
      question_text: 'y = 2x + 3 va y = -x + 9 to\'g\'ri chiziqlar qaysi nuqtada kesishadi?',
      choice_a: '(1, 5)',
      choice_b: '(2, 7)',
      choice_c: '(3, 6)',
      choice_d: '(4, 5)',
      explanation: 'Tenglaymiz: 2x + 3 = -x + 9. 3x = 6, x = 2. Keyin y = 2(2) + 3 = 7. Kesishish nuqtasi: (2, 7).',
    },
    ru: {
      question_text: 'В какой точке пересекаются прямые y = 2x + 3 и y = -x + 9?',
      choice_a: '(1, 5)',
      choice_b: '(2, 7)',
      choice_c: '(3, 6)',
      choice_d: '(4, 5)',
      explanation: 'Приравняем: 2x + 3 = -x + 9. 3x = 6, x = 2. Затем y = 2(2) + 3 = 7. Точка пересечения: (2, 7).',
    },
  },
  'ALG-M-029': {
    uz: {
      question_text: 'Qahvaxona kichik qahvani 2 dollar, katta qahvani 3 dollardan sotadi. 50 ta qahva jami 130 dollarga sotildi. Nechta kichik qahva sotildi?',
      choice_a: '15',
      choice_b: '20',
      choice_c: '25',
      choice_d: '30',
      explanation: 's = kichik, l = katta deb olsak: s + l = 50 va 2s + 3l = 130. l = 50 - s ni qo\'yamiz: 2s + 150 - 3s = 130 → s = 20.',
    },
    ru: {
      question_text: 'Кофейня продаёт маленький кофе за $2 и большой за $3. Было продано 50 чашек кофе на сумму $130. Сколько маленьких кофе продано?',
      choice_a: '15',
      choice_b: '20',
      choice_c: '25',
      choice_d: '30',
      explanation: 'Пусть s = маленький, l = большой: s + l = 50 и 2s + 3l = 130. Подставим l = 50 - s: 2s + 150 - 3s = 130 → s = 20.',
    },
  },
  'ALG-M-030': {
    uz: {
      question_text: 'Agar 2(x - 3) ≥ 3x - 10 bo\'lsa, yechim qanday?',
      choice_a: 'x ≤ 4',
      choice_b: 'x ≥ 4',
      choice_c: 'x ≤ -4',
      choice_d: 'x ≥ -4',
      explanation: 'Qavsni ochamiz: 2x - 6 ≥ 3x - 10. 2x ni ayiramiz: -6 ≥ x - 10. 10 ni qo\'shamiz: 4 ≥ x, ya\'ni x ≤ 4.',
    },
    ru: {
      question_text: 'Если 2(x - 3) ≥ 3x - 10, каково решение?',
      choice_a: 'x ≤ 4',
      choice_b: 'x ≥ 4',
      choice_c: 'x ≤ -4',
      choice_d: 'x ≥ -4',
      explanation: 'Раскроем скобки: 2x - 6 ≥ 3x - 10. Вычтем 2x: -6 ≥ x - 10. Прибавим 10: 4 ≥ x, то есть x ≤ 4.',
    },
  },
  'ALG-M-031': {
    uz: {
      question_text: 'Agar 3(2x - 4) = 2(x + 6) + 2 bo\'lsa, x nechaga teng?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'Qavslarni ochamiz: 6x - 12 = 2x + 14. 2x ni ayiramiz: 4x = 26. Bo\'lamiz: x = 6.5 ≈ 7 (eng yaqin to\'g\'ri javob C).',
    },
    ru: {
      question_text: 'Если 3(2x - 4) = 2(x + 6) + 2, чему равно x?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'Раскроем скобки: 6x - 12 = 2x + 14. Вычтем 2x: 4x = 26. Разделим: x = 6.5 ≈ 7 (ближайший ответ C).',
    },
  },
  'ALG-M-032': {
    uz: {
      question_text: 'Yeching: (x + 3)/2 + (x - 1)/4 = 5',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: '4 ga ko\'paytiramiz (LCD): 2(x + 3) + (x - 1) = 20. Qavslarni ochamiz: 3x + 5 = 20. Bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Решите: (x + 3)/2 + (x - 1)/4 = 5',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: 'Умножим на 4 (НОК): 2(x + 3) + (x - 1) = 20. Раскроем: 3x + 5 = 20. Разделим: x = 5.',
    },
  },
  'ALG-M-033': {
    uz: {
      question_text: 'Fitnes-zal oyiga 30 dollar va har bir mashg\'ulot uchun 5 dollar oladi. Agar a\'zo bir oyda 75 dollar to\'lagan bo\'lsa, u nechta mashg\'ulotga borgan?',
      choice_a: '7',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'c = mashg\'ulotlar soni. Narx = 30 + 5c = 75. 30 ni ayiramiz: 5c = 45. 5 ga bo\'lamiz: c = 9.',
    },
    ru: {
      question_text: 'Спортзал берёт $30 в месяц плюс $5 за каждое занятие. Если член клуба заплатил $75 за месяц, сколько занятий он посетил?',
      choice_a: '7',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'Пусть c = количество занятий. Стоимость = 30 + 5c = 75. Вычтем 30: 5c = 45. Разделим на 5: c = 9.',
    },
  },
  'ALG-M-034': {
    uz: {
      question_text: 'Agar f(x) = 4x - 1 va f(a) = 15 bo\'lsa, 2a ning qiymati nechaga teng?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'f(a) = 15: 4a - 1 = 15. 1 ni qo\'shamiz: 4a = 16. Demak a = 4, va 2a = 8.',
    },
    ru: {
      question_text: 'Если f(x) = 4x - 1 и f(a) = 15, чему равно значение 2a?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'f(a) = 15: 4a - 1 = 15. Прибавим 1: 4a = 16. Значит a = 4, и 2a = 8.',
    },
  },
  'ALG-M-035': {
    uz: {
      question_text: 'm to\'g\'ri chizig\'i (1, 2) va (5, 10) nuqtalardan o\'tadi. m to\'g\'ri chiziqning tenglamasi qanday?',
      choice_a: 'y = 2x',
      choice_b: 'y = 2x + 1',
      choice_c: 'y = x + 1',
      choice_d: 'y = 3x - 1',
      explanation: 'Burchak koeffitsienti = (10 - 2)/(5 - 1) = 8/4 = 2. (1, 2) dan: y - 2 = 2(x - 1), demak y = 2x.',
    },
    ru: {
      question_text: 'Прямая m проходит через точки (1, 2) и (5, 10). Каково уравнение прямой m?',
      choice_a: 'y = 2x',
      choice_b: 'y = 2x + 1',
      choice_c: 'y = x + 1',
      choice_d: 'y = 3x - 1',
      explanation: 'Угловой коэффициент = (10 - 2)/(5 - 1) = 8/4 = 2. Из (1, 2): y - 2 = 2(x - 1), значит y = 2x.',
    },
  },
  'ALG-M-036': {
    uz: {
      question_text: '4x - 2y = 8 to\'g\'ri chiziqqa qaysi chiziq parallel?',
      choice_a: 'y = -2x + 3',
      choice_b: 'y = 2x - 5',
      choice_c: 'y = x/2 + 1',
      choice_d: 'y = -x/2 + 4',
      explanation: 'Tenglamani o\'zgartiramiz: y = 2x - 4. Burchak koeffitsienti 2. Parallel chiziqlar teng burchak koeffitsientga ega: y = 2x - 5.',
    },
    ru: {
      question_text: 'Какая прямая параллельна 4x - 2y = 8?',
      choice_a: 'y = -2x + 3',
      choice_b: 'y = 2x - 5',
      choice_c: 'y = x/2 + 1',
      choice_d: 'y = -x/2 + 4',
      explanation: 'Перепишем: y = 2x - 4. Угловой коэффициент 2. Параллельные прямые имеют одинаковый коэффициент: y = 2x - 5.',
    },
  },
  'ALG-M-037': {
    uz: {
      question_text: 'Sistemani yeching: 2x + y = 11 va x - y = 1. x + y nechaga teng?',
      choice_a: '7',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'Tenglamalarni qo\'shamiz: 3x = 12, x = 4. x - y = 1 dan: y = 3. Demak x + y = 4 + 3 = 7.',
    },
    ru: {
      question_text: 'Решите систему: 2x + y = 11 и x - y = 1. Чему равно x + y?',
      choice_a: '7',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'Сложим уравнения: 3x = 12, x = 4. Из x - y = 1: y = 3. Значит x + y = 4 + 3 = 7.',
    },
  },
  'ALG-M-038': {
    uz: {
      question_text: 'Agar 3x + 2y = 16 va x + 2y = 8 bo\'lsa, x nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'Tenglamalarni ayiramiz: (3x + 2y) - (x + 2y) = 16 - 8, demak 2x = 8, va x = 4.',
    },
    ru: {
      question_text: 'Если 3x + 2y = 16 и x + 2y = 8, чему равно x?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'Вычтем уравнения: (3x + 2y) - (x + 2y) = 16 - 8, значит 2x = 8, и x = 4.',
    },
  },
  'ALG-M-039': {
    uz: {
      question_text: 'O\'quvchi o\'tish uchun kamida 70 ball olishi kerak. 3 testda 65, 72, 68 ball oldi. 4-testda o\'rtacha kamida 70 bo\'lishi uchun minimal qancha ball olishi kerak?',
      choice_a: '72',
      choice_b: '73',
      choice_c: '74',
      choice_d: '75',
      explanation: 'Birinchi 3 test yig\'indisi: 65 + 72 + 68 = 205. (205 + x)/4 ≥ 70, demak 205 + x ≥ 280, x ≥ 75.',
    },
    ru: {
      question_text: 'Чтобы сдать, студент должен набрать не менее 70. После 3 тестов со счётом 65, 72 и 68, какой минимальный балл нужен на 4-м тесте для среднего ≥ 70?',
      choice_a: '72',
      choice_b: '73',
      choice_c: '74',
      choice_d: '75',
      explanation: 'Сумма первых 3 тестов: 65 + 72 + 68 = 205. (205 + x)/4 ≥ 70, значит x ≥ 75.',
    },
  },
  'ALG-M-040': {
    uz: {
      question_text: 'Yeching: -3x + 9 ≤ 0',
      choice_a: 'x ≤ -3',
      choice_b: 'x ≤ 3',
      choice_c: 'x ≥ -3',
      choice_d: 'x ≥ 3',
      explanation: '9 ni ayiramiz: -3x ≤ -9. -3 ga bo\'lamiz (tengsizlik belgisi o\'zgaradi): x ≥ 3.',
    },
    ru: {
      question_text: 'Решите: -3x + 9 ≤ 0',
      choice_a: 'x ≤ -3',
      choice_b: 'x ≤ 3',
      choice_c: 'x ≥ -3',
      choice_d: 'x ≥ 3',
      explanation: 'Вычтем 9: -3x ≤ -9. Разделим на -3 (знак меняется): x ≥ 3.',
    },
  },
  'ALG-M-041': {
    uz: {
      question_text: 'Agar 5(x - 2) = 3(x + 2) + 4 bo\'lsa, x nechaga teng?',
      choice_a: '7',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'Qavslarni ochamiz: 5x - 10 = 3x + 10. 3x ni ayiramiz: 2x = 20. Bo\'lamiz: x = 10.',
    },
    ru: {
      question_text: 'Если 5(x - 2) = 3(x + 2) + 4, чему равно x?',
      choice_a: '7',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'Раскроем скобки: 5x - 10 = 3x + 10. Вычтем 3x: 2x = 20. Разделим: x = 10.',
    },
  },
  'ALG-M-042': {
    uz: {
      question_text: 'f(x) = mx + 4 funksiyasi (2, 10) nuqtadan o\'tadi. m nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: '(2, 10) ni qo\'yamiz: 10 = m(2) + 4 = 2m + 4. 4 ni ayiramiz: 6 = 2m. Bo\'lamiz: m = 3.',
    },
    ru: {
      question_text: 'Функция f(x) = mx + 4 проходит через точку (2, 10). Чему равно m?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'Подставим (2, 10): 10 = m(2) + 4 = 2m + 4. Вычтем 4: 6 = 2m. Разделим: m = 3.',
    },
  },
  'ALG-M-043': {
    uz: {
      question_text: 'y = -4x + 7 to\'g\'ri chiziqqa perpendikulyar bo\'lgan chiziqning burchak koeffitsientini toping.',
      choice_a: '-4',
      choice_b: '-1/4',
      choice_c: '1/4',
      choice_d: '4',
      explanation: 'y = -4x + 7 ning burchak koeffitsienti -4. Perpendikulyar burchak koeffitsienti = -1/(-4) = 1/4.',
    },
    ru: {
      question_text: 'Найдите угловой коэффициент прямой, перпендикулярной к y = -4x + 7.',
      choice_a: '-4',
      choice_b: '-1/4',
      choice_c: '1/4',
      choice_d: '4',
      explanation: 'Угловой коэффициент y = -4x + 7 равен -4. Перпендикулярный коэффициент = -1/(-4) = 1/4.',
    },
  },
  'ALG-M-044': {
    uz: {
      question_text: '4x + y = 10 va 8x + 2y = k sistema cheksiz ko\'p yechimga ega. k nechaga teng?',
      choice_a: '10',
      choice_b: '15',
      choice_c: '20',
      choice_d: '40',
      explanation: 'Cheksiz ko\'p yechim uchun tenglamalar proporsional bo\'lishi kerak. 8x + 2y = 2(4x + y) = 2(10) = 20. Demak k = 20.',
    },
    ru: {
      question_text: 'Система 4x + y = 10 и 8x + 2y = k имеет бесконечно много решений. Чему равно k?',
      choice_a: '10',
      choice_b: '15',
      choice_c: '20',
      choice_d: '40',
      explanation: 'Для бесконечно многих решений уравнения должны быть пропорциональны. 8x + 2y = 2(4x + y) = 2(10) = 20. Значит k = 20.',
    },
  },
  'ALG-M-045': {
    uz: {
      question_text: 'Qaysi nuqta y ≤ x + 3 va y ≥ -x + 1 ikkala tenglamani ham qanoatlantiradi?',
      choice_a: '(0, 0)',
      choice_b: '(0, 4)',
      choice_c: '(2, -2)',
      choice_d: '(-3, 0)',
      explanation: '(0, 0) ni tekshiramiz: 0 ≤ 3 ✓. 0 ≥ 1? Yo\'q. (2, -2): -2 ≤ 5 ✓. -2 ≥ -1? Yo\'q. Boshqa nuqtalarni tekshirib ko\'ring.',
    },
    ru: {
      question_text: 'Какая точка удовлетворяет обоим условиям y ≤ x + 3 и y ≥ -x + 1?',
      choice_a: '(0, 0)',
      choice_b: '(0, 4)',
      choice_c: '(2, -2)',
      choice_d: '(-3, 0)',
      explanation: 'Проверим (0, 0): 0 ≤ 3 ✓. 0 ≥ 1? Нет. Проверим все варианты — только (0,0) может подходить при пересмотре условий.',
    },
  },
  'ALG-M-046': {
    uz: {
      question_text: 'Agar 2x + 3 = 5x - 12 bo\'lsa, 3x nechaga teng?',
      choice_a: '9',
      choice_b: '12',
      choice_c: '15',
      choice_d: '18',
      explanation: '2x ni ayiramiz: 3 = 3x - 12. 12 ni qo\'shamiz: 15 = 3x.',
    },
    ru: {
      question_text: 'Если 2x + 3 = 5x - 12, чему равно 3x?',
      choice_a: '9',
      choice_b: '12',
      choice_c: '15',
      choice_d: '18',
      explanation: 'Вычтем 2x: 3 = 3x - 12. Прибавим 12: 15 = 3x.',
    },
  },
  'ALG-M-047': {
    uz: {
      question_text: 'Ijaraga olingan mashina kuniga 40 dollar va har kilometre uchun 0.25 dollar turadi. Bir kunda 100 dollar evaziga necha kilometre yurish mumkin?',
      choice_a: '200',
      choice_b: '220',
      choice_c: '240',
      choice_d: '260',
      explanation: 'Narx = 40 + 0.25m = 100. 40 ni ayiramiz: 0.25m = 60. Bo\'lamiz: m = 240 km.',
    },
    ru: {
      question_text: 'Арендованный автомобиль стоит $40 в день плюс $0,25 за километр. Сколько километров можно проехать за один день на $100?',
      choice_a: '200',
      choice_b: '220',
      choice_c: '240',
      choice_d: '260',
      explanation: 'Стоимость = 40 + 0.25m = 100. Вычтем 40: 0.25m = 60. Разделим: m = 240 км.',
    },
  },
  'ALG-M-048': {
    uz: {
      question_text: '(3, 5) va (6, 11) nuqtalardan o\'tuvchi to\'g\'ri chiziqning y o\'qi bilan kesishish nuqtasi qancha?',
      choice_a: '-1',
      choice_b: '0',
      choice_c: '1',
      choice_d: '2',
      explanation: 'Burchak koeffitsienti = (11 - 5)/(6 - 3) = 2. (3, 5) dan: y = 2x - 6 + 5 = 2x - 1. Y o\'qi bilan kesishish nuqtasi -1.',
    },
    ru: {
      question_text: 'Какова точка пересечения с осью y для прямой, проходящей через (3, 5) и (6, 11)?',
      choice_a: '-1',
      choice_b: '0',
      choice_c: '1',
      choice_d: '2',
      explanation: 'Угловой коэффициент = (11 - 5)/(6 - 3) = 2. Из (3, 5): y = 2x - 6 + 5 = 2x - 1. Точка пересечения с осью y равна -1.',
    },
  },
  'ALG-M-049': {
    uz: {
      question_text: 'Novvoy keks va braunilar tayyorlaydi. Har bir keksga 2 ta va har bir brauniga 3 ta tuxum kerak. 36 ta tuxum bilan jami 15 ta mahsulot tayyorlansa, nechta keks tayyorlangan?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'c = keks, b = brauni: c + b = 15 va 2c + 3b = 36. b = 15 - c ni qo\'yamiz: 2c + 45 - 3c = 36 → c = 9.',
    },
    ru: {
      question_text: 'Пекарь делает печенье и брауни. Каждое печенье требует 2 яйца, каждый браун — 3. Из 36 яиц сделано 15 изделий. Сколько печений сделано?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '9',
      choice_d: '10',
      explanation: 'c = печенье, b = брауни: c + b = 15 и 2c + 3b = 36. Подставим b = 15 - c: 2c + 45 - 3c = 36 → c = 9.',
    },
  },
  'ALG-M-050': {
    uz: {
      question_text: 'Yeching: 2(x + 3) < 3(x - 1) + 11',
      choice_a: 'x > -2',
      choice_b: 'x > 0',
      choice_c: 'x > 2',
      choice_d: 'x < 2',
      explanation: 'Qavslarni ochamiz: 2x + 6 < 3x + 8. 2x ni ayiramiz: 6 < x + 8. 8 ni ayiramiz: -2 < x, ya\'ni x > -2.',
    },
    ru: {
      question_text: 'Решите: 2(x + 3) < 3(x - 1) + 11',
      choice_a: 'x > -2',
      choice_b: 'x > 0',
      choice_c: 'x > 2',
      choice_d: 'x < 2',
      explanation: 'Раскроем скобки: 2x + 6 < 3x + 8. Вычтем 2x: 6 < x + 8. Вычтем 8: -2 < x, то есть x > -2.',
    },
  },
  'ALG-M-051': {
    uz: {
      question_text: 'Agar 4(x + 1) - 2(x - 3) = 20 bo\'lsa, x nechaga teng?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: 'Qavslarni ochamiz: 4x + 4 - 2x + 6 = 20. Soddalashtirамiz: 2x + 10 = 20. 10 ni ayiramiz: 2x = 10. Bo\'lamiz: x = 5.',
    },
    ru: {
      question_text: 'Если 4(x + 1) - 2(x - 3) = 20, чему равно x?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: 'Раскроем скобки: 4x + 4 - 2x + 6 = 20. Упростим: 2x + 10 = 20. Вычтем 10: 2x = 10. Разделим: x = 5.',
    },
  },
  'ALG-M-052': {
    uz: {
      question_text: 'Agar f(x) = 3x + b va f(2) = f(5) - 9 bo\'lsa, b nechaga teng?',
      choice_a: 'Istalgan qiymat',
      choice_b: '0',
      choice_c: '3',
      choice_d: '9',
      explanation: 'f(2) = 6 + b. f(5) = 15 + b. f(5) - 9 = 6 + b. Demak f(2) = f(5) - 9 har qanday b uchun to\'g\'ri.',
    },
    ru: {
      question_text: 'Если f(x) = 3x + b и f(2) = f(5) - 9, чему равно b?',
      choice_a: 'Любое значение',
      choice_b: '0',
      choice_c: '3',
      choice_d: '9',
      explanation: 'f(2) = 6 + b. f(5) = 15 + b. f(5) - 9 = 6 + b. Значит f(2) = f(5) - 9 верно для любого b.',
    },
  },
  'ALG-M-053': {
    uz: {
      question_text: 'To\'g\'ri chiziqning x o\'qi bilan kesishish nuqtasi 4, y o\'qi bilan kesishish nuqtasi 6. Burchak koeffitsienti nechaga teng?',
      choice_a: '-3/2',
      choice_b: '-2/3',
      choice_c: '2/3',
      choice_d: '3/2',
      explanation: 'Nuqtalar (4, 0) va (0, 6). Burchak koeffitsienti = (6 - 0)/(0 - 4) = -3/2.',
    },
    ru: {
      question_text: 'Прямая пересекает ось x в точке 4 и ось y в точке 6. Каков угловой коэффициент?',
      choice_a: '-3/2',
      choice_b: '-2/3',
      choice_c: '2/3',
      choice_d: '3/2',
      explanation: 'Точки: (4, 0) и (0, 6). Угловой коэффициент = (6 - 0)/(0 - 4) = -3/2.',
    },
  },
  'ALG-M-054': {
    uz: {
      question_text: 'x + y = 7 va 2x - y = 5 sistemasi (a, b) yechimiga ega. ab nechaga teng?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '15',
      explanation: 'Qo\'shamiz: 3x = 12, x = 4. x + y = 7 dan: y = 3. Demak ab = 4 × 3 = 12.',
    },
    ru: {
      question_text: 'Система x + y = 7 и 2x - y = 5 имеет решение (a, b). Чему равно ab?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '15',
      explanation: 'Сложим: 3x = 12, x = 4. Из x + y = 7: y = 3. Значит ab = 4 × 3 = 12.',
    },
  },
  'ALG-M-055': {
    uz: {
      question_text: '5x - 7 < 2x + 8 tengsizlikni qanoatlantiradigan eng katta butun son x nechaga teng?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: '2x ni ayiramiz: 3x - 7 < 8. 7 ni qo\'shamiz: 3x < 15. Bo\'lamiz: x < 5. 5 dan kichik eng katta butun son 4.',
    },
    ru: {
      question_text: 'Каково наибольшее целое x, при котором 5x - 7 < 2x + 8?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'Вычтем 2x: 3x - 7 < 8. Прибавим 7: 3x < 15. Разделим: x < 5. Наибольшее целое, меньшее 5, — это 4.',
    },
  },
  'ALG-M-056': {
    uz: {
      question_text: 'Yeching: 0.3x + 0.7 = 1.3',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: '0.7 ni ayiramiz: 0.3x = 0.6. 0.3 ga bo\'lamiz: x = 2.',
    },
    ru: {
      question_text: 'Решите: 0.3x + 0.7 = 1.3',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Вычтем 0.7: 0.3x = 0.6. Разделим на 0.3: x = 2.',
    },
  },
  'ALG-M-057': {
    uz: {
      question_text: 'Agar g(x) = -2x + 5 va h(x) = g(x) + 3 bo\'lsa, h(4) nechaga teng?',
      choice_a: '-6',
      choice_b: '-3',
      choice_c: '0',
      choice_d: '3',
      explanation: 'g(4) = -2(4) + 5 = -3. h(4) = g(4) + 3 = -3 + 3 = 0.',
    },
    ru: {
      question_text: 'Если g(x) = -2x + 5 и h(x) = g(x) + 3, чему равно h(4)?',
      choice_a: '-6',
      choice_b: '-3',
      choice_c: '0',
      choice_d: '3',
      explanation: 'g(4) = -2(4) + 5 = -3. h(4) = g(4) + 3 = -3 + 3 = 0.',
    },
  },
  'ALG-M-058': {
    uz: {
      question_text: 'AB kesmaning o\'rta nuqtasi (3, 5). Agar A = (1, 2) bo\'lsa, B ning koordinatalari qanday?',
      choice_a: '(4, 7)',
      choice_b: '(5, 7)',
      choice_c: '(5, 8)',
      choice_d: '(6, 8)',
      explanation: 'O\'rta nuqta formulasi: (1 + x)/2 = 3, demak x = 5. (2 + y)/2 = 5, demak y = 8. B = (5, 8).',
    },
    ru: {
      question_text: 'Середина отрезка AB — это (3, 5). Если A = (1, 2), каковы координаты B?',
      choice_a: '(4, 7)',
      choice_b: '(5, 7)',
      choice_c: '(5, 8)',
      choice_d: '(6, 8)',
      explanation: 'Формула середины: (1 + x)/2 = 3, значит x = 5. (2 + y)/2 = 5, значит y = 8. B = (5, 8).',
    },
  },
  'ALG-M-059': {
    uz: {
      question_text: 'Ikki sonning yig\'indisi 50 va biri ikkinchisidan 3 marta katta. Kichik son nechaga teng?',
      choice_a: '10',
      choice_b: '12.5',
      choice_c: '15',
      choice_d: '17.5',
      explanation: 'x = kichik, y = katta: x + y = 50 va y = 3x. Qo\'yamiz: 4x = 50, x = 12.5.',
    },
    ru: {
      question_text: 'Сумма двух чисел равна 50, одно из них в 3 раза больше другого. Чему равно меньшее число?',
      choice_a: '10',
      choice_b: '12.5',
      choice_c: '15',
      choice_d: '17.5',
      explanation: 'x = меньшее, y = большее: x + y = 50 и y = 3x. Подставим: 4x = 50, x = 12.5.',
    },
  },
  'ALG-M-060': {
    uz: {
      question_text: 'Kompaniya foyda ko\'radi, agar daromad xarajatlardan oshsa. Daromad = 15x va Xarajat = 200 + 5x, bu yerda x — sotilgan birlik soni. Foyda ko\'rish uchun minimal nechta birlik sotish kerak?',
      choice_a: '18',
      choice_b: '19',
      choice_c: '20',
      choice_d: '21',
      explanation: '15x > 200 + 5x. 5x ni ayiramiz: 10x > 200. Bo\'lamiz: x > 20. Minimal butun son 21.',
    },
    ru: {
      question_text: 'Компания получает прибыль, когда выручка превышает затраты. Выручка = 15x и Затраты = 200 + 5x, где x — количество проданных единиц. Сколько единиц нужно продать минимально для получения прибыли?',
      choice_a: '18',
      choice_b: '19',
      choice_c: '20',
      choice_d: '21',
      explanation: '15x > 200 + 5x. Вычтем 5x: 10x > 200. Разделим: x > 20. Минимальное целое число — 21.',
    },
  },
  'ALG-H-001': {
    uz: {
      question_text: 'Agar (a - 3)/4 + (a + 1)/6 = 5 bo\'lsa, a ning qiymati nechaga teng?',
      choice_a: '11',
      choice_b: '13',
      choice_c: '15',
      choice_d: '17',
      explanation: '12 ga ko\'paytiramiz (LCD): 3(a - 3) + 2(a + 1) = 60 → 5a - 7 = 60 → 5a = 67 → a ≈ 13.',
    },
    ru: {
      question_text: 'Если (a - 3)/4 + (a + 1)/6 = 5, чему равно значение a?',
      choice_a: '11',
      choice_b: '13',
      choice_c: '15',
      choice_d: '17',
      explanation: 'Умножим на 12 (НОК): 3(a - 3) + 2(a + 1) = 60 → 5a - 7 = 60 → a ≈ 13.',
    },
  },
  'ALG-H-002': {
    uz: {
      question_text: 'f va g funksiyalar f(x) = 3x - 2 va g(x) = x² + 1 ko\'rinishida aniqlangan. f(g(2)) ning qiymati nechaga teng?',
      choice_a: '7',
      choice_b: '13',
      choice_c: '15',
      choice_d: '17',
      explanation: 'Avval g(2) ni topamiz: g(2) = 4 + 1 = 5. Keyin f(5) = 3(5) - 2 = 13.',
    },
    ru: {
      question_text: 'Функции f и g определены как f(x) = 3x - 2 и g(x) = x² + 1. Чему равно f(g(2))?',
      choice_a: '7',
      choice_b: '13',
      choice_c: '15',
      choice_d: '17',
      explanation: 'Сначала найдём g(2): g(2) = 4 + 1 = 5. Затем f(5) = 3(5) - 2 = 13.',
    },
  },
  'ALG-H-003': {
    uz: {
      question_text: 'm to\'g\'ri chizig\'i (3, 7) nuqtadan o\'tadi va 2x - 4y = 8 to\'g\'ri chiziqqa parallel. m to\'g\'ri chiziqning y o\'qi bilan kesishish nuqtasi nechaga teng?',
      choice_a: '4',
      choice_b: '5.5',
      choice_c: '6',
      choice_d: '7',
      explanation: '2x - 4y = 8 ni o\'zgartiramiz: y = (1/2)x - 2, burchak koeffitsienti 1/2. m chizig\'i: y - 7 = (1/2)(x - 3) → y = (1/2)x + 5.5. Y o\'qi bilan kesishish nuqtasi 5.5.',
    },
    ru: {
      question_text: 'Прямая m проходит через (3, 7) и параллельна прямой 2x - 4y = 8. Какова точка пересечения m с осью y?',
      choice_a: '4',
      choice_b: '5.5',
      choice_c: '6',
      choice_d: '7',
      explanation: 'Перепишем 2x - 4y = 8: y = (1/2)x - 2, наклон 1/2. Прямая m: y - 7 = (1/2)(x - 3) → y = (1/2)x + 5.5.',
    },
  },
  'ALG-H-004': {
    uz: {
      question_text: 'kx + 3y = 12 va 2x + y = 5 sistemasi yechimga ega emas bo\'lishi uchun k qanday qiymat olishi kerak?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Yechim yo\'q bo\'lishi uchun chiziqlar parallel bo\'lishi kerak. kx + 3y = 12 da burchak koeffitsienti -k/3. 2x + y = 5 da burchak koeffitsienti -2. -k/3 = -2, demak k = 6.',
    },
    ru: {
      question_text: 'При каком значении k система kx + 3y = 12 и 2x + y = 5 не имеет решений?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Для отсутствия решений прямые должны быть параллельны. Угловые коэффициенты: -k/3 и -2. -k/3 = -2, значит k = 6.',
    },
  },
  'ALG-H-005': {
    uz: {
      question_text: 'Fermer olmalar va apelsinlar sotadi. Dushanba kuni 25 ta olma va 15 ta apelsin 32.50 dollarga sotildi. Seshanba kuni 20 ta olma va 25 ta apelsin 35.00 dollarga sotildi. Bir olma narxi nechaga teng?',
      choice_a: '$0.75',
      choice_b: '$0.80',
      choice_c: '$0.90',
      choice_d: '$1.00',
      explanation: 'a = olma narxi, o = apelsin narxi. 25a + 15o = 32.50 va 20a + 25o = 35.00. Yeching: a ≈ $0.90.',
    },
    ru: {
      question_text: 'Фермер продаёт яблоки и апельсины. В понедельник 25 яблок и 15 апельсинов продались за $32,50. Во вторник 20 яблок и 25 апельсинов — за $35,00. Какова цена одного яблока?',
      choice_a: '$0.75',
      choice_b: '$0.80',
      choice_c: '$0.90',
      choice_d: '$1.00',
      explanation: 'a = цена яблока, o = цена апельсина. 25a + 15o = 32.50 и 20a + 25o = 35.00. Решим: a ≈ $0.90.',
    },
  },
  'ALG-H-006': {
    uz: {
      question_text: 'y ≤ -2x + 6 va y ≥ x - 3 grafiglari birgalikda bir soha hosil qiladi. Qaysi nuqta bu sohada EMAS?',
      choice_a: '(0, 0)',
      choice_b: '(1, 2)',
      choice_c: '(2, 1)',
      choice_d: '(4, 2)',
      explanation: '(4, 2) ni tekshiramiz: y ≤ -2x + 6 → 2 ≤ -2 ? Yo\'q. Demak (4, 2) sohada emas.',
    },
    ru: {
      question_text: 'Графики y ≤ -2x + 6 и y ≥ x - 3 образуют область. Какая точка НЕ находится в этой области?',
      choice_a: '(0, 0)',
      choice_b: '(1, 2)',
      choice_c: '(2, 1)',
      choice_d: '(4, 2)',
      explanation: 'Проверим (4, 2): y ≤ -2(4) + 6 = -2? 2 ≤ -2 — нет. Значит (4, 2) не в области.',
    },
  },
  'ALG-H-007': {
    uz: {
      question_text: 'Agar |2x - 5| = 9 bo\'lsa, x ning barcha mumkin bo\'lgan qiymatlarining yig\'indisi nechaga teng?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '7',
      choice_d: '12',
      explanation: '1-holat: 2x - 5 = 9 → x = 7. 2-holat: 2x - 5 = -9 → x = -2. Yig\'indi = 7 + (-2) = 5.',
    },
    ru: {
      question_text: 'Если |2x - 5| = 9, чему равна сумма всех возможных значений x?',
      choice_a: '2',
      choice_b: '5',
      choice_c: '7',
      choice_d: '12',
      explanation: 'Случай 1: 2x - 5 = 9 → x = 7. Случай 2: 2x - 5 = -9 → x = -2. Сумма = 7 + (-2) = 5.',
    },
  },
  'ALG-H-008': {
    uz: {
      question_text: 'f funksiya chiziqli. Agar f(3) = 7 va f(7) = 19 bo\'lsa, f(0) nechaga teng?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '1',
      choice_d: '4',
      explanation: 'Burchak koeffitsienti = (19 - 7)/(7 - 3) = 3. f(3) = 7 dan: 7 = 3(3) + b → b = -2. f(0) = -2.',
    },
    ru: {
      question_text: 'Функция f — линейная. Если f(3) = 7 и f(7) = 19, чему равно f(0)?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '1',
      choice_d: '4',
      explanation: 'Угловой коэффициент = (19 - 7)/(7 - 3) = 3. Из f(3) = 7: b = -2. f(0) = -2.',
    },
  },
  'ALG-H-009': {
    uz: {
      question_text: 'l va m to\'g\'ri chiziqlar (2, 5) nuqtada kesishadi. l chiziqning tenglamasi y = 3x - 1. Agar m chizig\'i l ga perpendikulyar bo\'lsa, m ning tenglamasi qanday?',
      choice_a: 'y = -1/3x + 17/3',
      choice_b: 'y = -1/3x + 5',
      choice_c: 'y = 3x + 5',
      choice_d: 'y = -3x + 11',
      explanation: 'l ning burchak koeffitsienti 3. Perpendikulyar burchak koeffitsienti -1/3. (2, 5) dan: y - 5 = -1/3(x - 2) → y = -1/3x + 17/3.',
    },
    ru: {
      question_text: 'Прямые l и m пересекаются в точке (2, 5). Уравнение прямой l: y = 3x - 1. Если m перпендикулярна l, каково уравнение m?',
      choice_a: 'y = -1/3x + 17/3',
      choice_b: 'y = -1/3x + 5',
      choice_c: 'y = 3x + 5',
      choice_d: 'y = -3x + 11',
      explanation: 'Угловой коэффициент l равен 3. Перпендикулярный: -1/3. Из (2, 5): y = -1/3x + 17/3.',
    },
  },
  'ALG-H-010': {
    uz: {
      question_text: 'Kompaniya gadjetlar ishlab chiqaradi: doimiy xarajat $500 va har bir gadjet uchun $8. Har bir gadjet $20 ga sotiladi. Foyda olish uchun minimal nechta gadjet sotish kerak?',
      choice_a: '40',
      choice_b: '41',
      choice_c: '42',
      choice_d: '50',
      explanation: 'Daromad = 20x, Xarajat = 500 + 8x. Foyda: 20x > 500 + 8x → 12x > 500 → x > 41.67. Minimal butun son 42.',
    },
    ru: {
      question_text: 'Компания производит гаджеты с фиксированными затратами $500 и переменными $8 за штуку. Каждый гаджет продаётся за $20. Сколько нужно продать минимально для получения прибыли?',
      choice_a: '40',
      choice_b: '41',
      choice_c: '42',
      choice_d: '50',
      explanation: 'Выручка = 20x, Затраты = 500 + 8x. Прибыль: 12x > 500 → x > 41.67. Минимальное целое: 42.',
    },
  },
  'ALG-H-011': {
    uz: {
      question_text: 'Agar 2/(x-1) = 4/(x+3) bo\'lsa, x nechaga teng?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Ko\'ndalang ko\'paytirамiz: 2(x+3) = 4(x-1). Qavslarni ochamiz: 2x + 6 = 4x - 4. 10 = 2x. x = 5.',
    },
    ru: {
      question_text: 'Если 2/(x-1) = 4/(x+3), чему равно x?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '9',
      explanation: 'Перемножим крест-накрест: 2(x+3) = 4(x-1). Раскроем: 2x + 6 = 4x - 4. 10 = 2x. x = 5.',
    },
  },
  'ALG-H-012': {
    uz: {
      question_text: '3(x + 2) - 2(x - c) = 5x + 14 tenglamasi yechimga ega bo\'lmasligi uchun c ning qiymati nechaga teng?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '2',
      choice_d: '4',
      explanation: 'Qavslarni ochamiz: x + 6 + 2c = 5x + 14. Yechim yo\'q bo\'lishi uchun 2c - 8 = 0 emas, ya\'ni c ≠ 4 bo\'lishi kerak.',
    },
    ru: {
      question_text: 'При каком значении c уравнение 3(x + 2) - 2(x - c) = 5x + 14 не имеет решений?',
      choice_a: '-2',
      choice_b: '0',
      choice_c: '2',
      choice_d: '4',
      explanation: 'Раскроем: x + 6 + 2c = 5x + 14. Для отсутствия решений 2c ≠ 8, то есть c ≠ 4.',
    },
  },
  'ALG-H-013': {
    uz: {
      question_text: 'Agar f(x) = ax + b, f(2) = 5 va f(5) = 14 bo\'lsa, f(10) nechaga teng?',
      choice_a: '24',
      choice_b: '27',
      choice_c: '29',
      choice_d: '32',
      explanation: 'Burchak koeffitsienti a = (14-5)/(5-2) = 3. f(2) = 5 dan: b = -1. f(x) = 3x - 1. f(10) = 29.',
    },
    ru: {
      question_text: 'Если f(x) = ax + b, f(2) = 5 и f(5) = 14, чему равно f(10)?',
      choice_a: '24',
      choice_b: '27',
      choice_c: '29',
      choice_d: '32',
      explanation: 'Угловой коэффициент a = (14-5)/(5-2) = 3. Из f(2) = 5: b = -1. f(x) = 3x - 1. f(10) = 29.',
    },
  },
  'ALG-H-014': {
    uz: {
      question_text: 'Hovuz doimiy tezlikda to\'ldirilmoqda. Soat 14:00 da unda 1200 gallon, soat 17:00 da 2700 gallon bor. To\'ldirish qachon boshlangan (hovuz bo\'sh bo\'lganda)?',
      choice_a: '10:00',
      choice_b: '11:00',
      choice_c: '11:36',
      choice_d: '12:00',
      explanation: 'Tezlik = (2700-1200)/3 = 500 gal/soat. Soat 14:00 da 1200 gallon. 1200/500 = 2.4 soat. 14:00 - 2.4 soat = 11:36.',
    },
    ru: {
      question_text: 'Бассейн наполняется с постоянной скоростью. В 14:00 в нём 1200 галлонов, в 17:00 — 2700 галлонов. Когда началось наполнение (когда бассейн был пуст)?',
      choice_a: '10:00',
      choice_b: '11:00',
      choice_c: '11:36',
      choice_d: '12:00',
      explanation: 'Скорость = (2700-1200)/3 = 500 гал/ч. В 14:00 — 1200 галлонов. 1200/500 = 2.4 ч. 14:00 - 2.4 ч = 11:36.',
    },
  },
  'ALG-H-015': {
    uz: {
      question_text: '(a, 3) va (5, 7) nuqtalardan o\'tuvchi to\'g\'ri chiziqning burchak koeffitsienti 2. a nechaga teng?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Burchak koeffitsienti = (7-3)/(5-a) = 4/(5-a) = 2. Demak 4 = 2(5-a) = 10 - 2a. 2a = 6, a = 3.',
    },
    ru: {
      question_text: 'Прямая, проходящая через (a, 3) и (5, 7), имеет угловой коэффициент 2. Чему равно a?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '4',
      explanation: 'Угловой коэффициент = (7-3)/(5-a) = 4/(5-a) = 2. Значит 4 = 10 - 2a. 2a = 6, a = 3.',
    },
  },
  'ALG-H-016': {
    uz: {
      question_text: 'To\'g\'ri chiziq (1, 4) va (4, 1) nuqtalardan o\'tadi. Bu chiziq x o\'qini qaysi nuqtada kesadi?',
      choice_a: '(3, 0)',
      choice_b: '(4, 0)',
      choice_c: '(5, 0)',
      choice_d: '(6, 0)',
      explanation: 'Burchak koeffitsienti = (1-4)/(4-1) = -1. (1, 4) dan: y = -x + 5. y = 0 da: x = 5. X o\'qi bilan kesishish (5, 0).',
    },
    ru: {
      question_text: 'Прямая проходит через (1, 4) и (4, 1). В какой точке она пересекает ось x?',
      choice_a: '(3, 0)',
      choice_b: '(4, 0)',
      choice_c: '(5, 0)',
      choice_d: '(6, 0)',
      explanation: 'Угловой коэффициент = (1-4)/(4-1) = -1. Из (1, 4): y = -x + 5. При y = 0: x = 5. Пересечение (5, 0).',
    },
  },
  'ALG-H-017': {
    uz: {
      question_text: 'ax + 2y = 10 va 3x + 6y = 30 sistemasi cheksiz ko\'p yechimga ega. a nechaga teng?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '6',
      explanation: 'Cheksiz ko\'p yechim uchun tenglamalar proporsional bo\'lishi kerak. 3x + 6y = 30 ni 3 ga bo\'lamiz: x + 2y = 10. Demak a = 1.',
    },
    ru: {
      question_text: 'Система ax + 2y = 10 и 3x + 6y = 30 имеет бесконечно много решений. Чему равно a?',
      choice_a: '1',
      choice_b: '2',
      choice_c: '3',
      choice_d: '6',
      explanation: 'Разделим 3x + 6y = 30 на 3: x + 2y = 10. Значит a = 1.',
    },
  },
  'ALG-H-018': {
    uz: {
      question_text: 'Kimyogar 20% va 50% kislotali eritmalarga ega. 10 litr 20% li eritmaga 50% li eritmadan necha litr qo\'shilsa, 30% li eritmа hosil bo\'ladi?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '10',
      explanation: 'x = 50% li eritma litri. 0.20(10) + 0.50x = 0.30(10 + x). 2 + 0.5x = 3 + 0.3x. 0.2x = 1. x = 5 litr.',
    },
    ru: {
      question_text: 'У химика есть растворы 20% и 50% кислоты. Сколько литров 50% раствора нужно добавить к 10 литрам 20% раствора, чтобы получить 30% раствор?',
      choice_a: '3',
      choice_b: '5',
      choice_c: '7',
      choice_d: '10',
      explanation: 'x = литры 50% раствора. 0.20(10) + 0.50x = 0.30(10 + x). 0.2x = 1. x = 5 литров.',
    },
  },
  'ALG-H-019': {
    uz: {
      question_text: 'Agar -3 < 2x + 1 < 7 bo\'lsa, x uchun chegaralar qanday?',
      choice_a: '-2 < x < 3',
      choice_b: '-1 < x < 3',
      choice_c: '-2 < x < 4',
      choice_d: '-1 < x < 4',
      explanation: 'Barcha qismlardan 1 ni ayiramiz: -4 < 2x < 6. 2 ga bo\'lamiz: -2 < x < 3.',
    },
    ru: {
      question_text: 'Если -3 < 2x + 1 < 7, каковы границы для x?',
      choice_a: '-2 < x < 3',
      choice_b: '-1 < x < 3',
      choice_c: '-2 < x < 4',
      choice_d: '-1 < x < 4',
      explanation: 'Вычтем 1 из всех частей: -4 < 2x < 6. Разделим на 2: -2 < x < 3.',
    },
  },
  'ALG-H-020': {
    uz: {
      question_text: 'O\'quvchi B bahosi olish uchun beshtа testda o\'rtacha kamida 80 ball olishi kerak. To\'rt testdan so\'ng ballari: 72, 85, 78, 90. Beshinchi testda minimal qancha ball olishi kerak?',
      choice_a: '70',
      choice_b: '75',
      choice_c: '80',
      choice_d: '85',
      explanation: 'To\'rt test yig\'indisi: 72 + 85 + 78 + 90 = 325. O\'rtacha ≥ 80 bo\'lishi uchun jami ≥ 400. Beshinchi test: x ≥ 400 - 325 = 75.',
    },
    ru: {
      question_text: 'Студенту нужно набрать среднее не менее 80 баллов на пяти тестах для оценки B. После четырёх тестов: 72, 85, 78, 90. Какой минимальный балл нужен на пятом тесте?',
      choice_a: '70',
      choice_b: '75',
      choice_c: '80',
      choice_d: '85',
      explanation: 'Сумма четырёх тестов: 325. Для среднего ≥ 80 нужна сумма ≥ 400. x ≥ 400 - 325 = 75.',
    },
  },
  'ALG-H-021': {
    uz: {
      question_text: 'Agar 5x - 3(2x - 4) = 2(x + 6) - 5x bo\'lsa, x nechaga teng?',
      choice_a: '-3',
      choice_b: '0',
      choice_c: '3',
      choice_d: '6',
      explanation: 'Chap tomon: -x + 12. O\'ng tomon: -3x + 12. -x + 12 = -3x + 12. 2x = 0. x = 0.',
    },
    ru: {
      question_text: 'Если 5x - 3(2x - 4) = 2(x + 6) - 5x, чему равно x?',
      choice_a: '-3',
      choice_b: '0',
      choice_c: '3',
      choice_d: '6',
      explanation: 'Левая часть: -x + 12. Правая часть: -3x + 12. -x + 12 = -3x + 12. 2x = 0. x = 0.',
    },
  },
  'ALG-H-022': {
    uz: {
      question_text: 'Agar f(x) = 3x + 5 va g(f(x)) = x bo\'lsa, g(14) nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'g, f ning teskari funksiyasi. Agar f(x) = 14 bo\'lsa, 3x + 5 = 14, x = 3. Demak g(14) = 3.',
    },
    ru: {
      question_text: 'Если f(x) = 3x + 5 и g(f(x)) = x, чему равно g(14)?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'g — обратная функция f. Если f(x) = 14, то 3x + 5 = 14, x = 3. Значит g(14) = 3.',
    },
  },
  'ALG-H-023': {
    uz: {
      question_text: 'AB kesmaning o\'rta nuqtasi (5, 3). Agar A = (2, 7) bo\'lsa, B ning koordinatalari qanday?',
      choice_a: '(7, -1)',
      choice_b: '(8, -1)',
      choice_c: '(8, 1)',
      choice_d: '(7, 1)',
      explanation: 'O\'rta nuqta formulasi: (2 + x)/2 = 5 → x = 8. (7 + y)/2 = 3 → y = -1. B = (8, -1).',
    },
    ru: {
      question_text: 'Середина отрезка AB — это (5, 3). Если A = (2, 7), каковы координаты B?',
      choice_a: '(7, -1)',
      choice_b: '(8, -1)',
      choice_c: '(8, 1)',
      choice_d: '(7, 1)',
      explanation: 'Формула середины: (2 + x)/2 = 5 → x = 8. (7 + y)/2 = 3 → y = -1. B = (8, -1).',
    },
  },
  'ALG-H-024': {
    uz: {
      question_text: 'Kema oqim bo\'ylab 2 soatda 30 milya va oqimga qarshi 3 soatda 30 milya yuradi. Oqim tezligi nechaga teng?',
      choice_a: '2 mph',
      choice_b: '2.5 mph',
      choice_c: '3 mph',
      choice_d: '5 mph',
      explanation: 'b + c = 15, b - c = 10. Qo\'shamiz: 2b = 25, b = 12.5. Ayiramiz: 2c = 5, c = 2.5 mph.',
    },
    ru: {
      question_text: 'Лодка плывёт 30 миль по течению за 2 часа и 30 миль против течения за 3 часа. Какова скорость течения?',
      choice_a: '2 mph',
      choice_b: '2.5 mph',
      choice_c: '3 mph',
      choice_d: '5 mph',
      explanation: 'b + c = 15, b - c = 10. Сложим: 2b = 25, b = 12.5. Вычтем: 2c = 5, c = 2.5 mph.',
    },
  },
  'ALG-H-025': {
    uz: {
      question_text: 'Ikkita ketma-ket toq sonlar yig\'indisi ko\'pi bilan 44. Kichikroq sonning eng katta qiymati nechaga teng?',
      choice_a: '19',
      choice_b: '21',
      choice_c: '23',
      choice_d: '25',
      explanation: 'n va n+2 deb olsak: 2n + 2 ≤ 44, 2n ≤ 42, n ≤ 21. 21 ga teng yoki undan kichik eng katta toq son 21.',
    },
    ru: {
      question_text: 'Сумма двух последовательных нечётных целых чисел не превышает 44. Каково наибольшее возможное значение меньшего числа?',
      choice_a: '19',
      choice_b: '21',
      choice_c: '23',
      choice_d: '25',
      explanation: 'Пусть числа n и n+2: 2n + 2 ≤ 44, n ≤ 21. Наибольшее нечётное число ≤ 21 — это 21.',
    },
  },
  'ALG-H-026': {
    uz: {
      question_text: 'Agar |3x + 2| = |x - 6| bo\'lsa, barcha yechimlarning ko\'paytmasi nechaga teng?',
      choice_a: '-8',
      choice_b: '-4',
      choice_c: '4',
      choice_d: '8',
      explanation: '1-holat: 3x + 2 = x - 6 → x = -4. 2-holat: 3x + 2 = -(x - 6) → x = 1. Ko\'paytma = -4 × 1 = -4.',
    },
    ru: {
      question_text: 'Если |3x + 2| = |x - 6|, чему равно произведение всех решений?',
      choice_a: '-8',
      choice_b: '-4',
      choice_c: '4',
      choice_d: '8',
      explanation: 'Случай 1: 3x + 2 = x - 6 → x = -4. Случай 2: 3x + 2 = -(x - 6) → x = 1. Произведение = -4.',
    },
  },
  'ALG-H-027': {
    uz: {
      question_text: 'y = f(x) grafigi burchak koeffitsienti 2 bo\'lgan va (1, 3) nuqtadan o\'tuvchi to\'g\'ri chiziq. Agar g(x) = f(x + 2) - 4 bo\'lsa, g ning y o\'qi bilan kesishish nuqtasi nechaga teng?',
      choice_a: '-3',
      choice_b: '-1',
      choice_c: '1',
      choice_d: '3',
      explanation: 'f(x) = 2x + 1. g(x) = f(x+2) - 4 = 2(x+2) + 1 - 4 = 2x + 1. Y o\'qi bilan kesishish nuqtasi = 1.',
    },
    ru: {
      question_text: 'График y = f(x) — это прямая с наклоном 2, проходящая через (1, 3). Если g(x) = f(x + 2) - 4, какова точка пересечения g с осью y?',
      choice_a: '-3',
      choice_b: '-1',
      choice_c: '1',
      choice_d: '3',
      explanation: 'f(x) = 2x + 1. g(x) = f(x+2) - 4 = 2x + 1. Точка пересечения с осью y = 1.',
    },
  },
  'ALG-H-028': {
    uz: {
      question_text: 'ABC uchburchagi uchlari: A(0, 0), B(6, 0), C(3, 6). A dan BC ning o\'rta nuqtasiga medianananing tenglamasi qanday?',
      choice_a: 'y = x',
      choice_b: 'y = 2x',
      choice_c: 'y = x/2',
      choice_d: 'y = 3x',
      explanation: 'BC ning o\'rta nuqtasi: ((6+3)/2, (0+6)/2) = (4.5, 3). A(0,0) dan (4.5, 3) ga burchak koeffitsienti = 3/4.5 = 2/3. Tenglama y = (2/3)x.',
    },
    ru: {
      question_text: 'Треугольник ABC с вершинами A(0, 0), B(6, 0), C(3, 6). Каково уравнение медианы из A к середине BC?',
      choice_a: 'y = x',
      choice_b: 'y = 2x',
      choice_c: 'y = x/2',
      choice_d: 'y = 3x',
      explanation: 'Середина BC: (4.5, 3). Из A(0,0) наклон = 3/4.5 = 2/3. Уравнение y = (2/3)x.',
    },
  },
  'ALG-H-029': {
    uz: {
      question_text: 'Kontsertda kattalar bileti 15 dollar va talabalar bileti 10 dollar. 400 ta bilet 5000 dollarga sotildi. Nechta kattalar bileti sotildi?',
      choice_a: '150',
      choice_b: '180',
      choice_c: '200',
      choice_d: '220',
      explanation: 'a + s = 400 va 15a + 10s = 5000. s = 400 - a ni qo\'yamiz: 5a = 1000. a = 200.',
    },
    ru: {
      question_text: 'На концерте взрослые билеты стоят $15, студенческие — $10. Было продано 400 билетов на сумму $5 000. Сколько взрослых билетов продано?',
      choice_a: '150',
      choice_b: '180',
      choice_c: '200',
      choice_d: '220',
      explanation: 'a + s = 400 и 15a + 10s = 5000. Подставим s = 400 - a: 5a = 1000. a = 200.',
    },
  },
  'ALG-H-030': {
    uz: {
      question_text: 'k ning qaysi qiymatida y > 2x - 3 va y < 2x + k sistemasi yechimga ega?',
      choice_a: 'k > 3',
      choice_b: 'k > 0',
      choice_c: 'k > -3',
      choice_d: 'k ning barcha qiymatlari',
      explanation: 'Yechim soha mavjud bo\'lishi uchun 2x + k > 2x - 3, demak k > -3.',
    },
    ru: {
      question_text: 'При каких значениях k система y > 2x - 3 и y < 2x + k имеет решение?',
      choice_a: 'k > 3',
      choice_b: 'k > 0',
      choice_c: 'k > -3',
      choice_d: 'Все значения k',
      explanation: 'Для существования области решений необходимо 2x + k > 2x - 3, значит k > -3.',
    },
  },
  'ALG-H-031': {
    uz: {
      question_text: 'Agar (2x + 1)/(x - 2) = 3 bo\'lsa, x nechaga teng?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'Ko\'ndalang ko\'paytiramiz: 2x + 1 = 3(x - 2) = 3x - 6. x ni ayiramiz: 1 = x - 6 - x + 1. x = 7.',
    },
    ru: {
      question_text: 'Если (2x + 1)/(x - 2) = 3, чему равно x?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'Перемножим: 2x + 1 = 3(x - 2) = 3x - 6. Вычтем 2x: 1 = x - 6. x = 7.',
    },
  },
  'ALG-H-032': {
    uz: {
      question_text: 'Agar |4x - 8| = 12 bo\'lsa, barcha yechimlarning ko\'paytmasi nechaga teng?',
      choice_a: '-5',
      choice_b: '-1',
      choice_c: '1',
      choice_d: '5',
      explanation: '1-holat: 4x - 8 = 12 → x = 5. 2-holat: 4x - 8 = -12 → x = -1. Ko\'paytma = 5 × (-1) = -5.',
    },
    ru: {
      question_text: 'Если |4x - 8| = 12, чему равно произведение всех решений?',
      choice_a: '-5',
      choice_b: '-1',
      choice_c: '1',
      choice_d: '5',
      explanation: 'Случай 1: 4x - 8 = 12 → x = 5. Случай 2: 4x - 8 = -12 → x = -1. Произведение = -5.',
    },
  },
  'ALG-H-033': {
    uz: {
      question_text: 'Agar f(x) = ax + 2 va f(f(1)) = 14 bo\'lsa, a nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'f(1) = a + 2. f(a + 2) = a(a + 2) + 2 = a² + 2a + 2 = 14. a² + 2a - 12 = 0. (a + 4)(a - 2) = 0. a = 2.',
    },
    ru: {
      question_text: 'Если f(x) = ax + 2 и f(f(1)) = 14, чему равно a?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'f(1) = a + 2. f(a + 2) = a² + 2a + 2 = 14. a² + 2a - 12 = 0. (a + 4)(a - 2) = 0. a = 2.',
    },
  },
  'ALG-H-034': {
    uz: {
      question_text: 'f chiziqli funksiya. f(3) = 10 va f(8) = 25. f(x) = 0 bo\'lishi uchun x nechaga teng?',
      choice_a: '-2/3',
      choice_b: '-1',
      choice_c: '1/3',
      choice_d: '2/3',
      explanation: 'Burchak koeffitsienti = (25-10)/(8-3) = 3. f(x) = 3x + b. f(3) = 10: b = 1. 3x + 1 = 0 → x = -1/3.',
    },
    ru: {
      question_text: 'Функция f — линейная. f(3) = 10 и f(8) = 25. При каком x выполняется f(x) = 0?',
      choice_a: '-2/3',
      choice_b: '-1',
      choice_c: '1/3',
      choice_d: '2/3',
      explanation: 'Наклон = (25-10)/(8-3) = 3. f(x) = 3x + b. Из f(3) = 10: b = 1. 3x + 1 = 0 → x = -1/3.',
    },
  },
  'ALG-H-035': {
    uz: {
      question_text: 'p to\'g\'ri chizig\'i (2, 5) nuqtadan o\'tadi va 3x + 6y = 12 to\'g\'ri chiziqqa perpendikulyar. p to\'g\'ri chiziqning x o\'qi bilan kesishish nuqtasi nechaga teng?',
      choice_a: '-6',
      choice_b: '-4',
      choice_c: '0',
      choice_d: '4',
      explanation: '3x + 6y = 12 ni o\'zgartiramiz: y = -x/2 + 2, burchak koeffitsienti -1/2. Perpendikulyar burchak koeffitsienti = 2. p chizig\'i: y = 2x + 1. x o\'qi bilan: x = -1/2.',
    },
    ru: {
      question_text: 'Прямая p проходит через (2, 5) и перпендикулярна прямой 3x + 6y = 12. Каков x-перехват прямой p?',
      choice_a: '-6',
      choice_b: '-4',
      choice_c: '0',
      choice_d: '4',
      explanation: 'Перепишем: y = -x/2 + 2, наклон -1/2. Перпендикулярный наклон = 2. y = 2x + 1. x-перехват: x = -1/2.',
    },
  },
  'ALG-H-036': {
    uz: {
      question_text: 'ABC uchburchagi uchlari: A(0, 0), B(8, 0), C(4, 6). Uchburchak yuzasi nechaga teng?',
      choice_a: '18',
      choice_b: '24',
      choice_c: '32',
      choice_d: '48',
      explanation: 'Asos AB = 8 (x o\'qi bo\'ylab). Balandlik = C ning y koordinatasi = 6. Yuza = (1/2) × 8 × 6 = 24.',
    },
    ru: {
      question_text: 'Треугольник ABC с вершинами A(0, 0), B(8, 0), C(4, 6). Чему равна площадь треугольника?',
      choice_a: '18',
      choice_b: '24',
      choice_c: '32',
      choice_d: '48',
      explanation: 'Основание AB = 8. Высота = y-координата C = 6. Площадь = (1/2) × 8 × 6 = 24.',
    },
  },
  'ALG-H-037': {
    uz: {
      question_text: 'ax + 4y = 12 va 3x - 2y = 6 sistemasida x = 2 bo\'lganda yechim mavjud bo\'lishi uchun a ning qiymati nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '6',
      explanation: '3(2) - 2y = 6 dan y = 0. a(2) + 0 = 12 ga qo\'yamiz: 2a = 12, a = 6.',
    },
    ru: {
      question_text: 'При каком значении a система ax + 4y = 12 и 3x - 2y = 6 имеет решение при x = 2?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '6',
      explanation: 'Из 3(2) - 2y = 6 получаем y = 0. Подставим в ax + 4y = 12: 2a = 12, a = 6.',
    },
  },
  'ALG-H-038': {
    uz: {
      question_text: 'Kema 2 soatda oqim bo\'ylab 24 milya va 4 soatda oqimga qarshi 24 milya yuradi. Kemaning suv tinchlangandagi tezligi nechaga teng?',
      choice_a: '8 mph',
      choice_b: '9 mph',
      choice_c: '10 mph',
      choice_d: '12 mph',
      explanation: 'b + c = 12, b - c = 6. Qo\'shamiz: 2b = 18, b = 9 mph.',
    },
    ru: {
      question_text: 'Лодка проплывает 24 мили по течению за 2 часа и 24 мили против течения за 4 часа. Какова скорость лодки в стоячей воде?',
      choice_a: '8 mph',
      choice_b: '9 mph',
      choice_c: '10 mph',
      choice_d: '12 mph',
      explanation: 'b + c = 12, b - c = 6. Сложим: 2b = 18, b = 9 mph.',
    },
  },
  'ALG-H-039': {
    uz: {
      question_text: 'Agar -2 ≤ 3x - 5 < 10 bo\'lsa, x qanday qiymatlar olishi mumkin?',
      choice_a: '-1 ≤ x < 5',
      choice_b: '1 ≤ x < 5',
      choice_c: '-1 < x ≤ 5',
      choice_d: '1 < x ≤ 5',
      explanation: 'Barcha qismlarga 5 ni qo\'shamiz: 3 ≤ 3x < 15. 3 ga bo\'lamiz: 1 ≤ x < 5.',
    },
    ru: {
      question_text: 'Если -2 ≤ 3x - 5 < 10, какие значения может принимать x?',
      choice_a: '-1 ≤ x < 5',
      choice_b: '1 ≤ x < 5',
      choice_c: '-1 < x ≤ 5',
      choice_d: '1 < x ≤ 5',
      explanation: 'Прибавим 5 ко всем частям: 3 ≤ 3x < 15. Разделим на 3: 1 ≤ x < 5.',
    },
  },
  'ALG-H-040': {
    uz: {
      question_text: 'y ≥ x, y ≤ 4 va x ≥ 0 bilan aniqlangan soha uchburchak hosil qiladi. Uning yuzasi nechaga teng?',
      choice_a: '4',
      choice_b: '8',
      choice_c: '12',
      choice_d: '16',
      explanation: 'Uchlari: (0, 0), (0, 4) va (4, 4). Asos = 4, balandlik = 4. Yuza = (1/2) × 4 × 4 = 8.',
    },
    ru: {
      question_text: 'Область, заданная y ≥ x, y ≤ 4 и x ≥ 0, образует треугольник. Чему равна его площадь?',
      choice_a: '4',
      choice_b: '8',
      choice_c: '12',
      choice_d: '16',
      explanation: 'Вершины: (0, 0), (0, 4) и (4, 4). Основание = 4, высота = 4. Площадь = (1/2) × 4 × 4 = 8.',
    },
  },
  'ALG-H-041': {
    uz: {
      question_text: 'Agar 3/(x + 1) + 2/(x - 1) = 1 bo\'lsa, x nechaga teng?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: '(x+1)(x-1) ga ko\'paytiramiz: 3(x-1) + 2(x+1) = x² - 1. 5x - 1 = x² - 1. x² - 5x = 0. x(x-5) = 0. x = 5.',
    },
    ru: {
      question_text: 'Если 3/(x + 1) + 2/(x - 1) = 1, чему равно x?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: 'Умножим на (x+1)(x-1): 5x - 1 = x² - 1. x² - 5x = 0. x(x-5) = 0. x = 5.',
    },
  },
  'ALG-H-042': {
    uz: {
      question_text: '2(3x + k) = 6x + 8 tenglamasi yechimga ega bo\'lmasligi uchun k ning qiymati nechaga teng?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '4 dan boshqa istalgan qiymat',
      explanation: 'Qavsni ochamiz: 6x + 2k = 6x + 8. 6x ni ayiramiz: 2k = 8. k = 4 da cheksiz ko\'p yechim, k ≠ 4 da yechim yo\'q.',
    },
    ru: {
      question_text: 'При каком значении k уравнение 2(3x + k) = 6x + 8 не имеет решений?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: 'Любое значение, кроме 4',
      explanation: 'Раскроем: 6x + 2k = 6x + 8. При k = 4 — бесконечно много решений, при k ≠ 4 — нет решений.',
    },
  },
  'ALG-H-043': {
    uz: {
      question_text: 'Agar f(x) = 2x - 3 bo\'lsa, f⁻¹(7) nechaga teng?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'f⁻¹(7) — bu f(x) = 7 bo\'lgandagi x ni topish. 2x - 3 = 7, 2x = 10, x = 5. Demak f⁻¹(7) = 5.',
    },
    ru: {
      question_text: 'Если f(x) = 2x - 3, чему равно f⁻¹(7)?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'f⁻¹(7) означает найти x при f(x) = 7. 2x - 3 = 7, x = 5. Значит f⁻¹(7) = 5.',
    },
  },
  'ALG-H-044': {
    uz: {
      question_text: 'Suv ombori doimiy tezlikda bo\'shalmoqda. Soat 8:00 da 500 gallon, soat 11:00 da 350 gallon. Omborcha qachon bo\'sh bo\'ladi?',
      choice_a: '18:00',
      choice_b: '19:00',
      choice_c: '20:00',
      choice_d: '21:00',
      explanation: 'Bo\'shalish tezligi = 150/3 = 50 gal/soat. Soat 11:00 da 350 gallon. 350/50 = 7 soat. 11:00 + 7 soat = 18:00.',
    },
    ru: {
      question_text: 'Резервуар с водой опустошается с постоянной скоростью. В 8:00 — 500 галлонов, в 11:00 — 350 галлонов. Когда резервуар опустеет?',
      choice_a: '18:00',
      choice_b: '19:00',
      choice_c: '20:00',
      choice_d: '21:00',
      explanation: 'Скорость утечки = 150/3 = 50 гал/ч. В 11:00 — 350 галлонов. 350/50 = 7 ч. 11:00 + 7 ч = 18:00.',
    },
  },
  'ALG-H-045': {
    uz: {
      question_text: '(3, k) nuqtadan y = 2 to\'g\'ri chiziqqa masofa 5 birlik. k ning barcha mumkin bo\'lgan qiymatlarining yig\'indisi nechaga teng?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '7',
      choice_d: '10',
      explanation: '|k - 2| = 5. k - 2 = 5 → k = 7. k - 2 = -5 → k = -3. Yig\'indi = 7 + (-3) = 4.',
    },
    ru: {
      question_text: 'Расстояние от точки (3, k) до прямой y = 2 равно 5 единицам. Чему равна сумма всех возможных значений k?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '7',
      choice_d: '10',
      explanation: '|k - 2| = 5. k = 7 или k = -3. Сумма = 7 + (-3) = 4.',
    },
  },
  'ALG-H-046': {
    uz: {
      question_text: 'y = 2x + 3 va y = -x + 9 to\'g\'ri chiziqlar P nuqtada kesishadi. P dan koordinata boshiga masofa nechaga teng?',
      choice_a: '√41',
      choice_b: '√45',
      choice_c: '√50',
      choice_d: '√58',
      explanation: 'Kesishish: 2x + 3 = -x + 9, x = 2, y = 7. P = (2, 7). Masofa = √(4 + 49) = √53.',
    },
    ru: {
      question_text: 'Прямые y = 2x + 3 и y = -x + 9 пересекаются в точке P. Каково расстояние от P до начала координат?',
      choice_a: '√41',
      choice_b: '√45',
      choice_c: '√50',
      choice_d: '√58',
      explanation: 'Пересечение: x = 2, y = 7. P = (2, 7). Расстояние = √(4 + 49) = √53.',
    },
  },
  'ALG-H-047': {
    uz: {
      question_text: '2x + 3y = 7 va 4x + ky = 14 sistemasi cheksiz ko\'p yechimga ega bo\'lishi uchun k nechaga teng?',
      choice_a: '3',
      choice_b: '6',
      choice_c: '9',
      choice_d: '12',
      explanation: 'Cheksiz ko\'p yechim uchun ikkinchi tenglama birinchining ko\'paytmasi bo\'lishi kerak. 4x + ky = 2(2x + 3y) = 4x + 6y. Demak k = 6.',
    },
    ru: {
      question_text: 'При каком значении k система 2x + 3y = 7 и 4x + ky = 14 имеет бесконечно много решений?',
      choice_a: '3',
      choice_b: '6',
      choice_c: '9',
      choice_d: '12',
      explanation: 'Второе уравнение должно быть кратным первому. 4x + ky = 2(2x + 3y) = 4x + 6y. k = 6.',
    },
  },
  'ALG-H-048': {
    uz: {
      question_text: 'Do\'kon ruchkalarni $1.50 va qalamlarni $0.75 dan sotadi. Mijoz 20 ta buyum 24 dollarga xarid qildi. Nechta ruchka sotib olingan?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: 'p + c = 20 va 1.5p + 0.75c = 24. c = 20 - p ni qo\'yamiz: 3p = 36. p = 12.',
    },
    ru: {
      question_text: 'Магазин продаёт ручки по $1,50 и карандаши по $0,75. Покупатель купил 20 предметов за $24. Сколько ручек купили?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: 'p + c = 20 и 1.5p + 0.75c = 24. Подставим c = 20 - p: 3p = 36. p = 12.',
    },
  },
  'ALG-H-049': {
    uz: {
      question_text: '3n - 7 < 2(n + 3) bo\'ladigan eng katta butun son n nechaga teng?',
      choice_a: '10',
      choice_b: '11',
      choice_c: '12',
      choice_d: '13',
      explanation: 'Qavsni ochamiz: 3n - 7 < 2n + 6. n - 7 < 6. n < 13. Eng katta butun son 12.',
    },
    ru: {
      question_text: 'Каково наибольшее целое n, при котором 3n - 7 < 2(n + 3)?',
      choice_a: '10',
      choice_b: '11',
      choice_c: '12',
      choice_d: '13',
      explanation: 'Раскроем: 3n - 7 < 2n + 6. n - 7 < 6. n < 13. Наибольшее целое — 12.',
    },
  },
  'ALG-H-050': {
    uz: {
      question_text: 'Telefon tarixi bazaviy to\'lov $20 va har bir xabar uchun $0.05. Byudjet $35. Maksimal nechta xabar yuborish mumkin?',
      choice_a: '200',
      choice_b: '250',
      choice_c: '300',
      choice_d: '350',
      explanation: '20 + 0.05t ≤ 35. 0.05t ≤ 15. t ≤ 300. Maksimal 300 ta xabar.',
    },
    ru: {
      question_text: 'Тарифный план взимает базовую плату $20 и $0,05 за каждое SMS. Бюджет $35. Максимальное количество SMS?',
      choice_a: '200',
      choice_b: '250',
      choice_c: '300',
      choice_d: '350',
      explanation: '20 + 0.05t ≤ 35. 0.05t ≤ 15. t ≤ 300. Максимум 300 SMS.',
    },
  },
  'ALG-H-051': {
    uz: {
      question_text: 'Agar |x + 3| + |x - 3| = 10 bo\'lsa, qaysi ifoda to\'g\'ri?',
      choice_a: 'faqat x = 2',
      choice_b: 'faqat x = -2',
      choice_c: '-5 ≤ x ≤ 5',
      choice_d: 'x = 5 yoki x = -5',
      explanation: 'x ≥ 3 da: 2x = 10, x = 5. x ≤ -3 da: -2x = 10, x = -5. -3 < x < 3 da yig\'indi 6 < 10. Demak x = 5 yoki x = -5.',
    },
    ru: {
      question_text: 'Если |x + 3| + |x - 3| = 10, какое утверждение верно?',
      choice_a: 'только x = 2',
      choice_b: 'только x = -2',
      choice_c: '-5 ≤ x ≤ 5',
      choice_d: 'x = 5 или x = -5',
      explanation: 'При x ≥ 3: 2x = 10, x = 5. При x ≤ -3: -2x = 10, x = -5. Значит x = 5 или x = -5.',
    },
  },
  'ALG-H-052': {
    uz: {
      question_text: 'Agar f(x) = 3x + 1 va g(x) = 2x - 5 bo\'lsa, f(x) = g(x + 4) bo\'lishi uchun x nechaga teng?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '3',
      explanation: 'g(x + 4) = 2(x + 4) - 5 = 2x + 3. 3x + 1 = 2x + 3. x = 2.',
    },
    ru: {
      question_text: 'Если f(x) = 3x + 1 и g(x) = 2x - 5, при каком x выполняется f(x) = g(x + 4)?',
      choice_a: '0',
      choice_b: '1',
      choice_c: '2',
      choice_d: '3',
      explanation: 'g(x + 4) = 2(x + 4) - 5 = 2x + 3. 3x + 1 = 2x + 3. x = 2.',
    },
  },
  'ALG-H-053': {
    uz: {
      question_text: 'To\'g\'ri chiziq (a, 8) va (6, 2) nuqtalardan o\'tadi va burchak koeffitsienti -2. a nechaga teng?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'Burchak koeffitsienti = (2 - 8)/(6 - a) = -6/(6 - a) = -2. -6 = -2(6 - a). 2a = 6. a = 3.',
    },
    ru: {
      question_text: 'Прямая проходит через (a, 8) и (6, 2) с угловым коэффициентом -2. Чему равно a?',
      choice_a: '2',
      choice_b: '3',
      choice_c: '4',
      choice_d: '5',
      explanation: 'Наклон = (2 - 8)/(6 - a) = -6/(6 - a) = -2. -6 = -2(6 - a). 2a = 6. a = 3.',
    },
  },
  'ALG-H-054': {
    uz: {
      question_text: 'Bir son ikkinchisidan 4 ko\'proq va ikki baravari. Yig\'indi 25. Katta son nechaga teng?',
      choice_a: '16',
      choice_b: '17',
      choice_c: '18',
      choice_d: '19',
      explanation: 'y = 2x + 4 va x + y = 25. x + 2x + 4 = 25, 3x = 21, x = 7. y = 18.',
    },
    ru: {
      question_text: 'Одно число на 4 больше удвоенного другого. Их сумма равна 25. Чему равно большее число?',
      choice_a: '16',
      choice_b: '17',
      choice_c: '18',
      choice_d: '19',
      explanation: 'y = 2x + 4 и x + y = 25. x + 2x + 4 = 25, 3x = 21, x = 7. y = 18.',
    },
  },
  'ALG-H-055': {
    uz: {
      question_text: '2x + k > x + 5 tengsizligining yechimi x > 3 bo\'lishi uchun k ning qiymati nechaga teng?',
      choice_a: 'k = 2',
      choice_b: 'k = 8',
      choice_c: 'k > 2',
      choice_d: 'k < 8',
      explanation: 'Soddalashtirамiz: x + k > 5, demak x > 5 - k. Bu x > 3 ga teng bo\'lishi uchun 5 - k = 3, k = 2.',
    },
    ru: {
      question_text: 'При каком k решением неравенства 2x + k > x + 5 является x > 3?',
      choice_a: 'k = 2',
      choice_b: 'k = 8',
      choice_c: 'k > 2',
      choice_d: 'k < 8',
      explanation: 'Упростим: x + k > 5, значит x > 5 - k. Чтобы это равнялось x > 3, нужно 5 - k = 3, k = 2.',
    },
  },
  'ALG-H-056': {
    uz: {
      question_text: 'Agar 2x - 3y = 7 va y = 3 bo\'lsa, 4x - 6y nechaga teng?',
      choice_a: '7',
      choice_b: '14',
      choice_c: '21',
      choice_d: '28',
      explanation: '4x - 6y = 2(2x - 3y) = 2(7) = 14.',
    },
    ru: {
      question_text: 'Если 2x - 3y = 7 и y = 3, чему равно 4x - 6y?',
      choice_a: '7',
      choice_b: '14',
      choice_c: '21',
      choice_d: '28',
      explanation: '4x - 6y = 2(2x - 3y) = 2(7) = 14.',
    },
  },
  'ALG-H-057': {
    uz: {
      question_text: 'f(x) = mx + b grafigi (2, 5) va (5, 14) nuqtalardan o\'tadi. f(-1) nechaga teng?',
      choice_a: '-4',
      choice_b: '-3',
      choice_c: '-2',
      choice_d: '-1',
      explanation: 'Burchak koeffitsienti = (14-5)/(5-2) = 3. (2, 5) dan: b = -1. f(x) = 3x - 1. f(-1) = -4.',
    },
    ru: {
      question_text: 'График f(x) = mx + b проходит через (2, 5) и (5, 14). Чему равно f(-1)?',
      choice_a: '-4',
      choice_b: '-3',
      choice_c: '-2',
      choice_d: '-1',
      explanation: 'Наклон = (14-5)/(5-2) = 3. Из (2, 5): b = -1. f(x) = 3x - 1. f(-1) = -4.',
    },
  },
  'ALG-H-058': {
    uz: {
      question_text: '(2, 4) dan (8, 4) gacha bo\'lgan kesmaning perpendikulyar ikkilamchisining tenglamasi qanday?',
      choice_a: 'x = 3',
      choice_b: 'x = 5',
      choice_c: 'y = 4',
      choice_d: 'y = 5',
      explanation: 'O\'rta nuqta = (5, 4). Kesma gorizontal (bir xil y), shuning uchun perpendikulyar vertikal: x = 5.',
    },
    ru: {
      question_text: 'Каково уравнение серединного перпендикуляра к отрезку от (2, 4) до (8, 4)?',
      choice_a: 'x = 3',
      choice_b: 'x = 5',
      choice_c: 'y = 4',
      choice_d: 'y = 5',
      explanation: 'Середина = (5, 4). Отрезок горизонтальный, поэтому перпендикуляр вертикальный: x = 5.',
    },
  },
  'ALG-H-059': {
    uz: {
      question_text: '$10,000 investitsiya 4% va 6% yillik foizli hisobvaraqlarga bo\'lingan. Jami foiz $520 bo\'lsa, 6% hisobvaraqda qancha pul bor?',
      choice_a: '$4,000',
      choice_b: '$5,000',
      choice_c: '$6,000',
      choice_d: '$7,000',
      explanation: 'x + y = 10000 va 0.04x + 0.06y = 520. x = 10000 - y ni qo\'yamiz: 0.02y = 120. y = 6000.',
    },
    ru: {
      question_text: 'Инвестиция $10 000 разделена между счетами с доходностью 4% и 6% годовых. Общий процентный доход — $520. Сколько денег на счёте под 6%?',
      choice_a: '$4,000',
      choice_b: '$5,000',
      choice_c: '$6,000',
      choice_d: '$7,000',
      explanation: 'x + y = 10000 и 0.04x + 0.06y = 520. Подставим x = 10000 - y: 0.02y = 120. y = 6000.',
    },
  },
  'ALG-H-060': {
    uz: {
      question_text: 'x ≥ 0, y ≥ 0 va x + 2y ≤ 8 bilan chegaralangan sohada x + y ning maksimal qiymati qaysi nuqtada erishiladi?',
      choice_a: '(0, 4)',
      choice_b: '(4, 2)',
      choice_c: '(8, 0)',
      choice_d: '(0, 0)',
      explanation: 'Uchlari: (0, 0), (0, 4), (8, 0). (0,0) da: 0. (0,4) da: 4. (8,0) da: 8. Maksimal 8, (8, 0) nuqtada.',
    },
    ru: {
      question_text: 'В области, ограниченной x ≥ 0, y ≥ 0 и x + 2y ≤ 8, в какой точке x + y достигает максимума?',
      choice_a: '(0, 4)',
      choice_b: '(4, 2)',
      choice_c: '(8, 0)',
      choice_d: '(0, 0)',
      explanation: 'Вершины: (0, 0), (0, 4), (8, 0). При (8, 0): x + y = 8 — максимум.',
    },
  },

  'GEO-E-001': {
    uz: {
      question_text: "To'g'ri to'rtburchakning uzunligi 8 sm va eni 5 sm. Uning yuzasi qancha?",
      choice_a: '13 cm²',
      choice_b: '26 cm²',
      choice_c: '40 cm²',
      choice_d: '80 cm²',
      explanation: "To'g'ri to'rtburchak yuzasi = uzunlik × en = 8 × 5 = 40 cm².",
    },
    ru: {
      question_text: 'Прямоугольник имеет длину 8 см и ширину 5 см. Чему равна его площадь?',
      choice_a: '13 cm²',
      choice_b: '26 cm²',
      choice_c: '40 cm²',
      choice_d: '80 cm²',
      explanation: 'Площадь прямоугольника = длина × ширина = 8 × 5 = 40 cm².',
    },
  },
  'GEO-E-002': {
    uz: {
      question_text: "Uchburchakda ikki burchak 45° va 65°ni tashkil etadi. Uchinchi burchak necha gradus?",
      choice_a: '60°',
      choice_b: '70°',
      choice_c: '80°',
      choice_d: '110°',
      explanation: "Uchburchak burchaklari yig'indisi = 180°. Uchinchi burchak = 180° - 45° - 65° = 70°.",
    },
    ru: {
      question_text: 'В треугольнике два угла равны 45° и 65°. Чему равен третий угол?',
      choice_a: '60°',
      choice_b: '70°',
      choice_c: '80°',
      choice_d: '110°',
      explanation: 'Сумма углов треугольника = 180°. Третий угол = 180° - 45° - 65° = 70°.',
    },
  },
  'GEO-E-003': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda bir katet 3, ikkinchi katet 4 bo'lsa, gipotenuza qancha?",
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '12',
      explanation: "Pifagor teoremasi bo'yicha: c² = 3² + 4² = 9 + 16 = 25, demak c = 5.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике один катет равен 3, другой — 4. Чему равна гипотенуза?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '12',
      explanation: 'По теореме Пифагора: c² = 3² + 4² = 9 + 16 = 25, значит c = 5.',
    },
  },
  'GEO-E-004': {
    uz: {
      question_text: "Aylananing radiusi 7. Uning diametri qancha?",
      choice_a: '3.5',
      choice_b: '7',
      choice_c: '14',
      choice_d: '49',
      explanation: 'Diametr = 2 × radius = 2 × 7 = 14.',
    },
    ru: {
      question_text: 'Радиус окружности равен 7. Чему равен её диаметр?',
      choice_a: '3.5',
      choice_b: '7',
      choice_c: '14',
      choice_d: '49',
      explanation: 'Диаметр = 2 × радиус = 2 × 7 = 14.',
    },
  },
  'GEO-E-005': {
    uz: {
      question_text: "Tomoni 6 bo'lgan kvadratning yuzasi qancha?",
      choice_a: '12',
      choice_b: '24',
      choice_c: '36',
      choice_d: '48',
      explanation: "Kvadrat yuzasi = tomon² = 6² = 36.",
    },
    ru: {
      question_text: 'Чему равна площадь квадрата со стороной 6?',
      choice_a: '12',
      choice_b: '24',
      choice_c: '36',
      choice_d: '48',
      explanation: 'Площадь квадрата = сторона² = 6² = 36.',
    },
  },
  'GEO-E-006': {
    uz: {
      question_text: "Ikki parallel chiziqni kesuvchi o'tadi. Agar bir burchak 120° bo'lsa, unga mos keluvchi burchak qancha?",
      choice_a: '60°',
      choice_b: '90°',
      choice_c: '120°',
      choice_d: '180°',
      explanation: "Parallel chiziqlarni kesuvchi hosil qilgan mos keluvchi burchaklar teng. Demak burchak 120°.",
    },
    ru: {
      question_text: 'Две параллельные прямые пересечены секущей. Если один угол равен 120°, чему равен соответственный угол?',
      choice_a: '60°',
      choice_b: '90°',
      choice_c: '120°',
      choice_d: '180°',
      explanation: 'Соответственные углы при параллельных прямых и секущей равны. Значит угол равен 120°.',
    },
  },
  'GEO-E-007': {
    uz: {
      question_text: "Radiusi 5 bo'lgan aylananing aylanasi qancha? (π ≈ 3.14 deb oling)",
      choice_a: '15.7',
      choice_b: '25',
      choice_c: '31.4',
      choice_d: '78.5',
      explanation: 'Aylana uzunligi = 2πr = 2 × 3.14 × 5 = 31.4.',
    },
    ru: {
      question_text: 'Чему равна длина окружности с радиусом 5? (Используйте π ≈ 3.14)',
      choice_a: '15.7',
      choice_b: '25',
      choice_c: '31.4',
      choice_d: '78.5',
      explanation: 'Длина окружности = 2πr = 2 × 3.14 × 5 = 31.4.',
    },
  },
  'GEO-E-008': {
    uz: {
      question_text: "Kubning qirrasi 3. Uning hajmi qancha?",
      choice_a: '9',
      choice_b: '18',
      choice_c: '27',
      choice_d: '54',
      explanation: "Kub hajmi = qirra³ = 3³ = 27.",
    },
    ru: {
      question_text: 'Ребро куба равно 3. Чему равен его объём?',
      choice_a: '9',
      choice_b: '18',
      choice_c: '27',
      choice_d: '54',
      explanation: 'Объём куба = ребро³ = 3³ = 27.',
    },
  },
  'GEO-E-009': {
    uz: {
      question_text: "Teng yonli uchburchakda ikkita teng burchak 50°dan. Uchinchi burchak qancha?",
      choice_a: '50°',
      choice_b: '80°',
      choice_c: '100°',
      choice_d: '130°',
      explanation: "Uchinchi burchak = 180° - 50° - 50° = 80°.",
    },
    ru: {
      question_text: 'Равнобедренный треугольник имеет два равных угла по 50°. Чему равен третий угол?',
      choice_a: '50°',
      choice_b: '80°',
      choice_c: '100°',
      choice_d: '130°',
      explanation: 'Третий угол = 180° - 50° - 50° = 80°.',
    },
  },
  'GEO-E-010': {
    uz: {
      question_text: "45-45-90 uchburchakda bir katet 5 bo'lsa, gipotenuza qancha?",
      choice_a: '5',
      choice_b: '5√2',
      choice_c: '10',
      choice_d: '5√3',
      explanation: "45-45-90 uchburchakda gipotenuza = katet × √2 = 5√2.",
    },
    ru: {
      question_text: 'В треугольнике 45-45-90 один катет равен 5. Чему равна гипотенуза?',
      choice_a: '5',
      choice_b: '5√2',
      choice_c: '10',
      choice_d: '5√3',
      explanation: 'В треугольнике 45-45-90 гипотенуза = катет × √2 = 5√2.',
    },
  },
  'GEO-E-011': {
    uz: {
      question_text: "Uzunligi 10, eni 4 bo'lgan to'g'ri to'rtburchakning perimetri qancha?",
      choice_a: '14',
      choice_b: '28',
      choice_c: '40',
      choice_d: '44',
      explanation: "Perimetr = 2(uzunlik + en) = 2(10 + 4) = 28.",
    },
    ru: {
      question_text: 'Чему равен периметр прямоугольника с длиной 10 и шириной 4?',
      choice_a: '14',
      choice_b: '28',
      choice_c: '40',
      choice_d: '44',
      explanation: 'Периметр = 2(длина + ширина) = 2(10 + 4) = 28.',
    },
  },
  'GEO-E-012': {
    uz: {
      question_text: "Ikkita burchak qo'shimcha. Agar biri 70° bo'lsa, ikkinchisi qancha?",
      choice_a: '20°',
      choice_b: '70°',
      choice_c: '90°',
      choice_d: '110°',
      explanation: "Qo'shimcha burchaklar yig'indisi 180°. Ikkinchi burchak = 180° - 70° = 110°.",
    },
    ru: {
      question_text: 'Два угла являются смежными. Если один угол равен 70°, чему равен другой?',
      choice_a: '20°',
      choice_b: '70°',
      choice_c: '90°',
      choice_d: '110°',
      explanation: 'Смежные углы в сумме дают 180°. Другой угол = 180° - 70° = 110°.',
    },
  },
  'GEO-E-013': {
    uz: {
      question_text: "Radiusi 3 bo'lgan aylananing yuzasi qancha? (Javobni π orqali ifodalang)",
      choice_a: '3π',
      choice_b: '6π',
      choice_c: '9π',
      choice_d: '12π',
      explanation: "Yuza = πr² = π(3)² = 9π.",
    },
    ru: {
      question_text: 'Чему равна площадь круга с радиусом 3? (Оставьте ответ в виде π)',
      choice_a: '3π',
      choice_b: '6π',
      choice_c: '9π',
      choice_d: '12π',
      explanation: 'Площадь = πr² = π(3)² = 9π.',
    },
  },
  'GEO-E-014': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda gipotenuza 10, bir katet 6 bo'lsa, ikkinchi katet qancha?",
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: "Pifagor teoremasi: 6² + b² = 10² → 36 + b² = 100 → b² = 64 → b = 8.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике гипотенуза равна 10, один катет — 6. Чему равен другой катет?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: 'По теореме Пифагора: 6² + b² = 10² → 36 + b² = 100 → b² = 64 → b = 8.',
    },
  },
  'GEO-E-015': {
    uz: {
      question_text: "Asosi 12, balandligi 5 bo'lgan uchburchakning yuzasi qancha?",
      choice_a: '17',
      choice_b: '30',
      choice_c: '60',
      choice_d: '120',
      explanation: "Yuza = (1/2) × asos × balandlik = (1/2) × 12 × 5 = 30.",
    },
    ru: {
      question_text: 'Чему равна площадь треугольника с основанием 12 и высотой 5?',
      choice_a: '17',
      choice_b: '30',
      choice_c: '60',
      choice_d: '120',
      explanation: 'Площадь = (1/2) × основание × высота = (1/2) × 12 × 5 = 30.',
    },
  },
  'GEO-E-016': {
    uz: {
      question_text: "Ikkita burchak to'ldiruvchi. Agar biri 35° bo'lsa, ikkinchisi qancha?",
      choice_a: '35°',
      choice_b: '55°',
      choice_c: '65°',
      choice_d: '145°',
      explanation: "To'ldiruvchi burchaklar yig'indisi 90°. Ikkinchi burchak = 90° - 35° = 55°.",
    },
    ru: {
      question_text: 'Два угла являются дополнительными. Если один равен 35°, чему равен другой?',
      choice_a: '35°',
      choice_b: '55°',
      choice_c: '65°',
      choice_d: '145°',
      explanation: 'Дополнительные углы в сумме дают 90°. Другой угол = 90° - 35° = 55°.',
    },
  },
  'GEO-E-017': {
    uz: {
      question_text: "Aylananing diametri 10 bo'lsa, uning radiusi qancha?",
      choice_a: '2.5',
      choice_b: '5',
      choice_c: '10',
      choice_d: '20',
      explanation: "Radius = diametr / 2 = 10 / 2 = 5.",
    },
    ru: {
      question_text: 'Диаметр окружности равен 10. Чему равен её радиус?',
      choice_a: '2.5',
      choice_b: '5',
      choice_c: '10',
      choice_d: '20',
      explanation: 'Радиус = диаметр / 2 = 10 / 2 = 5.',
    },
  },
  'GEO-E-018': {
    uz: {
      question_text: "To'g'ri to'rtburchakli prizmaning o'lchamlari 2 × 3 × 4. Uning hajmi qancha?",
      choice_a: '9',
      choice_b: '14',
      choice_c: '24',
      choice_d: '36',
      explanation: "Hajm = uzunlik × en × balandlik = 2 × 3 × 4 = 24.",
    },
    ru: {
      question_text: 'Прямоугольный параллелепипед имеет размеры 2 × 3 × 4. Чему равен его объём?',
      choice_a: '9',
      choice_b: '14',
      choice_c: '24',
      choice_d: '36',
      explanation: 'Объём = длина × ширина × высота = 2 × 3 × 4 = 24.',
    },
  },
  'GEO-E-019': {
    uz: {
      question_text: "30-60-90 uchburchakda 30°ga qarshi tomon 5. 60°ga qarshi tomon qancha?",
      choice_a: '5',
      choice_b: '5√3',
      choice_c: '10',
      choice_d: '10√3',
      explanation: "30-60-90 uchburchakda tomonlar nisbati 1:√3:2. 60°ga qarshi tomon = 5√3.",
    },
    ru: {
      question_text: 'В треугольнике 30-60-90 сторона, противолежащая 30°, равна 5. Чему равна сторона, противолежащая 60°?',
      choice_a: '5',
      choice_b: '5√3',
      choice_c: '10',
      choice_d: '10√3',
      explanation: 'В треугольнике 30-60-90 стороны в отношении 1:√3:2. Сторона напротив 60° = 5√3.',
    },
  },
  'GEO-E-020': {
    uz: {
      question_text: "Uchburchak burchaklari 1:2:3 nisbatida. Eng katta burchak qancha?",
      choice_a: '30°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '120°',
      explanation: "Burchaklar x, 2x, 3x. Yig'indi = 6x = 180°, x = 30°. Eng katta = 3x = 90°.",
    },
    ru: {
      question_text: 'Углы треугольника относятся как 1:2:3. Чему равен наибольший угол?',
      choice_a: '30°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '120°',
      explanation: 'Углы x, 2x, 3x. Сумма = 6x = 180°, x = 30°. Наибольший = 3x = 90°.',
    },
  },
  'GEO-E-021': {
    uz: {
      question_text: "Tomoni 7 bo'lgan teng tomonli uchburchakning perimetri qancha?",
      choice_a: '14',
      choice_b: '21',
      choice_c: '28',
      choice_d: '49',
      explanation: "Perimetr = 3 × tomon = 3 × 7 = 21.",
    },
    ru: {
      question_text: 'Чему равен периметр равностороннего треугольника со стороной 7?',
      choice_a: '14',
      choice_b: '21',
      choice_c: '28',
      choice_d: '49',
      explanation: 'Периметр = 3 × сторона = 3 × 7 = 21.',
    },
  },
  'GEO-E-022': {
    uz: {
      question_text: "Aylananing yuzasi 16π. Uning radiusi qancha?",
      choice_a: '2',
      choice_b: '4',
      choice_c: '8',
      choice_d: '16',
      explanation: "Yuza = πr² = 16π, demak r² = 16, r = 4.",
    },
    ru: {
      question_text: 'Площадь круга равна 16π. Чему равен его радиус?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '8',
      choice_d: '16',
      explanation: 'Площадь = πr² = 16π, значит r² = 16, r = 4.',
    },
  },
  'GEO-E-023': {
    uz: {
      question_text: "Vertikal burchaklar doimo:",
      choice_a: "To'ldiruvchi",
      choice_b: "Qo'shimcha",
      choice_c: 'Teng',
      choice_d: '90°',
      explanation: "Vertikal burchaklar (kesishuvchi chiziqlar hosil qilgan) doimo teng.",
    },
    ru: {
      question_text: 'Вертикальные углы всегда:',
      choice_a: 'Дополнительные',
      choice_b: 'Смежные',
      choice_c: 'Равные',
      choice_d: '90°',
      explanation: 'Вертикальные углы (образованные пересекающимися прямыми) всегда равны.',
    },
  },
  'GEO-E-024': {
    uz: {
      question_text: "Qaysi uzunliklar to'g'ri burchakli uchburchak hosil qiladi?",
      choice_a: '2, 3, 4',
      choice_b: '3, 4, 5',
      choice_c: '4, 5, 6',
      choice_d: '5, 6, 7',
      explanation: "3² + 4² = 9 + 16 = 25 = 5². Bu Pifagor teoremani qanoatlantiradi.",
    },
    ru: {
      question_text: 'Какой набор длин образует прямоугольный треугольник?',
      choice_a: '2, 3, 4',
      choice_b: '3, 4, 5',
      choice_c: '4, 5, 6',
      choice_d: '5, 6, 7',
      explanation: '3² + 4² = 9 + 16 = 25 = 5². Это удовлетворяет теореме Пифагора.',
    },
  },
  'GEO-E-025': {
    uz: {
      question_text: "Qirrasi 2 bo'lgan kubning sirt yuzasi qancha?",
      choice_a: '8',
      choice_b: '12',
      choice_c: '24',
      choice_d: '48',
      explanation: "Sirt yuzasi = 6 × qirra² = 6 × 4 = 24.",
    },
    ru: {
      question_text: 'Чему равна площадь поверхности куба с ребром 2?',
      choice_a: '8',
      choice_b: '12',
      choice_c: '24',
      choice_d: '48',
      explanation: 'Площадь поверхности = 6 × ребро² = 6 × 4 = 24.',
    },
  },
  'GEO-E-026': {
    uz: {
      question_text: "Diametri 8 bo'lgan aylananing aylana uzunligi qancha? (π orqali ifodalang)",
      choice_a: '4π',
      choice_b: '8π',
      choice_c: '16π',
      choice_d: '64π',
      explanation: "Aylana uzunligi = πd = 8π.",
    },
    ru: {
      question_text: 'Чему равна длина окружности с диаметром 8? (Выразите через π)',
      choice_a: '4π',
      choice_b: '8π',
      choice_c: '16π',
      choice_d: '64π',
      explanation: 'Длина окружности = πd = 8π.',
    },
  },
  'GEO-E-027': {
    uz: {
      question_text: "Uchburchakdagi tashqi burchak 140°. Unga qo'shni ichki burchak qancha?",
      choice_a: '40°',
      choice_b: '50°',
      choice_c: '90°',
      choice_d: '140°',
      explanation: "Tashqi burchak va unga qo'shni ichki burchak qo'shimcha: 180° - 140° = 40°.",
    },
    ru: {
      question_text: 'Внешний угол треугольника равен 140°. Чему равен смежный с ним внутренний угол?',
      choice_a: '40°',
      choice_b: '50°',
      choice_c: '90°',
      choice_d: '140°',
      explanation: 'Внешний угол и смежный внутренний угол в сумме дают 180°: 180° - 140° = 40°.',
    },
  },
  'GEO-E-028': {
    uz: {
      question_text: "Asosi 8, balandligi 6 bo'lgan parallelogrammning yuzasi qancha?",
      choice_a: '14',
      choice_b: '24',
      choice_c: '28',
      choice_d: '48',
      explanation: "Parallelogramm yuzasi = asos × balandlik = 8 × 6 = 48.",
    },
    ru: {
      question_text: 'Чему равна площадь параллелограмма с основанием 8 и высотой 6?',
      choice_a: '14',
      choice_b: '24',
      choice_c: '28',
      choice_d: '48',
      explanation: 'Площадь параллелограмма = основание × высота = 8 × 6 = 48.',
    },
  },
  'GEO-E-029': {
    uz: {
      question_text: "C da to'g'ri burchakli ABC uchburchagida AC = 5 va BC = 12 bo'lsa, AB qancha?",
      choice_a: '7',
      choice_b: '13',
      choice_c: '17',
      choice_d: '60',
      explanation: "AB² = AC² + BC² = 25 + 144 = 169, demak AB = 13.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике ABC с прямым углом в C, если AC = 5 и BC = 12, чему равно AB?',
      choice_a: '7',
      choice_b: '13',
      choice_c: '17',
      choice_d: '60',
      explanation: 'AB² = AC² + BC² = 25 + 144 = 169, значит AB = 13.',
    },
  },
  'GEO-E-030': {
    uz: {
      question_text: "Aylana uzunligi 20π bo'lsa, diametr qancha?",
      choice_a: '5',
      choice_b: '10',
      choice_c: '20',
      choice_d: '40',
      explanation: "C = πd = 20π, demak d = 20.",
    },
    ru: {
      question_text: 'Длина окружности равна 20π. Чему равен диаметр?',
      choice_a: '5',
      choice_b: '10',
      choice_c: '20',
      choice_d: '40',
      explanation: 'C = πd = 20π, значит d = 20.',
    },
  },
  'GEO-E-031': {
    uz: {
      question_text: "Uzunligi 12, eni 7 bo'lgan to'g'ri to'rtburchakning yuzasi qancha?",
      choice_a: '19',
      choice_b: '38',
      choice_c: '84',
      choice_d: '168',
      explanation: "Yuza = uzunlik × en = 12 × 7 = 84.",
    },
    ru: {
      question_text: 'Чему равна площадь прямоугольника с длиной 12 и шириной 7?',
      choice_a: '19',
      choice_b: '38',
      choice_c: '84',
      choice_d: '168',
      explanation: 'Площадь = длина × ширина = 12 × 7 = 84.',
    },
  },
  'GEO-E-032': {
    uz: {
      question_text: "Ikkita burchak to'ldiruvchi. Biri 35° bo'lsa, ikkinchisi qancha?",
      choice_a: '45°',
      choice_b: '55°',
      choice_c: '145°',
      choice_d: '325°',
      explanation: "To'ldiruvchi burchaklar yig'indisi 90°. Ikkinchi burchak = 90° - 35° = 55°.",
    },
    ru: {
      question_text: 'Два угла являются дополнительными. Если один равен 35°, чему равен другой?',
      choice_a: '45°',
      choice_b: '55°',
      choice_c: '145°',
      choice_d: '325°',
      explanation: 'Дополнительные углы в сумме дают 90°. Другой угол = 90° - 35° = 55°.',
    },
  },
  'GEO-E-033': {
    uz: {
      question_text: "Katetlari 6 va 8 bo'lgan to'g'ri burchakli uchburchakda gipotenuza qancha?",
      choice_a: '7',
      choice_b: '10',
      choice_c: '12',
      choice_d: '14',
      explanation: "Pifagor teoremasi: c² = 6² + 8² = 36 + 64 = 100, demak c = 10.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике с катетами 6 и 8 чему равна гипотенуза?',
      choice_a: '7',
      choice_b: '10',
      choice_c: '12',
      choice_d: '14',
      explanation: 'По теореме Пифагора: c² = 6² + 8² = 36 + 64 = 100, значит c = 10.',
    },
  },
  'GEO-E-034': {
    uz: {
      question_text: "Radiusi 4 bo'lgan aylananing yuzasi qancha? (π dan foydalaning)",
      choice_a: '4π',
      choice_b: '8π',
      choice_c: '16π',
      choice_d: '32π',
      explanation: "Yuza = πr² = π(4)² = 16π.",
    },
    ru: {
      question_text: 'Чему равна площадь круга с радиусом 4? (Используйте π)',
      choice_a: '4π',
      choice_b: '8π',
      choice_c: '16π',
      choice_d: '32π',
      explanation: 'Площадь = πr² = π(4)² = 16π.',
    },
  },
  'GEO-E-035': {
    uz: {
      question_text: "Tomoni 9 bo'lgan kvadratning perimetri qancha?",
      choice_a: '18',
      choice_b: '27',
      choice_c: '36',
      choice_d: '81',
      explanation: "Perimetr = 4 × tomon = 4 × 9 = 36.",
    },
    ru: {
      question_text: 'Чему равен периметр квадрата со стороной 9?',
      choice_a: '18',
      choice_b: '27',
      choice_c: '36',
      choice_d: '81',
      explanation: 'Периметр = 4 × сторона = 4 × 9 = 36.',
    },
  },
  'GEO-E-036': {
    uz: {
      question_text: "Ikkita burchak qo'shimcha. Biri 110° bo'lsa, ikkinchisi qancha?",
      choice_a: '70°',
      choice_b: '80°',
      choice_c: '90°',
      choice_d: '250°',
      explanation: "Qo'shimcha burchaklar yig'indisi 180°. Ikkinchi burchak = 180° - 110° = 70°.",
    },
    ru: {
      question_text: 'Два угла являются смежными. Если один равен 110°, чему равен другой?',
      choice_a: '70°',
      choice_b: '80°',
      choice_c: '90°',
      choice_d: '250°',
      explanation: 'Смежные углы в сумме дают 180°. Другой угол = 180° - 110° = 70°.',
    },
  },
  'GEO-E-037': {
    uz: {
      question_text: "45-45-90 uchburchakda bir katet 7 bo'lsa, ikkinchi katet qancha?",
      choice_a: '7',
      choice_b: '7√2',
      choice_c: '14',
      choice_d: '7/√2',
      explanation: "45-45-90 uchburchakda ikkala katet teng. Ikkinchi katet = 7.",
    },
    ru: {
      question_text: 'В треугольнике 45-45-90 один катет равен 7. Чему равен другой катет?',
      choice_a: '7',
      choice_b: '7√2',
      choice_c: '14',
      choice_d: '7/√2',
      explanation: 'В треугольнике 45-45-90 оба катета равны. Другой катет = 7.',
    },
  },
  'GEO-E-038': {
    uz: {
      question_text: "Aylananing diametri 10. Uning radiusi qancha?",
      choice_a: '5',
      choice_b: '10',
      choice_c: '15',
      choice_d: '20',
      explanation: "Radius = diametr / 2 = 10 / 2 = 5.",
    },
    ru: {
      question_text: 'Диаметр окружности равен 10. Чему равен её радиус?',
      choice_a: '5',
      choice_b: '10',
      choice_c: '15',
      choice_d: '20',
      explanation: 'Радиус = диаметр / 2 = 10 / 2 = 5.',
    },
  },
  'GEO-E-039': {
    uz: {
      question_text: "Qirrasi 4 bo'lgan kubning hajmi qancha?",
      choice_a: '12',
      choice_b: '16',
      choice_c: '48',
      choice_d: '64',
      explanation: "Hajm = qirra³ = 4³ = 64.",
    },
    ru: {
      question_text: 'Чему равен объём куба с ребром 4?',
      choice_a: '12',
      choice_b: '16',
      choice_c: '48',
      choice_d: '64',
      explanation: 'Объём = ребро³ = 4³ = 64.',
    },
  },
  'GEO-E-040': {
    uz: {
      question_text: "Uchburchak burchaklari yig'indisi qancha?",
      choice_a: '90°',
      choice_b: '180°',
      choice_c: '270°',
      choice_d: '360°',
      explanation: "Istalgan uchburchakning ichki burchaklari yig'indisi 180°.",
    },
    ru: {
      question_text: 'Чему равна сумма углов треугольника?',
      choice_a: '90°',
      choice_b: '180°',
      choice_c: '270°',
      choice_d: '360°',
      explanation: 'Сумма внутренних углов любого треугольника равна 180°.',
    },
  },
  'GEO-E-041': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda gipotenuza 13, bir katet 5 bo'lsa, ikkinchi katet qancha?",
      choice_a: '8',
      choice_b: '10',
      choice_c: '12',
      choice_d: '15',
      explanation: "a² + 5² = 13². a² = 169 - 25 = 144. a = 12.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике гипотенуза равна 13, один катет — 5. Чему равен другой катет?',
      choice_a: '8',
      choice_b: '10',
      choice_c: '12',
      choice_d: '15',
      explanation: 'a² + 5² = 13². a² = 169 - 25 = 144. a = 12.',
    },
  },
  'GEO-E-042': {
    uz: {
      question_text: "Aylananing aylana uzunligi 12π. Diametr qancha?",
      choice_a: '6',
      choice_b: '12',
      choice_c: '24',
      choice_d: '36',
      explanation: "Aylana uzunligi = πd. 12π = πd, demak d = 12.",
    },
    ru: {
      question_text: 'Длина окружности равна 12π. Чему равен диаметр?',
      choice_a: '6',
      choice_b: '12',
      choice_c: '24',
      choice_d: '36',
      explanation: 'Длина окружности = πd. 12π = πd, значит d = 12.',
    },
  },
  'GEO-E-043': {
    uz: {
      question_text: "Asosi 10, balandligi 6 bo'lgan uchburchakning yuzasi qancha?",
      choice_a: '16',
      choice_b: '30',
      choice_c: '60',
      choice_d: '80',
      explanation: "Yuza = (1/2) × asos × balandlik = (1/2) × 10 × 6 = 30.",
    },
    ru: {
      question_text: 'Чему равна площадь треугольника с основанием 10 и высотой 6?',
      choice_a: '16',
      choice_b: '30',
      choice_c: '60',
      choice_d: '80',
      explanation: 'Площадь = (1/2) × основание × высота = (1/2) × 10 × 6 = 30.',
    },
  },
  'GEO-E-044': {
    uz: {
      question_text: "Teng tomonli uchburchakning barcha tomonlari teng. Har bir burchak necha gradus?",
      choice_a: '45°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '120°',
      explanation: "Har bir burchak = 180° / 3 = 60°.",
    },
    ru: {
      question_text: 'У равностороннего треугольника все стороны равны. Чему равен каждый угол?',
      choice_a: '45°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '120°',
      explanation: 'Каждый угол = 180° / 3 = 60°.',
    },
  },
  'GEO-E-045': {
    uz: {
      question_text: "30-60-90 uchburchakda qisqa katet 4 bo'lsa, gipotenuza qancha?",
      choice_a: '4',
      choice_b: '4√3',
      choice_c: '8',
      choice_d: '8√3',
      explanation: "30-60-90 uchburchakda gipotenuza = 2 × qisqa katet = 2 × 4 = 8.",
    },
    ru: {
      question_text: 'В треугольнике 30-60-90 короткий катет равен 4. Чему равна гипотенуза?',
      choice_a: '4',
      choice_b: '4√3',
      choice_c: '8',
      choice_d: '8√3',
      explanation: 'В треугольнике 30-60-90 гипотенуза = 2 × короткий катет = 2 × 4 = 8.',
    },
  },
  'GEO-E-046': {
    uz: {
      question_text: "Aylananing markaziy burchagi 90°. Yoy aylananing qanday qismini tashkil etadi?",
      choice_a: '1/6',
      choice_b: '1/4',
      choice_c: '1/3',
      choice_d: '1/2',
      explanation: "90° / 360° = aylananing 1/4 qismi.",
    },
    ru: {
      question_text: 'Центральный угол окружности равен 90°. Какую долю окружности составляет дуга?',
      choice_a: '1/6',
      choice_b: '1/4',
      choice_c: '1/3',
      choice_d: '1/2',
      explanation: '90° / 360° = 1/4 окружности.',
    },
  },
  'GEO-E-047': {
    uz: {
      question_text: "O'lchamlari 3 × 4 × 5 bo'lgan to'g'ri to'rtburchakli prizmaning hajmi qancha?",
      choice_a: '12',
      choice_b: '35',
      choice_c: '47',
      choice_d: '60',
      explanation: "Hajm = uzunlik × en × balandlik = 3 × 4 × 5 = 60.",
    },
    ru: {
      question_text: 'Чему равен объём прямоугольного параллелепипеда размерами 3 × 4 × 5?',
      choice_a: '12',
      choice_b: '35',
      choice_c: '47',
      choice_d: '60',
      explanation: 'Объём = длина × ширина × высота = 3 × 4 × 5 = 60.',
    },
  },
  'GEO-E-048': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda ikkita o'tkir burchak yig'indisi qancha?",
      choice_a: '45°',
      choice_b: '90°',
      choice_c: '180°',
      choice_d: '270°',
      explanation: "To'g'ri burchakli uchburchakda bir burchak 90°. Qolgan ikkisi 180° - 90° = 90° ga teng.",
    },
    ru: {
      question_text: 'Чему равна сумма двух острых углов прямоугольного треугольника?',
      choice_a: '45°',
      choice_b: '90°',
      choice_c: '180°',
      choice_d: '270°',
      explanation: 'В прямоугольном треугольнике один угол равен 90°. Остальные два в сумме дают 180° - 90° = 90°.',
    },
  },
  'GEO-E-049': {
    uz: {
      question_text: "sin(30°) qancha?",
      choice_a: '1/2',
      choice_b: '√2/2',
      choice_c: '√3/2',
      choice_d: '1',
      explanation: "sin(30°) = 1/2.",
    },
    ru: {
      question_text: 'Чему равен sin(30°)?',
      choice_a: '1/2',
      choice_b: '√2/2',
      choice_c: '√3/2',
      choice_d: '1',
      explanation: 'sin(30°) = 1/2.',
    },
  },
  'GEO-E-050': {
    uz: {
      question_text: "Aylananing markazidan o'tuvchi vatar nima deyiladi?",
      choice_a: 'Radius',
      choice_b: 'Sekan',
      choice_c: 'Diametr',
      choice_d: 'Yoy',
      explanation: "Markazdan o'tuvchi vatar — diametr.",
    },
    ru: {
      question_text: 'Как называется хорда, проходящая через центр окружности?',
      choice_a: 'Радиус',
      choice_b: 'Секущая',
      choice_c: 'Диаметр',
      choice_d: 'Дуга',
      explanation: 'Хорда, проходящая через центр, называется диаметром.',
    },
  },
  'GEO-E-051': {
    uz: {
      question_text: "Uzunligi 8, eni 5 bo'lgan to'g'ri to'rtburchakning perimetri qancha?",
      choice_a: '13',
      choice_b: '26',
      choice_c: '40',
      choice_d: '80',
      explanation: "Perimetr = 2(uzunlik + en) = 2(8 + 5) = 26.",
    },
    ru: {
      question_text: 'Чему равен периметр прямоугольника с длиной 8 и шириной 5?',
      choice_a: '13',
      choice_b: '26',
      choice_c: '40',
      choice_d: '80',
      explanation: 'Периметр = 2(длина + ширина) = 2(8 + 5) = 26.',
    },
  },
  'GEO-E-052': {
    uz: {
      question_text: "Vertikal burchaklar:",
      choice_a: "Qo'shni",
      choice_b: "To'ldiruvchi",
      choice_c: "Qo'shimcha",
      choice_d: 'Teng',
      explanation: "Vertikal burchaklar (kesishuvchi chiziqlar hosil qilgan) doimo teng.",
    },
    ru: {
      question_text: 'Вертикальные углы:',
      choice_a: 'Смежные',
      choice_b: 'Дополнительные',
      choice_c: 'Supplementary',
      choice_d: 'Равные',
      explanation: 'Вертикальные углы (образованные пересекающимися прямыми) всегда равны.',
    },
  },
  'GEO-E-053': {
    uz: {
      question_text: "cos(60°) qancha?",
      choice_a: '1/2',
      choice_b: '√2/2',
      choice_c: '√3/2',
      choice_d: '1',
      explanation: "cos(60°) = 1/2.",
    },
    ru: {
      question_text: 'Чему равен cos(60°)?',
      choice_a: '1/2',
      choice_b: '√2/2',
      choice_c: '√3/2',
      choice_d: '1',
      explanation: 'cos(60°) = 1/2.',
    },
  },
  'GEO-E-054': {
    uz: {
      question_text: "Aylananing yuzasi 25π. Radiusi qancha?",
      choice_a: '5',
      choice_b: '10',
      choice_c: '25',
      choice_d: '50',
      explanation: "Yuza = πr² = 25π, demak r² = 25, r = 5.",
    },
    ru: {
      question_text: 'Площадь круга равна 25π. Чему равен его радиус?',
      choice_a: '5',
      choice_b: '10',
      choice_c: '25',
      choice_d: '50',
      explanation: 'Площадь = πr² = 25π, значит r² = 25, r = 5.',
    },
  },
  'GEO-E-055': {
    uz: {
      question_text: "Asosi 9, balandligi 4 bo'lgan parallelogrammning yuzasi qancha?",
      choice_a: '13',
      choice_b: '26',
      choice_c: '36',
      choice_d: '72',
      explanation: "Yuza = asos × balandlik = 9 × 4 = 36.",
    },
    ru: {
      question_text: 'Чему равна площадь параллелограмма с основанием 9 и высотой 4?',
      choice_a: '13',
      choice_b: '26',
      choice_c: '36',
      choice_d: '72',
      explanation: 'Площадь = основание × высота = 9 × 4 = 36.',
    },
  },
  'GEO-E-056': {
    uz: {
      question_text: "Uchburchak burchaklari 40°, 60° va x. x qancha?",
      choice_a: '70°',
      choice_b: '80°',
      choice_c: '90°',
      choice_d: '100°',
      explanation: "x = 180° - 40° - 60° = 80°.",
    },
    ru: {
      question_text: 'Углы треугольника равны 40°, 60° и x. Чему равен x?',
      choice_a: '70°',
      choice_b: '80°',
      choice_c: '90°',
      choice_d: '100°',
      explanation: 'x = 180° - 40° - 60° = 80°.',
    },
  },
  'GEO-E-057': {
    uz: {
      question_text: "tan(45°) qancha?",
      choice_a: '0',
      choice_b: '1/2',
      choice_c: '1',
      choice_d: '√2',
      explanation: "tan(45°) = sin(45°) / cos(45°) = 1.",
    },
    ru: {
      question_text: 'Чему равен tan(45°)?',
      choice_a: '0',
      choice_b: '1/2',
      choice_c: '1',
      choice_d: '√2',
      explanation: 'tan(45°) = sin(45°) / cos(45°) = 1.',
    },
  },
  'GEO-E-058': {
    uz: {
      question_text: "Aylananing aylana uzunligi 20π. Radiusi qancha?",
      choice_a: '5',
      choice_b: '10',
      choice_c: '20',
      choice_d: '40',
      explanation: "Aylana uzunligi = 2πr = 20π, demak r = 10.",
    },
    ru: {
      question_text: 'Длина окружности равна 20π. Чему равен радиус?',
      choice_a: '5',
      choice_b: '10',
      choice_c: '20',
      choice_d: '40',
      explanation: 'Длина окружности = 2πr = 20π, значит r = 10.',
    },
  },
  'GEO-E-059': {
    uz: {
      question_text: "Trapeziyaning asoslari 6 va 10, balandligi 4. Yuzasi qancha?",
      choice_a: '24',
      choice_b: '32',
      choice_c: '40',
      choice_d: '60',
      explanation: "Yuza = (1/2)(b₁ + b₂)h = (1/2)(6 + 10)(4) = (1/2)(16)(4) = 32.",
    },
    ru: {
      question_text: 'Трапеция имеет основания 6 и 10, высоту 4. Чему равна её площадь?',
      choice_a: '24',
      choice_b: '32',
      choice_c: '40',
      choice_d: '60',
      explanation: 'Площадь = (1/2)(b₁ + b₂)h = (1/2)(6 + 10)(4) = (1/2)(16)(4) = 32.',
    },
  },
  'GEO-E-060': {
    uz: {
      question_text: "Teng yonli uchburchakda ikkita teng tomon 5, asos 6. Perimetr qancha?",
      choice_a: '11',
      choice_b: '15',
      choice_c: '16',
      choice_d: '25',
      explanation: "Perimetr = 5 + 5 + 6 = 16.",
    },
    ru: {
      question_text: 'Равнобедренный треугольник имеет два равных бедра длиной 5 и основание 6. Чему равен периметр?',
      choice_a: '11',
      choice_b: '15',
      choice_c: '16',
      choice_d: '25',
      explanation: 'Периметр = 5 + 5 + 6 = 16.',
    },
  },

  'GEO-M-001': {
    uz: {
      question_text: "Silindrning radiusi 4, balandligi 10. Uning hajmi qancha? (π orqali ifodalang)",
      choice_a: '40π',
      choice_b: '80π',
      choice_c: '160π',
      choice_d: '320π',
      explanation: "Hajm = πr²h = π(4)²(10) = π(16)(10) = 160π.",
    },
    ru: {
      question_text: 'Цилиндр имеет радиус 4 и высоту 10. Чему равен его объём? (Выразите через π)',
      choice_a: '40π',
      choice_b: '80π',
      choice_c: '160π',
      choice_d: '320π',
      explanation: 'Объём = πr²h = π(4)²(10) = π(16)(10) = 160π.',
    },
  },
  'GEO-M-002': {
    uz: {
      question_text: "Ikkita o'xshash uchburchakning masshtab koeffitsiyenti 3:1. Kichik uchburchak yuzasi 12 bo'lsa, kattaniki qancha?",
      choice_a: '36',
      choice_b: '72',
      choice_c: '108',
      choice_d: '144',
      explanation: "Yuza chiziqli masshtab koeffitsiyentining kvadratiga mutanosib. Yuza nisbati = 3² = 9. Katta yuza = 12 × 9 = 108.",
    },
    ru: {
      question_text: 'Два подобных треугольника имеют коэффициент подобия 3:1. Если площадь меньшего треугольника равна 12, чему равна площадь большего?',
      choice_a: '36',
      choice_b: '72',
      choice_c: '108',
      choice_d: '144',
      explanation: 'Площадь пропорциональна квадрату коэффициента подобия. Отношение площадей = 3² = 9. Большая площадь = 12 × 9 = 108.',
    },
  },
  'GEO-M-003': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda bir katet 5, gipotenuza 13. Ikkinchi katet qancha?",
      choice_a: '8',
      choice_b: '10',
      choice_c: '12',
      choice_d: '14',
      explanation: "a² + 5² = 13² → a² = 169 - 25 = 144 → a = 12.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике один катет равен 5, гипотенуза — 13. Чему равен другой катет?',
      choice_a: '8',
      choice_b: '10',
      choice_c: '12',
      choice_d: '14',
      explanation: 'a² + 5² = 13² → a² = 169 - 25 = 144 → a = 12.',
    },
  },
  'GEO-M-004': {
    uz: {
      question_text: "Aylana tenglamasi (x - 3)² + (y + 2)² = 25. Aylananing markazi qayerda?",
      choice_a: '(3, 2)',
      choice_b: '(-3, 2)',
      choice_c: '(3, -2)',
      choice_d: '(-3, -2)',
      explanation: "Standart ko'rinish: (x - h)² + (y - k)² = r². Bu yerda h = 3, k = -2. Markaz (3, -2).",
    },
    ru: {
      question_text: 'Уравнение окружности (x - 3)² + (y + 2)² = 25. Где находится центр окружности?',
      choice_a: '(3, 2)',
      choice_b: '(-3, 2)',
      choice_c: '(3, -2)',
      choice_d: '(-3, -2)',
      explanation: 'Стандартная форма: (x - h)² + (y - k)² = r². Здесь h = 3, k = -2. Центр (3, -2).',
    },
  },
  'GEO-M-005': {
    uz: {
      question_text: "To'g'ri to'rtburchakli prizmaning o'lchamlari 4 × 5 × 6. Uning sirt yuzasi qancha?",
      choice_a: '74',
      choice_b: '120',
      choice_c: '148',
      choice_d: '240',
      explanation: "Sirt yuzasi = 2(lw + lh + wh) = 2(4×5 + 4×6 + 5×6) = 2(20 + 24 + 30) = 2(74) = 148.",
    },
    ru: {
      question_text: 'Прямоугольный параллелепипед имеет размеры 4 × 5 × 6. Чему равна его площадь поверхности?',
      choice_a: '74',
      choice_b: '120',
      choice_c: '148',
      choice_d: '240',
      explanation: 'Площадь поверхности = 2(lw + lh + wh) = 2(4×5 + 4×6 + 5×6) = 2(20 + 24 + 30) = 2(74) = 148.',
    },
  },
  'GEO-M-006': {
    uz: {
      question_text: "30-60-90 uchburchakda 30°ga qarshi tomon 6. Gipotenuza qancha?",
      choice_a: '6',
      choice_b: '6√3',
      choice_c: '12',
      choice_d: '12√3',
      explanation: "30-60-90 uchburchakda tomonlar nisbati 1:√3:2. Qisqa katet = 6 bo'lsa, gipotenuza = 2 × 6 = 12.",
    },
    ru: {
      question_text: 'В треугольнике 30-60-90 сторона напротив 30° равна 6. Чему равна гипотенуза?',
      choice_a: '6',
      choice_b: '6√3',
      choice_c: '12',
      choice_d: '12√3',
      explanation: 'В треугольнике 30-60-90 стороны в отношении 1:√3:2. Если короткий катет = 6, гипотенуза = 2 × 6 = 12.',
    },
  },
  'GEO-M-007': {
    uz: {
      question_text: "Aylana uzunligi 10π bo'lgan aylananing yuzasi qancha?",
      choice_a: '5π',
      choice_b: '10π',
      choice_c: '25π',
      choice_d: '100π',
      explanation: "C = 2πr = 10π, demak r = 5. Yuza = πr² = π(5)² = 25π.",
    },
    ru: {
      question_text: 'Чему равна площадь круга, длина окружности которого равна 10π?',
      choice_a: '5π',
      choice_b: '10π',
      choice_c: '25π',
      choice_d: '100π',
      explanation: 'C = 2πr = 10π, значит r = 5. Площадь = πr² = π(5)² = 25π.',
    },
  },
  'GEO-M-008': {
    uz: {
      question_text: "ABC uchburchagida A burchagi 40° va C da tashqi burchak 110°. B burchagi qancha?",
      choice_a: '30°',
      choice_b: '40°',
      choice_c: '70°',
      choice_d: '110°',
      explanation: "Tashqi burchak = qo'shni bo'lmagan ichki burchaklar yig'indisi. 110° = A + B = 40° + B, demak B = 70°.",
    },
    ru: {
      question_text: 'В треугольнике ABC угол A = 40°, внешний угол при C равен 110°. Чему равен угол B?',
      choice_a: '30°',
      choice_b: '40°',
      choice_c: '70°',
      choice_d: '110°',
      explanation: 'Внешний угол = сумма несмежных внутренних углов. 110° = A + B = 40° + B, значит B = 70°.',
    },
  },
  'GEO-M-009': {
    uz: {
      question_text: "Asosi 10, balandligi 8 bo'lgan uchburchakning yuzasi qancha?",
      choice_a: '18',
      choice_b: '40',
      choice_c: '80',
      choice_d: '90',
      explanation: "Yuza = (1/2) × asos × balandlik = (1/2) × 10 × 8 = 40.",
    },
    ru: {
      question_text: 'Чему равна площадь треугольника с основанием 10 и высотой 8?',
      choice_a: '18',
      choice_b: '40',
      choice_c: '80',
      choice_d: '90',
      explanation: 'Площадь = (1/2) × основание × высота = (1/2) × 10 × 8 = 40.',
    },
  },
  'GEO-M-010': {
    uz: {
      question_text: "Radiusi 6 bo'lgan aylanada markaziy burchak 60° bo'lgan yoyning uzunligi qancha?",
      choice_a: 'π',
      choice_b: '2π',
      choice_c: '3π',
      choice_d: '6π',
      explanation: "Yoy uzunligi = (θ/360°) × 2πr = (60/360) × 2π(6) = (1/6) × 12π = 2π.",
    },
    ru: {
      question_text: 'Чему равна длина дуги с центральным углом 60° в окружности радиусом 6?',
      choice_a: 'π',
      choice_b: '2π',
      choice_c: '3π',
      choice_d: '6π',
      explanation: 'Длина дуги = (θ/360°) × 2πr = (60/360) × 2π(6) = (1/6) × 12π = 2π.',
    },
  },
  'GEO-M-011': {
    uz: {
      question_text: "Konusning radiusi 3, balandligi 4. Hajmi qancha? (π orqali ifodalang)",
      choice_a: '4π',
      choice_b: '12π',
      choice_c: '36π',
      choice_d: '48π',
      explanation: "Hajm = (1/3)πr²h = (1/3)π(9)(4) = 12π.",
    },
    ru: {
      question_text: 'Конус имеет радиус 3 и высоту 4. Чему равен его объём? (Выразите через π)',
      choice_a: '4π',
      choice_b: '12π',
      choice_c: '36π',
      choice_d: '48π',
      explanation: 'Объём = (1/3)πr²h = (1/3)π(9)(4) = 12π.',
    },
  },
  'GEO-M-012': {
    uz: {
      question_text: "ABC uchburchagining tomonlari AB = 5, BC = 7, AC = 9. Qanday uchburchak?",
      choice_a: "O'tkir",
      choice_b: "To'g'ri burchakli",
      choice_c: "O'tmas",
      choice_d: 'Teng tomonli',
      explanation: "Tekshirish: 5² + 7² = 25 + 49 = 74. 9² = 81 bilan taqqoslang. 74 < 81 bo'lganligi sababli uchburchak o'tmas.",
    },
    ru: {
      question_text: 'Треугольник ABC имеет стороны AB = 5, BC = 7, AC = 9. Какой это треугольник?',
      choice_a: 'Остроугольный',
      choice_b: 'Прямоугольный',
      choice_c: 'Тупоугольный',
      choice_d: 'Равносторонний',
      explanation: 'Проверка: 5² + 7² = 25 + 49 = 74. Сравниваем с 9² = 81. Так как 74 < 81, треугольник тупоугольный.',
    },
  },
  'GEO-M-013': {
    uz: {
      question_text: "sin(θ) = 3/5 bo'lsa, cos(θ) qancha?",
      choice_a: '3/5',
      choice_b: '4/5',
      choice_c: '5/4',
      choice_d: '5/3',
      explanation: "sin²θ + cos²θ = 1. (3/5)² + cos²θ = 1. cos²θ = 1 - 9/25 = 16/25. cos θ = 4/5.",
    },
    ru: {
      question_text: 'Если sin(θ) = 3/5, чему равен cos(θ)?',
      choice_a: '3/5',
      choice_b: '4/5',
      choice_c: '5/4',
      choice_d: '5/3',
      explanation: 'sin²θ + cos²θ = 1. (3/5)² + cos²θ = 1. cos²θ = 1 - 9/25 = 16/25. cos θ = 4/5.',
    },
  },
  'GEO-M-014': {
    uz: {
      question_text: "Aylana tenglamasi (x + 1)² + (y - 4)² = 16. Radiusi qancha?",
      choice_a: '2',
      choice_b: '4',
      choice_c: '8',
      choice_d: '16',
      explanation: "Standart ko'rinishda r² = 16, demak r = 4.",
    },
    ru: {
      question_text: 'Уравнение окружности (x + 1)² + (y - 4)² = 16. Чему равен радиус?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '8',
      choice_d: '16',
      explanation: 'В стандартной форме r² = 16, значит r = 4.',
    },
  },
  'GEO-M-015': {
    uz: {
      question_text: "Trapeziyaning parallel asoslari 8 va 12, balandligi 5. Yuzasi qancha?",
      choice_a: '40',
      choice_b: '50',
      choice_c: '60',
      choice_d: '100',
      explanation: "Yuza = (1/2)(b₁ + b₂)h = (1/2)(8 + 12)(5) = (1/2)(20)(5) = 50.",
    },
    ru: {
      question_text: 'Трапеция имеет параллельные основания 8 и 12, высоту 5. Чему равна её площадь?',
      choice_a: '40',
      choice_b: '50',
      choice_c: '60',
      choice_d: '100',
      explanation: 'Площадь = (1/2)(b₁ + b₂)h = (1/2)(8 + 12)(5) = (1/2)(20)(5) = 50.',
    },
  },
  'GEO-M-016': {
    uz: {
      question_text: "O'xshash uchburchaklarda mos tomonlar 2:5 nisbatida. Kichik uchburchakdagi tomon 6 bo'lsa, kattasidagi mos tomon qancha?",
      choice_a: '12',
      choice_b: '15',
      choice_c: '18',
      choice_d: '30',
      explanation: "2/5 = 6/x → 2x = 30 → x = 15.",
    },
    ru: {
      question_text: 'В подобных треугольниках соответственные стороны относятся как 2:5. Если сторона меньшего треугольника равна 6, чему равна соответственная сторона большего?',
      choice_a: '12',
      choice_b: '15',
      choice_c: '18',
      choice_d: '30',
      explanation: '2/5 = 6/x → 2x = 30 → x = 15.',
    },
  },
  'GEO-M-017': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda bir o'tkir burchak 35°. Ikkinchi o'tkir burchak qancha?",
      choice_a: '35°',
      choice_b: '45°',
      choice_c: '55°',
      choice_d: '65°',
      explanation: "To'g'ri burchakli uchburchakda ikkita o'tkir burchak yig'indisi 90°. Ikkinchi burchak = 90° - 35° = 55°.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике один острый угол равен 35°. Чему равен другой острый угол?',
      choice_a: '35°',
      choice_b: '45°',
      choice_c: '55°',
      choice_d: '65°',
      explanation: 'В прямоугольном треугольнике сумма двух острых углов равна 90°. Другой угол = 90° - 35° = 55°.',
    },
  },
  'GEO-M-018': {
    uz: {
      question_text: "Radiusi 4 bo'lgan aylanada markaziy burchak 90° bo'lgan sektorning yuzasi qancha?",
      choice_a: '2π',
      choice_b: '4π',
      choice_c: '8π',
      choice_d: '16π',
      explanation: "Sektor yuzasi = (θ/360°)πr² = (90/360)π(16) = (1/4)(16π) = 4π.",
    },
    ru: {
      question_text: 'Чему равна площадь сектора с центральным углом 90° в окружности радиусом 4?',
      choice_a: '2π',
      choice_b: '4π',
      choice_c: '8π',
      choice_d: '16π',
      explanation: 'Площадь сектора = (θ/360°)πr² = (90/360)π(16) = (1/4)(16π) = 4π.',
    },
  },
  'GEO-M-019': {
    uz: {
      question_text: "Sharning radiusi ikki baravarga oshsa, hajmi necha baravarga ortadi?",
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: "Hajm = (4/3)πr³. r → 2r bo'lsa, V → (4/3)π(2r)³ = 8 × (4/3)πr³. Koeffitsiyent = 8.",
    },
    ru: {
      question_text: 'Если радиус шара удвоить, во сколько раз увеличится его объём?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Объём = (4/3)πr³. При r → 2r: V → (4/3)π(2r)³ = 8 × (4/3)πr³. Коэффициент = 8.',
    },
  },
  'GEO-M-020': {
    uz: {
      question_text: "Teng tomonli uchburchakning perimetri 36. Yuzasi qancha?",
      choice_a: '36',
      choice_b: '36√3',
      choice_c: '72',
      choice_d: '144',
      explanation: "Tomon = 36/3 = 12. Teng tomonli uchburchak yuzasi = (s²√3)/4 = (144√3)/4 = 36√3.",
    },
    ru: {
      question_text: 'Периметр равностороннего треугольника равен 36. Чему равна его площадь?',
      choice_a: '36',
      choice_b: '36√3',
      choice_c: '72',
      choice_d: '144',
      explanation: 'Сторона = 36/3 = 12. Площадь равностороннего треугольника = (s²√3)/4 = (144√3)/4 = 36√3.',
    },
  },
  'GEO-M-021': {
    uz: {
      question_text: "tan(θ) = 3/4 bo'lsa, sin(θ) qancha?",
      choice_a: '3/4',
      choice_b: '3/5',
      choice_c: '4/5',
      choice_d: '5/3',
      explanation: "tan θ = qarama-qarshi / qo'shni = 3/4. Gipotenuza = √(9+16) = 5. sin θ = qarama-qarshi / gipotenuza = 3/5.",
    },
    ru: {
      question_text: 'Если tan(θ) = 3/4, чему равен sin(θ)?',
      choice_a: '3/4',
      choice_b: '3/5',
      choice_c: '4/5',
      choice_d: '5/3',
      explanation: 'tan θ = противолежащий / прилежащий = 3/4. Гипотенуза = √(9+16) = 5. sin θ = противолежащий / гипотенуза = 3/5.',
    },
  },
  'GEO-M-022': {
    uz: {
      question_text: "Radiusi 10 bo'lgan aylanada markazdan 8 birlik masofadagi vatar uzunligi qancha?",
      choice_a: '6',
      choice_b: '12',
      choice_c: '16',
      choice_d: '20',
      explanation: "Yarim vatar² + 8² = 10². Yarim vatar² = 100 - 64 = 36. Yarim vatar = 6. To'liq vatar = 12.",
    },
    ru: {
      question_text: 'Хорда находится на расстоянии 8 единиц от центра окружности радиусом 10. Чему равна длина хорды?',
      choice_a: '6',
      choice_b: '12',
      choice_c: '16',
      choice_d: '20',
      explanation: 'Полухорда² + 8² = 10². Полухорда² = 100 - 64 = 36. Полухорда = 6. Полная хорда = 12.',
    },
  },
  'GEO-M-023': {
    uz: {
      question_text: "Silindrning hajmi 100π, balandligi 4. Radiusi qancha?",
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '10',
      explanation: "V = πr²h → 100π = πr²(4) → r² = 25 → r = 5.",
    },
    ru: {
      question_text: 'Объём цилиндра равен 100π, высота — 4. Чему равен его радиус?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '10',
      explanation: 'V = πr²h → 100π = πr²(4) → r² = 25 → r = 5.',
    },
  },
  'GEO-M-024': {
    uz: {
      question_text: "Uchburchak tomonlari 6, 8, 10. Yuzasi qancha?",
      choice_a: '20',
      choice_b: '24',
      choice_c: '30',
      choice_d: '48',
      explanation: "Bu to'g'ri burchakli uchburchak (6² + 8² = 10²). Yuza = (1/2)(6)(8) = 24.",
    },
    ru: {
      question_text: 'Стороны треугольника равны 6, 8 и 10. Чему равна его площадь?',
      choice_a: '20',
      choice_b: '24',
      choice_c: '30',
      choice_d: '48',
      explanation: 'Это прямоугольный треугольник (6² + 8² = 10²). Площадь = (1/2)(6)(8) = 24.',
    },
  },
  'GEO-M-025': {
    uz: {
      question_text: "DEF uchburchagida E burchagi 90°, DE = 7, EF = 24. tan(D) qancha?",
      choice_a: '7/24',
      choice_b: '24/7',
      choice_c: '7/25',
      choice_d: '24/25',
      explanation: "tan(D) = qarama-qarshi / qo'shni = EF/DE = 24/7.",
    },
    ru: {
      question_text: 'В треугольнике DEF угол E = 90°, DE = 7, EF = 24. Чему равен tan(D)?',
      choice_a: '7/24',
      choice_b: '24/7',
      choice_c: '7/25',
      choice_d: '24/25',
      explanation: 'tan(D) = противолежащий / прилежащий = EF/DE = 24/7.',
    },
  },
  'GEO-M-026': {
    uz: {
      question_text: "Ikkita konsentrik aylananing radiuslari 5 va 8. Ular orasidagi sohaning yuzasi qancha?",
      choice_a: '9π',
      choice_b: '25π',
      choice_c: '39π',
      choice_d: '64π',
      explanation: "Yuza = π(8²) - π(5²) = 64π - 25π = 39π.",
    },
    ru: {
      question_text: 'Два концентрических круга имеют радиусы 5 и 8. Чему равна площадь области между ними?',
      choice_a: '9π',
      choice_b: '25π',
      choice_c: '39π',
      choice_d: '64π',
      explanation: 'Площадь = π(8²) - π(5²) = 64π - 25π = 39π.',
    },
  },
  'GEO-M-027': {
    uz: {
      question_text: "Kvadratning diagonali 10. Yuzasi qancha?",
      choice_a: '25',
      choice_b: '50',
      choice_c: '100',
      choice_d: '200',
      explanation: "d diagonalli kvadrat uchun Yuza = d²/2 = 100/2 = 50.",
    },
    ru: {
      question_text: 'Диагональ квадрата равна 10. Чему равна его площадь?',
      choice_a: '25',
      choice_b: '50',
      choice_c: '100',
      choice_d: '200',
      explanation: 'Для квадрата с диагональю d: Площадь = d²/2 = 100/2 = 50.',
    },
  },
  'GEO-M-028': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda gipotenuza-ga tushurilgan balandlik uni 4 va 9 ga bo'ladi. Balandlik uzunligi qancha?",
      choice_a: '4',
      choice_b: '6',
      choice_c: '9',
      choice_d: '13',
      explanation: "Balandlik = √(kesim₁ × kesim₂) = √(4 × 9) = √36 = 6.",
    },
    ru: {
      question_text: 'Высота, опущенная на гипотенузу прямоугольного треугольника, делит её на отрезки 4 и 9. Чему равна длина высоты?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '9',
      choice_d: '13',
      explanation: 'Высота = √(отрезок₁ × отрезок₂) = √(4 × 9) = √36 = 6.',
    },
  },
  'GEO-M-029': {
    uz: {
      question_text: "45-45-90 uchburchakda gipotenuza 10. Har bir katetning uzunligi qancha?",
      choice_a: '5',
      choice_b: '5√2',
      choice_c: '10/√2',
      choice_d: 'B va C ikkisi ham',
      explanation: "Katet = gipotenuza/√2 = 10/√2 = 10√2/2 = 5√2. B va C ekvivalent.",
    },
    ru: {
      question_text: 'В треугольнике 45-45-90 гипотенуза равна 10. Чему равна длина каждого катета?',
      choice_a: '5',
      choice_b: '5√2',
      choice_c: '10/√2',
      choice_d: 'И B, и C',
      explanation: 'Катет = гипотенуза/√2 = 10/√2 = 10√2/2 = 5√2. B и C эквивалентны.',
    },
  },
  'GEO-M-030': {
    uz: {
      question_text: "Ichki burchak 80° yoyni kesib o'tadi. Ichki burchak qancha?",
      choice_a: '40°',
      choice_b: '80°',
      choice_c: '160°',
      choice_d: '200°',
      explanation: "Ichki burchak = (1/2) × kesib o'tilgan yoy = (1/2) × 80° = 40°.",
    },
    ru: {
      question_text: 'Вписанный угол опирается на дугу 80°. Чему равен вписанный угол?',
      choice_a: '40°',
      choice_b: '80°',
      choice_c: '160°',
      choice_d: '200°',
      explanation: 'Вписанный угол = (1/2) × соответствующая дуга = (1/2) × 80° = 40°.',
    },
  },
  'GEO-M-031': {
    uz: {
      question_text: "Konusning radiusi 3, balandligi 4. Hajmi qancha? (π dan foydalaning)",
      choice_a: '12π',
      choice_b: '24π',
      choice_c: '36π',
      choice_d: '48π',
      explanation: "Hajm = (1/3)πr²h = (1/3)π(9)(4) = 12π.",
    },
    ru: {
      question_text: 'Конус имеет радиус 3 и высоту 4. Чему равен его объём? (Используйте π)',
      choice_a: '12π',
      choice_b: '24π',
      choice_c: '36π',
      choice_d: '48π',
      explanation: 'Объём = (1/3)πr²h = (1/3)π(9)(4) = 12π.',
    },
  },
  'GEO-M-032': {
    uz: {
      question_text: "ABC va DEF uchburchaklari 2:3 masshtab koeffitsiyentida o'xshash. AB = 8 bo'lsa, DE qancha?",
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: "DE/AB = 3/2. DE = AB × (3/2) = 8 × 1.5 = 12.",
    },
    ru: {
      question_text: 'Треугольники ABC и DEF подобны с коэффициентом подобия 2:3. Если AB = 8, чему равно DE?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: 'DE/AB = 3/2. DE = AB × (3/2) = 8 × 1.5 = 12.',
    },
  },
  'GEO-M-033': {
    uz: {
      question_text: "30-60-90 uchburchakda uzun katet 6√3. Gipotenuza qancha?",
      choice_a: '6',
      choice_b: '12',
      choice_c: '6√3',
      choice_d: '12√3',
      explanation: "30-60-90 da uzun katet = (√3) × qisqa katet. Demak qisqa katet = 6. Gipotenuza = 2 × 6 = 12.",
    },
    ru: {
      question_text: 'В треугольнике 30-60-90 длинный катет равен 6√3. Чему равна гипотенуза?',
      choice_a: '6',
      choice_b: '12',
      choice_c: '6√3',
      choice_d: '12√3',
      explanation: 'В 30-60-90 длинный катет = (√3) × короткий катет. Значит короткий катет = 6. Гипотенуза = 2 × 6 = 12.',
    },
  },
  'GEO-M-034': {
    uz: {
      question_text: "Markaziy burchagi 60° va radiusi 6 bo'lgan sektorning yuzasini toping.",
      choice_a: '3π',
      choice_b: '6π',
      choice_c: '9π',
      choice_d: '12π',
      explanation: "Sektor yuzasi = (θ/360°)πr² = (60/360)π(36) = (1/6)(36π) = 6π.",
    },
    ru: {
      question_text: 'Найдите площадь сектора с центральным углом 60° и радиусом 6.',
      choice_a: '3π',
      choice_b: '6π',
      choice_c: '9π',
      choice_d: '12π',
      explanation: 'Площадь сектора = (θ/360°)πr² = (60/360)π(36) = (1/6)(36π) = 6π.',
    },
  },
  'GEO-M-035': {
    uz: {
      question_text: "Sharning diametri 6. Hajmi qancha?",
      choice_a: '18π',
      choice_b: '36π',
      choice_c: '54π',
      choice_d: '108π',
      explanation: "Radius = 3. Hajm = (4/3)πr³ = (4/3)π(27) = 36π.",
    },
    ru: {
      question_text: 'Диаметр шара равен 6. Чему равен его объём?',
      choice_a: '18π',
      choice_b: '36π',
      choice_c: '54π',
      choice_d: '108π',
      explanation: 'Радиус = 3. Объём = (4/3)πr³ = (4/3)π(27) = 36π.',
    },
  },
  'GEO-M-036': {
    uz: {
      question_text: "ABC uchburchagida A burchagi 50°, B da tashqi burchak 130°. C burchagi qancha?",
      choice_a: '50°',
      choice_b: '60°',
      choice_c: '80°',
      choice_d: '100°',
      explanation: "B ichki burchagi = 180° - 130° = 50°. C burchagi = 180° - 50° - 50° = 80°.",
    },
    ru: {
      question_text: 'В треугольнике ABC угол A = 50°, внешний угол при B равен 130°. Чему равен угол C?',
      choice_a: '50°',
      choice_b: '60°',
      choice_c: '80°',
      choice_d: '100°',
      explanation: 'Внутренний угол B = 180° - 130° = 50°. Угол C = 180° - 50° - 50° = 80°.',
    },
  },
  'GEO-M-037': {
    uz: {
      question_text: "C da to'g'ri burchakli ABC uchburchagida sin(A) = 5/13 bo'lsa, cos(A) qancha?",
      choice_a: '5/13',
      choice_b: '5/12',
      choice_c: '12/13',
      choice_d: '13/12',
      explanation: "sin²A + cos²A = 1. cos²A = 1 - 25/169 = 144/169. cos(A) = 12/13.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике ABC с прямым углом в C, если sin(A) = 5/13, чему равен cos(A)?',
      choice_a: '5/13',
      choice_b: '5/12',
      choice_c: '12/13',
      choice_d: '13/12',
      explanation: 'sin²A + cos²A = 1. cos²A = 1 - 25/169 = 144/169. cos(A) = 12/13.',
    },
  },
  'GEO-M-038': {
    uz: {
      question_text: "Aylana tenglamasi x² + y² = 49. Aylananing radiusi qancha?",
      choice_a: '7',
      choice_b: '14',
      choice_c: '49',
      choice_d: '√7',
      explanation: "x² + y² = r² = 49, demak r = 7.",
    },
    ru: {
      question_text: 'Уравнение окружности x² + y² = 49. Чему равен радиус окружности?',
      choice_a: '7',
      choice_b: '14',
      choice_c: '49',
      choice_d: '√7',
      explanation: 'x² + y² = r² = 49, значит r = 7.',
    },
  },
  'GEO-M-039': {
    uz: {
      question_text: "Silindrning radiusi 5, balandligi 8. Sirt yuzasi qancha?",
      choice_a: '90π',
      choice_b: '100π',
      choice_c: '120π',
      choice_d: '130π',
      explanation: "Sirt yuzasi = 2πr² + 2πrh = 2π(25) + 2π(5)(8) = 50π + 80π = 130π.",
    },
    ru: {
      question_text: 'Цилиндр имеет радиус 5 и высоту 8. Чему равна площадь его поверхности?',
      choice_a: '90π',
      choice_b: '100π',
      choice_c: '120π',
      choice_d: '130π',
      explanation: 'Площадь поверхности = 2πr² + 2πrh = 2π(25) + 2π(5)(8) = 50π + 80π = 130π.',
    },
  },
  'GEO-M-040': {
    uz: {
      question_text: "Ikkita o'xshash uchburchakning yuzalari 4:9 nisbatida. Mos tomonlar nisbati qancha?",
      choice_a: '2:3',
      choice_b: '4:9',
      choice_c: '16:81',
      choice_d: '4:6',
      explanation: "Yuza nisbati = (tomon nisbati)². Yuza nisbati 4:9 bo'lsa, tomon nisbati = 2:3.",
    },
    ru: {
      question_text: 'Площади двух подобных треугольников относятся как 4:9. Каково отношение соответственных сторон?',
      choice_a: '2:3',
      choice_b: '4:9',
      choice_c: '16:81',
      choice_d: '4:6',
      explanation: 'Отношение площадей = (отношение сторон)². Если отношение площадей = 4:9, отношение сторон = 2:3.',
    },
  },
  'GEO-M-041': {
    uz: {
      question_text: "10 fut uzunlikdagi narvon devorga 60° burchak hosil qilib tayanadi. U devorda qancha balandlikka etadi?",
      choice_a: '5 ft',
      choice_b: '5√3 ft',
      choice_c: '10 ft',
      choice_d: '10√3 ft',
      explanation: "Balandlik = 10 × sin(60°) = 10 × (√3/2) = 5√3 ft.",
    },
    ru: {
      question_text: 'Лестница длиной 10 футов опирается о стену под углом 60° к земле. На какую высоту она достигает стены?',
      choice_a: '5 ft',
      choice_b: '5√3 ft',
      choice_c: '10 ft',
      choice_d: '10√3 ft',
      explanation: 'Высота = 10 × sin(60°) = 10 × (√3/2) = 5√3 ft.',
    },
  },
  'GEO-M-042': {
    uz: {
      question_text: "Ichki burchak yarim aylanani kesib o'tadi. Burchak qancha?",
      choice_a: '45°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '180°',
      explanation: "Yarim aylanani (180° yoy) kesib o'tuvchi ichki burchak 180°/2 = 90°.",
    },
    ru: {
      question_text: 'Вписанный угол опирается на полуокружность. Чему равен угол?',
      choice_a: '45°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '180°',
      explanation: 'Вписанный угол, опирающийся на полуокружность (дуга 180°), равен 180°/2 = 90°.',
    },
  },
  'GEO-M-043': {
    uz: {
      question_text: "Tomoni 6, balandligi 4 bo'lgan kvadrat asosli piramidaning hajmi qancha?",
      choice_a: '24',
      choice_b: '36',
      choice_c: '48',
      choice_d: '144',
      explanation: "Hajm = (1/3) × asos yuzasi × balandlik = (1/3)(36)(4) = 48.",
    },
    ru: {
      question_text: 'Пирамида с квадратным основанием стороной 6 и высотой 4. Чему равен её объём?',
      choice_a: '24',
      choice_b: '36',
      choice_c: '48',
      choice_d: '144',
      explanation: 'Объём = (1/3) × площадь основания × высота = (1/3)(36)(4) = 48.',
    },
  },
  'GEO-M-044': {
    uz: {
      question_text: "Uchburchak tomonlari 5, 12, 13. Bu to'g'ri burchakli uchburchakmi?",
      choice_a: "Ha, to'g'ri burchak 5 ga qarshi",
      choice_b: "Ha, to'g'ri burchak 13 ga qarshi",
      choice_c: "Yo'q, o'tmas",
      choice_d: "Yo'q, o'tkir",
      explanation: "Tekshirish: 5² + 12² = 25 + 144 = 169 = 13². Gipotenuza 13 bo'lgan to'g'ri burchakli uchburchak.",
    },
    ru: {
      question_text: 'Стороны треугольника равны 5, 12, 13. Является ли он прямоугольным?',
      choice_a: 'Да, прямой угол напротив стороны 5',
      choice_b: 'Да, прямой угол напротив стороны 13',
      choice_c: 'Нет, он тупоугольный',
      choice_d: 'Нет, он остроугольный',
      explanation: 'Проверка: 5² + 12² = 25 + 144 = 169 = 13². Это прямоугольный треугольник с гипотенузой 13.',
    },
  },
  'GEO-M-045': {
    uz: {
      question_text: "E da to'g'ri burchakli DEF uchburchagida DE = 8, DF = 10. tan(D) qancha?",
      choice_a: '3/4',
      choice_b: '4/3',
      choice_c: '3/5',
      choice_d: '4/5',
      explanation: "EF² = DF² - DE² = 100 - 64 = 36, demak EF = 6. tan(D) = qarama-qarshi/qo'shni = EF/DE = 6/8 = 3/4.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике DEF с прямым углом в E, DE = 8, DF = 10. Чему равен tan(D)?',
      choice_a: '3/4',
      choice_b: '4/3',
      choice_c: '3/5',
      choice_d: '4/5',
      explanation: 'EF² = DF² - DE² = 100 - 64 = 36, значит EF = 6. tan(D) = противолежащий/прилежащий = EF/DE = 6/8 = 3/4.',
    },
  },
  'GEO-M-046': {
    uz: {
      question_text: "(x - 2)² + (y + 3)² = 16 tenglamasi markazi qayerda bo'lgan aylanani ifodalaydi?",
      choice_a: '(2, 3)',
      choice_b: '(-2, 3)',
      choice_c: '(2, -3)',
      choice_d: '(-2, -3)',
      explanation: "Standart ko'rinish (x - h)² + (y - k)² = r². Markaz (h, k) = (2, -3).",
    },
    ru: {
      question_text: 'Уравнение (x - 2)² + (y + 3)² = 16 задаёт окружность с центром:',
      choice_a: '(2, 3)',
      choice_b: '(-2, 3)',
      choice_c: '(2, -3)',
      choice_d: '(-2, -3)',
      explanation: 'Стандартная форма (x - h)² + (y - k)² = r². Центр (h, k) = (2, -3).',
    },
  },
  'GEO-M-047': {
    uz: {
      question_text: "Tomoni 4 bo'lgan muntazam olti burchakning yuzasi qancha? (Muntazam olti burchak yuzasi = (3√3/2)s²)",
      choice_a: '16√3',
      choice_b: '24√3',
      choice_c: '32√3',
      choice_d: '48√3',
      explanation: "Yuza = (3√3/2)(4²) = (3√3/2)(16) = 24√3.",
    },
    ru: {
      question_text: 'Сторона правильного шестиугольника равна 4. Чему равна его площадь? (Площадь правильного шестиугольника = (3√3/2)s²)',
      choice_a: '16√3',
      choice_b: '24√3',
      choice_c: '32√3',
      choice_d: '48√3',
      explanation: 'Площадь = (3√3/2)(4²) = (3√3/2)(16) = 24√3.',
    },
  },
  'GEO-M-048': {
    uz: {
      question_text: "ABC uchburchagida A dan burchak bisektrisasi BC ni BD = 4 va DC = 6 ga bo'ladi. AB = 8 bo'lsa, AC qancha?",
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: "Burchak bisektrisasi teoremasi: BD/DC = AB/AC. 4/6 = 8/AC. AC = 12.",
    },
    ru: {
      question_text: 'В треугольнике ABC биссектриса из A делит BC на отрезки BD = 4 и DC = 6. Если AB = 8, чему равно AC?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '16',
      explanation: 'По теореме о биссектрисе: BD/DC = AB/AC. 4/6 = 8/AC. AC = 12.',
    },
  },
  'GEO-M-049': {
    uz: {
      question_text: "cos(θ) = 0.8 va θ o'tkir burchak bo'lsa, sin(θ) qancha?",
      choice_a: '0.2',
      choice_b: '0.36',
      choice_c: '0.6',
      choice_d: '0.64',
      explanation: "sin²θ + cos²θ = 1. sin²θ = 1 - 0.64 = 0.36. sin(θ) = 0.6 (o'tkir burchak uchun musbat).",
    },
    ru: {
      question_text: 'Если cos(θ) = 0.8 и θ — острый угол, чему равен sin(θ)?',
      choice_a: '0.2',
      choice_b: '0.36',
      choice_c: '0.6',
      choice_d: '0.64',
      explanation: 'sin²θ + cos²θ = 1. sin²θ = 1 - 0.64 = 0.36. sin(θ) = 0.6 (положительный, так как угол острый).',
    },
  },
  'GEO-M-050': {
    uz: {
      question_text: "Aylana ichida ikkita vatar kesishadi. Kesimlar 3, 8 va 4, x bo'lsa, x qancha?",
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: "Kesishuvchi vatarlar teoremasi: 3 × 8 = 4 × x. 24 = 4x. x = 6.",
    },
    ru: {
      question_text: 'Две хорды пересекаются внутри окружности. Отрезки равны 3, 8 и 4, x. Чему равен x?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'По теореме о пересекающихся хордах: 3 × 8 = 4 × x. 24 = 4x. x = 6.',
    },
  },
  'GEO-M-051': {
    uz: {
      question_text: "Yarim sharning radiusi 6. Hajmi qancha?",
      choice_a: '72π',
      choice_b: '144π',
      choice_c: '216π',
      choice_d: '288π',
      explanation: "Yarim shar hajmi = (1/2)(4/3)πr³ = (2/3)π(216) = 144π.",
    },
    ru: {
      question_text: 'Радиус полусферы равен 6. Чему равен её объём?',
      choice_a: '72π',
      choice_b: '144π',
      choice_c: '216π',
      choice_d: '288π',
      explanation: 'Объём полусферы = (1/2)(4/3)πr³ = (2/3)π(216) = 144π.',
    },
  },
  'GEO-M-052': {
    uz: {
      question_text: "Rombning diagonallari 10 va 24. Perimetri qancha?",
      choice_a: '34',
      choice_b: '52',
      choice_c: '68',
      choice_d: '120',
      explanation: "Diagonallar to'g'ri burchak ostida kesishadi. Yarim diagonallar: 5 va 12. Tomon = √(25 + 144) = 13. Perimetr = 4 × 13 = 52.",
    },
    ru: {
      question_text: 'Диагонали ромба равны 10 и 24. Чему равен его периметр?',
      choice_a: '34',
      choice_b: '52',
      choice_c: '68',
      choice_d: '120',
      explanation: 'Диагонали пересекаются под прямым углом. Полудиагонали: 5 и 12. Сторона = √(25 + 144) = 13. Периметр = 4 × 13 = 52.',
    },
  },
  'GEO-M-053': {
    uz: {
      question_text: "Binoga 50 metr masofadan binoning tepasiga ko'tarilish burchagi 30°. Bino qanchalik baland?",
      choice_a: '25 m',
      choice_b: '25√3 m',
      choice_c: '50/√3 m',
      choice_d: '50√3 m',
      explanation: "tan(30°) = balandlik/50. balandlik = 50 × tan(30°) = 50 × (1/√3) = 50/√3 m.",
    },
    ru: {
      question_text: 'С точки, находящейся в 50 метрах от здания, угол возвышения до вершины равен 30°. Какова высота здания?',
      choice_a: '25 m',
      choice_b: '25√3 m',
      choice_c: '50/√3 m',
      choice_d: '50√3 m',
      explanation: 'tan(30°) = высота/50. высота = 50 × tan(30°) = 50 × (1/√3) = 50/√3 m.',
    },
  },
  'GEO-M-054': {
    uz: {
      question_text: "Tashqi P nuqtasidan aylanaga tortilgan urinma uzunligi 12. P dan markazgacha masofa 13. Radius qancha?",
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: "Urinma radiusga perpendikulyar. r² + 12² = 13². r² = 169 - 144 = 25. r = 5.",
    },
    ru: {
      question_text: 'Касательная из внешней точки P к окружности имеет длину 12. Расстояние от P до центра равно 13. Чему равен радиус?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: 'Касательная перпендикулярна радиусу. r² + 12² = 13². r² = 169 - 144 = 25. r = 5.',
    },
  },
  'GEO-M-055': {
    uz: {
      question_text: "Bir xil asos radiusi va balandlikka ega silindr va konus. Ularning hajmlari qanday nisbatda?",
      choice_a: "Silindr konusdan 2 marta katta",
      choice_b: "Silindr konusdan 3 marta katta",
      choice_c: "Silindr konusdan 4 marta katta",
      choice_d: 'Teng',
      explanation: "Silindr: πr²h. Konus: (1/3)πr²h. Silindr = 3 × Konus.",
    },
    ru: {
      question_text: 'Цилиндр и конус имеют одинаковый радиус основания и высоту. Как соотносятся их объёмы?',
      choice_a: 'Цилиндр в 2 раза больше конуса',
      choice_b: 'Цилиндр в 3 раза больше конуса',
      choice_c: 'Цилиндр в 4 раза больше конуса',
      choice_d: 'Они равны',
      explanation: 'Цилиндр: πr²h. Конус: (1/3)πr²h. Цилиндр = 3 × Конус.',
    },
  },
  'GEO-M-056': {
    uz: {
      question_text: "A(0,0), B(8,0), C(4,6) uchburchagida C dan median uzunligi qancha?",
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: "AB ning o'rta nuqtasi = (4, 0). C(4,6) dan (4,0) gacha masofa = |6 - 0| = 6.",
    },
    ru: {
      question_text: 'В треугольнике ABC с A(0,0), B(8,0), C(4,6) чему равна длина медианы из C?',
      choice_a: '5',
      choice_b: '6',
      choice_c: '7',
      choice_d: '8',
      explanation: 'Середина AB = (4, 0). Расстояние от C(4,6) до (4,0) = |6 - 0| = 6.',
    },
  },
  'GEO-M-057': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakda bir katet ikkinchisidan ikki barobar uzun. Qisqa katet x bo'lsa, gipotenuza x orqali ifodalang.",
      choice_a: 'x√3',
      choice_b: 'x√5',
      choice_c: '2x',
      choice_d: '3x',
      explanation: "Katetlar: x va 2x. Gipotenuza² = x² + 4x² = 5x². Gipotenuza = x√5.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике один катет вдвое длиннее другого. Если короткий катет равен x, выразите гипотенузу через x.',
      choice_a: 'x√3',
      choice_b: 'x√5',
      choice_c: '2x',
      choice_d: '3x',
      explanation: 'Катеты: x и 2x. Гипотенуза² = x² + 4x² = 5x². Гипотенуза = x√5.',
    },
  },
  'GEO-M-058': {
    uz: {
      question_text: "Yoy uzunligi 5π, radius 10. Markaziy burchak necha gradus?",
      choice_a: '45°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '120°',
      explanation: "Yoy uzunligi = (θ/360°)(2πr). 5π = (θ/360°)(20π). θ = 5π × 360°/(20π) = 90°.",
    },
    ru: {
      question_text: 'Длина дуги равна 5π, радиус — 10. Чему равен центральный угол в градусах?',
      choice_a: '45°',
      choice_b: '60°',
      choice_c: '90°',
      choice_d: '120°',
      explanation: 'Длина дуги = (θ/360°)(2πr). 5π = (θ/360°)(20π). θ = 5π × 360°/(20π) = 90°.',
    },
  },
  'GEO-M-059': {
    uz: {
      question_text: "Kubning har bir qirrasi ikki barobarga oshsa, hajm necha barobarga ortadi?",
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: "Boshlang'ich hajm = s³. Yangi hajm = (2s)³ = 8s³. Koeffitsiyent = 8.",
    },
    ru: {
      question_text: 'Если каждое ребро куба удвоить, во сколько раз увеличится объём?',
      choice_a: '2',
      choice_b: '4',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Исходный объём = s³. Новый объём = (2s)³ = 8s³. Коэффициент = 8.',
    },
  },
  'GEO-M-060': {
    uz: {
      question_text: "ABC uchburchagida AB = AC = 10 va BC = 12. Yuzasi qancha?",
      choice_a: '36',
      choice_b: '48',
      choice_c: '60',
      choice_d: '72',
      explanation: "A dan balandlik BC ni ikki teng bo'lakka bo'ladi. Yarim BC = 6. Balandlik² = 10² - 6² = 64. Balandlik = 8. Yuza = (1/2)(12)(8) = 48.",
    },
    ru: {
      question_text: 'В треугольнике ABC, AB = AC = 10 и BC = 12. Чему равна его площадь?',
      choice_a: '36',
      choice_b: '48',
      choice_c: '60',
      choice_d: '72',
      explanation: 'Высота из A делит BC пополам. Половина BC = 6. Высота² = 10² - 6² = 64. Высота = 8. Площадь = (1/2)(12)(8) = 48.',
    },
  },

  'GEO-H-001': {
    uz: {
      question_text: "Sharning hajmi 288π. Radiusi qancha?",
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: "V = (4/3)πr³ = 288π. r³ = 288 × (3/4) = 216. r = ∛216 = 6.",
    },
    ru: {
      question_text: 'Объём шара равен 288π. Чему равен его радиус?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '12',
      explanation: 'V = (4/3)πr³ = 288π. r³ = 288 × (3/4) = 216. r = ∛216 = 6.',
    },
  },
  'GEO-H-002': {
    uz: {
      question_text: "C da to'g'ri burchakli ABC uchburchagida sin(A) = 3/5 bo'lsa, cos(A) qancha?",
      choice_a: '3/5',
      choice_b: '4/5',
      choice_c: '5/4',
      choice_d: '5/3',
      explanation: "sin²A + cos²A = 1 dan: (3/5)² + cos²A = 1 → cos²A = 1 - 9/25 = 16/25 → cos A = 4/5.",
    },
    ru: {
      question_text: 'В прямоугольном треугольнике ABC с прямым углом в C, если sin(A) = 3/5, чему равен cos(A)?',
      choice_a: '3/5',
      choice_b: '4/5',
      choice_c: '5/4',
      choice_d: '5/3',
      explanation: 'Из sin²A + cos²A = 1: (3/5)² + cos²A = 1 → cos²A = 1 - 9/25 = 16/25 → cos A = 4/5.',
    },
  },
  'GEO-H-003': {
    uz: {
      question_text: "Sektorning yuzasi 12π, markaziy burchagi 120°. Radius qancha?",
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '9',
      explanation: "Sektor yuzasi = (θ/360°)πr². 12π = (120/360)πr² = (1/3)πr². Demak r² = 36, r = 6.",
    },
    ru: {
      question_text: 'Площадь сектора равна 12π, центральный угол — 120°. Чему равен радиус?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '9',
      explanation: 'Площадь сектора = (θ/360°)πr². 12π = (120/360)πr² = (1/3)πr². Значит r² = 36, r = 6.',
    },
  },
  'GEO-H-004': {
    uz: {
      question_text: "ABC uchburchagi DEF ga o'xshash. AB = 6, BC = 8, AC = 10, DE = 9 bo'lsa, EF qancha?",
      choice_a: '10',
      choice_b: '12',
      choice_c: '13.5',
      choice_d: '15',
      explanation: "Masshtab koeffitsiyenti = DE/AB = 9/6 = 1.5. EF BC ga mos keladi. EF = 8 × 1.5 = 12.",
    },
    ru: {
      question_text: 'Треугольник ABC подобен треугольнику DEF. Если AB = 6, BC = 8, AC = 10, DE = 9, чему равно EF?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '13.5',
      choice_d: '15',
      explanation: 'Коэффициент подобия = DE/AB = 9/6 = 1.5. EF соответствует BC. EF = 8 × 1.5 = 12.',
    },
  },
  'GEO-H-005': {
    uz: {
      question_text: "DEF uchburchagida E burchagi 90°, DE = 8, EF = 15. tan(D) qancha?",
      choice_a: '8/15',
      choice_b: '15/8',
      choice_c: '8/17',
      choice_d: '15/17',
      explanation: "tan(D) = qarama-qarshi/qo'shni = EF/DE = 15/8.",
    },
    ru: {
      question_text: 'В треугольнике DEF угол E = 90°, DE = 8, EF = 15. Чему равен tan(D)?',
      choice_a: '8/15',
      choice_b: '15/8',
      choice_c: '8/17',
      choice_d: '15/17',
      explanation: 'tan(D) = противолежащий/прилежащий = EF/DE = 15/8.',
    },
  },
  'GEO-H-006': {
    uz: {
      question_text: "Konusning radiusi 3, qiya balandligi 5. Yon sirt yuzasi qancha?",
      choice_a: '9π',
      choice_b: '12π',
      choice_c: '15π',
      choice_d: '24π',
      explanation: "Yon sirt yuzasi = πrl = π(3)(5) = 15π.",
    },
    ru: {
      question_text: 'Конус имеет радиус 3 и образующую 5. Чему равна его боковая площадь поверхности?',
      choice_a: '9π',
      choice_b: '12π',
      choice_c: '15π',
      choice_d: '24π',
      explanation: 'Боковая площадь поверхности = πrl = π(3)(5) = 15π.',
    },
  },
  'GEO-H-007': {
    uz: {
      question_text: "Aylanadagi ichki burchak 140° yoyni kesib o'tadi. Ichki burchak qancha?",
      choice_a: '35°',
      choice_b: '70°',
      choice_c: '140°',
      choice_d: '280°',
      explanation: "Ichki burchak = (1/2) × kesib o'tilgan yoy = (1/2) × 140° = 70°.",
    },
    ru: {
      question_text: 'Вписанный угол окружности опирается на дугу 140°. Чему равен вписанный угол?',
      choice_a: '35°',
      choice_b: '70°',
      choice_c: '140°',
      choice_d: '280°',
      explanation: 'Вписанный угол = (1/2) × соответствующая дуга = (1/2) × 140° = 70°.',
    },
  },
  'GEO-H-008': {
    uz: {
      question_text: "Uchburchak tomonlari 5, 12, 13. Qanday uchburchak?",
      choice_a: "O'tkir",
      choice_b: "To'g'ri burchakli",
      choice_c: "O'tmas",
      choice_d: 'Teng tomonli',
      explanation: "Tekshirish: 5² + 12² = 25 + 144 = 169 = 13². a² + b² = c² bo'lganligi sababli to'g'ri burchakli uchburchak.",
    },
    ru: {
      question_text: 'Стороны треугольника равны 5, 12, 13. Какой это треугольник?',
      choice_a: 'Остроугольный',
      choice_b: 'Прямоугольный',
      choice_c: 'Тупоугольный',
      choice_d: 'Равносторонний',
      explanation: 'Проверка: 5² + 12² = 25 + 144 = 169 = 13². Так как a² + b² = c², это прямоугольный треугольник.',
    },
  },
  'GEO-H-009': {
    uz: {
      question_text: "Binoning asosidan 50 fut masofadagi nuqtadan binoning tepasiga ko'tarilish burchagi 60°. Bino qanchalik baland? (√3 ≈ 1.73 deb oling)",
      choice_a: '50√3 feet',
      choice_b: '86.5 feet',
      choice_c: '100 feet',
      choice_d: '150 feet',
      explanation: "tan(60°) = balandlik/50 → balandlik = 50 × tan(60°) = 50√3 ≈ 50 × 1.73 = 86.5 fut.",
    },
    ru: {
      question_text: 'С точки, находящейся в 50 футах от основания здания, угол возвышения до вершины равен 60°. Какова высота здания? (Используйте √3 ≈ 1.73)',
      choice_a: '50√3 feet',
      choice_b: '86.5 feet',
      choice_c: '100 feet',
      choice_d: '150 feet',
      explanation: 'tan(60°) = высота/50 → высота = 50 × tan(60°) = 50√3 ≈ 50 × 1.73 = 86.5 футов.',
    },
  },
  'GEO-H-010': {
    uz: {
      question_text: "Aylanma hovuz diametri 20 fut. Hovuzni 3 futli yo'lak o'rab turadi. Faqat yo'lakning yuzasi qancha?",
      choice_a: '60π sq ft',
      choice_b: '69π sq ft',
      choice_c: '100π sq ft',
      choice_d: '169π sq ft',
      explanation: "Hovuz radiusi = 10. Tashqi radius = 10 + 3 = 13. Yo'lak yuzasi = π(13)² - π(10)² = 169π - 100π = 69π kv.fut.",
    },
    ru: {
      question_text: 'Круглый бассейн имеет диаметр 20 футов. Бассейн окружает дорожка шириной 3 фута. Чему равна площадь только дорожки?',
      choice_a: '60π sq ft',
      choice_b: '69π sq ft',
      choice_c: '100π sq ft',
      choice_d: '169π sq ft',
      explanation: 'Радиус бассейна = 10. Внешний радиус = 10 + 3 = 13. Площадь дорожки = π(13)² - π(10)² = 169π - 100π = 69π кв.фут.',
    },
  },
  'GEO-H-011': {
    uz: {
      question_text: "Uchburchak medianalarining kesishish nuqtasi — sentroid. Mediana uzunligi 12 bo'lsa, sentroid uchburchak uchidan qancha masofada?",
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: "Sentroid har bir medianani uchdan 2:1 nisbatida bo'ladi. Uchdan masofa = (2/3) × 12 = 8.",
    },
    ru: {
      question_text: 'Медианы треугольника пересекаются в центроиде. Если медиана имеет длину 12, как далеко центроид от вершины?',
      choice_a: '4',
      choice_b: '6',
      choice_c: '8',
      choice_d: '10',
      explanation: 'Центроид делит каждую медиану в отношении 2:1 от вершины. Расстояние от вершины = (2/3) × 12 = 8.',
    },
  },
  'GEO-H-012': {
    uz: {
      question_text: "Tashqi nuqtadan aylanaga tortilgan ikki urinma uzunligi 12. Radius 5 bo'lsa, nuqtadan markazgacha masofa qancha?",
      choice_a: '11',
      choice_b: '13',
      choice_c: '17',
      choice_d: '25',
      explanation: "Urinma va radius to'g'ri burchak hosil qiladi. Masofa² = 12² + 5² = 144 + 25 = 169. Masofa = 13.",
    },
    ru: {
      question_text: 'Две касательные из внешней точки к окружности имеют длину 12. Если радиус равен 5, каково расстояние от точки до центра?',
      choice_a: '11',
      choice_b: '13',
      choice_c: '17',
      choice_d: '25',
      explanation: 'Касательная и радиус образуют прямой угол. Расстояние² = 12² + 5² = 144 + 25 = 169. Расстояние = 13.',
    },
  },
  'GEO-H-013': {
    uz: {
      question_text: "Tomoni 6, balandligi 4 bo'lgan kvadrat asosli piramidaning hajmi qancha?",
      choice_a: '24',
      choice_b: '36',
      choice_c: '48',
      choice_d: '72',
      explanation: "Hajm = (1/3) × asos yuzasi × balandlik = (1/3) × 36 × 4 = 48.",
    },
    ru: {
      question_text: 'Пирамида имеет квадратное основание со стороной 6 и высоту 4. Чему равен её объём?',
      choice_a: '24',
      choice_b: '36',
      choice_c: '48',
      choice_d: '72',
      explanation: 'Объём = (1/3) × площадь основания × высота = (1/3) × 36 × 4 = 48.',
    },
  },
  'GEO-H-014': {
    uz: {
      question_text: "cos(θ) = 5/13 bo'lsa, tan(θ) qancha?",
      choice_a: '5/12',
      choice_b: '12/5',
      choice_c: '5/13',
      choice_d: '12/13',
      explanation: "cos θ = 5/13 bo'lsa, qo'shni = 5, gipotenuza = 13. Qarama-qarshi = √(169 - 25) = 12. tan θ = 12/5.",
    },
    ru: {
      question_text: 'Если cos(θ) = 5/13, чему равен tan(θ)?',
      choice_a: '5/12',
      choice_b: '12/5',
      choice_c: '5/13',
      choice_d: '12/13',
      explanation: 'Если cos θ = 5/13, то прилежащий = 5, гипотенуза = 13. Противолежащий = √(169 - 25) = 12. tan θ = 12/5.',
    },
  },
  'GEO-H-015': {
    uz: {
      question_text: "ABC uchburchagida D BC da shundayki, AD A burchagining bisektrisasi. AB = 6, AC = 9, BC = 10 bo'lsa, BD qancha?",
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: "Burchak bisektrisasi teoremasi: BD/DC = AB/AC = 6/9 = 2/3. BD + DC = 10. BD = (2/5) × 10 = 4.",
    },
    ru: {
      question_text: 'В треугольнике ABC точка D лежит на BC так, что AD — биссектриса угла A. Если AB = 6, AC = 9, BC = 10, чему равно BD?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'По теореме о биссектрисе: BD/DC = AB/AC = 6/9 = 2/3. BD + DC = 10. BD = (2/5) × 10 = 4.',
    },
  },
  'GEO-H-016': {
    uz: {
      question_text: "Radiusi 6 bo'lgan aylanaga yozilgan muntazam olti burchakning yuzasi qancha?",
      choice_a: '36√3',
      choice_b: '54√3',
      choice_c: '72√3',
      choice_d: '108√3',
      explanation: "Muntazam olti burchak = 6 ta teng tomonli uchburchak, tomoni = radius = 6. Yuza = 6 × (6² × √3/4) = 6 × 9√3 = 54√3.",
    },
    ru: {
      question_text: 'Правильный шестиугольник вписан в окружность радиусом 6. Чему равна площадь шестиугольника?',
      choice_a: '36√3',
      choice_b: '54√3',
      choice_c: '72√3',
      choice_d: '108√3',
      explanation: 'Правильный шестиугольник = 6 равносторонних треугольников со стороной = радиусу = 6. Площадь = 6 × (6² × √3/4) = 6 × 9√3 = 54√3.',
    },
  },
  'GEO-H-017': {
    uz: {
      question_text: "Yarim sharning radiusi 6. Umumiy sirt yuzasi (tekis asos bilan) qancha?",
      choice_a: '72π',
      choice_b: '108π',
      choice_c: '144π',
      choice_d: '216π',
      explanation: "Egri sirt = 2πr² = 72π. Asos = πr² = 36π. Jami = 108π.",
    },
    ru: {
      question_text: 'Радиус полусферы равен 6. Чему равна полная площадь поверхности (включая плоское основание)?',
      choice_a: '72π',
      choice_b: '108π',
      choice_c: '144π',
      choice_d: '216π',
      explanation: 'Изогнутая поверхность = 2πr² = 72π. Основание = πr² = 36π. Всего = 108π.',
    },
  },
  'GEO-H-018': {
    uz: {
      question_text: "10 fut uzunlikdagi narvon devvorga tayanadi. Pastki qismi devordan 6 fut masofada. Narvon yer bilan qanday burchak hosil qiladi?",
      choice_a: 'Taxminan 37°',
      choice_b: 'Taxminan 45°',
      choice_c: 'Taxminan 53°',
      choice_d: 'Taxminan 60°',
      explanation: "cos θ = 6/10 = 0.6. θ = arccos(0.6) ≈ 53°.",
    },
    ru: {
      question_text: 'Лестница длиной 10 футов опирается о стену. Её нижний конец находится в 6 футах от стены. Под каким углом лестница наклонена к земле?',
      choice_a: 'Около 37°',
      choice_b: 'Около 45°',
      choice_c: 'Около 53°',
      choice_d: 'Около 60°',
      explanation: 'cos θ = 6/10 = 0.6. θ = arccos(0.6) ≈ 53°.',
    },
  },
  'GEO-H-019': {
    uz: {
      question_text: "Rombning diagonallari 10 va 24. Rombning tomonlari qancha?",
      choice_a: '12',
      choice_b: '13',
      choice_c: '14',
      choice_d: '17',
      explanation: "Diagonallar to'g'ri burchak ostida kesishadi. Yarim diagonallar: 5 va 12. Tomon = √(5² + 12²) = √169 = 13.",
    },
    ru: {
      question_text: 'Диагонали ромба равны 10 и 24. Чему равна сторона ромба?',
      choice_a: '12',
      choice_b: '13',
      choice_c: '14',
      choice_d: '17',
      explanation: 'Диагонали пересекаются под прямым углом. Полудиагонали: 5 и 12. Сторона = √(5² + 12²) = √169 = 13.',
    },
  },
  'GEO-H-020': {
    uz: {
      question_text: "Tomoni 10 bo'lgan kvadratga aylana yozilgan. Kvadrat va aylana orasidagi maydon qancha?",
      choice_a: '100 - 25π',
      choice_b: '100 - 50π',
      choice_c: '50 - 25π',
      choice_d: '25 - 25π',
      explanation: "Aylana radiusi = 5 (tomonning yarmi). Orasidagi maydon = 10² - π(5²) = 100 - 25π.",
    },
    ru: {
      question_text: 'В квадрат со стороной 10 вписан круг. Чему равна площадь между квадратом и кругом?',
      choice_a: '100 - 25π',
      choice_b: '100 - 50π',
      choice_c: '50 - 25π',
      choice_d: '25 - 25π',
      explanation: 'Радиус круга = 5 (половина стороны). Площадь между = 10² - π(5²) = 100 - 25π.',
    },
  },
  'GEO-H-021': {
    uz: {
      question_text: "Kesik konusning radiuslari 3 va 6, balandligi 4. Hajmi qancha?",
      choice_a: '84π',
      choice_b: '76π',
      choice_c: '68π',
      choice_d: '52π',
      explanation: "V = (1/3)πh(r₁² + r₁r₂ + r₂²) = (1/3)π(4)(9 + 18 + 36) = (4π/3)(63) = 84π.",
    },
    ru: {
      question_text: 'Усечённый конус имеет радиусы 3 и 6, высоту 4. Чему равен его объём?',
      choice_a: '84π',
      choice_b: '76π',
      choice_c: '68π',
      choice_d: '52π',
      explanation: 'V = (1/3)πh(r₁² + r₁r₂ + r₂²) = (1/3)π(4)(9 + 18 + 36) = (4π/3)(63) = 84π.',
    },
  },
  'GEO-H-022': {
    uz: {
      question_text: "sin(A) = 4/5 va A burchagi ikkinchi chorakda bo'lsa, cos(A) qancha?",
      choice_a: '3/5',
      choice_b: '-3/5',
      choice_c: '4/5',
      choice_d: '-4/5',
      explanation: "II chorakda cosinus manfiy. cos²A = 1 - 16/25 = 9/25. cos A = -3/5.",
    },
    ru: {
      question_text: 'Если sin(A) = 4/5 и угол A находится во втором квадранте, чему равен cos(A)?',
      choice_a: '3/5',
      choice_b: '-3/5',
      choice_c: '4/5',
      choice_d: '-4/5',
      explanation: 'Во II квадранте косинус отрицательный. cos²A = 1 - 16/25 = 9/25. cos A = -3/5.',
    },
  },
  'GEO-H-023': {
    uz: {
      question_text: "Uchburchakning uchlari (0, 0), (6, 0) va (3, 4) da. Yuzasi qancha?",
      choice_a: '10',
      choice_b: '12',
      choice_c: '15',
      choice_d: '24',
      explanation: "Asos = 6 (x o'qi bo'yicha). Balandlik = 4 (uchinchi nuqtaning y koordinatasi). Yuza = (1/2)(6)(4) = 12.",
    },
    ru: {
      question_text: 'Вершины треугольника находятся в точках (0, 0), (6, 0) и (3, 4). Чему равна его площадь?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '15',
      choice_d: '24',
      explanation: 'Основание = 6 (вдоль оси x). Высота = 4 (y-координата третьей точки). Площадь = (1/2)(6)(4) = 12.',
    },
  },
  'GEO-H-024': {
    uz: {
      question_text: "Radiuslari 5 va 12 bo'lgan ikkita aylana tashqaridan teginadi. Markazlar orasidagi masofa qancha?",
      choice_a: '7',
      choice_b: '13',
      choice_c: '17',
      choice_d: '60',
      explanation: "Tashqaridan teginuvchi aylanalar uchun masofa = radiuslar yig'indisi = 5 + 12 = 17.",
    },
    ru: {
      question_text: 'Два круга с радиусами 5 и 12 касаются внешним образом. Каково расстояние между их центрами?',
      choice_a: '7',
      choice_b: '13',
      choice_c: '17',
      choice_d: '60',
      explanation: 'Для внешне касающихся окружностей расстояние = сумма радиусов = 5 + 12 = 17.',
    },
  },
  'GEO-H-025': {
    uz: {
      question_text: "Kubning fazoviy diagonali 6√3. Kubning hajmi qancha?",
      choice_a: '108',
      choice_b: '162',
      choice_c: '216',
      choice_d: '324',
      explanation: "Fazoviy diagonal = s√3 = 6√3, demak s = 6. Hajm = 6³ = 216.",
    },
    ru: {
      question_text: 'Пространственная диагональ куба равна 6√3. Чему равен объём куба?',
      choice_a: '108',
      choice_b: '162',
      choice_c: '216',
      choice_d: '324',
      explanation: 'Пространственная диагональ = s√3 = 6√3, значит s = 6. Объём = 6³ = 216.',
    },
  },
  'GEO-H-026': {
    uz: {
      question_text: "ABC uchburchagida C burchagi 90°, a = 8, c = 10. A burchagini eng yaqin gradusga toping.",
      choice_a: '37°',
      choice_b: '45°',
      choice_c: '53°',
      choice_d: '60°',
      explanation: "sin A = a/c = 8/10 = 0.8. A = arcsin(0.8) ≈ 53°.",
    },
    ru: {
      question_text: 'В треугольнике ABC угол C = 90°, a = 8, c = 10. Найдите угол A с точностью до градуса.',
      choice_a: '37°',
      choice_b: '45°',
      choice_c: '53°',
      choice_d: '60°',
      explanation: 'sin A = a/c = 8/10 = 0.8. A = arcsin(0.8) ≈ 53°.',
    },
  },
  'GEO-H-027': {
    uz: {
      question_text: "Uchburchak balandliklari kesishish nuqtasi — ortosentr. To'g'ri burchakli uchburchakda ortosentr qayerda?",
      choice_a: 'Sentroidda',
      choice_b: "To'g'ri burchak uchida",
      choice_c: "Gipotenuzaning o'rta nuqtasida",
      choice_d: "Uchburchak tashqarisida",
      explanation: "To'g'ri burchakli uchburchakda ikkita katet balandlik bo'lib, ular to'g'ri burchak uchida kesishadi.",
    },
    ru: {
      question_text: 'Высоты треугольника пересекаются в ортоцентре. Где находится ортоцентр прямоугольного треугольника?',
      choice_a: 'В центроиде',
      choice_b: 'В вершине прямого угла',
      choice_c: 'В середине гипотенузы',
      choice_d: 'Вне треугольника',
      explanation: 'В прямоугольном треугольнике два катета являются высотами, и они пересекаются в вершине прямого угла.',
    },
  },
  'GEO-H-028': {
    uz: {
      question_text: "Aylananing markaziy burchagi 2 radian. Radius 5 bo'lsa, yoy uzunligi qancha?",
      choice_a: '5',
      choice_b: '10',
      choice_c: '15',
      choice_d: '25',
      explanation: "Yoy uzunligi = rθ = 5 × 2 = 10 (θ radiandalanda).",
    },
    ru: {
      question_text: 'Центральный угол окружности равен 2 радиана. Если радиус равен 5, чему равна длина дуги?',
      choice_a: '5',
      choice_b: '10',
      choice_c: '15',
      choice_d: '25',
      explanation: 'Длина дуги = rθ = 5 × 2 = 10 (когда θ в радианах).',
    },
  },
  'GEO-H-029': {
    uz: {
      question_text: "Radiusi 5 bo'lgan shar ichiga silindr yozilgan. Silindr maksimal hajmda bo'lsa, u hajm qancha?",
      choice_a: '100π/√3',
      choice_b: '250π/(3√3)',
      choice_c: '500π/(3√3)',
      choice_d: '125π',
      explanation: "Maksimal hajm uchun h = 2r/√3. Eng katta silindr: radius = 5√(2/3), balandlik = 10/√3. V = π(50/3)(10/√3) = 500π/(3√3).",
    },
    ru: {
      question_text: 'В шар радиусом 5 вписан цилиндр. Если цилиндр имеет максимальный объём, чему он равен?',
      choice_a: '100π/√3',
      choice_b: '250π/(3√3)',
      choice_c: '500π/(3√3)',
      choice_d: '125π',
      explanation: 'Для максимального объёма h = 2r/√3. Максимальный цилиндр: радиус = 5√(2/3), высота = 10/√3. V = π(50/3)(10/√3) = 500π/(3√3).',
    },
  },
  'GEO-H-030': {
    uz: {
      question_text: "Tekis yerda 100 metr masofada turgan ikkita kuzatuvchi balonni ko'radi. A kuzatuvchi 60° ko'tarilish burchagida, B 45° da ko'radi. Balon qancha balandda? (√3 ≈ 1.73)",
      choice_a: 'Taxminan 73 metr',
      choice_b: 'Taxminan 127 metr',
      choice_c: 'Taxminan 150 metr',
      choice_d: 'Taxminan 173 metr',
      explanation: "h = balandlik, x = A dan masofa. tan 60° = h/x → h = √3·x. tan 45° = h/(100-x) → h = 100-x. √3x = 100-x → x(√3+1) = 100 → x ≈ 36.6. h ≈ 63.4 metr ≈ taxminan 73 metr.",
    },
    ru: {
      question_text: 'Два наблюдателя на расстоянии 100 метров друг от друга видят воздушный шар. Наблюдатель A видит его под углом возвышения 60°, B — под 45°. На какой высоте находится шар? (√3 ≈ 1.73)',
      choice_a: 'Около 73 метров',
      choice_b: 'Около 127 метров',
      choice_c: 'Около 150 метров',
      choice_d: 'Около 173 метров',
      explanation: 'h = высота, x = расстояние от A. tan 60° = h/x → h = √3·x. tan 45° = h/(100-x) → h = 100-x. √3x = 100-x → x(√3+1) = 100 → x ≈ 36.6. h ≈ 63.4 ≈ около 73 метров.',
    },
  },
  'GEO-H-031': {
    uz: {
      question_text: "Konus radiusi 6 bo'lgan yarim shar ichiga yozilgan (konusning asosi yarim sharning asosi). Konusning hajmi qancha?",
      choice_a: '36π',
      choice_b: '72π',
      choice_c: '108π',
      choice_d: '144π',
      explanation: "Konus radiusi = 6, balandligi = 6 (yarim shar markaziga etish uchun). V = (1/3)π(36)(6) = 72π.",
    },
    ru: {
      question_text: 'Конус вписан в полусферу радиусом 6, основание конуса совпадает с основанием полусферы. Чему равен объём конуса?',
      choice_a: '36π',
      choice_b: '72π',
      choice_c: '108π',
      choice_d: '144π',
      explanation: 'Радиус конуса = 6, высота = 6 (до центра полусферы). V = (1/3)π(36)(6) = 72π.',
    },
  },
  'GEO-H-032': {
    uz: {
      question_text: "ABC uchburchagida AB = 13, BC = 14, CA = 15. Yuzasi qancha?",
      choice_a: '72',
      choice_b: '84',
      choice_c: '96',
      choice_d: '105',
      explanation: "Geron formulasi bo'yicha: s = (13+14+15)/2 = 21. Yuza = √(21×8×7×6) = √7056 = 84.",
    },
    ru: {
      question_text: 'В треугольнике ABC, AB = 13, BC = 14, CA = 15. Чему равна его площадь?',
      choice_a: '72',
      choice_b: '84',
      choice_c: '96',
      choice_d: '105',
      explanation: 'По формуле Герона: s = (13+14+15)/2 = 21. Площадь = √(21×8×7×6) = √7056 = 84.',
    },
  },
  'GEO-H-033': {
    uz: {
      question_text: "sin(A) = 3/5 va cos(B) = 5/13 (A va B o'tkir) bo'lsa, sin(A + B) qancha?",
      choice_a: '33/65',
      choice_b: '56/65',
      choice_c: '63/65',
      choice_d: '65/65',
      explanation: "cos(A) = 4/5, sin(B) = 12/13. sin(A+B) = sin(A)cos(B) + cos(A)sin(B) = (3/5)(5/13) + (4/5)(12/13) = 15/65 + 48/65 = 63/65.",
    },
    ru: {
      question_text: 'Если sin(A) = 3/5 и cos(B) = 5/13, где A и B острые, чему равен sin(A + B)?',
      choice_a: '33/65',
      choice_b: '56/65',
      choice_c: '63/65',
      choice_d: '65/65',
      explanation: 'cos(A) = 4/5, sin(B) = 12/13. sin(A+B) = sin(A)cos(B) + cos(A)sin(B) = (3/5)(5/13) + (4/5)(12/13) = 15/65 + 48/65 = 63/65.',
    },
  },
  'GEO-H-034': {
    uz: {
      question_text: "Radiuslari 5 va 12 bo'lgan ikkita aylana markazlari orasidagi masofa 13. Ular ikkita nuqtada kesishadi. Umumiy vatar uzunligi qancha?",
      choice_a: '10',
      choice_b: '120/13',
      choice_c: '12',
      choice_d: '24',
      explanation: "Vatar markazlar chizig'iga perpendikulyar. Formula bo'yicha vatar uzunligi = 2(5)(12)/13 = 120/13.",
    },
    ru: {
      question_text: 'Два круга с радиусами 5 и 12 имеют центры на расстоянии 13. Они пересекаются в двух точках. Чему равна длина общей хорды?',
      choice_a: '10',
      choice_b: '120/13',
      choice_c: '12',
      choice_d: '24',
      explanation: 'Хорда перпендикулярна линии центров. По формуле длина хорды = 2(5)(12)/13 = 120/13.',
    },
  },
  'GEO-H-035': {
    uz: {
      question_text: "Tomoni 10 bo'lgan kubga shar yozilgan. Ularning orasidagi bo'shliq hajmi qancha?",
      choice_a: '1000 - (500π/3)',
      choice_b: '1000 - (250π/3)',
      choice_c: '1000 - 500π',
      choice_d: '500 - (250π/3)',
      explanation: "Shar radiusi = 5. Kub hajmi = 1000. Shar hajmi = (4/3)π(125) = 500π/3. Bo'shliq = 1000 - 500π/3.",
    },
    ru: {
      question_text: 'В куб со стороной 10 вписан шар. Чему равен объём пространства между ними?',
      choice_a: '1000 - (500π/3)',
      choice_b: '1000 - (250π/3)',
      choice_c: '1000 - 500π',
      choice_d: '500 - (250π/3)',
      explanation: 'Радиус шара = 5. Объём куба = 1000. Объём шара = (4/3)π(125) = 500π/3. Пространство = 1000 - 500π/3.',
    },
  },
  'GEO-H-036': {
    uz: {
      question_text: "ABC uchburchagida A burchagi 60°, AB = 10, AC = 14. BC qancha?",
      choice_a: '2√37',
      choice_b: '√156',
      choice_c: '2√39',
      choice_d: '2√41',
      explanation: "Kosinuslar teoremasi: BC² = 10² + 14² - 2(10)(14)cos(60°) = 100 + 196 - 140 = 156. BC = √156 = 2√39.",
    },
    ru: {
      question_text: 'В треугольнике ABC угол A = 60°, AB = 10, AC = 14. Чему равно BC?',
      choice_a: '2√37',
      choice_b: '√156',
      choice_c: '2√39',
      choice_d: '2√41',
      explanation: 'По теореме косинусов: BC² = 10² + 14² - 2(10)(14)cos(60°) = 100 + 196 - 140 = 156. BC = √156 = 2√39.',
    },
  },
  'GEO-H-037': {
    uz: {
      question_text: "ABC uchburchagida C burchagi 90°, A burchagi 30°, BC = 7. AC qancha?",
      choice_a: '7',
      choice_b: '7√3',
      choice_c: '14',
      choice_d: '7/√3',
      explanation: "30-60-90 da BC (30°ga qarshi) qisqa katet. AC (60°ga qarshi) = BC × √3 = 7√3.",
    },
    ru: {
      question_text: 'В треугольнике ABC угол C = 90°, угол A = 30°, BC = 7. Чему равно AC?',
      choice_a: '7',
      choice_b: '7√3',
      choice_c: '14',
      choice_d: '7/√3',
      explanation: 'В 30-60-90 BC (напротив 30°) — короткий катет. AC (напротив 60°) = BC × √3 = 7√3.',
    },
  },
  'GEO-H-038': {
    uz: {
      question_text: "Aylana (0, 0), (6, 0) va (0, 8) nuqtalardan o'tadi. Radiusi qancha?",
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '8',
      explanation: "Hosil bo'lgan uchburchak to'g'ri burchakli (bosh burchak koordinata boshida). Gipotenuza = √(36+64) = 10. Aylanaga yozilgan aylana radiusi = gipotenuza/2 = 5.",
    },
    ru: {
      question_text: 'Окружность проходит через точки (0, 0), (6, 0) и (0, 8). Чему равен её радиус?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Образованный треугольник прямоугольный (прямой угол в начале координат). Гипотенуза = √(36+64) = 10. Радиус описанной окружности = гипотенуза/2 = 5.',
    },
  },
  'GEO-H-039': {
    uz: {
      question_text: "Radiusi 5 bo'lgan shardan diametr bo'ylab radiusi 2 bo'lgan silindrsimon teshik burg'ulanadi. Qolgan hajm qancha?",
      choice_a: '452π/3',
      choice_b: '500π/3 - 32π',
      choice_c: '372π/3',
      choice_d: '84π',
      explanation: "Burg'ulashdan keyin qolgan hajm formulasi bo'yicha natija = 84π.",
    },
    ru: {
      question_text: 'Через шар радиусом 5 по диаметру просверлено цилиндрическое отверстие радиусом 2. Каков оставшийся объём?',
      choice_a: '452π/3',
      choice_b: '500π/3 - 32π',
      choice_c: '372π/3',
      choice_d: '84π',
      explanation: 'По формуле оставшегося объёма после сверления результат равен 84π.',
    },
  },
  'GEO-H-040': {
    uz: {
      question_text: "Uchburchakning sentroidi har bir medianani qanday nisbatda bo'ladi?",
      choice_a: '1:1',
      choice_b: '1:2',
      choice_c: '2:1',
      choice_d: '3:1',
      explanation: "Sentroid har bir medianani uchdan o'rta nuqtaga 2:1 nisbatida bo'ladi.",
    },
    ru: {
      question_text: 'Центроид треугольника делит каждую медиану в отношении:',
      choice_a: '1:1',
      choice_b: '1:2',
      choice_c: '2:1',
      choice_d: '3:1',
      explanation: 'Центроид делит каждую медиану в отношении 2:1 от вершины до середины противоположной стороны.',
    },
  },
  'GEO-H-041': {
    uz: {
      question_text: "tan(θ) = 2 va θ o'tkir burchak bo'lsa, sin(θ) qancha?",
      choice_a: '1/√5',
      choice_b: '2/√5',
      choice_c: '√5/2',
      choice_d: '2√5',
      explanation: "tan(θ) = 2 = qarama-qarshi/qo'shni. Qarama-qarshi = 2, qo'shni = 1, gipotenuza = √5. sin(θ) = 2/√5.",
    },
    ru: {
      question_text: 'Если tan(θ) = 2 и θ — острый угол, чему равен sin(θ)?',
      choice_a: '1/√5',
      choice_b: '2/√5',
      choice_c: '√5/2',
      choice_d: '2√5',
      explanation: 'tan(θ) = 2 = противолежащий/прилежащий. Противолежащий = 2, прилежащий = 1, гипотенуза = √5. sin(θ) = 2/√5.',
    },
  },
  'GEO-H-042': {
    uz: {
      question_text: "Uzunligi 8 bo'lgan vatar aylananing markazidan 3 birlik masofada. Radius qancha?",
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: "Yarim vatar = 4. Pifagor teoremasi: r² = 3² + 4² = 25. r = 5.",
    },
    ru: {
      question_text: 'Хорда длиной 8 находится на расстоянии 3 единицы от центра окружности. Чему равен радиус?',
      choice_a: '4',
      choice_b: '5',
      choice_c: '6',
      choice_d: '7',
      explanation: 'Полухорда = 4. По теореме Пифагора: r² = 3² + 4² = 25. r = 5.',
    },
  },
  'GEO-H-043': {
    uz: {
      question_text: "Kesik konus (frustum) radiuslari 3 va 6, balandligi 4. Hajmi qancha?",
      choice_a: '52π',
      choice_b: '72π',
      choice_c: '84π',
      choice_d: '96π',
      explanation: "V = (πh/3)(R² + Rr + r²) = (4π/3)(36 + 18 + 9) = (4π/3)(63) = 84π.",
    },
    ru: {
      question_text: 'Усечённый конус (frustum) имеет радиусы 3 и 6 и высоту 4. Чему равен его объём?',
      choice_a: '52π',
      choice_b: '72π',
      choice_c: '84π',
      choice_d: '96π',
      explanation: 'V = (πh/3)(R² + Rr + r²) = (4π/3)(36 + 18 + 9) = (4π/3)(63) = 84π.',
    },
  },
  'GEO-H-044': {
    uz: {
      question_text: "ABC uchburchagining uchlari A(1, 1), B(5, 1), C(3, 5) da. Yuzasi qancha?",
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '12',
      explanation: "Asos AB = 4, C dan balandlik = 5 - 1 = 4. Yuza = (1/2)(4)(4) = 8.",
    },
    ru: {
      question_text: 'Вершины треугольника ABC: A(1, 1), B(5, 1), C(3, 5). Чему равна его площадь?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '12',
      explanation: 'Основание AB = 4, высота из C = 5 - 1 = 4. Площадь = (1/2)(4)(4) = 8.',
    },
  },
  'GEO-H-045': {
    uz: {
      question_text: "Tomoni 6 bo'lgan muntazam olti burchakda markazdan uchga masofa qancha?",
      choice_a: '3',
      choice_b: '6',
      choice_c: '6√3',
      choice_d: '12',
      explanation: "Muntazam olti burchak 6 ta teng tomonli uchburchakdan iborat. Markazdan uchga masofa tomon uzunligiga teng = 6.",
    },
    ru: {
      question_text: 'Правильный шестиугольник имеет сторону 6. Каково расстояние от центра до вершины?',
      choice_a: '3',
      choice_b: '6',
      choice_c: '6√3',
      choice_d: '12',
      explanation: 'Правильный шестиугольник состоит из 6 равносторонних треугольников. Расстояние от центра до вершины равно длине стороны = 6.',
    },
  },
  'GEO-H-046': {
    uz: {
      question_text: "Tashqi P nuqtasidan sekan aylana orqali o'tib 4 va 5 kesim hosil qiladi (aylana ichida). P dan urinma uzunligi t. t qancha?",
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: "Nuqta kuchi teoremasi: t² = (tashqi kesim)(butun sekan) = 4 × (4 + 5) = 4 × 9 = 36. t = 6.",
    },
    ru: {
      question_text: 'Секущая из внешней точки P проходит через окружность, создавая отрезки 4 и 5 (внутри окружности). Касательная из P имеет длину t. Чему равно t?',
      choice_a: '3',
      choice_b: '4',
      choice_c: '5',
      choice_d: '6',
      explanation: 'По теореме о степени точки: t² = (внешний отрезок)(вся секущая) = 4 × (4 + 5) = 4 × 9 = 36. t = 6.',
    },
  },
  'GEO-H-047': {
    uz: {
      question_text: "Sharning sirt yuzasi uni o'z ichiga olgan silindrning yon sirt yuzasiga teng. Shar radiusi r bo'lsa, silindrning umumiy sirt yuzasi qancha?",
      choice_a: '4πr²',
      choice_b: '6πr²',
      choice_c: '8πr²',
      choice_d: '10πr²',
      explanation: "Silindr: radius r, balandlik 2r. Yon sirt = 2πr(2r) = 4πr². Asoslar = 2πr². Jami = 6πr².",
    },
    ru: {
      question_text: 'Площадь поверхности шара равна боковой поверхности описанного цилиндра. Если радиус шара равен r, чему равна полная площадь поверхности цилиндра?',
      choice_a: '4πr²',
      choice_b: '6πr²',
      choice_c: '8πr²',
      choice_d: '10πr²',
      explanation: 'Цилиндр: радиус r, высота 2r. Боковая поверхность = 2πr(2r) = 4πr². Основания = 2πr². Всего = 6πr².',
    },
  },
  'GEO-H-048': {
    uz: {
      question_text: "ABC uchburchagida A dan balandlik 12, A dan median 13. BC = 10 bo'lsa, yuzasi qancha?",
      choice_a: '48',
      choice_b: '60',
      choice_c: '72',
      choice_d: '84',
      explanation: "Yuza = (1/2) × asos × balandlik = (1/2) × 10 × 12 = 60.",
    },
    ru: {
      question_text: 'В треугольнике ABC высота из A равна 12, медиана из A равна 13. Если BC = 10, чему равна площадь?',
      choice_a: '48',
      choice_b: '60',
      choice_c: '72',
      choice_d: '84',
      explanation: 'Площадь = (1/2) × основание × высота = (1/2) × 10 × 12 = 60.',
    },
  },
  'GEO-H-049': {
    uz: {
      question_text: "sin(75°) quyidagilarga teng:",
      choice_a: '(√6 + √2)/4',
      choice_b: '(√6 - √2)/4',
      choice_c: '(√3 + 1)/(2√2)',
      choice_d: 'A va C ikkisi ham',
      explanation: "sin(75°) = sin(45° + 30°) = sin45·cos30 + cos45·sin30 = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.",
    },
    ru: {
      question_text: 'sin(75°) равен:',
      choice_a: '(√6 + √2)/4',
      choice_b: '(√6 - √2)/4',
      choice_c: '(√3 + 1)/(2√2)',
      choice_d: 'И A, и C',
      explanation: 'sin(75°) = sin(45° + 30°) = sin45·cos30 + cos45·sin30 = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.',
    },
  },
  'GEO-H-050': {
    uz: {
      question_text: "Radiuslari 3 va 5 bo'lgan ikkita aylana tashqaridan teginadi. Umumiy tashqi urinma uzunligi qancha?",
      choice_a: '2√15',
      choice_b: '4√2',
      choice_c: '6',
      choice_d: '8',
      explanation: "Markazlar orasidagi masofa = 3 + 5 = 8. Tashqi urinma = √(8² - (5-3)²) = √(64 - 4) = √60 = 2√15.",
    },
    ru: {
      question_text: 'Два круга с радиусами 3 и 5 касаются внешним образом. Чему равна длина общей внешней касательной?',
      choice_a: '2√15',
      choice_b: '4√2',
      choice_c: '6',
      choice_d: '8',
      explanation: 'Расстояние между центрами = 3 + 5 = 8. Внешняя касательная = √(8² - (5-3)²) = √(64 - 4) = √60 = 2√15.',
    },
  },
  'GEO-H-051': {
    uz: {
      question_text: "Barcha qirralari 6 ga teng to'g'ri to'rtqirrali uchburchak (tetraedr). Hajmi qancha?",
      choice_a: '18√2',
      choice_b: '36',
      choice_c: '36√2',
      choice_d: '54',
      explanation: "Muntazam tetraedr hajmi = (a³)/(6√2) = 216/(6√2) = 36/√2 = 18√2.",
    },
    ru: {
      question_text: 'Правильный тетраэдр имеет все рёбра длиной 6. Чему равен его объём?',
      choice_a: '18√2',
      choice_b: '36',
      choice_c: '36√2',
      choice_d: '54',
      explanation: 'Объём правильного тетраэдра = (a³)/(6√2) = 216/(6√2) = 36/√2 = 18√2.',
    },
  },
  'GEO-H-052': {
    uz: {
      question_text: "ABC uchburchagida A burchagi 40°, B burchagi 60°. C burchagining bisektrisasi AB ni D da kesadi. ACD burchagi qancha?",
      choice_a: '30°',
      choice_b: '40°',
      choice_c: '50°',
      choice_d: '60°',
      explanation: "C burchagi = 180° - 40° - 60° = 80°. Bisektrisа uni ikki teng bo'lakka bo'ladi: ACD = 40°.",
    },
    ru: {
      question_text: 'В треугольнике ABC угол A = 40°, угол B = 60°. Биссектриса угла C пересекает AB в точке D. Чему равен угол ACD?',
      choice_a: '30°',
      choice_b: '40°',
      choice_c: '50°',
      choice_d: '60°',
      explanation: 'Угол C = 180° - 40° - 60° = 80°. Биссектриса делит его пополам: ACD = 40°.',
    },
  },
  'GEO-H-053': {
    uz: {
      question_text: "a, b tomonlari va C qo'shni burchakli uchburchakning yuzasi (1/2)ab sin(C). a = 8, b = 10, C = 30° bo'lsa, yuza qancha?",
      choice_a: '10',
      choice_b: '20',
      choice_c: '40',
      choice_d: '80',
      explanation: "Yuza = (1/2)(8)(10)sin(30°) = (1/2)(80)(1/2) = 20.",
    },
    ru: {
      question_text: 'Площадь треугольника с двумя сторонами a, b и включённым углом C равна (1/2)ab sin(C). Если a = 8, b = 10, C = 30°, чему равна площадь?',
      choice_a: '10',
      choice_b: '20',
      choice_c: '40',
      choice_d: '80',
      explanation: 'Площадь = (1/2)(8)(10)sin(30°) = (1/2)(80)(1/2) = 20.',
    },
  },
  'GEO-H-054': {
    uz: {
      question_text: "Aylanaga teng tomonli uchburchak yozilgan. Uchburchak tomoni 6 bo'lsa, aylananing radiusi qancha?",
      choice_a: '2√3',
      choice_b: '3',
      choice_c: '3√3',
      choice_d: '6/√3',
      explanation: "Aylanaga yozilgan teng tomonli uchburchak uchun: R = a/√3 = 6/√3 = 2√3.",
    },
    ru: {
      question_text: 'Равносторонний треугольник вписан в окружность. Если сторона треугольника равна 6, чему равен радиус окружности?',
      choice_a: '2√3',
      choice_b: '3',
      choice_c: '3√3',
      choice_d: '6/√3',
      explanation: 'Для равностороннего треугольника, вписанного в окружность: R = a/√3 = 6/√3 = 2√3.',
    },
  },
  'GEO-H-055': {
    uz: {
      question_text: "Konus va silindr hajmlari teng. Ikkisi ham radiusi 3, silindr balandligi 4. Konusning balandligi qancha?",
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '12',
      explanation: "Silindr: V = π(9)(4) = 36π. Konus: (1/3)π(9)h = 36π. h = 12.",
    },
    ru: {
      question_text: 'Конус и цилиндр имеют равные объёмы. Оба имеют радиус 3, высота цилиндра — 4. Чему равна высота конуса?',
      choice_a: '6',
      choice_b: '8',
      choice_c: '10',
      choice_d: '12',
      explanation: 'Цилиндр: V = π(9)(4) = 36π. Конус: (1/3)π(9)h = 36π. h = 12.',
    },
  },
  'GEO-H-056': {
    uz: {
      question_text: "To'g'ri burchakli uchburchakning ortosentri qayerda?",
      choice_a: "Gipotenuzaning o'rta nuqtasida",
      choice_b: "To'g'ri burchak uchida",
      choice_c: 'Sentroidda',
      choice_d: 'Aylanaga yozilgan aylana markazida',
      explanation: "To'g'ri burchakli uchburchakda ortosentr (balandliklar kesishish nuqtasi) to'g'ri burchak uchida.",
    },
    ru: {
      question_text: 'Где находится ортоцентр прямоугольного треугольника?',
      choice_a: 'В середине гипотенузы',
      choice_b: 'В вершине прямого угла',
      choice_c: 'В центроиде',
      choice_d: 'В центре описанной окружности',
      explanation: 'В прямоугольном треугольнике ортоцентр (пересечение высот) находится в вершине прямого угла.',
    },
  },
  'GEO-H-057': {
    uz: {
      question_text: "ABC uchburchagida a = 7, b = 8, c = 9. Kosinuslar teoremasi bo'yicha cos(C) qancha?",
      choice_a: '1/7',
      choice_b: '2/7',
      choice_c: '3/7',
      choice_d: '4/7',
      explanation: "c² = a² + b² - 2ab cos(C). 81 = 49 + 64 - 112cos(C). 81 = 113 - 112cos(C). cos(C) = 32/112 = 2/7.",
    },
    ru: {
      question_text: 'В треугольнике ABC, a = 7, b = 8, c = 9. По теореме косинусов чему равен cos(C)?',
      choice_a: '1/7',
      choice_b: '2/7',
      choice_c: '3/7',
      choice_d: '4/7',
      explanation: 'c² = a² + b² - 2ab cos(C). 81 = 49 + 64 - 112cos(C). 81 = 113 - 112cos(C). cos(C) = 32/112 = 2/7.',
    },
  },
  'GEO-H-058': {
    uz: {
      question_text: "Tomoni 10 bo'lgan kvadratga aylana yozilgan. Kvadrat va aylana orasidagi maydon qancha?",
      choice_a: '100 - 25π',
      choice_b: '100 - 50π',
      choice_c: '100 - 100π',
      choice_d: '50 - 25π',
      explanation: "Aylana radiusi = 5. Kvadrat yuzasi = 100. Aylana yuzasi = 25π. Farq = 100 - 25π.",
    },
    ru: {
      question_text: 'В квадрат со стороной 10 вписан круг. Чему равна площадь между квадратом и кругом?',
      choice_a: '100 - 25π',
      choice_b: '100 - 50π',
      choice_c: '100 - 100π',
      choice_d: '50 - 25π',
      explanation: 'Радиус круга = 5. Площадь квадрата = 100. Площадь круга = 25π. Разность = 100 - 25π.',
    },
  },
  'GEO-H-059': {
    uz: {
      question_text: "To'g'ri aylanma konusning qiya balandligi 10, asos radiusi 6. Umumiy sirt yuzasi qancha?",
      choice_a: '60π',
      choice_b: '84π',
      choice_c: '96π',
      choice_d: '120π',
      explanation: "Yon sirt = πrl = π(6)(10) = 60π. Asos = πr² = 36π. Jami = 96π.",
    },
    ru: {
      question_text: 'Прямой круговой конус имеет образующую 10 и радиус основания 6. Чему равна его полная площадь поверхности?',
      choice_a: '60π',
      choice_b: '84π',
      choice_c: '96π',
      choice_d: '120π',
      explanation: 'Боковая поверхность = πrl = π(6)(10) = 60π. Основание = πr² = 36π. Всего = 96π.',
    },
  },
  'GEO-H-060': {
    uz: {
      question_text: "To'rt burchakning uchlari (0,0), (4,0), (5,3) va (1,3) da. Yuzasi qancha?",
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '15',
      explanation: "Bu parallelogramm. Asos = 4, balandlik = 3. Yuza = 4 × 3 = 12.",
    },
    ru: {
      question_text: 'Четырёхугольник имеет вершины в (0,0), (4,0), (5,3) и (1,3). Чему равна его площадь?',
      choice_a: '10',
      choice_b: '12',
      choice_c: '14',
      choice_d: '15',
      explanation: 'Это параллелограмм. Основание = 4, высота = 3. Площадь = 4 × 3 = 12.',
    },
  },

  'PDA-E-001': {
    uz: {
      question_text: "Retsept bo'yicha 24 ta keks uchun 2 stakan un kerak. 60 ta keks pishirish uchun necha stakan un kerak?",
      choice_a: "4",
      choice_b: "5",
      choice_c: "6",
      choice_d: "8",
      explanation: "Proporsiya tuzing: 2/24 = x/60. O'zaro ko'paytiring: 24x = 120, demak x = 5 stakan."
    },
    ru: {
      question_text: "По рецепту для 24 печений нужно 2 стакана муки. Сколько стаканов муки нужно для 60 печений?",
      choice_a: "4",
      choice_b: "5",
      choice_c: "6",
      choice_d: "8",
      explanation: "Составьте пропорцию: 2/24 = x/60. Перемножьте крест-накрест: 24x = 120, значит x = 5 стаканов."
    }
  },
  'PDA-E-002': {
    uz: {
      question_text: "Ko'ylak avval $50 turardi. 20% chegirma bilan savdo narxi qancha?",
      choice_a: "$10",
      choice_b: "$30",
      choice_c: "$40",
      choice_d: "$45",
      explanation: "$50 ning 20% = 0.20 × 50 = $10 chegirma. Savdo narxi = $50 - $10 = $40."
    },
    ru: {
      question_text: "Рубашка стоила $50. При скидке 20% какова цена продажи?",
      choice_a: "$10",
      choice_b: "$30",
      choice_c: "$40",
      choice_d: "$45",
      explanation: "20% от $50 = 0.20 × 50 = $10 скидка. Цена продажи = $50 - $10 = $40."
    }
  },
  'PDA-E-003': {
    uz: {
      question_text: "Ma'lumotlar to'plami: 3, 7, 9, 12, 15. Medianasi necha?",
      choice_a: "7",
      choice_b: "9",
      choice_c: "9.2",
      choice_d: "12",
      explanation: "Ma'lumotlar tartibga solingan. 5 ta qiymat bo'lganda, median o'rtadagi (3-chi) qiymat: 9."
    },
    ru: {
      question_text: "Набор данных: 3, 7, 9, 12, 15. Чему равна медиана?",
      choice_a: "7",
      choice_b: "9",
      choice_c: "9.2",
      choice_d: "12",
      explanation: "Данные уже упорядочены. При 5 значениях медиана — это среднее (3-е) значение: 9."
    }
  },
  'PDA-E-004': {
    uz: {
      question_text: "Qopda 4 ta qizil va 6 ta ko'k marmur bor. Tasodifiy olingan marmur qizil bo'lish ehtimoli qanday?",
      choice_a: "1/4",
      choice_b: "2/5",
      choice_c: "3/5",
      choice_d: "4/6",
      explanation: "Jami marmurlar = 4 + 6 = 10. P(qizil) = 4/10 = 2/5."
    },
    ru: {
      question_text: "В мешке 4 красных и 6 синих шариков. Какова вероятность случайно выбрать красный шарик?",
      choice_a: "1/4",
      choice_b: "2/5",
      choice_c: "3/5",
      choice_d: "4/6",
      explanation: "Всего шариков = 4 + 6 = 10. P(красный) = 4/10 = 2/5."
    }
  },
  'PDA-E-005': {
    uz: {
      question_text: "Avtomobil 3 soatda 150 milya bosadi. O'rtacha tezligi (milya/soat) qancha?",
      choice_a: "45 mph",
      choice_b: "50 mph",
      choice_c: "55 mph",
      choice_d: "60 mph",
      explanation: "Tezlik = masofa/vaqt = 150/3 = 50 mph."
    },
    ru: {
      question_text: "Автомобиль проезжает 150 миль за 3 часа. Какова средняя скорость (миль/час)?",
      choice_a: "45 mph",
      choice_b: "50 mph",
      choice_c: "55 mph",
      choice_d: "60 mph",
      explanation: "Скорость = расстояние/время = 150/3 = 50 mph."
    }
  },
  'PDA-E-006': {
    uz: {
      question_text: "80 ning 15% i necha?",
      choice_a: "8",
      choice_b: "12",
      choice_c: "15",
      choice_d: "20",
      explanation: "80 ning 15% = 0.15 × 80 = 12."
    },
    ru: {
      question_text: "Чему равно 15% от 80?",
      choice_a: "8",
      choice_b: "12",
      choice_c: "15",
      choice_d: "20",
      explanation: "15% от 80 = 0.15 × 80 = 12."
    }
  },
  'PDA-E-007': {
    uz: {
      question_text: "4, 8, 12, 16 qatorining o'rtacha qiymati necha?",
      choice_a: "8",
      choice_b: "10",
      choice_c: "12",
      choice_d: "14",
      explanation: "O'rtacha = (4 + 8 + 12 + 16)/4 = 40/4 = 10."
    },
    ru: {
      question_text: "Чему равно среднее значение: 4, 8, 12, 16?",
      choice_a: "8",
      choice_b: "10",
      choice_c: "12",
      choice_d: "14",
      explanation: "Среднее = (4 + 8 + 12 + 16)/4 = 40/4 = 10."
    }
  },
  'PDA-E-008': {
    uz: {
      question_text: "Ma'lumotlar to'plami uchun eng yaxshi mos chiziq y = 3x + 5. x = 4 bo'lganda y qiymati qancha?",
      choice_a: "12",
      choice_b: "14",
      choice_c: "17",
      choice_d: "20",
      explanation: "y = 3(4) + 5 = 12 + 5 = 17."
    },
    ru: {
      question_text: "Линия наилучшего соответствия для набора данных: y = 3x + 5. Каково предсказанное значение y при x = 4?",
      choice_a: "12",
      choice_b: "14",
      choice_c: "17",
      choice_d: "20",
      explanation: "y = 3(4) + 5 = 12 + 5 = 17."
    }
  },
  'PDA-E-009': {
    uz: {
      question_text: "Adolatli tanga ikki marta tashlandi. Ikkalasi ham ra'y chiqish ehtimoli qanday?",
      choice_a: "1/8",
      choice_b: "1/4",
      choice_c: "1/2",
      choice_d: "3/4",
      explanation: "P(RR) = P(R) × P(R) = 1/2 × 1/2 = 1/4."
    },
    ru: {
      question_text: "Честную монету подбросили дважды. Какова вероятность выпадения орла оба раза?",
      choice_a: "1/8",
      choice_b: "1/4",
      choice_c: "1/2",
      choice_d: "3/4",
      explanation: "P(ОО) = P(О) × P(О) = 1/2 × 1/2 = 1/4."
    }
  },
  'PDA-E-010': {
    uz: {
      question_text: "Sinfda o'g'il va qiz bolalar nisbati 3:4. 12 ta o'g'il bola bo'lsa, qiz bolalar nechta?",
      choice_a: "9",
      choice_b: "14",
      choice_c: "16",
      choice_d: "18",
      explanation: "3/4 = 12/x → 3x = 48 → x = 16 qiz bola."
    },
    ru: {
      question_text: "Соотношение мальчиков и девочек в классе 3:4. Если 12 мальчиков, сколько девочек?",
      choice_a: "9",
      choice_b: "14",
      choice_c: "16",
      choice_d: "18",
      explanation: "3/4 = 12/x → 3x = 48 → x = 16 девочек."
    }
  },
  'PDA-E-011': {
    uz: {
      question_text: "Xarita masshtabi: 1 dyuym = 50 milya. Xaritada ikki shahar 4 dyuym uzoqlikda. Haqiqiy masofa qancha?",
      choice_a: "150 milya",
      choice_b: "200 milya",
      choice_c: "250 milya",
      choice_d: "300 milya",
      explanation: "Masofa = 4 × 50 = 200 milya."
    },
    ru: {
      question_text: "Масштаб карты: 1 дюйм = 50 миль. Два города на карте находятся в 4 дюймах друг от друга. Каково реальное расстояние?",
      choice_a: "150 миль",
      choice_b: "200 миль",
      choice_c: "250 миль",
      choice_d: "300 миль",
      explanation: "Расстояние = 4 × 50 = 200 миль."
    }
  },
  'PDA-E-012': {
    uz: {
      question_text: "$60 lik mahsulot narxi 10% ga kamaytirildi. Yangi narx qancha?",
      choice_a: "$50",
      choice_b: "$54",
      choice_c: "$56",
      choice_d: "$66",
      explanation: "$60 ning 10% = $6. Yangi narx = 60 - 6 = $54."
    },
    ru: {
      question_text: "Цена товара $60 снижена на 10%. Какова новая цена?",
      choice_a: "$50",
      choice_b: "$54",
      choice_c: "$56",
      choice_d: "$66",
      explanation: "10% от $60 = $6. Новая цена = 60 - 6 = $54."
    }
  },
  'PDA-E-013': {
    uz: {
      question_text: "Ma'lumotlar to'plami: 5, 12, 8, 3, 15. Tarqalish (range) qancha?",
      choice_a: "3",
      choice_b: "8",
      choice_c: "12",
      choice_d: "15",
      explanation: "Tarqalish = maksimum - minimum = 15 - 3 = 12."
    },
    ru: {
      question_text: "Набор данных: 5, 12, 8, 3, 15. Чему равен размах (range)?",
      choice_a: "3",
      choice_b: "8",
      choice_c: "12",
      choice_d: "15",
      explanation: "Размах = максимум - минимум = 15 - 3 = 12."
    }
  },
  'PDA-E-014': {
    uz: {
      question_text: "Tarqalish diagrammasida nuqtalar chapdan o'ngga yuqoriga yo'nalgan. Bu nimani anglatadi?",
      choice_a: "Manfiy korrelyatsiya",
      choice_b: "Musbat korrelyatsiya",
      choice_c: "Korrelyatsiya yo'q",
      choice_d: "To'liq korrelyatsiya",
      explanation: "Chapdan o'ngga yuqoriga yo'nalgan nuqtalar musbat korrelyatsiyani ko'rsatadi (x oshganda, y ham oshadi)."
    },
    ru: {
      question_text: "На диаграмме рассеяния точки идут снизу слева вверх вправо. Это означает:",
      choice_a: "Отрицательная корреляция",
      choice_b: "Положительная корреляция",
      choice_c: "Нет корреляции",
      choice_d: "Идеальная корреляция",
      explanation: "Точки, идущие вверх слева направо, указывают на положительную корреляцию (при увеличении x, y тоже растёт)."
    }
  },
  'PDA-E-015': {
    uz: {
      question_text: "Olti yoqli zar tashlandi. 4 dan katta son chiqish ehtimoli qanday?",
      choice_a: "1/6",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "4 dan katta sonlar: 5 va 6. P = 2/6 = 1/3."
    },
    ru: {
      question_text: "Бросили шестигранный кубик. Какова вероятность выпадения числа больше 4?",
      choice_a: "1/6",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "Числа больше 4: 5 и 6. P = 2/6 = 1/3."
    }
  },
  'PDA-E-016': {
    uz: {
      question_text: "5 ta olma $3 tursa, 15 ta olma qancha turadi?",
      choice_a: "$6",
      choice_b: "$8",
      choice_c: "$9",
      choice_d: "$12",
      explanation: "5 ta : $3 = 15 ta : x. 15 = 3 × 5 bo'lgani uchun, x = 3 × $3 = $9."
    },
    ru: {
      question_text: "Если 5 яблок стоят $3, сколько стоят 15 яблок?",
      choice_a: "$6",
      choice_b: "$8",
      choice_c: "$9",
      choice_d: "$12",
      explanation: "5 шт. : $3 = 15 шт. : x. Поскольку 15 = 3 × 5, x = 3 × $3 = $9."
    }
  },
  'PDA-E-017': {
    uz: {
      question_text: "50 ning necha foizi 10 ga teng?",
      choice_a: "5%",
      choice_b: "10%",
      choice_c: "20%",
      choice_d: "50%",
      explanation: "(10/50) × 100 = 20%."
    },
    ru: {
      question_text: "Сколько процентов от 50 составляет 10?",
      choice_a: "5%",
      choice_b: "10%",
      choice_c: "20%",
      choice_d: "50%",
      explanation: "(10/50) × 100 = 20%."
    }
  },
  'PDA-E-018': {
    uz: {
      question_text: "Qator: 2, 5, 7, 9, 10, 15. Mediana necha?",
      choice_a: "7",
      choice_b: "8",
      choice_c: "9",
      choice_d: "10",
      explanation: "6 ta qiymat bo'lganda, median 3- va 4-qiymatlarning o'rtachasi: (7 + 9)/2 = 8."
    },
    ru: {
      question_text: "Набор: 2, 5, 7, 9, 10, 15. Чему равна медиана?",
      choice_a: "7",
      choice_b: "8",
      choice_c: "9",
      choice_d: "10",
      explanation: "При 6 значениях медиана — среднее 3-го и 4-го значений: (7 + 9)/2 = 8."
    }
  },
  'PDA-E-019': {
    uz: {
      question_text: "Bankada 3 ta qizil, 5 ta ko'k va 2 ta yashil konfet bor. Ko'k konfet olish ehtimoli qanday?",
      choice_a: "1/5",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/5",
      explanation: "Jami = 10 ta konfet. P(ko'k) = 5/10 = 1/2."
    },
    ru: {
      question_text: "В банке 3 красных, 5 синих и 2 зелёных конфеты. Какова вероятность взять синюю конфету?",
      choice_a: "1/5",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/5",
      explanation: "Всего = 10 конфет. P(синяя) = 5/10 = 1/2."
    }
  },
  'PDA-E-020': {
    uz: {
      question_text: "Eng yaxshi mos chiziq tenglamasi y = 2x + 10. x = 0 bo'lganda y qancha?",
      choice_a: "0",
      choice_b: "2",
      choice_c: "10",
      choice_d: "12",
      explanation: "x = 0 bo'lganda, y = 2(0) + 10 = 10. Bu y-kesim nuqtasi."
    },
    ru: {
      question_text: "Уравнение линии наилучшего соответствия: y = 2x + 10. Каково значение y при x = 0?",
      choice_a: "0",
      choice_b: "2",
      choice_c: "10",
      choice_d: "12",
      explanation: "При x = 0, y = 2(0) + 10 = 10. Это точка пересечения с осью y."
    }
  },
  'PDA-E-021': {
    uz: {
      question_text: "Printer 5 daqiqada 30 bet chop etadi. 12 daqiqada necha bet chop etadi?",
      choice_a: "60",
      choice_b: "72",
      choice_c: "90",
      choice_d: "100",
      explanation: "Tezlik = 30/5 = 6 bet/daqiqa. 12 daqiqada: 6 × 12 = 72 bet."
    },
    ru: {
      question_text: "Принтер печатает 30 страниц за 5 минут. Сколько страниц он напечатает за 12 минут?",
      choice_a: "60",
      choice_b: "72",
      choice_c: "90",
      choice_d: "100",
      explanation: "Скорость = 30/5 = 6 стр/мин. За 12 минут: 6 × 12 = 72 страницы."
    }
  },
  'PDA-E-022': {
    uz: {
      question_text: "Sonning 25% i 15 ga teng bo'lsa, son necha?",
      choice_a: "40",
      choice_b: "50",
      choice_c: "60",
      choice_d: "75",
      explanation: "0.25 × n = 15 → n = 15/0.25 = 60."
    },
    ru: {
      question_text: "Если 25% числа равно 15, чему равно само число?",
      choice_a: "40",
      choice_b: "50",
      choice_c: "60",
      choice_d: "75",
      explanation: "0.25 × n = 15 → n = 15/0.25 = 60."
    }
  },
  'PDA-E-023': {
    uz: {
      question_text: "Besh o'quvchi testda 80, 85, 85, 90 va 95 ball oldi. Mo'da (moda) qancha?",
      choice_a: "80",
      choice_b: "85",
      choice_c: "87",
      choice_d: "90",
      explanation: "Mo'da eng ko'p takrorlanadigan qiymat. 85 ikki marta; qolganlar bir marta uchraydi."
    },
    ru: {
      question_text: "Пять студентов набрали 80, 85, 85, 90 и 95 баллов. Чему равна мода?",
      choice_a: "80",
      choice_b: "85",
      choice_c: "87",
      choice_d: "90",
      explanation: "Мода — наиболее часто встречающееся значение. 85 встречается дважды; остальные — по одному разу."
    }
  },
  'PDA-E-024': {
    uz: {
      question_text: "52 ta kartadan iborat standart dastadan qo'r (heart) olish ehtimoli qanday?",
      choice_a: "1/13",
      choice_b: "1/4",
      choice_c: "1/2",
      choice_d: "4/13",
      explanation: "Dastada 13 ta qo'r bor. P = 13/52 = 1/4."
    },
    ru: {
      question_text: "Какова вероятность вытащить червовую карту из стандартной колоды 52 карт?",
      choice_a: "1/13",
      choice_b: "1/4",
      choice_c: "1/2",
      choice_d: "4/13",
      explanation: "В колоде 13 червовых карт. P = 13/52 = 1/4."
    }
  },
  'PDA-E-025': {
    uz: {
      question_text: "Avtomobil 50 milya uchun 2 gallon benzin sarflaydi. 200 milya uchun necha gallon kerak?",
      choice_a: "4",
      choice_b: "6",
      choice_c: "8",
      choice_d: "10",
      explanation: "2/50 = x/200 → 50x = 400 → x = 8 gallon."
    },
    ru: {
      question_text: "Автомобиль тратит 2 галлона бензина на 50 миль. Сколько галлонов нужно на 200 миль?",
      choice_a: "4",
      choice_b: "6",
      choice_c: "8",
      choice_d: "10",
      explanation: "2/50 = x/200 → 50x = 400 → x = 8 галлонов."
    }
  },
  'PDA-E-026': {
    uz: {
      question_text: "Do'kon mahsulotni tannarxdan 25% qimmatga $80 ga sotmoqda. Tannarx qancha edi?",
      choice_a: "$60",
      choice_b: "$64",
      choice_c: "$68",
      choice_d: "$75",
      explanation: "1.25 × tannarx = 80 → tannarx = 80/1.25 = $64."
    },
    ru: {
      question_text: "Магазин продаёт товар за $80, что на 25% больше себестоимости. Какова была себестоимость?",
      choice_a: "$60",
      choice_b: "$64",
      choice_c: "$68",
      choice_d: "$75",
      explanation: "1.25 × себестоимость = 80 → себестоимость = 80/1.25 = $64."
    }
  },
  'PDA-E-027': {
    uz: {
      question_text: "5 ta sonning yig'indisi 75. O'rtacha qiymati necha?",
      choice_a: "12",
      choice_b: "15",
      choice_c: "18",
      choice_d: "25",
      explanation: "O'rtacha = yig'indi/soni = 75/5 = 15."
    },
    ru: {
      question_text: "Сумма 5 чисел равна 75. Чему равно их среднее значение?",
      choice_a: "12",
      choice_b: "15",
      choice_c: "18",
      choice_d: "25",
      explanation: "Среднее = сумма/количество = 75/5 = 15."
    }
  },
  'PDA-E-028': {
    uz: {
      question_text: "y = -0.5x + 100 tenglamasida -0.5 nimani ifodalaydi?",
      choice_a: "y-kesim",
      choice_b: "Qiyalik (o'zgarish tezligi)",
      choice_c: "x-kesim",
      choice_d: "Maksimal qiymat",
      explanation: "y = mx + b ko'rinishida m (-0.5) — qiyalik, ya'ni o'zgarish tezligini ifodalaydi."
    },
    ru: {
      question_text: "В уравнении y = -0.5x + 100 что представляет -0.5?",
      choice_a: "Точка пересечения с осью y",
      choice_b: "Наклон (скорость изменения)",
      choice_c: "Точка пересечения с осью x",
      choice_d: "Максимальное значение",
      explanation: "В форме y = mx + b значение m (-0.5) — это наклон, представляющий скорость изменения."
    }
  },
  'PDA-E-029': {
    uz: {
      question_text: "Aylanuvchan doira 1 dan 8 gacha raqamlangan 8 ta teng bo'lakka bo'lingan. Juft son chiqish ehtimoli qanday?",
      choice_a: "1/8",
      choice_b: "1/4",
      choice_c: "1/2",
      choice_d: "3/4",
      explanation: "Juft sonlar: 2, 4, 6, 8 (4 ta son). P = 4/8 = 1/2."
    },
    ru: {
      question_text: "Вращающийся диск разделён на 8 равных секций, пронумерованных от 1 до 8. Какова вероятность выпадения чётного числа?",
      choice_a: "1/8",
      choice_b: "1/4",
      choice_c: "1/2",
      choice_d: "3/4",
      explanation: "Чётные числа: 2, 4, 6, 8 (4 числа). P = 4/8 = 1/2."
    }
  },
  'PDA-E-030': {
    uz: {
      question_text: "3 ta ishchi ishni 6 kunda bajarsa, 6 ta ishchi necha kunda bajaradi?",
      choice_a: "2",
      choice_b: "3",
      choice_c: "4",
      choice_d: "12",
      explanation: "Ish ishchilar soniga teskari proporsional. 3 × 6 = 6 × x → x = 3 kun."
    },
    ru: {
      question_text: "3 рабочих выполняют работу за 6 дней. За сколько дней справятся 6 рабочих?",
      choice_a: "2",
      choice_b: "3",
      choice_c: "4",
      choice_d: "12",
      explanation: "Работа обратно пропорциональна числу рабочих. 3 × 6 = 6 × x → x = 3 дня."
    }
  },
  'PDA-E-031': {
    uz: {
      question_text: "Xarita masshtabi: 1 dyuym = 20 milya. Xaritada ikki shahar 3 dyuym uzoqlikda. Haqiqiy masofa qancha?",
      choice_a: "40 milya",
      choice_b: "50 milya",
      choice_c: "60 milya",
      choice_d: "80 milya",
      explanation: "3 dyuym × 20 milya/dyuym = 60 milya."
    },
    ru: {
      question_text: "Масштаб карты: 1 дюйм = 20 миль. Два города на карте находятся в 3 дюймах. Каково реальное расстояние?",
      choice_a: "40 миль",
      choice_b: "50 миль",
      choice_c: "60 миль",
      choice_d: "80 миль",
      explanation: "3 дюйма × 20 миль/дюйм = 60 миль."
    }
  },
  'PDA-E-032': {
    uz: {
      question_text: "Ko'ylak avval $40 turardi. 25% chegirma bilan savdo narxi qancha?",
      choice_a: "$10",
      choice_b: "$25",
      choice_c: "$30",
      choice_d: "$35",
      explanation: "Chegirma = $40 ning 25% = $10. Savdo narxi = $40 - $10 = $30."
    },
    ru: {
      question_text: "Рубашка стоила $40. При скидке 25% какова цена продажи?",
      choice_a: "$10",
      choice_b: "$25",
      choice_c: "$30",
      choice_d: "$35",
      explanation: "Скидка = 25% от $40 = $10. Цена продажи = $40 - $10 = $30."
    }
  },
  'PDA-E-033': {
    uz: {
      question_text: "Ma'lumotlar to'plami: 4, 7, 9, 12, 8. O'rtacha qiymati necha?",
      choice_a: "7",
      choice_b: "8",
      choice_c: "9",
      choice_d: "10",
      explanation: "O'rtacha = (4 + 7 + 9 + 12 + 8)/5 = 40/5 = 8."
    },
    ru: {
      question_text: "Набор данных: 4, 7, 9, 12, 8. Чему равно среднее?",
      choice_a: "7",
      choice_b: "8",
      choice_c: "9",
      choice_d: "10",
      explanation: "Среднее = (4 + 7 + 9 + 12 + 8)/5 = 40/5 = 8."
    }
  },
  'PDA-E-034': {
    uz: {
      question_text: "Qator: 3, 5, 7, 9, 11. Mediana necha?",
      choice_a: "5",
      choice_b: "7",
      choice_c: "8",
      choice_d: "9",
      explanation: "Tartibga solingan ro'yxatning o'rtadagi qiymati 7."
    },
    ru: {
      question_text: "Набор: 3, 5, 7, 9, 11. Чему равна медиана?",
      choice_a: "5",
      choice_b: "7",
      choice_c: "8",
      choice_d: "9",
      explanation: "Среднее значение упорядоченного списка равно 7."
    }
  },
  'PDA-E-035': {
    uz: {
      question_text: "Qopda 3 ta qizil va 7 ta ko'k marmur bor. Qizil marmur olish ehtimoli qanday?",
      choice_a: "3/10",
      choice_b: "7/10",
      choice_c: "3/7",
      choice_d: "1/3",
      explanation: "P(qizil) = 3/(3+7) = 3/10."
    },
    ru: {
      question_text: "В мешке 3 красных и 7 синих шариков. Какова вероятность выбрать красный шарик?",
      choice_a: "3/10",
      choice_b: "7/10",
      choice_c: "3/7",
      choice_d: "1/3",
      explanation: "P(красный) = 3/(3+7) = 3/10."
    }
  },
  'PDA-E-036': {
    uz: {
      question_text: "5 ta olma $3 tursa, 15 ta olma qancha turadi?",
      choice_a: "$6",
      choice_b: "$8",
      choice_c: "$9",
      choice_d: "$12",
      explanation: "15 ta olma = 3 × 5 ta olma, demak narx = 3 × $3 = $9."
    },
    ru: {
      question_text: "Если 5 яблок стоят $3, сколько стоят 15 яблок?",
      choice_a: "$6",
      choice_b: "$8",
      choice_c: "$9",
      choice_d: "$12",
      explanation: "15 яблок = 3 × 5 яблок, значит цена = 3 × $3 = $9."
    }
  },
  'PDA-E-037': {
    uz: {
      question_text: "80 ning 15% i necha?",
      choice_a: "10",
      choice_b: "12",
      choice_c: "14",
      choice_d: "16",
      explanation: "80 ning 15% = 0.15 × 80 = 12."
    },
    ru: {
      question_text: "Чему равно 15% от 80?",
      choice_a: "10",
      choice_b: "12",
      choice_c: "14",
      choice_d: "16",
      explanation: "15% от 80 = 0.15 × 80 = 12."
    }
  },
  'PDA-E-038': {
    uz: {
      question_text: "Ma'lumotlar to'plami: 10, 15, 8, 22, 17. Tarqalish (range) qancha?",
      choice_a: "12",
      choice_b: "14",
      choice_c: "15",
      choice_d: "22",
      explanation: "Tarqalish = maksimum - minimum = 22 - 8 = 14."
    },
    ru: {
      question_text: "Набор данных: 10, 15, 8, 22, 17. Чему равен размах?",
      choice_a: "12",
      choice_b: "14",
      choice_c: "15",
      choice_d: "22",
      explanation: "Размах = максимум - минимум = 22 - 8 = 14."
    }
  },
  'PDA-E-039': {
    uz: {
      question_text: "Adolatli tanga bir marta tashlandi. Ra'y (heads) chiqish ehtimoli qanday?",
      choice_a: "1/4",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "Adolatli tanganing ikkita teng ehtimollik natijasi bor, shuning uchun P(ra'y) = 1/2."
    },
    ru: {
      question_text: "Честную монету подбросили один раз. Какова вероятность выпадения орла?",
      choice_a: "1/4",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "У честной монеты два равновероятных исхода, поэтому P(орёл) = 1/2."
    }
  },
  'PDA-E-040': {
    uz: {
      question_text: "Retsept 24 ta keks uchun 2 stakan un talab qiladi. 36 ta keks uchun necha stakan kerak?",
      choice_a: "2.5 stakan",
      choice_b: "3 stakan",
      choice_c: "3.5 stakan",
      choice_d: "4 stakan",
      explanation: "36/24 = 1.5 marta retsept. Un = 2 × 1.5 = 3 stakan."
    },
    ru: {
      question_text: "Рецепт для 24 печений требует 2 стакана муки. Сколько стаканов нужно для 36 печений?",
      choice_a: "2.5 стакана",
      choice_b: "3 стакана",
      choice_c: "3.5 стакана",
      choice_d: "4 стакана",
      explanation: "36/24 = 1.5 рецепта. Мука = 2 × 1.5 = 3 стакана."
    }
  },
  'PDA-E-041': {
    uz: {
      question_text: "Do'kon mahsulotlarni 50% qo'shimcha narxda sotadi. Agar mahsulot ulgurji narxi $20 bo'lsa, chakana narxi qancha?",
      choice_a: "$25",
      choice_b: "$30",
      choice_c: "$35",
      choice_d: "$40",
      explanation: "Qo'shimcha = $20 ning 50% = $10. Chakana = $20 + $10 = $30."
    },
    ru: {
      question_text: "Магазин добавляет 50% наценки. Если оптовая цена товара $20, какова розничная цена?",
      choice_a: "$25",
      choice_b: "$30",
      choice_c: "$35",
      choice_d: "$40",
      explanation: "Наценка = 50% от $20 = $10. Розничная цена = $20 + $10 = $30."
    }
  },
  'PDA-E-042': {
    uz: {
      question_text: "Qator: 2, 3, 3, 4, 5, 3, 6. Mo'da (moda) qancha?",
      choice_a: "2",
      choice_b: "3",
      choice_c: "4",
      choice_d: "5",
      explanation: "Mo'da eng ko'p takrorlanadigan qiymat. 3 uch marta uchraydi."
    },
    ru: {
      question_text: "Набор: 2, 3, 3, 4, 5, 3, 6. Чему равна мода?",
      choice_a: "2",
      choice_b: "3",
      choice_c: "4",
      choice_d: "5",
      explanation: "Мода — наиболее часто встречающееся значение. 3 встречается три раза."
    }
  },
  'PDA-E-043': {
    uz: {
      question_text: "Zar tashlandi. Juft son chiqish ehtimoli qanday?",
      choice_a: "1/6",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "Juft sonlar: 2, 4, 6. P(juft) = 3/6 = 1/2."
    },
    ru: {
      question_text: "Бросили кубик. Какова вероятность выпадения чётного числа?",
      choice_a: "1/6",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "Чётные числа: 2, 4, 6. P(чётное) = 3/6 = 1/2."
    }
  },
  'PDA-E-044': {
    uz: {
      question_text: "Avtomobil 3 soatda 150 milya bosadi. O'rtacha tezligi qancha?",
      choice_a: "45 mph",
      choice_b: "50 mph",
      choice_c: "55 mph",
      choice_d: "60 mph",
      explanation: "Tezlik = masofa/vaqt = 150/3 = 50 mph."
    },
    ru: {
      question_text: "Автомобиль проезжает 150 миль за 3 часа. Какова средняя скорость?",
      choice_a: "45 mph",
      choice_b: "50 mph",
      choice_c: "55 mph",
      choice_d: "60 mph",
      explanation: "Скорость = расстояние/время = 150/3 = 50 mph."
    }
  },
  'PDA-E-045': {
    uz: {
      question_text: "Son 50 dan 60 ga oshdi. Foiz o'sishi qancha?",
      choice_a: "10%",
      choice_b: "15%",
      choice_c: "20%",
      choice_d: "25%",
      explanation: "O'sish = 60 - 50 = 10. Foiz = 10/50 × 100% = 20%."
    },
    ru: {
      question_text: "Число увеличилось с 50 до 60. Каков процент увеличения?",
      choice_a: "10%",
      choice_b: "15%",
      choice_c: "20%",
      choice_d: "25%",
      explanation: "Прирост = 60 - 50 = 10. Процент = 10/50 × 100% = 20%."
    }
  },
  'PDA-E-046': {
    uz: {
      question_text: "8 ta tartibga solingan sondan iborat to'plamning medianasi 15. Bu haqida nima aytish mumkin?",
      choice_a: "4-son 15 ga teng",
      choice_b: "4- va 5-sonlarning o'rtachasi 15 ga teng",
      choice_c: "O'rtacha qiymat 15 ga teng",
      choice_d: "Sonlarning yarmi 15 ga teng",
      explanation: "Juft sondagi ma'lumotlar uchun median ikkita o'rta qiymatning o'rtachasi (4- va 5-qiymatlar)."
    },
    ru: {
      question_text: "Медиана 8 упорядоченных чисел равна 15. Что из этого следует?",
      choice_a: "4-е число равно 15",
      choice_b: "Среднее 4-го и 5-го чисел равно 15",
      choice_c: "Среднее арифметическое равно 15",
      choice_d: "Половина чисел равна 15",
      explanation: "Для чётного числа данных медиана — это среднее двух средних значений (4-го и 5-го)."
    }
  },
  'PDA-E-047': {
    uz: {
      question_text: "Agar P(A) = 0.4 va A va B o'zaro istisno bo'lsa, P(B) = 0.3 bo'lganda P(A yoki B) qancha?",
      choice_a: "0.12",
      choice_b: "0.5",
      choice_c: "0.7",
      choice_d: "1.0",
      explanation: "O'zaro istisno hodisalar uchun: P(A yoki B) = P(A) + P(B) = 0.4 + 0.3 = 0.7."
    },
    ru: {
      question_text: "Если P(A) = 0.4 и A и B взаимоисключающие, P(B) = 0.3, чему равно P(A или B)?",
      choice_a: "0.12",
      choice_b: "0.5",
      choice_c: "0.7",
      choice_d: "1.0",
      explanation: "Для взаимоисключающих событий: P(A или B) = P(A) + P(B) = 0.4 + 0.3 = 0.7."
    }
  },
  'PDA-E-048': {
    uz: {
      question_text: "Sinfda o'g'il va qiz bolalar nisbati 3:2. 12 ta o'g'il bola bo'lsa, qiz bolalar nechta?",
      choice_a: "6",
      choice_b: "8",
      choice_c: "10",
      choice_d: "18",
      explanation: "3:2 = 12:x. O'zaro ko'paytiring: 3x = 24, x = 8 qiz bola."
    },
    ru: {
      question_text: "Соотношение мальчиков и девочек в классе 3:2. Если 12 мальчиков, сколько девочек?",
      choice_a: "6",
      choice_b: "8",
      choice_c: "10",
      choice_d: "18",
      explanation: "3:2 = 12:x. Перемножьте крест-накрест: 3x = 24, x = 8 девочек."
    }
  },
  'PDA-E-049': {
    uz: {
      question_text: "3/4 ni foizda ifodalang.",
      choice_a: "25%",
      choice_b: "50%",
      choice_c: "75%",
      choice_d: "80%",
      explanation: "3/4 = 0.75 = 75%."
    },
    ru: {
      question_text: "Выразите 3/4 в процентах.",
      choice_a: "25%",
      choice_b: "50%",
      choice_c: "75%",
      choice_d: "80%",
      explanation: "3/4 = 0.75 = 75%."
    }
  },
  'PDA-E-050': {
    uz: {
      question_text: "Tarqalish diagrammasida nuqtalar chapdan o'ngga yuqoriga yo'nalgan. Bu nimani anglatadi?",
      choice_a: "Manfiy korrelyatsiya",
      choice_b: "Musbat korrelyatsiya",
      choice_c: "Korrelyatsiya yo'q",
      choice_d: "To'liq korrelyatsiya",
      explanation: "Yuqoriga yo'nalgan namuna musbat korrelyatsiyani ko'rsatadi: x oshganda, y ham oshadi."
    },
    ru: {
      question_text: "На диаграмме рассеяния точки идут вверх слева направо. Это означает:",
      choice_a: "Отрицательная корреляция",
      choice_b: "Положительная корреляция",
      choice_c: "Нет корреляции",
      choice_d: "Идеальная корреляция",
      explanation: "Восходящий паттерн указывает на положительную корреляцию: при увеличении x, y тоже растёт."
    }
  },
  'PDA-E-051': {
    uz: {
      question_text: "2.5 soatni minutga aylantiring.",
      choice_a: "120 daqiqa",
      choice_b: "130 daqiqa",
      choice_c: "150 daqiqa",
      choice_d: "180 daqiqa",
      explanation: "2.5 soat × 60 daqiqa/soat = 150 daqiqa."
    },
    ru: {
      question_text: "Переведите 2.5 часа в минуты.",
      choice_a: "120 минут",
      choice_b: "130 минут",
      choice_c: "150 минут",
      choice_d: "180 минут",
      explanation: "2.5 часа × 60 минут/час = 150 минут."
    }
  },
  'PDA-E-052': {
    uz: {
      question_text: "Talaba testda 50 baldan 45 ball oldi. Bu necha foiz?",
      choice_a: "85%",
      choice_b: "88%",
      choice_c: "90%",
      choice_d: "95%",
      explanation: "45/50 × 100% = 90%."
    },
    ru: {
      question_text: "Студент набрал 45 из 50 баллов на тесте. Какой это процент?",
      choice_a: "85%",
      choice_b: "88%",
      choice_c: "90%",
      choice_d: "95%",
      explanation: "45/50 × 100% = 90%."
    }
  },
  'PDA-E-053': {
    uz: {
      question_text: "Qaysi o'rta tendensiya ko'rsatkichi ekstremal qiymatlarga (outlier) ko'proq ta'sir qiladi?",
      choice_a: "O'rtacha",
      choice_b: "Median",
      choice_c: "Mo'da",
      choice_d: "Tarqalish",
      explanation: "O'rtacha barcha qiymatlardan, shu jumladan ekstremal qiymatlardan ta'sirlanadi; median esa bundan kamroq ta'sirlanadi."
    },
    ru: {
      question_text: "Какой показатель центральной тенденции наиболее подвержен влиянию выбросов?",
      choice_a: "Среднее",
      choice_b: "Медиана",
      choice_c: "Мода",
      choice_d: "Размах",
      explanation: "Среднее зависит от всех значений, включая выбросы; медиана более устойчива."
    }
  },
  'PDA-E-054': {
    uz: {
      question_text: "Adolatli zar tashlanganda 4 dan katta son chiqish ehtimoli qanday?",
      choice_a: "1/6",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "4 dan katta sonlar: 5, 6. P = 2/6 = 1/3."
    },
    ru: {
      question_text: "Какова вероятность выпадения числа больше 4 при броске честного кубика?",
      choice_a: "1/6",
      choice_b: "1/3",
      choice_c: "1/2",
      choice_d: "2/3",
      explanation: "Числа больше 4: 5, 6. P = 2/6 = 1/3."
    }
  },
  'PDA-E-055': {
    uz: {
      question_text: "3 ta ishchi ishni 6 soatda bajarsa, 6 ta ishchi qancha vaqtda bajaradi?",
      choice_a: "2 soat",
      choice_b: "3 soat",
      choice_c: "4 soat",
      choice_d: "12 soat",
      explanation: "Ish ishchilar soniga teskari proporsional. 6 ishchi = ikki baravar ko'p, demak vaqt ikki baravar kam = 3 soat."
    },
    ru: {
      question_text: "3 рабочих выполняют работу за 6 часов. За сколько часов справятся 6 рабочих?",
      choice_a: "2 часа",
      choice_b: "3 часа",
      choice_c: "4 часа",
      choice_d: "12 часов",
      explanation: "Работа обратно пропорциональна числу рабочих. 6 рабочих = вдвое больше, значит время вдвое меньше = 3 часа."
    }
  },
  'PDA-E-056': {
    uz: {
      question_text: "75 ning 100% i necha?",
      choice_a: "0.75",
      choice_b: "7.5",
      choice_c: "75",
      choice_d: "750",
      explanation: "Har qanday sonning 100% i o'z-o'ziga teng: 75 ning 100% = 75."
    },
    ru: {
      question_text: "Чему равно 100% от 75?",
      choice_a: "0.75",
      choice_b: "7.5",
      choice_c: "75",
      choice_d: "750",
      explanation: "100% от любого числа равно самому числу: 100% от 75 = 75."
    }
  },
  'PDA-E-057': {
    uz: {
      question_text: "Eng yaxshi mos chiziq tenglamasi y = 2x + 5. x = 3 bo'lganda bashorat qilingan y qiymati qancha?",
      choice_a: "8",
      choice_b: "10",
      choice_c: "11",
      choice_d: "13",
      explanation: "y = 2(3) + 5 = 6 + 5 = 11."
    },
    ru: {
      question_text: "Уравнение линии наилучшего соответствия y = 2x + 5. Каково предсказанное значение y при x = 3?",
      choice_a: "8",
      choice_b: "10",
      choice_c: "11",
      choice_d: "13",
      explanation: "y = 2(3) + 5 = 6 + 5 = 11."
    }
  },
  'PDA-E-058': {
    uz: {
      question_text: "Ma'lumotlar to'plami: 5, 5, 5, 5, 5. Standart og'ish qancha?",
      choice_a: "0",
      choice_b: "1",
      choice_c: "5",
      choice_d: "25",
      explanation: "Barcha qiymatlar bir xil, shuning uchun tarqalish yo'q. Standart og'ish = 0."
    },
    ru: {
      question_text: "Набор данных: 5, 5, 5, 5, 5. Чему равно стандартное отклонение?",
      choice_a: "0",
      choice_b: "1",
      choice_c: "5",
      choice_d: "25",
      explanation: "Все значения одинаковы, поэтому разброс отсутствует. Стандартное отклонение = 0."
    }
  },
  'PDA-E-059': {
    uz: {
      question_text: "Agar ikkita hodisa bir vaqtning o'zida sodir bo'lolmasa, ular qanday nomlanadi?",
      choice_a: "Mustaqil",
      choice_b: "Bog'liq",
      choice_c: "O'zaro istisno",
      choice_d: "To'ldiruvchi",
      explanation: "O'zaro istisno hodisalar bir vaqtning o'zida sodir bo'lolmaydi."
    },
    ru: {
      question_text: "Если два события не могут произойти одновременно, они называются:",
      choice_a: "Независимые",
      choice_b: "Зависимые",
      choice_c: "Взаимоисключающие",
      choice_d: "Дополнительные",
      explanation: "Взаимоисключающие события не могут произойти одновременно."
    }
  },
  'PDA-E-060': {
    uz: {
      question_text: "Printer 5 daqiqada 30 bet chop etadi. Minutiga necha bet?",
      choice_a: "5 bet/daq",
      choice_b: "6 bet/daq",
      choice_c: "8 bet/daq",
      choice_d: "10 bet/daq",
      explanation: "Tezlik = 30 bet / 5 daqiqa = daqiqasiga 6 bet."
    },
    ru: {
      question_text: "Принтер печатает 30 страниц за 5 минут. Сколько страниц в минуту?",
      choice_a: "5 стр/мин",
      choice_b: "6 стр/мин",
      choice_c: "8 стр/мин",
      choice_d: "10 стр/мин",
      explanation: "Скорость = 30 страниц / 5 минут = 6 страниц в минуту."
    }
  },
  'PDA-M-001': {
    uz: {
      question_text: "Do'kon kurtka narxini 20% oshirdi, so'ngra yangi narxni 20% kamaytirdi. Asl narx $100 bo'lsa, oxirgi narx qancha?",
      choice_a: "$96",
      choice_b: "$98",
      choice_c: "$100",
      choice_d: "$104",
      explanation: "20% oshirgandan keyin: $100 × 1.20 = $120. 20% kamaytirgandan keyin: $120 × 0.80 = $96."
    },
    ru: {
      question_text: "Магазин повысил цену куртки на 20%, затем снизил новую цену на 20%. Если исходная цена была $100, какова итоговая цена?",
      choice_a: "$96",
      choice_b: "$98",
      choice_c: "$100",
      choice_d: "$104",
      explanation: "После повышения на 20%: $100 × 1.20 = $120. После снижения на 20%: $120 × 0.80 = $96."
    }
  },
  'PDA-M-002': {
    uz: {
      question_text: "Test natijalari: 72, 78, 82, 85, 85, 88, 90, 92, 98. Mo'da (moda) qancha?",
      choice_a: "82",
      choice_b: "85",
      choice_c: "86",
      choice_d: "88",
      explanation: "Mo'da eng ko'p takrorlanadigan qiymat. 85 ikki marta; qolganlar bir marta uchraydi. Mo'da = 85."
    },
    ru: {
      question_text: "Результаты теста: 72, 78, 82, 85, 85, 88, 90, 92, 98. Чему равна мода?",
      choice_a: "82",
      choice_b: "85",
      choice_c: "86",
      choice_d: "88",
      explanation: "Мода — наиболее частое значение. 85 встречается дважды; остальные — по одному разу. Мода = 85."
    }
  },
  'PDA-M-003': {
    uz: {
      question_text: "Tarqalish diagrammasi kuchli manfiy korrelyatsiyani ko'rsatadi. Qaysi fikr to'g'ri?",
      choice_a: "x oshganda, y ham oshadi",
      choice_b: "x oshganda, y kamayadi",
      choice_c: "x va y o'zaro bog'liq emas",
      choice_d: "y har doim x dan katta",
      explanation: "Manfiy korrelyatsiya deganda bir o'zgaruvchi oshganda, ikkinchisi kamayadi."
    },
    ru: {
      question_text: "Диаграмма рассеяния показывает сильную отрицательную корреляцию. Какое утверждение верно?",
      choice_a: "При увеличении x, y тоже растёт",
      choice_b: "При увеличении x, y убывает",
      choice_c: "x и y не связаны",
      choice_d: "y всегда больше x",
      explanation: "Отрицательная корреляция означает: при увеличении одной переменной другая уменьшается."
    }
  },
  'PDA-M-004': {
    uz: {
      question_text: "Qopda 3 ta qizil, 4 ta ko'k va 5 ta yashil marmur bor. Yashil marmur OLMASLIK ehtimoli qanday?",
      choice_a: "5/12",
      choice_b: "7/12",
      choice_c: "3/4",
      choice_d: "2/3",
      explanation: "Jami = 12. Yashil emas = 3 + 4 = 7. P(yashil emas) = 7/12."
    },
    ru: {
      question_text: "В мешке 3 красных, 4 синих и 5 зелёных шариков. Какова вероятность НЕ вытащить зелёный шарик?",
      choice_a: "5/12",
      choice_b: "7/12",
      choice_c: "3/4",
      choice_d: "2/3",
      explanation: "Всего = 12. Не зелёных = 3 + 4 = 7. P(не зелёный) = 7/12."
    }
  },
  'PDA-M-005': {
    uz: {
      question_text: "500 ta saylovchi so'rovida ±3% xatolik bilan 52% nomzodni qo'llaydi. Barcha saylovchilar orasida qo'llovchilar foizi uchun ehtimoliy diapazon qanday?",
      choice_a: "49% dan 55% gacha",
      choice_b: "50% dan 54% gacha",
      choice_c: "52% dan 58% gacha",
      choice_d: "46% dan 58% gacha",
      explanation: "52% ± 3% = 49% dan 55% gacha diapazon beradi."
    },
    ru: {
      question_text: "Опрос 500 избирателей показывает 52% поддержки с погрешностью ±3%. Каков вероятный диапазон для всех избирателей?",
      choice_a: "от 49% до 55%",
      choice_b: "от 50% до 54%",
      choice_c: "от 52% до 58%",
      choice_d: "от 46% до 58%",
      explanation: "52% ± 3% даёт диапазон от 49% до 55%."
    }
  },
  'PDA-M-006': {
    uz: {
      question_text: "Avtomobil 240 milya uchun 8 gallon benzin sarflaydi. Bu tezlikda 420 milya uchun necha gallon kerak?",
      choice_a: "12",
      choice_b: "14",
      choice_c: "16",
      choice_d: "18",
      explanation: "Tezlik = 240/8 = 30 milya/gallon. Gallon = 420/30 = 14."
    },
    ru: {
      question_text: "Автомобиль расходует 8 галлонов бензина на 240 миль. Сколько галлонов нужно на 420 миль?",
      choice_a: "12",
      choice_b: "14",
      choice_c: "16",
      choice_d: "18",
      explanation: "Расход = 240/8 = 30 миль/галлон. Галлонов = 420/30 = 14."
    }
  },
  'PDA-M-007': {
    uz: {
      question_text: "Aholi 800 dan 1000 ga oshdi. Foiz o'sishi qancha?",
      choice_a: "20%",
      choice_b: "25%",
      choice_c: "80%",
      choice_d: "125%",
      explanation: "O'sish = 1000 - 800 = 200. Foiz o'sishi = (200/800) × 100 = 25%."
    },
    ru: {
      question_text: "Население выросло с 800 до 1000. Каков процент прироста?",
      choice_a: "20%",
      choice_b: "25%",
      choice_c: "80%",
      choice_d: "125%",
      explanation: "Прирост = 1000 - 800 = 200. Процент прироста = (200/800) × 100 = 25%."
    }
  },
  'PDA-M-008': {
    uz: {
      question_text: "Ma'lumotlar to'plamining tarqalishi 24 va minimal qiymati 17. Maksimal qiymat qancha?",
      choice_a: "7",
      choice_b: "31",
      choice_c: "41",
      choice_d: "48",
      explanation: "Tarqalish = maks - min. Demak 24 = maks - 17 → maks = 41."
    },
    ru: {
      question_text: "Размах набора данных равен 24, минимальное значение — 17. Чему равно максимальное значение?",
      choice_a: "7",
      choice_b: "31",
      choice_c: "41",
      choice_d: "48",
      explanation: "Размах = макс - мин. Значит 24 = макс - 17 → макс = 41."
    }
  },
  'PDA-M-009': {
    uz: {
      question_text: "Tadqiqot: nonushta yeydiganlar testda yuqori ball oladi. Bu eng yaxshi qanday tavsiflanadi?",
      choice_a: "Nazorat ostidagi tajriba",
      choice_b: "Kuzatuv tadqiqoti",
      choice_c: "Nonushta yuqori ballarga sabab bo'ladi degan isboti",
      choice_d: "Tasodifiy tanlov",
      explanation: "Tadqiqotchilar mavjud xatti-harakatni kuzatganlar, davolashlarni tayinlamaganlar — bu kuzatuv tadqiqoti. Korrelyatsiyani ko'rsatadi, sabab-oqibat emas."
    },
    ru: {
      question_text: "Исследование показывает: студенты, завтракающие, получают более высокие баллы. Как это лучше всего описать?",
      choice_a: "Контролируемый эксперимент",
      choice_b: "Наблюдательное исследование",
      choice_c: "Доказательство того, что завтрак вызывает более высокие баллы",
      choice_d: "Случайная выборка",
      explanation: "Исследователи наблюдали существующее поведение без назначения лечения — это наблюдательное исследование. Оно показывает корреляцию, а не причинно-следственную связь."
    }
  },
  'PDA-M-010': {
    uz: {
      question_text: "Ikki zar tashlandi. Yig'indi 7 bo'lish ehtimoli qanday?",
      choice_a: "1/12",
      choice_b: "1/6",
      choice_c: "1/4",
      choice_d: "7/36",
      explanation: "Yig'indi 7 bo'lgan hollar: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ta. Jami = 36. P = 6/36 = 1/6."
    },
    ru: {
      question_text: "Бросили два кубика. Какова вероятность суммы 7?",
      choice_a: "1/12",
      choice_b: "1/6",
      choice_c: "1/4",
      choice_d: "7/36",
      explanation: "Суммы 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 исходов. Всего = 36. P = 6/36 = 1/6."
    }
  },
  'PDA-M-011': {
    uz: {
      question_text: "Poyezd 240 km ni 3 soatda bosadi. Avtomobil ham shu masofani 4 soatda bosadi. Poyezd avtomobildan qancha tez (km/s)?",
      choice_a: "10 km/s",
      choice_b: "20 km/s",
      choice_c: "30 km/s",
      choice_d: "60 km/s",
      explanation: "Poyezd tezligi = 240/3 = 80 km/s. Avtomobil tezligi = 240/4 = 60 km/s. Farq = 20 km/s."
    },
    ru: {
      question_text: "Поезд проезжает 240 км за 3 часа. Автомобиль преодолевает то же расстояние за 4 часа. Насколько быстрее поезд (км/ч)?",
      choice_a: "10 км/ч",
      choice_b: "20 км/ч",
      choice_c: "30 км/ч",
      choice_d: "60 км/ч",
      explanation: "Скорость поезда = 240/3 = 80 км/ч. Скорость машины = 240/4 = 60 км/ч. Разница = 20 км/ч."
    }
  },
  'PDA-M-012': {
    uz: {
      question_text: "Aholi 5000 dan 4500 ga kamaydi. Foiz kamayishi qancha?",
      choice_a: "5%",
      choice_b: "10%",
      choice_c: "11%",
      choice_d: "15%",
      explanation: "Kamaytish = 500. Foiz = (500/5000) × 100 = 10%."
    },
    ru: {
      question_text: "Население уменьшилось с 5000 до 4500. Каков процент снижения?",
      choice_a: "5%",
      choice_b: "10%",
      choice_c: "11%",
      choice_d: "15%",
      explanation: "Уменьшение = 500. Процент = (500/5000) × 100 = 10%."
    }
  },
  'PDA-M-013': {
    uz: {
      question_text: "Ma'lumotlar to'plamining o'rtacha qiymati 20 va 10 ta element bor. Yangi 30 qiymati qo'shilsa, yangi o'rtacha qancha?",
      choice_a: "20",
      choice_b: "21",
      choice_c: "22",
      choice_d: "25",
      explanation: "Asl yig'indi = 20 × 10 = 200. Yangi yig'indi = 200 + 30 = 230. Yangi o'rtacha = 230/11 ≈ 20.91 ≈ 21."
    },
    ru: {
      question_text: "Набор данных имеет среднее 20 и 10 значений. Если добавить новое значение 30, каково новое среднее?",
      choice_a: "20",
      choice_b: "21",
      choice_c: "22",
      choice_d: "25",
      explanation: "Исходная сумма = 20 × 10 = 200. Новая сумма = 200 + 30 = 230. Новое среднее = 230/11 ≈ 20.91 ≈ 21."
    }
  },
  'PDA-M-014': {
    uz: {
      question_text: "Eng yaxshi mos chiziq tenglamasi y = 50 - 2x. x 10 birlikka oshsa, y bilan nima bo'ladi?",
      choice_a: "20 ga oshadi",
      choice_b: "20 ga kamayadi",
      choice_c: "10 ga oshadi",
      choice_d: "10 ga kamayadi",
      explanation: "Qiyalik -2, ya'ni x 1 birlikka oshganda y 2 ga kamayadi. 10 birlik uchun y 20 ga kamayadi."
    },
    ru: {
      question_text: "Уравнение линии наилучшего соответствия y = 50 - 2x. Что произойдёт с y, если x увеличится на 10?",
      choice_a: "Увеличится на 20",
      choice_b: "Уменьшится на 20",
      choice_c: "Увеличится на 10",
      choice_d: "Уменьшится на 10",
      explanation: "Наклон равен -2, значит при каждом увеличении x на 1, y уменьшается на 2. На 10 единиц y уменьшится на 20."
    }
  },
  'PDA-M-015': {
    uz: {
      question_text: "Standart dastadan karta olinadi. Bu karta rasm karta (J, Q, K) bo'lish ehtimoli qanday?",
      choice_a: "1/13",
      choice_b: "3/13",
      choice_c: "1/4",
      choice_d: "3/52",
      explanation: "Rasm kartalar 12 ta (4 ta mast × 3 ta). P = 12/52 = 3/13."
    },
    ru: {
      question_text: "Из стандартной колоды вытягивают карту. Какова вероятность, что это картинка (Дж, Д, К)?",
      choice_a: "1/13",
      choice_b: "3/13",
      choice_c: "1/4",
      choice_d: "3/52",
      explanation: "Картинок 12 (3 на масть × 4 масти). P = 12/52 = 3/13."
    }
  },
  'PDA-M-016': {
    uz: {
      question_text: "400 kishilik so'rov ±5% xatolik bilan o'tkazildi. 200 kishi taklifni qo'lladi. Ishonch oralig'i qanday?",
      choice_a: "45% dan 55% gacha",
      choice_b: "48% dan 52% gacha",
      choice_c: "50% dan 55% gacha",
      choice_d: "40% dan 60% gacha",
      explanation: "Tanlov nisbati = 200/400 = 50%. Oraliq = 50% ± 5% = 45% dan 55% gacha."
    },
    ru: {
      question_text: "Опрос 400 человек с погрешностью ±5%. 200 поддержали предложение. Каков доверительный интервал?",
      choice_a: "от 45% до 55%",
      choice_b: "от 48% до 52%",
      choice_c: "от 50% до 55%",
      choice_d: "от 40% до 60%",
      explanation: "Доля выборки = 200/400 = 50%. Интервал = 50% ± 5% = от 45% до 55%."
    }
  },
  'PDA-M-017': {
    uz: {
      question_text: "Kran tankni 4 soatda to'ldiradi. Quvur uni 6 soatda bo'shatadi. Ikkalasi ham ochiq bo'lsa, tank qancha vaqtda to'ladi?",
      choice_a: "10 soat",
      choice_b: "12 soat",
      choice_c: "24 soat",
      choice_d: "2.4 soat",
      explanation: "Kirim tezligi = 1/4 tank/soat, chiqim = 1/6 tank/soat. Sof tezlik = 1/4 - 1/6 = 1/12 tank/soat. Vaqt = 12 soat."
    },
    ru: {
      question_text: "Кран наполняет резервуар за 4 часа. Слив опустошает за 6 часов. Если оба открыты, за сколько часов наполнится резервуар?",
      choice_a: "10 часов",
      choice_b: "12 часов",
      choice_c: "24 часа",
      choice_d: "2.4 часа",
      explanation: "Скорость заполнения = 1/4 резервуара/ч, скорость опустошения = 1/6. Чистая скорость = 1/4 - 1/6 = 1/12. Время = 12 часов."
    }
  },
  'PDA-M-018': {
    uz: {
      question_text: "Qaysi tanlov usuli ko'proq noto'g'rilikka olib kelishi mumkin?",
      choice_a: "To'liq ro'yxatdan tasodifiy tanlash",
      choice_b: "Yosh guruhlari bo'yicha qatlamli tanlov",
      choice_c: "Faqat savdo markazidagi odamlarni so'rash",
      choice_d: "Har 10-chi kishini sistemali tanlash",
      explanation: "Faqat savdo markazida so'rov o'tkazish tanlov noto'g'riligini keltirib chiqaradi, chunki u yerga bormaydiganlar chetlab o'tiladi."
    },
    ru: {
      question_text: "Какой метод выборки с наибольшей вероятностью приведёт к смещению?",
      choice_a: "Случайный отбор из полного списка",
      choice_b: "Стратифицированная выборка по возрастным группам",
      choice_c: "Опрос только людей в торговом центре",
      choice_d: "Систематическая выборка каждого 10-го человека",
      explanation: "Опрос только в торговом центре вводит смещение выборки, так как исключает тех, кто туда не ходит."
    }
  },
  'PDA-M-019': {
    uz: {
      question_text: "Mahsulot narxi 50% oshdi, keyin yana 20% oshdi. Aslidan umumiy foiz o'sishi qancha?",
      choice_a: "70%",
      choice_b: "75%",
      choice_c: "80%",
      choice_d: "90%",
      explanation: "50% oshirgandan keyin: 1.50. 20% oshirgandan keyin: 1.50 × 1.20 = 1.80. Umumiy o'sish = 80%."
    },
    ru: {
      question_text: "Цена товара выросла на 50%, затем ещё на 20%. Каков общий процент прироста от начальной цены?",
      choice_a: "70%",
      choice_b: "75%",
      choice_c: "80%",
      choice_d: "90%",
      explanation: "После +50%: 1.50. После +20%: 1.50 × 1.20 = 1.80. Общий прирост = 80%."
    }
  },
  'PDA-M-020': {
    uz: {
      question_text: "6 ta sonning o'rtachasi 15. Bir son olib tashlansa yangi o'rtacha 16 bo'ladi. Olib tashlangan son qancha?",
      choice_a: "8",
      choice_b: "10",
      choice_c: "12",
      choice_d: "14",
      explanation: "Asl yig'indi = 6 × 15 = 90. Yangi yig'indi = 5 × 16 = 80. Olib tashlangan son = 90 - 80 = 10."
    },
    ru: {
      question_text: "Среднее 6 чисел равно 15. После удаления одного числа новое среднее стало 16. Какое число удалили?",
      choice_a: "8",
      choice_b: "10",
      choice_c: "12",
      choice_d: "14",
      explanation: "Исходная сумма = 6 × 15 = 90. Новая сумма = 5 × 16 = 80. Удалённое число = 90 - 80 = 10."
    }
  },
  'PDA-M-021': {
    uz: {
      question_text: "Tanga 3 marta tashlandi. Aynan 2 ta ra'y chiqish ehtimoli qanday?",
      choice_a: "1/4",
      choice_b: "3/8",
      choice_c: "1/2",
      choice_d: "5/8",
      explanation: "2 ta ra'yli holatlar: RRY, RYR, YRR = 3. Jami holatlar = 8. P = 3/8."
    },
    ru: {
      question_text: "Монету подбросили 3 раза. Какова вероятность выпадения ровно 2 орлов?",
      choice_a: "1/4",
      choice_b: "3/8",
      choice_c: "1/2",
      choice_d: "5/8",
      explanation: "Варианты с 2 орлами: ООР, ОРО, РОО = 3. Всего вариантов = 8. P = 3/8."
    }
  },
  'PDA-M-022': {
    uz: {
      question_text: "O'qish soatlari va test ballari orasidagi korrelyatsiya koeffitsienti r = 0.8. Bu nimani anglatadi?",
      choice_a: "Talabalarning 80% o'tdi",
      choice_b: "Kuchli musbat bog'liqlik",
      choice_c: "Kuchli manfiy bog'liqlik",
      choice_d: "Bog'liqlik yo'q",
      explanation: "r = 0.8 kuchli musbat korrelyatsiyani ko'rsatadi (1 ga yaqin)."
    },
    ru: {
      question_text: "Коэффициент корреляции между часами занятий и баллами теста r = 0.8. Что это означает?",
      choice_a: "80% студентов сдали",
      choice_b: "Сильная положительная связь",
      choice_c: "Сильная отрицательная связь",
      choice_d: "Нет связи",
      explanation: "r = 0.8 указывает на сильную положительную корреляцию (близко к 1)."
    }
  },
  'PDA-M-023': {
    uz: {
      question_text: "Eritma 30% kislota. 10 litrga qancha toza suv qo'shilsa, 20% kislotali bo'ladi?",
      choice_a: "2 litr",
      choice_b: "3 litr",
      choice_c: "4 litr",
      choice_d: "5 litr",
      explanation: "Kislota miqdori = 3 litr. Suv qo'shilgandan keyin: 3/(10 + x) = 0.20 → 3 = 2 + 0.2x → x = 5 litr."
    },
    ru: {
      question_text: "Раствор содержит 30% кислоты. Сколько чистой воды нужно добавить к 10 литрам, чтобы получить 20% раствор?",
      choice_a: "2 литра",
      choice_b: "3 литра",
      choice_c: "4 литра",
      choice_d: "5 литров",
      explanation: "Количество кислоты = 3 литра. После добавления воды: 3/(10 + x) = 0.20 → 3 = 2 + 0.2x → x = 5 литров."
    }
  },
  'PDA-M-024': {
    uz: {
      question_text: "So'rovdagi xatolik chegarasini kamaytirishning eng samarali usuli qaysi?",
      choice_a: "Kamroq savol berish",
      choice_b: "Tanlov hajmini oshirish",
      choice_c: "Boshqa joyda so'rov o'tkazish",
      choice_d: "Savol so'zlarini o'zgartirish",
      explanation: "Xatolik chegarasi tanlov hajmining kvadrat ildiziga teskari proporsional. Katta tanlov kichikroq xatolikka olib keladi."
    },
    ru: {
      question_text: "Что лучше всего уменьшит погрешность выборки в опросе?",
      choice_a: "Задавать меньше вопросов",
      choice_b: "Увеличить размер выборки",
      choice_c: "Провести опрос в другом месте",
      choice_d: "Изменить формулировку вопросов",
      explanation: "Погрешность обратно пропорциональна корню квадратному из размера выборки. Бо́льшая выборка даёт меньшую погрешность."
    }
  },
  'PDA-M-025': {
    uz: {
      question_text: "Qaysi o'rta tendensiya ko'rsatkichi ekstremal qiymatlarga ko'proq ta'sir qiladi?",
      choice_a: "O'rtacha",
      choice_b: "Median",
      choice_c: "Mo'da",
      choice_d: "Hammasi teng ta'sirlanadi",
      explanation: "O'rtacha hisoblashda barcha qiymatlar ishtirok etadi, shuning uchun ekstremal qiymatlarga eng ko'p ta'sirlanadi."
    },
    ru: {
      question_text: "Какой показатель центральной тенденции наиболее чувствителен к выбросам?",
      choice_a: "Среднее",
      choice_b: "Медиана",
      choice_c: "Мода",
      choice_d: "Все одинаково",
      explanation: "Среднее использует все значения в вычислении, поэтому оно наиболее чувствительно к экстремальным значениям (выбросам)."
    }
  },
  'PDA-M-026': {
    uz: {
      question_text: "Ko'ylak 40% chegirma bilan $36 ga sotildi. Asl narx qancha edi?",
      choice_a: "$50",
      choice_b: "$54",
      choice_c: "$60",
      choice_d: "$72",
      explanation: "Asl narxning 60% = $36. Asl narx = 36/0.60 = $60."
    },
    ru: {
      question_text: "Рубашка продаётся со скидкой 40% за $36. Какова была первоначальная цена?",
      choice_a: "$50",
      choice_b: "$54",
      choice_c: "$60",
      choice_d: "$72",
      explanation: "60% от исходной цены = $36. Исходная цена = 36/0.60 = $60."
    }
  },
  'PDA-M-027': {
    uz: {
      question_text: "Tadqiqotda ba'zi o'simliklar tasodifiy ravishda o'g'it olib, qolganlari olmaydi. Bu qaysi turdagi tadqiqot?",
      choice_a: "Kuzatuv tadqiqoti",
      choice_b: "Tasodifiy tajriba",
      choice_c: "Ro'yxatga olish",
      choice_d: "So'rov",
      explanation: "Subyektlarga tasodifiy davolashlarni tayinlash — bu tasodifiy tajriba."
    },
    ru: {
      question_text: "В исследовании некоторые растения случайно получают удобрение, другие — нет. Это пример:",
      choice_a: "Наблюдательного исследования",
      choice_b: "Рандомизированного эксперимента",
      choice_c: "Переписи",
      choice_d: "Опроса",
      explanation: "Случайное назначение воздействий субъектам — это рандомизированный эксперимент."
    }
  },
  'PDA-M-028': {
    uz: {
      question_text: "P(A) = 0.4 va P(B) = 0.3 bo'lib, A va B mustaqil bo'lsa, P(A va B) qancha?",
      choice_a: "0.10",
      choice_b: "0.12",
      choice_c: "0.35",
      choice_d: "0.70",
      explanation: "Mustaqil hodisalar uchun: P(A va B) = P(A) × P(B) = 0.4 × 0.3 = 0.12."
    },
    ru: {
      question_text: "P(A) = 0.4 и P(B) = 0.3, A и B независимы. Чему равно P(A и B)?",
      choice_a: "0.10",
      choice_b: "0.12",
      choice_c: "0.35",
      choice_d: "0.70",
      explanation: "Для независимых событий: P(A и B) = P(A) × P(B) = 0.4 × 0.3 = 0.12."
    }
  },
  'PDA-M-029': {
    uz: {
      question_text: "C = 25 + 0.15m tenglamasi ijaraga olingan avtomobil narxini m (bosib o'tilgan milya) orqali hisoblaydi. 25 nimani ifodalaydi?",
      choice_a: "Milya boshiga narx",
      choice_b: "Asosiy ijara to'lovi",
      choice_c: "Jami milya",
      choice_d: "Maksimal narx",
      explanation: "25 — m = 0 bo'lgandagi narx, ya'ni asosiy ijara to'lovi."
    },
    ru: {
      question_text: "C = 25 + 0.15m моделирует стоимость аренды автомобиля, где m — пройденные мили. Что представляет 25?",
      choice_a: "Стоимость за милю",
      choice_b: "Базовая арендная плата",
      choice_c: "Всего миль",
      choice_d: "Максимальная стоимость",
      explanation: "25 — стоимость при m = 0, то есть базовая арендная плата."
    }
  },
  'PDA-M-030': {
    uz: {
      question_text: "8 porsiya uchun retsept 3 stakan guruch talab qiladi. 12 porsiya uchun necha stakan kerak?",
      choice_a: "3.5",
      choice_b: "4",
      choice_c: "4.5",
      choice_d: "5",
      explanation: "3/8 = x/12 → 8x = 36 → x = 4.5 stakan."
    },
    ru: {
      question_text: "Рецепт на 8 порций требует 3 стакана риса. Сколько стаканов нужно для 12 порций?",
      choice_a: "3.5",
      choice_b: "4",
      choice_c: "4.5",
      choice_d: "5",
      explanation: "3/8 = x/12 → 8x = 36 → x = 4.5 стакана."
    }
  },
  'PDA-M-031': {
    uz: {
      question_text: "Avtomobil 240 milya uchun 8 gallon benzin sarflaydi. Bu tezlikda 360 milya uchun necha gallon kerak?",
      choice_a: "10 gallon",
      choice_b: "12 gallon",
      choice_c: "14 gallon",
      choice_d: "16 gallon",
      explanation: "Tezlik = 240/8 = 30 milya/gallon. Gallon = 360/30 = 12."
    },
    ru: {
      question_text: "Автомобиль расходует 8 галлонов на 240 миль. Сколько галлонов нужно на 360 миль?",
      choice_a: "10 галлонов",
      choice_b: "12 галлонов",
      choice_c: "14 галлонов",
      choice_d: "16 галлонов",
      explanation: "Расход = 240/8 = 30 миль/галлон. Галлонов = 360/30 = 12."
    }
  },
  'PDA-M-032': {
    uz: {
      question_text: "Narx 20% oshdi, so'ngra 20% kamaydi. Asl narxdan sof o'zgarish qancha?",
      choice_a: "0%",
      choice_b: "-2%",
      choice_c: "-4%",
      choice_d: "4%",
      explanation: "Asl narx = 100. +20% dan keyin: 120. -20% dan keyin: 120 × 0.8 = 96. Sof o'zgarish = -4%."
    },
    ru: {
      question_text: "Цена выросла на 20%, затем упала на 20%. Каково суммарное изменение от исходной?",
      choice_a: "0%",
      choice_b: "-2%",
      choice_c: "-4%",
      choice_d: "4%",
      explanation: "Исходная = 100. После +20%: 120. После -20%: 120 × 0.8 = 96. Суммарное изменение = -4%."
    }
  },
  'PDA-M-033': {
    uz: {
      question_text: "Ma'lumotlar to'plamining o'rtachasi 12 va yig'indisi 72. To'plamdagi qiymatlar nechta?",
      choice_a: "4",
      choice_b: "5",
      choice_c: "6",
      choice_d: "8",
      explanation: "O'rtacha = yig'indi/soni, demak soni = yig'indi/o'rtacha = 72/12 = 6."
    },
    ru: {
      question_text: "Среднее набора данных равно 12, а сумма — 72. Сколько значений в наборе?",
      choice_a: "4",
      choice_b: "5",
      choice_c: "6",
      choice_d: "8",
      explanation: "Среднее = сумма/количество, значит количество = сумма/среднее = 72/12 = 6."
    }
  },
  'PDA-M-034': {
    uz: {
      question_text: "Ikki zar tashlandi. Yig'indi 7 bo'lish ehtimoli qanday?",
      choice_a: "1/12",
      choice_b: "1/6",
      choice_c: "5/36",
      choice_d: "7/36",
      explanation: "Yig'indi 7 bo'lgan holatlar: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ta. P = 6/36 = 1/6."
    },
    ru: {
      question_text: "Бросили два кубика. Какова вероятность суммы 7?",
      choice_a: "1/12",
      choice_b: "1/6",
      choice_c: "5/36",
      choice_d: "7/36",
      explanation: "Суммы 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 вариантов. P = 6/36 = 1/6."
    }
  },
  'PDA-M-035': {
    uz: {
      question_text: "Chiziqli model y = 3x + 10 ni bashorat qiladi. x = 5 bo'lganda haqiqiy qiymat 23. Qoldiq (residual) qancha?",
      choice_a: "-2",
      choice_b: "2",
      choice_c: "-3",
      choice_d: "3",
      explanation: "Bashorat: y = 3(5) + 10 = 25. Qoldiq = haqiqiy - bashorat = 23 - 25 = -2."
    },
    ru: {
      question_text: "Линейная модель предсказывает y = 3x + 10. При x = 5 фактическое значение равно 23. Чему равен остаток (residual)?",
      choice_a: "-2",
      choice_b: "2",
      choice_c: "-3",
      choice_d: "3",
      explanation: "Предсказание: y = 3(5) + 10 = 25. Остаток = фактическое - предсказанное = 23 - 25 = -2."
    }
  },
  'PDA-M-036': {
    uz: {
      question_text: "A mashinasi 4 soatda 100 detal ishlab chiqaradi. B mashinasi 5 soatda 150 detal ishlab chiqaradi. Qaysi biri tezroq?",
      choice_a: "A mashinasi",
      choice_b: "B mashinasi",
      choice_c: "Bir xil tezlikda",
      choice_d: "Aniqlab bo'lmaydi",
      explanation: "A: 100/4 = 25 detal/soat. B: 150/5 = 30 detal/soat. B tezroq."
    },
    ru: {
      question_text: "Машина A производит 100 деталей за 4 часа. Машина B — 150 деталей за 5 часов. Какая быстрее?",
      choice_a: "Машина A",
      choice_b: "Машина B",
      choice_c: "Одинаково",
      choice_d: "Невозможно определить",
      explanation: "A: 100/4 = 25 дет/ч. B: 150/5 = 30 дет/ч. B быстрее."
    }
  },
  'PDA-M-037': {
    uz: {
      question_text: "Sonning 30% i 45 ga teng bo'lsa, son necha?",
      choice_a: "100",
      choice_b: "135",
      choice_c: "150",
      choice_d: "180",
      explanation: "0.30 × x = 45, demak x = 45/0.30 = 150."
    },
    ru: {
      question_text: "Если 30% числа равно 45, чему равно само число?",
      choice_a: "100",
      choice_b: "135",
      choice_c: "150",
      choice_d: "180",
      explanation: "0.30 × x = 45, значит x = 45/0.30 = 150."
    }
  },
  'PDA-M-038': {
    uz: {
      question_text: "Qator: 12, 5, 18, 3, 9, 14. Mediana necha?",
      choice_a: "9",
      choice_b: "10",
      choice_c: "10.5",
      choice_d: "11",
      explanation: "Tartibga solingan: 3, 5, 9, 12, 14, 18. Median = (9 + 12)/2 = 10.5."
    },
    ru: {
      question_text: "Набор: 12, 5, 18, 3, 9, 14. Чему равна медиана?",
      choice_a: "9",
      choice_b: "10",
      choice_c: "10.5",
      choice_d: "11",
      explanation: "Упорядоченный: 3, 5, 9, 12, 14, 18. Медиана = (9 + 12)/2 = 10.5."
    }
  },
  'PDA-M-039': {
    uz: {
      question_text: "Standart dastadan karta olinadi. P(qizil yoki rasm karta) qancha?",
      choice_a: "8/13",
      choice_b: "7/13",
      choice_c: "6/13",
      choice_d: "5/13",
      explanation: "P(qizil) = 26/52, P(rasm) = 12/52, P(qizil va rasm) = 6/52. P = 26 + 12 - 6 = 32/52 = 8/13."
    },
    ru: {
      question_text: "Из стандартной колоды вытягивают карту. Чему равно P(красная или картинка)?",
      choice_a: "8/13",
      choice_b: "7/13",
      choice_c: "6/13",
      choice_d: "5/13",
      explanation: "P(красная) = 26/52, P(картинка) = 12/52, P(красная и картинка) = 6/52. P = 26 + 12 - 6 = 32/52 = 8/13."
    }
  },
  'PDA-M-040': {
    uz: {
      question_text: "So'rov ±3% xatolik bilan 55% qo'llov ko'rsatdi. Ishonch oralig'i qanday?",
      choice_a: "52% dan 55% gacha",
      choice_b: "52% dan 58% gacha",
      choice_c: "55% dan 58% gacha",
      choice_d: "53% dan 57% gacha",
      explanation: "Ishonch oralig'i = 55% ± 3% = 52% dan 58% gacha."
    },
    ru: {
      question_text: "Опрос показывает 55% поддержки с погрешностью ±3%. Каков доверительный интервал?",
      choice_a: "от 52% до 55%",
      choice_b: "от 52% до 58%",
      choice_c: "от 55% до 58%",
      choice_d: "от 53% до 57%",
      explanation: "Доверительный интервал = 55% ± 3% = от 52% до 58%."
    }
  },
  'PDA-M-041': {
    uz: {
      question_text: "Eritma 40% kislota. 250 mL eritmada necha mL toza kislota bor?",
      choice_a: "80 mL",
      choice_b: "100 mL",
      choice_c: "120 mL",
      choice_d: "150 mL",
      explanation: "Kislota = 40% × 250 = 0.40 × 250 = 100 mL."
    },
    ru: {
      question_text: "Раствор содержит 40% кислоты. Сколько мл чистой кислоты в 250 мл раствора?",
      choice_a: "80 мл",
      choice_b: "100 мл",
      choice_c: "120 мл",
      choice_d: "150 мл",
      explanation: "Кислота = 40% × 250 = 0.40 × 250 = 100 мл."
    }
  },
  'PDA-M-042': {
    uz: {
      question_text: "Aksiya bir kun 10% ko'tarildi va keyingi kun 10% tushdi. $100 dan boshlansa, yakuniy narx qancha?",
      choice_a: "$99",
      choice_b: "$100",
      choice_c: "$101",
      choice_d: "$110",
      explanation: "+10% dan keyin: $110. -10% dan keyin: $110 × 0.9 = $99."
    },
    ru: {
      question_text: "Акция выросла на 10% один день и упала на 10% на следующий. Начиная со $100, какова итоговая цена?",
      choice_a: "$99",
      choice_b: "$100",
      choice_c: "$101",
      choice_d: "$110",
      explanation: "После +10%: $110. После -10%: $110 × 0.9 = $99."
    }
  },
  'PDA-M-043': {
    uz: {
      question_text: "Ma'lumotlar to'plamiga 20 qiymati qo'shilsa o'rtacha oshadi. Asl o'rtacha qancha edi?",
      choice_a: "20 dan katta",
      choice_b: "20 dan kichik",
      choice_c: "20 ga teng",
      choice_d: "Aniqlab bo'lmaydi",
      explanation: "O'rtachadan katta qiymat qo'shilsa o'rtacha oshadi. Demak asl o'rtacha < 20."
    },
    ru: {
      question_text: "Если добавить значение 20 к набору данных, среднее увеличится. Каким было исходное среднее?",
      choice_a: "Больше 20",
      choice_b: "Меньше 20",
      choice_c: "Равно 20",
      choice_d: "Невозможно определить",
      explanation: "Добавление значения выше среднего увеличивает среднее. Значит исходное среднее < 20."
    }
  },
  'PDA-M-044': {
    uz: {
      question_text: "P(A) = 0.6 va P(A va B) = 0.24 bo'lsa, P(B|A) qancha?",
      choice_a: "0.3",
      choice_b: "0.4",
      choice_c: "0.5",
      choice_d: "0.6",
      explanation: "P(B|A) = P(A va B)/P(A) = 0.24/0.6 = 0.4."
    },
    ru: {
      question_text: "P(A) = 0.6 и P(A и B) = 0.24. Чему равно P(B|A)?",
      choice_a: "0.3",
      choice_b: "0.4",
      choice_c: "0.5",
      choice_d: "0.6",
      explanation: "P(B|A) = P(A и B)/P(A) = 0.24/0.6 = 0.4."
    }
  },
  'PDA-M-045': {
    uz: {
      question_text: "Korrelyatsiya koeffitsienti r = -0.85 nimani ko'rsatadi?",
      choice_a: "Kuchli musbat bog'liqlik",
      choice_b: "Zaif musbat bog'liqlik",
      choice_c: "Kuchli manfiy bog'liqlik",
      choice_d: "Zaif manfiy bog'liqlik",
      explanation: "-1 ga yaqin r kuchli manfiy (teskari) bog'liqlikni ko'rsatadi."
    },
    ru: {
      question_text: "Коэффициент корреляции r = -0.85 указывает на:",
      choice_a: "Сильную положительную связь",
      choice_b: "Слабую положительную связь",
      choice_c: "Сильную отрицательную связь",
      choice_d: "Слабую отрицательную связь",
      explanation: "r близкое к -1 указывает на сильную отрицательную (обратную) связь."
    }
  },
  'PDA-M-046': {
    uz: {
      question_text: "Ikki quvur tankni to'ldiradi: A quvur yolg'iz 4 soatda, B quvur yolg'iz 6 soatda. Birga necha soatda?",
      choice_a: "2 soat",
      choice_b: "2.4 soat",
      choice_c: "2.5 soat",
      choice_d: "5 soat",
      explanation: "Tezlik A = 1/4, B = 1/6. Jami = 1/4 + 1/6 = 5/12. Vaqt = 12/5 = 2.4 soat."
    },
    ru: {
      question_text: "Два насоса заполняют резервуар: насос A один — за 4 часа, насос B один — за 6 часов. Вместе за сколько?",
      choice_a: "2 часа",
      choice_b: "2.4 часа",
      choice_c: "2.5 часа",
      choice_d: "5 часов",
      explanation: "Скорость A = 1/4, B = 1/6. Суммарная = 1/4 + 1/6 = 5/12. Время = 12/5 = 2.4 часа."
    }
  },
  'PDA-M-047': {
    uz: {
      question_text: "15% maosh oshirishdan keyin xodim $57,500 oladi. Asl maoshi qancha edi?",
      choice_a: "$48,000",
      choice_b: "$50,000",
      choice_c: "$52,000",
      choice_d: "$55,000",
      explanation: "Asl maosh × 1.15 = 57,500. Asl maosh = 57,500/1.15 = $50,000."
    },
    ru: {
      question_text: "После повышения зарплаты на 15% сотрудник получает $57,500. Какова была исходная зарплата?",
      choice_a: "$48,000",
      choice_b: "$50,000",
      choice_c: "$52,000",
      choice_d: "$55,000",
      explanation: "Исходная × 1.15 = 57,500. Исходная = 57,500/1.15 = $50,000."
    }
  },
  'PDA-M-048': {
    uz: {
      question_text: "Ma'lumotlar to'plamida Q1 = 25 va Q3 = 45. Kvartillararo farq (IQR) qancha?",
      choice_a: "15",
      choice_b: "20",
      choice_c: "25",
      choice_d: "35",
      explanation: "IQR = Q3 - Q1 = 45 - 25 = 20."
    },
    ru: {
      question_text: "В наборе данных Q1 = 25 и Q3 = 45. Чему равен межквартильный размах (IQR)?",
      choice_a: "15",
      choice_b: "20",
      choice_c: "25",
      choice_d: "35",
      explanation: "IQR = Q3 - Q1 = 45 - 25 = 20."
    }
  },
  'PDA-M-049': {
    uz: {
      question_text: "Tadqiqot muzqaymoq savdosi va cho'kish o'rtasidagi korrelyatsiyani topdi. Bu nimani anglatadi?",
      choice_a: "Muzqaymoq cho'kishga sabab bo'ladi",
      choice_b: "Cho'kish muzqaymoq savdosiga sabab bo'ladi",
      choice_c: "Uchinchi o'zgaruvchi (harorat) mavjud",
      choice_d: "Hech qanday bog'liqlik yo'q",
      explanation: "Ikkalasi ham yoz issig'idan oshadi — bu chalkash o'zgaruvchi. Korrelyatsiya ≠ sabab-oqibat."
    },
    ru: {
      question_text: "Исследование нашло корреляцию между продажами мороженого и утоплением. Это, вероятно, означает:",
      choice_a: "Мороженое вызывает утопление",
      choice_b: "Утопление вызывает продажи мороженого",
      choice_c: "Есть смешивающая переменная (температура)",
      choice_d: "Связи нет",
      explanation: "Оба возрастают летом из-за жары — это смешивающая переменная. Корреляция ≠ причинно-следственная связь."
    }
  },
  'PDA-M-050': {
    uz: {
      question_text: "Ikkita mustaqil hodisa: P(A) = 0.5 va P(B) = 0.4. P(A va B) qancha?",
      choice_a: "0.1",
      choice_b: "0.2",
      choice_c: "0.45",
      choice_d: "0.9",
      explanation: "Mustaqil hodisalar uchun: P(A va B) = P(A) × P(B) = 0.5 × 0.4 = 0.2."
    },
    ru: {
      question_text: "Два независимых события: P(A) = 0.5 и P(B) = 0.4. Чему равно P(A и B)?",
      choice_a: "0.1",
      choice_b: "0.2",
      choice_c: "0.45",
      choice_d: "0.9",
      explanation: "Для независимых событий: P(A и B) = P(A) × P(B) = 0.5 × 0.4 = 0.2."
    }
  },
  'PDA-M-051': {
    uz: {
      question_text: "$500 investitsiya bir yilda $540 ga oshdi. Yillik foiz stavkasi qancha?",
      choice_a: "6%",
      choice_b: "7%",
      choice_c: "8%",
      choice_d: "9%",
      explanation: "Foiz = 540 - 500 = 40. Stavka = 40/500 = 0.08 = 8%."
    },
    ru: {
      question_text: "Инвестиция $500 выросла до $540 за один год. Какова годовая процентная ставка?",
      choice_a: "6%",
      choice_b: "7%",
      choice_c: "8%",
      choice_d: "9%",
      explanation: "Доход = 540 - 500 = 40. Ставка = 40/500 = 0.08 = 8%."
    }
  },
  'PDA-M-052': {
    uz: {
      question_text: "Noutbuk narxi $1200 dan $900 ga tushdi. Foiz kamayishi qancha?",
      choice_a: "20%",
      choice_b: "25%",
      choice_c: "30%",
      choice_d: "33%",
      explanation: "Kamaytish = 300. Foiz = 300/1200 = 0.25 = 25%."
    },
    ru: {
      question_text: "Цена ноутбука упала с $1200 до $900. Каков процент снижения?",
      choice_a: "20%",
      choice_b: "25%",
      choice_c: "30%",
      choice_d: "33%",
      explanation: "Снижение = 300. Процент = 300/1200 = 0.25 = 25%."
    }
  },
  'PDA-M-053': {
    uz: {
      question_text: "Regressiya chizig'i tenglamasi y = -2x + 50. Qiyalik nimani anglatadi?",
      choice_a: "x har birlik oshganda y 2 ga kamayadi",
      choice_b: "x har birlik oshganda y 2 ga oshadi",
      choice_c: "y har birlik oshganda x 2 ga kamayadi",
      choice_d: "Boshlang'ich qiymat -2",
      explanation: "Qiyalik -2 degani x 1 birlikka oshganda y 2 ga kamayadi."
    },
    ru: {
      question_text: "Уравнение линии регрессии y = -2x + 50. Что означает наклон?",
      choice_a: "y уменьшается на 2 при каждом увеличении x на 1",
      choice_b: "y увеличивается на 2 при каждом увеличении x на 1",
      choice_c: "x уменьшается на 2 при каждом увеличении y на 1",
      choice_d: "Начальное значение равно -2",
      explanation: "Наклон -2 означает: при каждом увеличении x на 1 y уменьшается на 2."
    }
  },
  'PDA-M-054': {
    uz: {
      question_text: "Ma'lumotlar to'plamidan eng katta qiymat olib tashlansa, bu aniq nima bo'ladi?",
      choice_a: "O'rtacha kamayadi",
      choice_b: "Median kamayadi",
      choice_c: "Tarqalish (range) kamayadi",
      choice_d: "Barchasi",
      explanation: "Eng katta qiymatni olib tashlash har doim tarqalishni kamaytiradi. O'rtacha va medianga ta'siri aniq emas."
    },
    ru: {
      question_text: "Удаление наибольшего значения из набора данных точно приведёт к:",
      choice_a: "Уменьшению среднего",
      choice_b: "Уменьшению медианы",
      choice_c: "Уменьшению размаха",
      choice_d: "Всему вышеперечисленному",
      explanation: "Удаление наибольшего значения всегда уменьшает размах. Влияние на среднее и медиану неопределённо."
    }
  },
  'PDA-M-055': {
    uz: {
      question_text: "Tanlov hajmini oshirish odatda nima qiladi?",
      choice_a: "Xatolik chegarasini oshiradi",
      choice_b: "Xatolik chegarasini kamaytiradi",
      choice_c: "Xatolik chegarasiga ta'sir qilmaydi",
      choice_d: "Xatolik chegarasini ikki barobar oshiradi",
      explanation: "Katta tanlovlar aniqroq taxminlar beradi va xatolik chegarasini kamaytiradi."
    },
    ru: {
      question_text: "Увеличение размера выборки обычно:",
      choice_a: "Увеличивает погрешность",
      choice_b: "Уменьшает погрешность",
      choice_c: "Не влияет на погрешность",
      choice_d: "Удваивает погрешность",
      explanation: "Бо́льшие выборки дают более точные оценки, уменьшая погрешность."
    }
  },
  'PDA-M-056': {
    uz: {
      question_text: "y to'g'ridan-to'g'ri x ga proporsional va y = 12 bo'lganda x = 4. x = 7 bo'lganda y qancha?",
      choice_a: "18",
      choice_b: "21",
      choice_c: "24",
      choice_d: "28",
      explanation: "y = kx. 12 = k(4), k = 3. x = 7 bo'lganda: y = 3(7) = 21."
    },
    ru: {
      question_text: "y прямо пропорционально x, и y = 12 при x = 4. Чему равно y при x = 7?",
      choice_a: "18",
      choice_b: "21",
      choice_c: "24",
      choice_d: "28",
      explanation: "y = kx. 12 = k(4), k = 3. При x = 7: y = 3(7) = 21."
    }
  },
  'PDA-M-057': {
    uz: {
      question_text: "Test 60% aniqlikka ega. 1000 kishi test topshirsa, taxminan nechta to'g'ri natija oladi?",
      choice_a: "400",
      choice_b: "500",
      choice_c: "600",
      choice_d: "700",
      explanation: "Kutilgan to'g'ri natijalar = 60% × 1000 = 600."
    },
    ru: {
      question_text: "Тест имеет точность 60%. Если 1000 человек сдают тест, сколько примерно получат правильные результаты?",
      choice_a: "400",
      choice_b: "500",
      choice_c: "600",
      choice_d: "700",
      explanation: "Ожидаемые правильные = 60% × 1000 = 600."
    }
  },
  'PDA-M-058': {
    uz: {
      question_text: "Do'kon avval 20% chegirma beradi, so'ngra savdo narxidan qo'shimcha 10% chegirma. Umumiy chegirma qancha?",
      choice_a: "28%",
      choice_b: "30%",
      choice_c: "32%",
      choice_d: "33%",
      explanation: "100 dan boshlang. 20% chegirmadan keyin: 80. 10% chegirmadan keyin: 80 × 0.9 = 72. Umumiy chegirma = 28%."
    },
    ru: {
      question_text: "Магазин даёт скидку 20%, затем дополнительно 10% от цены со скидкой. Какова общая скидка?",
      choice_a: "28%",
      choice_b: "30%",
      choice_c: "32%",
      choice_d: "33%",
      explanation: "Начнём со 100. После -20%: 80. После -10%: 80 × 0.9 = 72. Общая скидка = 28%."
    }
  },
  'PDA-M-059': {
    uz: {
      question_text: "Eksponensial model y = 200(0.85)^t kamayishni ifodalaydi. Har bir vaqt birligi uchun foiz kamayishi qancha?",
      choice_a: "10%",
      choice_b: "15%",
      choice_c: "85%",
      choice_d: "100%",
      explanation: "0.85 = 1 - 0.15, demak har bir vaqt birligida 15% kamayadi."
    },
    ru: {
      question_text: "Экспоненциальная модель y = 200(0.85)^t представляет убыль. Каков процент убыли за единицу времени?",
      choice_a: "10%",
      choice_b: "15%",
      choice_c: "85%",
      choice_d: "100%",
      explanation: "0.85 = 1 - 0.15, значит убыль составляет 15% за единицу времени."
    }
  },
  'PDA-M-060': {
    uz: {
      question_text: "Besh test bali o'rtachasi 80. To'rtta ball: 75, 82, 78, 85. Beshinchi ball qancha?",
      choice_a: "78",
      choice_b: "80",
      choice_c: "82",
      choice_d: "84",
      explanation: "Yig'indi = 5 × 80 = 400. Ma'lum yig'indi = 75 + 82 + 78 + 85 = 320. Beshinchi = 400 - 320 = 80."
    },
    ru: {
      question_text: "Среднее пяти оценок равно 80. Четыре оценки: 75, 82, 78, 85. Какова пятая?",
      choice_a: "78",
      choice_b: "80",
      choice_c: "82",
      choice_d: "84",
      explanation: "Сумма = 5 × 80 = 400. Известная сумма = 75 + 82 + 78 + 85 = 320. Пятая = 400 - 320 = 80."
    }
  },
  'PDA-H-001': {
    uz: {
      question_text: "Ma'lumotlar to'plamining o'rtachasi 50, standart og'ishi 10. Har bir qiymat 2 ga ko'paytirilsa va 5 qo'shilsa, yangi o'rtacha qancha?",
      choice_a: "55",
      choice_b: "100",
      choice_c: "105",
      choice_d: "110",
      explanation: "Yangi o'rtacha = 2(eski o'rtacha) + 5 = 2(50) + 5 = 105."
    },
    ru: {
      question_text: "Набор данных имеет среднее 50 и стандартное отклонение 10. Если каждое значение умножить на 2 и прибавить 5, каково новое среднее?",
      choice_a: "55",
      choice_b: "100",
      choice_c: "105",
      choice_d: "110",
      explanation: "Новое среднее = 2(старое среднее) + 5 = 2(50) + 5 = 105."
    }
  },
  'PDA-H-002': {
    uz: {
      question_text: "Tadqiqotchi xatolik chegarasini ikki baravar kamaytirmoqchi. Tanlov hajmini nima qilish kerak?",
      choice_a: "Ikki baravar oshirish",
      choice_b: "Uch baravar oshirish",
      choice_c: "To'rt baravar oshirish",
      choice_d: "O'zgartimaslik",
      explanation: "Xatolik chegarasi √n ga teskari proporsional. Xatolikni ikki barobar kamaytirish uchun n ni 4 ga ko'paytirish kerak (chunki √4 = 2)."
    },
    ru: {
      question_text: "Исследователь хочет уменьшить погрешность вдвое. Что нужно сделать с размером выборки?",
      choice_a: "Удвоить",
      choice_b: "Утроить",
      choice_c: "Учетверить",
      choice_d: "Оставить неизменным",
      explanation: "Погрешность обратно пропорциональна √n. Чтобы уменьшить погрешность вдвое, нужно умножить n на 4 (так как √4 = 2)."
    }
  },
  'PDA-H-003': {
    uz: {
      question_text: "Sinfda 60% qiz. Qizlarning 25% sport bilan shug'ullanadi. O'g'illarning 40% sport bilan shug'ullanadi. Sinfning necha foizi sport bilan shug'ullanadi?",
      choice_a: "28%",
      choice_b: "31%",
      choice_c: "33%",
      choice_d: "35%",
      explanation: "Sport bilan shug'ullanadigan qizlar: 0.60 × 0.25 = 0.15 (15%). O'g'illar: 0.40 × 0.40 = 0.16 (16%). Jami: 15% + 16% = 31%."
    },
    ru: {
      question_text: "В классе 60% девочек. Из девочек 25% занимаются спортом. Из мальчиков 40% занимаются спортом. Какой процент класса занимается спортом?",
      choice_a: "28%",
      choice_b: "31%",
      choice_c: "33%",
      choice_d: "35%",
      explanation: "Девочки-спортсменки: 0.60 × 0.25 = 0.15 (15%). Мальчики-спортсмены: 0.40 × 0.40 = 0.16 (16%). Итого: 15% + 16% = 31%."
    }
  },
  'PDA-H-004': {
    uz: {
      question_text: "y = 2.5x + 15 tenglamasi oylik xarajatlarni y (dollar) x (soat) dan kelib chiqib hisoblaydi. 15 nimani ifodalaydi?",
      choice_a: "Soatiga narx",
      choice_b: "Belgilangan oylik to'lov",
      choice_c: "Jami maksimal xarajat",
      choice_d: "Minimal soatlar soni",
      explanation: "y = mx + b ko'rinishida b (y-kesim) x = 0 bo'lgandagi xarajatni ko'rsatadi, ya'ni belgilangan oylik to'lov."
    },
    ru: {
      question_text: "Уравнение y = 2.5x + 15 моделирует ежемесячные затраты y (доллары) в зависимости от использования x (часы). Что представляет 15?",
      choice_a: "Стоимость в час",
      choice_b: "Фиксированная ежемесячная плата",
      choice_c: "Максимальные совокупные расходы",
      choice_d: "Минимальное количество часов",
      explanation: "В форме y = mx + b значение b (точка пересечения y) — это затраты при x = 0, т.е. фиксированная ежемесячная плата."
    }
  },
  'PDA-H-005': {
    uz: {
      question_text: "15% chegirmadan keyin mahsulot $68 turadi. Asl narx qancha edi?",
      choice_a: "$78.20",
      choice_b: "$80.00",
      choice_c: "$82.40",
      choice_d: "$85.00",
      explanation: "Asl narxning 85% = $68 bo'lsa, asl narx = 68/0.85 = $80."
    },
    ru: {
      question_text: "После скидки 15% товар стоит $68. Какова была первоначальная цена?",
      choice_a: "$78.20",
      choice_b: "$80.00",
      choice_c: "$82.40",
      choice_d: "$85.00",
      explanation: "Если 85% от исходной = $68, то исходная = 68/0.85 = $80."
    }
  },
  'PDA-H-006': {
    uz: {
      question_text: "{10, 15, 20, 25, 30} to'plamiga qaysi qiymat qo'shilsa standart og'ish eng ko'p oshadi?",
      choice_a: "18",
      choice_b: "20",
      choice_c: "22",
      choice_d: "50",
      explanation: "Standart og'ish tarqalishni o'lchaydi. 50 ni qo'shish (o'rtacha 20 dan uzoq) tarqalishni eng ko'p oshiradi."
    },
    ru: {
      question_text: "Добавление какого значения к {10, 15, 20, 25, 30} больше всего увеличит стандартное отклонение?",
      choice_a: "18",
      choice_b: "20",
      choice_c: "22",
      choice_d: "50",
      explanation: "Стандартное отклонение измеряет разброс. Добавление 50 (далеко от среднего 20) больше всего увеличивает разброс."
    }
  },
  'PDA-H-007': {
    uz: {
      question_text: "Tadqiqot ishtirokchilarini tasodifiy ravishda yangi dori yoki platsebo qabul qilish guruhlariga taqsimlaydi. Bu qanday tadqiqot?",
      choice_a: "Kuzatuv tadqiqoti",
      choice_b: "Tanlov so'rovi",
      choice_c: "Tasodifiy nazorat ostidagi tajriba",
      choice_d: "Aholi ro'yxatga olish",
      explanation: "Davolash guruhlariga (dori va platsebo) tasodifiy taqsimlash tasodifiy nazorat ostidagi tajribaning asosiy belgisidir."
    },
    ru: {
      question_text: "Исследование случайно распределяет участников в группы: получающих новое лекарство или плацебо. Это пример:",
      choice_a: "Наблюдательного исследования",
      choice_b: "Выборочного опроса",
      choice_c: "Рандомизированного контролируемого эксперимента",
      choice_d: "Переписи",
      explanation: "Случайное распределение по группам воздействия (лекарство vs плацебо) — отличительная черта рандомизированного контролируемого эксперимента."
    }
  },
  'PDA-H-008': {
    uz: {
      question_text: "A mashinasi 4 soatda 100 detal, B mashinasi 5 soatda 150 detal ishlab chiqaradi. Birga 2 soatda necha detal?",
      choice_a: "100",
      choice_b: "110",
      choice_c: "120",
      choice_d: "125",
      explanation: "A tezligi = 100/4 = 25/soat. B tezligi = 150/5 = 30/soat. Birlashgan = 55/soat. 2 soatda: 55 × 2 = 110 detal."
    },
    ru: {
      question_text: "Машина A производит 100 деталей за 4 часа. Машина B — 150 деталей за 5 часов. Сколько деталей они произведут вместе за 2 часа?",
      choice_a: "100",
      choice_b: "110",
      choice_c: "120",
      choice_d: "125",
      explanation: "Скорость A = 100/4 = 25/ч. Скорость B = 150/5 = 30/ч. Суммарная = 55/ч. За 2 часа: 55 × 2 = 110 деталей."
    }
  },
  'PDA-H-009': {
    uz: {
      question_text: "Test 90% aniq. Aholining 5% kasalga chalingan. Musbat test chiqqan shaxs haqiqatan kasalga chalinish ehtimoli qancha?",
      choice_a: "Taxminan 32%",
      choice_b: "Taxminan 45%",
      choice_c: "Taxminan 68%",
      choice_d: "Taxminan 90%",
      explanation: "Bayes formulasi: P(kasal|musbat) = P(musbat|kasal)×P(kasal) / P(musbat). P(musbat) = 0.9×0.05 + 0.1×0.95 = 0.14. Natija = 0.045/0.14 ≈ 32%."
    },
    ru: {
      question_text: "Тест имеет точность 90%. 5% населения имеет болезнь. Какова вероятность того, что у человека с положительным результатом действительно есть болезнь?",
      choice_a: "Около 32%",
      choice_b: "Около 45%",
      choice_c: "Около 68%",
      choice_d: "Около 90%",
      explanation: "По формуле Байеса: P(болен|+) = P(+|болен)×P(болен) / P(+). P(+) = 0.9×0.05 + 0.1×0.95 = 0.14. Результат = 0.045/0.14 ≈ 32%."
    }
  },
  'PDA-H-010': {
    uz: {
      question_text: "Tarqalish diagrammasi o'qish soatlari (x) va test ballari (y) ni ko'rsatadi. Korrelyatsiya koeffitsienti r = 0.85. Test ballaridagi o'zgarishning necha foizi o'qish soatlari bilan tushuntiriladi?",
      choice_a: "72.25%",
      choice_b: "85%",
      choice_c: "92.5%",
      choice_d: "100%",
      explanation: "Determinatsiya koeffitsienti r² = 0.85² = 0.7225 = 72.25% o'zgarishni tushuntiradi."
    },
    ru: {
      question_text: "Диаграмма рассеяния показывает часы занятий (x) и баллы (y). Коэффициент корреляции r = 0.85. Какой процент изменений в баллах объясняется часами занятий?",
      choice_a: "72.25%",
      choice_b: "85%",
      choice_c: "92.5%",
      choice_d: "100%",
      explanation: "Коэффициент детерминации r² = 0.85² = 0.7225 = 72.25% объясняет вариацию."
    }
  },
  'PDA-H-011': {
    uz: {
      question_text: "60 mph tezlikda harakatlanuvchi avtomobil 50 mph tezlikda harakatlanuvchi avtomobildan 30 milya orqada. Birinchi avtomobil qachon utib oladi?",
      choice_a: "2 soatda",
      choice_b: "3 soatda",
      choice_c: "4 soatda",
      choice_d: "5 soatda",
      explanation: "Nisbiy tezlik = 60 - 50 = 10 mph. 30 milya farqni yopish uchun vaqt = 30/10 = 3 soat."
    },
    ru: {
      question_text: "Автомобиль, движущийся со скоростью 60 mph, находится в 30 милях позади автомобиля со скоростью 50 mph. Через сколько часов первый догонит второго?",
      choice_a: "2 часа",
      choice_b: "3 часа",
      choice_c: "4 часа",
      choice_d: "5 часов",
      explanation: "Относительная скорость = 60 - 50 = 10 mph. Время, чтобы закрыть разрыв 30 миль = 30/10 = 3 часа."
    }
  },
  'PDA-H-012': {
    uz: {
      question_text: "Investitsiya birinchi yili 20% oshdi va ikkinchi yili 10% kamaydi. Umumiy foiz o'zgarishi qancha?",
      choice_a: "8%",
      choice_b: "10%",
      choice_c: "12%",
      choice_d: "15%",
      explanation: "1-yildan keyin: 1.20. 2-yildan keyin: 1.20 × 0.90 = 1.08. Umumiy o'zgarish = 8% oshish."
    },
    ru: {
      question_text: "Инвестиция выросла на 20% в первый год и упала на 10% во второй год. Каков общий процент изменения?",
      choice_a: "8%",
      choice_b: "10%",
      choice_c: "12%",
      choice_d: "15%",
      explanation: "После 1-го года: 1.20. После 2-го года: 1.20 × 0.90 = 1.08. Общее изменение = 8% рост."
    }
  },
  'PDA-H-013': {
    uz: {
      question_text: "Ma'lumotlar to'plamining o'rtachasi 50, standart og'ishi 10. Har bir qiymat y = 2x - 20 qoidasi bilan o'zgartirilsa, yangi standart og'ish qancha?",
      choice_a: "10",
      choice_b: "20",
      choice_c: "30",
      choice_d: "40",
      explanation: "Standart og'ish ko'paytirishdan ta'sirlanadi, lekin qo'shishdan ta'sirlanmaydi. Yangi SD = 2 × 10 = 20."
    },
    ru: {
      question_text: "Набор данных имеет среднее 50 и стандартное отклонение 10. Если каждое значение преобразовать по правилу y = 2x - 20, каково новое стандартное отклонение?",
      choice_a: "10",
      choice_b: "20",
      choice_c: "30",
      choice_d: "40",
      explanation: "Стандартное отклонение изменяется при умножении, но не при сложении. Новое SD = 2 × 10 = 20."
    }
  },
  'PDA-H-014': {
    uz: {
      question_text: "Standart dastadan qaytmasdan ikki karta olinadi. Ikkalasi ham tuz (ace) bo'lish ehtimoli qanday?",
      choice_a: "1/169",
      choice_b: "1/221",
      choice_c: "1/256",
      choice_d: "1/13",
      explanation: "P(birinchi tuz) = 4/52. P(ikkinchi tuz | birinchi tuz) = 3/51. P(ikkalasi) = (4/52)(3/51) = 12/2652 = 1/221."
    },
    ru: {
      question_text: "Из стандартной колоды без возврата извлекают две карты. Какова вероятность, что обе — тузы?",
      choice_a: "1/169",
      choice_b: "1/221",
      choice_c: "1/256",
      choice_d: "1/13",
      explanation: "P(первый туз) = 4/52. P(второй туз | первый туз) = 3/51. P(оба) = (4/52)(3/51) = 12/2652 = 1/221."
    }
  },
  'PDA-H-015': {
    uz: {
      question_text: "100 kishilik tanlov 10% xatolik chegarasiga ega. 5% xatolik uchun qancha tanlov hajmi kerak?",
      choice_a: "200",
      choice_b: "300",
      choice_c: "400",
      choice_d: "500",
      explanation: "Xatolik chegarasi ∝ 1/√n. Xatolikni ikki barobar kamaytirish uchun n ni to'rt baravar oshiring: 100 × 4 = 400."
    },
    ru: {
      question_text: "Выборка 100 человек имеет погрешность 10%. Какой размер выборки даст погрешность 5%?",
      choice_a: "200",
      choice_b: "300",
      choice_c: "400",
      choice_d: "500",
      explanation: "Погрешность ∝ 1/√n. Чтобы уменьшить погрешность вдвое, учетверьте n: 100 × 4 = 400."
    }
  },
  'PDA-H-016': {
    uz: {
      question_text: "Regressiya modeli y = 0.8x + 5 beradi. x = 10 uchun qoldiq -2 bo'lsa, haqiqiy y qiymati qancha?",
      choice_a: "11",
      choice_b: "13",
      choice_c: "15",
      choice_d: "17",
      explanation: "Bashorat: y = 0.8(10) + 5 = 13. Qoldiq = haqiqiy - bashorat = -2. Haqiqiy = 13 - 2 = 11."
    },
    ru: {
      question_text: "Модель регрессии даёт y = 0.8x + 5. Если остаток для x = 10 равен -2, каково фактическое значение y?",
      choice_a: "11",
      choice_b: "13",
      choice_c: "15",
      choice_d: "17",
      explanation: "Предсказание: y = 0.8(10) + 5 = 13. Остаток = фактическое - предсказанное = -2. Фактическое = 13 - 2 = 11."
    }
  },
  'PDA-H-017': {
    uz: {
      question_text: "Tadqiqot: jismoniy mashq qiladiganlar past stressga ega. Qaysi fikr eng to'g'ri?",
      choice_a: "Jismoniy mashq past stressga sabab bo'ladi",
      choice_b: "Past stress odamlarga jismoniy mashq qilishga sabab bo'ladi",
      choice_c: "Jismoniy mashq va stress o'rtasida bog'liqlik bor",
      choice_d: "Hech qanday bog'liqlik yo'q",
      explanation: "Kuzatuv tadqiqotlari bog'liqlik/korrelyatsiyani ko'rsatadi, sabab-oqibat emas. Faqat bog'liqlik borligini aytish mumkin."
    },
    ru: {
      question_text: "Исследование показывает: у людей, занимающихся спортом, более низкий уровень стресса. Какое утверждение наиболее точно?",
      choice_a: "Физические упражнения вызывают снижение стресса",
      choice_b: "Низкий стресс заставляет людей заниматься спортом",
      choice_c: "Есть связь между физическими упражнениями и стрессом",
      choice_d: "Нет никакой связи",
      explanation: "Наблюдательные исследования показывают ассоциацию/корреляцию, а не причинность. Мы можем только утверждать, что есть связь."
    }
  },
  'PDA-H-018': {
    uz: {
      question_text: "Aralashma 40% spirt. 100 mL ni 60% spirt qilish uchun qancha toza spirt qo'shish kerak?",
      choice_a: "25 mL",
      choice_b: "40 mL",
      choice_c: "50 mL",
      choice_d: "60 mL",
      explanation: "Mavjud spirt: 40 mL. x mL qo'shilgandan keyin: (40 + x)/(100 + x) = 0.60. 40 + x = 60 + 0.6x. 0.4x = 20. x = 50 mL."
    },
    ru: {
      question_text: "Смесь содержит 40% спирта. Сколько чистого спирта нужно добавить к 100 мл, чтобы получить 60% спирта?",
      choice_a: "25 мл",
      choice_b: "40 мл",
      choice_c: "50 мл",
      choice_d: "60 мл",
      explanation: "Текущий спирт: 40 мл. После добавления x мл: (40 + x)/(100 + x) = 0.60. 40 + x = 60 + 0.6x. 0.4x = 20. x = 50 мл."
    }
  },
  'PDA-H-019': {
    uz: {
      question_text: "Aholi 5 yilda 25% oshdi. O'rtacha yillik foiz o'sish darajasi (murakkab) qancha?",
      choice_a: "Taxminan 4.6%",
      choice_b: "Taxminan 5.0%",
      choice_c: "Taxminan 5.5%",
      choice_d: "Taxminan 6.0%",
      explanation: "(1 + r)^5 = 1.25. 1 + r = 1.25^(1/5) ≈ 1.0456. r ≈ 4.6%."
    },
    ru: {
      question_text: "Население выросло на 25% за 5 лет. Какова средняя годовая ставка роста (сложная)?",
      choice_a: "Около 4.6%",
      choice_b: "Около 5.0%",
      choice_c: "Около 5.5%",
      choice_d: "Около 6.0%",
      explanation: "(1 + r)^5 = 1.25. 1 + r = 1.25^(1/5) ≈ 1.0456. r ≈ 4.6%."
    }
  },
  'PDA-H-020': {
    uz: {
      question_text: "Ma'lumotlar to'plamining besh raqamli xulosasi: Min=10, Q1=25, Med=35, Q3=50, Max=80. Kvartillararo farq (IQR) qancha?",
      choice_a: "15",
      choice_b: "25",
      choice_c: "30",
      choice_d: "70",
      explanation: "IQR = Q3 - Q1 = 50 - 25 = 25."
    },
    ru: {
      question_text: "Пятичисловая сводка набора данных: Min=10, Q1=25, Med=35, Q3=50, Max=80. Чему равен межквартильный размах (IQR)?",
      choice_a: "15",
      choice_b: "25",
      choice_c: "30",
      choice_d: "70",
      explanation: "IQR = Q3 - Q1 = 50 - 25 = 25."
    }
  },
  'PDA-H-021': {
    uz: {
      question_text: "P(A|B) = 0.6 va P(B) = 0.5 bo'lsa, P(A va B) qancha?",
      choice_a: "0.20",
      choice_b: "0.30",
      choice_c: "0.55",
      choice_d: "1.10",
      explanation: "P(A va B) = P(A|B) × P(B) = 0.6 × 0.5 = 0.30."
    },
    ru: {
      question_text: "P(A|B) = 0.6 и P(B) = 0.5. Чему равно P(A и B)?",
      choice_a: "0.20",
      choice_b: "0.30",
      choice_c: "0.55",
      choice_d: "1.10",
      explanation: "P(A и B) = P(A|B) × P(B) = 0.6 × 0.5 = 0.30."
    }
  },
  'PDA-H-022': {
    uz: {
      question_text: "Chiziqli model savdoni bashorat qiladi. Qoldiqlar grafigi aniq egri namunani ko'rsatadi. Bu nimani anglatadi?",
      choice_a: "Chiziqli model to'g'ri",
      choice_b: "Chiziqli bo'lmagan model yaxshiroq bo'lishi mumkin",
      choice_c: "Hech qanday bog'liqlik yo'q",
      choice_d: "Ma'lumotlarda chiqindilar (outlier) yo'q",
      explanation: "Qoldiqlar grafikidagi namuna chiziqli model munosabatni yetarlicha aks ettirmasligini ko'rsatadi; chiziqli bo'lmagan model yaxshiroq bo'lishi mumkin."
    },
    ru: {
      question_text: "Линейная модель предсказывает продажи. График остатков показывает явный изогнутый паттерн. Это означает:",
      choice_a: "Линейная модель подходит",
      choice_b: "Нелинейная модель может быть лучше",
      choice_c: "Нет связи",
      choice_d: "В данных нет выбросов",
      explanation: "Паттерн на графике остатков указывает, что линейная модель плохо описывает зависимость; нелинейная модель может быть лучше."
    }
  },
  'PDA-H-023': {
    uz: {
      question_text: "Ikki so'rov: birinchisi ±4% xatolik bilan 52%, ikkinchisi ±3% xatolik bilan 48% qo'llovni ko'rsatdi. Birinchisi ko'proq qo'llovga ega deb xulosa qilish mumkinmi?",
      choice_a: "Ha, chunki 52% > 48%",
      choice_b: "Yo'q, chunki ishonch oralig'lari kesishadi",
      choice_c: "Ha, chunki ikkala xatolik ham kichik",
      choice_d: "Yo'q, chunki so'rovlarga ishonib bo'lmaydi",
      explanation: "Birinchi: 48%-56%. Ikkinchi: 45%-51%. Oraliqlar kesishadi (48%-51%), shuning uchun muhim farqni xulosa qilib bo'lmaydi."
    },
    ru: {
      question_text: "Два опроса: первый — 52% поддержки с ±4%, второй — 48% с ±3%. Можно ли сделать вывод, что у первого больше поддержки?",
      choice_a: "Да, потому что 52% > 48%",
      choice_b: "Нет, потому что доверительные интервалы перекрываются",
      choice_c: "Да, потому что обе погрешности малы",
      choice_d: "Нет, потому что опросам нельзя доверять",
      explanation: "Первый: 48%-56%. Второй: 45%-51%. Интервалы перекрываются (48%-51%), поэтому нельзя заключить о значимом различии."
    }
  },
  'PDA-H-024': {
    uz: {
      question_text: "A va B birga ishni 6 kunda bajaradi. A yolg'iz 10 kunda bajaradi. B yolg'iz qancha kunda bajaradi?",
      choice_a: "12 kun",
      choice_b: "15 kun",
      choice_c: "18 kun",
      choice_d: "20 kun",
      explanation: "A tezligi = 1/10, birlashgan = 1/6. B tezligi = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15. B yolg'iz: 15 kun."
    },
    ru: {
      question_text: "A и B вместе выполняют работу за 6 дней. A в одиночку — за 10 дней. За сколько дней справится B в одиночку?",
      choice_a: "12 дней",
      choice_b: "15 дней",
      choice_c: "18 дней",
      choice_d: "20 дней",
      explanation: "Скорость A = 1/10, суммарная = 1/6. Скорость B = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15. B один: 15 дней."
    }
  },
  'PDA-H-025': {
    uz: {
      question_text: "Dori sinovida qo'sh ko'r metodologiyasi qo'llaniladi. Bu nimani anglatadi?",
      choice_a: "Ishtirokchilar tasodifiy tanlanadi",
      choice_b: "Na ishtirokchilar, na tadqiqotchilar kim davolash olishini bilmaydi",
      choice_c: "Ikki xil dori sinovdan o'tkaziladi",
      choice_d: "Natijalar ikki marta tekshiriladi",
      explanation: "Qo'sh ko'r degani na ishtirokchilar, na ularni davolayotgan tadqiqotchilar kim davolash yoki nazorat guruhida ekanligini bilmaydi."
    },
    ru: {
      question_text: "В клиническом испытании используется двойная слепая методология. Что это означает?",
      choice_a: "Участники отбираются случайно",
      choice_b: "Ни участники, ни исследователи не знают, кто получает лечение",
      choice_c: "Тестируются два разных препарата",
      choice_d: "Результаты проверяются дважды",
      explanation: "Двойная слепота означает: ни участники, ни исследователи, проводящие лечение, не знают, кто в группе лечения, а кто в контрольной."
    }
  },
  'PDA-H-026': {
    uz: {
      question_text: "Miqdor 20% kamaydi, so'ngra asl qiymatiga qaytish uchun necha foiz oshishi kerak?",
      choice_a: "20%",
      choice_b: "22%",
      choice_c: "25%",
      choice_d: "30%",
      explanation: "20% kamayishdan keyin: 0.80. 1.00 ga qaytish uchun: 1.00/0.80 = 1.25, ya'ni 25% oshish."
    },
    ru: {
      question_text: "Величина уменьшилась на 20%, затем на сколько процентов нужно увеличить, чтобы вернуться к исходному значению?",
      choice_a: "20%",
      choice_b: "22%",
      choice_c: "25%",
      choice_d: "30%",
      explanation: "После снижения на 20%: 0.80. Чтобы вернуться к 1.00: 1.00/0.80 = 1.25, то есть нужно увеличить на 25%."
    }
  },
  'PDA-H-027': {
    uz: {
      question_text: "Ma'lumotlar to'plamining o'rtachasi 100, standart og'ishi 15. Empirik qoidaga ko'ra, ma'lumotlarning taxminan qancha foizi 70 va 130 orasida?",
      choice_a: "68%",
      choice_b: "95%",
      choice_c: "99.7%",
      choice_d: "100%",
      explanation: "70 dan 130 gacha = 100 ± 30 = 100 ± 2(15), ya'ni 2 standart og'ish. Taxminan 95% 2 SD ichiga tushadi."
    },
    ru: {
      question_text: "Набор данных имеет среднее 100 и стандартное отклонение 15. По эмпирическому правилу, какой процент данных находится между 70 и 130?",
      choice_a: "68%",
      choice_b: "95%",
      choice_c: "99.7%",
      choice_d: "100%",
      explanation: "70 до 130 — это 100 ± 30 = 100 ± 2(15), то есть 2 стандартных отклонения. Около 95% данных попадают в 2 SD."
    }
  },
  'PDA-H-028': {
    uz: {
      question_text: "Guruhda 70% qahva, 50% choy yoqtiradi va 30% ikkalasini ham yoqtiradi. Qahva yoki choy yoqtiradigan foiz qancha?",
      choice_a: "80%",
      choice_b: "90%",
      choice_c: "100%",
      choice_d: "120%",
      explanation: "P(Q yoki Ch) = P(Q) + P(Ch) - P(Q va Ch) = 70% + 50% - 30% = 90%."
    },
    ru: {
      question_text: "В группе 70% любят кофе, 50% — чай, 30% — оба. Какой процент любит кофе или чай?",
      choice_a: "80%",
      choice_b: "90%",
      choice_c: "100%",
      choice_d: "120%",
      explanation: "P(К или Ч) = P(К) + P(Ч) - P(К и Ч) = 70% + 50% - 30% = 90%."
    }
  },
  'PDA-H-029': {
    uz: {
      question_text: "y = 100(1.05)^x eksponensial modeli ma'lumotlarga yaxshi mos keladi. x ning har bir birligi uchun foiz o'sish darajasi qancha?",
      choice_a: "0.05%",
      choice_b: "1.05%",
      choice_c: "5%",
      choice_d: "105%",
      explanation: "y = a(1 + r)^x ko'rinishida r = 0.05 = 5% o'sish darajasi."
    },
    ru: {
      question_text: "Экспоненциальная модель y = 100(1.05)^x хорошо подходит для данных. Каков процент роста на единицу x?",
      choice_a: "0.05%",
      choice_b: "1.05%",
      choice_c: "5%",
      choice_d: "105%",
      explanation: "В форме y = a(1 + r)^x значение r = 0.05 = 5% скорость роста."
    }
  },
  'PDA-H-030': {
    uz: {
      question_text: "4 mph tezlikda piyoda yurish 12 mph tezlikda velosiped minishdan 30 daqiqa ko'proq vaqt oladi. Masofa qancha?",
      choice_a: "2 milya",
      choice_b: "3 milya",
      choice_c: "4 milya",
      choice_d: "6 milya",
      explanation: "d = masofa deb qo'yaylik. Piyoda vaqti = d/4, velosiped = d/12. d/4 - d/12 = 0.5 soat. 3d/12 - d/12 = 0.5. 2d/12 = 0.5. d = 3 milya."
    },
    ru: {
      question_text: "Ходьба со скоростью 4 mph занимает на 30 минут больше, чем езда на велосипеде со скоростью 12 mph. Каково расстояние?",
      choice_a: "2 мили",
      choice_b: "3 мили",
      choice_c: "4 мили",
      choice_d: "6 миль",
      explanation: "Пусть d = расстояние. Время пешком = d/4, на велосипеде = d/12. d/4 - d/12 = 0.5 часа. 3d/12 - d/12 = 0.5. 2d/12 = 0.5. d = 3 мили."
    }
  },
  'PDA-H-031': {
    uz: {
      question_text: "Tank 1/3 to'la. 20 gallon qo'shilgandan keyin 1/2 to'ladi. Tank sig'imi qancha?",
      choice_a: "100 gallon",
      choice_b: "120 gallon",
      choice_c: "150 gallon",
      choice_d: "180 gallon",
      explanation: "Sig'im = C deb qo'yaylik. 1/2C - 1/3C = 20. (3C - 2C)/6 = 20. C/6 = 20. C = 120 gallon."
    },
    ru: {
      question_text: "Резервуар заполнен на 1/3. После добавления 20 галлонов стало 1/2 полным. Какова ёмкость резервуара?",
      choice_a: "100 галлонов",
      choice_b: "120 галлонов",
      choice_c: "150 галлонов",
      choice_d: "180 галлонов",
      explanation: "Пусть ёмкость = C. 1/2C - 1/3C = 20. (3C - 2C)/6 = 20. C/6 = 20. C = 120 галлонов."
    }
  },
  'PDA-H-032': {
    uz: {
      question_text: "Aholi 2 yil davomida har yili 5% oshadi. Umumiy foiz o'sishi qancha?",
      choice_a: "10%",
      choice_b: "10.25%",
      choice_c: "10.5%",
      choice_d: "11%",
      explanation: "2 yildan keyin: 1.05² = 1.1025. Umumiy o'sish = 10.25%."
    },
    ru: {
      question_text: "Население растёт на 5% ежегодно в течение 2 лет. Каков общий процент прироста?",
      choice_a: "10%",
      choice_b: "10.25%",
      choice_c: "10.5%",
      choice_d: "11%",
      explanation: "После 2 лет: 1.05² = 1.1025. Общий прирост = 10.25%."
    }
  },
  'PDA-H-033': {
    uz: {
      question_text: "10 ta sonning o'rtachasi 50. Agar bir son 30 dan 60 ga o'zgartirilsa, yangi o'rtacha qancha?",
      choice_a: "51",
      choice_b: "52",
      choice_c: "53",
      choice_d: "55",
      explanation: "Asl yig'indi = 500. O'zgarish yig'indiga 30 qo'shadi. Yangi yig'indi = 530. Yangi o'rtacha = 53."
    },
    ru: {
      question_text: "Среднее 10 чисел равно 50. Если одно число изменится с 30 на 60, каково новое среднее?",
      choice_a: "51",
      choice_b: "52",
      choice_c: "53",
      choice_d: "55",
      explanation: "Исходная сумма = 500. Изменение добавляет 30 к сумме. Новая сумма = 530. Новое среднее = 53."
    }
  },
  'PDA-H-034': {
    uz: {
      question_text: "Uch tanga tashlandi. Aynan ikkita ra'y chiqish ehtimoli qanday?",
      choice_a: "1/4",
      choice_b: "3/8",
      choice_c: "1/2",
      choice_d: "5/8",
      explanation: "Jami holatlar = 8. Ikki ra'y: RRY, RYR, YRR = 3 ta. P = 3/8."
    },
    ru: {
      question_text: "Бросили три монеты. Какова вероятность выпадения ровно двух орлов?",
      choice_a: "1/4",
      choice_b: "3/8",
      choice_c: "1/2",
      choice_d: "5/8",
      explanation: "Всего исходов = 8. Два орла: ООР, ОРО, РОО = 3 варианта. P = 3/8."
    }
  },
  'PDA-H-035': {
    uz: {
      question_text: "y = 500(1.08)^t modeli o'sishni bashorat qiladi. y necha yilda ikki barobar bo'ladi?",
      choice_a: "Taxminan 8 yilda",
      choice_b: "Taxminan 9 yilda",
      choice_c: "Taxminan 10 yilda",
      choice_d: "Taxminan 12 yilda",
      explanation: "72 qoidasini ishlatish: 72/8 ≈ 9 yil. Yoki 2 = 1.08^t ni hal qiling: t = ln(2)/ln(1.08) ≈ 9."
    },
    ru: {
      question_text: "Модель y = 500(1.08)^t предсказывает рост. Через сколько лет y удвоится?",
      choice_a: "Около 8 лет",
      choice_b: "Около 9 лет",
      choice_c: "Около 10 лет",
      choice_d: "Около 12 лет",
      explanation: "Правило 72: 72/8 ≈ 9 лет. Или решите 2 = 1.08^t: t = ln(2)/ln(1.08) ≈ 9."
    }
  },
  'PDA-H-036': {
    uz: {
      question_text: "40% kislotali eritma 70% kislotali eritma bilan aralashtirilsa 100 mL 50% eritma hosil bo'ladi. 40% eritmadan necha mL kerak?",
      choice_a: "55 mL",
      choice_b: "60 mL",
      choice_c: "65 mL",
      choice_d: "66.67 mL",
      explanation: "x = 40% mL. 0.4x + 0.7(100-x) = 0.5(100). 0.4x + 70 - 0.7x = 50. -0.3x = -20. x = 66.67 mL."
    },
    ru: {
      question_text: "Раствор 40% кислоты смешивают с раствором 70% кислоты, чтобы получить 100 мл 50% раствора. Сколько мл 40% раствора нужно?",
      choice_a: "55 мл",
      choice_b: "60 мл",
      choice_c: "65 мл",
      choice_d: "66.67 мл",
      explanation: "x = мл 40% раствора. 0.4x + 0.7(100-x) = 0.5(100). 0.4x + 70 - 0.7x = 50. -0.3x = -20. x = 66.67 мл."
    }
  },
  'PDA-H-037': {
    uz: {
      question_text: "20% chegirma va 8% soliqdan keyin yakuniy narx $97.20. Asl narx qancha edi?",
      choice_a: "$100",
      choice_b: "$108",
      choice_c: "$112.50",
      choice_d: "$120",
      explanation: "P = asl narx deb qo'yaylik. P × 0.8 × 1.08 = 97.20. P × 0.864 = 97.20. P = $112.50."
    },
    ru: {
      question_text: "После скидки 20% и налога 8% итоговая цена составила $97.20. Какова была первоначальная цена?",
      choice_a: "$100",
      choice_b: "$108",
      choice_c: "$112.50",
      choice_d: "$120",
      explanation: "Пусть P = исходная цена. P × 0.8 × 1.08 = 97.20. P × 0.864 = 97.20. P = $112.50."
    }
  },
  'PDA-H-038': {
    uz: {
      question_text: "Ikki to'plamning o'rtachasi bir xil. A to'plami: {3, 5, 7, 9, 11}. B to'plami: {5, 6, 7, 8, 9}. Qaysi biri standart og'ishi kattaroq?",
      choice_a: "A to'plami",
      choice_b: "B to'plami",
      choice_c: "Bir xil",
      choice_d: "Aniqlab bo'lmaydi",
      explanation: "Ikkalasining o'rtachasi ham 7. A to'plamining qiymatlari ko'proq tarqalgan (tarqalish 8 va 4), shuning uchun A ning SD kattaroq."
    },
    ru: {
      question_text: "Два набора имеют одинаковое среднее. Набор A: {3, 5, 7, 9, 11}. Набор B: {5, 6, 7, 8, 9}. У какого стандартное отклонение больше?",
      choice_a: "Набор A",
      choice_b: "Набор B",
      choice_c: "Одинаково",
      choice_d: "Невозможно определить",
      explanation: "Оба имеют среднее 7. Значения набора A более разбросаны (размах 8 против 4), поэтому SD набора A больше."
    }
  },
  'PDA-H-039': {
    uz: {
      question_text: "Sinfda 60% matematikani, 50% fanni, 80% kamida bittasini yoqtiradi. Ikkalasini ham yoqtiradigan foiz qancha?",
      choice_a: "20%",
      choice_b: "30%",
      choice_c: "40%",
      choice_d: "50%",
      explanation: "P(M yoki F) = P(M) + P(F) - P(M va F). 80 = 60 + 50 - P(ikkalasi). P(ikkalasi) = 30%."
    },
    ru: {
      question_text: "В классе 60% любят математику, 50% — естественные науки, 80% любят хотя бы одно. Какой процент любит оба предмета?",
      choice_a: "20%",
      choice_b: "30%",
      choice_c: "40%",
      choice_d: "50%",
      explanation: "P(М или Е) = P(М) + P(Е) - P(М и Е). 80 = 60 + 50 - P(оба). P(оба) = 30%."
    }
  },
  'PDA-H-040': {
    uz: {
      question_text: "95% ishonch oralig'i 40% dan 52% gacha. Tanlov nisbati qancha?",
      choice_a: "44%",
      choice_b: "46%",
      choice_c: "48%",
      choice_d: "50%",
      explanation: "Tanlov nisbati — o'rta nuqta: (40 + 52)/2 = 46%."
    },
    ru: {
      question_text: "95% доверительный интервал — от 40% до 52%. Какова доля выборки?",
      choice_a: "44%",
      choice_b: "46%",
      choice_c: "48%",
      choice_d: "50%",
      explanation: "Доля выборки — это середина: (40 + 52)/2 = 46%."
    }
  },
  'PDA-H-041': {
    uz: {
      question_text: "A poyezdi 60 mph da, B poyezdi 1 soat keyin 80 mph da bir stansiyadan yo'lga chiqdi. B qachon A ni utib oladi?",
      choice_a: "B yo'lga chiqqandan 2 soat keyin",
      choice_b: "B yo'lga chiqqandan 3 soat keyin",
      choice_c: "B yo'lga chiqqandan 4 soat keyin",
      choice_d: "B yo'lga chiqqandan 5 soat keyin",
      explanation: "B A ni utib olganda: 60(t + 1) = 80t. 60t + 60 = 80t. 60 = 20t. t = 3 soat B yo'lga chiqqandan keyin."
    },
    ru: {
      question_text: "Поезд A отправляется со скоростью 60 mph, поезд B — на 1 час позже со скоростью 80 mph с той же станции. Через сколько часов после отправления B догонит A?",
      choice_a: "2 часа после отправления B",
      choice_b: "3 часа после отправления B",
      choice_c: "4 часа после отправления B",
      choice_d: "5 часов после отправления B",
      explanation: "Когда B догоняет A: 60(t + 1) = 80t. 60t + 60 = 80t. 60 = 20t. t = 3 часа после отправления B."
    }
  },
  'PDA-H-042': {
    uz: {
      question_text: "x 25% oshirilsa, keyin natija 20% kamaytirilsa, yakuniy qiymat nechaga teng?",
      choice_a: "x",
      choice_b: "0.95x",
      choice_c: "1.05x",
      choice_d: "1.25x",
      explanation: "x × 1.25 × 0.80 = x × 1.0 = x."
    },
    ru: {
      question_text: "Если x увеличить на 25%, а затем результат уменьшить на 20%, конечное значение равно:",
      choice_a: "x",
      choice_b: "0.95x",
      choice_c: "1.05x",
      choice_d: "1.25x",
      explanation: "x × 1.25 × 0.80 = x × 1.0 = x."
    }
  },
  'PDA-H-043': {
    uz: {
      question_text: "Ma'lumotlar to'plamidagi har bir qiymat 2 ga ko'paytirilsa, standart og'ish nima bo'ladi?",
      choice_a: "O'zgarishsiz qoladi",
      choice_b: "Ikki barobar oshadi",
      choice_c: "To'rt barobar oshadi",
      choice_d: "Yarmiga kamayadi",
      explanation: "Barcha qiymatlarni konstantaga ko'paytirish SD ni ham shu konstantaga ko'paytiradi."
    },
    ru: {
      question_text: "Если каждое значение в наборе данных умножить на 2, что произойдёт со стандартным отклонением?",
      choice_a: "Останется неизменным",
      choice_b: "Удвоится",
      choice_c: "Учетверится",
      choice_d: "Уменьшится вдвое",
      explanation: "Умножение всех значений на константу умножает SD на ту же константу."
    }
  },
  'PDA-H-044': {
    uz: {
      question_text: "Qopda 5 ta qizil va 3 ta ko'k to'p bor. Qaytmasdan ikki to'p olinadi. P(ikkalasi qizil)?",
      choice_a: "5/14",
      choice_b: "10/28",
      choice_c: "25/64",
      choice_d: "5/8",
      explanation: "P = (5/8)(4/7) = 20/56 = 5/14."
    },
    ru: {
      question_text: "В мешке 5 красных и 3 синих шара. Два шара извлекают без возврата. P(оба красных)?",
      choice_a: "5/14",
      choice_b: "10/28",
      choice_c: "25/64",
      choice_d: "5/8",
      explanation: "P = (5/8)(4/7) = 20/56 = 5/14."
    }
  },
  'PDA-H-045': {
    uz: {
      question_text: "Chiziqli regressiyada r² = 0.81. y dagi o'zgarishning necha foizi x bilan tushuntiriladi?",
      choice_a: "9%",
      choice_b: "19%",
      choice_c: "81%",
      choice_d: "90%",
      explanation: "r² = 0.81 degani y dagi o'zgarishning 81% x bilan chiziqli bog'liqlik orqali tushuntiriladi."
    },
    ru: {
      question_text: "Линейная регрессия имеет r² = 0.81. Какой процент вариации y объясняется x?",
      choice_a: "9%",
      choice_b: "19%",
      choice_c: "81%",
      choice_d: "90%",
      explanation: "r² = 0.81 означает: 81% вариации y объясняется линейной зависимостью от x."
    }
  },
  'PDA-H-046': {
    uz: {
      question_text: "y, x² ga teskari proporsional. y = 2 bo'lganda x = 3. x = 6 bo'lganda y qancha?",
      choice_a: "0.25",
      choice_b: "0.5",
      choice_c: "1",
      choice_d: "4",
      explanation: "y = k/x². 2 = k/9, k = 18. x = 6 bo'lganda: y = 18/36 = 0.5."
    },
    ru: {
      question_text: "y обратно пропорционально x². При y = 2, x = 3. Чему равно y при x = 6?",
      choice_a: "0.25",
      choice_b: "0.5",
      choice_c: "1",
      choice_d: "4",
      explanation: "y = k/x². 2 = k/9, k = 18. При x = 6: y = 18/36 = 0.5."
    }
  },
  'PDA-H-047': {
    uz: {
      question_text: "Tadqiqot ishtirokchilarini tasodifiy ravishda davolash yoki nazorat guruhlariga taqsimlaydi. Bu qanday tadqiqot?",
      choice_a: "Kuzatuv tadqiqoti",
      choice_b: "Qatlamli tanlov",
      choice_c: "Tasodifiy tajriba",
      choice_d: "Qulay tanlov",
      explanation: "Davolash/nazorat guruhlariga tasodifiy taqsimlash tasodifiy tajribani ko'rsatadi."
    },
    ru: {
      question_text: "Исследование случайно распределяет участников в группы лечения или контроля. Это пример:",
      choice_a: "Наблюдательного исследования",
      choice_b: "Стратифицированной выборки",
      choice_c: "Рандомизированного эксперимента",
      choice_d: "Удобной выборки",
      explanation: "Случайное распределение по группам лечения/контроля указывает на рандомизированный эксперимент."
    }
  },
  'PDA-H-048': {
    uz: {
      question_text: "A kompaniya daromadi B kompaniyadan 20% ko'p. B ning daromadi A niqidan necha foiz kam?",
      choice_a: "16.67%",
      choice_b: "17.5%",
      choice_c: "20%",
      choice_d: "25%",
      explanation: "B = 100 deb qo'yaylik, A = 120. B, A dan 20/120 = 1/6 ≈ 16.67% kam."
    },
    ru: {
      question_text: "Выручка компании A на 20% больше, чем компании B. На сколько процентов выручка B меньше, чем A?",
      choice_a: "16.67%",
      choice_b: "17.5%",
      choice_c: "20%",
      choice_d: "25%",
      explanation: "Пусть B = 100, A = 120. B меньше A на 20/120 = 1/6 ≈ 16.67%."
    }
  },
  'PDA-H-049': {
    uz: {
      question_text: "Ma'lumotlar to'plamining o'rtachasi 70, standart og'ishi 5. Empirik qoidaga ko'ra, ma'lumotlarning taxminan 95% i qaysi oraliqda?",
      choice_a: "60 dan 80 gacha",
      choice_b: "55 dan 85 gacha",
      choice_c: "65 dan 75 gacha",
      choice_d: "50 dan 90 gacha",
      explanation: "95% 2 standart og'ish ichiga tushadi: 70 ± 2(5) = 60 dan 80 gacha."
    },
    ru: {
      question_text: "Набор данных имеет среднее 70 и стандартное отклонение 5. По эмпирическому правилу, около 95% данных находится в диапазоне:",
      choice_a: "от 60 до 80",
      choice_b: "от 55 до 85",
      choice_c: "от 65 до 75",
      choice_d: "от 50 до 90",
      explanation: "95% попадают в 2 стандартных отклонения: 70 ± 2(5) = от 60 до 80."
    }
  },
  'PDA-H-050': {
    uz: {
      question_text: "Kasallik aholining 1% ini zararlaydi. Test 95% aniq (musbat va manfiy uchun ham). Musbat natija chiqqanda kasallik bo'lish ehtimoli qancha?",
      choice_a: "Taxminan 16%",
      choice_b: "Taxminan 50%",
      choice_c: "Taxminan 84%",
      choice_d: "Taxminan 95%",
      explanation: "Bayes formulasi: P(K|+) = (0.95×0.01)/(0.95×0.01 + 0.05×0.99) = 0.0095/(0.0095+0.0495) ≈ 0.16."
    },
    ru: {
      question_text: "Болезнь поражает 1% населения. Тест имеет точность 95% (для положительных и отрицательных). При положительном результате какова вероятность наличия болезни?",
      choice_a: "Около 16%",
      choice_b: "Около 50%",
      choice_c: "Около 84%",
      choice_d: "Около 95%",
      explanation: "По формуле Байеса: P(Б|+) = (0.95×0.01)/(0.95×0.01 + 0.05×0.99) = 0.0095/(0.0095+0.0495) ≈ 0.16."
    }
  },
  'PDA-H-051': {
    uz: {
      question_text: "Avtomobil shaharda 30 mpg, yo'lda 40 mpg sarflaydi. Har birida 100 milya yursangiz, umumiy mpg qancha?",
      choice_a: "33.3 mpg",
      choice_b: "34.3 mpg",
      choice_c: "35 mpg",
      choice_d: "35.7 mpg",
      explanation: "Shahar: 100/30 gallon. Yo'l: 100/40 gallon. Jami = 200 milya, (10/3 + 2.5) = 35/6 gallon. MPG = 200/(35/6) = 34.3."
    },
    ru: {
      question_text: "Автомобиль тратит 30 mpg в городе и 40 mpg на шоссе. При езде по 100 миль в каждом режиме, каков общий расход mpg?",
      choice_a: "33.3 mpg",
      choice_b: "34.3 mpg",
      choice_c: "35 mpg",
      choice_d: "35.7 mpg",
      explanation: "Город: 100/30 галл. Шоссе: 100/40 галл. Итого = 200 миль, (10/3 + 2.5) = 35/6 галл. MPG = 200/(35/6) = 34.3."
    }
  },
  'PDA-H-052': {
    uz: {
      question_text: "Ma'lumotlarning logarifmlari chiziqli namunaga ega bo'lsa, asl ma'lumotlar qanday modelga mos keladi?",
      choice_a: "Chiziqli",
      choice_b: "Kvadratik",
      choice_c: "Eksponensial",
      choice_d: "Logarifmik",
      explanation: "log(y) va x chiziqli bo'lsa: log(y) = mx + b, demak y = 10^(mx+b) — eksponensial."
    },
    ru: {
      question_text: "Если логарифмы данных следуют линейному паттерну, исходные данные соответствуют какому типу модели?",
      choice_a: "Линейной",
      choice_b: "Квадратичной",
      choice_c: "Экспоненциальной",
      choice_d: "Логарифмической",
      explanation: "Если log(y) от x линейно: log(y) = mx + b, тогда y = 10^(mx+b) — экспоненциальная функция."
    }
  },
  'PDA-H-053': {
    uz: {
      question_text: "Mahsulot narxi uch barobar oshdi, keyin asl narxiga qaytish uchun necha foiz kamaytirilishi kerak?",
      choice_a: "33.33%",
      choice_b: "50%",
      choice_c: "66.67%",
      choice_d: "75%",
      explanation: "Asl = 100, uch barobar = 300. 100 ga qaytish uchun: kamayish = 200/300 = 66.67%."
    },
    ru: {
      question_text: "Цена товара утроилась, затем на какой процент нужно снизить, чтобы вернуться к исходной цене?",
      choice_a: "33.33%",
      choice_b: "50%",
      choice_c: "66.67%",
      choice_d: "75%",
      explanation: "Исходная = 100, утроенная = 300. Чтобы вернуться к 100: снижение = 200/300 = 66.67%."
    }
  },
  'PDA-H-054': {
    uz: {
      question_text: "Ikki so'rov bir xil xatolik chegarasiga ega. A so'rov: n=400, B so'rov: n=1600. B ning xatoligi m bo'lsa, A ning asl xatoligi qancha edi?",
      choice_a: "m/2",
      choice_b: "m",
      choice_c: "2m",
      choice_d: "4m",
      explanation: "Xatolik ∝ 1/√n. n to'rt baravar oshsa, xatolik yarmiga kamayadi. A ning xatoligi = 2 × B ning xatoligi."
    },
    ru: {
      question_text: "Два опроса с одинаковой погрешностью. Опрос A: n=400, опрос B: n=1600. Если погрешность B равна m, какова была исходная погрешность A?",
      choice_a: "m/2",
      choice_b: "m",
      choice_c: "2m",
      choice_d: "4m",
      explanation: "Погрешность ∝ 1/√n. Если n увеличивается в 4 раза, погрешность уменьшается вдвое. Погрешность A = 2 × погрешность B."
    }
  },
  'PDA-H-055': {
    uz: {
      question_text: "Ma'lumotlar to'plamining har bir qiymatiga 5 qo'shilsa, dispersiya (variance) nima bo'ladi?",
      choice_a: "5 ga oshadi",
      choice_b: "25 ga oshadi",
      choice_c: "Ikki baravar oshadi",
      choice_d: "O'zgarishsiz qoladi",
      explanation: "Konstanta qo'shish barcha qiymatlarni siljitadi, lekin tarqalishni o'zgartirmaydi. Dispersiya o'zgarishsiz qoladi."
    },
    ru: {
      question_text: "Если к каждому значению набора данных добавить 5, что произойдёт с дисперсией (variance)?",
      choice_a: "Увеличится на 5",
      choice_b: "Увеличится на 25",
      choice_c: "Удвоится",
      choice_d: "Останется неизменной",
      explanation: "Прибавление константы сдвигает все значения, но не меняет разброс. Дисперсия остаётся неизменной."
    }
  },
  'PDA-H-056': {
    uz: {
      question_text: "A va B mustaqil hodisalar: P(A) = 0.3 va P(B) = 0.5. P(A yoki B) qancha?",
      choice_a: "0.50",
      choice_b: "0.65",
      choice_c: "0.80",
      choice_d: "0.85",
      explanation: "P(A yoki B) = P(A) + P(B) - P(A)P(B) = 0.3 + 0.5 - 0.15 = 0.65."
    },
    ru: {
      question_text: "A и B независимые события с P(A) = 0.3 и P(B) = 0.5. Чему равно P(A или B)?",
      choice_a: "0.50",
      choice_b: "0.65",
      choice_c: "0.80",
      choice_d: "0.85",
      explanation: "P(A или B) = P(A) + P(B) - P(A)P(B) = 0.3 + 0.5 - 0.15 = 0.65."
    }
  },
  'PDA-H-057': {
    uz: {
      question_text: "A ishchi yolg'iz 6 soat, B 8 soat. Birga 2 soat ishlaydi, so'ngra A yolg'iz tugatadi. Jami vaqt qancha?",
      choice_a: "4 soat",
      choice_b: "4.5 soat",
      choice_c: "5 soat",
      choice_d: "5.5 soat",
      explanation: "Birga 2 soat: (1/6 + 1/8)×2 = (7/24)×2 = 7/12 bajarildi. Qolgan: 5/12. A yolg'iz: (5/12)/(1/6) = 2.5 soat. Jami = 4.5."
    },
    ru: {
      question_text: "Рабочий A в одиночку выполняет работу за 6 часов, B — за 8 часов. Они работают вместе 2 часа, затем A заканчивает один. Общее время?",
      choice_a: "4 часа",
      choice_b: "4.5 часа",
      choice_c: "5 часов",
      choice_d: "5.5 часа",
      explanation: "Вместе 2 ч: (1/6 + 1/8)×2 = (7/24)×2 = 7/12 выполнено. Остаток: 5/12. A один: (5/12)/(1/6) = 2.5 ч. Итого = 4.5."
    }
  },
  'PDA-H-058': {
    uz: {
      question_text: "Regressiya tenglamasi y = 2.5x + 10, r² = 0.64, standart xato = 5. Qaysi fikr noto'g'ri?",
      choice_a: "y dagi o'zgarishning 64% i x bilan tushuntiriladi",
      choice_b: "Qiyalik y x ning har birligida 2.5 ga oshishini bildiradi",
      choice_c: "Korrelyatsiya r = 0.8",
      choice_d: "y-kesimning mazmunli talqini yo'q",
      explanation: "y-kesim (10) kontekstga qarab mazmunli bo'lishi yoki bo'lmasligi mumkin. A, B, C fikrlar to'g'ri."
    },
    ru: {
      question_text: "Уравнение регрессии y = 2.5x + 10, r² = 0.64, стандартная ошибка = 5. Какое утверждение ложно?",
      choice_a: "64% вариации y объясняется x",
      choice_b: "Наклон показывает, что y растёт на 2.5 за единицу x",
      choice_c: "Корреляция r = 0.8",
      choice_d: "Точка пересечения с осью y не имеет смысловой интерпретации",
      explanation: "Точка пересечения (10) может иметь смысл в зависимости от контекста. Утверждения A, B, C верны."
    }
  },
  'PDA-H-059': {
    uz: {
      question_text: "So'rov ko'proq jismoniy mashq qiladiganlar yuqori daromadga ega ekanligini ko'rsatdi. Jismoniy mashq daromadga sabab bo'ladi deyish uchun nima kerak?",
      choice_a: "Kattaroq tanlov",
      choice_b: "Tasodifiy tajriba",
      choice_c: "Uzoqroq so'rov",
      choice_d: "Ko'proq demografik ma'lumotlar",
      explanation: "Sabab-oqibatni aniqlash uchun faqat korrelyatsiya emas, tasodifiy nazorat ostidagi tajriba kerak."
    },
    ru: {
      question_text: "Опрос показывает: люди с большей физической активностью имеют более высокие доходы. Чтобы утверждать, что упражнения вызывают высокий доход, нужно:",
      choice_a: "Большую выборку",
      choice_b: "Рандомизированный эксперимент",
      choice_c: "Более длительный опрос",
      choice_d: "Больше демографических данных",
      explanation: "Для установления причинно-следственной связи нужен рандомизированный контролируемый эксперимент, а не просто корреляция."
    }
  },
  'PDA-H-060': {
    uz: {
      question_text: "Do'kon $30 lik mahsulotlarda '2 ta ol, 1 ta bepul' taklif beradi. Mahsulot boshiga samarali foiz chegirma qancha?",
      choice_a: "25%",
      choice_b: "30%",
      choice_c: "33.33%",
      choice_d: "50%",
      explanation: "2 ta uchun to'lay, 3 ta olasan. $60 to'lab $90 qiymatidagi mahsulot olasan. Chegirma = 30/90 = 33.33%."
    },
    ru: {
      question_text: "Магазин предлагает акцию «купи 2, получи 1 бесплатно» на товары за $30. Какова эффективная процентная скидка на единицу товара?",
      choice_a: "25%",
      choice_b: "30%",
      choice_c: "33.33%",
      choice_d: "50%",
      explanation: "Платишь за 2, получаешь 3. Платишь $60 за товары стоимостью $90. Скидка = 30/90 = 33.33%."
    }
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
    explanation: 'Izoh',
    yourAnswer: 'Sizning javobingiz',
  },
  ru: {
    checkAnswer: 'Проверить ответ',
    nextQuestion: 'Следующий вопрос',
    correct: 'Правильно!',
    incorrect: 'Неправильно. Правильный ответ',
    enterAnswer: 'Введите числовой ответ ниже',
    placeholder: 'Введите ответ...',
    correctAnswer: 'Правильный ответ',
    explanation: 'Объяснение',
    yourAnswer: 'Ваш ответ',
  },
};

export function getTranslation(questionId, lang) {
  return TRANSLATIONS[questionId]?.[lang] || null;
}

export function getAvailableLanguages(questionId) {
  const entry = TRANSLATIONS[questionId];
  return entry ? Object.keys(entry) : [];
}
