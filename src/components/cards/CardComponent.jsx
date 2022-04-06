import React from "react";
import "./card.css";

const CardComponent = () => {
  return (
    <div>
      <div className="cardContainer">
        <div className="gridContainer">
          <div className="cardBox">
            {" "}
            <div className="topContainer">
              <h5 className="header">Number 1</h5>

              <h2 className="number">#100</h2>
            </div>
            <div className="estContainer">
              <div>EST.REVENUE</div>
              <div>$120,000</div>
            </div>
          </div>
        </div>
        <div className="gridContainer">
          <div className="cardBox">
            {" "}
            <div className="topContainer">
              <h5 className="header">Number 2</h5>
              <h2 className="number">#10</h2>
            </div>
            <div className="estContainer">
              <div>EST.REVENUE</div>
              <div>$120,000</div>
            </div>
          </div>
        </div>
        <div className="gridContainer">
          <div className="cardBox">
            {" "}
            <div className="topContainer">
              <h5 className="header">Number 3</h5>
              <h2 className="number">#1</h2>
            </div>
            <div className="estContainer">
              <div>EST.REVENUE</div>
              <div>$120,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
