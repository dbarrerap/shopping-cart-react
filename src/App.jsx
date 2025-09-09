import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {Header} from './components'
import {Route, Routes} from "react-router-dom";
import { ProductList, ProductDetail, CheckoutPage } from './pages'

function App() {

  return (
    <>
        <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </div>
    </>
  )
}

export default App
