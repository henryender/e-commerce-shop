
import React ,{useEffect} from 'react'
import ProductPage from './components/ProductPage'
import Home from './components/Home'
import { Route, Routes, } from 'react-router-dom'
import Success from './pages/success'
import { StateContext } from './context/StateContext'


const App = () => {
 

  return (
    <>
      <StateContext>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='productpage/:id'
              element={<ProductPage />} />
              <Route path='/success' element={<Success/>}/>
          </Routes>

        </div>
      </StateContext>


    </>
  )
}
export default App





