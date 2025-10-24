import { useState } from 'react'
import Header from './Components/Header.jsx'
import InputBox from './Components/InputBox.jsx'
import ChatBox from './Components/ChatBox.jsx'
import AIModel from './Components/AIModel.jsx'
import './Components.css'


function App() {
  const [convo,setConvo] = useState([
    {sender:'user',msg:'Hi there!'},{sender:'assistant',msg:'Hello how can i help u'},{sender:'user',msg:'I need assistance with my account.'},{sender:'assistant',msg:'sure if u want to maintain ur account learn or make a Fiattrckr APP'},{sender:'user',msg:'That would be great, thanks!'},{sender:'assistant',msg:'Youre welcome! Let me know if you have any other questions. i am here to help you. and assist you in your journey. and make your life easier. '},{sender:'user',msg:'What services do you offer?'},{sender:'assistant',msg:'We offer a wide range of services including account management, customer support, and financial tracking through our Fiattrckr APP.'},{sender:'user',msg:'How can I contact customer support?'},{sender:'assistant',msg:'...'},{sender:'user',msg:'Hi'}
  ]);
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