import { useEffect } from 'react';

/**
 * StudentProfile Component
 * Displays student details and completed practice sessions.
 *
 * Props:
 *  - name        {string}  Student's name
 *  - department  {string}  Student's department
 *  - year        {string}  Student's year of study
 *  - practiceCount {number} Number of completed practice sessions
 *
 * Lifecycle (useEffect):
 *  - Sets document.title to reflect the current practice count.
 *  - Updates whenever practiceCount changes.
 *  - Returns a cleanup function that restores "Student Management System".
 */
function StudentProfile({ name, department, year, practiceCount }) {
  useEffect(() => {
    // Set document title to reflect current practice session count
    document.title = `Practice Sessions: ${practiceCount}`;

    // Cleanup: restore the original document title when component unmounts
    return () => {
      document.title = 'Student Management System';
    };
  }, [practiceCount]); // Re-run effect whenever practiceCount changes

  return (
    <div className="student-profile">
      <h2 className="profile-heading">Student Profile</h2>
      <div className="profile-card">
        <div className="profile-row">
          <span className="profile-label">Name:</span>
          <span className="profile-value">{name}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Department:</span>
          <span className="profile-value">{department}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Year:</span>
          <span className="profile-value">{year}</span>
        </div>
        <div className="profile-row sessions-row">
          <span className="profile-label">Practice Sessions Completed:</span>
          <span className="session-count">{practiceCount}</span>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
