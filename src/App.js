import React from "react";
import "./App.css";
import ProjectsGrid from "./components/ProjectsGrid";

function App() {
  return (
    <>
      <div className="container">
        <div className="app_title">
          <h1>Coding Challenges</h1>
        </div>
        <ProjectsGrid />
      </div>
    </>
  );
}

export default App;
