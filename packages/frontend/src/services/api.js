// In dev this stays '/api' and Vite's proxy forwards to localhost:8000.
// In production set VITE_API_URL to the deployed API origin + /api, e.g.
// https://satprep-api.onrender.com/api — the frontend (Netlify) and the API
// (Render) are on different origins, so the relative path would 404.
//
// Calling the API directly rather than proxying through Netlify keeps the
// real client IP visible to Django; behind a proxy every anonymous user
// would share one IP and trip the rate limiter as a single bucket.
export const API_BASE = import.meta.env.VITE_API_URL || '/api';

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
 * Check a single answer via the public endpoint used by the landing-page demo.
 *
 * The sample/list endpoints deliberately omit correct_answer so the answer key
 * cannot be scraped, so the demo grades through here once the user finishes.
 *
 * @param {string} questionId - The question's public id, e.g. "ADV-E-001"
 * @param {string} answer - The submitted answer
 * @returns {Promise<Object>} { is_correct, correct_answer, explanation }
 */
export async function checkSampleAnswer(questionId, answer) {
  const response = await fetch(`${API_BASE}/check-answer/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question_id: questionId, answer }),
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
    // correct_answer/explanation are intentionally absent from the public
    // sample+list responses (they would expose the answer key). They stay
    // undefined here and get filled in from checkSampleAnswer() once the user
    // has actually submitted an answer.
    correctAnswer: apiQuestion.correct_answer,
    explanation: apiQuestion.explanation,
  };
}
