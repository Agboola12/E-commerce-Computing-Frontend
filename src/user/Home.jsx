import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import style from '../styles/Style.module.css'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
      <div id={style.header}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <img src={logo} alt='jjkbd' width='80px' className='ml-5' />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fw-bold fs-5">
              <li className="nav-item active list-line-item mr-5 ">
                <Link to="/" className="nav-link active text-center ">Home</Link>
              </li>
              <li className="nav-item dropdown list-line-item mr-5 " >
                <Link to="/product" className="nav-link active text-center">Our Products </Link>
              </li>
              <li className="nav-item active list-line-item mr-5 ">
                <Link to="/about" className="nav-link active text-center ">About Us</Link>
              </li>
              <li className="nav-item dropdown list-line-item mr-5 " >
                <Link to="/contact" className="nav-link active text-center">Contact </Link>
              </li>
              <li className="nav-item dropdown list-line-item mr-5 " >
                <Link to="/review" className="nav-link active text-center">Product Review </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container mx-auto text-center' id={style.text}>
          <div className='row mx-auto text-center'>
            <div className='col-lg-3 mx-auto mt-3'>
              <div className='shadow-sm rounded-sm bg-white p-4'>
                <small className='fs-2 fw-bold'>Engineer</small><br />
                <small className=' fw-bold' style={{ fontSize: '3em' }}>Elijah</small>
              </div>
            </div>
            <div className='col-lg-3 mx-auto mt-3'>
              <div className='shadow-sm rounded-sm bg-white p-4'>
                <small className='fw-bold fs-3'>We Buy!</small><br />
                <small className='fw-bold fs-3'>We Sell!</small><br />
                <small className='fw-bold fs-3'>We Repair!</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid p-5 mb-5 text-center' id={style.service}>
          <p className='h2 fw-bold text-white'>Our Services</p>
          <div className='row text-dark'>
            <div className='col-lg-4 bg-white p-3 shadow-sm'>
                <p className='fw-bold h6'>We Buy</p>
                <p><i className='fa fa-phone'></i>Phone</p>
                <p><i className='fa fa-laptop'></i>Laptops</p>
                <p><i className='fa fa-gadgets'></i>Other Electronic Gadgets</p>
            </div>
            <div className='col-lg-4 bg-white p-3 shadow-sm'>
                <p className='fw-bold h6'>We Sell</p>
                <p><i className='fa fa-phone'></i>Phone</p>
                <p><i className='fa fa-laptop'></i>Laptops</p>
                <p><i className='fa fa-gadgets'></i>Other Electronic Gadgets</p>
            </div>
            <div className='col-lg-4 bg-white p-3 shadow-sm'>
                <p className='fw-bold h6'>We Repair</p>
                <p><i className='fa fa-phone'></i>Phone</p>
                <p><i className='fa fa-laptop'></i>Laptops</p>
                <p><i className='fa fa-gadgets'></i>Other Electronic Gadgets</p>
            </div>
          </div>


      </div>
      <Footer/>
    </div>
  )
}

export default Home