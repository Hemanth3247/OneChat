import React from 'react';
import OneChatLogo from '../assets/Logo/OneChatLogo.png';
import Delete from '../assets/icon/Delete.png';

function Header({setConvo}) {
  function clearchat() {
    setConvo([]);
  }
  return (
    <div className="header">
      <img src={OneChatLogo} className="logo" />
      <div className="heading">One<span style={{ color: '#4631B2' }}>Chat</span></div>
      <div className="intermediate"></div>
      <button className="chat-reset" onClick={clearchat}><img src={Delete} alt='clearchat' width="30px" height="30px" /></button>
    </div>
  );
}

export default Header;
