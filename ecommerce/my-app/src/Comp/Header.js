import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      

    <Routes>
    <Route path="/" element={<Home />} />
    
  </Routes>
    </>
  )
}

export default Header
