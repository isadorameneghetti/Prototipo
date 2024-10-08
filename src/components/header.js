import React from 'react';
import './header.css';
import logo from '../assets/img/logo/Mahindra.webp';


const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Mahindra" className="logo" />

      <nav className="navigation">
        <a href="#">Voltar</a>
        <a href="#">Mais Informações</a>
      </nav>

      <button className="bth">Login</button>
    </header>
  );
};

export default Header;
