import ai from '../assets/icon/Logo.png';
import user from '../assets/icon/User.png';


function ChatBox({convo}) {
  return (
    <div className="chat">
      {convo.map(({sender,msg}) => (
        <div className={sender+`messagebox`}>
          {sender === 'user' || <div className="ai-logo"><img width="27px" src={ai} /></div>}
          <div className="msgtext">{msg}</div>
          {sender === 'ai' || <div className="user-logo"><img width="35px" src={user} /></div>}
        </div>
      ))}
    </div>
  )
}

export default ChatBox