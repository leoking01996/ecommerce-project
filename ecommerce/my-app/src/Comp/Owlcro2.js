import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Owlcro2() {
  return (
    
    <section>

    <center><h1>What Our Clients Say</h1>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
    </p>
    
    <div className='headcon1'>
    <OwlCarousel className='owl-theme main1' loop margin={10} items={1} nav>
    <div class='item'>
      <center> <img className='pic1' src='./img/client1.jpg'></img></center>
      <p className='name1'>Name Cast</p>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
    </div>
    <div class='item'>
      <center> <img className='pic1' src='./img/client1.jpg'></img></center>
      <p className='name1'>Name Cast</p>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
    </div>
    <div class='item'>
      <center> <img className='pic1' src='./img/client1.jpg'></img></center>
      <p className='name1'>Name Cast</p>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
    </div>
    </OwlCarousel>
    </div>

    </center>
    </section>
  )
}
