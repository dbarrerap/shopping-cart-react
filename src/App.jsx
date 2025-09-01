import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {data} from './data.js'

import {Header, ProductList} from './components'

function App() {

  return (
    <>
        <Header />
        <div className="container">
            <ProductList products={data} />
        </div>
    </>
  )
}

export default App
