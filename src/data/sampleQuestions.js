export const sampleQuestions = [
  {
    id: 1,
    type: 'math',
    difficulty: 'medium',
    question: 'If 3x + 7 = 22, what is the value of 6x + 14?',
    options: [
      { id: 'A', text: '30' },
      { id: 'B', text: '37' },
      { id: 'C', text: '44' },
      { id: 'D', text: '51' },
    ],
    correctAnswer: 'C',
    explanation: 'First, solve for x: 3x + 7 = 22, so 3x = 15, and x = 5. Notice that 6x + 14 = 2(3x + 7) = 2(22) = 44. This is a strategic approach that saves time!',
  },
  {
    id: 2,
    type: 'reading',
    difficulty: 'medium',
    passage: '"The aurora borealis, commonly known as the northern lights, occurs when charged particles from the sun interact with gases in Earth\'s atmosphere. These collisions produce spectacular displays of light that have fascinated humans for millennia."',
    question: 'Based on the passage, the aurora borealis is primarily caused by:',
    options: [
      { id: 'A', text: 'Reflected moonlight on ice crystals' },
      { id: 'B', text: 'Solar particles colliding with atmospheric gases' },
      { id: 'C', text: 'Volcanic activity beneath the Arctic' },
      { id: 'D', text: 'Electrical storms in the upper atmosphere' },
    ],
    correctAnswer: 'B',
    explanation: 'The passage directly states that the aurora occurs "when charged particles from the sun interact with gases in Earth\'s atmosphere." This makes B the correct answer.',
  },
  {
    id: 3,
    type: 'math',
    difficulty: 'hard',
    question: 'A circle has a radius of 5 units. If a square is inscribed within the circle, what is the area of the square?',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '50' },
      { id: 'C', text: '75' },
      { id: 'D', text: '100' },
    ],
    correctAnswer: 'B',
    explanation: 'When a square is inscribed in a circle, the diagonal of the square equals the diameter of the circle. Here, the diameter is 10. Using the relationship: diagonal = side × √2, we get side = 10/√2 = 5√2. Area = (5√2)² = 50.',
  },
  {
    id: 4,
    type: 'writing',
    difficulty: 'easy',
    question: 'Choose the option that best corrects the underlined portion: "The team of researchers were excited about their discovery."',
    options: [
      { id: 'A', text: 'were excited about their' },
      { id: 'B', text: 'was excited about their' },
      { id: 'C', text: 'were excited about its' },
      { id: 'D', text: 'was excited about its' },
    ],
    correctAnswer: 'D',
    explanation: 'The subject is "team" (singular), so the verb should be "was" (singular). The pronoun should also be "its" to agree with the singular collective noun "team."',
  },
];

export const questionTypes = {
  math: { label: 'Math', color: 'blue', icon: 'Calculator' },
  reading: { label: 'Reading', color: 'purple', icon: 'BookOpen' },
  writing: { label: 'Writing', color: 'green', icon: 'PenTool' },
};

export const difficultyLevels = {
  easy: { label: 'Easy', color: 'sage' },
  medium: { label: 'Medium', color: 'gold' },
  hard: { label: 'Hard', color: 'coral' },
};
