import { useState } from 'react'
import Header from './Components/Header.jsx'
import InputBox from './Components/InputBox.jsx'
import ChatBox from './Components/ChatBox.jsx'
import AIModel from './Components/AIModel.jsx'
import './Components.css'


function App() {
  const [convo,setConvo] = useState([]);
  return (
    <>
      <Header setConvo={setConvo}/>
      <div className="conversation">
        <AIModel />
        <ChatBox convo={convo} />
        <InputBox setConvo={setConvo} convo={convo}/>
      </div>
    </>
  )
}

export default App