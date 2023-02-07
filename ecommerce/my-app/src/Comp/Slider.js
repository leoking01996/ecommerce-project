import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Slider() {
  return (
    <>
  <section className='slider1 my-4 py-4'>
  <center>
  <h1>Fresh Category</h1>
  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
  
 </center>

 <OwlCarousel className='owl-theme' loop margin={10}  items={1} nav>
 <div class='item'>
     
     <div className='container '>
         <div className='imgleft'><img src='https://www.ovationthemes.com/demos/storefront-ecommerce-shop/wp-content/themes/storefront-ecommerce-shop/assets/images/slide/slider2.jpg'></img></div>
         <div className='txtright'><h1>Discover Men's<br></br><span>Latest Fashion</span> 
         </h1>

         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.

         </p>
         <p className='btn '>Shop Now</p>
         </div>
     </div>
     
 </div>

 
 <div class='item'>
 <div className='container '>
 <div className='imgleft'><img src='https://www.ovationthemes.com/demos/storefront-ecommerce-shop/wp-content/themes/storefront-ecommerce-shop/assets/images/slide/slider2.jpg'></img></div>
 <div className='txtright'><h1>Discover Men's<br></br><span>Latest Fashion</span> 
 </h1>

 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.

 </p>
 <p className='btn '>Shop Now</p>
 </div>
</div>
 </div>
 <div class='item'>
 <div className='container '>
 <div className='imgleft'><img src='https://www.ovationthemes.com/demos/storefront-ecommerce-shop/wp-content/themes/storefront-ecommerce-shop/assets/images/slide/slider2.jpg'></img></div>
 <div className='txtright'><h1>Discover Men's<br></br><span>Latest Fashion</span> 
 </h1>

 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.

 </p>
 <p className='btn '>Shop Now</p>
 </div>
</div>
 </div>
 </OwlCarousel>;
  </section>

    
    </>
  )
}
