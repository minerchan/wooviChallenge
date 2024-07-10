import Logo from '../../components/Logo/Logo';
import Subtitle from '../../components/Subtitle/Subtitle';
import './Payment.scss';
import qrCode from '../../assets/qrCode.png';
import copy from '../../assets/copy.png';
import FlexPrazo from '../../components/FlexPrazo/FlexPrazo';
import Cet from '../../components/Cet/Cet';
import PaymentSteps from '../../components/PaymentSteps/PaymentSteps';
import HowWork from '../../components/HowWork/HowWork';
import Identifier from '../../components/Identifier/Identifier';

function Payment() {
  return (
    <div className='Payment'>
    <Logo/>
    <Subtitle text={"João, pague a entrada de R$ 15.300,00 pelo Pix"} maxWidth={"30rem"}/>
    <img src={qrCode} alt="qr code para pagamento" />
    <button className='buttonCopy'>
        <p>Clique para copiar QR CODE</p>
        <img src={copy} alt="Clique para copiar" />
    </button>
    <FlexPrazo/>
    <PaymentSteps/>
    <Cet total={"30.600,00"}/>
    <HowWork/>
    <Identifier/>
    </div>
  )
}

export default Payment