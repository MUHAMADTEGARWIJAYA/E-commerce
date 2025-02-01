import { useEffect } from 'react'

import { Route, Routes } from "react-router-dom";
import NavbarUtama from './view/NavbarUtama';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
      <Routes>

        <Route path="/" element={<NavbarUtama/>}/>
        <Route>
       

        </Route>


      </Routes>
  )
}

export default App
