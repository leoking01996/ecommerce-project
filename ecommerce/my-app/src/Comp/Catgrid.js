
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import {  Link } from "react-router-dom";



export default function Catgrid() {
  let [fproduct, setFproduct]=useState([])
  useEffect(()=>{
axios.get('https://dummyjson.com/products')
.then(res => {
  console.log(res.data.products);
  setFproduct(res.data.products);
});

  },[])
  return (
    

 

    <>
   <section className='catgrid1'>
   <center>
   <h1>Featured Category</h1>
   <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
   
  </center>
  {fproduct.slice(0,1).map((a)=>(
     <div className='gridcon'>
     <div className='box1 a'>
     <p>MEN</p>
     <img src={a.thumbnail}/>
       <div className='blackbox'></div>
       <p className='flipmen'><Link to="/Men">MEN</Link></p>
       
     </div>


     <div className='box1 b smallbox'>
     <p>ACCESSORIES</p>
     <img src={a.thumbnail}/>
     <div className='blackbox'></div>
     <p className='flipmen'>
     <Link to="/Accessories">ACCESSORIES</Link></p>
     </div>


     <div className='box1 c smallbox'>
     <p>FOOTWEAR</p>
     <img src={a.thumbnail}/>
     <div className='blackbox'></div>
     <p className='flipmen'><Link to="/Accessories">FOOTWEAR</Link></p>
     </div>


     <div className='box1 d smallbox'> <p>WATCH</p>
     <img src={a.thumbnail}/>
       <div className='blackbox'></div>
       <p className='flipmen'><Link to="/Watch">WATCH</Link></p>
       </div>


     <div className='box1 e smallbox'> <p>BEAUTY</p>
     <img src={a.thumbnail}/>
       <div className='blackbox'></div>
       <p className='flipmen'><Link to="/Beauty">BEAUTY</Link></p>
       </div>


     <div className='box1 f'>
     <p>WOMEN</p>
     <img src={a.thumbnail}/>
     <div className='blackbox'></div>
     <p className='flipmen'><Link to="/Women">WOMEN</Link></p>
     </div>
     
     </div>
     ))}
   </section>



  
    </>

    
  )
}
