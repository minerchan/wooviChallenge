import Logo from "../../components/Logo/Logo"
import PriceCard from "../../components/PriceCard/PriceCard"
import Subtitle from "../../components/Subtitle/Subtitle"
import "./PaymentMethod.scss";

function PaymentMethod() {

  
  return (
    <div>
        <Logo/>
        <Subtitle text={"João, como você quer pagar?"}/>
        <PriceCard price={"1x"} spanPrice={"R$ 30.500,00"} cashback={true} tag={"Pix"} span={"🤑 R$ 300,00"} discount={"de volta no seu Pix na hora"} marginTop={"3rem"} borderRadius={"0"}/>
        <PriceCard price={"2x"} spanPrice={"R$ 15.300,00"} tag={"Pix Parcelado"} total={"30.600,00"} marginTop={"3.6rem"} borderRadius={"1rem 1rem 0 0"}/>
        <PriceCard price={"3x"} spanPrice={"R$ 10.196,66"} total={"30.620,00"} borderRadius={"0"}/>
        <PriceCard price={"4x"} spanPrice={"R$ 7.725,00"} total={"30.900,00"} span={"-3% de juros:"} discount={"Melhor opção de parcelamento"} borderRadius={"0"}/>
        <PriceCard price={"5x"} spanPrice={"R$ 6.300,00"} total={"31.500,00"} borderRadius={"0"}/>
        <PriceCard price={"6x"} spanPrice={"R$ 5.283,33"} total={"31.699,98"} borderRadius={"0"}/>
        <PriceCard price={"7x"} spanPrice={"R$ 4.542,85"} total={"31.800,00"} borderRadius={"0"}/>
    </div>
  )
}
 
export default PaymentMethod