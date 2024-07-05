import React from "react";
import Counter from '../projects/counter/Counter'
import "../styles/project_grid.css";

const ProjectsGrid = () => {
  return (
    <>
      <div className="project_container">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  );
};

export default ProjectsGrid;
