import down from '../assets/icon/Down.png';


function AIModel() {
  return (
    <button className="model-button">
      <div className="AI-model">GPT-OSS</div>
      <img className='down-arrow' src={down} />
    </button>
  )
}
export default AIModel;