import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='maincont'>

    <div className='maincont1'>
    
    <div className='box cate'>
    <h5>Categories</h5>
    <ul>
   <li><Link>Men</Link> </li>
   <li><Link>Women</Link></li>
   <li><Link>Accessories</Link></li>
   <li><Link>Footwear</Link></li>
   <li><Link>Watches</Link></li>
    </ul>
    </div>
    
    <div className='box cate'>
    <h5>Categories</h5>
    <ul>
   <li><Link>Men</Link> </li>
   <li><Link>Women</Link></li>
   <li><Link>Accessories</Link></li>
   <li><Link>Footwear</Link></li>
   <li><Link>Watches</Link></li>
    </ul>
    </div>

    <div className='box cate'>
    <h5>Useful Links</h5>
    <ul>
   <li><Link>Latest News</Link> </li>
   <li><Link>My Account</Link></li>
   <li><Link>Size Guide</Link></li>
   <li ><p className='btn btn-secondary'>Buy Now</p></li>
   
   <li ><p className='btn btn-secondary'>WordPress Bundle</p></li>
    </ul>
    </div>

    <div className='box cate'>
    <h5>Customer Service</h5>
    <ul>
   <li> Payment Methods</li>
   <li>Money-back guarantee!</li>
   <li>Returns & Shipping</li>
   <li>Terms and conditions</li>
   <li>Privacy Policy</li>
    </ul>
    </div>
    </div>

    <center><p className='copyright'>Copyright © 2021 eCommerce. All Right Reserved.</p></center>
    
    </div>

    
      
    </>
  )
}

export default Footer
