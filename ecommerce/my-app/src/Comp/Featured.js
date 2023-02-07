import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Timer from './Timer';
import { Link } from 'react-router-dom';





export default function Featured() {
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
      <div className='container py-4'>
      <h1 className='text-center'>Flash Sale</h1>
      <p className='text-center'> <span>On Sale Now </span> 
      Ending in</p><p id="demo"></p>
      <center><Timer/></center>

      <OwlCarousel className='owl-theme' loop margin={10} items={4} nav>
      {fproduct.map((a)=>(
        <div class='item'>
        <div className='pillercon'>
        <div className='piller'>
          <ul>
          <li><h1><a href=''><img src='./img/heart.png'/></a></h1></li>
          <li><h1><a href=''><img src='./img/cart.png'/></a></h1></li>
          <li><h1><a href=''><img src='./img/suffle.png'/></a></h1></li>
          <li><h1><a href=''><img src='./img/srch.png'/></a></h1></li>
          
          </ul>
        </div>
        </div>


       <div className='deacription'>
       <img src={a.thumbnail}/>
       <p className='py-2 px-2 title'><Link className='link-dark' to={`/details/${a.id}`}>{a.title}</Link></p>
      <p className='price py-1 px-2'>Rs.{a.price}</p>
      <p className='discountPercentage'><span>Discount: </span>{a.discountPercentage}%</p>
       </div>      

    </div>
    

      ))}
 
    
    
</OwlCarousel>
      
      </div>

      

      
    </>
  )
}
