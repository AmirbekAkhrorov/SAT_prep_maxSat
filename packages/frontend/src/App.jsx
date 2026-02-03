import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveQuiz from './components/InteractiveQuiz';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import Test from './pages/Test';
import TestSession from './pages/TestSession';
import TestResults from './pages/TestResults';
import Leaderboard from './pages/Leaderboard';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <InteractiveQuiz />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
        <Routes>
          {/* Landing page - accessible to everyone */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth pages - redirect to dashboard if logged in */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Protected routes - redirect to login if not authenticated */}
          <Route
            path="/cabinet"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cabinet/practice"
            element={
              <ProtectedRoute>
                <Practice />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cabinet/test"
            element={
              <ProtectedRoute>
                <Test />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cabinet/test/session/:sessionId"
            element={
              <ProtectedRoute>
                <TestSession />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cabinet/test/results/:sessionId"
            element={
              <ProtectedRoute>
                <TestResults />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cabinet/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
