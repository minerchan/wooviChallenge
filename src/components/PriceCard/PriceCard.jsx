import './PriceCard.scss';
import discountImg from '../../assets/discount.png';
import { useNavigate } from 'react-router-dom';

function PriceCard({discount, tag, span, cashback, price, spanPrice, total, marginTop, borderRadius}) {
  const navigate = useNavigate();
  
  return (
    <div className='PriceCard' style={{marginTop: marginTop ? marginTop : '0', borderRadius: borderRadius}}>
        <div className='priceFlex'>
            <h3>{price} <span className='price'>{spanPrice}</span></h3>
            {total ? <p className='total'>Total: R$ {total}</p> : null}
            {cashback ? <p className='cashback'>Ganhe <span className='percentual'>3%</span> de Cashback</p> : null}
        </div>
        {discount ? <div className='discount' style={{backgroundImage: `url(${discountImg})`}}>
            <p><span>{span}</span> {discount}</p> 
        </div> : null}
        
        <input type="radio" onClick={()=> navigate('/payment')}/>
        {tag ? <div className='tag'>{tag}</div> : null}
        
    </div>
  )
}

export default PriceCard