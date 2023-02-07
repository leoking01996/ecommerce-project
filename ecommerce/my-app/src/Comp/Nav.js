import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      {/*-------------logo----------*/}
      <section className='nav1'>


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Link to="/"><img className='logo' src='./img/logo.png'></img></Link>
          <div className="container-fluid con">
            <form className="d-flex frm" role="search">
              <input className="form-control inp" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success botn" type="submit"><img src='./img/search.png'></img></button>
              <Link to="/"><img className='shopingcart' src='./img/sc.png'></img></Link>
              <img className='adv' src='./gif/adv.gif'></img>
            </form>






          </div>
        </nav>

      </section>

      <section className='nav2'>
      
        <div className='navleft'>
        <p><img src='./img/ls.png'></img>50% Off On Orders Above $100</p>
        </div>







      <div className='navright'>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid cont1">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse ulcon" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><Link to="/Home">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/Blog">Blog</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/Page">Page</Link></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/Contactus">Contact Us</Link>   <span>  </span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">CheckOut</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#"><Link to="/Menspagw">Mens</Link></a></li>
                  <li><a className="dropdown-item" href="#"><Link to="/Womenspage">Womens</Link></a></li>
                  <li><a className="dropdown-item" href="#"><Link to="/Childspage">For Kids</Link></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>

      </section>
    </>
  )
}

export default Nav
