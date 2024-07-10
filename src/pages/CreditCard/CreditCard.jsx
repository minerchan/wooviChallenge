import Cet from '../../components/Cet/Cet';
import FlexPrazo from '../../components/FlexPrazo/FlexPrazo';
import HowWork from '../../components/HowWork/HowWork';
import Identifier from '../../components/Identifier/Identifier';
import Logo from '../../components/Logo/Logo';
import PaymentSteps from '../../components/PaymentSteps/PaymentSteps';
import Subtitle from '../../components/Subtitle/Subtitle';
import './CreditCard.scss';

function CreditCard() {
  return (
    <div className='CreditCard'>
        <Logo/>
        <Subtitle text={"João, pague o restante em 1x no cartão"} maxWidth={"30rem"}/>
        <form>
            <fieldset className='fieldsetNormal'>
                <legend>Nome completo</legend>
                <input type="text" />
            </fieldset>
            <fieldset className='fieldsetNormal'>
                <legend>CPF</legend>
                <input type="number" />
            </fieldset>
            <fieldset className='fieldsetNormal'>
                <legend>Número do cartão</legend>
                <input type="number" />
            </fieldset>
            <div className='flexInput'>
                <fieldset className='fieldsetSlice'>
                    <legend>Vencimento</legend>
                    <input type="date" />
                </fieldset>
                <fieldset className='fieldsetSlice'>
                    <legend>CVV</legend>
                    <input type="number" />
                </fieldset>
            </div>
            <fieldset className='fieldsetNormal'>
                <legend>Parcelas</legend>
                <select>
                    <option value="1x de R$ 15.300,00">1x de R$ 15.300,00</option>
                    <option value="2x R$ 10.196,66">2x R$ 10.196,66</option>
                    <option value="3x R$ 7.725,00">3x R$ 7.725,00</option>
                    <option value="4x R$ 6.300,00">4x R$ 10.196,66</option>
                    <option value="5x R$ 5.283,33">5x R$ 5.283,33</option>
                    <option value="6x R$ 4.542,85">6x R$ 4.542,85</option>
                </select>
            </fieldset>
            <button>Pagar</button>
        </form>
        <FlexPrazo/>
        <PaymentSteps check={true}/>
        <Cet/>
        <HowWork/>
        <Identifier/>
    </div>
  )
}

export default CreditCard