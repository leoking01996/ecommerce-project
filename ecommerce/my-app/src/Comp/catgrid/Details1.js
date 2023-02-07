import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Details1() {
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
    {fproduct.slice(0,1).map((a)=>(
   <div className="maincon">
   <div className='leftcon'>
   <div className='leftlft'><img src={a.thumbnail}/></div>
   <div className='leftrght'>
   <p className="title1"> {a.title}</p>
   <p className="price1">Rs: {a.price}/-</p>
   <p>Discount: {a.discountPercentage}%</p>
   <p>Rating: {a.rating} / 5</p>
   <p>Stock: {a.stock}</p>
   <p>Description: {a.description}</p>

   <div className="buttn">
   <p className="btn btn-secondary">Buy Now</p>
   <p className="btn btn-secondary">Add to Cart
   </p>
      </div>
   
   
   
   </div>
   </div>

   <div className='rightcon'>
 <div className="deivery deivery1">
 <div className='rightlft'><img src="./img/loc.png"></img></div>
 <div className='rightrght'><p>location</p></div>
 </div>

 <div className="deivery time1">
 <div className='rightlft'><img src="./img/del.png"></img></div>
 <div className='rightrght'><p>2 Days</p></div>
 </div>

 <div className="deivery price1">
 
 <div className='rightrght'><p>Dilivery charge: Rs: 50/-</p></div>
 </div>

 <div className="deivery time1">
 <div className='rightlft'><img src="./img/payment.png"></img></div>
 <div className='rightrght'><p>Cash on Delivery Available</p></div>
 </div>

 <div className="deivery returntime1">
 <div className='rightlft'><img src="./img/24-hours.png"></img></div>
 <div className='rightrght'><p>7 Days Returns</p></div>
 </div>
   </div>
   
   </div>
      ))}
    </>
  )
}

export default Details1

