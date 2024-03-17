import React from 'react'
import style from '../styles/Style.module.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (

        <div className='container-fluid mx-auto text-center p-5' id={style.footer}>
            <div className='row '>
                <div className='col-lg-3'>
                    <p>
                        <i className='fa fa-clock'></i><br />
                        -24/7 active

                    </p>
                </div>
                <div className='col-lg-3'>
                    <p>
                        <i className='fa fa-location-dot'></i><br />
                        103 North Loundon Street, <br />
                        Winchider, VA
                    </p>
                </div>
                <div className='col-lg-3'>
                    <h6 className="text-medium text-uppercase text-white"><i className='fa fa-envelope'></i></h6>
                    <ul className="list-unstyled">
                        <li><Link to="mailto:admin@victorycenter.org.uk" className="text-white text-decoration-none">admin@victorycenter.org.uk</Link></li>
                        <li><Link to="mailto:pastordoherty@victorycenter.org.uk" className="text-white text-decoration-none">pastordoherty@victorycenter.org.uk</Link></li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h6 className="text-medium text-uppercase text-white"><i className='fa fa-phone'></i></h6>
                    <ul className="list-unstyled">
                        <li><Link to="mailto:admin@victorycenter.org.uk" className="text-white text-decoration-none">admin@victorycenter.org.uk</Link></li>
                        <li onClick={() => handleMobileClick}> +2349070684164 </li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Footer