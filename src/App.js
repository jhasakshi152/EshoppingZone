import './App.css'
import NavBar from './Components/NavBar/Navigation'
import MainPage from './Components/HomePage/MainPage'
import DisplayContent from './Components/DisplayContent/DisplayContent'
import Footer from './Components/Footer/Footer'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder'
import Checkout from './Components/Checkout/Checkout'
import CartContextProvider from './Components/CartContext'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/login.component'
import SignUp from './Components/signup.component'

function App () {
  return (
    <Router>
      {/* <div className="App"> */}

      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/display' element={<DisplayContent />} />

          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<SignUp />} />

          <Route path='/order/:id' element={<PlaceOrder />} />

          <Route path='/checkout' element={<Checkout />} />

          <Route path='/' element={<MainPage />} />
        </Routes>
      </CartContextProvider>
      {/* </div> */}
      <Footer />
    </Router>
  )
}

export default App
