import './PaymentSteps.scss';

function PaymentSteps() {
  return (
    <section className='PaymentSteps'>
        <div className='flexPaymentSteps stepMargin'>
            <h4>1ª entrada no Pix</h4>
            <span>R$ 15.300,00</span>
        </div>
        <div className='flexPaymentSteps'>
            <h4>2ª no cartão</h4>
            <span>R$ 15.300,00</span>
        </div>
        <div className='steps'>
            <div className='circle green'></div>
            <div className='line'></div>
            <div className='circle white'></div>
        </div>
    </section>
  )
}

export default PaymentSteps