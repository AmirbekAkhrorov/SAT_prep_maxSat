const API_BASE = '/api';

/**
 * Fetch sample questions for the landing page quiz demo.
 * @param {number} count - Number of questions to fetch (default: 4)
 * @returns {Promise<Array>} Array of questions
 */
export async function fetchSampleQuestions(count = 4) {
  const response = await fetch(`${API_BASE}/questions/sample/?count=${count}`);
  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }
  const data = await response.json();

  // Transform API response to match frontend format
  return data.map(transformQuestion);
}

/**
 * Fetch random questions for a quiz.
 * @param {Object} options - Filter options
 * @param {number} options.count - Number of questions
 * @param {string} options.difficulty - Difficulty level
 * @param {string} options.domain - Domain filter
 * @returns {Promise<Array>} Array of questions
 */
export async function fetchQuizQuestions({ count = 10, difficulty, domain } = {}) {
  const params = new URLSearchParams({ count: count.toString() });
  if (difficulty) params.append('difficulty', difficulty);
  if (domain) params.append('domain', domain);

  const response = await fetch(`${API_BASE}/questions/random/?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }
  const data = await response.json();

  return data.map(transformQuestion);
}

/**
 * Check an answer for a question.
 * @param {number} questionId - The question's database ID
 * @param {string} answer - The submitted answer
 * @returns {Promise<Object>} Result with correct answer and explanation
 */
export async function checkAnswer(questionId, answer) {
  const response = await fetch(`${API_BASE}/questions/${questionId}/check_answer/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answer }),
  });
  if (!response.ok) {
    throw new Error('Failed to check answer');
  }
  return response.json();
}

/**
 * Get question statistics.
 * @returns {Promise<Object>} Statistics about available questions
 */
export async function fetchQuestionStats() {
  const response = await fetch(`${API_BASE}/questions/stats/`);
  if (!response.ok) {
    throw new Error('Failed to fetch stats');
  }
  return response.json();
}

/**
 * Transform API question format to frontend format.
 * Maps the backend response to match the structure expected by InteractiveQuiz.
 */
function transformQuestion(apiQuestion) {
  // Map test type to frontend type
  const typeMap = {
    Math: 'math',
    'Reading and Writing': 'reading',
  };

  return {
    id: apiQuestion.id,
    questionId: apiQuestion.question_id,
    type: typeMap[apiQuestion.type] || 'math',
    difficulty: apiQuestion.difficulty,
    domain: apiQuestion.domain,
    skill: apiQuestion.skill,
    passage: apiQuestion.passage,
    question: apiQuestion.question_text,
    options: apiQuestion.options || [],
    // Note: correct_answer and explanation are not included in list view
    // They come from the check_answer endpoint or detail view
    correctAnswer: apiQuestion.correct_answer,
    explanation: apiQuestion.explanation,
  };
}
