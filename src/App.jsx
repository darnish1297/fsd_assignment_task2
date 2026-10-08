import { useState } from 'react';
import Header from './components/Header';
import StudentProfile from './components/StudentProfile';
import Footer from './components/Footer';
import './App.css';

/**
 * App Component — Root of the Student Practice Tracker
 *
 * State:
 *  - practiceCount  {number}  Tracks completed practice sessions (starts at 0)
 *  - showProfile    {boolean} Toggles StudentProfile visibility (starts true)
 *
 * Student details are passed as props to StudentProfile.
 */
function App() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  // ── Student data (passed as props) ─────────────────────────────────────────
  const student = {
    name: 'Anu',
    department: 'CSE',
    year: '3rd Year',
  };

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleCompletePractice = () => setPracticeCount((prev) => prev + 1);
  const handleReset = () => setPracticeCount(0);
  const handleToggleProfile = () => setShowProfile((prev) => !prev);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="app-container">
      {/* ── Header ── */}
      <Header />

      {/* ── Main content ── */}
      <main className="app-main">
        {/* Show/Hide Profile toggle button */}
        <div className="toggle-section">
          <button
            className={`btn btn-toggle ${showProfile ? 'btn-hide' : 'btn-show'}`}
            onClick={handleToggleProfile}
          >
            {showProfile ? 'Hide Profile' : 'Show Profile'}
          </button>
        </div>

        {/* Conditionally render StudentProfile — count preserved in App state */}
        {showProfile && (
          <StudentProfile
            name={student.name}
            department={student.department}
            year={student.year}
            practiceCount={practiceCount}
          />
        )}

        {/* Practice session controls */}
        <div className="controls">
          <button
            className="btn btn-complete"
            onClick={handleCompletePractice}
          >
            ✅ Complete Practice
          </button>
          <button
            className="btn btn-reset"
            onClick={handleReset}
          >
            🔄 Reset
          </button>
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

export default App;
