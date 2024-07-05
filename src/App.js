import React from "react";
import "./App.css";
import Search from "./components/Search";
import ProjectsGrid from "./components/ProjectsGrid";

function App() {
  return (
    <>
      <div className="container">
        <div className="app_title">
          <h1>Coding Challenges</h1>
        </div>
        <Search />
        <>
        <ProjectsGrid />
        </>
      </div>
    </>
  );
}

export default App;
