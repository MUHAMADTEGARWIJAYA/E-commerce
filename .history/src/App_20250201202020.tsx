import { useEffect } from 'react'
import LayoutProfile from './layout/LayoutProfile';
import DetailPages from './pages/DetailPages';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import CheckoutPage from './pages/CheckoutPages';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/detail/:id" element={<DetailPages />}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>

        <Route path="/profile" element={<LayoutProfile />}>
        <Route path="user" element={<UserProfile />}/>

        </Route>


      </Routes>
  )
}

export default App
