import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Viewuser from './componets/user/Viewuser';
import Edituser from './componets/user/Edituser';
import Adduser from './componets/user/Adduser';
import Navbar from './componets/layout/Navbar'
import Aboutpage from './componets/pages/Aboutpage'
import Home from './componets/pages/Home'
import Pagenotfound from './componets/pages/Pagenotfound';

const App = () => {
  return (
    <div >
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<Aboutpage/>}> </Route>
            <Route path='/users/add' element={<Adduser/>}></Route> 
            <Route path='users/edit/:userId' element={<Edituser/>}></Route> 
            <Route path='users/views/:userId' element={<Viewuser/>}></Route> 
            <Route path='*' element={<Pagenotfound/>}></Route> 
            

        </Routes>
        </BrowserRouter>
       
    </div>
    
 
  )
}

export default App