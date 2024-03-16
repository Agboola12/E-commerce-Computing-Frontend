import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-white" id="home" >

                <a href="" className="navbar-brand">
                    <img src={logo} alt='jjkbd'  width='100px' className='ml-5'/>
                </a>
                <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="sab">
                    <ul className="navbar-nav list-line mx-auto text-center fw-bold fs-5">
                        <li className="nav-item active list-line-item mr-5 ">
                            <Link to="/dashboard" className="nav-link active text-center ">Home</Link>
                        </li>
                        <li className="nav-item dropdown list-line-item mr-5 " >
                            <Link to="/document" className="nav-link active text-center">Our Products </Link>
                        </li>
                        <li className="nav-item active list-line-item mr-5 ">
                            <Link to="/about" className="nav-link active text-center ">About Us</Link>
                        </li>
                        <li className="nav-item dropdown list-line-item mr-5 " >
                            <Link to="/document" className="nav-link active text-center">Contact </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar