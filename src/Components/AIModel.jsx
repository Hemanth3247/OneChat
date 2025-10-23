import down from '../assets/icon/Down.png';


function AIModel() {
  return (
    <button className="model-button">
      <div className="AI-model">Optimum 4.0</div>
      <img className='down-arrow' src={down} />
    </button>
  )
}
export default AIModel