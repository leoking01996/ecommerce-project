import React from 'react'

import { Routes, Route, Link } from "react-router-dom";
import Home from '../Page/Home';


function Top() {
  return (
    <>
      <section>
        <div className='tp'>

          <ul>
            <li><Link className='special' to="/Saveonapp">SAVE MORE ON APP</Link></li>

            <li><Link to="/Sailer">SELL ON ALL IN ONE</Link> </li>
            <li><Link to="/Customercare">CUSTOMER CARE</Link></li>
            <li><Link to="/Trackmyorder">TRACK MY ORDER</Link></li>

            <li><Link to="/Login">LOGIN</Link> </li>
            <li><Link to="/Signup">SIGN UP</Link></li>
            <li><Link to="/Language"> भाषा परिवर्तन    <span></span></Link></li>
          </ul>


        </div>
      </section>


      <Routes>
       {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />*/}
      </Routes>
    </>
  )
}

export default Top
