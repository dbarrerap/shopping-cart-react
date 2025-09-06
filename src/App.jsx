import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {Header, ProductList} from './components'

function App() {

  return (
    <>
        <Header />
        <div className="container">
            <ProductList />
        </div>
    </>
  )
}

export default App
