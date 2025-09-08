import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {Header} from './components'
import {Route, Routes} from "react-router-dom";
import { ProductList, ProductDetail } from './pages'

function App() {

  return (
    <>
        <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    </>
  )
}

export default App
