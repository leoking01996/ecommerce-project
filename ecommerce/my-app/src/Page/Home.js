import React from 'react'
import { Link } from 'react-router-dom'
import Featured from '../Comp/Featured'

import Slider from '../Comp/Slider'
import Catgrid from '../Comp/Catgrid'
import Freshcat from '../Comp/Freshcat'
import News from '../Comp/News'
import Owlcro2 from '../Comp/Owlcro2'
import Brand from '../Comp/Brand'







export default function Home() {
  return (
    <>
      <section className='home1'>
       <img src='./img/business.png' alt=''></img>
       <h1 className='txt'>Grow Your Business <br></br>With ALL IN ONE</h1>
       <h5 className='txt'>Open Online Store Now</h5>
       <h6 className='btn txt'>Singn Up</h6>
       <p className='txt'>Already a seller? <span><Link>Log in now</Link></span></p>
      </section>


      {/*----------------freatured--------------*/}

      <Featured/>
      
      

      {/*-----------slider----------*/}
     

     
      <Slider/>
    
      
{/*--------grid------------------*/}
<Catgrid/>

{/*---------fresg catodory-----------*/}

<Freshcat/>
{/*---------------------------------*/}

<News/>

{/*----------owlcar1--------------------------------------------*/}
     <Owlcro2/>
{/*------------Brand------------------------------------------------*/}
<Brand/>
    


      
      
    </>
  )
}
