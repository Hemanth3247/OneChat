import send from '../assets/icon/Send.png';



function InputBox() {
  return (
    <div className="inputbox">
      <textarea type="text" placeholder="Ask Anything?" className="input" />
      <div className="inputbox-footer">
        <button className="send-button">
          <img className='send-arrow' src={send} />
        </button>
      </div>
    </div>
  )
}

export default InputBox