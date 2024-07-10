import './Subtitle.scss';

function Subtitle({text, maxWidth}) {
  return (
    <h2 className='Subtitle' style={{maxWidth: maxWidth}}>{text}</h2>
  )
}

export default Subtitle