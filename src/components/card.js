import React from 'react';
import './card.css'; 
import grafic from  '../assets/img/gif/heart-rate.gif';

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <span></span>
          <h3>Attack Mode</h3>
          <div className="icons">
            <i className="fa-regular fa-square-check"></i>
            <i className="fa-regular fa-square"></i>
          </div>
          <div className="main-1">
            <h2>1° - 5" 134''</h2>
            <h2>2° - </h2>
          </div>
        </div>

        <div className="box">
          <h3>Potência do Motor</h3>
          <span></span>
          <h2>600 kW</h2>
          <p>Eixo Traseiro: 350 kW</p>
          <p>Eixo Frontal: 250 kW</p>
        </div>

        <div className="box">
          <span></span>
          <h3>Estado da Bateria</h3>
          <div className="main-3">
            <h2>62%</h2>
            <p>≅ 25 a 30 minutos</p>
          </div>
        </div>

        <div className="box">
          <span></span>
          <h3>Pit Stops</h3>
          <div className="main-4">
            <h2>1°</h2>
            <p>45" 12'</p>
            <h2>2°</h2>
            <p>-</p>
          </div>
        </div>
      </div>

    
      <div className="container">
        <div className="box">
          <span></span>
          <h3>Frequência Cardíaca</h3>
          <img src={grafic} alt="Frequência Cardíaca" />
          <div className="main-5">
            <p>180 bpm</p>
          </div>
        </div>

        <div className="box">
          <span></span>
          <h3>Oxigênio no Sangue</h3>
          <div className="main-6">
            <h2>92%</h2>
          </div>
        </div>

        <div className="box">
          <span></span>
          <h3>Temperatura do Carro</h3>
          <div className="main-7">
            <h2>52°C</h2>
          </div>
        </div>

        <div className="box">
          <span></span>
          <h3>Pilotos Próximos</h3>
          <div className="main-8">
            <h2>Frente</h2>
            <p>S. Fenestraz - Nissan e.dams</p>
            <h2>Atrás</h2>
            <p>N. Cassidy - Jaguar Racing</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
