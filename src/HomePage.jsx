import React from 'react';
import './HomePage.css'; // Link to the CSS file

const HomePage = () => {
  return (
        <div className="homepage">
  <div className="user-info">
    <div className="avatar">
      <img src="path/to/avatar.jpg" alt="User Avatar" />
    </div>
    <div className="username">Username</div>
    <div className="level">Level: 5</div>
  </div>
  
  <div className="top-section">
    {/* Existing content */}
  </div>

      {/* Middle Section: Daily Tasks */}
      <div className="tasks-section">
        <h2>Today's Tasks</h2>
        <div className="task-card">
          <p>🏋️ Workout for 30 minutes</p>
          <button>Complete</button>
        </div>
        <div className="task-card">
          <p>💧 Drink 8 glasses of water</p>
          <button>Complete</button>
        </div>
        <div className="task-card">
          <p>🧘 Meditate for 10 minutes</p>
          <button>Complete</button>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="challenges-section">
        <h2>Weekly Challenge</h2>
        <div className="challenge-card">
          <p>Complete a 3-day streak for 50 bonus XP!</p>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="stats-section">
        <h2>Quick Stats</h2>
        <div className="stats">
          <div className="stat-item">
            <p>👟 5,000 Steps</p>
          </div>
          <div className="stat-item">
            <p>🔥 300 Calories Burned</p>
          </div>
          <div className="stat-item">
            <p>🧘 15 min Meditation</p>
          </div>
        </div>
      </div>
{/* Bottom Navigation Bar */}
<div className="bottom-nav">
  <div className="nav-item" data-icon="🏠">Home</div>
  <div className="nav-item" data-icon="👤">Profile</div>
  <div className="nav-item" data-icon="🛒">Store</div>
  <div className="nav-item" data-icon="🏆">Leaderboard</div>
  <div className="nav-item" data-icon="⚙️">Settings</div>
</div>

    </div>
  );
};

export default HomePage;
