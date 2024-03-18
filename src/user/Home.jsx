import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
                            <Link to="/dashboard" className="nav-link active text-center ">Home</Link>
                        </li>
                        <li className="nav-item dropdown list-line-item mr-5 " >
                            <Link to="/product" className="nav-link active text-center">Our Products </Link>
                        </li>
                        <li className="nav-item active list-line-item mr-5 ">
                            <Link to="/about" className="nav-link active text-center ">About Us</Link>
                        </li>
                        <li className="nav-item dropdown list-line-item mr-5 " >
                            <Link to="/document" className="nav-link active text-center">Contact </Link>
                        </li>
                        <li className="nav-item dropdown list-line-item mr-5 " >
                            <Link to="/review" className="nav-link active text-center">Product Review </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container'>
              <div>
                
              </div>
            </div>
        </div>
      </div>
    )
}

export default NavBar