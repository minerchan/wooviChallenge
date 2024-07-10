import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaymentMethod/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App