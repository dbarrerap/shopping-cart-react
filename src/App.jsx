import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {Header, ProductList} from './components'
import {Route, Routes} from "react-router-dom";
import {ProductDetail} from "./components/ProductDetail.jsx";

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
