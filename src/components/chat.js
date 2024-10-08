import React from 'react';
import './chat.css';
import people1 from "../assets/img/people/user.jpeg";
import people2 from "../assets/img/people/user.jpg";
import people3 from "../assets/img/people/user.webp";

const Chat = () => {
  return (
    <div className="chat">
      
      <div className="chat-header">
        <h2>Chat</h2>
      </div>

    
      <ul className="chatbox">
        <li className="chat incoming">
          <img src={people1} alt="Usuário" />
          <p>Como ele ainda está nessa posição?</p>
        </li>
        <li className="chat incoming">
          <img src={people2} alt="Usuário" />
          <p>Eu não sei</p>
        </li>
        <li className="chat incoming">
          <img src={people3} alt="Usuário" />
          <p>Acelera!</p>
        </li>
      </ul>
      <div className="chat-input">
        <textarea placeholder="Faça login para enviar mensagens"></textarea>
      </div>
    </div>
  );
};

export default Chat;
