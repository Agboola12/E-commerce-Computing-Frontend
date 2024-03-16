import React from 'react'
import logo from '../assets/logo.jpg'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light " id="home" >

                <a href="" className="navbar-brand p-3">
                    <img src={logo} alt='jjkbd' className='w-50' />
                </a>
                <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="sab">
                    <ul className="navbar-nav list-line ml-auto">
                        <li className="nav-item active list-line-item mr-5 ">
                            <Link to="/dashboard" className="nav-link active text-center ">Dashboard</Link>
                        </li>
                        <li className="nav-item dropdown list-line-item mr-5 " >
                            <Link to="/document" className="nav-link active text-center">Document </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar