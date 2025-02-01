import { useEffect } from 'react'
import ProductDetail from './pages/DetailProduk';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/produk" element={<ProductDetail />}/>
        <Route>
       

        </Route>


      </Routes>
  )
}

export default App
