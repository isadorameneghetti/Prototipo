import React from 'react';
import './block.css';

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="main-box">
        <div>
          <span></span>
          <h3>Posição</h3>
          <div className="text">
            <h2>16°</h2>
          </div>
        </div>
      </div>

      <div className="main-box">
        <span></span>
        <h3>FanBoost</h3>
        <div className="text">
          <h2>57</h2>
          <p>votos</p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
