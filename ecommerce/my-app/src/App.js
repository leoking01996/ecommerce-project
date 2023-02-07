

import './Style.scss';
import Top from './Comp/Top';
import Nav from './Comp/Nav';
import Home from './Page/Home';
import {Route, Routes } from 'react-router-dom';
import Men from './Comp/catgrid/Men';
import Accessories from './Comp/catgrid/Accessories';
import Footware from './Comp/catgrid/Footware';
import Watch from './Comp/catgrid/Watch';
import Beauty from './Comp/catgrid/Beauty';
import Women from './Comp/catgrid/Women';
import Footer from './Comp/Footer';
import Blog from './Comp/nav/Blog';
import Page from './Comp/nav/Page';

import Contactus from './Comp/nav/Contactus';
import Menspagw from './Comp/nav/Menspagw';
import Womenspage from './Comp/nav/Womenspage';
import Childspage from './Comp/nav/Childspage';
import Sailer from './Comp/top/Sailer';
import Customercare from './Comp/top/Customercare';
import Trackmyorder from './Comp/top/Trackmyorder';
import Login from './Comp/top/Login';
import Signup from './Comp/top/Signup';
import Language from './Comp/top/Language';
import Saveonapp from './Comp/top/Saveonapp';
import Details1 from './Comp/catgrid/Details1';






function App() {
  return (
    <>
    <Top/>
    <Nav/>
   
   
   <Routes>
   <Route path="/" element={<Home/>} />
    <Route path="/Men" element={<Men/>} />
    <Route path="/Accessories" element={<Accessories/>} />
    <Route path="/Footware" element={<Footware/>} />
    <Route path="/Watch" element={<Watch/>} />
    <Route path="/Beauty" element={<Beauty/>} />
    <Route path="/Women" element={<Women/>} />
    <Route path="/Home" element={<Home/>} />
    <Route path="/Blog" element={<Blog/>} />
    <Route path="/Page" element={<Page/>} />
    <Route path="/Contactus" element={<Contactus/>} />
    <Route path="/Menspagw" element={<Menspagw/>} />
    <Route path="/Womenspage" element={<Womenspage/>} />
    <Route path="/Childspage" element={<Childspage/>} />
    <Route path="/Sailer" element={<Sailer/>} />
    <Route path="/Customercare" element={<Customercare/>} />
    <Route path="/Trackmyorder" element={<Trackmyorder/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/Language" element={<Language/>} />
    <Route path="/Saveonapp" element={<Saveonapp/>} />
    <Route path="/Details1" element={<Details1/>} />
   </Routes>
    <Footer/>
    </>
  );
}

export default App;
