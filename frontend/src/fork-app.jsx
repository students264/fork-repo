import React, { useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css"; // Import styling

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <header className="app-header">
        <h1>Real-time Kanban Board</h1>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <KanbanBoard />
    </div>
  );
}

export default App;
