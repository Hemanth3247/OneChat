import OneChatLogo from '../assets/Logo/OneChatLogo.png'

function Header() {
  return (
    <div className="header">
      <img src={OneChatLogo} className="logo" />
      <div className="heading">One<span style={{ color: '#4631B2' }}>Chat</span></div>
    </div>
  )
}

export default Header