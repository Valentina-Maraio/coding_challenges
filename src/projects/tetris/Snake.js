import React from "react";
import "./snake.css";
import game_boy from "../../assets/game_boy.jpg";
import game from '../../assets/snake.mp4'

const Snake = () => {
  return (
    <>
      <div className="snake_container">
        <div className="screen">
            <div className="game">
              <video autoPlay muted loop id="video">
                <source src={game} type="video/mp4"/>
              </video>
            </div>
        </div>
        <img src={game_boy} alt="game boy" />
      </div>
    </>
  );
};

export default Snake;
