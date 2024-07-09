import React from "react";
import "./player_card.css";
import { Card } from "primereact/card";

const PlayerCard = () => {
  return (
    <>
      <div className="card_container">
        <Card title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </>
  );
};

export default PlayerCard;
