import React, { useEffect, useState } from 'react'
import axios from 'axios';

import {  Link } from "react-router-dom";



export default function Freshcat() {
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
    <div className='toptxt'>
<center>
     <h1>Latest Products</h1>
     <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
     </center>
</div>

{fproduct.slice(0,1).map((a)=>(
     <div className='freshcon'>

     
       <div className='box a'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
       
       </div>
       <div className='piller1'>
        <ul>
         <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
         <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
         <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
         <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
         
        </ul>
       </div>
       <div className='txt'>
       <p><Link to="/Details1">Produxe Name1</Link></p>
       <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
       </div>
       </div>
       <div className='box b'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
         
         </div>
         <div className='piller1'>
          <ul>
           <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
           
          </ul>
         </div>
         <div className='txt'>
         <p><Link to="/Details1">Produxe Name1</Link></p>
         <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
         </div>
       </div>
       <div className='box c'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
         
         </div>
         <div className='piller1'>
          <ul>
           <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
           
          </ul>
         </div>
         <div className='txt'>
         <p><Link to="/Details1">Produxe Name1</Link></p>
         <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
         </div>
       </div>
       <div className='box d'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
         
         </div>
         <div className='piller1'>
          <ul>
           <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
           
          </ul>
         </div>
         <div className='txt'>
         <p><Link to="/Details1">Produxe Name1</Link></p>
         <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
         </div>
       </div>
       <div className='box e'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
         
         </div>
         <div className='piller1'>
          <ul>
           <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
           
          </ul>
         </div>
         <div className='txt'>
         <p><Link to="/Details1">Produxe Name1</Link></p>
         <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
         </div>
       </div>
       <div className='box f'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
         
         </div>
         <div className='piller1'>
          <ul>
           <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
           
          </ul>
         </div>
         <div className='txt'>
         <p><Link to="/Details1">Produxe Name1</Link></p>
         <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
         </div>
       </div>
       <div className='box g'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
         
         </div>
         <div className='piller1'>
          <ul>
           <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
           
          </ul>
         </div>
         <div className='txt'>
         <p><Link to="/Details1">Produxe Name1</Link></p>
         <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
         </div>
       </div>
       <div className='box h'>
       <div className='img'>
    
       <Link to="/Details1"><img src={a.thumbnail}/></Link>
         
         </div>
         <div className='piller1'>
          <ul>
           <li><a href=''><img className='icons' src='./img/heart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/cart.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/suffle.png'></img></a></li>
           <li><a href=''><img className='icons'  src='./img/srch.png'></img></a></li>
           
          </ul>
         </div>
         <div className='txt'>
         <p><Link to="/Details1">Produxe Name1</Link></p>
         <p className='price'><Link to="/Details1">Rs.500/-</Link></p>
         </div>
       </div>
     </div> 
     ))}
     <center><h5 className='btn butn'>Load More</h5></center>
    </>
  )
}
