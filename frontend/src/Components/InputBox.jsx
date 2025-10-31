import { useState } from 'react';
import send from '../assets/icon/Send.png';


function InputBox({setConvo,convo}) {
  const [text,setText] = useState("");
  async function sendtext() {
    if (text.trim() === "") {
      return;
    } else {
      setConvo(preconvo => [...preconvo,{sender:'user',msg:text}]);
      setText("");
      const serverresp = await transmit([...convo,{sender:'user',msg:text}]);
      setConvo(preconvo => [...preconvo,{sender:"assistant",msg:serverresp}]);
    }
  }

  async function transmit(chat) {
  const cerchat = chat.map(con => ({
    "role": con.sender, 
    "content": con.msg
  }));
  try {
    const response = await fetch("https://apicall-k7f3.onrender.com/chat",{
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(cerchat)
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
  }


  }
  if (convo.length === 0) {
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
