import React from "react";
import Counter from "../projects/counter/Counter";
import "../styles/project_grid.css";
import TicTacToe from "../projects/tic_tac_toe/TicTacToe";
import Todo from "../projects/todo/Todo";
import Snake from "../projects/tetris/Snake";
import Player from "../projects/mp3player/Player";

const ProjectsGrid = () => {
  return (
    <>
      <div className="project_container">
        <div class="item item1">
          <Counter/>
        </div>
        <div class="item item2">2</div>
        <div class="item item3">3</div>
        <div class="item item4">4</div>
        <div class="item item5">
          <TicTacToe />
        </div>
        <div class="item item6">
          <Player/>
        </div>
        <div class="item item7">7</div>
        <div class="item item8">8</div>
        <div class="item item9">
          <Todo/>
        </div>
        <div class="item item10">
          <Snake />
        </div>
      </div>
    </>
  );
};

export default ProjectsGrid;
