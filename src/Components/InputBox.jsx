import { useState } from 'react';
import send from '../assets/icon/Send.png';


function InputBox({setConvo,convo}) {
  const [text,setText] = useState("");
  function sendtext() {
    if (text.trim() === "") {
      return;
    } else {
      setConvo(preconvo => [...preconvo,{sender:'user',msg:text}]);
      setText("");
    }
  }
  if (convo,length === 0) {
    return (
      <div className='inputbox-centre'>
        <textarea value={text} onChange={(e) => {
          setText(e.target.value)
        }} onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            sendtext();
          }
        }} type="text" placeholder="Ask Anything?" className="input" />
        <div className="inputbox-footer">
          <button className="send-button" onClick={sendtext}>
            <img className='send-arrow' src={send} />
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="inputbox-bottom">
        <textarea value={text} onChange={(e) => {
          setText(e.target.value)
        }} onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            sendtext();
          }
        }} type="text" placeholder="Ask Anything?" className="input" />
        <div className="inputbox-footer">
          <button className="send-button" onClick={sendtext}>
            <img className='send-arrow' src={send} />
          </button>
        </div>
      </div>
    )
  }
}

export default InputBox;