import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Upload as UploadIcon, Plus, Trash2, ArrowLeft, ArrowRight, Check, AlertCircle, ChevronDown, FileText, X } from 'lucide-react';

const DOMAINS = [
  { value: 'Algebra', label: 'Algebra' },
  { value: 'Advanced Math', label: 'Advanced Math' },
  { value: 'Geometry and Trigonometry', label: 'Geometry & Trigonometry' },
  { value: 'Problem-Solving and Data Analysis', label: 'Problem Solving & Data' },
];

const DIFFICULTIES = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

const EMPTY_QUESTION = {
  question_text: '',
  choice_a: '',
  choice_b: '',
  choice_c: '',
  choice_d: '',
  correct_answer: '',
  domain: '',
  difficulty: '',
  explanation: '',
};

export default function UploadPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = localStorage.getItem('token');
  const [step, setStep] = useState(searchParams.get('mode') === 'pdf' ? 'pdf' : 'entry'); // 'entry' | 'pdf' | 'review' | 'done'
  const [questions, setQuestions] = useState([{ ...EMPTY_QUESTION }]);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfParsing, setPdfParsing] = useState(false);
  const [pdfInfo, setPdfInfo] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const dragCounterRef = useRef(0);

  const updateQuestion = (index, field, value) => {
    setQuestions(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addQuestion = () => {
    setQuestions(prev => [...prev, { ...EMPTY_QUESTION }]);
  };

  const removeQuestion = (index) => {
    if (questions.length === 1) return;
    setQuestions(prev => prev.filter((_, i) => i !== index));
  };

  const isQuestionValid = (q) => {
    return q.question_text && q.choice_a && q.choice_b && q.choice_c && q.choice_d && q.correct_answer && q.domain && q.difficulty;
  };

  const allValid = questions.every(isQuestionValid);

  const handleReview = () => {
    if (!allValid) {
      setError('Please fill in all required fields for every question.');
      return;
    }
    setError('');
    setStep('review');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep('entry');
    window.scrollTo(0, 0);
  };

  const handlePdfSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed.');
      e.target.value = '';
      return;
    }

    setError('');
    setPdfFile(file);
  };

  const handlePdfUpload = async () => {
    if (!pdfFile) return;
    setPdfParsing(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', pdfFile);

      const res = await fetch('/api/questions/upload-pdf/', {
        method: 'POST',
        headers: { Authorization: `Token ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to parse PDF');
      }

      // PDF parsed successfully — load extracted questions into entry form
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions.map(q => ({
          question_text: q.question_text || '',
          choice_a: q.choice_a || '',
          choice_b: q.choice_b || '',
          choice_c: q.choice_c || '',
          choice_d: q.choice_d || '',
          correct_answer: q.correct_answer || '',
          domain: q.domain || '',
          difficulty: q.difficulty || '',
          explanation: q.explanation || '',
        })));

        // Build info message
        let info = `Extracted ${data.questions.length} multiple-choice question${data.questions.length !== 1 ? 's' : ''}.`;
        if (data.free_response_count > 0) {
          info += ` (${data.free_response_count} free-response question${data.free_response_count !== 1 ? 's' : ''} skipped)`;
        }
        info += ' Please review, assign domain/difficulty, and select correct answers.';
        setError('');
        setPdfInfo(info);
        setStep('entry');
        window.scrollTo(0, 0);
      } else {
        throw new Error('No questions could be extracted from this PDF. It may only contain free-response questions.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setPdfParsing(false);
    }
  };

  const clearPdf = () => {
    setPdfFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current += 1;
    if (e.dataTransfer.items?.length > 0) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current -= 1;
    if (dragCounterRef.current === 0) setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounterRef.current = 0;

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setError('Only PDF files are allowed.');
      return;
    }

    setError('');
    setPdfFile(file);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/questions/upload/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ questions }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setResult(data);
      setStep('done');
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // === DONE STEP ===
  if (step === 'done') {
    return (
      <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
        <header className="bg-white dark:bg-navy-900 shadow-card">
          <div className="container-wide mx-auto px-6 py-6 flex items-center justify-between">
            <Link to="/cabinet" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                <span className="font-display font-black text-sm leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
              </div>
              <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                max<span className="text-gold-500 dark:text-gold-400 font-black">SAT</span>
              </span>
            </Link>
          </div>
        </header>

        <main className="container-narrow mx-auto px-6 py-16 text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="font-display text-3xl text-navy-900 dark:text-cream-100 mb-4">
            Questions Uploaded!
          </h1>
          <p className="font-body text-lg text-navy-600 dark:text-cream-300 mb-2">
            {result?.created || 0} questions added successfully.
          </p>
          {result?.errors?.length > 0 && (
            <p className="font-body text-sm text-coral-600 dark:text-coral-400 mb-4">
              {result.errors.length} question(s) had errors and were skipped.
            </p>
          )}
          <p className="font-body text-navy-500 dark:text-navy-400 mb-8">
            These questions are now labeled as "NEW" in the practice and test sections.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => { setQuestions([{ ...EMPTY_QUESTION }]); setStep('entry'); setResult(null); }}
              className="btn-secondary"
            >
              Upload More
            </button>
            <Link to="/cabinet" className="btn-primary">
              Back to Dashboard
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // === REVIEW STEP ===
  if (step === 'review') {
    return (
      <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
        <header className="bg-white dark:bg-navy-900 shadow-card">
          <div className="container-wide mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={handleBack} className="p-2 hover:bg-cream-200 dark:hover:bg-navy-800 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-navy-600 dark:text-cream-300" />
              </button>
              <h1 className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                Review Questions ({questions.length})
              </h1>
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="btn-gold disabled:opacity-50"
            >
              {submitting ? 'Uploading...' : 'Confirm & Upload'}
              {!submitting && <Check className="w-5 h-5 ml-2" />}
            </button>
          </div>
        </header>

        <main className="container-wide mx-auto px-6 py-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-navy-900 dark:bg-navy-800 rounded-lg flex items-center justify-center font-display text-sm font-bold text-cream-100">
                      {i + 1}
                    </span>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-cream-200 dark:bg-navy-700 rounded-full font-sans text-xs text-navy-700 dark:text-cream-300">
                        {DOMAINS.find(d => d.value === q.domain)?.label || q.domain}
                      </span>
                      <span className={`px-2 py-1 rounded-full font-sans text-xs ${
                        q.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        q.difficulty === 'medium' ? 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-400' :
                        'bg-coral-100 text-coral-700 dark:bg-coral-900/30 dark:text-coral-400'
                      }`}>
                        {q.difficulty}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => { removeQuestion(i); }} className="p-1 text-navy-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="font-body text-navy-900 dark:text-cream-100 mb-4 whitespace-pre-wrap">{q.question_text}</p>

                <div className="grid grid-cols-2 gap-3">
                  {['A', 'B', 'C', 'D'].map(letter => (
                    <div
                      key={letter}
                      className={`p-3 rounded-xl border text-sm font-sans ${
                        q.correct_answer === letter
                          ? 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium'
                          : 'border-cream-300 dark:border-navy-700 text-navy-700 dark:text-cream-300'
                      }`}
                    >
                      <span className="font-bold mr-2">{letter}.</span>
                      {q[`choice_${letter.toLowerCase()}`]}
                    </div>
                  ))}
                </div>

                {q.explanation && (
                  <div className="mt-4 p-3 bg-cream-50 dark:bg-navy-800 rounded-xl">
                    <p className="font-sans text-xs text-navy-500 dark:text-navy-400 mb-1 font-medium">Explanation</p>
                    <p className="font-body text-sm text-navy-700 dark:text-cream-300">{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // === PDF UPLOAD STEP ===
  if (step === 'pdf') {
    return (
      <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
        <header className="bg-white dark:bg-navy-900 shadow-card">
          <div className="container-wide mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/cabinet" className="p-2 hover:bg-cream-200 dark:hover:bg-navy-800 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-navy-600 dark:text-cream-300" />
              </Link>
              <h1 className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                Upload PDF
              </h1>
            </div>
            <button
              onClick={() => { setStep('entry'); setError(''); }}
              className="font-sans text-sm text-navy-500 dark:text-navy-400 hover:text-navy-700 dark:hover:text-cream-300 transition-colors"
            >
              Switch to Manual Entry
            </button>
          </div>
        </header>

        <main className="container-narrow mx-auto px-6 py-16">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-gold-600 dark:text-gold-400" />
            </div>
            <h2 className="font-display text-2xl text-navy-900 dark:text-cream-100 mb-2">
              Upload Exam PDF
            </h2>
            <p className="font-sans text-sm text-navy-500 dark:text-navy-400 mb-8 max-w-md mx-auto">
              Select a PDF file containing SAT exam questions. The system will extract and parse the questions for your review.
            </p>

            {!pdfFile ? (
              <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handlePdfSelect}
                  className="hidden"
                  id="pdf-upload"
                />
                <label
                  htmlFor="pdf-upload"
                  className={`flex flex-col items-center gap-4 px-8 py-10 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                    isDragging
                      ? 'border-gold-500 bg-gold-50 dark:bg-gold-900/20 scale-[1.02]'
                      : 'border-cream-300 dark:border-navy-600 hover:border-gold-400 dark:hover:border-gold-500 hover:bg-cream-50 dark:hover:bg-navy-800'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isDragging ? 'bg-gold-100 dark:bg-gold-900/30' : 'bg-cream-200 dark:bg-navy-700'
                  }`}>
                    <UploadIcon className={`w-6 h-6 transition-colors ${isDragging ? 'text-gold-600 dark:text-gold-400' : 'text-navy-400'}`} />
                  </div>
                  <div>
                    <span className={`font-sans font-medium transition-colors ${
                      isDragging ? 'text-gold-600 dark:text-gold-400' : 'text-navy-600 dark:text-cream-300'
                    }`}>
                      {isDragging ? 'Drop PDF here' : 'Drag & drop PDF here'}
                    </span>
                    <p className="font-sans text-xs text-navy-400 dark:text-navy-500 mt-1.5">
                      or click to browse files
                    </p>
                  </div>
                </label>
                <p className="font-sans text-xs text-navy-400 dark:text-navy-500 mt-3">
                  Only .pdf files are accepted
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-cream-100 dark:bg-navy-800 rounded-xl mb-6">
                  <FileText className="w-5 h-5 text-gold-500" />
                  <span className="font-sans text-sm font-medium text-navy-700 dark:text-cream-300">
                    {pdfFile.name}
                  </span>
                  <span className="font-sans text-xs text-navy-400">
                    ({(pdfFile.size / 1024).toFixed(0)} KB)
                  </span>
                  <button
                    onClick={clearPdf}
                    className="p-1 text-navy-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex gap-3 justify-center">
                  <button onClick={clearPdf} className="btn-secondary">
                    Change File
                  </button>
                  <button
                    onClick={handlePdfUpload}
                    disabled={pdfParsing}
                    className="btn-gold disabled:opacity-50"
                  >
                    {pdfParsing ? (
                      <>
                        <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin mr-2" />
                        Parsing...
                      </>
                    ) : (
                      <>
                        Upload & Parse
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  // === ENTRY STEP ===
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-navy-950">
      <header className="bg-white dark:bg-navy-900 shadow-card sticky top-0 z-30">
        <div className="container-wide mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/cabinet" className="p-2 hover:bg-cream-200 dark:hover:bg-navy-800 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-navy-600 dark:text-cream-300" />
            </Link>
            <div>
              <h1 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-100">
                Upload Exam Questions
              </h1>
              <p className="font-sans text-xs text-navy-500 dark:text-navy-400">
                {questions.length} question{questions.length !== 1 ? 's' : ''} entered
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setStep('pdf'); setError(''); }}
              className="font-sans text-sm text-navy-500 dark:text-navy-400 hover:text-navy-700 dark:hover:text-cream-300 transition-colors hidden sm:block"
            >
              Upload PDF instead
            </button>
            <button onClick={handleReview} disabled={!allValid} className="btn-gold disabled:opacity-40">
              Review All
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </header>

      <main className="container-wide mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-300">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {pdfInfo && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3 text-blue-700 dark:text-blue-300">
              <FileText className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{pdfInfo}</p>
            </div>
            <button onClick={() => setPdfInfo('')} className="text-blue-400 hover:text-blue-600 ml-3">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="space-y-6">
          {questions.map((q, i) => (
            <div key={i} className="card p-6">
              {/* Question header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-navy-900 dark:bg-navy-800 rounded-lg flex items-center justify-center font-display text-sm font-bold text-cream-100">
                    {i + 1}
                  </span>
                  <span className="font-sans text-sm font-medium text-navy-700 dark:text-cream-300">Question {i + 1}</span>
                </div>
                {questions.length > 1 && (
                  <button onClick={() => removeQuestion(i)} className="p-2 text-navy-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Domain + Difficulty row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block font-sans text-xs font-medium text-navy-600 dark:text-cream-300 mb-1.5">Domain *</label>
                  <div className="relative">
                    <select
                      value={q.domain}
                      onChange={(e) => updateQuestion(i, 'domain', e.target.value)}
                      className="w-full px-3 py-2.5 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 text-sm appearance-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select domain</option>
                      {DOMAINS.map(d => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-xs font-medium text-navy-600 dark:text-cream-300 mb-1.5">Difficulty *</label>
                  <div className="relative">
                    <select
                      value={q.difficulty}
                      onChange={(e) => updateQuestion(i, 'difficulty', e.target.value)}
                      className="w-full px-3 py-2.5 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 text-sm appearance-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select difficulty</option>
                      {DIFFICULTIES.map(d => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Question text */}
              <div className="mb-5">
                <label className="block font-sans text-xs font-medium text-navy-600 dark:text-cream-300 mb-1.5">Question Text *</label>
                <textarea
                  value={q.question_text}
                  onChange={(e) => updateQuestion(i, 'question_text', e.target.value)}
                  rows={3}
                  placeholder="Enter the question text..."
                  className="w-full px-3 py-2.5 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 text-sm placeholder-navy-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Options A-D */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {['A', 'B', 'C', 'D'].map(letter => (
                  <div key={letter}>
                    <label className="block font-sans text-xs font-medium text-navy-600 dark:text-cream-300 mb-1.5">Option {letter} *</label>
                    <input
                      type="text"
                      value={q[`choice_${letter.toLowerCase()}`]}
                      onChange={(e) => updateQuestion(i, `choice_${letter.toLowerCase()}`, e.target.value)}
                      placeholder={`Option ${letter}`}
                      className="w-full px-3 py-2.5 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 text-sm placeholder-navy-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>

              {/* Correct answer */}
              <div className="mb-5">
                <label className="block font-sans text-xs font-medium text-navy-600 dark:text-cream-300 mb-1.5">Correct Answer *</label>
                <div className="flex gap-3">
                  {['A', 'B', 'C', 'D'].map(letter => (
                    <button
                      key={letter}
                      type="button"
                      onClick={() => updateQuestion(i, 'correct_answer', letter)}
                      className={`w-12 h-12 rounded-xl font-display font-bold text-lg transition-all ${
                        q.correct_answer === letter
                          ? 'bg-green-500 text-white shadow-md scale-105'
                          : 'bg-cream-200 dark:bg-navy-700 text-navy-600 dark:text-cream-300 hover:bg-cream-300 dark:hover:bg-navy-600'
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explanation (optional) */}
              <div>
                <label className="block font-sans text-xs font-medium text-navy-600 dark:text-cream-300 mb-1.5">
                  Explanation <span className="text-navy-400">(optional)</span>
                </label>
                <textarea
                  value={q.explanation}
                  onChange={(e) => updateQuestion(i, 'explanation', e.target.value)}
                  rows={2}
                  placeholder="Explain why this answer is correct..."
                  className="w-full px-3 py-2.5 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 text-sm placeholder-navy-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          ))}

          {/* Add question button */}
          <button
            onClick={addQuestion}
            className="w-full py-4 border-2 border-dashed border-cream-300 dark:border-navy-700 rounded-2xl text-navy-500 dark:text-navy-400 hover:border-gold-400 hover:text-gold-600 dark:hover:border-gold-500 dark:hover:text-gold-400 transition-colors flex items-center justify-center gap-2 font-sans font-medium"
          >
            <Plus className="w-5 h-5" />
            Add Question
          </button>
        </div>
      </main>
    </div>
  );
}
