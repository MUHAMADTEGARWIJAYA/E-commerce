import { useEffect } from 'react'
import LayoutProfile from './layout/LayoutProfile';
import DetailPages from './pages/DetailPages';
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


        <Route path="/profile" element={<LayoutProfile />}>
       

        </Route>


      </Routes>
  )
}

export default App
