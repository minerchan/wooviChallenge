import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import Footer from './components/Footer/Footer';
import Payment from './pages/Payment/Payment';
import CreditCard from './pages/CreditCard/CreditCard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaymentMethod/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/creditCard' element={<CreditCard/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App