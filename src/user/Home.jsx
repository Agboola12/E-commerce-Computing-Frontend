import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import style from '../styles/Style.module.css'
import Footer from './Footer'
import product from '../assets/product.png'
import ProductNav from './ProductNav'



const Home = () => {
  return (
    <div>
      <div id={style.header}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <img src={logo} alt='jjkbd' width='80px' className='ml-5' />
          <button className="navbar-toggler bg-white btn-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fw-bold fs-5">
              <li className="nav-item active list-line-item mr-5 ">
                <Link to="/" className="nav-link active text-center text-white">Home</Link>
              </li>
              <li className="nav-item dropdown list-line-item mr-5 " >
                <Link to="/product" className="nav-link active text-center text-white">Our Products </Link>
              </li>
              <li className="nav-item active list-line-item mr-5 ">
                <Link to="/about" className="nav-link active text-center  text-white">About Us</Link>
              </li>
              {/* <li className="nav-item dropdown list-line-item mr-5 " >
                <Link to="/contact" className="nav-link active text-center text-white">Contact </Link>
              </li> */}
              <li className="nav-item dropdown list-line-item mr-5 " >
                <Link to="/review" className="nav-link active text-center text-white">Product Review </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container mx-auto text-center' id={style.text}>
          <div className='row mx-auto text-center'>
            <div className='col-lg-3 mx-auto mt-3' >
              <div className='shadow-sm bg-white p-4' style={{borderRadius:'30px'}}>
                <small className='fs-2 fw-bold'>Engineer</small><br />
                <small className=' fw-bold' style={{ fontSize: '3em' }}>Elijah</small>
              </div>
            </div>
            <div className='col-lg-3 mx-auto mt-3' >
              <div className='shadow-sm bg-white p-4' style={{borderRadius:'30px'}}>
                <small className='fw-bold fs-3'>We Buy!</small><br />
                <small className='fw-bold fs-3'>We Sell!</small><br />
                <small className='fw-bold fs-3'>We Repair!</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid p-5 mb-5' id={style.service}>

          <p className='h2 fw-bold text-white text-center mb-5'>Our Services</p>
          <div className='row text-dark'>
            <div className='col-lg-3 mx-auto mt-3'>
              <div className='bg-white p-4 shadow-sm' style={{borderRadius:'20px'}}>
                <p className='fw-bold fs-5 text-center ' style={{color:'#1B4579'}}>We Buy</p>
                <p><i className='fa fa-phone mr-4'></i>Phone</p>
                <p><i className='fa fa-laptop mr-4'></i>Laptops</p>
                <p><i className='fa fa-gadgets mr-4'></i>Other Electronic Gadgets</p>
              </div>
            </div>
            <div className='col-lg-3 mx-auto mt-3'>
              <div className='bg-white p-4 shadow-sm' style={{borderRadius:'20px'}}>
                <p className='fw-bold fs-5 text-center ' style={{color:'#1B4579'}}>We Sell</p>
                <p><i className='fa fa-phone mr-4'></i>Phone</p>
                <p><i className='fa fa-laptop mr-4'></i>Laptops</p>
                <p><i className='fa fa-gadgets mr-4'></i>Other Electronic Gadgets</p>
              </div>
            </div>
            <div className='col-lg-3 mx-auto mt-3'>
              <div className='bg-white p-4 shadow-sm' style={{borderRadius:'20px'}}>
                <p className='fw-bold fs-5 text-center ' style={{color:'#1B4579'}}>We Repair</p>
                <p><i className='fa fa-phone mr-4'></i>Phone</p>
                <p><i className='fa fa-laptop mr-4'></i>Laptops</p>
                <p><i className='fa fa-gadgets mr-4'></i>Other Electronic Gadgets</p>
              </div>
            </div>
          </div>
      </div>

      <div className='container'>
        <p className='fs-1 fw-bold'>FEATURED PRODUCTS</p>
                <ProductNav />
      <div className='row text-center mt-4 mb-5' id='home'>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <Link to="/product-detail" className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4" style={{ backgroundColor: '#1C7C68' }}>View Button</Link>
                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{ backgroundColor: '#1C7C68' }}>View Button</button>

                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{ backgroundColor: '#1C7C68' }}>View Button</button>
                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{ backgroundColor: '#1C7C68' }}>View Button</button>
                        </div>
                    </div>
                    <Link to="/product" className='ml-auto text-right mt-3 text-decoration-none text-dark' style={{cursor:'pointer'}}>View More</Link>
                    </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home