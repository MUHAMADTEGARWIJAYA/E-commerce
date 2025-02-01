import { useEffect } from 'react'
import LayoutProfile from './layout/LayoutProfile';
import DetailPages from './pages/DetailPages';
import UserProfile from './components/UserProfile';
import CheckoutProduk from './components/CheckoutProduk';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/produk" element={<DetailPages />}/>
        <Route path="/checkout" element={<CheckoutProduk/>}/>

        <Route path="/profile" element={<LayoutProfile />}>
        <Route path="user" element={<UserProfile />}/>

        </Route>


      </Routes>
  )
}

export default App
