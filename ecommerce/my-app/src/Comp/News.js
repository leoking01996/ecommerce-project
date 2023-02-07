import React from 'react'

export default function News() {
  return (
    <>
      <section className='news'>
        <center>
        <h1>Latest News</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos</p>
        </center>

        <div className='connews'>
        
           <div className='box a'>
          <div className='date'>
          <p className='tags1'></p>
          <p className='tags2'><center>24<br></br><span>Nov</span></center></p>
          </div>
           <div className='smallbox1'>
           <img src='./img/nws1.png'></img>
           <div className='txt'>
           <p>by - developer <img src='./img/comment.png'></img>  <span>0</span></p>
           <p className='pbold'>At vero eos et accusamus et iusto odio dignissimos</p>
           <p className='plink'><a href=''>READ MORE </a></p>
           </div>
           </div></div>
           <div className='box b'>
           <div className='date'>
           <p className='tags1'></p>
           <p className='tags2'><center>24<br></br><span>Nov</span></center></p>
           </div>
           <div className='smallbox1'>
           <img src='./img/nws2.png'></img>
           <div className='txt'>
           <p>by - developer <img src='./img/comment.png'></img>  <span>0</span></p>
           <p className='pbold'>At vero eos et accusamus et iusto odio dignissimos</p>
           <p className='plink'><a href=''>READ MORE </a></p>
           </div>
           </div></div>
           <div className='box c'>
           <div className='date'>
           <p className='tags1'></p>
           <p className='tags2'><center>24<br></br><span>Nov</span></center></p>
           </div>
           <div className='smallbox1'>
           <img src='./img/nws3.png'></img>
           <div className='txt'>
           <p>by - developer <img src='./img/comment.png'></img>  <span>0</span></p>
           <p className='pbold'>At vero eos et accusamus et iusto odio dignissimos</p>
           <p className='plink'><a href=''>READ MORE </a></p>
           </div>
           </div></div>
        </div>
      </section>
    </>
  )
}
