import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import ai from '../assets/icon/Logo.png';
import user from '../assets/icon/User.png';
import OneChatLogo from '../assets/Logo/OneChatLogo.png';



function ChatBox({convo}) {
  const chatref = useRef(null);
  useEffect(() => {
    if (chatref.current) {
      chatref.current.scrollTop = chatref.current.scrollHeight;
    }
  },[convo]);

  if (convo.length === 0) {
    return (
      <div className="welcome-box">
        <img src={OneChatLogo} width='90px' height='90px'/>
        <div className='welcome-text'>Welcome To One<span style={{color: '#4631b2'}}>Chat</span>!</div>
      </div>
    )
  } else {
    return (
      <div ref={chatref} className="chat">
        {convo.map(({sender,msg}) => (
          <div className={sender+`messagebox`}>
            {sender === 'user' || <div className="ai-logo"><img width="27px" src={ai} /></div>}
            <div className="msgtext" ><ReactMarkdown>{msg}</ReactMarkdown></div>
            {sender === 'assistant' || <div className="user-logo"><img width="35px" src={user} /></div>}
          </div>
        ))}
      </div>
    )
  }
}

export default ChatBox